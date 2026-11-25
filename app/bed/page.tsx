import Image from "next/image";

const AIR_ITEMS = [
  {
    title: "AiR SX",
    description: "相反する柔軟性と弾力性を叶えるハイブリッド4層構造。日本製",
    image: "/air_sx.jpg",
  },
  {
    title: "AiR SI",
    description: "睡眠時の体幹をサポートする特殊立体クロススリット構造。日本製",
    image: "/air_si.jpg",
  },
  {
    title: "AiR 03",
    description: "次世代の眠りをカタチにしたニューモデル。日本製",
    image: "/air_03.jpg",
  },
  {
    title: "AiR 01",
    description: "あなたの眠りを深化させる、一枚がある。日本製",
    image: "/air_01.jpg",
  },
];

export default function BedPage() {
  return (
    <div className="w-full bg-white">
      {/* 1. ページ大見出し帯（スリムな薄いグレー背景） */}
      <div className="w-full bg-[#F7F7F7] py-6 sm:py-8 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-medium text-stone-700 tracking-[0.2em] mb-2">
          ベッド・マットレス
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 tracking-[0.15em]">
          Supports the body during sleep
        </p>
      </div>

      {/* 2. 「マットレス」セクション */}
      <section className="max-w-4xl mx-auto pt-14 sm:pt-20 pb-16 px-4 text-center">
        {/* 「マットレス」見出し ＋ ゴールド下線 */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-stone-700 tracking-[0.2em] mb-4">
            マットレス
          </h2>
          <div className="w-16 h-[2px] bg-[#CBB994] mx-auto" />
        </div>

        {/* マットレス説明文（2行） */}
        <div className="text-stone-700 text-xs sm:text-base leading-loose tracking-wide space-y-1 mb-16 sm:mb-20">
          <p>特殊立体構造の整圧敷きふとんやフロアマットレスなど、</p>
          <p>
            詰めものやふとんがわの素材にこだわり、心地よく健やかな眠りをサポートします。
          </p>
        </div>

        {/* 「取り扱いマットレス」見出し ＋ ゴールド下線 */}
        <div className="mb-14 sm:mb-16">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-stone-700 tracking-[0.2em] mb-4">
            取り扱いマットレス
          </h3>
          <div className="w-16 h-[2px] bg-[#CBB994] mx-auto" />
        </div>

        {/* 2-A. 「AiR」ブランド */}
        <div className="w-full mb-20 sm:mb-24">
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8">
            <span className="h-[1px] flex-1 bg-stone-200" />
            <h4 className="text-xl sm:text-2xl font-medium text-[#8C7548] tracking-wider">
              AiR
            </h4>
            <span className="h-[1px] flex-1 bg-stone-200" />
          </div>

          <div className="text-stone-700 text-xs sm:text-sm leading-loose tracking-wide space-y-1 mb-14 sm:mb-16">
            <p>雲の上に乗っているような心地よい眠り。</p>
            <p>
              寝返りをうっても保たれる安定した寝姿勢、目覚めた時に感じるすっきり感。
            </p>
          </div>

          <div className="space-y-14 sm:space-y-16">
            {AIR_ITEMS.map((item) => (
              <div
                key={item.title}
                className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12"
              >
                <div className="w-full md:w-5/12 text-left space-y-3">
                  <h5 className="text-lg sm:text-xl font-medium text-[#A68E5D] tracking-wider">
                    {item.title}
                  </h5>
                  <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="w-full md:w-7/12">
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-white">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain object-center"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2-B. 今回追加：「整圧®マットレス」ブランド */}
        <div className="w-full mb-20 sm:mb-24">
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8">
            <span className="h-[1px] flex-1 bg-stone-200" />
            <h4 className="text-xl sm:text-2xl font-medium text-[#8C7548] tracking-wider">
              整圧®マットレス
            </h4>
            <span className="h-[1px] flex-1 bg-stone-200" />
          </div>

          <div className="text-stone-700 text-xs sm:text-sm leading-loose tracking-wide space-y-1 mb-14 sm:mb-16">
            <p>凹凸構造の独立したブロックがしっかりと身体を保持。</p>
            <p>
              四層構造が身体の沈み込みを調整し、自然な寝姿勢を保ちます。点で支える健康敷きふとんの上位モデル。
            </p>
          </div>

          {/* 整圧マットレス カーボンハード（左テキスト・右写真） */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="w-full md:w-5/12 text-left space-y-4">
              <h5 className="text-lg sm:text-xl font-medium text-[#A68E5D] tracking-wider">
                整圧®マットレス カーボンハード
              </h5>

              {/* 赤枠の専門店オリジナルバッジ */}
              <div>
                <span className="inline-block border border-[#D9828B] text-[#D9828B] text-[11px] sm:text-xs px-3 py-1 tracking-wider">
                  西川チェーン専門店オリジナル商品
                </span>
              </div>

              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed pt-1">
                理想的な寝姿勢を実現するために研究し開発した、身体にやさしいマットレス。抗菌防臭、防ダニ加工。日本製
              </p>
            </div>

            <div className="w-full md:w-7/12">
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-white">
                <Image
                  src="/seiatsu_matt.jpg"
                  alt="整圧マットレス カーボンハード"
                  fill
                  className="object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>

        
      </section>

      {/* 3. その下に「ベッド」セクション */}
      <section className="max-w-4xl mx-auto py-14 sm:py-20 px-4 text-center border-t border-stone-100">
        <div className="mb-10 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-stone-700 tracking-[0.2em] mb-4">
            ベッド
          </h2>
          <div className="w-16 h-[2px] bg-[#CBB994] mx-auto" />
        </div>

        <div className="text-stone-700 text-xs sm:text-base leading-loose tracking-wide space-y-1">
          <p>ゆったりとやすらぐ眠りのひとときのために、</p>
          <p>部屋になじむナチュラルなベッドや電動ベッドをご用意しました。</p>
        </div>
      </section>
    </div>
  );
}
