import React from 'react'

const Kworking = () => {
  return (
    <div className='bg-gray-900'>
    <div className=" bg-[url('/bgimg.png')] bg-center bg-cover text-white h-[765px]">
     <h1 className=' text-5xl text-center items-center font-light pb-4 pt-10'> Хотите узнать<span className='text-[#C88C61]  text-5xl font-light'>  сколько стоит </span> <br /> аренда коворкинга?</h1>
    
     <div className="w-[400px] h-[450px] bg-white p-6 rounded-lg text-black mt-[80px] ml-[300px] absolute">
    <h2 className="text-2xl font-medium mb-2 text-center mt-7">Оставьте заявку</h2>
    <h3 className="text-md font-light mb-4 text-center"> С вами свяжется менеджер <br /> и проконсультирует по всем вопросам</h3>
    
    <div className='flex items-center w-[333px] h-[70px] ml-[50px]'>
     <div className='bg-[#C88C61] rounded-[300px]'>
     <img className=' rounded-s-md py-2 px-2 items-center text-center w-9' src="https://img.icons8.com/windows/50/FFFFFF/phone.png" alt="" />
     </div>
        <input className='p-1 py-3 rounded-e-md text-gray-700 px-5 '  type="text" placeholder='+7 (___) ___ - __ -__' />
       </div>
    <button className="mt-6 h-20 w-64 text-white bg-[#C88C61] rounded-md transition hover:bg-[#EBBE9C] ml-[50px]  mb-4">
    ВЫБРАТЬ ПОМЕЩЕНИЕ
    </button>
    <h1 className='ml-[50px] text-xs text-gray-700'>Я согласна на обработку моих персональных <br /> данных в соответствии с <span className='text-[#C88C61]'> условиями</span></h1>
  </div>
  <img className=' relative w-[500px] left-[650px]' src="/curlygirl.png" alt="" />
    </div>
    </div>
  )
}

export default Kworking
