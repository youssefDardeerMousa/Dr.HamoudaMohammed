"use client"
import React from 'react'
import { useTranslations } from 'next-intl'

export default function ScholarlyAchievements() {
    const t = useTranslations('ScholarlyAchievements')
    return (
        <section className="relative min-h-screen py-16">
            {/* Background with geometric shapes */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-cyan-400/10 blur-3xl" aria-hidden />
                <div className="absolute bottom-10 right-16 w-56 h-56 rounded-full bg-fuchsia-400/10 blur-3xl" aria-hidden />
                <div className="absolute left-1/4 top-1/3 size-24 border border-white/10 rotate-12" aria-hidden />
                <div className="absolute right-1/5 bottom-1/3 size-16 border border-white/10 -rotate-12" aria-hidden />
            </div>

            <div className="container mx-auto max-w-7xl px-4 text-white mt-5">

                {/* Grid layout with 2 columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Row 1: Education */}
                    <div className="lg:col-span-1 group" data-aos="fade-up">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center gap-3">
                            <span className="inline-block w-1 h-10 bg-gradient-to-b from-cyan-400 to-fuchsia-400 rounded animate-pulse" />
                            {t('education')}
                        </h2>
                        <div className="p-8 rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 to-transparent hover:from-cyan-500/20 hover:scale-[1.02] transition-all duration-300">
                            <div className="space-y-6">
                                <div className="pb-6 border-b border-white/10">
                                    <h3 className="text-xl font-bold mb-2 text-cyan-400">{t('phd')}</h3>
                                    <p className="text-sm text-white/60 mb-3">{t('items.education.phd.period')}</p>
                                    <p className="text-white/90">{t('items.education.phd.university')}</p>
                                    <p className="text-sm text-white/60 mt-2">{t('items.education.phd.gpa')}</p>
                                </div>
                                <div className="pb-6 border-b border-white/10">
                                    <h3 className="text-xl font-bold mb-2 text-cyan-400">{t('msc')}</h3>
                                    <p className="text-sm text-white/60 mb-3">{t('items.education.msc.period')}</p>
                                    <p className="text-white/90">{t('items.education.msc.university')}</p>
                                    <p className="text-sm text-white/60 mt-2">{t('items.education.msc.gpa')}</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-cyan-400">{t('bsc')}</h3>
                                    <p className="text-sm text-white/60 mb-3">{t('items.education.bsc.period')}</p>
                                    <p className="text-white/90">{t('items.education.bsc.university')}</p>
                                    <p className="text-sm text-white/60 mt-2">{t('items.education.bsc.grade')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 1: Postdoctoral */}
                    <div className="lg:col-span-1 group" data-aos="fade-up" data-aos-delay="100">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center gap-3">
                            <span className="inline-block w-1 h-10 bg-gradient-to-b from-fuchsia-400 to-cyan-400 rounded animate-pulse" />
                            {t('postdoctoral')}
                        </h2>
                        <div className="p-8 rounded-2xl border border-fuchsia-400/30 bg-gradient-to-br from-fuchsia-500/10 to-transparent hover:from-fuchsia-500/20 hover:scale-[1.02] transition-all duration-300">
                            <div className="space-y-6">
                                <div className="pb-6 border-b border-white/10">
                                    <h3 className="text-xl font-bold mb-2 text-fuchsia-400">{t('items.postdoctoral.fulbright1.title')}</h3>
                                    <p className="text-sm text-white/60 mb-3">{t('items.postdoctoral.fulbright1.period')}</p>
                                    <p className="text-white/90">{t('items.postdoctoral.fulbright1.university')}</p>
                                    <p className="text-sm text-white/60 mt-2">{t('items.postdoctoral.fulbright1.supervisor')}</p>
                                </div>
                                <div className="pb-6 border-b border-white/10">
                                    <h3 className="text-xl font-bold mb-2 text-fuchsia-400">{t('items.postdoctoral.fulbright2.title')}</h3>
                                    <p className="text-sm text-white/60 mb-3">{t('items.postdoctoral.fulbright2.period')}</p>
                                    <p className="text-white/90">{t('items.postdoctoral.fulbright2.university')}</p>
                                    <p className="text-sm text-white/60 mt-2">{t('items.postdoctoral.fulbright2.supervisor')}</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-fuchsia-400">{t('items.postdoctoral.visiting.title')}</h3>
                                    <p className="text-sm text-white/60 mb-3">{t('items.postdoctoral.visiting.period')}</p>
                                    <p className="text-white/90">{t('items.postdoctoral.visiting.university')}</p>
                                    <p className="text-sm text-white/60 mt-2">{t('items.postdoctoral.visiting.supervisor')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Certifications */}
                    <div className="lg:col-span-1 group" data-aos="fade-up" data-aos-delay="200">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center gap-3">
                            <span className="inline-block w-1 h-10 bg-gradient-to-b from-cyan-400 to-fuchsia-400 rounded animate-pulse" />
                            {t('certifications')}
                        </h2>
                        <div className="p-8 rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 to-transparent hover:from-cyan-500/20 hover:scale-[1.02] transition-all duration-300">
                            <div className="space-y-4">
                                <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                                    <h3 className="text-lg font-semibold text-cyan-400">{t('items.certifications.iso.title')}</h3>
                                    <p className="text-sm text-white/60">{t('items.certifications.iso.year')}</p>
                                </div>
                                <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                                    <h3 className="text-lg font-semibold text-cyan-400">{t('items.certifications.sixsigma.title')}</h3>
                                    <p className="text-sm text-white/60">{t('items.certifications.sixsigma.year')}</p>
                                </div>
                                <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                                    <h3 className="text-lg font-semibold text-cyan-400">{t('items.certifications.safety.title')}</h3>
                                    <p className="text-sm text-white/60">{t('items.certifications.safety.institution')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Professional Experience */}
                    <div className="lg:col-span-1 group" data-aos="fade-up" data-aos-delay="300">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center gap-3">
                            <span className="inline-block w-1 h-10 bg-gradient-to-b from-fuchsia-400 to-cyan-400 rounded animate-pulse" />
                            {t('professionalExperience')}
                        </h2>
                        <div className="p-8 rounded-2xl border border-fuchsia-400/30 bg-gradient-to-br from-fuchsia-500/10 to-transparent hover:from-fuchsia-500/20 hover:scale-[1.02] transition-all duration-300">
                            <div className="space-y-4">
                                <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-lg font-semibold text-fuchsia-400">{t('items.experience.teamLeader.title')}</h3>
                                        <span className="text-xs text-white/60">{t('items.experience.teamLeader.period')}</span>
                                    </div>
                                    <p className="text-sm text-white/70">{t('items.experience.teamLeader.location')}</p>
                                </div>
                                <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-lg font-semibold text-fuchsia-400">{t('items.experience.reviewer.title')}</h3>
                                        <span className="text-xs text-white/60">{t('items.experience.reviewer.period')}</span>
                                    </div>
                                    <p className="text-sm text-white/70">{t('items.experience.reviewer.location')}</p>
                                </div>
                                <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-lg font-semibold text-fuchsia-400">{t('items.experience.director.title')}</h3>
                                        <span className="text-xs text-white/60">{t('items.experience.director.period')}</span>
                                    </div>
                                    <p className="text-sm text-white/70">{t('items.experience.director.location')}</p>
                                </div>
                                <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-lg font-semibold text-fuchsia-400">{t('items.experience.labHead.title')}</h3>
                                        <span className="text-xs text-white/60">{t('items.experience.labHead.period')}</span>
                                    </div>
                                    <p className="text-sm text-white/70">{t('items.experience.labHead.location')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 3: Honors */}
                    <div className="lg:col-span-1 group" data-aos="fade-up" data-aos-delay="400">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center gap-3">
                            <span className="inline-block w-1 h-10 bg-gradient-to-b from-cyan-400 to-fuchsia-400 rounded animate-pulse" />
                            {t('honors')}
                        </h2>
                        <div className="p-8 rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 to-transparent hover:from-cyan-500/20 hover:scale-[1.02] transition-all duration-300">
                            <div className="space-y-4">
                                <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">{t('items.honors.stateAward.title')}</h3>
                                    <p className="text-sm text-white/70">{t('items.honors.stateAward.description')}</p>
                                </div>
                                <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">{t('items.honors.fulbright.title')}</h3>
                                    <p className="text-sm text-white/70">{t('items.honors.fulbright.description')}</p>
                                </div>
                                <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">{t('items.honors.excellence.title')}</h3>
                                    <p className="text-sm text-white/70">{t('items.honors.excellence.description')}</p>
                                </div>
                                <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">{t('items.honors.prize.title')}</h3>
                                    <p className="text-sm text-white/70">{t('items.honors.prize.description')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 3: Editorial */}
                    <div className="lg:col-span-1 group" data-aos="fade-up" data-aos-delay="500">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center gap-3">
                            <span className="inline-block w-1 h-10 bg-gradient-to-b from-fuchsia-400 to-cyan-400 rounded animate-pulse" />
                            {t('editorial')}
                        </h2>
                        <div className="p-8 rounded-2xl border border-fuchsia-400/30 bg-gradient-to-br from-fuchsia-500/10 to-transparent hover:from-fuchsia-500/20 hover:scale-[1.02] transition-all duration-300">
                            <div className="space-y-6">
                                <div className="text-center p-6">
                                    <h3 className="text-xl font-bold text-fuchsia-400 mb-3">{t('items.editorial.editor.title')}</h3>
                                    <p className="text-white/90">{t('items.editorial.editor.journal')}</p>
                                    <p className="text-sm text-white/60 mt-2">{t('items.editorial.editor.year')}</p>
                                </div>
                                <div className="border-t border-white/10 pt-6 text-center">
                                    <h3 className="text-xl font-bold text-fuchsia-400 mb-3">{t('items.editorial.board.title')}</h3>
                                    <p className="text-white/90">{t('items.editorial.board.journal')}</p>
                                    <p className="text-sm text-white/60 mt-2">{t('items.editorial.board.year')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}