"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "motion/react";
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
  ChevronLeft,
  ChevronRight,
  LucideIcon,
} from "lucide-react";
import FeatureCard from "../FeatureCard/FeatureCard";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "إدارة القضايا",
    description:
      "تتبع القضايا، الجلسات، مواعيد الجلسات، والمستندات المرتبطة بكل قضية",
    icon: Briefcase,
  },
  {
    title: "إدارة العملاء",
    description:
      "قاعدة بيانات شاملة مع معلومات الاتصال والتاريخ الكامل لكل عميل",
    icon: Users,
  },
  {
    title: "إدارة الفريق",
    description:
      "تنظيم عمل فريقك، تكليف المهام وتتبع سير العمل للمحاسبين والمساعدين",
    icon: FolderOpen,
  },
  {
    title: "إدارة الحجوزات",
    description:
      "نظام حجوزات وإيدج سهل للعملاء لحجز مواعيدهم واستشاراتهم بسهولة",
    icon: Clock3,
  },
  {
    title: "إدارة الرواتب",
    description:
      "حساب الرواتب، السلف، الاستقطاعات مع تقديم تقارير مالية كاملة",
    icon: WalletCards,
  },
  {
    title: "إدارة الفواتير",
    description: "إنشاء وإدارة ومتابعة المدفوعات والمستحقات بشكل تلقائي",
    icon: Receipt,
  },
  {
    title: "الأرشيف الرقمي",
    description: "خزن كل مستنداتك رقميًا والوثائق القانونية بشكل منظم وآمن",
    icon: FileArchive,
  },
  {
    title: "إدارة المهام",
    description:
      "توزيع وتنظيم المهام ومتابعة التقدم في جميع المهام اليومية بكفاءة",
    icon: ClipboardList,
  },
  {
    title: "التقويم القانوني",
    description:
      "عرض زمني للقضايا والتنبيهات بمواعيد الجلسات والأحداث القانونية",
    icon: CalendarDays,
  },
];



export default function FeaturesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    direction: "rtl",
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section
    id="features"
      dir="rtl"
      className="bg-[#071a33] px-4 py-16 text-white md:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">
            كل ما تحتاجه لإدارة مكتبك
          </h2>
          <p className="mt-3 text-sm text-white/60 md:text-base">
            نظام شامل يجمع جميع أدوات الإدارة القانونية في منصة واحدة
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="-mr-4 flex ">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="min-w-0 flex-[0_0_100%] pr-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="h-full"
                  >
                    <FeatureCard {...feature} />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={scrollNext}
              aria-label="التالي"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 transition hover:bg-white/20"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <button
              onClick={scrollPrev}
              aria-label="السابق"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 transition hover:bg-white/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}