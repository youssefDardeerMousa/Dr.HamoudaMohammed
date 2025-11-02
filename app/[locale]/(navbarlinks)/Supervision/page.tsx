"use client"
import React, { useMemo } from 'react'
import { useTranslations } from 'next-intl'

interface Student {
    key: string
    degree: string
}

const studentKeys = [
    { key: 'student1', degree: 'MS.C' },
    { key: 'student2', degree: 'MS.C' },
    { key: 'student3', degree: 'MS.C' },
    { key: 'student4', degree: 'MS.C' },
    { key: 'student5', degree: 'Ph.D' },
    { key: 'student6', degree: 'M.Sc.' },
    { key: 'student7', degree: 'M.Sc.' },
    { key: 'student8', degree: 'M.Sc.' },
    { key: 'student9', degree: 'Ph.D.' },
    { key: 'student10', degree: 'M.Sc.' },
    { key: 'student11', degree: 'M.Sc.' },
    { key: 'student12', degree: 'Ph.D.' },
    { key: 'student13', degree: 'M.Sc.' },
]

export default function Supervision() {
    const t = useTranslations('Supervision')
    
    const students = useMemo(() => studentKeys.map(sk => {
        const name = t(`students.${sk.key}.name`)
        const topic = t(`students.${sk.key}.topic`)
        // Get university - it's always in translations now (empty string if no university)
        const universityValue = t(`students.${sk.key}.university`)
        const university = universityValue && universityValue.trim() !== '' ? universityValue : undefined
        
        return {
            key: sk.key,
            degree: sk.degree,
            name,
            university,
            topic
        }
    }), [t])
    
    const phdStudents = students.filter(s => s.degree.includes('Ph.D'))
    const msStudents = students.filter(s => !s.degree.includes('Ph.D'))

    return (
        <section className="relative min-h-screen py-16">
            {/* Background layers with geometric shapes */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[#0b1020] bg-gradient-to-b from-[#0b1020]/40 via-[#0b1020]/20 to-transparent" />
            <div className="pointer-events-none absolute inset-0 -z-10">
                {/* Geometric shapes */}
                <div className="absolute top-20 left-10 w-32 h-32 border-2 border-cyan-400/20 rotate-45" aria-hidden />
                <div className="absolute top-40 right-20 w-24 h-24 border-2 border-fuchsia-400/20 rotate-12 rounded-full" aria-hidden />
                <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-cyan-400/20 -rotate-45" aria-hidden />
                <div className="absolute bottom-40 right-1/3 w-16 h-16 border-2 border-fuchsia-400/20 rotate-12" aria-hidden />

                {/* Blur circles */}
                <div className="absolute top-10 left-20 w-48 h-48 rounded-full bg-cyan-400/10 blur-3xl" aria-hidden />
                <div className="absolute bottom-10 right-16 w-56 h-56 rounded-full bg-fuchsia-400/10 blur-3xl" aria-hidden />
                <div className="absolute left-1/3 top-1/2 w-40 h-40 rounded-full bg-cyan-400/5 blur-3xl" aria-hidden />
            </div>

            <div className="container mx-auto max-w-7xl px-4">
                {/* Header */}
                <div className="text-center mb-12 py-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                        <span className="inline-block w-1 h-12 bg-gradient-to-b from-cyan-400 to-fuchsia-400 rounded animate-pulse" />
                        {t('title')}
                        <span className="inline-block w-1 h-12 bg-gradient-to-b from-fuchsia-400 to-cyan-400 rounded animate-pulse" />
                    </h1>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Ph.D Students Section */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="relative">
                            <h2 className="text-3xl md:text-4xl font-bold text-white relative z-10">
                                {t('phdStudents')}
                            </h2>
                            <div className="absolute -left-4 -top-2 w-3 h-3 bg-cyan-400 rotate-45" />
                            <div className="absolute -right-4 -bottom-2 w-3 h-3 bg-fuchsia-400 rotate-45" />
                        </div>
                        <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent" />
                        <div className="text-2xl font-bold text-cyan-400">{phdStudents.length}</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {phdStudents.map((student, idx) => (
                            <StudentCard key={idx} student={student} index={idx} />
                        ))}
                    </div>
                </div>

                {/* Master Students Section */}
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="relative">
                            <h2 className="text-3xl md:text-4xl font-bold text-white relative z-10">
                                {t('mastersStudents')}
                            </h2>
                            <div className="absolute -left-4 -top-2 w-3 h-3 bg-cyan-400 rotate-45" />
                            <div className="absolute -right-4 -bottom-2 w-3 h-3 bg-fuchsia-400 rotate-45" />
                        </div>
                        <div className="flex-1 h-px bg-gradient-to-r from-fuchsia-400/50 to-transparent" />
                        <div className="text-2xl font-bold text-fuchsia-400">{msStudents.length}</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {msStudents.map((student, idx) => (
                            <StudentCard key={idx} student={student} index={idx} />
                        ))}
                    </div>
                </div>

                {/* Summary Section */}
                <div className="mt-16 mb-8">
                    <div className="relative group rounded-3xl overflow-hidden ring-2 ring-white/10 shadow-2xl bg-gradient-to-br from-[#0b1020]/60 via-[#121a36]/60 to-[#0b1020]/60">
                        <div className="absolute -inset-1 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_40%),_radial-gradient(circle_at_80%_80%,rgba(232,121,249,0.12),transparent_40%)]" aria-hidden />
                        <div className="relative p-8 md:p-10">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                                <div>
                                    <div className="text-5xl font-bold text-white mb-2">{students.length}</div>
                                    <div className="text-white/70 text-lg">{t('totalStudents')}</div>
                                </div>
                                <div>
                                    <div className="text-5xl font-bold text-white mb-2">{phdStudents.length}</div>
                                    <div className="text-white/70 text-lg">{t('phdCount')}</div>
                                </div>
                                <div>
                                    <div className="text-5xl font-bold text-white mb-2">{msStudents.length}</div>
                                    <div className="text-white/70 text-lg">{t('mastersCount')}</div>
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

interface Student {
    key: string
    name: string
    degree: string
    university?: string
    topic: string
}

interface StudentCardProps {
    student: Student
    index: number
}

function StudentCard({ student, index }: StudentCardProps) {
    const t = useTranslations('Supervision')
    const isPhd = student.degree.includes('Ph.D')

    const translateDegree = (degree: string) => {
        if (degree.includes('Ph.D')) return t('degrees.phd')
        if (degree.includes('M.Sc') || degree.includes('MS.C')) return t('degrees.msc')
        return degree
    }

    return (
        <div
            className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-xl bg-white/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{ animationDelay: `${index * 0.05}s` }}
        >
            {/* Decorative geometric shape */}
            <div className="absolute top-0 right-0 w-20 h-20 border-l-2 border-b-2 border-cyan-400/20" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-r-2 border-t-2 border-fuchsia-400/20" />

            {/* Content */}
            <div className="relative p-6 md:p-7">
                {/* Student Info */}
                <div className="flex items-start gap-4 mb-5">
                    <div className="relative">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold border-2 ${isPhd ? 'border-cyan-400 bg-cyan-400/20 text-cyan-300' : 'border-fuchsia-400 bg-fuchsia-400/20 text-fuchsia-300'
                            }`}>
                            {student.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        {isPhd && (
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full border-2 border-[#0b1020]" />
                        )}
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{student.name}</h3>
                        <div className="flex items-center gap-2">
                            <span className={`text-sm font-semibold px-3 py-1 rounded-full ${isPhd
                                ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30'
                                : 'bg-fuchsia-400/20 text-fuchsia-300 border border-fuchsia-400/30'
                                }`}>
                                {translateDegree(student.degree)}
                            </span>
                        </div>
                    </div>
                </div>

                {/* University */}
                {student.university && student.university !== '' && (
                    <div className="mb-5 pb-5 border-b border-white/10">
                        <div className="flex items-center gap-2 text-white/60">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                            <span className="text-sm">{student.university}</span>
                        </div>
                    </div>
                )}

                {/* Topic */}
                <div>
                    <div className="flex items-start gap-2 text-white/70">
                        <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isPhd ? 'text-cyan-400' : 'text-fuchsia-400'
                            }`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                        <p className="text-sm leading-relaxed">{student.topic}</p>
                    </div>
                </div>
            </div>

            {/* Glow effect on hover */}
            <div className={`pointer-events-none absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 ${isPhd
                ? 'bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0'
                : 'bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/20 to-fuchsia-500/0'
                }`} />
        </div>
    )
}