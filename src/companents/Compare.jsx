import React from "react";

const Compare = () => {
  return (
    <div className="relative min-h-screen bg-white px-6 py-16 overflow-hidden">

      <img src="/lola.png" alt="Lola" className="absolute left-0 top-10 w-40 md:w-56 opacity-90 pointer-events-none select-none"/>
      <img src="/coffee.png" alt="Coffee" className="absolute right-0 mt-[1000px] w-40 md:w-56 opacity-90 pointer-events-none select-none"/>
            <img src="/key.png" alt="kalit" className="absolute left-0 bottom-52 w-40 opacity-90 pointer-events-none select-none"/>
      <h2 className="text-5xl font-light text-center relative z-10">
        <span className="text-[#C88C61] ">Что лучше,</span> открыть салон <br />
        самостоятельно, или выбрать <br /> почасовую аренду кабинета?
      </h2>

      <div className="mt-12 flex flex-col items-center relative z-10">
        <img  src="/image.png"  alt="Сравнение Маша и Даша"  className="w-full max-w-4xl rounded-md shadow"/>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10 text-gray-700 text-sm">
          {/* Mashaniki*/}
          <div className="space-y-6 text-left">
          <div>
                    <img className="w-7 " src="/icon2.png" alt="" />
              <p className="font-semibold flex items-center gap-2 ml-1 mt-2">
                <span className="text-orange-400">01</span> Арендовать помещение на месяц
              </p>
              <p className="mt-1 ml-1">
              Чтобы начать работать, сначала вам надо <br /> найти помещение, которое будет нужной <br /> площади, чтобы не переплачивать за  <br/>неиспользуемое пространство. Чем больше <br /> площадь, тем больше вы платите. Даже если <br /> у вас не будет клиентов, вы все ровно будете <br /> оплачивать аренду помещения
              </p>
            </div> 
            <div>
                    <img className="w-7 " src="/icon2.png" alt="" />
              <p className="font-semibold flex items-center gap-2 ml-1 mt-2">
                <span className="text-orange-400">02</span>Сделать ремонт помещения
              </p>
              <p className="mt-1 ml-1">
              После того как нашли аренду, в помещении <br /> необходимо произвести ремонт. Это всегда <br /> дополнительные траты и время. По времени <br /> ремонт занимает: 1-2 месяца. Затраты на <br /> ремонт в среднем составляют от 300.000 <br /> до 2.000.000 руб
              </p>
            </div> 
            <div>
                    <img className="w-7 " src="/icon2.png" alt="" />
              <p className="font-semibold flex items-center gap-2 ml-1 mt-2">
                <span className="text-orange-400">03</span> Купить рабочее оборудование
              </p>
              <p className="mt-1 ml-1">
              По мимо ремонта, необходимо закупить <br /> качественное оборудование для работы. <br /> Массажные кресла, свет, лампы, шкафы, <br />гардероб, ресепшен и много другое. Сейчас <br /> все это стоит очень дорого</p>
            </div> 
            <div>
                    <img className="w-7 " src="/icon2.png" alt="" />
              <p className="font-semibold flex items-center gap-2 ml-1 mt-2">
                <span className="text-orange-400">04</span> Купили лучшее оборудование для вас
              </p>
              <p className="mt-1 ml-1">
              Для комфортной работы, необходимо <br /> нанять администратора, клининг <br />, подключить охрану, интернет, купить <br /> кофе машину. Плюс вам самим придется <br /> наливать чай, кофе, встречать гостей
              </p>
            </div> 
            <div>
                    <img className="w-7 " src="/icon2.png" alt="" />
              <p className="font-semibold flex items-center gap-2 ml-1 mt-2">
                <span className="text-orange-400">05</span> Взять большой риск в кризис
              </p>
              <p className="mt-1 ml-1">
              Самостоятельное открытие салона или <br /> кабинета, требует больших вложений, а <br /> это риск. Вам любой ценой надо будет <br /> искать клиентов, чтобы покрывать все <br /> затраты, а сейчас кризис, в друг клиентов <br /> будет не хватать, чтобы покрыть затраты?
              </p>
            </div> 
          </div>

          {/* Dashaniki */}
          <div className="space-y-6 text-left">
            <div>
                <img className="w-7 " src="/icon.png" alt="" />
              <p className="font-semibold flex items-center gap-2 ml-1 mt-2">
                <span className="text-orange-400">01</span> 2 филиала в центре Москвы
              </p>
              <p className="mt-1 ml-1">
              Поиском аренды вам заниматься не <br /> нужно. Мы открыли 2 филиала в центре <br /> Москвы. Метро находиться в 3 минутах <br /> от нашего местоположения. Рядом <br /> с салоном есть большая площадь, где <br /> можно припарковать личный автомобиль. <br /> Мы искали максимально удобное место.
              </p>
            </div>
            <div>
                    <img className="w-7 " src="/icon.png" alt="" />
              <p className="font-semibold flex items-center gap-2 ml-1 mt-2">
                <span className="text-orange-400">02</span> Дорогой ремонт с WOW-эффектом
              </p>
              <p className="mt-1 ml-1">
              При открытие салона мы делали упор на <br /> премиальный сегмент. Наш салон <br /> проектировали дизайнеры, мы сделали для <br /> вас и ваших клиентов уютный и дорогой <br /> ремонт премиум класса, который вызывает <br /> WOW-эффект и повышает ваш имидж
              </p>
            </div>
            <div>
                    <img className="w-7 " src="/icon.png" alt="" />
              <p className="font-semibold flex items-center gap-2 ml-1 mt-2">
                <span className="text-orange-400">03</span> Купили лучшее оборудование для вас
              </p>
              <p className="mt-1 ml-1">
              Снимая почасовую аренду в нашем <br /> кабинете, вам не нужно думать о покупке <br />  оборудования. Мы не экономили и <br /> комплексно оборудовали кабинет всем <br /> необходимым для вашей работы.
              </p>
            </div> 

            <div>
                    <img className="w-7 " src="/icon.png" alt="" />
              <p className="font-semibold flex items-center gap-2 ml-1 mt-2">
                <span className="text-orange-400">04</span> Купили лучшее оборудование для вас
              </p>
              <p className="mt-1 ml-1">
              Снимая почасовую аренду в нашем <br /> кабинете, вам не нужно думать о покупке <br />  оборудования. Мы не экономили и <br /> комплексно оборудовали кабинет всем <br /> необходимым для вашей работы.
              </p>
            </div>
            <div>
                    <img className="w-7 " src="/icon.png" alt="" />
              <p className="font-semibold flex items-center gap-2 ml-1 mt-2">
                <span className="text-orange-400">05</span> Купили лучшее оборудование для вас
              </p>
              <p className="mt-1 ml-1">
              Снимая почасовую аренду в нашем <br /> кабинете, вам не нужно думать о покупке <br />  оборудования. Мы не экономили и <br /> комплексно оборудовали кабинет всем <br /> необходимым для вашей работы.
              </p>
            </div> 


          </div>
        </div>
        <button className='p-1 py-4 px-6 text-white rounded-md mt-16 bg-[#C88C61] items-center hover:bg-[#EBBE9C] relative z-10'> Арендовать коворкинг</button>
      </div>
    </div>
  )
}

export default Compare

