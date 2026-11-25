import Image from "next/image";

export default function HealthPage() {
  return (
    <div className="w-full bg-white">
      {/* 1. ページ大見出し帯（スリムな薄いグレー背景） */}
      <div className="w-full bg-[#F7F7F7] py-6 sm:py-8 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-medium text-stone-700 tracking-[0.25em] mb-2">
          健康寝具
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 tracking-[0.15em]">
          Another item that supports good-quality sleep
        </p>
      </div>

      {/* 2. ページ導入説明文（2行） */}
      <section className="max-w-4xl mx-auto pt-14 sm:pt-20 pb-12 sm:pb-16 px-4 text-center">
        <div className="text-stone-700 text-xs sm:text-base leading-loose tracking-wide space-y-1">
          <p>あなたの「快眠」を支えるもう一つのアイテム。</p>
          <p>
            特別な日だけではない、日常的にお使いいただける寝具をご用意しております。
          </p>
        </div>
      </section>

      {/* 3. 「Healthyon」見出し ＋ 説明文 ＋ 3枚の縦並び画像 */}
      <section className="max-w-3xl mx-auto pt-4 pb-20 sm:pb-28 px-4 text-center">
        {/* 左右に長い横線がついた「Healthyon」見出し */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-12">
          <span className="h-[1px] flex-1 bg-stone-200" />
          <h2 className="text-xl sm:text-2xl font-medium text-[#8C7548] tracking-wider">
            Healthyon
          </h2>
          <span className="h-[1px] flex-1 bg-stone-200" />
        </div>

        {/* 説明文（3行） */}
        <div className="text-stone-700 text-xs sm:text-sm leading-loose tracking-wide space-y-1 mb-14 sm:mb-16">
          <p>
            眠りの科学から生まれた家庭用医療機器。癒しながら眠る、家庭用温熱・電位治療器。
          </p>
          <p>
            温熱療法モードを使うと、マイルドな温もりが血行を促進、体を温め、筋肉の疲れやコリを自然にほぐし、
          </p>
          <p>
            電位治療モードでは、疲労やストレスにより乱れた自律神経に、マイナス電位が作用します。
          </p>
        </div>

        {/* 3枚の画像を上から下へ縦1列に配置 */}
        <div className="flex flex-col items-center space-y-10 sm:space-y-14">
          {/* 1枚目（上）：ヘルシオン本体写真 */}
          <div className="w-full bg-white">
            <Image
              src="/heru.webp"
              alt="電位・温熱組合せ家庭用医療機器 ヘルシオン"
              width={800}
              height={800}
              className="w-full h-auto"
            />
          </div>

          {/* 2枚目（真ん中）：温熱治療×電位治療・8つの効果 */}
          <div className="w-full bg-white">
            <Image
              src="/heru2.webp"
              alt="ヘルシオン 温熱治療と電位治療の8つの効果"
              width={800}
              height={1000}
              className="w-full h-auto"
            />
          </div>

          {/* 3枚目（下）：季節コース・速暖乾燥・スマホ連携 */}
          <div className="w-full bg-white">
            <Image
              src="/heru3.webp"
              alt="ヘルシオン 季節コースと便利機能"
              width={800}
              height={1100}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
