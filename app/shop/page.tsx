import Image from "next/image";
import Link from "next/link";

export default function ShopInfoPage() {
  return (
    <div className="w-full bg-white text-stone-700">
      {/* 1. ページタイトル（ヘッダー下） */}
      <section className="w-full bg-[#F8F6F1] py-14 sm:py-20 px-4 border-b border-stone-200/60">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <p className="text-xs sm:text-sm text-[#8C7548] tracking-[0.25em] uppercase">
            SHOP INFORMATION
          </p>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#7A6338] tracking-widest">
            店舗案内
          </h1>
          <p className="text-sm sm:text-base text-stone-600 pt-2">
            昭和42年7月オープン・創業60周年。地域の皆さまの快眠を支える寝具専門店です。
          </p>
        </div>
      </section>

      {/* 2. お店のこだわり・メッセージ */}
      <section className="max-w-5xl mx-auto py-16 sm:py-24 px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
          {/* 店舗写真 */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/download-1.jpg"
                alt="ふとんのやまもり 店舗外観"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* 紹介文（手書きメモのメッセージを反映） */}
          <div className="w-full md:w-1/2 space-y-5 leading-loose tracking-wide">
            <p className="text-sm font-bold text-[#8C7548] tracking-wider">
              お店のこだわり・想い
            </p>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#4A607A] leading-relaxed">
              信頼とこだわりをモットーに、
              <br />
              快適な寝具をご提供いたします
            </h2>
            <p className="text-sm sm:text-base">
              昭和42年7月のオープン以来、創業60周年を迎えました。「信頼とこだわり」をモットーに、お客様一人ひとりに合った快適な寝具をご提供できるよう日々努力しています。
            </p>
            <p className="text-sm sm:text-base">
              毎日の眠りがより心地よいものになるよう、寝具選びからご購入後のメンテナンスまで、私たちがしっかりお手伝いいたします。どうぞお気軽にご来店・ご相談ください。
            </p>
          </div>
        </div>
      </section>

      {/* 3. 購入後のアフターサポート紹介 */}
      <section className="max-w-5xl mx-auto pb-16 sm:pb-24 px-4">
        <div className="bg-[#F8F6F1] rounded-2xl p-8 sm:p-12 border border-stone-200/70">
          <h2 className="text-lg sm:text-2xl font-serif font-bold text-[#7A6338] text-center tracking-wider mb-3">
            ご購入後も安心の充実サポート
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 text-center mb-8">
            長く快適にお使いいただくため、各種メンテナンス・お引き取りも承っております。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-stone-100">
              <p className="font-bold text-[#4A607A] text-base mb-1">
                布団の打ち直し
              </p>
              <p className="text-xs text-stone-600 leading-relaxed">
                綿ふとんをふっくら新品のように仕立て直します
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-stone-100">
              <p className="font-bold text-[#4A607A] text-base mb-1">
                羽毛リフォーム
              </p>
              <p className="text-xs text-stone-600 leading-relaxed">
                側生地の交換や羽毛の洗浄・足し羽毛で蘇らせます
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-stone-100">
              <p className="font-bold text-[#4A607A] text-base mb-1">
                枕調整
              </p>
              <p className="text-xs text-stone-600 leading-relaxed">
                お使いの枕の高さや寝心地の微調整を行います
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-stone-100">
              <p className="font-bold text-[#4A607A] text-base mb-1">
                古い布団の引取り
              </p>
              <p className="text-xs text-stone-600 leading-relaxed">
                買い替え時など、不要になった古いお布団を引き取ります
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 店舗概要（表） */}
      <section className="w-full bg-[#F8F6F1] py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-3xl font-serif font-bold text-[#7A6338] text-center tracking-widest mb-10 sm:mb-12">
            店舗概要
          </h2>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-stone-200/80">
            <dl className="divide-y divide-stone-200 text-sm sm:text-base">
              <div className="flex flex-col sm:flex-row py-5 px-6 sm:px-8">
                <dt className="w-full sm:w-44 font-bold text-[#7A6338] mb-1 sm:mb-0">
                  店名
                </dt>
                <dd className="flex-1">ふとんのやまもり</dd>
              </div>

              <div className="flex flex-col sm:flex-row py-5 px-6 sm:px-8">
                <dt className="w-full sm:w-44 font-bold text-[#7A6338] mb-1 sm:mb-0">
                  店舗の歴史
                </dt>
                <dd className="flex-1">昭和42年7月オープン（創業60周年）</dd>
              </div>

              <div className="flex flex-col sm:flex-row py-5 px-6 sm:px-8">
                <dt className="w-full sm:w-44 font-bold text-[#7A6338] mb-1 sm:mb-0">
                  住所・アクセス
                </dt>
                <dd className="flex-1 space-y-1">
                  <p>〒274-0815 千葉県船橋市高根台3-7-10</p>
                  <p className="text-stone-600 text-xs sm:text-sm">
                    ※高根台中学校そば（新京成線「高根木戸」駅より徒歩約18分）
                  </p>
                </dd>
              </div>

              <div className="flex flex-col sm:flex-row py-5 px-6 sm:px-8">
                <dt className="w-full sm:w-44 font-bold text-[#7A6338] mb-1 sm:mb-0">
                  電話番号
                </dt>
                <dd className="flex-1">
                  <a
                    href="tel:047-466-2131"
                    className="text-[#4A607A] text-lg font-bold hover:underline"
                  >
                    047-466-2131
                  </a>
                </dd>
              </div>

              <div className="flex flex-col sm:flex-row py-5 px-6 sm:px-8">
                <dt className="w-full sm:w-44 font-bold text-[#7A6338] mb-1 sm:mb-0">
                  営業時間
                </dt>
                <dd className="flex-1">9:30 〜 17:00</dd>
              </div>

              <div className="flex flex-col sm:flex-row py-5 px-6 sm:px-8">
                <dt className="w-full sm:w-44 font-bold text-[#7A6338] mb-1 sm:mb-0">
                  定休日
                </dt>
                <dd className="flex-1">毎週水曜日</dd>
              </div>

              <div className="flex flex-col sm:flex-row py-5 px-6 sm:px-8">
                <dt className="w-full sm:w-44 font-bold text-[#7A6338] mb-1 sm:mb-0">
                  駐車場
                </dt>
                <dd className="flex-1">
                  5台完備（店の横に入り看板がございます）
                </dd>
              </div>

              <div className="flex flex-col sm:flex-row py-5 px-6 sm:px-8">
                <dt className="w-full sm:w-44 font-bold text-[#7A6338] mb-1 sm:mb-0">
                  お支払い方法
                </dt>
                <dd className="flex-1">クレジットカード・PayPay</dd>
              </div>

              <div className="flex flex-col sm:flex-row py-5 px-6 sm:px-8">
                <dt className="w-full sm:w-44 font-bold text-[#7A6338] mb-1 sm:mb-0">
                  主な取扱商品
                </dt>
                <dd className="flex-1">
                  羽毛ふとん、マットレス、ケット、枕、タオル、その他寝具全般
                </dd>
              </div>

              <div className="flex flex-col sm:flex-row py-5 px-6 sm:px-8">
                <dt className="w-full sm:w-44 font-bold text-[#7A6338] mb-1 sm:mb-0">
                  購入後のサポート
                </dt>
                <dd className="flex-1">
                  布団の打ち直し、羽毛リフォーム、枕調整、古い布団の引取りサービス
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* 5. お問い合わせ・トップへ戻るボタン */}
      <section className="max-w-4xl mx-auto py-16 sm:py-20 px-4 text-center space-y-6">
        <p className="text-sm sm:text-base text-stone-600">
          寝具の選び方やリフォーム・打ち直しのご相談など、お気軽にお問い合わせください。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-64 py-3.5 px-6 rounded-full bg-[#7A6338] hover:bg-[#634F2B] text-white font-medium tracking-wider transition-colors shadow-sm"
          >
            お問合せはこちら
          </Link>
          <Link
            href="/"
            className="w-full sm:w-64 py-3.5 px-6 rounded-full border border-stone-300 hover:bg-stone-50 text-stone-700 font-medium tracking-wider transition-colors"
          >
            トップページへ戻る
          </Link>
        </div>
      </section>
    </div>
  );
}
