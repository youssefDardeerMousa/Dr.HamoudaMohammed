"use client"
import React from 'react'
import { useTranslations } from 'next-intl'

export default function Footer() {
    const t = useTranslations('Footer')
    return (
        <footer className="relative border-t border-white/10 bg-gradient-to-b from-transparent to-[#0b1020]/40 backdrop-blur-sm text-center">
            {/* Decorative top border */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

            <div className="container mx-auto max-w-7xl px-4 py-12">
                {/* Main Footer Content - Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Column 1: About */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">{t('about.title')}</h3>
                        <p className="text-sm text-white/70 leading-relaxed">
                            {t('about.description')}
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">{t('quickLinks.title')}</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="/" className="text-sm text-white/70 hover:text-white transition-colors inline-flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                    {t('quickLinks.home')}
                                </a>
                            </li>
                            <li>
                                <a href="/About" className="text-sm text-white/70 hover:text-white transition-colors inline-flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                    {t('quickLinks.aboutMe')}
                                </a>
                            </li>
                            <li>
                                <a href="/ScholarlyAchievements" className="text-sm text-white/70 hover:text-white transition-colors inline-flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                    {t('quickLinks.scholarlyAchievements')}
                                </a>
                            </li>

                        </ul>
                    </div>

                    {/* Column 3: Achievements Summary */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">{t('achievements.title')}</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="text-white/70">✓ {t('achievements.phd')}</li>
                            <li className="text-white/70">✓ {t('achievements.fulbright')}</li>
                            <li className="text-white/70">✓ {t('achievements.award')}</li>
                            <li className="text-white/70">✓ {t('achievements.certifications')}</li>
                        </ul>
                    </div>

                    {/* Column 4: Connect */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">{t('connect.title')}</h3>
                        <p className="text-sm text-white/70 mb-4">
                            {t('connect.description')}
                        </p>
                        {/* Social Links */}
                        <div className="flex flex-wrap gap-3 justify-center">
                            <a
                                href="https://x.com/enghamouda"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="X"
                                className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                    <path d="M18.901 2.25h3.018l-6.593 7.538 7.75 11.962H16.21l-4.834-6.9-5.534 6.9H2.823l7.06-8.8L2.25 2.25h7.013l4.37 6.2 5.268-6.2Zm-1.055 19.5h1.672L6.22 3.87H4.43l13.416 17.88Z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.facebook.com/h.alkhaters"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                                className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-110"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                    <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.91h-2.32V22c4.78-.8 8.44-4.94 8.44-9.94Z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/hamoudamousa/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                                className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-pink-400/50 transition-all duration-300 hover:scale-110"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm5.65-.95a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
                                </svg>
                            </a>
                            <a
                                href="http://app.svu.edu.eg/arabic/staff/application/result.aspx?id_num=7777"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="University"
                                className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-yellow-400/50 transition-all duration-300 hover:scale-110"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                    <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3Zm0 15L5 14v3l7 4 7-4v-3l-7 4Z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/hamouda-m-mousa-56252219a/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                    <path d="M20.45 20.45h-3.55v-5.6c0-1.34-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7H9.35V9h3.4v1.56h.05c.47-.9 1.62-1.86 3.33-1.86 3.56 0 4.22 2.34 4.22 5.38v6.37ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.56V9h3.55v11.45Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-8 border-t border-white/10" />

                {/* Copyright Section */}
                <div className="text-center">
                    <p className="text-sm text-white/60 mb-2">
                        {t('copyright.year', { year: new Date().getFullYear() })} <span className="text-white font-semibold">{t('copyright.name')}</span>
                    </p>
                    <p className="text-xs text-white/40 mb-4">
                        {t('copyright.rights')}
                    </p>
                    {/* Decorative dots */}
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
                        <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-400/60" />
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
                    </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute bottom-8 left-10 w-20 h-20 rounded-full bg-cyan-400/5 blur-2xl pointer-events-none" aria-hidden />
                <div className="absolute top-8 right-16 w-32 h-32 rounded-full bg-fuchsia-400/5 blur-3xl pointer-events-none" aria-hidden />
            </div>
        </footer>
    )
}