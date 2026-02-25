'use client'

import { Plus, Trash2 } from 'lucide-react'
import { ImageUploader } from './ImageUploader'
import Image from 'next/image'

export default function BuilderForm({ profile, onChange }: { profile: any, onChange: (u: any) => void }) {
    const handleLinkAdd = () => {
        const newLinks = [...(profile.links || []), { title: '', url: '' }]
        onChange({ links: newLinks })
    }

    const handleLinkChange = (index: number, key: string, value: string) => {
        const newLinks = [...(profile.links || [])]
        newLinks[index][key] = value
        onChange({ links: newLinks })
    }

    const handleLinkRemove = (index: number) => {
        const newLinks = [...(profile.links || [])]
        newLinks.splice(index, 1)
        onChange({ links: newLinks })
    }

    const handlePhotoAdd = (url: string) => {
        const newPhotos = [...(profile.photo_library_urls || []), url]
        onChange({ photo_library_urls: newPhotos })
    }

    const handlePhotoRemove = (index: number) => {
        const newPhotos = [...(profile.photo_library_urls || [])]
        newPhotos.splice(index, 1)
        onChange({ photo_library_urls: newPhotos })
    }

    return (
        <div className="space-y-8">
            <div className="space-y-5">
                <h3 className="text-lg font-heading font-bold text-slate-100 border-b border-zinc-800 pb-2">Business Info</h3>

                {/* Profile Picture Upload */}
                <div>
                    <label className="block text-sm font-medium text-slate-400 mb-3">Profile Picture / Logo</label>
                    <ImageUploader
                        currentImageUrl={profile.profile_image_url}
                        onUploadComplete={(url) => onChange({ profile_image_url: url })}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1.5">Business Name</label>
                    <input
                        className="w-full rounded-md px-4 py-2.5 bg-zinc-950 border border-zinc-800 text-slate-100 focus:outline-none focus:border-brand-amber transition-colors"
                        value={profile.business_name || ''}
                        onChange={e => onChange({ business_name: e.target.value })}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-1.5">Trade Category</label>
                        <input
                            className="w-full rounded-md px-4 py-2.5 bg-zinc-950 border border-zinc-800 text-slate-100 focus:outline-none focus:border-brand-amber transition-colors"
                            value={profile.trade_category || ''}
                            onChange={e => onChange({ trade_category: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-1.5">License Number</label>
                        <input
                            className="w-full rounded-md px-4 py-2.5 bg-zinc-950 border border-zinc-800 text-slate-100 focus:outline-none focus:border-brand-amber text-sm transition-colors"
                            value={profile.license_number || ''}
                            placeholder="Optional"
                            onChange={e => onChange({ license_number: e.target.value })}
                        />
                        <p className="text-[10px] text-zinc-500 mt-1.5">Please enter your State License Number for customer reference.</p>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1.5">Phone Number</label>
                    <input
                        className="w-full rounded-md px-4 py-2.5 bg-zinc-950 border border-zinc-800 text-slate-100 focus:outline-none focus:border-brand-amber transition-colors"
                        value={profile.phone_number || ''}
                        onChange={e => onChange({ phone_number: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1.5">Bio</label>
                    <textarea
                        className="w-full rounded-md px-4 py-2.5 bg-zinc-950 border border-zinc-800 text-slate-100 focus:outline-none focus:border-brand-amber min-h-[120px] resize-y transition-colors"
                        value={profile.bio || ''}
                        placeholder="Tell customers about your experience. Why should they hire you?"
                        onChange={e => onChange({ bio: e.target.value })}
                    />
                </div>
            </div>

            {/* Service Offerings */}
            <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                    <h3 className="text-lg font-heading font-bold text-slate-100">Service Offerings</h3>
                </div>

                <div className="space-y-3">
                    <div className="flex gap-2">
                        <input
                            id="newServiceInput"
                            className="flex-1 bg-zinc-950 border border-zinc-800 text-slate-100 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-brand-amber placeholder-slate-600 transition-colors"
                            placeholder="e.g., HVAC Repair, Plumbing, Custom Installation..."
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    const val = e.currentTarget.value.trim();
                                    if (val) {
                                        const newServices = [...(profile.service_options || []), val];
                                        onChange({ service_options: newServices });
                                        e.currentTarget.value = '';
                                    }
                                }
                            }}
                        />
                        <button
                            type="button"
                            onClick={() => {
                                const input = document.getElementById('newServiceInput') as HTMLInputElement;
                                const val = input?.value.trim();
                                if (val) {
                                    const newServices = [...(profile.service_options || []), val];
                                    onChange({ service_options: newServices });
                                    input.value = '';
                                }
                            }}
                            className="bg-zinc-800 hover:bg-zinc-700 text-slate-300 px-4 py-2 rounded-lg flex items-center gap-1 transition-colors font-medium text-sm"
                        >
                            <Plus className="w-4 h-4" /> Add
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                        {(profile.service_options || []).map((service: string, i: number) => (
                            <div key={i} className="flex items-center gap-1.5 bg-brand-amber/10 border border-brand-amber/20 text-brand-amber px-3 py-1.5 rounded-full text-sm font-medium">
                                <span>{service}</span>
                                <button
                                    type="button"
                                    title="Remove Service"
                                    onClick={() => {
                                        const newServices = [...(profile.service_options || [])];
                                        newServices.splice(i, 1);
                                        onChange({ service_options: newServices });
                                    }}
                                    className="hover:bg-brand-amber/20 rounded-full p-0.5 transition-colors"
                                >
                                    <Trash2 className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        ))}

                        {(!profile.service_options || profile.service_options.length === 0) && (
                            <p className="text-sm text-slate-500 w-full text-center py-4 border-2 border-dashed border-zinc-800 rounded-xl">No specific services added yet. Users will see a general quote form.</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Photo Gallery */}
            <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                    <h3 className="text-lg font-heading font-bold text-slate-100">Photo Gallery</h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {(profile.photo_library_urls || []).map((url: string, i: number) => (
                        <div key={i} className="relative aspect- квадрат square rounded-xl overflow-hidden border border-zinc-800 group bg-zinc-900 aspect-square">
                            <Image src={url} alt={`Gallery Image ${i + 1}`} fill className="object-cover" />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button
                                    type="button"
                                    onClick={() => handlePhotoRemove(i)}
                                    className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg"
                                    title="Remove photo"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Add New Photo */}
                    <ImageUploader
                        isGallery
                        onUploadComplete={(url) => handlePhotoAdd(url)}
                    />
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                    <h3 className="text-lg font-heading font-bold text-slate-100">Custom Links</h3>
                    <button onClick={handleLinkAdd} className="text-xs bg-zinc-800 hover:bg-zinc-700 text-slate-300 px-3 py-1.5 rounded-md flex items-center gap-1 transition-colors font-medium">
                        <Plus className="w-3.5 h-3.5" /> Add Link
                    </button>
                </div>

                <div className="space-y-3">
                    {(profile.links || []).map((link: any, i: number) => (
                        <div key={i} className="flex gap-3 items-start bg-zinc-950/50 p-4 rounded-xl border border-zinc-800 relative group transition-colors focus-within:border-brand-amber/50">
                            <div className="flex-1 space-y-3">
                                <input
                                    className="w-full bg-transparent border-b border-zinc-800 text-slate-100 px-1 py-1 text-sm focus:outline-none focus:border-brand-amber placeholder-slate-600 transition-colors"
                                    placeholder="Link Title (e.g., Get a Free Estimate)"
                                    value={link.title}
                                    onChange={e => handleLinkChange(i, 'title', e.target.value)}
                                />
                                <input
                                    className="w-full bg-transparent border-b border-zinc-800 text-slate-400 px-1 py-1 text-sm focus:outline-none focus:border-brand-amber placeholder-slate-600 transition-colors"
                                    placeholder="URL (e.g., https://calendly.com/...)"
                                    value={link.url}
                                    onChange={e => handleLinkChange(i, 'url', e.target.value)}
                                />
                            </div>
                            <button
                                onClick={() => handleLinkRemove(i)}
                                className="p-2 text-slate-500 hover:text-red-400 hover:bg-red-400/10 rounded-md transition-colors"
                                title="Remove link"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    ))}

                    {(!profile.links || profile.links.length === 0) && (
                        <div className="p-8 border-2 border-dashed border-zinc-800 rounded-xl text-center">
                            <p className="text-sm text-slate-500 font-medium">No custom links added yet.</p>
                            <p className="text-xs text-slate-600 mt-1">Add links to scheduling tools, social media, or review sites.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
