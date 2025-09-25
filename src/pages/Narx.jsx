import React from 'react'
import { useTranslation } from 'react-i18next'

const Narx = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="bg-[#363348] text-white flex flex-col items-center px-4 sm:px-6 md:px-10 lg:px-40 py-20">
        <h1 className="text-3xl sm:text-4xl font-extralight mb-6 text-center">
          {t("narx.title")} <br />
          <span className="text-[#C88C61]"> {t("narx.subtitle")} </span>
        </h1>
        <p className="text-sm sm:text-base mb-12 text-center max-w-2xl">
          {t("narx.desc")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {t("narx.tariffs", { returnObjects: true }).map((tariff, idx) => (
            <div key={idx} className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 hover:scale-105 transition">
              <h2 className="text-2xl font-semibold mb-2">{tariff.title}</h2>
              <p className="mb-4 text-sm sm:text-base text-gray-600">{tariff.hours}</p>
              <h3 className="text-3xl font-bold mb-6 text-[#C88C61]">{tariff.price}</h3>
              <button className="w-full py-3 rounded-md bg-[#C88C61] text-white hover:bg-[#EBBE9C]">
                {t("narx.choose")}
              </button>
            </div>
          ))}
        </div>

        {/* Afzalliklar */}
        <div className="bg-[#2e2b3d] text-white py-16 px-4 sm:px-10 w-full mt-20">
          <h2 className="text-3xl font-light text-center mb-12">{t("narx.advantages.title")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {t("narx.advantages.items", { returnObjects: true }).map((item, idx) => (
              <div key={idx} className="bg-[#363348] p-10 sm:p-16 rounded-2xl shadow-md hover:scale-105 transition bg-cover bg-center" style={{ backgroundImage: `url(${item.img})` }}>
                <h3 className="text-xl font-semibold mb-2 font-serif text-gray-900">{item.title}</h3>
                <p className="text-sm sm:text-base font-serif text-gray-900">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-[#363348] text-white py-16 px-4 sm:px-10 w-full">
          <h2 className="text-3xl font-light text-center mb-10">{t("narx.faq.title")}</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {t("narx.faq.items", { returnObjects: true }).map((item, idx) => (
              <details key={idx} className="bg-[#2e2b3d] p-6 rounded-xl cursor-pointer">
                <summary className="font-semibold text-lg">{item.q}</summary>
                <p className="mt-2 text-gray-300 text-sm sm:text-base">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Narx

