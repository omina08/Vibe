import React from "react"
import { useForm } from "react-hook-form"
import axiosFetch from "../axios/axiosFetch"

const Bron = () => {
  const { register, handleSubmit, reset, formState : {errors} } = useForm()

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axiosFetch.post("school", data)
      if (res.status === 201) {
        alert("Ma'lumot qo'shildi ✅")
        reset()
      }
    } catch (error) {
      console.error("Xatolik:", error)
    }
    
    console.log(errors)
    
  }

  return (
    <div className="bg-gray-900 pb-[57px]">
      <div className="container px-4 mx-auto py-10">
        <div className="flex justify-center h-full items-center">
          <form onSubmit={handleSubmit(onSubmit)} className="w-[800px] h-auto p-8 border rounded-3xl shadow-md bg-white">
            <h1 className="text-2xl font-bold text-start text-black mb-2">
            Забронировать сейчас
            </h1>
            <h1 className="text-lg font-semibold text-start text-gray-700 mb-6">Оставьте заявку, и мы скоро подтвердим.</h1>

            <div className="flex gap-10">
              <div>
              <h1 className="block mb-2 ml-2 mt-2 font-medium text-gray-700">
              Your Name
            </h1>
              <input {...register("name", {required : true , minLength:4, maxLength:15})} className=" p-3  rounded-3xl focus:outline-none bg-gray-200" type="text" placeholder="Angelina Doe"/>
               {
              errors.name?.type == "required"  ? <h1 className='text-red-400'>You must be fill</h1> : 
              errors.name?.type == "minLength" ? <h1 className='text-red-400'>You should enter at list 4 letters</h1> : 
              errors.name?.type == "maxLength" ? <h1 className='text-red-400'>You should enter no more than 15 letters</h1> : <h1></h1>

            }
              </div>
            
             <div>
             <h1 className="block mb-2 ml-2 mt-2 font-medium text-gray-700">
              Email address
            </h1>
            <input {...register("email", {required : true})} placeholder="example@domain.com" className="w-full p-3  rounded-3xl mb-4 focus:outline-none bg-gray-200" type="email"/>

             {
              errors.email?.type == "required"  ? <h1 className='text-red-400'>You must be fill</h1> : 
              errors.email?.type == "minLength" ? <h1 className='text-red-400'>You should enter at list 10 letters</h1> : 
              errors.email?.type == "maxLength" ? <h1 className='text-red-400'>You should enter no more than 25 letters</h1> : <h1></h1>

            }
             </div>

              </div>


<div className="flex items-center justify-between w-[350px]">
<h1 className=" mb-2 ml-2  font-medium text-gray-700">
             Phone
            </h1>


            <h1 className="block mb-2 mr-11 mt-2 font-medium text-gray-700">
            Adress
            </h1>
</div>
              <div className="flex gap-10">
              <div className="">
              <input {...register("phone", {required : true , minLength:15, maxLength:15})} className=" p-3  rounded-3xl focus:outline-none bg-gray-200" type="number" placeholder="+1-999-999-9999"/>
               {
              errors.phone?.type == "required"  ? <h1 className='text-red-400'>You must be fill</h1> : 
              errors.phone?.type == "minLength" ? <h1 className='text-red-400'>You should enter at list 15 letters</h1> : 
              errors.phone?.type == "maxLength" ? <h1 className='text-red-400'>You should enter no more than 15 letters</h1> : <h1></h1>

            }
              </div>
            
             <div>

             <input {...register("url")} className="p-3 border rounded-3xl focus:outline-none bg-gray-200" type="text" placeholder="Например: ул. Пушкина, дом 15, кв. 7"/>
             </div>

              </div>

          

            <h1 className="block mb-4 ml-2 mt-2 font-medium text-gray-700">
              Message
            </h1>
            <input {...register("message", {required : true, minLength:25, maxLength:100})} placeholder="Tell us briefly about your needs" className="w-full h-[100px] p-3  rounded-3xl  focus:outline-none bg-gray-200" type="message"/>
            {
              errors.message?.type == "required" ? <h1 className='text-red-400'>You must be fill</h1> : 
              errors.message?.type == "minLength" ? <h1 className='text-red-400'>You should enter at list 25 letters</h1> : 
              errors.message?.type == "maxLength" ? <h1 className='text-red-400 '>You should enter no more than 100 letters</h1> : <h1></h1>

            }

            <div className="flex justify-start mt-10">
              <button type="submit" className="py-3 px-10 bg-[#C88C61] text-white rounded-3xl  transition">
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