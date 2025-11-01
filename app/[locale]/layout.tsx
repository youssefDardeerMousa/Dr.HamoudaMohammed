import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { setRequestLocale } from 'next-intl/server';
import Navbar from "../_component/Navbar";
import Footer from "../_component/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from 'next-intl/server';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hamouda Mohammed",
  description: "Hamouda Mohammed's Personal Website",
  icons: {
    icon: [
      { url: '/37854371_2241674132731239_7282903269901336576_n.jpg', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/37854371_2241674132731239_7282903269901336576_n.jpg', type: 'image/jpeg' },
    ],
  },
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();
  setRequestLocale(locale);

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

