import React from 'react'
import { useTranslation } from 'react-i18next'

const Servis = () => {
  const { t } = useTranslation()

  const services = [
    {
      title: t("service.lockers.title"),
      desc: t("service.lockers.desc"),
    },
    {
      title: t("service.supplies.title"),
      desc: t("service.supplies.desc"),
    },
    {
      title: t("service.wifi.title"),
      desc: t("service.wifi.desc"),
    },
    {
      title: t("service.parking.title"),
      desc: t("service.parking.desc"),
    },
    {
      title: t("service.light.title"),
      desc: t("service.light.desc"),
    },
    {
      title: t("service.admin.title"),
      desc: t("service.admin.desc"),
    },
  ]

  return (
    <div className="mt-[100px] relative px-6">
      {/* Title */}
      <h1 className="text-2xl md:text-4xl text-center font-light">
        {t("service.header.part1")}{" "}
        <span className="text-[#C88C61]">{t("service.header.highlight")}</span>{" "}
        {t("service.header.part2")}
      </h1>

      {/* Dekor rasm */}
      <img
        className="absolute right-0 w-32 md:w-[250px] top-10 opacity-80 pointer-events-none select-none"
        src="/flower.png"
        alt="flower"
      />

      {/* Services grid */}
      <div className="mt-20 max-w-6xl mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((item, idx) => (
          <div 
            key={idx} 
            className="flex flex-col items-start p-4 rounded-lg hover:bg-gray-100 transition"
          >
            <img className="w-14 md:w-16" src="/icon (2).png" alt="icon" />
            <p className="font-semibold mt-3 text-lg md:text-xl">{item.title}</p>
            <p className="mt-2 text-gray-600 text-sm md:text-base">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <button className="py-3 px-8 md:py-4 md:px-9 text-white rounded-md bg-[#C88C61] hover:bg-[#EBBE9C] transition">
          {t("service.button")}
        </button>
      </div>
    </div>
  )
}

export default Servis

