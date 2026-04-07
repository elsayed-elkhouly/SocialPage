"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BarChart3, FolderOpen, Layers3, ShieldCheck, TrendingUp, Users, Wallet } from "lucide-react";
import Siamge from "./../../../public/compressed_image.jpg"

// مهم
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HowItWorksSection() {
    const sectionRef = useRef(null);
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
    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                        toggleActions: "play none none none",
                    },
                    defaults: {
                        ease: "power3.out",
                    },
                });

                tl.from(".ui-badge", {
                    y: 20,
                    opacity: 0,
                    duration: 0.5,
                })
                    .from(
                        ".ui-title",
                        {
                            y: 40,
                            opacity: 0,
                            duration: 0.7,
                        },
                        "-=0.2"
                    )
                    .from(
                        ".ui-desc",
                        {
                            y: 24,
                            opacity: 0,
                            duration: 0.6,
                        },
                        "-=0.35"
                    )
                    .from(
                        ".stat-card",
                        {
                            y: 40,
                            opacity: 0,
                            duration: 0.6,
                            stagger: 0.12,
                        },
                        "-=0.2"
                    )
                    .from(
                        ".dashboard-wrap",
                        {
                            y: 50,
                            opacity: 0,
                            scale: 0.96,
                            duration: 0.9,
                        },
                        "-=0.15"
                    )
                    .from(
                        ".feature-card",
                        {
                            y: 35,
                            opacity: 0,
                            duration: 0.55,
                            stagger: 0.1,
                        },
                        "-=0.35"
                    );
            });
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
            mm.add("(max-width: 767px)", () => {
                gsap.from(".ui-animate", {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                    y: 24,
                    opacity: 0,
                    duration: 0.7,
                    stagger: 0.12,
                    ease: "power2.out",
                });
            });

            return () => mm.revert();
        },
        { scope: sectionRef }
    );

    return (
        <section
            ref={sectionRef}
            id="how-it-works"
            dir="rtl"
            className="bg-[#071a33] px-4 py-16 text-white md:px-8 lg:px-12"
        >
            <div className="mx-auto max-w-7xl">
                <div className="mb-10 text-center">
                    <span className="ui-badge ui-animate mb-5 inline-flex rounded-full border border-[#c9a24a]/30 bg-[#102445] px-4 py-2 text-sm text-[#d4af57]">
                        واجهة المستخدم
                    </span>

                    <h2 className="ui-title ui-animate text-3xl font-extrabold leading-tight md:text-5xl">
                        لوحة تحكم احترافية وسهلة
                    </h2>

                    <p className="ui-desc ui-animate mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/60 md:text-base">
                        تصميم عصري وبسيط يمكنك من الوصول لجميع البيانات والإحصائيات بلمحة
                        واحدة
                    </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {stats.map((stat) => {
                        const Icon = stat.icon;

                        return (
                            <div
                                key={stat.label}
                                className="stat-card ui-animate rounded-3xl border border-[#22365e] bg-[#102445] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.015)]"
                            >
                                <div className="mb-5 flex items-start justify-between">
                                    <span className="text-sm font-bold text-emerald-400">
                                        {stat.growth}
                                    </span>

                                    <div
                                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.iconBg}`}
                                    >
                                        <Icon className={`h-5 w-5 ${stat.iconColor}`} />
                                    </div>
                                </div>

                                <div className="text-4xl font-extrabold tracking-tight">
                                    {stat.value}
                                </div>

                                <p className="mt-2 text-sm text-white/60">{stat.label}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="dashboard-wrap ui-animate mt-6 overflow-hidden rounded-3xl border border-[#c9a24a]/50 bg-[#0b1f3c]">
                    <div className="relative h-80 overflow-hidden rounded-[20px] sm:h-105 lg:h-190">
                        <Image
                            src={Siamge}
                            alt="لوحة تحكم لإدارة مكاتب المحاماة"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="mt-6 grid gap-5 md:grid-cols-3">
                    {features2.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="feature-card ui-animate rounded-2xl border border-[#22365e] bg-[#102445] px-6 py-5"
                            >
                                <div className="mb-3 flex items-center gap-3">
                                    <Icon className="h-5 w-5 text-[#d4af57]" />
                                    <h3 className="text-xl font-bold text-[#d4af57]">
                                        {feature.title}
                                    </h3>
                                </div>

                                <p className="text-sm leading-7 text-white/60">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}