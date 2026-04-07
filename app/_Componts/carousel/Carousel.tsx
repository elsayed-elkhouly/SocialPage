import { Feature } from '@/app/types/Featuretypes';
import { Briefcase, CalendarDays, ClipboardList, Clock3, FileArchive, FolderOpen, Receipt, Users, WalletCards } from 'lucide-react';
import React from 'react'
import FeatureCard from '../FeatureCard/FeatureCard';

const Carousl1 = () => {
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
          description:
            "إنشاء وإدارة ومتابعة المدفوعات والمستحقات بشكل تلقائي",
          icon: Receipt ,
        },
        {
          title: "الأرشيف الرقمي",
          description:
            "خزن كل مستنداتك رقميًا والوثائق القانونية بشكل منظم وآمن",
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
      
  return (
    <section dir="rtl" className="bg-[#071a33] px-4 py-16 text-white md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">
              كل ما تحتاجه لإدارة مكتبك
            </h2>
            <p className="mt-3 text-sm text-white/60 md:text-base">
              نظام شامل يجمع جميع أدوات الإدارة القانونية في منصة واحدة
            </p>
          </div>

        <Carousel>
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
        </div>
      </section>
  )
}

export default Carousl1