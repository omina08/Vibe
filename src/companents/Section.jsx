import React from "react";

const Section = () => {
  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12 overflow-hidden">

      <img src="/pinset.png" alt="Pinset" className="absolute right-0 bottom-0 w-40 md:w-60 opacity-90 pointer-events-none select-none"
      />
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
        <span className="text-[#EBBE9C]">Вам подойдет</span> бьюти <br /> коворкинг
        с почасовой <br /> арендой, если вы:
      </h2>
      <div className="flex flex-col md:flex-row gap-8 mt-10 relative z-10 w-[900px]">

        <div className="flex-1 flex flex-col items-center text-center">
          <img src="/im.png" alt="" className="w-full h-48 object-cover rounded-md shadow"
          />
          <h3 className="mt-4 text-lg font-medium">Работаете у себя дома</h3>
          <p className="text-gray-600 text-sm mt-2">
            Уже стало больше клиентов, которым неудобно ездить к вам на дом? ...
          </p>
        </div>

        <div className="flex-1 flex flex-col items-center text-center">
          <img src="/im2.png" alt=""    className="w-full h-48 object-cover rounded-md shadow"
          />
          <h3 className="mt-4 text-lg font-medium">Хотите работать на себя</h3>
          <p className="text-gray-600 text-sm mt-2">
            Большинство специалистов начинают работать на арендуемых местах. ...
          </p>
        </div>

        <div className="flex-1 flex flex-col items-center text-center">
          <img src="/im3.png" alt="" className="w-full h-48 object-cover rounded-md shadow"
          />
          <h3 className="mt-4 text-lg font-medium">
            Хотите арендовать кабинет
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Аренда собственного кабинета на целый месяц требует больших затрат. ...
          </p>
        </div>
      </div>

      <button className='p-1 py-3 px-9 text-white rounded-md mt-10 bg-[#EBBE9C] items-center  relative z-10 hover:bg-[#C88C61]'> Арендовать коворкинг</button>
    </div>
  )
}

export default Section
