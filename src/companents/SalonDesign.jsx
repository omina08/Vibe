import React from 'react';

const SalonDesign = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 relative">

        <h1 className='mb-10 mt-10 text-4xl text-center items-center '>ПОСМОТРИТЕ КАК БУДЕТ ВЫГЛЯДЕТЬ <br /> <span className='text-[#C88C61]  text-4xl '>ВАШ</span> РАБОЧИЙ <span className='text-[#C88C61]  text-4xl '>КАБИНЕТ</span> В САЛОНЕ</h1>
        

      <div className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row gap-8 bg-white rounded-t-2xl">
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4 p-10 ">
            <img src="/photo.png" alt="Reception 1" className="hover:scale-105 rounded-lg h-48 w-full object-cover" />
            <img src="/photo (1).png" alt="Reception 2" className="hover:scale-105 rounded-lg h-48 w-full object-cover" />
            <img src="/photo (2).png" alt="Reception 3" className="hover:scale-105 rounded-lg h-48 w-full object-cover" />
            <img src="/photo (3).png" alt="Reception 4" className="hover:scale-105 rounded-lg h-48 w-full object-cover" />
          </div>
        </div>
        
        <div className="md:w-1/3 bg-white p-6 rounded-lg text-black ">
        <h2 className="text-2xl font-bold mb-4 ">РЕСЕПШН И ЗОНА <br /> ОЖИДАНИЯ</h2>
          <h3 className="text-xl font-semibold mb-4">Что входит в стоимость:</h3>
          <ul className="space-y-3">
            <li className='flex gap-2 items-center font-medium text-sm'  > <img className="w-7 " src="/icon.png" alt="" />Услуги администратора</li>
            <li className='flex gap-2 items-center font-medium text-sm'  ><img className="w-7 " src="/icon.png" alt="" />Бесплатный wi-fi для вас и клиентов</li>
            <li className='flex gap-2 items-center font-medium text-sm'  ><img className="w-7 " src="/icon.png" alt="" />Бесплатный чай, кофе для клиента</li>
            <li className='flex gap-2 items-center font-medium text-sm'  ><img className="w-7 " src="/icon.png" alt="" />Уютная зона ожидания</li>
          </ul>
          <button className="mt-6 h-20 w-60  text-white  bg-[#C88C61]  hover:bg-[#EBBE9C]  rounded-md transition ">
          ЗАБРОНИРОВАТЬ ВРЕМЯ
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row gap-8 bg-white rounded-t-2xl">
  <div className="md:w-1/3 bg-white p-6 rounded-lg text-black">
    <h2 className="text-2xl font-bold mb-4">КАБИНЕТ <br /> МАССАЖИСТА №1</h2>
    <h3 className="text-xl font-semibold mb-4">Что входит в стоимость:</h3>
    <ul className="space-y-3">
      <li className="flex gap-2 items-center font-medium text-sm">
        <img className="w-7 " src="/icon.png" alt="" />Услуги администратора</li>
      <li className="flex gap-2 items-center font-medium text-sm">
        <img className="w-7 " src="/icon.png" alt="" />Бесплатный wi-fi для вас и клиентов</li>
      <li className="flex gap-2 items-center font-medium text-sm">
        <img className="w-7 " src="/icon.png" alt="" />Бесплатный чай, кофе для клиента</li>
      <li className="flex gap-2 items-center font-medium text-sm">
        <img className="w-7 " src="/icon.png" alt="" />Уютная зона ожидания</li>
    </ul>
    <button className="mt-6 h-20 w-60 text-white bg-[#C88C61] rounded-md transition hover:bg-[#EBBE9C]">
      ЗАБРОНИРОВАТЬ ВРЕМЯ
    </button>
  </div>

  <div className="flex-1">
    <div className="grid grid-cols-2 gap-4 p-10">
      <img src="/photo (4).png" alt="Reception 1" className=" hover:scale-105 rounded-lg h-48 w-full object-cover" />
      <img src="/photo (5).png" alt="Reception 2" className=" hover:scale-105 rounded-lg h-48 w-full object-cover" />
      <img src="/photo (6).png" alt="Reception 3" className=" hover:scale-105 rounded-lg h-48 w-full object-cover" />
      <img src="/photo (7).png" alt="Reception 4" className=" hover:scale-105 rounded-lg h-48 w-full object-cover" />
    </div>
  </div>
</div>

    </div>
  )
}

export default SalonDesign
