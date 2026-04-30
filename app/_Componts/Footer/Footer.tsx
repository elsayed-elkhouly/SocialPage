import React from 'react'
import {
  Scale,
  Mail,
  Phone,
  MapPin,

} from "lucide-react";
import { FaFacebook } from 'react-icons/fa';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import Link from 'next/link';
const Footer = () => {
  const quickLinks = [
    { label: "الرئيسية", href: "#" },
    { label: "المميزات", href: "#" },
    { label: "الأسعار", href: "#" },
    { label: "من نحن", href: "#" },
    { label: "اتصل بنا", href: "#" },
  ];

  const resources = [
    { label: "سياسة الخصوصية", href: "#" },
    { label: "الشروط والأحكام", href: "#" },
    { label: "اتفاقية الخدمة", href: "#" },
    { label: "الدعم الفني", href: "#" },
    { label: "فيديو الشرح", href: "#" },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: BsTwitter, href: "#", label: "Twitter" },
    { icon: BsInstagram, href: "#", label: "Instagram" },
  ];
  return (
    <>
      <footer dir="rtl" className="bg-[#071a33] text-white">
        <div className="border-t border-white/5" />

        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <Scale className="h-6 w-6 text-[#d2aa48]" />
                <span className="text-3xl font-extrabold tracking-tight">
                  lexora
                </span>
              </div>

              <p className="max-w-sm text-sm leading-8 text-white/65">
                الحل الأمثل لإدارة مكتب المحاماة بكفاءة واحترافية، وفر لك جميع
                الأدوات التي تحتاجها في منصة واحدة.
              </p>

              <div className="mt-6 flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#d2aa48] hover:text-[#071a33]"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-3xl font-extrabold">روابط سريعة</h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition hover:text-[#d2aa48]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-3xl font-extrabold">الموارد</h3>
              <ul className="space-y-4">
                {resources.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition hover:text-[#d2aa48]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-3xl font-extrabold">تواصل معنا</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-[#d2aa48]" />
                  <div>
                    <p className="mb-1 text-sm text-white/55">البريد الإلكتروني</p>
                    <a
                      href="mailto:contact@alnukhba.com"
                      className="text-base text-white transition hover:text-[#d2aa48]"
                    >
                      info@helper10.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-[#d2aa48]" />
                  <div>
                    <p className="mb-1 text-sm text-white/55">الهاتف</p>
                    <a
                      href="tel:01553132233"
                      className="text-base text-white transition hover:text-[#d2aa48]"
                    >
                      01101063100
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-[#d2aa48]" />
                  <div>
                    <p className="mb-1 text-sm text-white/55">العنوان</p>
                    <p className="text-base text-white">
                     مصر - Egypt
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#22385f]">
          <div className="mx-auto flex  flex-col items-center justify-between gap-4 px-4 py-5 text-sm text-white/55 md:flex-row md:px-8 lg:px-12">
            <p> جميع الحقوق محفوظة © ٢٠٢٥ شركه Helper 10 </p>

            <Link
              href="#"
              className="transition hover:text-[#d2aa48]"
            >
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer