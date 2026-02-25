import { getPendingVerifications, updateVerificationStatus } from "./actions";
import { auth } from '@clerk/nextjs/server';
import { redirect } from "next/navigation";
import { CheckCircle, XCircle, ExternalLink, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { revalidatePath } from "next/cache";

export default async function AdminDashboard() {
    const { userId } = await auth();

    if (!userId || userId !== process.env.ADMIN_USER_ID) {
        redirect('/'); // Or to a 'not authorized' page
    }

    const pendingProfiles = await getPendingVerifications();

    return (
        <div className="min-h-screen bg-zinc-950 text-slate-100 p-8">
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-6">
                    <div>
                        <h1 className="text-3xl font-heading font-black text-white flex items-center gap-3">
                            <ShieldAlert className="w-8 h-8 text-brand-amber" />
                            Admin Verification Center
                        </h1>
                        <p className="text-slate-400 mt-2">Review contractor licenses and insurance credentials.</p>
                    </div>
                    <Link href="/dashboard" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
                        ← Back to My Dashboard
                    </Link>
                </div>

                {pendingProfiles.length === 0 ? (
                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-12 text-center flex flex-col items-center justify-center">
                        <CheckCircle className="w-12 h-12 text-zinc-700 mb-4" />
                        <h3 className="text-xl font-bold text-slate-300">All caught up!</h3>
                        <p className="text-slate-500 mt-2">There are no pending verification requests at the moment.</p>
                    </div>
                ) : (
                    <div className="grid gap-6">
                        {pendingProfiles.map((profile) => (
                            <div key={profile.id} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">

                                <div className="space-y-3 flex-1">
                                    <div className="flex items-center gap-3">
                                        <h2 className="text-xl font-bold text-slate-100">{profile.business_name}</h2>
                                        <span className="bg-zinc-800 text-slate-300 text-xs px-2.5 py-1 rounded border border-zinc-700 font-medium">
                                            {profile.trade_category}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm bg-zinc-950/50 p-4 rounded-xl border border-zinc-800/50">
                                        <div>
                                            <span className="text-slate-500 block mb-1 uppercase tracking-wider text-[10px] font-bold">State License:</span>
                                            <span className="font-mono text-slate-300">{profile.license_number || 'N/A'}</span>
                                        </div>
                                        <div>
                                            <span className="text-slate-500 block mb-1 uppercase tracking-wider text-[10px] font-bold">Insurance COI:</span>
                                            {profile.insurance_document_url ? (
                                                <a href={profile.insurance_document_url} target="_blank" rel="noopener noreferrer" className="text-brand-amber hover:text-amber-400 flex items-center gap-1.5 transition-colors font-medium">
                                                    View Document <ExternalLink className="w-3.5 h-3.5" />
                                                </a>
                                            ) : (
                                                <span className="text-slate-600 italic">Not provided</span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-row md:flex-col gap-3 w-full md:w-auto shrink-0 border-t md:border-t-0 md:border-l border-zinc-800 pt-4 md:pt-0 md:pl-6">
                                    <form action={async () => {
                                        'use server'
                                        await updateVerificationStatus(profile.user_id, 'Verified')
                                    }}>
                                        <button className="w-full flex items-center justify-center gap-2 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 hover:bg-emerald-500 hover:text-zinc-950 px-6 py-2.5 rounded-lg font-bold transition-all">
                                            <CheckCircle className="w-5 h-5" /> Approve
                                        </button>
                                    </form>

                                    <form action={async () => {
                                        'use server'
                                        await updateVerificationStatus(profile.user_id, 'Rejected')
                                    }}>
                                        <button className="w-full flex items-center justify-center gap-2 bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500 hover:text-white px-6 py-2.5 rounded-lg font-bold transition-all">
                                            <XCircle className="w-5 h-5" /> Reject
                                        </button>
                                    </form>
                                </div>

                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
