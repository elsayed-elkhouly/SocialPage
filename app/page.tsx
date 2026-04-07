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
  type Step = {
    number: string;
    title: string;
    description: string;
  };


  type Testimonial = {
    name: string;
    role: string;
    content: string;
  };
  const steps: Step[] = [
    {
      number: "1",
      title: "أضف القضايا والعملاء",
      description:
        "استورد بياناتك الحالية بسهولة وابدأ بتنظيم مكتبك",
    },
    {
      number: "2",
      title: "نظم المهام والجلسات",
      description:
        "قم بجدولة المواعيد وتتبع الجلسات وإدارة كل أعمالك",
    },
    {
      number: "3",
      title: "تابع الفواتير والمدفوعات",
      description:
        "أنشئ الفواتير وتتبع المدفوعات والتدفقات المالية بكل وضوح",
    },
    {
      number: "4",
      title: "راقب أداء الفريق",
      description:
        "احصل على رؤية كاملة لأداء فريقك واتخذ قرارات أفضل",
    },
  ];
  type Stat = {
    value: string;
    label: string;
    growth: string;
    icon: React.ElementType;
    iconBg: string;
    iconColor: string;
  };
  const stats: Stat[] = [
    {
      value: "350",
      label: "عميل نشط",
      growth: "+12%",
      icon: Users,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
    },
    {
      value: "1500",
      label: "قضية مفتوحة",
      growth: "+5%",
      icon: Layers3,
      iconBg: "bg-violet-500/10",
      iconColor: "text-violet-400",
    },
    {
      value: "890K",
      label: "إيرادات شهرية",
      growth: "+23%",
      icon: Wallet,
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-400",
    },
    {
      value: "250",
      label: "الحجوزات",
      growth: "+8%",
      icon: TrendingUp,
      iconBg: "bg-amber-500/10",
      iconColor: "text-amber-400",
    },
  ];
  type Plan = {
    name: string;
    subtitle: string;
    price: string;
    period?: string;
    features: string[];
    buttonText: string;
    featured?: boolean;
  };
  const features2 = [
    {
      title: "تقارير تفصيلية",
      description: "احصل على نظرة شاملة على الأداء والإيرادات",
      icon: BarChart3,
    },
    {
      title: "تنبيهات ذكية",
      description: "احصل على تنبيهات لجميع المواعيد المهمة",
      icon: FolderOpen,
    },
    {
      title: "وصول آمن",
      description: "بيئة مؤمنة بالكامل لملفاتك وبياناتك",
      icon: ShieldCheck,
    },
  ];
  const features3 = [
    "حجز فوري من الموقع الإلكتروني",
    "تنبيهات تلقائية للعميل والمحامي",
    "إدارة الأوقات المتاحة والمحجوزة",
    "تأكيد وإلغاء الحجوزات بسهولة",
  ];
  const testimonials: Testimonial[] = [
    {
      name: "محمد السعيد",
      role: "محامي مستقل",
      content:
        "كمحامي مستقل، كنت أحتاج نظام بسيط وفعال لإدارة أعمالي. هذا النظام جعل كل شيء أسهل بكثير، من متابعة القضايا إلى التواصل مع العملاء.",
    },
    {
      name: "فاطمة القاضي",
      role: "شريكة في مكتب قانوني",
      content:
        "أفضل استثمار قمنا به لمكتبنا. النظام يوفر علينا الكثير من الوقت، التقارير المالية دقيقة وشاملة.",
    },
    {
      name: "أحمد الحامي",
      role: "مدير مكتب محاماة",
      content:
        "النظام غير طريقة عمل مكتبنا بشكل كامل. وفر علينا ساعات طويلة من العمل اليدوي، أصبح كل شيء في مكان واحد وسهل الوصول.",
    },
  ];
  const plans: Plan[] = [
    {
      name: "الباقة الأساسية",
      subtitle: "مثالية للمحامين المستقلين والمكاتب الصغيرة",
      price: "50",
      period: "دولار / شهريًا",
      features: [
        "حتى 50 قضية نشطة",
        "100 عميل",
        "2 مستخدم",
        "إدارة القضايا والعملاء",
        "التقويم القانوني",
        "إدارة المهام",
        "5 جيجا تخزين",
      ],
      buttonText: "ابدأ الآن",
    },
    {
      name: "الباقة الاحترافية",
      subtitle: "الأنسب للمكاتب المتوسطة والشركاء",
      price: "100",
      period: "دولار / شهريًا",
      features: [
        "قضايا غير محدودة",
        "عملاء غير محدودين",
        "10 مستخدمين",
        "جميع مميزات الباقة الأساسية",
        "إدارة الفواتير والمدفوعات",
        "إدارة الرواتب",
        "نظام الحجز الأونلاين",
        "50 جيجا تخزين",
      ],
      buttonText: "ابدأ الآن",
      featured: true,
    },
    {
      name: "باقة المؤسسات",
      subtitle: "للمكاتب الكبيرة والمؤسسات القانونية",
      price: "حسب الطلب",
      features: [
        "كل مميزات الباقة الاحترافية",
        "عدد مستخدمين غير محدود",
        "تخزين غير محدود",
        "تخصيص كامل للنظام",
        "ربط مع الأنظمة الخارجية",
        "نسخ احتياطي يومي",
        "مدير حساب مخصص",
      ],
      buttonText: "تواصل معنا",
    },
  ];
  function PlanCard({ plan }: { plan: Plan }) {
    const featured = !!plan.featured;

    return (
      <div
        className={[
          "relative flex min-h-135 flex-col rounded-3xl border bg-linear-to-b p-6 text-white transition",
          featured
            ? "border-[#d2aa48] from-[#10284d] to-[#091c36] shadow-[0_0_0_1px_rgba(210,170,72,0.35),0_0_24px_rgba(210,170,72,0.18)]"
            : "border-[#22385f] from-[#10284d] to-[#091c36]",
        ].join(" ")}
      >
        {featured && (
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <span className="inline-flex rounded-[14px] bg-[#d2aa48] px-6 py-2 text-sm font-bold text-[#0a1b35] shadow-lg">
              الأكثر شعبية
            </span>
          </div>
        )}

        <div className="pt-4 text-center">
          <h3 className="text-[24px] font-extrabold md:text-[28px]">{plan.name}</h3>
          <p className="mt-2 text-sm text-white/60">{plan.subtitle}</p>
        </div>

        <div className="mt-8 text-center">
          {plan.price === "حسب الطلب" ? (
            <div className="text-[28px] font-extrabold text-[#d2aa48] md:text-[40px]">
              حسب الطلب
            </div>
          ) : (
            <div className="flex items-end justify-center gap-2">
              <span className="text-[48px] font-extrabold leading-none md:text-[54px]">
                {plan.price}
              </span>
              <span className="mb-1 text-base text-white/70">{plan.period}</span>
            </div>
          )}
        </div>

        <ul className="mt-8 space-y-4 text-right">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center justify-start gap-3 text-[15px] text-white">
              <FaRegCheckCircle className="text-[#d2aa48]" />

              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-8">
          <button
            className={[
              "h-12 w-full rounded-[10px] border text-sm font-bold transition",
              featured
                ? "border-[#d2aa48] bg-[#d2aa48] text-[#0a1b35] hover:opacity-90"
                : "border-[#2a4167] bg-[#112746] text-white hover:border-[#d2aa48]/60 hover:text-[#f2d27a]",
            ].join(" ")}
          >
            {plan.buttonText}
          </button>
        </div>
      </div>
    );
  }
  function TestimonialCard({ item }: { item: Testimonial }) {
    return (
      <div className="relative rounded-2xl border border-[#22365e] bg-[#0d2145] p-6">
        {/* quote */}
        <span className="absolute left-6 top-6 text-4xl text-white/10">”</span>

        {/* stars */}
        <div className="mb-6 flex justify-end">
          <Stars />
        </div>

        {/* text */}
        <p className="mb-8 text-sm leading-7 text-white/70">
          {item.content}
        </p>

        {/* divider */}
        <div className="mb-6 h-px w-full bg-white/10" />

        {/* user */}
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-bold text-white">{item.name}</h4>
            <p className="text-xs text-white/50">{item.role}</p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c9a24a] text-sm font-bold text-[#071a33]">
            {item.name.charAt(0)}
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <NavBar />
      <HeroSection/>
      <FeaturesCarouselSection />
      <HowItWorksSection/>
      <section dir="rtl" className="bg-[#071a33] px-4 py-16 text-white md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col items-start">
            <span className="mb-5 inline-flex rounded-full border border-[#c9a24a]/35 bg-[#102445] px-4 py-2 text-sm text-[#d4af57]">
              نظام الحجز الذكي
            </span>

            <h2 className="text-4xl font-extrabold leading-[1.2] md:text-6xl">
              حجز مواعيد العملاء
              <br />
              <span className="text-[#d4af57]">بسهولة وسرعة</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-8 text-white/65 md:text-base">
              اسمح لعملائك بحجز مواعيد الاستشارات مباشرة من موقعك الإلكتروني
              بطريقة احترافية ومنظمة، مع تقليل الجهد اليدوي وتسريع إدارة الطلبات.
            </p>

            <ul className="mt-6 space-y-4">
              {features3.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/80 md:text-base">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c9a24a]/35 bg-[#102445]">
                    <LuBadgeCheck className="h-4 w-4 text-[#d4af57]" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="mt-8 rounded-xl bg-[#c9a24a] px-8 py-4 text-base font-bold text-[#071a33] transition hover:opacity-90">
              جرب نظام الحجز
            </button>
          </div>
          <div className="rounded-[28px] border-2 border-[#c9a24a]/40 bg-[#102445] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] md:p-8">
            <form className="space-y-5">
              <div>
                <label className="mb-3 block text-sm font-bold text-white">
                  الاسم كامل
                </label>
                <input
                  type="text"
                  placeholder="أدخل اسمك"
                  className="h-12 w-full rounded-xl border border-[#7c6530] bg-[#102445] px-4 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#d4af57]"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-bold text-white">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  placeholder="01XXXXXXXXX"
                  className="h-12 w-full rounded-xl border border-[#7c6530] bg-[#102445] px-4 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#d4af57]"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-bold text-white">
                  نوع الخدمة
                </label>
                <div className="relative">
                  <select
                    className="h-12 w-full appearance-none rounded-xl border border-[#7c6530] bg-[#102445] px-4 text-sm text-white outline-none transition focus:border-[#d4af57]"
                    defaultValue="استشارة قانونية"
                  >
                    <option>استشارة قانونية</option>
                    <option>حجز موعد متابعة</option>
                    <option>مراجعة عقد</option>
                    <option>تمثيل قانوني</option>
                  </select>

                  <svg
                    className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative">
                  <input
                    type="date"
                    className="h-12 w-full rounded-xl border border-[#7c6530] bg-[#102445] px-4 text-sm text-white outline-none transition focus:border-[#d4af57]"
                  />
                  <CalendarDays className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
                </div>

                <div className="relative">
                  <input
                    type="time"
                    className="h-12 w-full rounded-xl border border-[#7c6530] bg-[#102445] px-4 text-sm text-white outline-none transition focus:border-[#d4af57]"
                  />
                  <Clock3 className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
                </div>
              </div>

              <button
                type="submit"
                className="h-12 w-full rounded-xl bg-[#c9a24a] text-base font-extrabold text-[#071a33] transition hover:opacity-90"
              >
                تأكيد الحجز الآن
              </button>
            </form>
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
                href="https://wa.me/201553132233?text=مرحباً، أريد التحدث مع فريق المبيعات"
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
