import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// The email address that receives all contact form submissions
const RECEIVER_EMAIL = process.env.CONTACT_RECEIVER_EMAIL || 'PriyankaNitin.ag200@gmail.com';

// The "from" address — must be a verified domain in Resend, or use onboarding@resend.dev for testing
const SENDER_EMAIL = process.env.CONTACT_SENDER_EMAIL || 'Inner Insights <no-reply@innerinsights.net>';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // ── Validation ──────────────────────────────────────────────────────────
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // ── Send notification email to Inner Insights ───────────────────────────
    const { data, error } = await resend.emails.send({
      from: SENDER_EMAIL,
      to: [RECEIVER_EMAIL],
      replyTo: email,
      subject: `New Booking Request: ${service} — ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #faf9f7; border-radius: 12px; overflow: hidden;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #7c3aed, #a855f7); padding: 32px 24px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 600;">
              ✨ New Consultation Request
            </h1>
            <p style="color: #e9d5ff; margin: 8px 0 0; font-size: 14px;">
              Received from the Inner Insights website
            </p>
          </div>

          <!-- Body -->
          <div style="padding: 28px 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e8e5e0; color: #78716c; font-size: 13px; width: 140px; vertical-align: top;">
                  Full Name
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e8e5e0; color: #1c1917; font-size: 15px; font-weight: 500;">
                  ${escapeHtml(name)}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e8e5e0; color: #78716c; font-size: 13px; vertical-align: top;">
                  Email
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e8e5e0; color: #1c1917; font-size: 15px;">
                  <a href="mailto:${escapeHtml(email)}" style="color: #7c3aed; text-decoration: none;">
                    ${escapeHtml(email)}
                  </a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e8e5e0; color: #78716c; font-size: 13px; vertical-align: top;">
                  Phone / WhatsApp
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e8e5e0; color: #1c1917; font-size: 15px;">
                  <a href="tel:${escapeHtml(phone)}" style="color: #7c3aed; text-decoration: none;">
                    ${escapeHtml(phone)}
                  </a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e8e5e0; color: #78716c; font-size: 13px; vertical-align: top;">
                  Service Requested
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e8e5e0; color: #1c1917; font-size: 15px; font-weight: 500;">
                  ${escapeHtml(service)}
                </td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 12px 0; color: #78716c; font-size: 13px; vertical-align: top;">
                  Message / DOB
                </td>
                <td style="padding: 12px 0; color: #1c1917; font-size: 15px; line-height: 1.6;">
                  ${escapeHtml(message)}
                </td>
              </tr>
              ` : ''}
            </table>

            <!-- Quick Action -->
            <div style="margin-top: 24px; text-align: center;">
              <a
                href="https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(name)}%2C%20thank%20you%20for%20reaching%20out%20to%20Inner%20Insights!"
                style="display: inline-block; background: #25d366; color: #fff; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 600;"
              >
                💬 Reply on WhatsApp
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="background: #f5f3f0; padding: 16px 24px; text-align: center; border-top: 1px solid #e8e5e0;">
            <p style="margin: 0; color: #a8a29e; font-size: 12px;">
              This is an automated email from the Inner Insights contact form.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: 'Failed to send your message. Please try again or contact us directly.' },
        { status: 500 }
      );
    }

    // ── Send confirmation email to the client ───────────────────────────────
    try {
      await resend.emails.send({
        from: SENDER_EMAIL,
        to: [email],
        subject: `We received your booking request — Inner Insights`,
        html: `
          <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #faf9f7; border-radius: 12px; overflow: hidden;">
            <div style="background: linear-gradient(135deg, #7c3aed, #a855f7); padding: 32px 24px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 600;">
                Thank You, ${escapeHtml(name)}! ✨
              </h1>
            </div>
            <div style="padding: 28px 24px; color: #1c1917; font-size: 15px; line-height: 1.7;">
              <p>We have received your consultation request for <strong>${escapeHtml(service)}</strong>.</p>
              <p>Priyanka Agrawal or a member of the Inner Insights team will connect with you on <strong>WhatsApp/Phone within 24 hours</strong> to confirm your slot and share pricing details.</p>
              <p>If you have any urgent queries, feel free to reach us directly:</p>
              <ul style="padding-left: 20px; color: #44403c;">
                <li>📞 <a href="tel:+919152172369" style="color: #7c3aed;">+91 91521 72369</a></li>
                <li>💬 <a href="https://wa.me/919152172369" style="color: #7c3aed;">WhatsApp Chat</a></li>
              </ul>
              <p style="margin-top: 24px;">With gratitude,<br/><strong>Inner Insights Team</strong></p>
            </div>
            <div style="background: #f5f3f0; padding: 16px 24px; text-align: center; border-top: 1px solid #e8e5e0;">
              <p style="margin: 0; color: #a8a29e; font-size: 12px;">
                Inner Insights — Numerology, Graphology & Mokshapatam by Priyanka Agrawal
              </p>
            </div>
          </div>
        `,
      });
    } catch (confirmErr) {
      // Non-critical: don't fail the whole request if confirmation email fails
      console.error('Confirmation email failed:', confirmErr);
    }

    return NextResponse.json(
      { success: true, message: 'Your booking request has been sent successfully!' },
      { status: 200 }
    );

  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}

// ── Utility: prevent XSS in HTML email templates ──────────────────────────────
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
