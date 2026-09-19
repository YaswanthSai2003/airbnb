"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  BirthIcon,
  CancellationIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DoorIcon,
  EducationIcon,
  FanIcon,
  FlagIcon,
  KitchenIcon,
  KeyIcon,
  OutdoorEntertainmentIcon,
  ShieldIcon,
  SafetyPropertyIcon,
  SearchIcon,
  WifiIcon,
  WorkIcon,
  CarIcon,
  PoolIcon,
  HotTubIcon,
  PetIcon,
  SecurityCameraIcon,
  CarbonAlarmMissingIcon,
  SmokeAlarmMissingIcon,
} from "@/components/icons";
import { ReferenceImage } from "@/components/ui/reference-image";
import { listing } from "@/data/listing";

function Highlight({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="flex h-[42.01px] gap-[16px]">
      <div className="mt-[1px] w-[32px] shrink-0 text-[#222]">{icon}</div>
      <div>
        <div className="text-[14px] font-[500] leading-[20px]">{title}</div>
        <div className="mt-[2px] text-[14px] font-[400] leading-[20px] text-[#717171]">{body}</div>
      </div>
    </div>
  );
}

function Amenity({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex min-h-[48px] items-center gap-[16px] text-[16px] leading-[23px]">
      <span className="grid h-[24px] w-[24px] place-items-center text-[#222]">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function CalendarMonth({ month, offset = 0 }: { month: string; offset?: number }) {
  const days = month.startsWith("November") ? 30 : 31;
  const nums = Array.from({ length: days }, (_, i) => i + 1);
  return (
    <div className="w-[298px]">
      <div className="mb-[18px] text-center text-[16px] font-[500] leading-[22.88px]">{month}</div>
      <div className="grid grid-cols-7 text-center text-[12px] font-[500] text-[#717171]">
        {['S','M','T','W','T','F','S'].map((d, i) => <span key={`${d}-${i}`} className="h-[24px]">{d}</span>)}
      </div>
      <div className="grid grid-cols-7 text-center text-[14px]">
        {Array.from({ length: offset }).map((_, i) => <span key={`blank-${i}`} className="h-[42.58px]" />)}
        {nums.map((n) => {
          const isOctober = month.startsWith("October");
          const isNovember = month.startsWith("November");
          const selected = isOctober && n >= 18 && n <= 23;
          const edge = isOctober && (n === 18 || n === 23);
          const disabled = isNovember && ((n >= 18 && n <= 24) || n >= 29);

          return (
            <span
              key={n}
              aria-disabled={disabled || undefined}
              className={`grid h-[42.58px] place-items-center ${edge ? "rounded-full" : ""}`}
              style={
                edge
                  ? { backgroundColor: "#222222", color: "#ffffff" }
                  : selected
                    ? { backgroundColor: "#f7f7f7" }
                    : disabled
                      ? {
                          color: "#dddddd",
                          textDecorationLine: "line-through",
                          textDecorationThickness: "1px",
                          textDecorationColor: "#dddddd",
                        }
                      : undefined
              }
            >
              {n}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function BookingCard({ onReserve }: { onReserve: () => void }) {
  return (
    <aside id="bookingSticky" className="sticky top-[100px] h-fit w-[372px]">
      <div className="mb-[24px] flex h-[70px] items-center gap-[12px] rounded-[12px] border-[0.8px] border-[#dddddd] bg-white p-[16px]">
        <Image src="/images/discount.png" alt="" width={32} height={32} className="h-[32px] w-[32px] object-contain" />
        <div className="w-[217px] text-[14px] leading-[18px] tracking-[-0.1px] [font-family:inherit]">
          <div className="font-[400]">Get 10% off your next stay.</div>
          <button
            type="button"
            className="font-[600] leading-[20px] tracking-[-0.1px] underline underline-offset-[2px] [font-family:inherit]"
          >
            Terms apply
          </button>
        </div>
        <button
          type="button"
          className="ml-auto rounded-[8px] bg-[#f7f7f7] px-[14px] py-[8px] text-[14px] font-[600] leading-[20px] tracking-[-0.1px] [font-family:inherit] hover:bg-[#eeeeee]"
        >
          Claim
        </button>
      </div>

      <div className="rounded-[12px] border-[0.8px] border-black/[0.08] bg-white px-[24px] pb-[24px] pt-[22px] shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
        <div className="mb-[18px] flex items-baseline gap-[6px]">
          <span className="text-[22px] font-[500] leading-[31.45px] underline decoration-[1px] underline-offset-[2px]">₹28,499</span>
          <span className="text-[15px] leading-[21.45px]">for 5 nights</span>
        </div>

        <div className="overflow-hidden rounded-[8px] border-[0.8px] border-[#b0b0b0]">
          <div className="grid h-[58px] grid-cols-2">
            <button type="button" className="border-r-[0.8px] border-[#b0b0b0] px-[12px] py-[10px] text-left">
              <div className="text-[10px] font-[700] leading-[14px]">CHECK-IN</div>
              <div className="mt-[2px] text-[14px] leading-[20px]">10/18/2026</div>
            </button>
            <button type="button" className="px-[12px] py-[10px] text-left">
              <div className="text-[10px] font-[700] leading-[14px]">CHECKOUT</div>
              <div className="mt-[2px] text-[14px] leading-[20px]">10/23/2026</div>
            </button>
          </div>
          <button type="button" className="flex h-[57px] w-full items-center justify-between border-t-[0.8px] border-[#b0b0b0] px-[12px] py-[10px] text-left">
            <span>
              <span className="block text-[10px] font-[700] leading-[14px]">GUESTS</span>
              <span className="mt-[2px] block text-[14px] leading-[20px]">2 guests</span>
            </span>
            <ChevronDownIcon size={16}/>
          </button>
        </div>

        <div className="my-[16px] rounded-[8px] bg-[#f7f7f7] px-[8px] py-[8px] text-center text-[13px] leading-[19px] text-[#717171]">Free cancellation before <b className="font-[500] text-[#222]">17 October</b></div>

        <button type="button" onClick={onReserve} className="reserve-gradient h-[48px] w-full rounded-full px-[24px] text-[16px] font-[500] text-white transition-transform active:scale-[0.98]">Reserve</button>
        <div className="mt-[16px] text-center text-[14px] text-[#717171]" title="You won't be charged yet">You won&apos;t be charged yet</div>
      </div>

      <div className="mt-[26px] flex items-center justify-center gap-[8px] text-[14px] text-[#717171]">
        <FlagIcon size={16}/><button type="button" onClick={(event) => event.currentTarget.blur()} className="underline underline-offset-[2px]">Report this listing</button>
      </div>
    </aside>
  );
}

function GuestFavouriteCard() {
  return (
    <div className="mt-[8px] flex h-[80.79px] items-center gap-[22px] rounded-[16px] border-[0.8px] border-[#dddddd] px-[28px] py-[16px]">
      <div className="flex w-[117.77px] shrink-0 items-center justify-center">
        <Image src="/images/reference/icons/laurels/left.png" alt="" width={23} height={36} className="h-[36px] w-[22.5px] object-contain" />
        <span className="mx-[7px] text-center text-[15px] font-[500] leading-[17.25px]">Guest<br/>favourite</span>
        <Image src="/images/reference/icons/laurels/right.png" alt="" width={23} height={36} className="h-[36px] w-[22.5px] object-contain" />
      </div>
      <p className="m-0 w-[280.51px] shrink-0 text-[14px] leading-[18.2px]">One of the most loved homes on Airbnb,<br/>according to guests</p>
      <div className="ml-auto flex h-[45px] items-center">
        <div className="w-[58px] text-center"><div className="text-[20px] font-[700] leading-[28.6px]">4.95</div><div className="mt-[2px] flex justify-center gap-[2px]">{Array.from({ length: 5 }).map((_, index) => <span key={index} className="text-[10px] leading-[10px]">★</span>)}</div></div>
        <div className="mx-[18px] h-[36px] w-[0.8px] bg-[#dddddd]" />
        <div className="w-[49.91px] text-center"><div className="text-[20px] font-[700] leading-[28.6px]">19</div><div className="text-[13px] font-[500] leading-[18.59px] underline underline-offset-[1px]">Reviews</div></div>
      </div>
    </div>
  );
}

function HostRow() {
  return (
    <div className="flex h-[98px] items-center border-b-[0.8px] border-[#dddddd] py-[26px]">
      <ReferenceImage src={listing.host.avatar} fallbackSrc="/images/reference/avatars/host.jpg" alt="Mirashya Homes" className="h-[46px] w-[46px] rounded-full object-cover" />
      <div className="ml-[16px]"><div className="text-[16px] font-[500] leading-[23px]">Hosted by Mirashya Homes</div><div className="mt-[2px] text-[14px] text-[#717171]">2 years hosting</div></div>
    </div>
  );
}

function SleepSection() {
  const sleepItems = [
    {
      name: "Bedroom",
      meta: "1 double bed",
      image: "/images/reference/ui/sleep-bedroom.jpg",
    },
    {
      name: "Living room",
      meta: "1 sofa",
      image: "/images/reference/ui/sleep-living.jpg",
    },
  ];

  return (
    <div className="h-[384.26px] border-b-[0.8px] border-[#dddddd] py-[32.8px]">
      <h2 className="m-0 text-[22px] font-[500] leading-[26px]">Where you&apos;ll sleep</h2>
      <div className="mt-[24px] grid grid-cols-2 gap-[16px]">
        {sleepItems.map((item) => (
          <div key={item.name}>
            <div
              className="relative h-[212px] w-[318px] overflow-hidden rounded-[10px] bg-[#f2f2f2]"
              aria-label={`${item.name} sleeping area photo`}
            >
              <ReferenceImage
                src={item.image}
                fallbackSrc="/images/listing/hero-4.jpeg"
                alt={item.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-[14px] text-[15px] font-[500] leading-[21.45px]">{item.name}</div>
            <div className="mt-[2px] text-[14px] leading-[20px] text-[#717171]">{item.meta}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Amenities({ onOpenAmenities }: { onOpenAmenities: () => void }) {
  return (
    <div id="amenities" className="scroll-mt-[80px] h-[411.2px] border-b-[0.8px] border-[#dddddd] py-[32.8px]">
      <h2 className="m-0 text-[22px] font-[500] leading-[26px]">What this place offers</h2>
      <div className="mt-[16px] grid grid-cols-2 gap-x-[58px]">
        <Amenity icon={<KitchenIcon size={24}/>} label="Kitchen" />
        <Amenity icon={<WifiIcon size={24}/>} label="Wifi" />
        <Amenity icon={<WorkIcon size={24}/>} label="Dedicated workspace" />
        <Amenity icon={<CarIcon size={24}/>} label="Free parking on premises" />
        <Amenity icon={<PoolIcon size={24}/>} label="Pool" />
        <Amenity icon={<HotTubIcon size={24}/>} label="Hot tub" />
        <Amenity icon={<PetIcon size={24}/>} label="Pets allowed" />
        <Amenity icon={<SecurityCameraIcon size={24}/>} label="Exterior security cameras on property" />
        <div className="flex min-h-[48px] items-center gap-[16px] text-[16px] leading-[23px] text-[#717171]"><span className="grid h-[24px] w-[24px] place-items-center"><CarbonAlarmMissingIcon size={24}/></span><span className="line-through">Carbon monoxide alarm</span></div>
        <div className="flex min-h-[48px] items-center gap-[16px] text-[16px] leading-[23px] text-[#717171]"><span className="grid h-[24px] w-[24px] place-items-center"><SmokeAlarmMissingIcon size={24}/></span><span className="line-through">Smoke alarm</span></div>
      </div>
      <button id="showAmen" type="button" onClick={onOpenAmenities} className="mt-[16px] rounded-[8px] border border-[#222] px-[23px] py-[13px] text-[16px] font-[500] leading-[20px] hover:bg-[#f7f7f7]">Show all 50 amenities</button>
    </div>
  );
}

function CalendarSection() {
  return (
    <div className="h-[461.16px] border-b-[0.8px] border-[#dddddd] pb-[32.8px] pt-[32.8px]">
      <div className="text-[22px] font-[500] leading-[31.45px]">5 nights in Candolim</div>
      <div className="mt-[6px] text-[14px] text-[#717171]">18 Oct 2026 - 23 Oct 2026</div>
      <div className="mt-[22px] relative flex justify-between"><button type="button" aria-label="Previous month" className="absolute left-[4px] top-[1px] grid h-[28px] w-[28px] place-items-center rounded-full hover:bg-[#f7f7f7]"><ChevronLeftIcon size={16}/></button><button type="button" aria-label="Next month" className="absolute right-[4px] top-[1px] grid h-[28px] w-[28px] place-items-center rounded-full hover:bg-[#f7f7f7]"><ChevronRightIcon size={16}/></button><CalendarMonth month="October 2026" offset={4}/><CalendarMonth month="November 2026" offset={0}/></div>
      <div className="mt-[18.8px] flex items-center justify-between">
        <button type="button" aria-label="Open date input" className="grid h-[24px] w-[30px] place-items-center rounded-[5px] border-[0.8px] border-[#b0b0b0] hover:bg-[#f7f7f7]">
          <span aria-hidden="true" className="block h-[10px] w-[17px] rounded-[2px] border-[1.4px] border-[#222] before:mx-auto before:mt-[3px] before:block before:h-[1px] before:w-[8px] before:bg-[#222]" />
        </button>
        <button className="text-[14px] font-[500] underline underline-offset-[2px]">Clear dates</button>
      </div>
    </div>
  );
}

const reviewItems = [
  ["Amit", "2 months on Airbnb", "1 week ago", "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property."],
  ["Aheesh", "3 years on Airbnb", "2 weeks ago", "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again."],
  ["Samiksha", "8 months on Airbnb", "May 2026", "the host nitish was really great help"],
  ["Vedant", "4 years on Airbnb", "May 2026", "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine. The highlight of our stay was definitely the jacuzzi. It was clean, well-kept, and the perfect place to relax after a day of exploring Goa. It added a luxurious touch to our vacation and made our experience even more memorable.\nThe property was exactly as described, well-equipped, and offered a peaceful atmosphere. We would highly recommend this place to anyone looking for a comfortable, clean, and relaxing stay in Goa. Looking forward to visiting again!"],
  ["Vaibhav S", "3 years on Airbnb", "May 2026", "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too."],
  ["Mohd", "5 years on Airbnb", "May 2026", "Great place. Exactly as described in the listing."],
] as const;

const reviewAvatarSources = [
  "/images/reference/avatars/review-amit.jpg",
  "/images/reference/avatars/review-aheesh.jpg",
  "/images/reference/avatars/review-samiksha.jpg",
  "/images/reference/avatars/review-vedant.jpg",
  "/images/reference/avatars/review-vaibhav.jpg",
  "/images/reference/avatars/review-mohd.jpg",
] as const;

function ReviewsSection() {
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(() => new Set());

  const toggleReview = (index: number) => {
    setExpandedReviews((current) => {
      const next = new Set(current);

      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }

      return next;
    });
  };

  const categories = [
    ["Cleanliness", "5.0", "/images/reference/icons/reviews/cleanliness.png"],
    ["Accuracy", "5.0", "/images/reference/icons/reviews/accuracy.png"],
    ["Check-in", "5.0", "/images/reference/icons/reviews/check-in.png"],
    ["Communication", "5.0", "/images/reference/icons/reviews/communication.png"],
    ["Location", "4.8", "/images/reference/icons/reviews/location.png"],
    ["Value", "4.8", "/images/reference/icons/reviews/value.png"],
  ] as const;

  const chips = [
    ["Comfort", "/images/reference/icons/chips/comfort.png", 6],
    ["Accuracy", "/images/reference/icons/chips/accuracy.png", 5],
    ["Hot tub", "/images/reference/icons/chips/hot-tub.png", 5],
    ["Condition", "/images/reference/icons/chips/condition.png", 4],
    ["Hospitality", "/images/reference/icons/chips/hospitality.png", 8],
    ["Cleanliness", "/images/reference/icons/chips/cleanliness.png", 4],
    ["Amenities", "/images/reference/icons/chips/amenities.png", 2],
    ["Decor", "/images/reference/icons/chips/decor.png", 2],
    ["Indoor spaces", "/images/reference/icons/chips/indoor-spaces.png", 2],
    ["Location", "/images/reference/icons/chips/location.png", 2],
  ] as const;

  const ratingBars = [
    [5, 95],
    [4, 5],
    [3, 0],
    [2, 0],
    [1, 0],
  ] as const;

  return (
    <section id="reviews" className="scroll-mt-[80px] min-h-[1348.9px] border-t-[0.8px] border-[#dddddd] py-[48px]">
      <div className="h-[313.35px] text-center">
        <div className="flex h-[151px] items-start justify-center pt-[8px]">
          <Image src="/images/laurel-left.png" alt="" width={72} height={110} className="mt-[16.5px] h-[110px] w-[72.33px] object-contain" />
          <div className="mx-[8px] h-[143px] text-[100px] font-[500] leading-[143px] tracking-[-5px]">4.95</div>
          <Image src="/images/laurel-right.png" alt="" width={72} height={110} className="mt-[16.5px] h-[110px] w-[72.33px] object-contain" />
        </div>
        <div className="mt-[8px] text-[22px] font-[500] leading-[31.45px]">Guest favourite</div>
        <p className="mx-auto mt-[8px] w-[420px] text-[15px] leading-[1.35] text-[#717171]">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <button type="button" className="mt-[14px] text-[14px] font-[500] underline underline-offset-[2px]">
          How reviews work
        </button>
      </div>

      <div
        className="grid h-[177.76px] gap-0 pb-[40px] pt-[8px]"
        style={{ gridTemplateColumns: "1.4fr repeat(6, 1fr)" }}
      >
        <div className="px-[24px]">
          <div className="mb-[12px] text-[14px] font-[500] leading-[20px]">Overall rating</div>
          <div className="flex flex-col gap-[3px] text-[12px] leading-[17.15px]">
            {ratingBars.map(([rating, fill]) => (
              <div
                key={rating}
                className="grid h-[17.15px] items-center gap-[10px]"
                style={{ gridTemplateColumns: "8px 1fr" }}
              >
                <span>{rating}</span>
                <span className="block h-[4px] overflow-hidden bg-[#ebebeb]">
                  <span className="block h-full bg-[#222]" style={{ width: `${fill}%` }} />
                </span>
              </div>
            ))}
          </div>
        </div>

        {categories.map(([name, value, icon]) => (
          <div key={name} className="border-l-[0.8px] border-[#dddddd] px-[24px]">
            <div className="text-[14px] font-[500] leading-[20px]">{name}</div>
            <div className="mt-[10px] text-[18px] font-[500] leading-[25.74px]">{value}</div>
            <Image src={icon} alt="" width={32} height={32} className="mt-[18px] h-[32px] w-[32px] object-contain" />
          </div>
        ))}
      </div>

      <div className="hide-scrollbar flex h-[81.6px] gap-[12px] overflow-x-auto pb-[30px] pt-[4px]">
        {chips.map(([chip, icon, count]) => (
          <button
            type="button"
            key={chip}
            className="
              flex
              h-[47.6px]
              shrink-0
              items-center
              gap-[8px]
              rounded-[16px]
              border-[0.8px]
              border-[#dddddd]
              px-[16px]
              text-[14px]
              leading-[20px]
              [font-family:inherit]
            "
          >
            <Image
              src={icon}
              alt=""
              width={19}
              height={19}
              className="h-[19px] w-[19px] shrink-0 object-contain"
            />

            <span className="whitespace-nowrap font-[600] tracking-[-0.1px]">
              {chip}
            </span>

            <span className="whitespace-nowrap font-[400] text-[#717171]">
              {count}
            </span>
          </button>
        ))}
      </div>

      <div
        className="grid min-h-[631.79px] grid-cols-2 gap-x-[80px] gap-y-[48px]"
        style={{
          gridTemplateRows: `188.6px ${expandedReviews.has(3) ? "auto" : "188.6px"} 118.59px`,
        }}
      >
        {reviewItems.map(([name, tenure, date, review], i) => {
          const isExpandable = i === 1 || i === 3;
          const isExpanded = expandedReviews.has(i);

          return (
          <article key={name}>
            <div className="flex items-center gap-[12px]">
              <ReferenceImage
                src={reviewAvatarSources[i]}
                alt={`${name} profile`}
                className="h-[42px] w-[42px] rounded-full object-cover"
              />
              <div>
                <div className="text-[15px] font-[500] leading-[21.45px]">{name}</div>
                <div className="text-[13px] leading-[18.59px] text-[#717171]">{tenure}</div>
              </div>
            </div>

            <div className="mt-[10px] flex items-center gap-[4px] text-[13px] leading-[18.59px]">
              <span className="tracking-[-1px]">★★★★★</span>
              <span>·</span>
              <span>{date}</span>
            </div>

            <p
              className={`mt-[10px] whitespace-pre-line text-[15px] leading-[21px] ${
                isExpandable && !isExpanded ? "line-clamp-4" : ""
              }`}
            >
              {review}
            </p>

            {isExpandable && (
              <button
                type="button"
                onClick={() => toggleReview(i)}
                aria-expanded={isExpanded}
                className="mt-[4px] text-[14px] font-[600] leading-[20px] tracking-[-0.1px] underline underline-offset-[2px] [font-family:inherit]"
              >
                {isExpanded ? "Show less" : "Show more"}
              </button>
            )}
          </article>
          );
        })}
      </div>

      <button type="button" className="rounded-[8px] border border-[#222] px-[23px] py-[13px] text-[16px] font-[600] tracking-[-0.1px] [font-family:inherit]">
        Show all 19 reviews
      </button>
    </section>
  );
}

function LocationSection() {
  return (
    <section id="location" className="scroll-mt-[80px] h-[850.74px] overflow-hidden border-t-[0.8px] border-[#dddddd] py-[48.8px]">
      <h2 className="m-0 text-[22px] font-[500] leading-[26px]">Where you&apos;ll be</h2>
      <div className="mt-[24px] text-[16px]">Candolim, Goa, India</div>
      <div className="relative mt-[24px] h-[482px] w-full overflow-hidden rounded-[12px] bg-[#eaf1e6]">
        <div
          role="img"
          aria-label="Approximate map location in Candolim"
          className="absolute inset-0"
        >
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-[41%] bg-[#acd6e9]"
            style={{ clipPath: "polygon(0 0, 100% 0, 51% 100%, 0 100%)" }}
          />
          <div aria-hidden="true" className="absolute left-[25.5%] top-[29%] h-[102px] w-[102px] rounded-full bg-[#cee4c7]" />
          <div aria-hidden="true" className="absolute left-[64%] top-[46%] h-[132px] w-[132px] rounded-full bg-[#cee4c7]" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(123,145,126,0.13) 1px, transparent 1px), linear-gradient(90deg, rgba(123,145,126,0.13) 1px, transparent 1px)",
              backgroundSize: "90px 90px",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 grid h-[58px] w-[58px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#222222] shadow-[0_3px_8px_rgba(0,0,0,0.28)]"
          >
            <svg
              viewBox="0 0 32 32"
              className="h-[49px] w-[49px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 25.5V14.8L16 7.2L25 14.8V25.5"
                stroke="white"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.2 25.5V18.7H19.8V25.5"
                stroke="white"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.5 26.5H26.5"
                stroke="white"
                strokeWidth="2.25"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        <button
          type="button"
          aria-label="Search map"
          onClick={(event) => event.currentTarget.blur()}
          className="absolute left-[12px] top-[12px] grid h-[40px] w-[40px] cursor-pointer place-items-center rounded-full bg-white text-[#222] shadow-[0_2px_8px_rgba(0,0,0,0.18)]"
        >
          <SearchIcon size={18} strokeWidth={1.8} />
        </button>
        <button
          type="button"
          aria-label="Zoom in"
          onClick={(event) => event.currentTarget.blur()}
          className="absolute right-[12px] top-[12px] grid h-[40px] w-[40px] cursor-pointer place-items-center rounded-[8px] bg-white text-[22px] font-[300] leading-none text-[#222] shadow-[0_2px_8px_rgba(0,0,0,0.16)]"
        >
          +
        </button>
        <button
          type="button"
          aria-label="Zoom out"
          onClick={(event) => event.currentTarget.blur()}
          className="absolute right-[12px] top-[60px] grid h-[40px] w-[40px] cursor-pointer place-items-center rounded-[8px] bg-white text-[22px] font-[300] leading-none text-[#222] shadow-[0_2px_8px_rgba(0,0,0,0.16)]"
        >
          −
        </button>
      </div>
      <div className="mt-[22px] text-[14px]">Exact location will be provided after booking.</div>
      <div className="mt-[34px] text-[18px] font-[600] leading-[22px] tracking-[-0.1px] [font-family:inherit]">Neighbourhood highlights</div>
      <p className="mt-[12px] text-[15px] leading-[22px]">Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.</p>
      <button
  type="button"
  className="
    mt-[12px]
    inline-flex
    items-center
    gap-[8px]
    text-[#222222]
  "
>
  <span
    className="
      text-[16px]
      font-[600]
      leading-[20px]
      tracking-[-0.1px]
      underline
      underline-offset-[2px]
      [font-family:inherit]
    "
  >
    Show more
  </span>

  <ChevronRightIcon size={18} />
</button>
    </section>
  );
}

function HostSection() {
  const cohosts = [
    { name: "Sharath", image: "/images/reference/avatars/co1.jpg" },
    { name: "Aman Dev Pahwa", image: "/images/reference/avatars/co2.jpg" },
    { name: "Maria Karen Priyanka", image: "/images/reference/avatars/co3.jpg" },
    { name: "Simran", image: "/images/reference/avatars/co4.jpg" },
    { name: "Pallavi", image: "/images/reference/avatars/co5.jpg" },
    { name: "Sanyukta", image: "/images/reference/avatars/co6.jpg" },
    { name: "Shruti", initial: "S", tone: "bg-[#ffe8ef] text-[#c13567]" },
    { name: "Amisha", initial: "A", tone: "bg-[#eef3ff] text-[#4b63c7]" },
  ];

  return (
    <section id="host" className="h-[562.28px] overflow-hidden border-t-[0.8px] border-[#dddddd] py-[48.8px]">
      <h2 className="text-[22px] font-[500]">Meet your host</h2>
      <div className="mt-[26px] grid grid-cols-[340px_1fr] gap-[48px]">
        <div>
          <div className="grid h-[260.45px] grid-cols-[1fr_100px] overflow-hidden rounded-[20px] bg-white px-[24px] pb-[22px] pt-[30px] shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <ReferenceImage
                  src={listing.host.avatar}
                  fallbackSrc="/images/reference/avatars/host.jpg"
                  alt="Mirashya Homes"
                  className="h-[88px] w-[88px] rounded-full object-cover"
                />
                <span aria-hidden="true" className="absolute bottom-[-1px] right-[-2px] grid h-[28px] w-[28px] place-items-center rounded-full border-2 border-white bg-[#ff385c] text-[15px] font-[700] text-white">✓</span>
              </div>
              <div className="mt-[12px] w-[190px] text-[26px] font-[500] leading-[37.18px]">Mirashya<br/>Homes</div>
              <div className="mt-[4px] text-[13px] leading-[18.59px]">Host</div>
            </div>

            <div className="flex flex-col justify-center border-l-[0.8px] border-[#dddddd] pl-[20px]">
              <div className="pb-[13px]">
                <div className="text-[20px] font-[500] leading-[28.6px]">1,463</div>
                <div className="text-[12px] leading-[17.15px]">Reviews</div>
              </div>
              <div className="border-y-[0.8px] border-[#dddddd] py-[13px]">
                <div className="text-[20px] font-[500] leading-[28.6px]">4.68★</div>
                <div className="text-[12px] leading-[17.15px]">Rating</div>
              </div>
              <div className="pt-[13px]">
                <div className="text-[20px] font-[500] leading-[28.6px]">2</div>
                <div className="text-[12px] leading-[17.15px]">Years hosting</div>
              </div>
            </div>
          </div>

          <div className="mt-[24px] space-y-[14px] text-[15px]">
            <div className="flex items-center gap-[12px]"><BirthIcon size={24}/><span>Born in the 80s</span></div>
            <div className="flex items-center gap-[12px]"><EducationIcon size={24}/><span>Where I went to school: NICMAR GOA</span></div>
          </div>
        </div>

        <div>
          <h3 className="text-[18px] font-[500]">Co-Hosts</h3>
          <div className="mt-[18px] grid grid-cols-3 gap-x-[30px] gap-y-[14px]">
            {cohosts.map((cohost) => (
              <div key={cohost.name} className="flex min-w-0 items-center gap-[10px]">
                {cohost.image ? (
                  <ReferenceImage src={cohost.image} alt="" className="h-[34px] w-[34px] shrink-0 rounded-full object-cover" />
                ) : (
                  <div className={`grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full text-[13px] font-[500] ${cohost.tone ?? "bg-[#f2f2f2]"}`}>{cohost.initial}</div>
                )}
                <span className="truncate text-[14px]">{cohost.name}</span>
              </div>
            ))}
          </div>

          <h3 className="mt-[28px] text-[18px] font-[500]">Host details</h3>
          <p className="mt-[12px] text-[15px] leading-[24px]">Response rate: 100%<br/>Responds within an hour</p>
          <button className="mt-[12px] rounded-[8px] bg-[#f2f2f2] px-[22px] py-[13px] text-[15px] font-[500] text-[#222] hover:bg-[#eaeaea]">Message host</button>
          <div className="mt-[28px] flex gap-[10px] text-[12px] leading-[17px] text-[#717171]"><ShieldIcon size={24}/><span>To help protect your payment, always use Airbnb to send money and communicate with hosts.</span></div>
        </div>
      </div>
    </section>
  );
}

function ThingsToKnow() {
  return (
    <section className="h-[332.69px] overflow-hidden border-t-[0.8px] border-[#dddddd] py-[48.8px]">
      <h2 className="text-[22px] font-[600] leading-[28px] tracking-[-0.1px] [font-family:inherit]">Things to know</h2>
      <div className="mt-[34px] grid grid-cols-3 gap-[32px]">
        <div>
          <CancellationIcon size={24} />
          <h3 className="mt-[16px] text-[16px] font-[600] leading-[20px] tracking-[-0.1px] [font-family:inherit]">Cancellation policy</h3>
          <p className="mt-[16px] text-[14px] leading-[21px]">Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.</p>
          <p className="mt-[8px] text-[14px]">Review this host&apos;s full policy for details.</p>
          <button type="button" className="mt-[10px] inline-block text-[#222222]">
            <span className="text-[14px] font-[600] leading-[20px] tracking-[-0.1px] underline underline-offset-[2px] [font-family:inherit]">
              Learn more
            </span>
          </button>
        </div>
        <div>
          <KeyIcon size={24} />
          <h3 className="mt-[16px] text-[16px] font-[600] leading-[20px] tracking-[-0.1px] [font-family:inherit]">House rules</h3>
          <p className="mt-[16px] text-[14px] leading-[29px]">Check-in after 2:00 pm<br/>Checkout before 11:00 am<br/>3 guests maximum</p>
          <button type="button" className="mt-[4px] inline-block text-[#222222]">
            <span className="text-[14px] font-[600] leading-[20px] tracking-[-0.1px] underline underline-offset-[2px] [font-family:inherit]">
              Learn more
            </span>
          </button>
        </div>
        <div>
          <SafetyPropertyIcon size={24} />
          <h3 className="mt-[16px] text-[16px] font-[600] leading-[20px] tracking-[-0.1px] [font-family:inherit]">Safety &amp; property</h3>
          <p className="mt-[16px] text-[14px] leading-[29px]">Carbon monoxide alarm not reported<br/>Smoke alarm not reported<br/>Exterior security cameras on property</p>
          <button type="button" className="mt-[4px] inline-block text-[#222222]">
            <span className="text-[14px] font-[600] leading-[20px] tracking-[-0.1px] underline underline-offset-[2px] [font-family:inherit]">
              Learn more
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

function NearbySection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);

  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const nextPage = direction > 0 ? 2 : 1;
    setPage(nextPage);
    track.scrollTo({
      left: direction > 0 ? track.scrollWidth - track.clientWidth : 0,
      behavior: "smooth",
    });
  };

  const handleTrackScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
    if (maxScroll === 0) {
      setPage(1);
      return;
    }
    setPage(track.scrollLeft >= maxScroll * 0.5 ? 2 : 1);
  };

  return (
    <section className="h-[470px] overflow-hidden border-t-[0.8px] border-[#dddddd] py-[48.8px]">
      <div className="flex items-center justify-between">
        <h2 className="m-0 text-[22px] font-[600] leading-[31.45px] tracking-[-0.1px] [font-family:inherit]">More stays nearby</h2>
        <div className="flex items-center gap-[8px]">
          <span className="mr-[4px] text-[14px] leading-[20px]">{page} / 2</span>
          <button
            type="button"
            aria-label="Previous stays"
            disabled={page === 1}
            onClick={() => move(-1)}
            className="grid h-[32px] w-[32px] place-items-center rounded-full border border-[#dddddd] text-[20px] leading-none disabled:opacity-40 hover:bg-[#f7f7f7]"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next stays"
            disabled={page === 2}
            onClick={() => move(1)}
            className="grid h-[32px] w-[32px] place-items-center rounded-full border border-[#dddddd] text-[20px] leading-none disabled:opacity-40 hover:bg-[#f7f7f7]"
          >
            ›
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        id="simTrack"
        role="region"
        aria-label="More stays nearby carousel"
        tabIndex={0}
        onScroll={handleTrackScroll}
        className="hide-scrollbar mt-[26px] flex gap-[20px] overflow-x-auto scroll-smooth pb-[8px]"
      >
        {listing.similar.map((item, i) => (
          <article key={item.title} className="w-[208px] shrink-0">
            <div className="h-[208px] overflow-hidden rounded-[12px] bg-[#eeeeee]">
              <ReferenceImage
                src={item.image}
                fallbackSrc={`/images/listing/hero-${(i % 5) + 1}.jpeg`}
                alt={item.title}
                className="h-full w-full object-cover transition-[filter] duration-200 hover:brightness-[0.94]"
              />
            </div>
            <div className="mt-[8px] min-h-[40px] text-[14px] font-[600] leading-[18px] tracking-[-0.1px] [font-family:inherit]">
              {item.title}
            </div>
            <div className="mt-[4px] flex items-center gap-[6px] text-[13px] font-[400] leading-[18.59px] tracking-normal">
              <span>{item.price}</span><span>★ {item.rating}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ListingMainContent({ onOpenAmenities, onReserve }: { onOpenAmenities: () => void; onReserve: () => void }) {
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);

  return (
    <>
      <section className="mx-auto mt-[48px] grid w-full max-w-[1120px] grid-cols-[652px_372px] gap-[96px]">
        <div id="contentLeft">
          <div className="h-[78.88px] border-b-[0.8px] border-[#dddddd] pb-[24px]">
            <h2 className="m-0 text-[22px] font-[500] leading-[26px]">{listing.propertyTitle}</h2>
            <div className="mt-[6px] text-[16px] leading-[1.43]">3 guests · 1 bedroom · 1 bed · 1 bathroom</div>
          </div>
          <GuestFavouriteCard />
          <HostRow />
          <div className="flex h-[238.84px] flex-col gap-[24px] border-b-[0.8px] border-[#dddddd] py-[32.8px]">
            <Highlight icon={<OutdoorEntertainmentIcon size={24}/>} title="Outdoor entertainment" body="The pool and alfresco dining are great for summer trips." />
            <Highlight icon={<FanIcon size={24}/>} title="Designed for staying cool" body="Beat the heat with the A/C and ceiling fan." />
            <Highlight icon={<DoorIcon size={24}/>} title="Self check-in" body="You can check in with the building staff." />
          </div>
          <div className={`${descriptionExpanded ? "min-h-[252.82px]" : "h-[252.82px]"} border-b-[0.8px] border-[#dddddd] pb-[32px] pt-[26.8px]`}>
            <div className="flex h-[52.01px] items-center rounded-[8px] bg-[#f7f7f7] px-[18px] text-[14px]">
              Some info has been automatically translated.
              <button type="button" className="ml-[4px] font-[600] tracking-[-0.1px] underline underline-offset-[2px] [font-family:inherit]">Show original</button>
            </div>
            <div
              id="description"
              className={`relative mt-[8px] ${descriptionExpanded ? "h-auto" : "h-[96px] overflow-hidden"}`}
            >
              <p className="m-0 text-[16px] leading-[24px] tracking-[-0.35px]">{listing.description}</p>
              {!descriptionExpanded && (
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[25px] bg-gradient-to-b from-white/10 to-white/95" />
              )}
            </div>
            <button
              type="button"
              onClick={() => setDescriptionExpanded((value) => !value)}
              aria-expanded={descriptionExpanded}
              className="mt-[8px] inline-flex items-center gap-[8px] text-[16px] font-[600] leading-[20px] tracking-[-0.1px] underline underline-offset-[2px] [font-family:inherit]"
            >
              {descriptionExpanded ? "Show less" : "Show more"} <ChevronRightIcon size={18}/>
            </button>
          </div>
          <SleepSection />
          <Amenities onOpenAmenities={onOpenAmenities} />
          <CalendarSection />
        </div>
        <BookingCard onReserve={onReserve} />
      </section>

      <div id="wideSections" className="mx-auto w-full max-w-[1120px]">
        <ReviewsSection />
        <LocationSection />
        <HostSection />
        <ThingsToKnow />
        <NearbySection />
      </div>
    </>
  );
}
