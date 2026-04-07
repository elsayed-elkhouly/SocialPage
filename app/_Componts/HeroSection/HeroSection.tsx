"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
// import Fiamge from "..." // صورتك
import Fiamge from "./../../../public/resized_image.png"



export default function HeroSection() {
  const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
    },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 60, scale: 0.96 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-[#061937] text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.18, 0.28, 0.18],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-30 -top-30 h-80 w-80 rounded-full bg-[#d4af57]/20 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-25 -left-25 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
        />
      </div>

      <div className="mx-auto grid min-h-screen max-w-350 items-center gap-12 px-6 py-10 lg:grid-cols-2 lg:px-10 xl:px-16">
        <div className="order-2 flex flex-col items-start justify-center lg:order-1">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="mb-6 rounded-full border border-[#c9a24a]/40 bg-[#0b2248] px-4 py-2 text-sm text-[#d4af57]"
          >
            الحل الأمثل لإدارة مكاتب المحاماة
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.25}
            className="max-w-155 text-4xl font-extrabold leading-[1.2] tracking-tight sm:text-5xl lg:text-7xl"
          >
            نظام متكامل للإدارة
            <br />
            <span className="text-[#d4af57]">مكاتب المحاماة</span>
            <br />
            بكفاءة
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.4}
            className="mt-6 max-w-155 text-base leading-8 text-white/70 sm:text-lg"
          >
            وفر وقتك، نظم قضاياك، وحسن إنتاجيتك بنظام شامل يجمع كل أدوات
            الإدارة القانونية في منصة واحدة سهلة الاستخدام
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.55}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="#"
                className="inline-flex min-w-42.5 items-center justify-center rounded-xl bg-[#c9a24a] px-8 py-4 text-base font-bold text-[#061937] transition hover:opacity-90"
              >
                ابدأ الآن
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="#"
                className="inline-flex min-w-42.5 items-center justify-center rounded-xl border border-[#d4af57] bg-white px-8 py-4 text-base font-bold text-[#b78c2f] transition hover:bg-[#f8f3e8]"
              >
                طلب عرض توضيحي
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.7}
            className="mt-10 flex items-center gap-4"
          >
            <div className="flex -space-x-3 space-x-reverse">
              {[0, 1, 2].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + item * 0.12, duration: 0.35 }}
                  className={`h-10 w-10 rounded-full border-2 border-white ${
                    item === 0
                      ? "bg-[#d9d9d9]"
                      : item === 1
                        ? "bg-[#cfcfcf]"
                        : "bg-[#bfbfbf]"
                  }`}
                />
              ))}
            </div>

            <p className="text-sm text-white/55">
              موثوق فيه من أكثر من ١٠٠+ مكتب محاماة في دول
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate="show"
          className="order-1 lg:order-2"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative mx-auto h-75 w-full max-w-160 overflow-hidden rounded-[28px] border border-[#c9a24a]/30 bg-white/5 shadow-2xl sm:h-95 lg:h-130"
          >
            <motion.div
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={Fiamge}
                alt="إدارة مكاتب المحاماة"
                fill
                priority
                className="object-cover"
              />
            </motion.div>

            <div className="absolute inset-0 bg-linear-to-t from-[#061937]/30 via-transparent to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}