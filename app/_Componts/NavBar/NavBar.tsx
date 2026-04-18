import React from 'react'
import { Scale } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  const navItems = [
    { label: "المميزات", href: "#features" },
    { label: "كيف يعمل", href: "#how-it-works" },
    { label: "آراء العملاء", href: "#reviews" },
    { label: "الأسعار", href: "#pricing" },
  ];
  return (
    <header className="w-full bg-[#061937] text-white" dir="rtl">
      <div className="mx-auto flex h-18 max-w-360 items-center justify-between px-6 md:px-10">
        <div className="flex items-center gap-2">
          <Scale className="h-5 w-5 text-[#d4a63f]" />
          <Link href={""} className=" font-bold tracking-tight text-2xl">
            lexora
          </Link >
        </div>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/85 transition hover:text-[#d4a63f]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="https://wa.me/201101063100?text=مرحباً، أريد التحدث مع فريق المبيعات"
          target="_blank"

          className="rounded-md bg-[#d4a63f] px-4 py-2 text-sm font-semibold text-[#071a33] transition hover:opacity-90"
        >
          ابدأ الآن
        </Link>
      </div>

      <div className="h-px w-full bg-white/10" />
    </header>
  )
}

export default NavBar