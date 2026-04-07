import React from 'react'
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
import { Feature } from '@/app/types/Featuretypes';

function FeatureCard({
  title,
  description,
  icon: Icon,
}: Feature) {
  return (
    <div className="rounded-2xl border border-[#22365e] bg-[#0d2145] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition duration-300 hover:-translate-y-1 hover:border-[#c9a24a]/40">
      <div className="mb-5 flex justify-start">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c9a24a]/30 bg-[#0a1a36]">
          <Icon className="h-5 w-5 text-[#d3a63f]" />
        </div>
      </div>

      <h3 className="mb-3 text-lg font-bold text-white">{title}</h3>

      <p className="text-sm leading-7 text-white/65">{description}</p>
    </div>
  );
}

export default FeatureCard