import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import axiosFetch from "../axios/axiosFetch";

const Bron = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axiosFetch.post("school", data);
      if (res.status === 201) {
        alert(t("bronForm.success"));
        reset();
      }
    } catch (error) {
      console.error("Xatolik:", error);
      alert(t("bronForm.error"));
    }
  }

  return (
    <div className="bg-gray-900 pb-14">
      <div className="container px-4 mx-auto py-10">
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-2xl p-8 border rounded-3xl shadow-md bg-white"
          >
            <h1 className="text-2xl font-bold text-black mb-2">{t("bronForm.title")}</h1>
            <p className="text-lg font-semibold text-gray-700 mb-6">{t("bronForm.subtitle")}</p>

            {/* Name & Email */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label className="block mb-2 font-medium text-gray-700">{t("bronForm.name")}</label>
                <input
                  {...register("name", { required: true, minLength: 4, maxLength: 15 })}
                  className="w-full p-3 rounded-3xl focus:outline-none bg-gray-200"
                  type="text"
                  placeholder={t("bronForm.namePlaceholder")}
                />
                {errors.name?.type === "required" && <p className="text-red-400">{t("bronForm.errors.nameRequired")}</p>}
                {errors.name?.type === "minLength" && <p className="text-red-400">{t("bronForm.errors.nameMin")}</p>}
                {errors.name?.type === "maxLength" && <p className="text-red-400">{t("bronForm.errors.nameMax")}</p>}
              </div>

              <div className="flex-1">
                <label className="block mb-2 font-medium text-gray-700">{t("bronForm.email")}</label>
                <input
                  {...register("email", { required: true })}
                  placeholder={t("bronForm.emailPlaceholder")}
                  className="w-full p-3 rounded-3xl focus:outline-none bg-gray-200"
                  type="email"
                />
                {errors.email && <p className="text-red-400">{t("bronForm.errors.emailRequired")}</p>}
              </div>
            </div>

            {/* Phone & Address */}
            <div className="flex flex-col md:flex-row gap-6 mt-6">
              <div className="flex-1">
                <label className="block mb-2 font-medium text-gray-700">{t("bronForm.phone")}</label>
                <input
                  {...register("phone", { required: true, minLength: 15, maxLength: 15 })}
                  className="w-full p-3 rounded-3xl focus:outline-none bg-gray-200"
                  type="tel"
                  placeholder={t("bronForm.phonePlaceholder")}
                />
                {errors.phone?.type === "required" && <p className="text-red-400">{t("bronForm.errors.phoneRequired")}</p>}
                {(errors.phone?.type === "minLength" || errors.phone?.type === "maxLength") && <p className="text-red-400">{t("bronForm.errors.phoneLength")}</p>}
              </div>

              <div className="flex-1">
                <label className="block mb-2 font-medium text-gray-700">{t("bronForm.address")}</label>
                <input
                  {...register("url")}
                  className="w-full p-3 rounded-3xl focus:outline-none bg-gray-200"
                  type="text"
                  placeholder={t("bronForm.addressPlaceholder")}
                />
              </div>
            </div>

            {/* Message */}
            <div className="mt-6">
              <label className="block mb-2 font-medium text-gray-700">{t("bronForm.message")}</label>
              <textarea
                {...register("message", { required: true, minLength: 25, maxLength: 100 })}
                placeholder={t("bronForm.messagePlaceholder")}
                className="w-full h-28 p-3 rounded-3xl focus:outline-none bg-gray-200"
              />
              {errors.message?.type === "required" && <p className="text-red-400">{t("bronForm.errors.messageRequired")}</p>}
              {errors.message?.type === "minLength" && <p className="text-red-400">{t("bronForm.errors.messageMin")}</p>}
              {errors.message?.type === "maxLength" && <p className="text-red-400">{t("bronForm.errors.messageMax")}</p>}
            </div>

            {/* Submit Button */}
            <div className="flex justify-start mt-8">
              <button type="submit" className="py-3 px-10 bg-[#C88C61] text-white rounded-3xl transition hover:bg-[#EBBE9C]">
                {t("bronForm.submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Bron
