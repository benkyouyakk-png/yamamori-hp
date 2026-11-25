"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewsPage() {
  // チラシ拡大表示の開閉を管理するスイッチ
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white text-stone-700">
      {/* 1. ページタイトル（ヘッダー下） */}
      <section className="w-full bg-[#F8F6F1] py-14 sm:py-20 px-4 border-b border-stone-200/60">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <p className="text-xs sm:text-sm text-[#8C7548] tracking-[0.25em] uppercase">
            NEWS &amp; CAMPAIGN
          </p>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#7A6338] tracking-widest">
            お知らせ
          </h1>
          <p className="text-sm sm:text-base text-stone-600 pt-2">
            ふとんのやまもりからのお得なセール情報や最新のお知らせをご案内します。
          </p>
        </div>
      </section>

      {/* 2. セールチラシ表示エリア */}
      <section className="max-w-5xl mx-auto py-14 sm:py-20 px-4">
        <div className="bg-[#F8F6F1] rounded-2xl p-6 sm:p-10 md:p-12 border border-stone-200/80 shadow-sm">
          {/* 見出し：「今回のセールチラシ」 */}
          <div className="text-center mb-8 sm:mb-10 space-y-2">
            <span className="inline-block px-4 py-1 rounded-full bg-[#E59298] text-white text-xs sm:text-sm font-bold tracking-wider">
              最新情報
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#7A6338] tracking-wider pt-2">
              今回のセールチラシ
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              ※チラシをクリックすると大きく拡大してご覧いただけます。
            </p>
          </div>

          {/* チラシ画像（クリックで拡大ポップアップを開く） */}
          <div className="w-full bg-white rounded-xl p-2 sm:p-4 shadow-md border border-stone-200/60">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="w-full cursor-zoom-in focus:outline-none group relative block"
              title="クリックしてチラシを拡大"
            >
              <img
                src="/yamamori-100.jpg"
                alt="今回のセールチラシ"
                className="w-full h-auto rounded-lg object-contain mx-auto transition-opacity group-hover:opacity-95"
              />
              <span className="mt-3 inline-block px-4 py-1.5 rounded-full bg-stone-800/80 text-white text-xs sm:text-sm font-medium">
                🔍 タップ・クリックで拡大表示
              </span>
            </button>
          </div>

          {/* ご案内メッセージ */}
          <div className="mt-8 text-center space-y-2 text-sm sm:text-base text-stone-700 leading-relaxed">
            <p>
              数量限定のお買い得品や、季節のおすすめ寝具を多数取り揃えております。
            </p>
            <p className="text-xs sm:text-sm text-stone-500">
              ※商品の在庫状況や詳細は、お電話（047-466-2131）またはお問合せフォームよりお気軽にお尋ねください。
            </p>
          </div>
        </div>
      </section>

      {/* 3. お問い合わせ・トップへ戻るボタン */}
      <section className="max-w-4xl mx-auto pb-16 sm:pb-24 px-4 text-center space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-64 py-3.5 px-6 rounded-full bg-[#7A6338] hover:bg-[#634F2B] text-white font-medium tracking-wider transition-colors shadow-sm"
          >
            お問合せ・ご予約はこちら
          </Link>
          <Link
            href="/"
            className="w-full sm:w-64 py-3.5 px-6 rounded-full border border-stone-300 hover:bg-stone-50 text-stone-700 font-medium tracking-wider transition-colors"
          >
            トップページへ戻る
          </Link>
        </div>
      </section>

      {/* 4. 拡大表示モーダル（「× 閉じる」ボタン付き） */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        >
          {/* 右上に固定された大きな「× 閉じる」ボタン */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="fixed top-4 right-4 z-50 bg-white hover:bg-stone-100 text-stone-900 font-bold px-4 py-2.5 rounded-full shadow-lg flex items-center gap-1.5 text-sm sm:text-base cursor-pointer"
          >
            <span className="text-lg leading-none">×</span>
            <span>閉じる</span>
          </button>

          {/* 拡大画像本体（画像自体を押したときは閉じないようにする） */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full my-auto"
          >
            <img
              src="/yamamori-100.jpg"
              alt="今回のセールチラシ（拡大）"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
