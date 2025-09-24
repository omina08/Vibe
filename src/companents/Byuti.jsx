import React from 'react'
import { useTranslation } from 'react-i18next'

const Byuti = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className='bg-[#363348] text-white flex flex-col lg:flex-row gap-10 lg:gap-[100px] items-center px-6 sm:px-10 md:px-20 lg:px-40 py-10 lg:h-[600px] relative'>

        {/* Matn blok */}
        <div className='text-center lg:text-left max-w-lg'>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl font-light mb-4 font-seri leading-snug'>
            {t("byuti.title1")} <br />
            {t("byuti.title2")} <br />
            <span className='text-[#C88C61]'>
              {t("byuti.title3")} <br /> {t("byuti.title4")}
            </span>
          </h1>

          <p className='text-sm mb-4 max-w-md mx-auto lg:mx-0'>
            {t("byuti.desc")}
          </p>

          <h1 className='text-lg sm:text-xl mb-4'>
            {t("byuti.subtitle")}
          </h1>

          <div className='flex items-center w-full max-w-sm mx-auto lg:mx-0 h-[60px] mb-4'>
            <img className='bg-white rounded-l-md py-2 px-3' src="/phone.png" alt="" />
            <input
              className='p-2 flex-1 rounded-r-md text-gray-700 bg-white'
              type="text"
              placeholder={t("byuti.placeholder")}
            />
          </div>

          <button className='w-full max-w-sm mx-auto lg:mx-0 py-4 px-10 text-white rounded-md bg-[#C88C61] hover:bg-[#EBBE9C] transition'>
            {t("byuti.button")}
          </button>
        </div>

        {/* Video play tugmasi */}
        <img
          className='absolute lg:static lg:left-1/3 w-20 sm:w-24 md:w-28 lg:w-36 z-10 bottom-10 lg:bottom-20 hover:scale-105 transition'
          src="/button play.png"
          alt=""
        />

        {/* Fon rasmi */}
        <img
          className='w-64 sm:w-96 md:w-[500px] lg:w-[700px] mb-10 lg:mb-0'
          src="/chair.png"
          alt="chair"
        />
      </div>

      <div className='h-10 md:h-20 bg-[#363348]'></div>
    </>
  )
}

export default Byuti
