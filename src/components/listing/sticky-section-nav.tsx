"use client";

import { useEffect, useState } from "react";
import { StarIcon } from "@/components/icons";

const sections = [
  ["Photos", "photos"],
  ["Amenities", "amenities"],
  ["Reviews", "reviews"],
  ["Location", "location"],
] as const;

export function StickySectionNav({
  onReserve,
}: {
  onReserve: () => void;
}) {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("photos");

  useEffect(() => {
    const update = () => {
      setVisible(window.scrollY > 700);

      let current = "photos";

      for (const [, id] of sections) {
        const el = document.getElementById(id);

        if (el && el.getBoundingClientRect().top <= 90) {
          current = id;
        }
      }

      setActive(current);
    };

    update();

    window.addEventListener("scroll", update, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", update);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 top-0 z-[45] h-[66.8px] border-b-[0.8px] border-[#dddddd] bg-white">
      <div className="mx-auto flex h-[66px] max-w-[1120px] items-center justify-between">
        {/* LEFT NAV */}
        <nav
          aria-label="Listing sections"
          className="flex h-full items-center gap-[4px]"
        >
          {sections.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`
                relative
                flex
                h-[64px]
                items-center
                px-[8px]
                text-[#222222]
                no-underline
                first:pl-0

                ${
                  active === id
                    ? "after:absolute after:inset-x-[8px] after:bottom-[9px] after:h-[2px] after:bg-[#222222] first:after:left-0"
                    : ""
                }
              `}
            >
              <span className="whitespace-nowrap text-[14px] font-[600] leading-[20px] tracking-[-0.1px] [font-family:inherit]">
                {label}
              </span>
            </a>
          ))}
        </nav>

        {/* RIGHT BOOKING SUMMARY */}
        <div className="flex items-center gap-[20px]">
          <div className="text-right">
            <div className="flex items-baseline justify-end gap-[4px]">
              <span
                className="
                  text-[15px]
                  font-[600]
                  leading-[20px]
                  tracking-[-0.1px]
                  text-[#222222]
                  [font-family:inherit]
                "
              >
                ₹28,499
              </span>

              <span
                className="
                  text-[13px]
                  font-[400]
                  leading-[18px]
                  tracking-[-0.05px]
                  text-[#222222]
                  [font-family:inherit]
                "
              >
                for 5 nights
              </span>
            </div>

            <div
              className="
                mt-[1px]
                flex
                items-center
                justify-end
                text-[13px]
                font-[400]
                leading-[18px]
                tracking-[-0.05px]
                text-[#222222]
                [font-family:inherit]
              "
            >
              <StarIcon size={12} />

              <span className="ml-[3px]">
                4.95
              </span>

              <span className="mx-[3px]">
                ·
              </span>

              <span className="text-[#222222]">
                19 reviews
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onReserve}
            className="
              reserve-gradient
              h-[40px]
              rounded-full
              px-[20px]
              text-[14px]
              font-[600]
              leading-[20px]
              tracking-[-0.1px]
              text-white
              [font-family:inherit]
              active:scale-[0.98]
            "
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}