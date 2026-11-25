import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !fromEmail || !toEmail) {
    return NextResponse.json(
      { error: "メール送信の設定が完了していません。" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "必須項目が入力されていません。" },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: `ふとんのやまもり お問合せ <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `【HPお問合せ】${subject}（${name}様）`,
      text: [
        "ホームページから新しいお問い合わせがありました。",
        "",
        `■ お名前：${name}`,
        `■ メールアドレス：${email}`,
        `■ お電話番号：${phone || "未入力"}`,
        `■ ご用件：${subject}`,
        "",
        "■ お問い合わせ内容：",
        message,
      ].join("\n"),
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "メールの送信に失敗しました。" },
      { status: 500 }
    );
  }
}
