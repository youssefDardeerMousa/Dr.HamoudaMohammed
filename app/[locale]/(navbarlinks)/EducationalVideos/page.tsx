"use client"
import React from 'react'
import { useTranslations } from 'next-intl'

export default function EducationalVideos() {
    const t = useTranslations('EducationalVideos')
    return (
        <section className="relative min-h-[80vh] py-16">
            {/* background layers */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#0b1020]/40 via-[#0b1020]/20 to-transparent" />
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-cyan-400/10 blur-3xl" aria-hidden />
                <div className="absolute bottom-10 right-16 w-56 h-56 rounded-full bg-fuchsia-400/10 blur-3xl" aria-hidden />
                <div className="absolute left-1/4 top-1/3 size-24 border border-white/10 rotate-12" aria-hidden />
                <div className="absolute right-1/5 bottom-1/3 size-16 border border-white/10 -rotate-12" aria-hidden />
            </div>

            <div className="container mx-auto max-w-6xl px-4">
                {/* Heading */}
                <div className="text-center mb-10 py-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('title')}</h2>
                    <p className="text-white/70 mt-2">{t('subtitle')}</p>
                </div>

                {/* Featured TV Interview */}
                <div className="group relative rounded-2xl overflow-hidden ring-2 ring-white/10 shadow-2xl bg-white/5 backdrop-blur mb-14">
                    <div className="p-5 md:p-7 flex flex-col gap-4 text-center">
                        <div className="flex items-baseline justify-between gap-4">
                            <div className="text-center">
                                <h2 className="text-xl md:text-2xl font-semibold text-white">{t('tvInterview.title')}</h2>
                                <p className="text-white/70 text-sm md:text-base">{t('tvInterview.subtitle')}</p>
                            </div>
                            <a
                                href="https://youtu.be/M5NP56ME-CY?si=SP6AjlVmOihdvDcg"
                                target="_blank"
                                rel="noreferrer"
                                className="text-cyan-300 hover:text-cyan-200 text-sm md:text-base underline decoration-dotted"
                            >{t('tvInterview.watch')}</a>
                        </div>

                        <div className="relative rounded-xl overflow-hidden ring-1 ring-white/10 shadow-lg">
                            <div className="aspect-video bg-black">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/M5NP56ME-CY"
                                    title="TV Interview - القناة الأولى"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                    {/* glow on hover */}
                    <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-fuchsia-500/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
                </div>

                {/* Electric golf cart series */}
                <div className="mb-6 text-center">
                    <h3 className="text-xl md:text-2xl font-semibold text-white">{t('electricGolfCart.title')}</h3>
                    <p className="text-white/70 mt-1">{t('electricGolfCart.subtitle')}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <VideoCard
                        title={t('electricGolfCart.part1')}
                        href="https://youtu.be/ihCvS91qH6M"
                        embedSrc="https://www.youtube.com/embed/ihCvS91qH6M"
                    />
                    <VideoCard
                        title={t('electricGolfCart.part2')}
                        href="https://youtu.be/LQ5m5wFJUvc"
                        embedSrc="https://www.youtube.com/embed/LQ5m5wFJUvc"
                    />
                    <VideoCard
                        title={t('electricGolfCart.part3')}
                        href="https://youtu.be/FNGh6dUq3zQ"
                        embedSrc="https://www.youtube.com/embed/FNGh6dUq3zQ"
                    />
                </div>

                {/* Channel highlight */}
                <div className="mt-16 ">
                    <div className="group relative rounded-3xl overflow-hidden ring-2 ring-white/10 shadow-2xl bg-gradient-to-br from-[#0b1020]/60 via-[#121a36]/60 to-[#0b1020]/60 ">
                        <div className="absolute -inset-1 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_40%),_radial-gradient(circle_at_80%_80%,rgba(232,121,249,0.12),transparent_40%)] " aria-hidden />
                        <div className="relative p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center mx-auto">
                            <div className="size-20 md:size-24 rounded-full ring-2 ring-white/20 overflow-hidden flex items-center justify-center bg-white/5">
                                <a href="https://www.youtube.com/@HamoudaMMousa" target="_blank" rel="noreferrer" className="block w-full h-full">
                                    <img src="/171722944_10223160858462998_7672908034470808911_n.jpg" alt="Dr. Hamouda YouTube Channel" className="w-full h-full object-cover" />
                                </a>
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-semibold text-white">{t('channel.title')}</h3>
                                <p className="text-white/70 mt-2">{t('channel.description')}</p>
                                <div className="mt-4 flex flex-col sm:flex-row items-center gap-3">
                                    <a
                                        href="https://www.youtube.com/@HamoudaMMousa/videos"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center rounded-full px-5 py-3 bg-cyan-500/90 hover:bg-cyan-400 text-black font-semibold shadow-lg shadow-cyan-500/20 transition-colors"
                                    >
                                        {t('channel.viewVideos')}
                                    </a>
                                    <a
                                        href="https://www.youtube.com/@HamoudaMMousa"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center rounded-full px-5 py-3 ring-1 ring-white/20 hover:ring-white/40 text-white/90 hover:text-white transition-colors"
                                    >
                                        {t('channel.visitChannel')}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-fuchsia-500/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
                    </div>
                </div>

            </div>
        </section>
    )
}

type VideoCardProps = {
    title: string
    href: string
    embedSrc: string
}

function VideoCard({ title, href, embedSrc }: VideoCardProps) {
    const t = useTranslations('EducationalVideos')
    return (
        <div className="group relative rounded-2xl overflow-hidden ring-2 ring-white/10 shadow-2xl bg-white/5 backdrop-blur">
            <div className="p-4 md:p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between gap-3">
                    <h4 className="text-white font-semibold">{title}</h4>
                    <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-300 hover:text-cyan-200 text-sm underline decoration-dotted"
                    >{t('watch')}</a>
                </div>
                <div className="relative rounded-xl overflow-hidden ring-1 ring-white/10">
                    <div className="aspect-video bg-black">
                        <iframe
                            className="w-full h-full"
                            src={embedSrc}
                            title={title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
            <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
        </div>
    )
}