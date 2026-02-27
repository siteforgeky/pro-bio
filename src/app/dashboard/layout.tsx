import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Logo } from '@/components/Logo'
import { LayoutDashboard, Settings } from 'lucide-react'
import { auth } from '@clerk/nextjs/server'
import { UserButton } from '@clerk/nextjs'

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { userId } = await auth()

    if (!userId) {
        redirect('/sign-in')
    }

    const supabase = await createClient()

    const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle()

    if (!profile || !profile.business_name) {
        redirect('/onboarding')
    }

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-zinc-950">
            <aside className="w-full md:w-64 border-r border-zinc-800 bg-zinc-950/50 p-6 hidden md:flex flex-col">
                <Logo className="mb-10" />

                <nav className="flex-1 flex flex-col gap-2">
                    <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-900 text-slate-300 hover:text-slate-100 font-medium transition-colors">
                        <LayoutDashboard className="w-5 h-5" />
                        Builder
                    </Link>
                    <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-900 text-slate-400 hover:text-slate-100 font-medium transition-colors">
                        <Settings className="w-5 h-5" />
                        Settings
                    </Link>
                </nav>

                <div className="mt-auto pt-6 border-t border-zinc-800 flex items-center gap-4">
                    <UserButton appearance={{
                        elements: {
                            userButtonAvatarBox: "w-10 h-10 border-2 border-zinc-800"
                        }
                    }} />
                    <div className="text-sm font-medium text-slate-300 truncate flex-1" title={profile.business_name}>
                        {profile.business_name}
                    </div>
                </div>
            </aside>

            {/* Mobile nav */}
            <div className="md:hidden border-b border-zinc-800 p-4 flex justify-between items-center bg-zinc-950">
                <Logo />
                <div className="flex items-center gap-4 text-sm font-medium">
                    <Link href="/dashboard" className="text-slate-300">Builder</Link>
                    <Link href="/dashboard/settings" className="text-slate-300">Settings</Link>
                    <UserButton />
                </div>
            </div>

            <main className="flex-1 h-screen overflow-hidden">
                {children}
            </main>
        </div>
    )
}
