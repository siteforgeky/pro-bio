'use client';

import { useState, useRef } from 'react';
import { createClient } from '@/lib/supabase/client';
import { UploadCloud, X, Loader2, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';
import { useAuth } from '@clerk/nextjs';

interface ImageUploaderProps {
    onUploadComplete: (url: string) => void;
    currentImageUrl?: string | null;
    isGallery?: boolean;
    bucketName?: string;
}

export function ImageUploader({
    onUploadComplete,
    currentImageUrl,
    isGallery = false,
    bucketName = 'contractor_assets'
}: ImageUploaderProps) {
    const { getToken, userId } = useAuth();
    const [isUploading, setIsUploading] = useState(false);
    const [preview, setPreview] = useState<string | null>(currentImageUrl || null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file || !userId) return;

        // Basic validation
        if (!file.type.startsWith('image/')) {
            alert('Please select an image file.');
            return;
        }

        // Show local preview immediately for UX
        const localPreviewUrl = URL.createObjectURL(file);
        setPreview(localPreviewUrl);
        setIsUploading(true);

        try {
            const clerkToken = await getToken({ template: 'supabase' });
            const supabase = createClient(clerkToken);

            // Create a unique file path tied to the user
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
            const filePath = `${userId}/${fileName}`;

            // Upload to Supabase Storage
            const { error: uploadError, data } = await supabase.storage
                .from(bucketName)
                .upload(filePath, file, { upsert: false });

            if (uploadError) {
                throw uploadError;
            }

            // Get the public URL
            const { data: { publicUrl } } = supabase.storage
                .from(bucketName)
                .getPublicUrl(filePath);

            onUploadComplete(publicUrl);
        } catch (error: any) {
            console.error('Detailed upload error:', error);
            alert(`Failed to upload image: ${error?.message || 'Unknown error'}. Please try again.`);
            setPreview(currentImageUrl || null); // Revert on failure
        } finally {
            setIsUploading(false);
            if (fileInputRef.current) {
                fileInputRef.current.value = ''; // Reset input
            }
        }
    };

    const triggerFileSelect = () => {
        if (!isUploading && fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className="w-full">
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
            />

            {/* Gallery Upload Style vs Profile Avatar Style */}
            {isGallery ? (
                <button
                    type="button"
                    onClick={triggerFileSelect}
                    disabled={isUploading}
                    className={`w-full h-32 border-2 border-dashed border-zinc-700 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-brand-amber hover:bg-zinc-800/50 transition-all ${isUploading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                    {isUploading ? (
                        <Loader2 className="w-8 h-8 text-brand-amber animate-spin" />
                    ) : (
                        <UploadCloud className="w-8 h-8 text-slate-400" />
                    )}
                    <span className="text-sm font-medium text-slate-400">
                        {isUploading ? 'Uploading...' : 'Upload Photo'}
                    </span>
                </button>
            ) : (
                <div className="flex items-center gap-6">
                    <div
                        onClick={triggerFileSelect}
                        className={`relative w-24 h-24 rounded-full bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center overflow-hidden group hover:border-brand-amber transition-colors ${isUploading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                        {preview ? (
                            <Image
                                src={preview}
                                alt="Profile Avatar"
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <ImageIcon className="w-8 h-8 text-zinc-500" />
                        )}

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            {isUploading ? (
                                <Loader2 className="w-6 h-6 text-brand-amber animate-spin" />
                            ) : (
                                <UploadCloud className="w-6 h-6 text-slate-200" />
                            )}
                        </div>
                    </div>
                    <div>
                        <button
                            type="button"
                            onClick={triggerFileSelect}
                            disabled={isUploading}
                            className="text-sm font-bold text-slate-200 bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg transition-colors border border-zinc-700"
                        >
                            {isUploading ? 'Uploading...' : 'Change Picture'}
                        </button>
                        <p className="text-xs text-slate-500 mt-2">JPG, GIF or PNG. 1MB max.</p>
                    </div>
                </div>
            )}
        </div>
    );
}
