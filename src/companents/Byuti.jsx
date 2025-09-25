import React from 'react'
import { useTranslation } from 'react-i18next'

const Byuti = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className='bg-[#363348] text-white relative'>
        <div className='container mx-auto px-6 sm:px-10 md:px-20 lg:px-40 py-10 lg:py-20 flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16'>

          {/* Matn blok */}
          <div className='text-center lg:text-left max-w-lg lg:max-w-md flex-shrink-0'>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-light mb-4 leading-snug'>
              {t("byuti.title1")} <br />
              {t("byuti.title2")} <br />
              <span className='text-[#C88C61]'>
                {t("byuti.title3")} <br /> {t("byuti.title4")}
              </span>
            </h1>

            <p className='text-sm sm:text-base mb-4 max-w-md mx-auto lg:mx-0'>
              {t("byuti.desc")}
            </p>

            <h2 className='text-lg sm:text-xl mb-4'>
              {t("byuti.subtitle")}
            </h2>

            {/* Input va telefon */}
            <div className='flex items-center w-full max-w-sm mx-auto lg:mx-0 h-[60px] mb-4'>
              <img className='bg-white rounded-l-md py-2 px-3' src="/phone.png" alt="" />
              <input
                className='p-3 flex-1 rounded-r-md text-gray-700 bg-white'
                type="text"
                placeholder={t("byuti.placeholder")}
              />
            </div>

            <button className='w-full max-w-sm mx-auto lg:mx-0 py-4 px-10 text-white rounded-md bg-[#C88C61] hover:bg-[#EBBE9C] transition'>
              {t("byuti.button")}
            </button>
          </div>

          {/* Rasm blok */}
          <div className='relative w-full flex justify-center lg:justify-end'>
            <img
              className='w-64 sm:w-96 md:w-[500px] lg:w-[700px] relative'
              src="/chair.png"
              alt="chair"
            />
            <img
              className='absolute w-16 sm:w-20 md:w-28 lg:w-36 hover:scale-105 transition cursor-pointer'
              src="/button play.png"
              alt="play"
              style={{
                bottom: '15%',
                left: '50%',
                transform: 'translateX(-50%)'
              }}
            />
          </div>

        </div>

        <div className='h-20 md:h-24 lg:h-28'></div>
      </div>
    </>
  )
}

export default Byuti
