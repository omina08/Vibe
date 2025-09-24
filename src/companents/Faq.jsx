import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const [open, setOpen] = useState(null);
  const { t, i18n } = useTranslation();

  // JSON-dan massivni olamiz
  const faqs = t("faqs", { returnObjects: true });

  return (
    <div className="max-w-3xl mx-auto py-16">
      {/* Sarlavha */}
      <h2 className="text-center text-2xl md:text-3xl font-normal text-orange-400 mb-10">
        {t("faq_title")}
      </h2>

      {/* Til tugmalari */}
      <div className="flex justify-center gap-4 mb-6">
        <button onClick={() => i18n.changeLanguage("uz")} className="px-3 py-1 bg-orange-200 rounded">UZ</button>
        <button onClick={() => i18n.changeLanguage("ru")} className="px-3 py-1 bg-orange-200 rounded">RU</button>
        <button onClick={() => i18n.changeLanguage("en")} className="px-3 py-1 bg-orange-200 rounded">EN</button>
      </div>

      {/* Savollar ro'yxati */}
      <div className="space-y-6">
        {Array.isArray(faqs) &&
          faqs.map((q, i) => (
            <div
              key={i}
              className="flex justify-between items-center border-b pb-2 cursor-pointer transition-all"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <p className="text-gray-700">{q}</p>
              <img
                src={`https://img.icons8.com/ios-glyphs/24/chevron-${open === i ? "up" : "down"}.png`}
                alt="toggle"
                className={`ml-4 w-6 bg-[#E9C9C2] rounded-3xl p-1 transition-transform duration-300 ${
                  open === i ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
          ))}
      </div>

      {/* Tugma */}
      <div className="flex justify-center mt-10">
        <button className="bg-orange-300 text-white px-8 py-3 rounded-xl shadow hover:bg-orange-400 transition">
          {t("faq_btn")}
        </button>
      </div>
    </div>
  );
};

export default Faq;
