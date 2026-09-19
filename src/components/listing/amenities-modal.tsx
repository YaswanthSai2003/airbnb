"use client";

import { useCallback, useRef } from "react";
import {
  AirConditioningIcon,
  BlindsIcon,
  BlenderIcon,
  BottleIcon,
  CarIcon,
  CarbonAlarmMissingIcon,
  CleaningIcon,
  CookerIcon,
  CloseIcon,
  CoffeeIcon,
  CookingIcon,
  CotIcon,
  DiningIcon,
  DoorIcon,
  FridgeIcon,
  GymIcon,
  HairDryerIcon,
  HangerIcon,
  HotTubIcon,
  HotWaterIcon,
  IronIcon,
  KettleIcon,
  KitchenIcon,
  LinenIcon,
  LongStayIcon,
  MicrowaveIcon,
  PatioIcon,
  PetIcon,
  PoolIcon,
  SecurityCameraIcon,
  SelfCheckinIcon,
  SmokeAlarmMissingIcon,
  FanIcon,
  StorageIcon,
  ToasterIcon,
  TvIcon,
  WashingMachineIcon,
  WifiIcon,
  WineIcon,
  WorkIcon,
} from "@/components/icons";
import { useDialogBehavior } from "@/hooks/use-dialog-behavior";

type AmenityItem = {
  label: string;
  icon: React.ReactNode;
  unavailable?: boolean;
};

type AmenityGroup = {
  title: string;
  items: AmenityItem[];
};

const groups: AmenityGroup[] = [
  {
    title: "Bathroom",
    items: [
      { label: "Hairdryer", icon: <HairDryerIcon size={24} /> },
      { label: "Cleaning products", icon: <CleaningIcon size={24} /> },
      { label: "Shampoo", icon: <BottleIcon size={24} /> },
      { label: "Hot water", icon: <HotWaterIcon size={24} /> },
      { label: "Shower gel", icon: <BottleIcon size={24} /> },
    ],
  },
  {
    title: "Bedroom and laundry",
    items: [
      { label: "Washing machine", icon: <WashingMachineIcon size={24} /> },
      { label: "Hangers", icon: <HangerIcon size={24} /> },
      { label: "Bed linen", icon: <LinenIcon size={24} /> },
      { label: "Room-darkening blinds", icon: <BlindsIcon size={24} /> },
      { label: "Iron", icon: <IronIcon size={24} /> },
      { label: "Clothes storage", icon: <StorageIcon size={24} /> },
      { label: "Cot", icon: <CotIcon size={24} /> },
    ],
  },
  { title: "Entertainment", items: [{ label: "TV", icon: <TvIcon size={24} /> }] },
  { title: "Family", items: [{ label: "Cot", icon: <CotIcon size={24} /> }] },
  {
    title: "Heating and cooling",
    items: [
      { label: "Air conditioning", icon: <AirConditioningIcon size={24} /> },
      { label: "Ceiling fan", icon: <FanIcon size={24} /> },
    ],
  },
  {
    title: "Home safety",
    items: [
      { label: "Exterior security cameras on property", icon: <SecurityCameraIcon size={24} /> },
      { label: "Carbon monoxide alarm", icon: <CarbonAlarmMissingIcon size={24} />, unavailable: true },
      { label: "Smoke alarm", icon: <SmokeAlarmMissingIcon size={24} />, unavailable: true },
    ],
  },
  {
    title: "Internet and office",
    items: [
      { label: "Wifi", icon: <WifiIcon size={24} /> },
      { label: "Dedicated workspace", icon: <WorkIcon size={24} /> },
    ],
  },
  {
    title: "Kitchen and dining",
    items: [
      { label: "Kitchen", icon: <KitchenIcon size={24} /> },
      { label: "Fridge", icon: <FridgeIcon size={24} /> },
      { label: "Freezer", icon: <FridgeIcon size={24} /> },
      { label: "Microwave", icon: <MicrowaveIcon size={24} /> },
      { label: "Cooking basics", icon: <CookingIcon size={24} /> },
      { label: "Crockery and cutlery", icon: <KitchenIcon size={24} /> },
      { label: "Kettle", icon: <KettleIcon size={24} /> },
      { label: "Coffee", icon: <CoffeeIcon size={24} /> },
      { label: "Wine glasses", icon: <WineIcon size={24} /> },
      { label: "Toaster", icon: <ToasterIcon size={24} /> },
      { label: "Blender", icon: <BlenderIcon size={24} /> },
      { label: "Cooker", icon: <CookerIcon size={24} /> },
    ],
  },
  { title: "Location features", items: [{ label: "Private entrance", icon: <DoorIcon size={24} /> }] },
  {
    title: "Outdoor",
    items: [
      { label: "Patio or balcony", icon: <PatioIcon size={24} /> },
      { label: "Outdoor dining area", icon: <DiningIcon size={24} /> },
    ],
  },
  {
    title: "Parking and facilities",
    items: [
      { label: "Free parking on premises", icon: <CarIcon size={24} /> },
      { label: "Pool", icon: <PoolIcon size={24} /> },
      { label: "Hot tub", icon: <HotTubIcon size={24} /> },
      { label: "Gym", icon: <GymIcon size={24} /> },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "Pets allowed", icon: <PetIcon size={24} /> },
      { label: "Cleaning available during stay", icon: <CleaningIcon size={24} /> },
      { label: "Long-term stays allowed", icon: <LongStayIcon size={24} /> },
      { label: "Self check-in", icon: <SelfCheckinIcon size={24} /> },
    ],
  },
];

