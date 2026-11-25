import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header"; // ← 1. 追加

export const metadata: Metadata = {
  title: "西川チェーン｜ふとんのやまもり｜千葉県船橋市高根台の寝具専門店",
  description:
    "千葉県船橋市高根台の寝具専門店「ふとんのやまもり」。昭和42年創業・60周年の実績で、羽毛ふとん・オーダーメイドまくら・マットレス選びから、打ち直し・羽毛リフォームまで快眠をトータルサポートします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header /> {/* ← 2. ここに配置 */}
        <main>{children}</main>
      </body>
    </html>
  );
}
