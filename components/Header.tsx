import Link from "next/link";
import { HeartPulse, BedDouble, Sparkles, Layers } from "lucide-react";

export function Header() {
  return (
    <header className="w-full border-b border-stone-200 bg-white">
      {/* 1段目：上部のサブバー（薄いベージュ＋右側に濃いブラウンのリンク） */}
      <div className="bg-[#CBB994] text-white text-xs sm:text-sm">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          {/* 左側のキャッチコピー・実績テキスト */}
          <p className="py-2 px-4 tracking-wider">
            千葉県船橋市高根台3-7-10 新京成線「高根木戸」駅より徒歩約１８分
          </p>

          {/* 右側のサブメニュー（濃い色背景のリンク） */}
          <nav className="flex w-full sm:w-auto bg-[#9E875B]">
            <Link
              href="/shop"
              className="flex-1 sm:flex-none text-center px-6 py-2.5 hover:bg-[#8A754D] transition-colors border-r border-[#B39C6E]"
            >
              店舗案内
            </Link>

            <Link
              href="/news"
              className="flex-1 sm:flex-none text-center px-6 py-2.5 text-[#E60012] font-bold hover:bg-[#8A754D] transition-colors border-r border-[#B39C6E]"
            >
              セール中
            </Link>
            <Link
              href="/contact"
              className="flex-1 sm:flex-none text-center px-6 py-2.5 hover:bg-[#8A754D] transition-colors border-r border-[#B39C6E]"
            >
              お問合せ
            </Link>
            <Link
              href="/contact"
              className="flex-1 sm:flex-none text-center px-6 py-2.5 hover:bg-[#8A754D] transition-colors"
            >
              アクセス
            </Link>
          </nav>
        </div>
      </div>

      {/* 2段目：メインヘッダー（左にロゴ、右にアイコン付きナビゲーション） */}
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* 左側：ロゴエリア */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* 四角い印章風アイコン */}
          <div className="w-12 h-12 bg-[#A68E5D] text-white rounded-md flex items-center justify-center font-serif text-xl font-bold tracking-tighter shrink-0">
            山森
          </div>

          {/* 右側：上に logo.png、下に「やまもり」 */}
          <div className="flex flex-col justify-center">
            <img
              src="/logo.png"
              alt="サブタイトル・屋号"
              className="h-4 sm:h-5 w-auto object-contain object-left mb-0.5"
            />
            <span className="block text-2xl sm:text-3xl font-bold text-[#8C7548] tracking-wider leading-none">
              やまもり
            </span>
          </div>
        </Link>

        {/* 右側：アイコン＋テキストの縦並びメニュー（区切り線付き） */}
        <nav className="flex items-center divide-x divide-stone-200 border-t md:border-t-0 pt-3 md:pt-0 w-full md:w-auto justify-around">
          <Link
            href="/makura"
            className="flex flex-col items-center px-4 sm:px-6 py-1 text-stone-700 hover:text-[#9E875B] transition-colors gap-1.5"
          >
            <Layers className="w-6 h-6 text-[#B5A177] stroke-[1.5]" />
            <span className="text-xs sm:text-sm font-medium">まくら</span>
          </Link>

          <Link
            href="/futon"
            className="flex flex-col items-center px-4 sm:px-6 py-1 text-stone-700 hover:text-[#9E875B] transition-colors gap-1.5"
          >
            <Sparkles className="w-6 h-6 text-[#B5A177] stroke-[1.5]" />
            <span className="text-xs sm:text-sm font-medium">ふとん</span>
          </Link>

          <Link
            href="/bed"
            className="flex flex-col items-center px-4 sm:px-6 py-1 text-stone-700 hover:text-[#9E875B] transition-colors gap-1.5"
          >
            <BedDouble className="w-6 h-6 text-[#B5A177] stroke-[1.5]" />
            <span className="text-xs sm:text-sm font-medium">ベッド・マット</span>
          </Link>

          <Link
            href="/health"
            className="flex flex-col items-center px-4 sm:px-6 py-1 text-stone-700 hover:text-[#9E875B] transition-colors gap-1.5"
          >
            <HeartPulse className="w-6 h-6 text-[#B5A177] stroke-[1.5]" />
            <span className="text-xs sm:text-sm font-medium">健康寝具</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
