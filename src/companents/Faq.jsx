import React, { useState } from "react";

const faqs = [
  "Что делать, если у меня записался клиент, а у вас нет свободных мест?",
  "Не будет ли такого, что другие мастера будут перехватывать моих клиентов?",
  "Если клиент внезапно выписался, мне все равно оплачивать аренду?",
  "Я обязательно должна буду представляться от имени вашего салона?",
  "Могу ли я оставлять все свои инструменты у вас в салоне?",
  "Мне необходимо искать клиентов самой, или у вас есть своя база?",
  "Обязательно ли передавать данные о клиентах вашему администратору?",
]

const Faq = () => {
  const [open, setOpen] = useState(null)

  return (
    <>
    <img className="absolute w-[400px] " src="/atr.png" alt="" />

  <div className="ml-[100px]">
  <div className="max-w-3xl mx-auto py-16 relative">

<h2 className="text-center text-2xl md:text-3xl font-normal text-orange-400 mb-10">
  ВОПРОСЫ, КОТОРЫЕ НАМ ЗАДАЮТ ЧАЩЕ ВСЕГО ПЕРЕД ТЕМ, КАК ОБРАТИТЬСЯ
</h2>

<div className="space-y-10">
  {faqs.map((q, i) => (
    <div key={i} className="flex justify-between items-center border-b pb-2 cursor-pointer" onClick={() => setOpen(open === i ? null : i)}>
      <p className="text-gray-700">{q}</p>
      <img src={`https://img.icons8.com/ios-glyphs/24/chevron-${open === i ? "up" : "down"}.png`} alt="toggle" className="ml-4 w-6 bg-[#E9C9C2] rounded-3xl p-1" />
    </div>
  ))}
</div>

<div className="flex justify-center mt-10">
  <button className="bg-orange-300 text-white px-8 py-3 rounded-xl shadow hover:bg-orange-400 transition">
    ЗАДАТЬ ВОПРОС
  </button>
</div>
</div>
  </div>
    </>
  )
}

export default Faq
