import React from 'react'

const Narx = () => {
  return (
    <>
      <div className="bg-[#363348] text-white flex flex-col items-center px-40 py-20">
        <h1 className="text-4xl font-extralight mb-6 text-center">
          ТАРИФЫ <br />
          <span className="text-[#C88C61]"> ПОЧАСОВОЙ АРЕНДЫ </span>
        </h1>
        <p className="text-sm mb-12 text-center max-w-2xl">
          Выбирайте удобный для вас тариф и оплачивайте только те часы, когда работаете с клиентом. 
          Никаких лишних затрат — только комфортная работа.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Tariff 1 */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 hover:scale-105 transition">
            <h2 className="text-2xl font-semibold mb-4">Стандарт</h2>
            <p className="mb-4 text-sm text-gray-600">Аренда на 1 час</p>
            <h3 className="text-3xl font-bold mb-6 text-[#C88C61]">500 ₽</h3>
            <button className="w-full py-3 rounded-md bg-[#C88C61] text-white hover:bg-[#EBBE9C]">
              Выбрать
            </button>
          </div>

          {/* Tariff 2 */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 hover:scale-105 transition">
            <h2 className="text-2xl font-semibold mb-4">Премиум</h2>
            <p className="mb-4 text-sm text-gray-600">Аренда на 5 часов</p>
            <h3 className="text-3xl font-bold mb-6 text-[#C88C61]">2200 ₽</h3>
            <button className="w-full py-3 rounded-md bg-[#C88C61] text-white hover:bg-[#EBBE9C]">
              Выбрать
            </button>
          </div>

          {/* Tariff 3 */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 hover:scale-105 transition">
            <h2 className="text-2xl font-semibold mb-4">Максимум</h2>
            <p className="mb-4 text-sm text-gray-600">Аренда на день (8 часов)</p>
            <h3 className="text-3xl font-bold mb-6 text-[#C88C61]">3500 ₽</h3>
            <button className="w-full py-3 rounded-md bg-[#C88C61] text-white hover:bg-[#EBBE9C]">
              Выбрать
            </button>
          </div>

          {/* Tariff 4 */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 hover:scale-105 transition">
            <h2 className="text-2xl font-semibold mb-4">Комфорт</h2>
            <p className="mb-4 text-sm text-gray-600">Аренда на 3 часа</p>
            <h3 className="text-3xl font-bold mb-6 text-[#C88C61]">1300 ₽</h3>
            <button className="w-full py-3 rounded-md bg-[#C88C61] text-white hover:bg-[#EBBE9C]">
              Выбрать
            </button>
          </div>

          {/* Tariff 5 */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 hover:scale-105 transition">
            <h2 className="text-2xl font-semibold mb-4">Ночной</h2>
            <p className="mb-4 text-sm text-gray-600">Аренда на ночь (22:00 – 08:00)</p>
            <h3 className="text-3xl font-bold mb-6 text-[#C88C61]">4000 ₽</h3>
            <button className="w-full py-3 rounded-md bg-[#C88C61] text-white hover:bg-[#EBBE9C]">
              Выбрать
            </button>
          </div>

          {/* Tariff 6 */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 hover:scale-105 transition">
            <h2 className="text-2xl font-semibold mb-4">VIP</h2>
            <p className="mb-4 text-sm text-gray-600">Аренда на месяц</p>
            <h3 className="text-3xl font-bold mb-6 text-[#C88C61]">25 000 ₽</h3>
            <button className="w-full py-3 rounded-md bg-[#C88C61] text-white hover:bg-[#EBBE9C]">
              Выбрать
            </button>
          </div>
        </div>

       {/* Afzalliklar */}
<div className="bg-[#2e2b3d] text-white py-16 px-10 w-full mt-20">
  <h2 className="text-3xl font-light text-center mb-12">Почему выбирают нас?</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-[#363348] p-20 rounded-2xl shadow-md hover:scale-105 transition bg-[url('https://s3.stroi-news.ru/img/uyutnii-kabinet-kosmetologa-dizain-oboi-3.jpg')] bg-cover bg-center bg-no-repeat">
      <h3 className="text-xl font-semibold mb-2 font-serif text-gray-900">Комфортные кабинеты</h3>
      <p className="text-sm font-serif text-gray-900">Современное оборудование и уютная атмосфера.</p>
    </div>
    <div className="bg-[#363348]  p-20  rounded-2xl shadow-md hover:scale-105 transition  bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEhHscZdv_MkcQKh120LYgvhwITVpn_kPuOw&s')] bg-cover bg-center bg-no-repeat">
      <h3 className="text-xl font-semibold mb-2 font-serif text-gray-900">Гибкие тарифы</h3>
      <p className="text-sm font-serif text-gray-900">Вы платите только за реально использованное время.</p>
    </div>
    <div className="bg-[#363348]  p-20  rounded-2xl shadow-md hover:scale-105 transition  bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf1_2E3nM6NLU-5BCe86PNW9ZT_wXBkp_MSQ&s')] bg-cover bg-center bg-no-repeat">
      <h3 className="text-xl font-semibold mb-2 font-serif text-gray-900">Доступные цены</h3>
      <p className="text-sm font-serif text-gray-900">Разнообразные тарифы под любые запросы.</p>
    </div>
  </div>
</div>

{/* FAQ */}
<div className="bg-[#363348] text-white py-16 px-10 w-full">
  <h2 className="text-3xl font-light text-center mb-10">Часто задаваемые вопросы</h2>
  <div className="max-w-3xl mx-auto space-y-4">
    <details className="bg-[#2e2b3d] p-6 rounded-xl cursor-pointer">
      <summary className="font-semibold text-lg">Можно ли забронировать зал заранее?</summary>
      <p className="mt-2 text-gray-300 text-sm">Да, вы можете оформить бронь онлайн или по телефону.</p>
    </details>
    <details className="bg-[#2e2b3d] p-6 rounded-xl cursor-pointer">
      <summary className="font-semibold text-lg">Что включено в аренду?</summary>
      <p className="mt-2 text-gray-300 text-sm">В аренду входит оборудование, мебель и уборка.</p>
    </details>
    <details className="bg-[#2e2b3d] p-6 rounded-xl cursor-pointer">
      <summary className="font-semibold text-lg">Можно ли отменить бронь?</summary>
      <p className="mt-2 text-gray-300 text-sm">Да, отменить можно за 24 часа до начала аренды.</p>
    </details>
  </div>
</div>


      </div>
    </>
  )
}

export default Narx


