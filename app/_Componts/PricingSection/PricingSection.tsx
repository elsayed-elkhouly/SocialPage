"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaRegCheckCircle } from "react-icons/fa";
import Link from "next/link";





type ApiPlan = {
    _id: string;
    name: string;
    description: string;
    monthlyPrice: number;
    yearlyPrice: number;
    currency: string;
    monthlyPriceAfterDiscount?: number;
    offer?: {
        label: string;
        discountPercent: number;
        validUntil: string;
        isActive: boolean;
    };
    features: {
        key: string;
        label: string;
        valueType: string;
        defaultValue: boolean | number;
        visible: boolean;
    }[];
    isActive: boolean;
    isPopular: boolean;
    sortOrder: number;
};

type Props = {
    plans1: ApiPlan[];
};
export default function PricingSection({ plans1 }: Props) {

    type Plan = {
        name: string;
        subtitle: string;
        price: string;
        period?: string;
        features: string[];
        buttonText: string;
        featured?: boolean;
        priceAfterDiscount?: string;
        offerLabel?: string;
        _id: string;  // 
    };

    const plans: Plan[] = (plans1 ?? []).map((p) => ({
        name: p.name,
        subtitle: p.description,
        price: p.monthlyPrice.toString(),
        priceAfterDiscount: p.offer?.isActive && p.monthlyPriceAfterDiscount
            ? p.monthlyPriceAfterDiscount.toString()
            : undefined,
        offerLabel: p.offer?.isActive ? p.offer.label : undefined,
        period: `${p.currency} / شهريًا`,
        features: p.features
            .filter((f) => f.visible)
            .map((f) =>
                f.valueType === "boolean"
                    ? f.label
                    : `${f.label}: ${f.defaultValue}`
            ),
        buttonText: p.monthlyPrice === 1500 ? "تواصل معنا" : "ابدأ الآن",
        featured: p.isPopular,
        _id: p._id,  
    }));

    function PlanCard({ plan }: { plan: Plan }) {
        const featured = !!plan.featured;

        return (
            <div
                className={[
                    "plan-card relative flex min-h-140 md:min-h-155 flex-col rounded-3xl border bg-linear-to-b p-5 md:p-6 text-white transition-all duration-300",
                    featured
                        ? "featured-card border-[#d2aa48] from-[#10284d] to-[#091c36] shadow-[0_0_0_1px_rgba(210,170,72,0.35),0_0_24px_rgba(210,170,72,0.18)]"
                        : "border-[#22385f] from-[#10284d] to-[#091c36] shadow-[0_10px_25px_rgba(0,0,0,0.18)]",
                ].join(" ")}
            >
                {featured && (
                    <div className="badge-popular absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
                        <span className="inline-flex rounded-[14px] bg-[#d2aa48] px-6 py-2 text-sm font-bold text-[#0a1b35] shadow-lg">
                            الأكثر شعبية
                        </span>
                    </div>
                )}

                <div className="flex flex-1 flex-col">
                    <div className="plan-head pt-4 text-center">
                        <h3 className="text-[24px] font-extrabold md:text-[28px]">
                            {plan.name}
                        </h3>
                        <p className="mt-2 text-sm text-white/60">{plan.subtitle}</p>
                    </div>

                    <div className="plan-price mt-6 md:mt-8 text-center">
                        {plan.offerLabel && (
                            <span className="mb-2 inline-block rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold text-red-400">
                                🎉 {plan.offerLabel}
                            </span>
                        )}

                        {plan.price === "حسب الطلب" ? (
                            <div className="text-[28px] font-extrabold text-[#d2aa48] md:text-[40px]">
                                حسب الطلب
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center gap-1">
                                {plan.priceAfterDiscount ? (
                                    <>
                                        {/* السعر القديم مشطوب */}
                                        <span className="text-lg text-white/40 line-through">
                                            {plan.price} {plan.period}
                                        </span>
                                        {/* السعر الجديد */}
                                        <div className="flex items-end justify-center gap-2">
                                            <span className="text-[42px] font-extrabold leading-none text-[#d2aa48] md:text-[54px]">
                                                {plan.priceAfterDiscount}
                                            </span>
                                            <span className="mb-1 text-base text-white/70">
                                                {plan.period}
                                            </span>
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex items-end justify-center gap-2">
                                        <span className="text-[42px] font-extrabold leading-none md:text-[54px]">
                                            {plan.price}
                                        </span>
                                        <span className="mb-1 text-base text-white/70">
                                            {plan.period}
                                        </span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <ul className="mt-6 space-y-3 text-right md:mt-8 md:space-y-4">
                        {plan.features.map((feature, index) => (
                            <li
                                key={feature}
                                className="feature-row flex items-center justify-start gap-3 text-[14px] text-white md:text-[15px]"
                                data-index={index}
                            >
                                <FaRegCheckCircle className="shrink-0 text-[#d2aa48]" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto pt-6">
                        {/* href={`/RegesterPlan/${plan._id}`} */}
                        <button
                            className={[
                                "plan-btn h-12 md:h-14 w-full rounded-[10px] border text-sm md:text-base font-bold transition",
                                featured
                                    ? "border-[#d2aa48] bg-[#d2aa48] text-[#0a1b35] hover:opacity-90"
                                    : "border-[#2a4167] bg-[#112746] text-white hover:border-[#d2aa48]/60 hover:text-[#f2d27a]",
                            ].join(" ")}
                        >
                            {plan.buttonText}
                        </button>
                        
                    </div>
                </div>
            </div>
        );
    }
    const sectionRef = useRef<HTMLElement | null>(null);

    useGSAP(
        () => {
            const cards = gsap.utils.toArray<HTMLElement>(".plan-card");
            const featuredCard = document.querySelector(".featured-card");
            const badge = document.querySelector(".badge-popular");

            gsap.set(cards, {
                y: 120,
                opacity: 0,
                rotateX: 18,
                scale: 0.92,
                transformOrigin: "center bottom",
            });

            const tl = gsap.timeline({
                defaults: { ease: "power4.out" },
            });

            tl.to(cards, {
                y: 0,
                opacity: 1,
                rotateX: 0,
                scale: 1,
                duration: 1.2,
                stagger: 0.14,
            });

            tl.from(
                ".plan-head",
                {
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.08,
                },
                "-=0.65"
            );

            tl.from(
                ".plan-price",
                {
                    y: 18,
                    opacity: 0,
                    duration: 0.55,
                    stagger: 0.08,
                },
                "-=0.5"
            );

            tl.from(
                ".feature-row",
                {
                    x: 24,
                    opacity: 0,
                    duration: 0.4,
                    stagger: 0.035,
                },
                "-=0.4"
            );

            tl.from(
                ".plan-btn",
                {
                    y: 20,
                    opacity: 0,
                    duration: 0.45,
                    stagger: 0.1,
                },
                "-=0.25"
            );

            if (featuredCard) {
                gsap.fromTo(
                    featuredCard,
                    {
                        y: 0,
                        boxShadow: "0 0 0 1px rgba(210,170,72,0.25), 0 0 12px rgba(210,170,72,0.10)",
                    },
                    {
                        y: -30,
                        boxShadow: "0 0 0 1px rgba(210,170,72,0.4), 0 0 36px rgba(210,170,72,0.22)",
                        duration: 3.2,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                    }
                );
            }

            if (badge) {
                gsap.fromTo(
                    badge,
                    { y: -8, scale: 0.95, opacity: 0 },
                    { y: 0, scale: 1, opacity: 1, duration: 0.7, delay: 0.8, ease: "back.out(1.8)" }
                );
            }

            cards.forEach((card) => {
                const isFeatured = card.classList.contains("featured-card");

                const enter = () => {
                    gsap.to(card, {
                        y: isFeatured ? -16 : -10,
                        scale: isFeatured ? 1.035 : 1.02,
                        duration: 0.35,
                        ease: "power3.out",
                        boxShadow: isFeatured
                            ? "0 0 0 1px rgba(210,170,72,0.45), 0 18px 50px rgba(210,170,72,0.22)"
                            : "0 18px 45px rgba(0,0,0,0.32)",
                    });
                };

                const leave = () => {
                    gsap.to(card, {
                        y: isFeatured ? -10 : 0,
                        scale: 1,
                        duration: 0.4,
                        ease: "power3.out",
                        boxShadow: isFeatured
                            ? "0 0 0 1px rgba(210,170,72,0.35), 0 0 24px rgba(210,170,72,0.18)"
                            : "0 0 0 0 rgba(0,0,0,0)",
                    });
                };

                card.addEventListener("mouseenter", enter);
                card.addEventListener("mouseleave", leave);
            });
        },
        { scope: sectionRef }
    );

    return (
        <section
            id="pricing"
            dir="rtl"
            className="overflow-hidden bg-[#071a33] px-4 py-20 text-white md:px-8 lg:px-12"
        >
            <div className="mx-auto max-w-7xl">
                <div className="text-center">
                    <span className="inline-flex rounded-full border border-[#8a6a2b] bg-[#24354c] px-5 py-2 text-sm text-[#d2aa48]">
                        الأسعار
                    </span>

                    <h2 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
                        خطط تناسب جميع الاحتياجات
                    </h2>

                    <p className="mt-4 text-base text-white/65 md:text-lg">
                    </p>
                </div>

                <div className="mt-16 grid gap-8 lg:grid-cols-3">
                    <PlanCard plan={plans[0]} />
                    <PlanCard plan={plans[1]} />
                    <PlanCard plan={plans[2]} />
                </div>
            </div>
        </section>
    );
}