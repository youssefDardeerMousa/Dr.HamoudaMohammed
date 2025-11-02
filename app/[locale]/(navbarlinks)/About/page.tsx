"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import AcademicJourney from '../AcademicJourney/page'

export default function About() {
    const t = useTranslations('About')
    const [isHovered, setIsHovered] = useState(false)

    return (
        <section className="relative min-h-[80vh] text-center mt-5 py-16">
            {/* background subtle */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#0b1020]/40 via-[#0b1020]/20 to-transparent" />

            {/* geometric shapes */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                {/* soft radial glows */}
                <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-cyan-400/10 blur-3xl" aria-hidden />
                <div className="absolute bottom-10 right-16 w-56 h-56 rounded-full bg-fuchsia-400/10 blur-3xl" aria-hidden />
                {/* rotated squares */}
                <div className="absolute left-1/4 top-1/3 size-24 border border-white/10 rotate-12" aria-hidden />
                <div className="absolute right-1/5 bottom-1/3 size-16 border border-white/10 -rotate-12" aria-hidden />
            </div>

            <div className="container mx-auto max-w-6xl px-4">


                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch" data-aos="fade-up" data-aos-delay="100">
                    <div className="lg:col-span-5 mx-auto lg:mx-0 h-full w-full">
                        <div
                            className="group relative w-full h-[28rem] md:h-[32rem] lg:h-full rounded-2xl overflow-hidden ring-2 ring-white/20 shadow-2xl cursor-pointer"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onTouchStart={() => setIsHovered(true)}
                        >
                            <Image src="/37854371_2241674132731239_7282903269901336576_n.jpg" alt="Hamouda M Mousa" fill className="object-cover" priority />
                            {/* curtain overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 transition-transform duration-500 ease-out flex items-center justify-center ${isHovered ? 'translate-y-0' : 'translate-y-[-100%]'}`}>
                                <div className="px-4 text-center">
                                    <p className="text-xl md:text-2xl font-semibold text-white">{t('title')}</p>
                                    <p className="text-sm md:text-base text-white/80 mt-1">{t('subtitle')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 text-white/90 space-y-6 text-center ">
                        <p className="leading-7">
                            {t('description')}
                        </p>

                        <h3 className="text-xl md:text-2xl font-semibold">{t('position')}</h3>
                        <p className="italic text-white/80">{t('positionDescription')}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm ">
                            <ul className="space-y-3 mx-auto">
                                <li className="flex gap-2"><span className="text-white">{t('birthday')}</span> <span className="text-white/80">{t('birthdayValue')}</span></li>
                                <li className="flex gap-2"><span className="text-white">{t('email')}</span> <span className="text-white/80">elkhaters@gmail.com</span></li>
                                <li className="flex gap-2"><span className="text-white">{t('city')}</span> <span className="text-white/80">{t('cityValue')}</span></li>
                            </ul>
                            <ul className="space-y-3 mx-auto">
                                <li className="flex gap-2"><span className="text-white">{t('researcherId')}</span> <span className="text-white/80">L-7893-2014</span></li>
                                <li className="flex gap-2"><span className="text-white">{t('orcidId')}</span> <span className="text-white/80">0000-0003-0087-1458</span></li>
                                <li className="flex gap-2"><span className="text-white">{t('work')}</span> <span className="text-white/80">{t('workAvailable')}</span></li>
                                <li className="flex gap-2"><span className="text-white">{t('positionLabel')}</span> <span className="text-white/80">{t('positionValue')}</span></li>
                            </ul>
                        </div>

                        <p className="leading-7 text-white/90">
                            {t('finalDescription')}
                        </p>
                    </div>
                </div>
            </div>
            <AcademicJourney />
        </section>

    )
}