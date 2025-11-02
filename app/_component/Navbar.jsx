"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { Link, usePathname, useRouter } from '@/app/i18n/routing'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [openMore, setOpenMore] = useState(false)
    const [openLang, setOpenLang] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const moreRef = useRef(null)
    const langRef = useRef(null)

    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()
    const t = useTranslations('Navbar')

    function switchLocale(newLocale) {
        // Keep on the same path and only switch locale
        router.replace({ pathname }, { locale: newLocale })
        setOpenLang(false)
    }

    useEffect(() => {
        function handleScroll() {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        function handleClickOutside(e) {
            if (moreRef.current && !moreRef.current.contains(e.target) && openMore) {
                setOpenMore(false)
            }
            if (langRef.current && !langRef.current.contains(e.target) && openLang) {
                setOpenLang(false)
            }
        }
        function handleKey(e) {
            if (e.key === 'Escape') {
                setOpenMore(false)
                setOpenLang(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('keydown', handleKey)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleKey)
        }
    }, [openMore, openLang])

    const navItems = [
        { label: t('home'), href: '/' },
        { label: t('about'), href: '/About' },
        { label: t('scholarlyAchievements'), href: '/ScholarlyAchievements' },
        { label: t('academicJourney'), href: '/AcademicJourney' },
    ]

    return (
        <header className="fixed inset-x-0 top-0 z-40">
            <div className="mx-auto max-w-7xl px-4">
                {/* Top bar with hamburger menu - visible on mobile, medium, and large screens (until xl) */}
                <div className={`mt-4 flex items-center justify-between rounded-xl border px-4 py-3 text-white backdrop-blur-md shadow-lg transition-colors duration-300 xl:hidden ${scrolled ? 'bg-black/95 border-white/20' : 'bg-white/5 border-white/10'
                    }`}>
                    <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
                        <span className="text-lg font-semibold tracking-wide">{t('title')}</span>
                    </Link>
                    <button
                        aria-label="Toggle menu"
                        className="inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                        onClick={() => setOpen(!open)}
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {open ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Desktop navbar: brand left, links center, social right - ONLY on large screens */}
                <nav className={`mt-2 hidden xl:grid grid-cols-3 items-center rounded-xl border px-4 py-3 text-white backdrop-blur-md shadow-lg transition-colors duration-300 ${scrolled ? 'bg-black/95 border-white/20' : 'bg-white/5 border-white/10'
                    }`}>
                    {/* Left: Brand */}
                    <div className="flex items-center justify-start rtl:justify-end">
                        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
                            <span className="text-lg md:text-xl font-semibold tracking-wide">{t('title')}</span>
                        </Link>
                    </div>

                    {/* Center: Nav links */}
                    <ul className="hidden xl:flex items-center justify-evenly w-full">

                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="relative py-1 px-3 text-sm tracking-wide text-white/90 hover:text-white transition group whitespace-nowrap"
                                >

                                    {item.label}
                                    <span className="pointer-events-none absolute -bottom-0.5 left-0 rtl:left-auto rtl:right-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </li>
                        ))}

                        {/* More dropdown */}
                        <li className="relative" ref={moreRef}>
                            <button
                                onClick={() => setOpenMore((v) => !v)}
                                className="relative py-1 px-3 text-sm tracking-wide text-white/90 hover:text-white transition group inline-flex items-center gap-1"
                                aria-haspopup="menu"
                                aria-expanded={openMore}
                            >
                                {t('more')}
                                <svg className={`h-4 w-4 transition-transform ${openMore ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z" clipRule="evenodd" />
                                </svg>
                                <span className="pointer-events-none absolute -bottom-0.5 left-0 rtl:left-auto rtl:right-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                            </button>

                            {openMore && (
                                <div className={`absolute ${locale === 'ar' ? 'right-1/2 translate-x-1/2' : 'left-1/2 -translate-x-1/2'} mt-2 w-56 overflow-hidden rounded-lg border ${scrolled ? 'border-white/20 bg-black' : 'border-white/10 bg-white/10'} backdrop-blur-md shadow-xl`} onMouseLeave={() => setOpenMore(false)}>
                                    <ul className="py-1">
                                        <li>
                                            <Link href="/EducationalVideos" className="block px-4 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 transition" onClick={() => setOpenMore(false)}>
                                                {t('educationalVideos')}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/Supervision" className="block px-4 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 transition" onClick={() => setOpenMore(false)}>
                                                {t('supervision')}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                    </ul>

                    {/* Right: Social icons */}
                    <div className="hidden xl:flex items-center justify-end rtl:justify-start gap-3">
                        {/* Locale switcher */}
                        <div className="relative" ref={langRef}>
                            <button
                                onClick={() => setOpenLang(!openLang)}
                                className="px-3 py-1.5 rounded-full border border-white/20 text-xs tracking-wide text-white/90 hover:text-white hover:border-white/40 transition inline-flex items-center gap-2"
                                aria-label="Switch language"
                                aria-haspopup="menu"
                                aria-expanded={openLang}
                            >
                                <Image
                                    src={locale === 'ar' ? '/flags/eg.svg' : '/flags/us.svg'}
                                    alt={locale === 'ar' ? 'Egypt Flag' : 'USA Flag'}
                                    width={20}
                                    height={15}
                                    className="object-contain"
                                />
                                <span>{locale === 'ar' ? 'العربية' : 'English'}</span>
                                <svg className={`h-3 w-3 transition-transform ${openLang ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z" clipRule="evenodd" />
                                </svg>
                            </button>

                            {openLang && (
                                <div className={`absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-40 overflow-hidden rounded-lg border ${scrolled ? 'border-white/20 bg-black' : 'border-white/10 bg-white/10'} backdrop-blur-md shadow-xl z-50`} onMouseLeave={() => setOpenLang(false)}>
                                    <ul className="py-1">
                                        <li>
                                            <button
                                                onClick={() => switchLocale('en')}
                                                className={`w-full px-4 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 transition flex items-center gap-3 ${locale === 'en' ? 'bg-white/5' : ''}`}
                                            >
                                                <Image
                                                    src="/flags/us.svg"
                                                    alt="USA Flag"
                                                    width={24}
                                                    height={18}
                                                    className="object-contain"
                                                />
                                                <span className="text-left rtl:text-right flex-1">English</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => switchLocale('ar')}
                                                className={`w-full px-4 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 transition flex items-center gap-3 ${locale === 'ar' ? 'bg-white/5' : ''}`}
                                            >
                                                <Image
                                                    src="/flags/eg.svg"
                                                    alt="Egypt Flag"
                                                    width={24}
                                                    height={18}
                                                    className="object-contain"
                                                />
                                                <span className="text-left rtl:text-right flex-1">العربية</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <a href="https://x.com/enghamouda" target="_blank" rel="noreferrer" aria-label="X"
                            className="text-white/80 hover:text-white transition">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M18.901 2.25h3.018l-6.593 7.538 7.75 11.962H16.21l-4.834-6.9-5.534 6.9H2.823l7.06-8.8L2.25 2.25h7.013l4.37 6.2 5.268-6.2Zm-1.055 19.5h1.672L6.22 3.87H4.43l13.416 17.88Z" /></svg>
                        </a>
                        <a href="https://www.facebook.com/h.alkhaters" target="_blank" rel="noreferrer" aria-label="Facebook"
                            className="text-white/80 hover:text-white transition">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.91h-2.32V22c4.78-.8 8.44-4.94 8.44-9.94Z" /></svg>
                        </a>
                        <a href="https://www.instagram.com/hamoudamousa/" target="_blank" rel="noreferrer" aria-label="Instagram"
                            className="text-white/80 hover:text-white transition">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm5.65-.95a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" /></svg>
                        </a>
                        <a href="http://app.svu.edu.eg/arabic/staff/application/result.aspx?id_num=7777" target="_blank" rel="noreferrer" aria-label="University"
                            className="text-white/80 hover:text-white transition">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3Zm0 15L5 14v3l7 4 7-4v-3l-7 4Z" /></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/hamouda-m-mousa-56252219a/" target="_blank" rel="noreferrer" aria-label="LinkedIn"
                            className="text-white/80 hover:text-white transition">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M20.45 20.45h-3.55v-5.6c0-1.34-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7H9.35V9h3.4v1.56h.05c.47-.9 1.62-1.86 3.33-1.86 3.56 0 4.22 2.34 4.22 5.38v6.37ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.56V9h3.55v11.45Z" /></svg>
                        </a>
                    </div>
                </nav>


                {open && (
                    <div className="mt-2 overflow-hidden rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur-md shadow-lg xl:hidden">
                        {/* Social icons at top */}
                        <div className="px-4 pt-4 pb-3 flex items-center justify-center gap-4 border-b border-white/10">
                            {/* Locale switcher (mobile) */}
                            <div className="relative" ref={langRef}>
                                <button
                                    onClick={() => setOpenLang(!openLang)}
                                    className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs transition inline-flex items-center gap-1.5"
                                    aria-label="Switch language"
                                    aria-haspopup="menu"
                                    aria-expanded={openLang}
                                >
                                    <Image
                                        src={locale === 'ar' ? '/flags/eg.svg' : '/flags/us.svg'}
                                        alt={locale === 'ar' ? 'Egypt Flag' : 'USA Flag'}
                                        width={18}
                                        height={14}
                                        className="object-contain"
                                    />
                                    <span>{locale === 'ar' ? 'AR' : 'EN'}</span>
                                </button>

                                {openLang && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-40 overflow-hidden rounded-lg border border-white/10 bg-white/10 backdrop-blur-md shadow-xl z-50">
                                        <ul className="py-1">
                                            <li>
                                                <button
                                                    onClick={() => { switchLocale('en'); setOpen(false) }}
                                                    className={`w-full px-4 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 transition flex items-center gap-3 ${locale === 'en' ? 'bg-white/5' : ''}`}
                                                >
                                                    <Image
                                                        src="/flags/us.svg"
                                                        alt="USA Flag"
                                                        width={24}
                                                        height={18}
                                                        className="object-contain"
                                                    />
                                                    <span className="text-left rtl:text-right flex-1">English</span>
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={() => { switchLocale('ar'); setOpen(false) }}
                                                    className={`w-full px-4 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 transition flex items-center gap-3 ${locale === 'ar' ? 'bg-white/5' : ''}`}
                                                >
                                                    <Image
                                                        src="/flags/eg.svg"
                                                        alt="Egypt Flag"
                                                        width={24}
                                                        height={18}
                                                        className="object-contain"
                                                    />
                                                    <span className="text-left rtl:text-right flex-1">العربية</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <a href="https://x.com/enghamouda" target="_blank" rel="noreferrer" aria-label="X" className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                    <path d="M18.901 2.25h3.018l-6.593 7.538 7.75 11.962H16.21l-4.834-6.9-5.534 6.9H2.823l7.06-8.8L2.25 2.25h7.013l4.37 6.2 5.268-6.2Zm-1.055 19.5h1.672L6.22 3.87H4.43l13.416 17.88Z" />
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/h.alkhaters" target="_blank" rel="noreferrer" aria-label="Facebook" className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                    <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.91h-2.32V22c4.78-.8 8.44-4.94 8.44-9.94Z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/hamoudamousa/" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm5.65-.95a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
                                </svg>
                            </a>
                            <a href="http://app.svu.edu.eg/arabic/staff/application/result.aspx?id_num=7777" target="_blank" rel="noreferrer" aria-label="University" className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                    <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3Zm0 15L5 14v3l7 4 7-4v-3l-7 4Z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/hamouda-m-mousa-56252219a/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                    <path d="M20.45 20.45h-3.55v-5.6c0-1.34-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7H9.35V9h3.4v1.56h.05c.47-.9 1.62-1.86 3.33-1.86 3.56 0 4.22 2.34 4.22 5.38v6.37ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.56V9h3.55v11.45Z" />
                                </svg>
                            </a>
                        </div>
                        <ul className="flex flex-col divide-y divide-white/10">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="block px-4 py-3 text-sm tracking-wide text-white/90 hover:text-white hover:bg-white/10 transition"
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <details className="group">
                                    <summary className="px-4 py-3 cursor-pointer list-none text-sm tracking-wide text-white/90 hover:text-white hover:bg-white/10 transition flex items-center justify-between gap-1">
                                        <span>{t('more')}</span>
                                        <svg className="h-4 w-4 transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z" clipRule="evenodd" />
                                        </svg>
                                    </summary>
                                    <div className="px-2 pb-2">
                                        <Link href="/EducationalVideos" className="block px-3 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded transition" onClick={() => setOpen(false)}>
                                            {t('educationalVideos')}
                                        </Link>
                                        <Link href="/Supervision" className="mt-1 block px-3 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded transition" onClick={() => setOpen(false)}>
                                            {t('supervision')}
                                        </Link>
                                    </div>
                                </details>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    )
}