import React from 'react'

const Byuti = () => {
  return (
    <>
    <div className='bg-[#363348] text-white flex gap-[100px] items-center px-40 h-[600px]'>
      <div>
        <h1 className='text-4xl font-extralight mb-4'>БЬЮТИ КОВОРКИНГ <br /> ДЛЯ МАССАЖИСТА <br />
       <span className='text-[#C88C61]'> C ПОЧАСОВОЙ <br /> АРЕНДОЙ </span> КАБИНЕТА</h1>
       <p className='text-sm mb-4'>Теперь не нужно платить ежемесячную аренду, делать дорогой <br /> ремонт, покупать оборудование, убирать помещение, платить за <br /> охрану, интернет и зарплату администратору</p>
       <h1 className='text-xl mb-4'>Оплачивайте только реальные часы <br /> работы с клиентом, никаких затрат</h1>
       <div className='flex items-center w-[333px] h-[70px] '>
       <img className='bg-white rounded-s-md py-2 items-center text-center' src="/phone.png" alt="" />
        <input className='p-1 py-3 rounded-e-md text-gray-700 px-5 '  type="text" placeholder='+7 (___) ___ - __ -__' />
       </div>
       <button className='p-1 py-3 px-9 text-white rounded-md bg-[#C88C61] items-center hover:bg-[#EBBE9C]'>ЗАБРОНИРОВАТЬ ВРЕМЯ</button>
      </div>
      <img className='relative left-52 w-36 z-10 bottom-20 hover:scale-105' src="/button play.png" alt="" />
      <img className=' absolute right-10 top-14 w-[700px]' src="/chair.png" alt="" />
    </div>
    <div className='h-20 bg-[#363348]'></div>
    </>
  )
}

export default Byuti