function AmenityRow({ item }: { item: AmenityItem }) {
  return (
    <div className="flex h-[56.8px] items-center gap-[16px] border-b-[0.8px] border-[#ebebeb] text-[16px] leading-[22.88px] last:border-b-0">
      <span className={`grid h-[24px] w-[24px] shrink-0 place-items-center ${item.unavailable ? "text-[#717171]" : "text-[#222]"}`}>
        {item.icon}
      </span>
      <span className={item.unavailable ? "text-[#717171] line-through" : "text-[#222]"}>{item.label}</span>
    </div>
  );
}

export function AmenitiesModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => onClose(), [onClose]);
  useDialogBehavior(open, rootRef, closeRef, close);

  if (!open) return null;

  return (
    <div
      id="amenModal"
      ref={rootRef}
      role="dialog"
      aria-modal="true"
      aria-label="What this place offers"
      className="fixed inset-0 z-[150] flex items-center justify-center bg-black/50 px-[24px] py-[28px]"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div className="flex h-[804px] max-h-[calc(100vh-56px)] w-[780px] max-w-[calc(100vw-48px)] flex-col overflow-hidden rounded-[12px] bg-white">
        <div className="flex h-[64px] shrink-0 items-center px-[16px]">
          <button
            ref={closeRef}
            id="amenClose"
            type="button"
            aria-label="Close amenities"
            onClick={onClose}
            className="grid h-[40px] w-[40px] place-items-center rounded-full transition-colors hover:bg-[#f7f7f7] active:scale-[0.96]"
          >
            <CloseIcon size={18} />
          </button>
        </div>

        <div id="amenBody" className="reference-scrollbar flex-1 overflow-y-auto px-[48px] pb-[48px]">
          <h2 className="mb-[24px] mt-[12px] text-[22px] font-[500] leading-[31.45px]">What this place offers</h2>
          {groups.map((group, groupIndex) => (
            <section key={group.title} className={groupIndex === 0 ? "" : "mt-[32px]"}>
              <h3 className="mb-[4px] text-[18px] font-[500] leading-[25.74px]">{group.title}</h3>
              <div>
                {group.items.map((item) => <AmenityRow key={`${group.title}-${item.label}`} item={item} />)}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
