"use client"
import React, { useState, useMemo } from 'react'
import { useTranslations } from 'next-intl'

type JourneyItem = {
    title: string
    description: string
    image: string
    key: string
}

export default function AcademicJourney() {
    const t = useTranslations('AcademicJourney')
    const [selectedItem, setSelectedItem] = useState<JourneyItem | null>(null)
    
    const journeyItems: JourneyItem[] = useMemo(() => [
        {
            key: 'mit',
            title: t('items.mit.title'),
            description: t('items.mit.description'),
            image: '/app-1.jpg',
        },
        {
            key: 'naqaae',
            title: t('items.naqaae.title'),
            description: t('items.naqaae.description'),
            image: '/branding-1.jpg',
        },
        {
            key: 'ksu',
            title: t('items.ksu.title'),
            description: t('items.ksu.description'),
            image: "/books-1.jpg"
        },
        {
            key: 'astr',
            title: t('items.astr.title'),
            description: t('items.astr.description'),
            image: '/app-2.jpg',
        },
        {
            key: 'gifted',
            title: t('items.gifted.title'),
            description: t('items.gifted.description'),
            image: '/branding-2.jpg',
        },
        {
            key: 'assiut',
            title: t('items.assiut.title'),
            description: t('items.assiut.description'),
            image: '/books-2.jpg',
        },
        {
            key: 'jeonbuk',
            title: t('items.jeonbuk.title'),
            description: t('items.jeonbuk.description'),
            image: '/app-3.jpg',
        },
        {
            key: 'texas',
            title: t('items.texas.title'),
            description: t('items.texas.description'),
            image: '/branding-3.jpg',
        },
        {
            key: 'fulbright',
            title: t('items.fulbright.title'),
            description: t('items.fulbright.description'),
            image: '/books-3.jpg',
        },
    ], [t])
    const renderDescription = (text: string) => {
        const lines = text.split('\n').map((l) => l.trim()).filter(Boolean)
        if (lines.length > 1) {
            return (
                <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-white/70 text-left">
                    {lines.map((line, idx) => (
                        <li key={idx}>{line}</li>
                    ))}
                </ul>
            )
        }
        return (
            <p className="text-sm leading-6 text-white/70 text-left">{text}</p>
        )
    }
    return (
        <section className="relative overflow-hidden bg-[#0b1020] bg-gradient-to-b from-[#0b1020]/40 via-[#0b1020]/20 to-transparent text-center">
            <div className="absolute inset-0 -z-10 opacity-30 [mask-image:radial-gradient(60%_60%_at_50%_10%,black,transparent)]">
                <div className="pointer-events-none absolute -top-24 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl py-10 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                        {t('title')}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-white/70 sm:text-base">
                        {t('description')}
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {journeyItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/5 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                        >
                            <div className="relative h-44 w-full overflow-hidden bg-slate-800">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-contain p-2 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 pointer-events-none" />
                            </div>
                            <div className="relative p-5">
                                <h3 className="relative z-10 text-center text-lg font-bold tracking-tight text-white">
                                    {item.title}
                                </h3>
                                {/* description hidden in card; shown in modal on Learn more */}

                                <button
                                    type="button"
                                    onClick={() => setSelectedItem(item)}
                                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-sky-600/20 transition-colors hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 active:bg-sky-800 dark:bg-sky-700 dark:hover:bg-sky-600"
                                >
                                    <span>{t('learnMore')}</span>
                                    <span aria-hidden className="rtl:hidden">→</span>
                                    <span aria-hidden className="hidden rtl:inline">←</span>
                                </button>
                            </div>

                            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 transition duration-300 group-hover:ring-cyan-400/30" />
                        </div>
                    ))}
                </div>
            </div>

            {selectedItem && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    aria-modal="true"
                    role="dialog"
                >
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setSelectedItem(null)}
                    />
                    <div className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl bg-slate-900 shadow-2xl ring-1 ring-white/10">
                        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                            <h4 className="text-base font-semibold text-white">{selectedItem.title}</h4>
                            <button
                                type="button"
                                onClick={() => setSelectedItem(null)}
                                className="inline-flex h-8 w-8 items-center justify-center rounded-md text-white/70 hover:bg-white/10 hover:text-white focus:outline-none"
                                aria-label="Close"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="grid gap-4 p-4 md:grid-cols-2">
                            <div className="flex items-center justify-center rounded-lg bg-slate-800 p-2">
                                <img
                                    src={selectedItem.image}
                                    alt={selectedItem.title}
                                    className="max-h-[60vh] w-full object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <h5 className="mb-2 text-lg font-bold text-white">{selectedItem.title}</h5>
                                {selectedItem.key === 'ksu' ? (
                                    <div className="max-h-[60vh] overflow-y-auto pr-2">
                                        {renderDescription(selectedItem.description)}
                                    </div>
                                ) : (
                                    renderDescription(selectedItem.description)
                                )}
                                <div className="mt-auto pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setSelectedItem(null)}
                                        className="inline-flex items-center justify-center rounded-lg bg-slate-700 px-4 py-2 text-sm font-medium text-white hover:bg-slate-600 focus:outline-none"
                                    >
                                        {t('close')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}