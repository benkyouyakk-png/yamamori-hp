"use client";

import { useState } from "react";
import { Phone, Clock, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("オーダーメイドまくらの相談・予約");
  const [message, setMessage] = useState("");

  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, subject, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "送信中にエラーが発生しました。");
      }

      setSubmitted(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "送信に失敗しました。時間をおいて再度お試しください。"
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="w-full bg-white">
      {/* 1. ページ大見出し帯 */}
      <div className="w-full bg-[#F7F7F7] py-6 sm:py-8 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-medium text-stone-700 tracking-[0.25em] mb-2">
          お問合せ・アクセス
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 tracking-[0.15em]">
          Contact &amp; Access
        </p>
      </div>

      <div className="max-w-4xl mx-auto py-14 sm:py-20 px-4 space-y-20 sm:space-y-24">
        {/* 2. お電話でのお問い合わせ */}
        <section className="text-center">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-medium text-stone-700 tracking-[0.2em] mb-4">
              お電話でのお問合せ
            </h2>
            <div className="w-16 h-[2px] bg-[#CBB994] mx-auto" />
          </div>

          <p className="text-stone-700 text-xs sm:text-sm leading-loose mb-8">
            まくらの測定ご予約や、寝具に関するご相談はお電話でも承っております。
            <br className="hidden sm:inline" />
            どうぞお気軽にお問い合わせください。
          </p>

          <div className="bg-[#FBF6EB] border border-[#E5DEC9] rounded-xl py-8 px-6 max-w-xl mx-auto">
            <p className="text-xs text-[#8C7548] font-medium tracking-wider mb-2">
              ふとんのやまもり お客様窓口
            </p>
            <a
              href="tel:047-466-2131"
              className="inline-flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold text-[#7A6338] tracking-wider hover:opacity-80 transition-opacity"
            >
              <Phone className="w-6 h-6 text-[#9E875B]" />
              <span>047-466-2131</span>
            </a>
            <p className="text-xs text-stone-600 mt-3 flex items-center justify-center gap-1.5">
              <Clock className="w-4 h-4 text-[#9E875B]" />
              <span>営業時間：10:00〜17:00（定休日：水曜日）</span>
            </p>
          </div>
        </section>

        {/* 3. フォームでのお問い合わせ */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl font-medium text-stone-700 tracking-[0.2em] mb-4">
              メールフォームでのお問合せ
            </h2>
            <div className="w-16 h-[2px] bg-[#CBB994] mx-auto" />
          </div>

          {submitted ? (
            <div className="bg-[#FBF6EB] border border-[#CBB994] rounded-xl p-10 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#8C7548] mx-auto" />
              <h3 className="text-lg sm:text-xl font-medium text-[#7A6338]">
                お問い合わせを受け付けました
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                ご連絡いただきありがとうございます。内容を確認のうえ、担当者より折り返しご連絡いたします。
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 inline-block text-xs text-[#8C7548] underline hover:opacity-80"
              >
                入力画面に戻る
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-[#FAFAFA] border border-stone-200 rounded-xl p-6 sm:p-10 space-y-6 text-left"
            >
              {errorMessage && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm p-4 rounded-md">
                  {errorMessage}
                </div>
              )}

              {/* お名前 */}
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  お名前
                  <span className="ml-2 text-[11px] bg-[#E07A88] text-white px-2 py-0.5 rounded">
                    必須
                  </span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="例：山田 太郎"
                  className="w-full rounded-md border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-800 focus:border-[#9E875B] focus:outline-none"
                />
              </div>

              {/* メールアドレス */}
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  メールアドレス
                  <span className="ml-2 text-[11px] bg-[#E07A88] text-white px-2 py-0.5 rounded">
                    必須
                  </span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="例：yamada@example.com"
                  className="w-full rounded-md border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-800 focus:border-[#9E875B] focus:outline-none"
                />
              </div>

              {/* お電話番号 */}
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  お電話番号
                  <span className="ml-2 text-[11px] bg-stone-400 text-white px-2 py-0.5 rounded">
                    任意
                  </span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="例：090-0000-0000"
                  className="w-full rounded-md border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-800 focus:border-[#9E875B] focus:outline-none"
                />
              </div>

              {/* ご用件 */}
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  ご用件
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full rounded-md border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-800 focus:border-[#9E875B] focus:outline-none"
                >
                  <option>オーダーメイドまくらの相談・予約</option>
                  <option>ふとん・マットレスについて</option>
                  <option>羽毛布団リフォーム・打ち直しについて</option>
                  <option>その他のお問い合わせ</option>
                </select>
              </div>

              {/* お問い合わせ内容 */}
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  お問い合わせ内容
                  <span className="ml-2 text-[11px] bg-[#E07A88] text-white px-2 py-0.5 rounded">
                    必須
                  </span>
                </label>
                <textarea
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="ご質問やご希望の日時などをご記入ください。"
                  className="w-full rounded-md border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-800 focus:border-[#9E875B] focus:outline-none"
                />
              </div>

              {/* 送信ボタン */}
              <div className="pt-2 text-center">
                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex items-center justify-center gap-2 bg-[#9E875B] hover:bg-[#8A754D] disabled:bg-stone-400 text-white font-medium text-sm sm:text-base px-10 py-3.5 rounded-md transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSending ? "送信中..." : "この内容で送信する"}</span>
                </button>
              </div>
            </form>
          )}
        </section>

        {/* 4. アクセス・店舗情報 */}
        <section id="access">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl font-medium text-stone-700 tracking-[0.2em] mb-4">
              アクセス・店舗情報
            </h2>
            <div className="w-16 h-[2px] bg-[#CBB994] mx-auto" />
          </div>

          <div className="border-t border-stone-200 mb-10 text-sm">
            <dl className="divide-y divide-stone-200">
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 px-2">
                <dt className="font-medium text-[#7A6338]">店舗名</dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2 text-stone-700">
                  ふとんのやまもり
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 px-2">
                <dt className="font-medium text-[#7A6338]">所在地</dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2 text-stone-700 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-[#9E875B] shrink-0 mt-1" />
                  <span>〒274-0065 千葉県船橋市高根台３丁目７−１０</span>
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 px-2">
                <dt className="font-medium text-[#7A6338]">電話番号</dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2 text-stone-700">
                  047-466-2131
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 px-2">
                <dt className="font-medium text-[#7A6338]">営業時間</dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2 text-stone-700">
                  10:00〜17:00
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 px-2">
                <dt className="font-medium text-[#7A6338]">定休日</dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2 text-stone-700">
                  水曜日・年末年始（12月31日〜1月4日）
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 px-2">
                <dt className="font-medium text-[#7A6338]">駐車場</dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2 text-stone-700">
                  あり（店舗前10台）
                </dd>
              </div>
            </dl>
          </div>

          <div className="w-full h-72 sm:h-96 rounded-xl overflow-hidden border border-stone-200 bg-stone-100">
            <iframe
              title="ふとんのやまもり アクセスマップ"
              src="https://maps.google.com/maps?q=ふとんのやまもり&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>
    </div>
  );
}