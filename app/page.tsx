import Image from "next/image";
import Link from "next/link";
import { HeroTitle } from "@/components/HeroTitle";
import { HeroSlider } from "@/components/HeroSlider";


export default function Home() {
  return (
    <div className="w-full">
      {/* 1. メインビジュアル */}
            {/* 1. メインビジュアル */}
      <section className="relative w-full h-[400px] sm:h-[550px] md:h-[650px] overflow-hidden">
        <HeroSlider />
        <div className="relative z-10 w-full h-full bg-black/25 flex items-center justify-center">
          <HeroTitle />
        </div>
      </section>


      {/* 2. 創業・店舗メッセージ */}
      <section className="w-full bg-white py-16 sm:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#7A6338] tracking-wider">
              おかげさまで創業60年
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#7A6338] tracking-wider leading-relaxed">
              寝具のプロがあなたの睡眠をサポートします。
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">
            <div className="w-full md:w-1/2 text-stone-700 text-sm sm:text-base leading-loose tracking-wide space-y-1">
              <p className="text-xl sm:text-2xl font-medium">眠りに向き合い続けて。</p>
              <p>
                睡眠のプロが眠りに関するお悩み相談や、快眠のためのアドバイスを行い、あなたに最高の朝の目覚めを提案いたします。
              </p>
              <p>
                心と身体の健康は睡眠から。まずは睡眠のプロにお気軽にご相談ください。
              </p>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <div
                className="relative w-72 h-64 sm:w-96 sm:h-80 overflow-hidden shadow-sm"
                style={{
                  borderRadius: "62% 38% 46% 54% / 60% 44% 56% 40%",
                }}
              >
                <Image
                  src="/download-2.jpg"
                  alt="睡眠のプロによるご相談"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 寝具選びの大切さメッセージボックス */}
      <section className="w-full bg-white pb-20 sm:pb-28 px-4">
        <div className="max-w-5xl mx-auto bg-[#F5F5F7] rounded-2xl py-14 sm:py-20 px-6 sm:px-12 text-center">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-medium text-stone-700 tracking-wider mb-6">
            美と健康のために正しい寝具選びを
          </h2>

          <p className="text-lg sm:text-2xl md:text-3xl font-medium text-[#8C7548] tracking-wider mb-10">
            腰痛・冷え性は布団が原因かもしれません
          </p>

          <div className="text-stone-700 text-xs sm:text-base leading-loose tracking-wide space-y-1 max-w-3xl mx-auto">
            <p>
              例えば、敷き布団は体重が乗るのでごまかしがきかないため、体圧分散しないと体に負担がかかります。
            </p>
            <p>
              寝姿勢がきちんとしていないと血流が悪くなり、冷え性にもなりやすいのです。
            </p>
            <p>
              ふとんのやまもりは、お客様の体に合った正しい寝具選びをアドバイスいたします。
            </p>
          </div>
        </div>
      </section>

      {/* 4. 今回追加するセクション（取り扱い商品） */}
      <section className="w-full bg-white pb-24 sm:pb-32 px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* 見出し */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#4A607A] tracking-widest mb-14 sm:mb-16">
            取り扱い商品
          </h2>

          {/* 4つの丸いリンクボタン */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
            {/* 1. まくら → app/makura/page.tsx へ遷移 */}
            <Link
              href="/makura"
              className="group w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-[#E59298] hover:bg-[#DC8289] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center p-4 shadow-sm"
            >
              <div className="h-20 sm:h-24 flex items-center justify-center mb-2">
                {/* まくらのイラスト */}
                <svg className="w-20 h-14 sm:w-24 sm:h-16" viewBox="0 0 100 65" fill="none">
                  <path
                    d="M12 14 C30 17, 70 17, 88 14 C86 28, 86 37, 88 51 C70 48, 30 48, 12 51 C14 37, 14 28, 12 14 Z"
                    fill="#B8C9DC"
                  />
                </svg>
              </div>
              <span className="text-white text-sm sm:text-base font-medium tracking-wider">
                まくら
              </span>
            </Link>

            {/* 2. ふとん → app/futon/page.tsx へ遷移 */}
            <Link
              href="/futon"
              className="group w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-[#E59298] hover:bg-[#DC8289] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center p-4 shadow-sm"
            >
              <div className="h-20 sm:h-24 flex items-center justify-center mb-2">
                {/* ふとんのイラスト */}
                <svg className="w-16 h-20 sm:w-20 sm:h-24" viewBox="0 0 80 100" fill="none">
                  <rect x="18" y="8" width="44" height="84" rx="2" fill="#F4F5F7" />
                  <rect x="27" y="14" width="26" height="14" rx="2" fill="#CBD5E1" />
                  <rect x="22" y="33" width="36" height="53" rx="1" fill="#A9BCD0" />
                  <line x1="25" y1="43" x2="55" y2="43" stroke="#E2E8F0" strokeWidth="1.5" />
                  <line x1="25" y1="53" x2="55" y2="53" stroke="#E2E8F0" strokeWidth="1.5" />
                  <line x1="25" y1="63" x2="55" y2="63" stroke="#E2E8F0" strokeWidth="1.5" />
                  <line x1="25" y1="73" x2="55" y2="73" stroke="#E2E8F0" strokeWidth="1.5" />
                </svg>
              </div>
              <span className="text-white text-sm sm:text-base font-medium tracking-wider">
                ふとん
              </span>
            </Link>

            {/* 3. ベッド・マット → app/bed/page.tsx へ遷移 */}
            <Link
              href="/bed"
              className="group w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-[#E59298] hover:bg-[#DC8289] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center p-4 shadow-sm"
            >
              <div className="h-20 sm:h-24 flex items-center justify-center mb-2">
                {/* ベッド・マットのイラスト */}
                <svg className="w-20 h-20 sm:w-24 sm:h-24" viewBox="0 0 100 100" fill="none">
                  {/* ヘッドボード */}
                  <rect x="24" y="16" width="52" height="22" rx="4" fill="#829AB1" />
                  {/* マットレス・掛け布団 */}
                  <path d="M22 36 L78 36 L84 74 L16 74 Z" fill="#FDE68A" />
                  {/* ボーダー模様 */}
                  <line x1="20" y1="46" x2="80" y2="46" stroke="#F59E0B" strokeWidth="2" strokeOpacity="0.45" />
                  <line x1="19" y1="55" x2="81" y2="55" stroke="#F59E0B" strokeWidth="2" strokeOpacity="0.45" />
                  <line x1="17" y1="64" x2="83" y2="64" stroke="#F59E0B" strokeWidth="2" strokeOpacity="0.45" />
                  {/* 枕 */}
                  <rect x="34" y="24" width="32" height="15" rx="3" fill="#F8FAFC" />
                  {/* ベッドの足 */}
                  <rect x="16" y="74" width="68" height="7" rx="2" fill="#829AB1" />
                  <rect x="20" y="81" width="6" height="8" fill="#829AB1" />
                  <rect x="74" y="81" width="6" height="8" fill="#829AB1" />
                </svg>
              </div>
              <span className="text-white text-sm sm:text-base font-medium tracking-wider">
                ベッド・マット
              </span>
            </Link>

            {/* 4. 健康寝具 → app/health/page.tsx へ遷移 */}
            <Link
              href="/health"
              className="group w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-[#E59298] hover:bg-[#DC8289] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center p-4 shadow-sm"
            >
              <div className="h-20 sm:h-24 flex items-center justify-center mb-2">
                {/* 健康寝具（体圧分散マットレス）のイラスト */}
                <svg className="w-20 h-16 sm:w-24 sm:h-20" viewBox="0 0 100 80" fill="none">
                  {/* 黄色いウェーブマットレス */}
                  <path
                    d="M16 32 C22 48, 38 50, 50 44 C62 38, 76 42, 86 48 L86 55 L16 55 Z"
                    fill="#FDE047"
                  />
                  {/* ベッドフレーム */}
                  <path
                    d="M12 26 L12 58 L88 58 L88 52 L17 52 L17 26 Z"
                    fill="#829AB1"
                  />
                  <rect x="16" y="58" width="5" height="8" fill="#829AB1" />
                  <rect x="79" y="58" width="5" height="8" fill="#829AB1" />
                </svg>
              </div>
              <span className="text-white text-sm sm:text-base font-medium tracking-wider">
                健康寝具
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
