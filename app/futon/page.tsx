import Image from "next/image";

const PREMIERE_ITEMS = [
  {
    title: "入金真綿布団",
    badge: "西川チェーン専門店のみお取り扱い",
    spec: "ふとんがわ：絹100%　詰めもの：絹100%（入金真綿）。",
    origin: "日本製",
    image: "/Première_02.jpg",
  },
  {
    title: "アイダー羽毛掛け布団",
    badge: "西川チェーン専門店のみお取り扱い",
    spec: "ふとんがわ：絹100%　詰めもの：ダウン95% その他の羽毛5%（アイスランディックアイダーダウン）。",
    origin: "日本製",
    image: "/Première_01.jpg",
  },
  {
    title: "羽毛掛け布団",
    badge: "西川チェーン専門店のみお取り扱い",
    spec: "ふとんがわ：絹100%（シルクジャカード）　詰めもの：ダウン95% フェザー5%（ポーリッシュマザーホワイトグース）。",
    origin: "日本製",
    image: "/Première_03.jpg",
  },
  {
    title: "羽毛掛け布団",
    badge: "西川チェーン専門店のみお取り扱い",
    spec: "ふとんがわ：再生繊維（リヨセル）55%、綿45%　詰めもの：ダウン95% フェザー5%（ポーリッシュマザーホワイトグース）。",
    origin: "日本製",
    image: "/Première_04.jpg",
  },
];

export default function FutonPage() {
  return (
    <div className="w-full bg-white">
      {/* 1. ページ大見出し帯（縦幅スリム版） */}
      <div className="w-full bg-[#F7F7F7] py-6 sm:py-8 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-medium text-stone-700 tracking-[0.25em] mb-2">
          ふとん
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 tracking-[0.15em]">
          Futon
        </p>
      </div>

      {/* 2. メイン写真と説明文エリア */}
      <div className="max-w-4xl mx-auto py-14 sm:py-20 px-4 text-center">
        <div className="relative w-full h-64 sm:h-96 md:h-[420px] mb-10 sm:mb-12 overflow-hidden">
          <Image
            src="/futon-top.jpg"
            alt="西川チェーンの掛け布団"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="text-stone-700 text-xs sm:text-base leading-loose tracking-wide space-y-1">
          <p>当店で取り扱っている西川チェーンの掛け布団は、</p>
          <p>
            どんなに手間と時間がかかっても妥協しないものづくりから生まれています。
          </p>
          <p>
            たっぷり空気を含み、眠る人を、ふんわり、心地よいぬくもりで包みこみ快眠へと導きます。
          </p>
        </div>
      </div>

      {/* 3. 今回追加するセクション（取り扱いブランド：Première） */}
      <section className="max-w-4xl mx-auto pt-8 pb-24 sm:pb-32 px-4">
        {/* ブランド見出し */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-medium text-stone-700 tracking-[0.2em] mb-6">
            取り扱いブランド
          </h2>

          {/* 区切り線 */}
          <div className="w-full h-[1px] bg-stone-200 mb-8" />

          {/* ブランド名（Première） */}
          <h3 className="text-xl sm:text-2xl font-serif text-[#8C7548] tracking-wider mb-6">
            Première
          </h3>

          {/* ブランド説明文 */}
          <div className="text-stone-700 text-xs sm:text-sm leading-loose tracking-wide space-y-1">
            <p>
              プルミエールは素材を選び抜き、産地からお客様のお手元に届くまで、すべてを厳しく管理。
            </p>
            <p>時間と手間を惜しみなく注いでつくり上げています。</p>
          </div>
        </div>

        {/* 4つの商品リスト（左テキスト・右写真） */}
        <div className="space-y-16 sm:space-y-20">
          {PREMIERE_ITEMS.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12"
            >
              {/* 左側：商品名・赤枠バッジ・素材スペック */}
              <div className="w-full md:w-1/2 text-left space-y-4">
                <h4 className="text-lg sm:text-xl font-medium text-[#A68E5D] tracking-wider">
                  {item.title}
                </h4>

                {/* 赤枠の専門店限定バッジ */}
                <div>
                  <span className="inline-block border border-[#D9828B] text-[#D9828B] text-[11px] sm:text-xs px-3 py-1 tracking-wider">
                    {item.badge}
                  </span>
                </div>

                {/* 素材・日本製表記 */}
                <div className="text-stone-700 text-xs sm:text-sm leading-relaxed space-y-1 pt-1">
                  <p>{item.spec}</p>
                  <p>{item.origin}</p>
                </div>
              </div>

              {/* 右側：商品写真（正方形） */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <div className="relative w-full max-w-[360px] aspect-square overflow-hidden bg-stone-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
