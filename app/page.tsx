import Image from "next/image";
import { Scale, Stars } from "lucide-react";
import Link from "next/link";
import NavBar from "./_Componts/NavBar/NavBar";
import FeatureCard from "./_Componts/FeatureCard/FeatureCard";
import {
  Briefcase,
  Users,
  FolderOpen,
  Clock3,
  WalletCards,
  Receipt,
  FileArchive,
  ClipboardList,
  CalendarDays,
} from "lucide-react";
import { Feature } from "./types/Featuretypes";
import {
  Wallet,
  TrendingUp,
  ShieldCheck,
  BarChart3,
  Layers3,
} from "lucide-react";
import { Sparkles } from "lucide-react";
import { LuBadgeCheck } from "react-icons/lu";
import { FaRegCheckCircle } from "react-icons/fa";
import Footer from "./_Componts/Footer/Footer";
import FeaturesCarouselSection from "./_Componts/FeaturesCarouselSection/FeaturesCarouselSection";
import HeroSection from "./_Componts/HeroSection/HeroSection";
import HowItWorksSection from "./_Componts/HowItWorksSection/HowItWorksSection";
import ReviewsSection from "./_Componts/ReviewsSection";
import PricingSection from "./_Componts/PricingSection/PricingSection";

export default function Home() {
  const features3 = [
    "حجز فوري من الموقع الإلكتروني",
    "تنبيهات تلقائية للعميل والمحامي",
    "إدارة الأوقات المتاحة والمحجوزة",
    "تأكيد وإلغاء الحجوزات بسهولة",
  ];

  return (
    <>
      <NavBar />
      <HeroSection/>
      <FeaturesCarouselSection />
      <HowItWorksSection/>
      <section dir="rtl" className="bg-[#071a33] px-4 py-12 text-white sm:py-14 md:px-8 md:py-16 lg:px-12">
  <div className="mx-auto grid max-w-7xl items-center gap-8 md:gap-10 lg:grid-cols-2">

    {/* الفورم ييجي الأول في الموبايل */}
    <div className="order-1 rounded-[28px] border-2 border-[#c9a24a]/40 bg-[#102445] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:p-6 md:p-8 lg:order-2">
      <form className="space-y-4 md:space-y-5">

        <div>
          <label className="mb-2 block text-xs font-bold text-white sm:text-sm">
            الاسم كامل
          </label>
          <input
            type="text"
            placeholder="أدخل اسمك"
            className="h-11 w-full rounded-xl border border-[#7c6530] bg-[#102445] px-4 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#d4af57]"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold text-white sm:text-sm">
            رقم الهاتف
          </label>
          <input
            type="tel"
            placeholder="01XXXXXXXXX"
            className="h-11 w-full rounded-xl border border-[#7c6530] bg-[#102445] px-4 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#d4af57]"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold text-white sm:text-sm">
            نوع الخدمة
          </label>

          <div className="relative">
            <select
              className="h-11 w-full appearance-none rounded-xl border border-[#7c6530] bg-[#102445] px-4 text-sm text-white outline-none transition focus:border-[#d4af57]"
              defaultValue="استشارة قانونية"
            >
              <option>استشارة قانونية</option>
              <option>حجز موعد متابعة</option>
              <option>مراجعة عقد</option>
              <option>تمثيل قانوني</option>
            </select>

            <svg
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="relative">
            <input
              type="date"
              className="h-11 w-full rounded-xl border border-[#7c6530] bg-[#102445] px-4 text-sm text-white outline-none transition focus:border-[#d4af57]"
            />
            <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
          </div>

          <div className="relative">
            <input
              type="time"
              className="h-11 w-full rounded-xl border border-[#7c6530] bg-[#102445] px-4 text-sm text-white outline-none transition focus:border-[#d4af57]"
            />
            <Clock3 className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
          </div>
        </div>

        <button
          type="submit"
          className="h-11 w-full rounded-xl bg-[#c9a24a] text-sm font-extrabold text-[#071a33] transition hover:opacity-90 md:h-12 md:text-base"
        >
          تأكيد الحجز الآن
        </button>
      </form>
    </div>

    {/* النص */}
    <div className="order-2 flex flex-col items-start lg:order-1">
      <span className="mb-4 inline-flex rounded-full border border-[#c9a24a]/35 bg-[#102445] px-3 py-1.5 text-xs text-[#d4af57] sm:px-4 sm:py-2 sm:text-sm">
        نظام الحجز الذكي
      </span>

      <h2 className="text-2xl font-extrabold leading-[1.3] sm:text-3xl md:text-5xl lg:text-6xl">
        حجز مواعيد العملاء
        <br />
        <span className="text-[#d4af57]">بسهولة وسرعة</span>
      </h2>

      <p className="mt-4 max-w-xl text-xs leading-7 text-white/65 sm:text-sm md:mt-6 md:text-base md:leading-8">
        اسمح لعملائك بحجز مواعيد الاستشارات مباشرة من موقعك الإلكتروني
        بطريقة احترافية ومنظمة، مع تقليل الجهد اليدوي وتسريع إدارة الطلبات.
      </p>

      <ul className="mt-5 space-y-3 md:mt-6 md:space-y-4">
        {features3.map((item) => (
          <li key={item} className="flex items-center gap-2 text-xs text-white/80 sm:text-sm md:text-base">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#c9a24a]/35 bg-[#102445] md:h-8 md:w-8">
              <LuBadgeCheck className="h-4 w-4 text-[#d4af57]" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <button className="mt-6 w-full rounded-xl bg-[#c9a24a] px-6 py-3 text-sm font-bold text-[#071a33] transition hover:opacity-90 sm:w-auto md:mt-8 md:px-8 md:py-4 md:text-base">
        جرب نظام الحجز
      </button>
    </div>

  </div>
</section>
      <ReviewsSection/>
      <PricingSection/>
      <section
        dir="rtl"
        className="bg-[#071a33] px-4 py-20 text-white md:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-5xl">
          <div className="relative rounded-[28px] border border-[#d2aa48]/60 bg-gradient-to-b from-[#0f2747] to-[#0a1f3a] px-6 py-14 text-center shadow-[0_0_40px_rgba(210,170,72,0.08)] md:px-12">

            {/* badge */}
            <span className="mb-6 inline-block rounded-full border border-[#8a6a2b] bg-[#1c3554] px-5 py-2 text-sm text-[#d2aa48]">
              ابدأ رحلتك معنا
            </span>

            {/* title */}
            <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">
              ابدأ إدارة مكتبك
              <br />
              <span className="text-[#d2aa48]">باحتراف الآن</span>
            </h2>

            {/* desc */}
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
              انضم إلى مئات المكاتب القانونية التي تستخدم نظامنا يومياً لتحسين إنتاجيتهم وإدارة أعمالهم بكفاءة
            </p>

            {/* buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

              {/* <Link
                href="#"
                className="rounded-xl bg-[#d2aa48] px-8 py-4 text-sm font-bold text-[#071a33] transition hover:opacity-90"
              >
                ابدأ تجربتك المجانية
              </Link> */}

              <Link
                href="https://wa.me/201101063100?text=مرحباً، أريد التحدث مع فريق المبيعات"
                target="_blank"
                className="rounded-xl border border-[#d2aa48] bg-white px-8 py-4 text-sm font-bold text-[#0a1b35] transition hover:bg-[#f3ead7]"
              >
                تحدث مع فريق المبيعات
              </Link>
            </div>

            {/* bottom notes */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60 md:text-sm">

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                خطط مرنه تناسبك
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                نظام متكامل لاداره مكتبك
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                دعم فني متواصل
              </div>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
