"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Stars } from "lucide-react";
import { FaStar } from "react-icons/fa";

export default function ReviewsSection() {
  const container = useRef<HTMLElement | null>(null);

  type Testimonial = {
    name: string;
    role: string;
    content: string;
  };

  function Stars() {
    return (
      <div className="flex items-center gap-1 text-[#d4af57]">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar key={i} size={14} fill="currentColor" stroke="currentColor" />
        ))}
      </div>
    );
  }

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

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".testimonial-card");

      gsap.to(cards, {
        y: -30,
        duration: 1.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
      });
    },
    { scope: container }
  );

  function TestimonialCard({ item }: { item: Testimonial }) {
    return (
      <div className="testimonial-card relative overflow-hidden rounded-[30px] border border-[#22365e] bg-[radial-gradient(circle_at_top,_#12315f_0%,_#0b1d3d_45%,_#08172f_100%)] px-8 pb-8 pt-7 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] min-h-[330px]">
        <span className="absolute left-7 top-5 text-[48px] font-bold leading-none text-white/15">
          ”
        </span>

        <div className="mb-10 flex justify-start">
          <Stars />
        </div>

        <p className="mb-10 text-[16px] leading-[2.1] text-white/90">
          "{item.content}"
        </p>

        <div className="mb-6 h-px w-full bg-white/10" />

        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-[24px] font-extrabold text-white">
              {item.name}
            </h4>
            <p className="mt-1 text-[14px] text-white/55">{item.role}</p>
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d4af57] text-[26px] font-bold text-white shadow-[0_8px_20px_rgba(212,175,87,0.25)]">
            {item.name.trim().charAt(0)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section
      ref={container}
      id="reviews"
      dir="rtl"
      className="bg-[#071a33] px-4 py-20 text-white md:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl text-center">
        <span className="mb-5 inline-block rounded-full border border-[#c9a24a]/30 bg-[#102445] px-4 py-2 text-sm text-[#d4af57]">
          آراء العملاء
        </span>

        <h2 className="text-3xl font-extrabold md:text-5xl">
          ماذا يقول عملاؤنا
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm text-white/60 md:text-base">
          مئات المكاتب القانونية تثق في نظامنا لإدارة أعمالهم اليومية
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}