import Image from "next/image";

const STEPS = [
  {
    number: "1",
    title: "測定・カルテ作り",
    image: "/step01.png",
    description:
      "最適な高さを専用の測定器を使って測定。枕のカルテを作成します。",
  },
  {
    number: "2",
    title: "素材選び",
    image: "/step02.jpg",
    description: "お好みの硬さに合わせて素材を選びます。",
  },
  {
    number: "3",
    title: "スリープマスターがコンサルティング",
    image: "/step03.png",
    description:
      "２を基に実際の寝心地を試し、確認しながら最適な枕へと調整していきます。",
  },
  {
    number: "4",
    title: "オーダーメイド枕の出来あがり",
    image: "/step04.png",
    description:
      "１〜３の素材、高さを基に世界でたったひとつ、自分のためだけの枕をお仕立てします。",
  },
];

export default function MakuraPage() {
  return (
    <div className="w-full bg-white py-16 sm:py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* 1. ページ大見出し ＋ 英語サブタイトル */}
        <div className="mb-16 sm:mb-20">
          <h1 className="text-3xl sm:text-4xl font-medium text-stone-700 tracking-[0.25em] mb-2">
            まくら
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 tracking-[0.15em]">
            Find a pillow just for you
          </p>
        </div>

        {/* 2. セクション見出し ＋ ゴールドの下線 */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-stone-700 tracking-wider mb-4">
            オーダーメイドまくら
          </h2>
          <div className="w-16 h-[2px] bg-[#CBB994] mx-auto" />
        </div>

        {/* 3. メイン写真（public/makura.jpg） */}
        <div className="relative w-full h-64 sm:h-96 md:h-[420px] mb-10 sm:mb-12 overflow-hidden">
          <Image
            src="/makura.jpg"
            alt="オーダーメイドまくら"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* 4. 説明文（3行） */}
        <div className="text-stone-700 text-xs sm:text-base leading-loose tracking-wide space-y-1 mb-10 sm:mb-12">
          <p>
            高さ、素材、フィット感を確かめながら、きめ細かな測定とコンサルティング。
          </p>
          <p>
            高すぎず、低すぎず。柔らかすぎず、硬すぎず。沈み込みすぎない。
          </p>
          <p>探していたあなただけの理想の枕をつくりませんか？</p>
        </div>

        {/* 5. 薄いグレー背景の注釈ボックス（ピンク文字） */}
        <div className="bg-[#F6F6F6] py-5 px-4 mb-20 sm:mb-24">
          <p className="text-[#E07A88] text-xs sm:text-sm font-medium tracking-wider">
            ※オーダーメイドまくらは何度でも無料で微調整が出来ます。
          </p>
        </div>

        {/* 6. あなただけの枕が出来上がるまで。（4ステップ） */}
        <section className="w-full mb-24 sm:mb-28">
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-12">
            <span className="h-[1px] w-10 sm:w-20 bg-[#9E875B]" />
            <h3 className="text-lg sm:text-2xl font-medium text-[#7A6338] tracking-wider">
              あなただけの枕が出来上がるまで。
            </h3>
            <span className="h-[1px] w-10 sm:w-20 bg-[#9E875B]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 text-left">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-[#FBF6EB] p-5 sm:p-6 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-base sm:text-lg font-medium text-stone-700 leading-snug mb-5 min-h-[4.5rem]">
                    <span className="text-[#C8B99E] font-normal mr-1.5">
                      {step.number}
                    </span>
                    {step.title}
                  </h4>

                  <div className="relative w-full aspect-[4/3] mb-5 overflow-hidden bg-white">
                    <Image
                      src={step.image}
                      alt={`${step.number} ${step.title}`}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mb-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. 今回追加するセクション（「スリープマスター」「ピローアドバイザー」とは） */}
        <section className="w-full">
          {/* 中央の見出し ＋ ゴールド下線 */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-stone-700 tracking-wider mb-4">
              「スリープマスター」「ピローアドバイザー」とは
            </h2>
            <div className="w-16 h-[2px] bg-[#CBB994] mx-auto" />
          </div>

          {/* 左右2カラム（左にテキスト、右に public/download.jpg） */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 text-left">
            {/* 左側：サブ見出し ＋ 2段落の説明文 */}
            <div className="w-full md:w-1/2 space-y-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#7A6338] leading-relaxed tracking-wide">
                あなただけの枕を、ひとつひとつ、ていねいにお仕立てします。
              </h3>

              <div className="text-stone-700 text-xs sm:text-sm leading-loose tracking-wide space-y-5">
                <p>
                  「スリープマスター」「ピローアドバイザー」とは、日本睡眠科学研究所が認定した、睡眠や枕に関する知識や技能を習得した眠りと枕の専門家です。
                </p>
                <p>
                  睡眠科学や快眠環境などの専門講習を受けた眠りのプロフェッショナル。快適な眠りにつくための環境の整え方や寝具選びをご提案致します。
                </p>
              </div>
            </div>

            {/* 右側：写真（public/download.jpg） */}
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src="/makura2.jpg"
                  alt="スリープマスター・ピローアドバイザーによる測定"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
