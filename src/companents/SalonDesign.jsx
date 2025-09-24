import React from "react";

const rooms = [
  {
    title: "РЕСЕПШН И ЗОНА ОЖИДАНИЯ",
    images: ["/photo.png", "/photo (1).png", "/photo (2).png", "/photo (3).png"],
    features: [
      "Услуги администратора",
      "Бесплатный wi-fi для вас и клиентов",
      "Бесплатный чай, кофе для клиента",
      "Уютная зона ожидания",
    ],
  },
  {
    title: "КАБИНЕТ МАССАЖИСТА №1",
    images: ["/photo (4).png", "/photo (5).png", "/photo (6).png", "/photo (7).png"],
    features: [
      "Услуги администратора",
      "Бесплатный wi-fi для вас и клиентов",
      "Бесплатный чай, кофе для клиента",
      "Уютная зона ожидания",
    ],
  },
];

const SalonDesign = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 relative">
      <h1 className="mb-10 mt-10 text-3xl md:text-4xl text-center">
        ПОСМОТРИТЕ КАК БУДЕТ ВЫГЛЯДЕТЬ <br />
        <span className="text-[#C88C61]">ВАШ</span> РАБОЧИЙ{" "}
        <span className="text-[#C88C61]">КАБИНЕТ</span> В САЛОНЕ
      </h1>

      {rooms.map((room, idx) => (
        <div
          key={idx}
          className={`max-w-6xl mx-auto mb-16 flex flex-col md:flex-row gap-8 bg-white rounded-t-2xl overflow-hidden ${
            idx % 2 === 0 ? "" : "md:flex-row-reverse"
          }`}
        >
          {/* Text part */}
          <div className="md:w-1/3 bg-white p-6 rounded-lg text-black">
            <h2 className="text-xl md:text-2xl font-bold mb-4">{room.title}</h2>
            <h3 className="text-lg font-semibold mb-4">Что входит в стоимость:</h3>
            <ul className="space-y-3">
              {room.features.map((f, i) => (
                <li
                  key={i}
                  className="flex gap-2 items-center font-medium text-sm"
                >
                  <img className="w-6" src="/icon.png" alt="icon" />
                  {f}
                </li>
              ))}
            </ul>
            <button className="mt-6 h-16 w-56 text-white bg-[#C88C61] rounded-md transition hover:bg-[#EBBE9C]">
              ЗАБРОНИРОВАТЬ ВРЕМЯ
            </button>
          </div>

          {/* Images */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4 p-6">
              {room.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`room-${i}`}
                  className="rounded-lg aspect-[4/3] w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SalonDesign;
