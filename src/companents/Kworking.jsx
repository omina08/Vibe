import React from "react";
import { useTranslation } from "react-i18next";

const Kworking = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-900">
      <div className="bg-[url('/bgimg.png')] bg-center bg-cover text-white h-[765px]">
        <h1 className="text-5xl text-center font-light pb-4 pt-10">
          {t("kworking.title")}
        </h1>

        {/* Form */}
        <div className="w-[400px] h-[450px] bg-white p-6 rounded-lg text-black mt-[80px] ml-[300px] absolute">
          <h2 className="text-2xl font-medium mb-2 text-center mt-7">
            {t("kworking.subtitle")}
          </h2>
          <h3 className="text-md font-light mb-4 text-center">
            {t("kworking.desc")}
          </h3>

          <div className="flex items-center w-[333px] h-[70px] ml-[50px]">
            <div className="bg-[#C88C61] rounded-[300px]">
              <img
                className="rounded-s-md py-2 px-2 w-9"
                src="https://img.icons8.com/windows/50/FFFFFF/phone.png"
                alt="phone"
              />
            </div>
            <input
              className="p-1 py-3 rounded-e-md text-gray-700 px-5 bg-white"
              type="text"
              placeholder={t("kworking.placeholder")}
            />
          </div>

          <button className="mt-6 h-20 w-64 text-white bg-[#C88C61] rounded-md transition hover:bg-[#EBBE9C] ml-[50px] mb-4">
            {t("kworking.button")}
          </button>

          <h1 className="ml-[50px] text-xs text-gray-700">
            {t("kworking.privacy")}{" "}
            <span className="text-[#C88C61]">{t("kworking.terms")}</span>
          </h1>
        </div>

        {/* Right side image */}
        <img
          className="relative w-[500px] left-[650px]"
          src="/curlygirl.png"
          alt="curly girl"
        />
      </div>
    </div>
  );
};

export default Kworking;
