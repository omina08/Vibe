import React from "react"
import { useForm } from "react-hook-form"
import axiosFetch from "../axios/axiosFetch"

const Bron = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const res = await axiosFetch.post("school", data)
      if (res.status === 201) {
        alert("Ma'lumot qo'shildi ✅")
        reset()
      }
    } catch (error) {
      console.error("Xatolik:", error)
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
            <h1 className="text-2xl font-bold text-black mb-2">
              Забронировать сейчас
            </h1>
            <p className="text-lg font-semibold text-gray-700 mb-6">
              Оставьте заявку, и мы скоро подтвердим.
            </p>

            {/* Name & Email */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label className="block mb-2 font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  {...register("name", { required: true, minLength: 4, maxLength: 15 })}
                  className="w-full p-3 rounded-3xl focus:outline-none bg-gray-200"
                  type="text"
                  placeholder="Angelina Doe"
                />
                {errors.name?.type === "required" && <p className="text-red-400">You must fill this</p>}
                {errors.name?.type === "minLength" && <p className="text-red-400">At least 4 letters</p>}
                {errors.name?.type === "maxLength" && <p className="text-red-400">No more than 15 letters</p>}
              </div>

              <div className="flex-1">
                <label className="block mb-2 font-medium text-gray-700">
                  Email address
                </label>
                <input
                  {...register("email", { required: true })}
                  placeholder="example@domain.com"
                  className="w-full p-3 rounded-3xl focus:outline-none bg-gray-200"
                  type="email"
                />
                {errors.email && <p className="text-red-400">Email is required</p>}
              </div>
            </div>

            {/* Phone & Address */}
            <div className="flex flex-col md:flex-row gap-6 mt-6">
              <div className="flex-1">
                <label className="block mb-2 font-medium text-gray-700">
                  Phone
                </label>
                <input
                  {...register("phone", { required: true, minLength: 15, maxLength: 15 })}
                  className="w-full p-3 rounded-3xl focus:outline-none bg-gray-200"
                  type="tel"
                  placeholder="+1-999-999-9999"
                />
                {errors.phone?.type === "required" && <p className="text-red-400">You must fill this</p>}
                {errors.phone?.type === "minLength" && <p className="text-red-400">Must be 15 digits</p>}
                {errors.phone?.type === "maxLength" && <p className="text-red-400">Must be 15 digits</p>}
              </div>

              <div className="flex-1">
                <label className="block mb-2 font-medium text-gray-700">
                  Address
                </label>
                <input
                  {...register("url")}
                  className="w-full p-3 rounded-3xl focus:outline-none bg-gray-200"
                  type="text"
                  placeholder="Например: ул. Пушкина, дом 15"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mt-6">
              <label className="block mb-2 font-medium text-gray-700">
                Message
              </label>
              <textarea
                {...register("message", { required: true, minLength: 25, maxLength: 100 })}
                placeholder="Tell us briefly about your needs"
                className="w-full h-28 p-3 rounded-3xl focus:outline-none bg-gray-200"
              />
              {errors.message?.type === "required" && <p className="text-red-400">Message required</p>}
              {errors.message?.type === "minLength" && <p className="text-red-400">At least 25 characters</p>}
              {errors.message?.type === "maxLength" && <p className="text-red-400">No more than 100 characters</p>}
            </div>

            {/* Button */}
            <div className="flex justify-start mt-8">
              <button type="submit" className="py-3 px-10 bg-[#C88C61] text-white rounded-3xl transition hover:bg-[#EBBE9C]">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Bron
