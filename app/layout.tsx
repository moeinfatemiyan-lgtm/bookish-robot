import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ادمین نیایش | مدیریت پیج و تولید محتوا",
  description: "مدیریت حرفه‌ای اینستاگرام، تولید محتوا، سناریونویسی و استراتژی محتوا برای رشد هدفمند کسب‌وکار شما.",
  applicationName: "Admin Niayesh"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
