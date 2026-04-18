"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: (
          <CircleCheckIcon className="size-4 text-green-500" />
        ),
        info: (
          <InfoIcon className="size-4" />
        ),
        warning: (
          <TriangleAlertIcon className="size-4" />
        ),
        error: (
          <OctagonXIcon className="size-4 text-red-600" />
        ),
        loading: (
          <Loader2Icon className="size-4 animate-spin" />
        ),
      }}
      style={
        {
          "--normal-bg": "#0e1a2b",
          "--normal-text": "#ffffff",
          "--normal-border": "#333",

          "--success-bg": "#052e16",
          "--success-text": "#4ade80",
          "--success-border": "#166534",

          "--error-bg": "#2b0a0a",
          "--error-text": "#f87171",
          "--error-border": "#7f1d1d",

          "--warning-bg": "#2b1a05",
          "--warning-text": "#facc15",
          "--warning-border": "#78350f",

          "--info-bg": "#0a1a2b",
          "--info-text": "#60a5fa",
          "--info-border": "#1d4ed8",

          "--border-radius": "20px",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast flex justify-center text-right ml-5 direction-rtl",
          title: "text-right w-full",
          description: "text-right w-full",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
