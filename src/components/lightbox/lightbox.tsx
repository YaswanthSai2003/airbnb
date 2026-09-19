"use client";

import { useCallback, useEffect, useRef } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  GridIcon,
} from "@/components/icons";
import { ReferenceImage } from "@/components/ui/reference-image";
import { useDialogBehavior } from "@/hooks/use-dialog-behavior";
import { allTourImages } from "@/data/listing";

export function Lightbox({
  open,
  index,
  onIndexChange,
  onClose,
  onBackToGrid,
}: {
  open: boolean;
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
  onBackToGrid: () => void;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => onClose(), [onClose]);

  useDialogBehavior(open, rootRef, closeRef, close);

  const current = allTourImages[index] ?? allTourImages[0];

  const previous = useCallback(() => {
    onIndexChange(Math.max(0, index - 1));
  }, [index, onIndexChange]);

  const next = useCallback(() => {
    onIndexChange(Math.min(allTourImages.length - 1, index + 1));
  }, [index, onIndexChange]);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        previous();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, previous, next]);

  useEffect(() => {
    if (!open) return;

    [allTourImages[index - 1], allTourImages[index + 1]]
      .filter(Boolean)
      .forEach((image) => {
        const preloader = new window.Image();
        preloader.src = image.src;
      });
  }, [open, index]);

  if (!open || !current) return null;

  return (
    <div
      ref={rootRef}
      id="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${current.roomTitle} photo ${index + 1} of ${allTourImages.length}`}
      className="fixed inset-0 z-[140] bg-white text-[#222]"
    >
      <header className="absolute inset-x-0 top-0 z-[4] h-[72px]">
        <button
          id="lbGrid"
          type="button"
          onClick={onBackToGrid}
          aria-label="Back to photo grid"
          className="absolute left-[16px] top-[16px] grid h-[40px] w-[40px] place-items-center rounded-full hover:bg-[#f7f7f7] active:scale-[0.96]"
        >
          <GridIcon size={18} />
        </button>

        <div
          id="lbTitle"
          className="absolute left-1/2 top-[27px] -translate-x-1/2 text-[16px] font-[500] leading-[23px]"
        >
          {current.roomTitle}
        </div>

        <span
          id="lbCounter"
          className="absolute right-[72px] top-[26px] text-[14px] leading-[20px]"
        >
          {index + 1} of {allTourImages.length}
        </span>

        <button
          ref={closeRef}
          id="lbClose"
          type="button"
          onClick={onClose}
          aria-label="Close photo"
          className="absolute right-[24px] top-[16px] grid h-[40px] w-[40px] place-items-center rounded-full hover:bg-[#f7f7f7] active:scale-[0.96]"
        >
          <CloseIcon size={18} />
        </button>
      </header>

      <button
        id="lbPrev"
        type="button"
        onClick={previous}
        disabled={index === 0}
        aria-label="Previous photo"
        className="absolute left-[20px] top-1/2 z-[4] grid h-[40px] w-[40px] -translate-y-1/2 place-items-center rounded-full border-[0.8px] border-[#cccccc] bg-white transition-colors hover:bg-[#f7f7f7] disabled:cursor-default disabled:opacity-30"
      >
        <ChevronLeftIcon size={20} />
      </button>

      <button
        id="lbNext"
        type="button"
        onClick={next}
        disabled={index === allTourImages.length - 1}
        aria-label="Next photo"
        className="absolute right-[20px] top-1/2 z-[4] grid h-[40px] w-[40px] -translate-y-1/2 place-items-center rounded-full border-[0.8px] border-[#cccccc] bg-white transition-colors hover:bg-[#f7f7f7] disabled:cursor-default disabled:opacity-30"
      >
        <ChevronRightIcon size={20} />
      </button>

      <div
        id="lbStage"
        className="flex h-full w-full items-center justify-center px-[88px] pt-[72px]"
      >
        <div className="flex h-[558px] w-[744px] max-h-[calc(100vh-150px)] max-w-[calc(100vw-176px)] items-center justify-center">
          <ReferenceImage
            key={current.src}
            src={current.src}
            fallbackSrc="/images/listing/hero-1.jpeg"
            alt={current.alt || current.roomTitle}
            loading="eager"
            className="block h-auto max-h-full w-auto max-w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
