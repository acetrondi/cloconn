"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface CertificateModalProps {
    isOpen: boolean;
    onClose: () => void;
    certificate: {
        title: string;
        description: string;
        image: string;
    } | null;
}

export function CertificateModal({
    isOpen,
    onClose,
    certificate,
}: CertificateModalProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen && certificate) {
            dialog.showModal();
            document.body.style.overflow = "hidden";
        } else {
            dialog.close();
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen, certificate]);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        const handleClickOutside = (event: MouseEvent) => {
            const rect = dialog.getBoundingClientRect();
            const isInDialog =
                rect.top <= event.clientY &&
                event.clientY <= rect.top + rect.height &&
                rect.left <= event.clientX &&
                event.clientX <= rect.left + rect.width;

            if (!isInDialog) {
                onClose();
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        dialog.addEventListener("click", handleClickOutside);
        dialog.addEventListener("keydown", handleEscape);

        return () => {
            dialog.removeEventListener("click", handleClickOutside);
            dialog.removeEventListener("keydown", handleEscape);
        };
    }, [onClose]);

    if (!certificate) return null;

    return (
        <dialog
            ref={dialogRef}
            className="backdrop:bg-black/80 bg-transparent p-4 max-w-5xl w-full rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-0"
            aria-labelledby="modal-title"
        >
            <div className="bg-white rounded-lg shadow-2xl max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
                    <h3
                        id="modal-title"
                        className="text-heading text-xl font-semibold"
                    >
                        {certificate.title}
                    </h3>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Close modal"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Image */}
                <div className="p-6">
                    <div className="relative w-full h-[600px] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                        <Image
                            src={certificate.image}
                            alt={certificate.title}
                            fill
                            className="object-contain"
                        />
                    </div>
                    <p className="text-body mt-4 text-center">{certificate.description}</p>
                </div>
            </div>
        </dialog>
    );
}

