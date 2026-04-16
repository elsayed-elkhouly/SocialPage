"use client";
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { BsTicketPerforated } from 'react-icons/bs';
import { FiEye, FiEyeOff } from 'react-icons/fi';
type FormData = {
  subdomain: string;
  email: string;
  password: string;
  phone: string;
  UserName: string;
  officeName: string;
  planId: string;
  billingInterval: "monthly" | "yearly";
  // couponCode: string;
  // saveCard: boolean;
  // paymentMethod: "card" | "cash";
};
const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { id } = useParams();
  // console.log(id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      planId: `${id}`,
      // saveCard: false,
      // couponCode: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    const payload = {
      subdomain: data.subdomain,
      email: data.email,
      password: data.password,
      phone: data.phone,
      UserName: data.UserName,
      officeName: data.officeName,
      planId: id,
      billingInterval: data.billingInterval,
      // couponCode: data.couponCode,
      // saveCard: data.saveCard,
      // paymentMethod: data.paymentMethod,
    };
    try {
      const res = await axios.post(
        "https://api.helperlawyer.online/subscription/register",
        payload
      );

      console.log("تم التسجيل:", res.data);
      // رقم الواتساب بصيغة دولية بدون +
      const whatsappNumber = "201101063100";

      // رسالة جاهزة
      const message = `مرحبًا، تم تسجيل عميل جديد.
الاسم: ${data.UserName}
الإيميل: ${data.email}
الهاتف: ${data.phone}
اسم المكتب: ${data.officeName}`;

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`;

      window.open(whatsappUrl, "_blank");
      reset()
    } catch (error: any) {
      console.log("error response:", error.response);
    }


  };

  return (
    <>



      <div className="min-h-screen flex items-center justify-center bg-[#0e1a2b] text-white">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#0b1120] p-8 rounded-lg shadow-lg w-full max-w-2xl text-right"
        >
          <h2 className="text-xl font-bold mb-6 text-center">
            معلومات المكتب والمستخدم
          </h2>

          <div className="grid grid-cols-2 gap-6">
            {/* اسم المستخدم */}
            <div>
              <label className="block mb-2">اسم المستخدم</label>
              <input
                type="text"
                placeholder="lawyer_name"
                {...register("UserName", {
                  required: "اسم المستخدم مطلوب",
                  minLength: {
                    value: 2,
                    message: "اسم المستخدم يجب ألا يقل عن حرفين",
                  },
                  maxLength: {
                    value: 50,
                    message: "اسم المستخدم يجب ألا يتجاوز 50 حرفاً",
                  },
                })}
                className="w-full p-3 rounded-2xl bg-[#1a2636] focus:outline-none focus:border-blue-400"
              />
              {errors.UserName && (
                <p className="text-red-400 text-sm mt-1">{errors.UserName.message}</p>
              )}
            </div>

            {/* اسم المكتب */}
            <div>
              <label className="block mb-2">اسم المكتب</label>
              <input
                type="text"
                placeholder="مثال: مكتب العدالة للمحاماة"
                {...register("officeName", {
                  required: "اسم المكتب مطلوب",
                })} className="w-full p-3 rounded-2xl bg-[#1a2636] focus:outline-none focus:border-blue-400"
              />
              {errors.officeName && (
                <p className="text-red-400 text-sm mt-1">{errors.officeName.message}</p>
              )}
            </div>

            {/* رقم الهاتف */}
            <div>
              <label className="block mb-2">رقم الهاتف</label>
              <input
                type="text"
                placeholder="0122 xxx xxxx"
                {...register("phone", { required: "رقم الهاتف مطلوب" })}
                className="w-full p-3 rounded-2xl bg-[#1a2636] focus:outline-none focus:border-blue-400"
              />
              {errors.phone && (
                <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* البريد الإلكتروني */}
            <div>
              <label className="block mb-2">البريد الإلكتروني</label>
              <input
                type="email"
                placeholder="contact@office.com"
                {...register("email", { required: "البريد الإلكتروني مطلوب" })}
                className="w-full p-3 rounded-2xl bg-[#1a2636] focus:outline-none focus:border-blue-400"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* كلمة المرور */}
          <div className="mt-6">
            <label className="block mb-2">كلمة المرور</label>
            <div className="flex items-center bg-[#1a2636] rounded-2xl">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "كلمة المرور مطلوبة",
                  minLength: {
                    value: 8,
                    message: "8 أحرف على الأقل",
                  },
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                    message:
                      "كلمة المرور يجب أن تحتوي على الأقل على حرف كبير، حرف صغير، ورقم",
                  },
                })}
                className="w-full p-3 bg-transparent focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="px-3 text-lg text-[#eab308]"
              >
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* الدومين */}
          <div className="mt-6">
            <label className="block mb-2">الدومين</label>
            <input
              {...register("subdomain", {
                required: "اسم الدومين مطلوب",
                minLength: {
                  value: 3,
                  message: "اسم النطاق الفرعي يجب ألا يقل عن 3 أحرف",
                },
                maxLength: {
                  value: 15,
                  message: "اسم النطاق الفرعي يجب ألا يتجاوز 15 حرفاً",
                },
                pattern: {
                  value: /^[a-zA-Z0-9-]+$/,
                  message:
                    "اسم النطاق الفرعي يجب أن يحتوي على أحرف إنجليزية، أرقام، وشرطات (-) فقط",
                },
              })}
              type="text"
              placeholder="Helper10"
              className="w-full p-3 rounded-2xl bg-[#1a2636] focus:outline-none focus:border-blue-400"
            />
            {errors.subdomain && (
              <p className="text-red-400 text-sm mt-1">{errors.subdomain.message}</p>

            )}
          </div>

          {/* الاشتراك */}
          <div className="mt-6">
            <label className="block mb-2">الاشتراك</label>
            <select
              {...register("billingInterval", { required: "  برجاء اختيار الاشتراك  " })}
              className="w-full p-3 rounded-2xl bg-[#1a2636] focus:outline-none focus:border-blue-400"
            >
              <option value="monthly">شهري</option>
              <option value="yearly">سنوي</option>
            </select>
            {errors.billingInterval && (
              <p className="text-red-400 text-sm mt-1">{errors.billingInterval.message}</p>

            )}
          </div>

          {/* طريقة الدفع */}
          {/* <div className="mt-6">
            <label className="block mb-2">طريقة الدفع</label>
            <select
              {...register("paymentMethod", { required: " برجاء اختيار طريقه الدفع  " })}
              className="w-full p-3 rounded-2xl bg-[#1a2636] focus:outline-none focus:border-blue-400"
            >
              <option value="card">كارت بنكي</option>
              <option value="wallet">محفظةالكترونية</option>
            </select>
          </div> */}

          {/* كوبون الخصم */}
          {/* <div className="bg-[#0b1120] p-8 flex flex-col items-end gap-4">
            <div className="flex items-center gap-2 text-white">
              <span className="text-xl font-bold">كوبون الخصم</span>
              <BsTicketPerforated className="text-[#eab308] text-2xl" />
            </div>
            <div className="flex w-full gap-4">
              <button
                type="button"
                className="bg-[#1e293b] border border-gray-700 text-[#eab308] px-6 py-3 rounded-xl hover:bg-slate-700 transition-colors duration-200 font-medium"
              >
                تطبيق
              </button>
              <input
                type="text"
                placeholder="أدخل رمز الخصم"
                {...register("couponCode")}
                className="flex-1 bg-[#1e293b]/50 border border-transparent focus:border-gray-600 text-right text-gray-300 px-4 py-3 rounded-xl outline-none placeholder:text-gray-500"
              />
            </div>
          </div> */}

          {/* زر الحفظ */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-8 w-full bg-[#eab308] hover:bg-[#ecc03c] p-3 rounded-2xl font-bold disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {isSubmitting ? "جاري الحفظ..." : "حفظ البيانات"}
          </button>
        </form>
      </div>


    </>)
}

export default page