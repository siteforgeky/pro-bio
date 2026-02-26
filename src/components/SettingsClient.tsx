'use client'

import { useState } from 'react'
import { updateProfile } from '@/app/dashboard/actions'

interface SettingsProps {
    isEmergencyAvailable: boolean
    acceptsCreditCards: boolean
    offersFinancing: boolean
    freeConsultations: boolean
}

export default function SettingsClient({
    isEmergencyAvailable,
    acceptsCreditCards,
    offersFinancing,
    freeConsultations
}: SettingsProps) {
    const [settings, setSettings] = useState({
        is_emergency_available: isEmergencyAvailable,
        accepts_credit_cards: acceptsCreditCards,
        offers_financing: offersFinancing,
        free_consultations: freeConsultations
    })
    const [saving, setSaving] = useState(false)

    const handleToggle = async (key: keyof typeof settings) => {
        const newValue = !settings[key]
        setSettings(prev => ({ ...prev, [key]: newValue }))
        setSaving(true)
        try {
            await updateProfile({ [key]: newValue })
        } catch (e) {
            console.error(e)
            setSettings(prev => ({ ...prev, [key]: !newValue })) // Revert on failure
        } finally {
            setSaving(false)
        }
    }

    const ToggleRow = ({
        title,
        description,
        stateKey
    }: {
        title: string,
        description: string,
        stateKey: keyof typeof settings
    }) => {
        const enabled = settings[stateKey];
        return (
            <div className="flex items-start justify-between py-5 border-b border-zinc-900/50 last:border-0">
                <div>
                    <h3 className="text-base font-bold text-slate-100 mb-1">{title}</h3>
                    <p className="text-sm text-slate-400 max-w-md">
                        {description}
                    </p>
                </div>

                <button
                    type="button"
                    onClick={() => handleToggle(stateKey)}
                    disabled={saving}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-amber focus:ring-offset-2 focus:ring-offset-zinc-900 ${enabled ? 'bg-brand-amber' : 'bg-zinc-700'}`}
                    role="switch"
                    aria-checked={enabled}
                >
                    <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${enabled ? 'translate-x-5' : 'translate-x-0'}`}></span>
                </button>
            </div>
        )
    }

    return (
        <div className="flex flex-col">
            <ToggleRow
                title="24/7 Emergency Service"
                description="When enabled, a pulsing red badge will appear on your profile letting customers know you are available for immediate, high-paying jobs."
                stateKey="is_emergency_available"
            />
            <ToggleRow
                title="Accepts Credit Cards"
                description="Show a prominent badge on your profile indicating that you accept card payments for convenience."
                stateKey="accepts_credit_cards"
            />
            <ToggleRow
                title="Offers Financing"
                description="Let customers know you provide financing options for larger projects."
                stateKey="offers_financing"
            />
            <ToggleRow
                title="Free Consultations / Estimates"
                description="Highlight that you offer free estimates to encourage more inbound quote requests."
                stateKey="free_consultations"
            />
        </div>
    )
}
