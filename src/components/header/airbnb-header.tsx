import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

import {
  GlobeIcon,
  MenuIcon,
  SearchIcon,
} from "@/components/icons";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

function AirbnbMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 448 512"
      className="h-[32px] w-[28px] shrink-0"
      fill="#ff385c"
    >
      <path
        fill="#ff385c"
        d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z"
      />
    </svg>
  );
}

export function AirbnbHeader() {
  return (
    <header
      id="siteHeader"
      className="relative h-[88.8px] border-b-[0.8px] border-[#ebebeb] bg-white"
    >
      <div className="relative mx-auto grid h-[88px] w-full grid-cols-[1fr_auto_1fr] items-center px-[80px]">
        {/* Airbnb branding */}
        <Link
          href="/"
          aria-label="Airbnb home"
          className="flex h-[36px] items-center gap-[4px] no-underline"
        >
          <AirbnbMark />

          <span
            className={`${poppins.className} inline-block origin-left scale-[0.875] whitespace-nowrap text-[24px] font-[500] leading-[25px] tracking-[-0.86px] text-[#ff385c]`}
          >
            airbnb
          </span>
        </Link>

        {/* Search */}
        <div
          role="search"
          aria-label="Search stays"
          className="
            col-start-2
            flex
            h-[48px]
            w-[403.13px]
            items-center
            rounded-[40px]
            border-[0.8px]
            border-[#dddddd]
            bg-white
            px-[8px]
            shadow-[0_1px_4px_rgba(0,0,0,0.08)]
            transition-shadow
            duration-200
            ease-out
            hover:shadow-[0_2px_4px_rgba(0,0,0,0.18)]
          "
        >
          {/* Anywhere */}
          <button
            type="button"
            className="
              flex
              h-[48px]
              w-[149.31px]
              shrink-0
              items-center
              gap-[8px]
              rounded-[40px]
              px-[16px]
              text-[#222222]
            "
          >
            <Image
              src="/images/searchbar-house.png"
              alt=""
              width={48}
              height={48}
              priority
              className="-ml-[6px] h-[48px] w-[48px] shrink-0 object-contain"
            />

            <span
              className="
                whitespace-nowrap
                text-[14px]
                font-[600]
                leading-[20px]
                tracking-[-0.1px]
                [font-family:inherit]
              "
            >
              Anywhere
            </span>
          </button>

          <span
            aria-hidden="true"
            className="h-[32px] w-px shrink-0 bg-[#dddddd]"
          />

          {/* Anytime */}
          <button
            type="button"
            className="flex h-[48px] w-[88.36px] shrink-0 items-center rounded-[40px] px-[16px] text-[#222222]"
          >
            <span className="whitespace-nowrap text-[14px] font-[600] leading-[20px] tracking-[-0.1px] [font-family:inherit]">
              Anytime
            </span>
          </button>

          <span
            aria-hidden="true"
            className="h-[32px] w-px shrink-0 bg-[#dddddd]"
          />

          {/* Add guests */}
          <button
            type="button"
            className="
              flex
              h-[48px]
              w-[105.85px]
              shrink-0
              items-center
              rounded-[40px]
              px-[16px]
              text-[14px]
              font-[400]
              leading-[20px]
              tracking-[-0.1px]
              text-[#717171]
              [font-family:inherit]
            "
          >
            <span className="whitespace-nowrap">Add guests</span>
          </button>

          {/* Search icon */}
          <button
            type="button"
            aria-label="Search"
            onClick={(event) => event.preventDefault()}
            className="
              ml-[8px]
              grid
              h-[32px]
              w-[32px]
              shrink-0
              cursor-default
              place-items-center
              rounded-full
              bg-[#ff385c]
              text-white
            "
          >
            <SearchIcon size={15} strokeWidth={2.4} />
          </button>
        </div>

        {/* Right navigation */}
        <nav
          aria-label="Main navigation"
          className="col-start-3 flex items-center justify-self-end gap-[8px]"
        >
          <button
            type="button"
            className="rounded-[22px] px-[14px] py-[12px] text-[#222222] hover:bg-[#f7f7f7]"
          >
            <span className="whitespace-nowrap text-[14px] font-[600] leading-[20px] tracking-[-0.1px] [font-family:inherit]">
              Become a host
            </span>
          </button>

          <button
            type="button"
            aria-label="Choose language"
            className="
              grid
              h-[40px]
              w-[40px]
              place-items-center
              rounded-full
              bg-[#f2f2f2]
              text-[#222222]
              hover:bg-[#ebebeb]
            "
          >
            <GlobeIcon size={16} />
          </button>

          <button
            type="button"
            aria-label="Open menu"
            className="
              grid
              h-[40px]
              w-[40px]
              place-items-center
              rounded-full
              bg-[#f2f2f2]
              text-[#222222]
              hover:bg-[#ebebeb]
            "
          >
            <MenuIcon size={16} />
          </button>
        </nav>
      </div>
    </header>
  );
}