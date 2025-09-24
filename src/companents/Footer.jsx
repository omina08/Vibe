import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white py-10 px-6 border-t border-gray-200 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        {/* Logo + Social */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src="/svg@2x.png" alt="logo" className="w-32 mb-4" />

          <div className="flex items-center gap-6">
            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E9C9C2] hover:opacity-80 transition"
              >
                <FaInstagram className="text-white text-lg" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E9C9C2] hover:opacity-80 transition"
              >
                <FaWhatsapp className="text-white text-lg" />
              </a>
            </div>

            {/* Phone */}
            <div>
              <p className="text-lg font-semibold">+7 (980) 687-98-98</p>
              <p className="text-sm text-[#C88C61]">{t("footer.freecall")}</p>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-6 text-sm text-gray-800 font-medium">
          <div className="flex flex-col gap-2">
            <a className="hover:underline" href="#">{t("footer.about")}</a>
            <a className="hover:underline" href="#">{t("footer.prices")}</a>
            <a className="hover:underline" href="#">{t("footer.booking")}</a>
            <a className="hover:underline" href="#">{t("footer.contacts")}</a>
          </div>
          <div className="flex flex-col gap-2">
            <a className="hover:underline" href="#">{t("footer.articles")}</a>
            <a className="hover:underline" href="#">{t("footer.franchise")}</a>
            <a className="hover:underline" href="#">{t("footer.jobs")}</a>
            <a className="hover:underline" href="#">{t("footer.legal")}</a>
          </div>
        </div>
      </div>

      {/* Copy */}
      <div className="text-center text-xs text-gray-400 mt-10">
        {t("footer.privacy")}
      </div>
    </footer>
  );
};

export default Footer;
