import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "shayan@digitalkhan.dev";
// Override with FROM_EMAIL in .env.local if needed
const FROM_EMAIL = process.env.FROM_EMAIL ?? "shayan@digitalkhan.dev";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body as {
      name?: string;
      email?: string;
      message?: string;
    };

    const nameStr = typeof name === "string" ? name.trim() || "—" : "—";
    const emailStr = typeof email === "string" ? email.trim() || "—" : "—";
    const messageStr =
      typeof message === "string" ? message.trim() || "—" : "—";

    const subject = `New enquiry from ${nameStr} via digitalkhan.dev`;
    const text = [
      `Name: ${nameStr}`,
      `Email: ${emailStr}`,
      ``,
      `Message:`,
      messageStr,
    ].join("\n");

    const { data, error } = await resend.emails.send({
      from: `Digital Khan Contact <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: emailStr !== "—" ? emailStr : undefined,
      subject,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: error.message ?? "Failed to send email" },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
