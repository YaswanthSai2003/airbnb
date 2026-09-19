"use client";

import { HeartIcon, ShareIcon } from "@/components/icons";

export function ListingHeader({
  title,
  saved,
  onToggleSaved,
  onShare,
}: {
  title: string;
  saved: boolean;
  onToggleSaved: () => void;
  onShare: () => void;
}) {
  return (
    <section
      id="photos"
      className="
        mx-auto
        flex
        h-[84.4px]
        w-full
        max-w-[1120px]
        items-start
        justify-between
        gap-[16px]
        pb-[18px]
        pt-[32px]
      "
    >
      <h1
        className="
          m-0
          text-[26px]
          font-[500]
          leading-[30px]
          tracking-[-0.511px]
          text-[#222222]
          [font-family:inherit]
        "
      >
        {title}
      </h1>

      <div className="flex items-center gap-[2px]">
        {/* Share */}
        <button
          type="button"
          aria-label="Share this listing"
          onClick={onShare}
          className="
            group
            relative
            flex
            items-center
            gap-[8px]
            rounded-[8px]
            px-[10px]
            py-[8px]
            text-[#222222]
            transition-[background,transform]
            duration-150
            hover:bg-[#f7f7f7]
            active:scale-[0.96]
          "
        >
          <ShareIcon size={16} />

          <span
            className="
              text-[14px]
              font-[600]
              leading-[20px]
              tracking-[-0.1px]
              text-[#222222]
              underline
              decoration-[1px]
              underline-offset-[3px]
              [font-family:inherit]
            "
          >
            Share
          </span>
        </button>

        {/* Save */}
        <button
          type="button"
          aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
          aria-pressed={saved}
          onClick={onToggleSaved}
          className={`
            flex
            items-center
            gap-[8px]
            rounded-[8px]
            px-[10px]
            py-[8px]
            text-[#222222]
            transition-[background,transform]
            duration-150
            active:scale-[0.96]
            ${
              saved
                ? "bg-[#f7f7f7]"
                : "hover:bg-[#f7f7f7]"
            }
          `}
        >
          <HeartIcon
            size={16}
            filled={saved}
            className={saved ? "text-[#ff385c]" : "text-[#222222]"}
          />

          <span
            className="
              text-[14px]
              font-[600]
              leading-[20px]
              tracking-[-0.1px]
              text-[#222222]
              underline
              decoration-[1px]
              underline-offset-[3px]
              [font-family:inherit]
            "
          >
            {saved ? "Saved" : "Save"}
          </span>
        </button>
      </div>
    </section>
  );
}