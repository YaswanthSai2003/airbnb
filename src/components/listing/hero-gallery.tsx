"use client";

import Image from "next/image";
import { GridIcon } from "@/components/icons";
import type { ListingImage } from "@/data/listing";

type HeroGalleryProps = {
  images: readonly ListingImage[];
  onOpenPhoto: (heroIndex: number) => void;
  onShowAllPhotos: () => void;
};

const labels = [
  "Open first property photo",
  "Open second property photo",
  "Open third property photo",
  "Open fourth property photo",
  "Open fifth property photo",
];

export function HeroGallery({
  images,
  onOpenPhoto,
  onShowAllPhotos,
}: HeroGalleryProps) {
  return (
    <section
      aria-label="Property photos"
      className="mx-auto grid h-[494px] w-full max-w-[1120px] grid-cols-[560px_272px_272px] grid-rows-2 gap-[8px] overflow-hidden rounded-[12px]"
    >
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`group relative overflow-hidden bg-[#eeeeee] ${
            index === 0 ? "row-span-2" : ""
          }`}
        >
          <button
            type="button"
            aria-label={labels[index] ?? `Open property photo ${index + 1}`}
            onClick={() => onOpenPhoto(index)}
            className="absolute inset-0 block h-full w-full overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index < 3}
              sizes={index === 0 ? "560px" : "272px"}
              className="object-cover transition-[filter] duration-200 ease-out group-hover:brightness-[0.85]"
            />
          </button>

          {index === 4 && (
            <button
              id="showAllPhotos"
              type="button"
              aria-label="Show all photos"
              onClick={(event) => {
                event.stopPropagation();
                onShowAllPhotos();
              }}
              className="absolute bottom-[24px] right-[24px] z-[2] flex h-[31.6px] w-[142.89px] items-center justify-center gap-[8px] whitespace-nowrap rounded-[8px] border-[0.8px] border-[#222] bg-white px-[15px] py-[7px] text-[#222] shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-colors duration-150 hover:bg-[#f7f7f7] active:bg-[#ebebeb]"
            >
              <span className="flex h-[15px] w-[15px] shrink-0 items-center justify-center">
                <GridIcon size={15} />
              </span>
              <span className="whitespace-nowrap text-[12px] font-[600] leading-[16px] tracking-[-0.1px] [font-family:inherit]">
                Show all photos
              </span>
            </button>
          )}
        </div>
      ))}
    </section>
  );
}
