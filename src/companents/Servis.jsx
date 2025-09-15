import React from 'react'

const Servis = () => {
  return (
    <div className='mt-[100px] h-[1000px]'>
      <div>
        <h1 className='text-4xl text-center font-light'>КАКИЕ ЕЩЁ  <span className='text-[#C88C61] mb-7'>  СЕРВИСНЫЕ УДОБСТВА </span> МЫ <br /> СОЗДАЛИ ДЛЯ ВАС И ВАШИХ КЛИЕНТОВ?
        </h1>
        <img className='absolute right-0 w-[300px]' src="/flower.png" alt="" />
        <div className='w-[1000px] flex flex-wrap  justify-center ml-[270px] relative'>
        <div className='mt-28 '>
              <img className="w-16 " src="/icon (2).png" alt="" />
              <p className="font-semibold flex items-center gap-2 ml-1 mt-2 text-xl"> 
              Ящики с замком для <br /> хранения вещей
              </p>
              <p className="mt-1 ml-1">
              Оставляйте все <br /> необходимое — защиту <br /> гарантируем
              </p>
            </div> 


            <div className='mt-28 ml-[100px]'>
              <img className="w-16 " src="/icon (2).png" alt="" />
              <p className="font-semibold flex items-center gap-2 ml-1 mt-2 text-xl"> 
              Возможность покупки <br /> расходников
              </p>
              <p className="mt-1 ml-1">
              Администратор сделает <br /> заказ любых средств <br /> различных торговых <br /> марок
              </p>
            </div> 

            <div className='mt-28 ml-[100px]'>
              <img className="w-16 " src="/icon (2).png" alt="" />
              <p className="font-semibold flex items-center gap-2 ml-1 mt-2 text-xl"> 
              Безлимитный Wi-Fi, <br /> чай и кофе для вас <br /> и клиентов
              </p>
              <p className="mt-1 ml-1">
              Всегда есть, чем заняться <br /> в перерывах

              </p>
            </div> 

            <div className='mt-28 ml-[70px]'>
              <img className="w-16 " src="/icon (2).png" alt="" />
              <p className="font-semibold flex items-center gap-2 ml-1 mt-2 text-xl"> 
              Удобная парковка <br /> для вас и ваших <br /> клиентов
              </p>
              <p className="mt-1 ml-1">
              Возле салона, есть большое <br /> пространство для парковки <br /> личного автомобиля
              </p>
            </div> 

            <div className='mt-28 ml-[150px]'>
              <img className="w-16 " src="/icon (2).png" alt="" />
              <p className="font-semibold flex items-center gap-2 ml-1 mt-2 text-xl"> 
              Профессиональный  <br />свет для фотосъемки
              </p>
              <p className="mt-1 ml-1">
              С техникой разберется <br /> даже новичок, а снимки <br /> точно получатся
              </p>
            </div> 

            <div className='mt-28 ml-[150px]'>
              <img className="w-16 " src="/icon (2).png" alt="" />
              <p className="font-semibold flex items-center gap-2 ml-1 mt-2 text-xl"> 
              Услуги <br /> администратора
              </p>
              <p className="mt-1 ml-1">
              Оставляйте все <br /> необходимое — защиту <br /> гарантируем
              </p>
            </div> 
        </div>
        <button className='p-1 py-4  px-9 text-white rounded-md bg-[#C88C61] items-center hover:bg-[#EBBE9C] ml-[690px] mt-10'>ЗАБРОНИРОВАТЬ ВРЕМЯ</button>
      </div>
    </div>
  )
}

export default Servis
