import React from 'react'
import { useTranslation } from 'react-i18next'

const Byuti = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className='bg-[#363348] text-white flex gap-[100px] items-center px-40 h-[600px]'>
        <div>
          <h1 className='text-4xl font-light mb-4 font-seri'>
            {t("byuti.title1")} <br />
            {t("byuti.title2")} <br />
            <span className='text-[#C88C61]'>
              {t("byuti.title3")} <br /> {t("byuti.title4")}
            </span>
          </h1>

          <p className='text-sm mb-4 w-[450px]'>
            {t("byuti.desc")}
          </p>

          <h1 className='text-xl mb-4'>
            {t("byuti.subtitle")}
          </h1>

          <div className='flex items-center w-[333px] h-[70px]'>
            <img className='bg-white rounded-s-md py-2 items-center text-center' src="/phone.png" alt="" />
            <input
              className='p-1 py-3 rounded-e-md text-gray-700 px-5 bg-white'
              type="text"
              placeholder={t("byuti.placeholder")}
            />
          </div>

          <button className='p-1 py-6 px-[90px] text-white rounded-md bg-[#C88C61] items-center hover:bg-[#EBBE9C]'>
            {t("byuti.button")}
          </button>
        </div>

        <img className='relative left-52 w-36 z-10 bottom-20 hover:scale-105' src="/button play.png" alt="" />
        <img className='absolute right-10 top-14 w-[700px]' src="/chair.png" alt="" />
      </div>

      <div className='h-20 bg-[#363348]'></div>
    </>
  )
}

export default Byuti
