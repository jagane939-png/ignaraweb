import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, interest, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Ignara AI Website <no-reply@ignara.ai>",
      to: "jagan@ignara.ai",
      replyTo: email,
      subject: `New message from ${name}${interest ? ` — ${interest}` : ""}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#070d1a;padding:32px;border-radius:12px;margin-bottom:24px;">
            <h1 style="color:#fff;font-size:20px;margin:0 0 4px;">New message via ignara.ai</h1>
            <p style="color:rgba(255,255,255,0.4);font-size:13px;margin:0;">${new Date().toUTCString()}</p>
          </div>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr><td style="padding:12px 0;border-bottom:1px solid #eee;color:#666;font-size:13px;width:120px;">Name</td><td style="padding:12px 0;border-bottom:1px solid #eee;font-size:14px;font-weight:500;">${name}</td></tr>
            <tr><td style="padding:12px 0;border-bottom:1px solid #eee;color:#666;font-size:13px;">Email</td><td style="padding:12px 0;border-bottom:1px solid #eee;font-size:14px;"><a href="mailto:${email}" style="color:#2563eb;">${email}</a></td></tr>
            ${interest ? `<tr><td style="padding:12px 0;border-bottom:1px solid #eee;color:#666;font-size:13px;">Topic</td><td style="padding:12px 0;border-bottom:1px solid #eee;font-size:14px;">${interest}</td></tr>` : ""}
          </table>
          <div style="background:#f8f9fb;padding:20px;border-radius:8px;margin-bottom:24px;">
            <p style="color:#666;font-size:12px;margin:0 0 8px;text-transform:uppercase;letter-spacing:0.08em;">Message</p>
            <p style="color:#111;font-size:15px;line-height:1.6;margin:0;white-space:pre-wrap;">${message}</p>
          </div>
          <p style="color:#999;font-size:12px;text-align:center;">Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
