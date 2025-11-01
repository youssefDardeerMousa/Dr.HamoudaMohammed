"use client"
import Image from 'next/image'
import React, { useEffect, useMemo, useState } from 'react'
import heroBg from '@/public/hero-bg.jpg'
import { useTranslations } from 'next-intl'

export default function Homesection() {
    const t = useTranslations('Home')
    const typedItems = useMemo(() => [
        t('typed.0'),
        t('typed.1'),
        t('typed.2'),
    ], [t])

    const [displayText, setDisplayText] = useState('')
    const [itemIndex, setItemIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const current = typedItems[itemIndex % typedItems.length]
        const typingSpeed = isDeleting ? 50 : 100
        const pauseAtEndMs = 1200

        let timeout: NodeJS.Timeout

        if (!isDeleting && displayText === current) {
            timeout = setTimeout(() => setIsDeleting(true), pauseAtEndMs)
        } else if (isDeleting && displayText === '') {
            setIsDeleting(false)
            setItemIndex((prev) => (prev + 1) % typedItems.length)
        } else {
            timeout = setTimeout(() => {
                const nextLength = displayText.length + (isDeleting ? -1 : 1)
                setDisplayText(current.slice(0, nextLength))
            }, typingSpeed)
        }

        return () => clearTimeout(timeout)
    }, [displayText, isDeleting, itemIndex, typedItems])

    return (
        <section id="hero" className="relative text-white overflow-hidden min-h-screen">
            <Image
                src={heroBg}
                alt="Hero background"
                fill
                sizes="100vw"
                priority
                data-aos="fade-in"
                className="absolute inset-0  object-center  z-0"
            />

            {/* Night-like overlay for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b1020]/40 via-[#0b1020]/60 to-[#0b1020]/60 z-10" />

            <div className="relative z-20 container mx-auto max-w-5xl px-4 py-24 flex items-center min-h-screen" data-aos="fade-up" data-aos-delay="100">
                <div className="text-left">
                    <p className="text-3xl md:text-5xl font-semibold mb-4">{t('name')}</p>
                    <p className="text-xl md:text-2xl">
                        {t('im')}{' '}
                        <span className="typed align-baseline">{displayText}</span>
                        <span className="typed-cursor typed-cursor--blink ml-1" aria-hidden="true">|</span>
                    </p>
                </div>
            </div>
        </section>
    )
}