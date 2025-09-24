import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../locales/i18n'

const Navbar = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="bg-[#363348] p-[20px] px-[40px]">
      <div className='flex justify-between text-white ml-9 items-center'>
        {/* Chap taraf (Logo) */}
        <div className='flex items-center gap-4'>
          <img src="/svg.png" alt="logo" />
          <div className='h-10 w-[1px] bg-[#C88C61]'></div>
        </div>

        {/* Menu */}
          <Link to="/nas">
  <li className='hover:border-b-[#C88C61] hover:border-b ml-10'>{t("navbar.about")}</li>
</Link>
<Link to="/narx">
  <li className='hover:border-b-[#C88C61] hover:border-b'>{t("navbar.prices")}</li>
</Link>
<Link to="/bron">
  <li className='hover:border-b-[#C88C61] hover:border-b'>{t("navbar.booking")}</li>
</Link>
<Link to="/con">
  <li className='hover:border-b-[#C88C61] hover:border-b'>{t("navbar.cosmetics")}</li>
</Link>

<div className='flex gap-10'>
  <h1>{t("navbar.phone_number")}</h1>
  <h1 className='flex gap-1'>
    <span><img src="/phone.png" alt="phone" /></span>
    <span className='text-[#C88C61] border-b border-dashed border-b-[#C88C61] '>
      {t("navbar.callback")}
    </span>
  </h1>
</div>


          {/* Tilni almashtirish */}
          <select 
            onChange={(e) => changeLanguage(e.target.value)} 
            className='rounded-md p-2 px-4 bg-gray-700 ml-6'
          >
            <option value="uz">Uzbek</option>
          <option value="ru">Русский</option>
          <option value="en">English</option>
        </select>
      </div>
    </div>
  )
}

export default Navbar
