import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next' 
import '../locales/i18n'

const Navbar = () => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    }
    const {t , i18n} = useTranslation()

  return (
    <div className="bg-[#363348] p-[20px] px-[40px]">
      <div className='flex justify-between text-white'>
      <div className='flex items-center gap-4'>
      <img src="/svg.png" alt="" />
      <div className='h-10 w-[1px] bg-[#C88C61]'></div>
      </div>
        <ul className='flex gap-10'>
            <Link  to="/nas" ><li className='hover:border-b-[#C88C61] hover:border-b'>{t}</li></Link>
            <Link  to="/narx" ><li className='hover:border-b-[#C88C61] hover:border-b'>{t}</li></Link>
            <Link  to="/bron" ><li className='hover:border-b-[#C88C61] hover:border-b'>{t}</li></Link>
            <Link  to="/con" ><li className='hover:border-b-[#C88C61] hover:border-b'>{t}</li></Link>
        </ul>
        <div className='flex gap-10'>
            <h1>+7 (654) 876 09 09</h1>
            <h1 className='flex gap-1 '><span><img src="/phone.png" alt="" /></span> <span className='text-[#C88C61] border-b border-dashed border-b-[#C88C61] '>Обратный звонок</span></h1>
        </div>
{/* <select onChange={(e) => changeLanguage(e.target.value)} className='rounded-md p-2 px-4 bg-gray-700' name="" id="">
    <option value="uz">Uzbek</option>
    <option value="en">English</option>
    <option value="rus">Russian</option>
</select> */}
      </div>
    </div>
  )
}

export default Navbar
