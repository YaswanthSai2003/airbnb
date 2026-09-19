import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 18, children, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ShareIcon(props: IconProps) {
  return <Base {...props}><path d="M12 16V3"/><path d="m8 7 4-4 4 4"/><path d="M5 11v8h14v-8"/></Base>;
}

export function HeartIcon({ filled = false, ...props }: IconProps & { filled?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={props.size ?? 18} height={props.size ?? 18}
      fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" {...props}>
      <path d="M12 20.5S4 16 4 9.5A4.5 4.5 0 0 1 12 6.7a4.5 4.5 0 0 1 8 2.8c0 6.5-8 11-8 11Z" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return <Base {...props}><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></Base>;
}

export function GlobeIcon(props: IconProps) {
  return <Base {...props}><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21"/><path d="M12 3C9.6 5.5 8.4 8.5 8.4 12s1.2 6.5 3.6 9"/></Base>;
}

export function MenuIcon(props: IconProps) {
  return <Base {...props}><path d="M5 8h14"/><path d="M5 12h14"/><path d="M5 16h14"/></Base>;
}

export function GridIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={props.size ?? 18} height={props.size ?? 18} fill="currentColor" {...props}>
      {[[4,4],[10,4],[16,4],[4,10],[10,10],[16,10],[4,16],[10,16],[16,16]].map(([x,y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="1.45"/>)}
    </svg>
  );
}

export function ChevronLeftIcon(props: IconProps) { return <Base {...props}><path d="m15 18-6-6 6-6"/></Base>; }
export function ChevronRightIcon(props: IconProps) { return <Base {...props}><path d="m9 18 6-6-6-6"/></Base>; }
export function ChevronDownIcon(props: IconProps) { return <Base {...props}><path d="m6 9 6 6 6-6"/></Base>; }
export function CloseIcon(props: IconProps) { return <Base {...props}><path d="M6 6l12 12M18 6 6 18"/></Base>; }
export function StarIcon(props: IconProps) { return <svg aria-hidden="true" viewBox="0 0 24 24" width={props.size ?? 14} height={props.size ?? 14} fill="currentColor" {...props}><path d="m12 2.8 2.7 5.5 6 .9-4.35 4.23 1.03 5.98L12 16.58l-5.38 2.83 1.03-5.98L3.3 9.2l6-.9L12 2.8Z"/></svg>; }
export function FlagIcon(props: IconProps) { return <Base {...props}><path d="M5 21V4"/><path d="M5 5h10l-1.8 3L15 11H5"/></Base>; }
export function ShieldIcon(props: IconProps) { return <Base {...props}><path d="M12 3 5 6v5c0 4.6 2.9 8 7 10 4.1-2 7-5.4 7-10V6l-7-3Z"/><path d="m9.5 12 1.6 1.6 3.4-3.5"/></Base>; }
export function CalendarIcon(props: IconProps) { return <Base {...props}><path d="M6 3v3M18 3v3M4 8h16M5 5h14v15H5z"/></Base>; }
export function WifiIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={props.size ?? 18} height={props.size ?? 18}
      fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4.5 9.2a11.1 11.1 0 0 1 15 0" />
      <path d="M7.6 12.3a6.7 6.7 0 0 1 8.8 0" />
      <path d="M10.6 15.5a2.3 2.3 0 0 1 2.8 0" />
      <circle cx="12" cy="18.3" r=".7" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CarIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={props.size ?? 18} height={props.size ?? 18}
      fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5.3 10.2 6.9 6h10.2l1.6 4.2" />
      <path d="M4.2 10.2h15.6v7.2H4.2z" />
      <path d="M6.2 13h11.6M7 17.4v2M17 17.4v2" />
      <circle cx="7.1" cy="14.9" r=".9" />
      <circle cx="16.9" cy="14.9" r=".9" />
    </svg>
  );
}

export function PoolIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={props.size ?? 18} height={props.size ?? 18}
      fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M8 4.2v8.2M8 7h5v5.4M13 4.2v8.2" />
      <path d="M3.5 15.4c1.4 1 2.8 1 4.2 0 1.4 1 2.8 1 4.2 0 1.4 1 2.8 1 4.2 0 1.4 1 2.8 1 4.2 0" />
      <path d="M3.5 19.1c1.4 1 2.8 1 4.2 0 1.4 1 2.8 1 4.2 0 1.4 1 2.8 1 4.2 0 1.4 1 2.8 1 4.2 0" />
    </svg>
  );
}

export function HotTubIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={props.size ?? 18} height={props.size ?? 18}
      fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4.2 10.4h15.6v7.1H4.2z" />
      <path d="M3 10.4h18M6.2 17.5v2M17.8 17.5v2" />
      <path d="M8.2 7.8c-1.2-1.2-.7-2.3.1-3.1.8-.8 1.2-1.7.3-2.7" />
      <path d="M13 7.8c-1.2-1.2-.7-2.3.1-3.1.8-.8 1.2-1.7.3-2.7" />
      <circle cx="17.2" cy="7.1" r="1.4" />
    </svg>
  );
}

export function PetIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={props.size ?? 18} height={props.size ?? 18}
      fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <ellipse cx="7.1" cy="7.5" rx="1.6" ry="2" />
      <ellipse cx="16.9" cy="7.5" rx="1.6" ry="2" />
      <ellipse cx="4.9" cy="12.1" rx="1.5" ry="1.8" transform="rotate(-25 4.9 12.1)" />
      <ellipse cx="19.1" cy="12.1" rx="1.5" ry="1.8" transform="rotate(25 19.1 12.1)" />
      <path d="M7.4 17.1c.7-2.3 2.4-3.7 4.6-3.7s3.9 1.4 4.6 3.7c.5 1.8-.8 3.2-2.7 2.5-1.2-.4-2.6-.4-3.8 0-1.9.7-3.2-.7-2.7-2.5Z" />
    </svg>
  );
}

export function CameraIcon(props: IconProps) { return <Base {...props}><path d="M4 8h4l1.5-2h5L16 8h4v11H4z"/><circle cx="12" cy="13" r="3"/></Base>; }
export function SmokeIcon(props: IconProps) { return <Base {...props}><path d="M5 16h14M7 12h10M9 8h6"/><path d="M12 3c2 1.5 2 3 0 4"/></Base>; }
export function WorkIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={props.size ?? 18} height={props.size ?? 18}
      fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 12.2h16v5.3H4z" />
      <path d="M6.2 17.5V21M17.8 17.5V21M3 21h18" />
      <path d="M8.2 12.2V8.1h6.5v4.1" />
      <path d="M14.7 8.1V5.2h3.1" />
      <path d="M17.8 5.2l1.2 2.3h-2.4l1.2-2.3Z" />
    </svg>
  );
}

export function OutdoorEntertainmentIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <path d="M4.5 17.5h15" />
      <path d="M6.5 17.5v-5.2h11v5.2" />
      <path d="M8.5 12.3V9.8h7v2.5" />
      <path d="M12 3.2v4.1" />
      <path d="M8.2 7.3h7.6L12 3.2 8.2 7.3Z" />
      <path d="M5.2 20h13.6" />
    </AmenityBase>
  );
}

export function KeyIcon(props: IconProps) { return <Base {...props}><circle cx="9" cy="9" r="5"/><circle cx="9" cy="9" r="1.2"/><path d="m12.7 12.7 6.3 6.3h2v-2.2l-1.7-1.7h-2.4v-2.4h-2.2Z"/></Base>; }
export function SnowIcon(props: IconProps) { return <Base {...props}><path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9M9 5l3 2 3-2M9 19l3-2 3 2"/></Base>; }
export function DoorIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={props.size ?? 18} height={props.size ?? 18}
      fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6.3 20.5h11.4M7.4 20.5V4h9.2v16.5" />
      <circle cx="13.8" cy="12.2" r=".55" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) { return <Base {...props}><path d="M12 21s6-5.3 6-11a6 6 0 1 0-12 0c0 5.7 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/></Base>; }


function AmenityBase({
  size = 24,
  children,
  ...props
}: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

export function KitchenIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <path d="M5 3v8M3.5 3v4.1c0 2 1.1 3.4 3 3.9V21M6.5 3v4.1c0 2-1.1 3.4-3 3.9" />
      <path d="M13.5 3c2 0 3 1.7 3 4.2 0 2.4-1 4-3 4V21M13.5 3v8.2" />
      <path d="M19.5 3v18" />
    </AmenityBase>
  );
}





export function SecurityCameraIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <path d="M4 7.3h11.3v7.6H4z" />
      <circle cx="8.1" cy="11.1" r="1.5" />
      <path d="m15.3 9.3 4.7-2.1V15l-4.7-2.1" />
      <path d="M8 14.9v3.4M4.8 18.3h6.4" />
    </AmenityBase>
  );
}

export function CarbonAlarmMissingIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <rect x="4.5" y="4.5" width="15" height="15" rx="1.5" />
      <path d="M7.3 7.3 16.7 16.7M16.7 7.3 7.3 16.7" opacity=".55" />
      <path d="M3.5 3.5 20.5 20.5" />
    </AmenityBase>
  );
}

export function SmokeAlarmMissingIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <circle cx="12" cy="12" r="7.7" />
      <path d="M8.2 11.2h7.6M9.4 14h5.2" opacity=".6" />
      <path d="M4.2 4.2 19.8 19.8" />
    </AmenityBase>
  );
}

export function HairDryerIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <path d="M4.2 7.1h10.3c2.4 0 4.2 1.2 4.2 3s-1.8 3-4.2 3H8.3" />
      <path d="M8.3 13.1v3.2c0 1.8-.8 3.2-2.4 4.1" />
      <path d="M4.2 7.1v6M18.7 9l2.1-.9v4l-2.1-.9" />
    </AmenityBase>
  );
}

export function CleaningIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <path d="M9.3 4.2h5.4M10.4 4.2v3l-2.2 1.7v10.6h7.6V8.9l-2.2-1.7v-3" />
      <path d="M8.2 12h7.6M16.1 7.7h2.2" />
    </AmenityBase>
  );
}

export function BottleIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <path d="M9.1 4.2h5.8M10.3 4.2v3.1L8.7 9v10.6h6.6V9l-1.6-1.7V4.2" />
      <path d="M8.7 12h6.6" />
    </AmenityBase>
  );
}

export function HotWaterIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <path d="M4.5 11.2h15v7.1h-15zM3.5 11.2h17" />
      <path d="M7.1 8.5c-1-1-.6-2 .1-2.7.7-.7 1.1-1.5.3-2.4M11.9 8.5c-1-1-.6-2 .1-2.7.7-.7 1.1-1.5.3-2.4M16.7 8.5c-1-1-.6-2 .1-2.7.7-.7 1.1-1.5.3-2.4" />
    </AmenityBase>
  );
}

export function ShowerGelIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <path d="M9.2 5h5.5M10.3 5v2.3L8.8 9v10.5h6.4V9l-1.5-1.7V5" />
      <path d="M11 3h4.2M15.2 3v2" />
      <circle cx="18.2" cy="9" r="1.1" />
      <circle cx="19.4" cy="5.9" r=".7" />
    </AmenityBase>
  );
}

export function WashingMachineIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <rect x="5" y="3.5" width="14" height="17" rx="1.8" />
      <circle cx="12" cy="13" r="4.2" />
      <path d="M8 6.5h1M11 6.5h4.5" />
      <path d="M9.4 13c1.1 1.4 4.1 1.4 5.2 0" />
    </AmenityBase>
  );
}

export function HangerIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <path d="M12 7.8a2.1 2.1 0 1 0-2.1-2.1" />
      <path d="M12 7.8 20 15H4l8-7.2Z" />
    </AmenityBase>
  );
}

export function LinenIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <path d="M6 5h10.7L19 7.3V18H6z" />
      <path d="M16.7 5v2.3H19M6 10h13M8.2 14h8.6M8.2 17h8.6" />
    </AmenityBase>
  );
}

export function BlindsIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <path d="M4.5 5h15v11h-15zM4.5 8.3h15" />
      <path d="M12 16v4M10.5 20h3" />
    </AmenityBase>
  );
}

export function IronIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <path d="M4.2 15.5h15.6c-.6-4-2.2-6.2-5.2-6.2H8.7c-2.5 0-3.8 2-4.5 6.2Z" />
      <path d="M9 9.3V6.4h5.2M7.2 12.4h8.7" />
    </AmenityBase>
  );
}

export function StorageIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <rect x="5" y="4" width="14" height="16" rx="1.2" />
      <path d="M12 4v16M8.6 11.5h.1M15.3 11.5h.1" />
      <path d="M7.2 20v1M16.8 20v1" />
    </AmenityBase>
  );
}

export function CotIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <path d="M4.5 8.2h15v9.2h-15z" />
      <path d="M6.7 8.2v9.2M9.4 8.2v9.2M12 8.2v9.2M14.6 8.2v9.2M17.3 8.2v9.2" />
      <path d="M6 17.4v3M18 17.4v3" />
    </AmenityBase>
  );
}

export function TvIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <rect x="4.2" y="5" width="15.6" height="11.5" rx="1.3" />
      <path d="M9.2 19.2h5.6M12 16.5v2.7" />
    </AmenityBase>
  );
}



export function FanIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <circle cx="12" cy="12" r="1.2" />
      <path d="M12.7 10.8c.3-3.6 1.8-6.4 4.2-6.2 2.1.2 2.3 2.8.8 4.4-1.2 1.3-2.8 1.9-5 1.8Z" />
      <path d="M10.8 11.3c-3.6-.3-6.4-1.8-6.2-4.2.2-2.1 2.8-2.3 4.4-.8 1.3 1.2 1.9 2.8 1.8 5Z" />
      <path d="M11.3 13.2c-.3 3.6-1.8 6.4-4.2 6.2-2.1-.2-2.3-2.8-.8-4.4 1.2-1.3 2.8-1.9 5-1.8Z" />
      <path d="M13.2 12.7c3.6.3 6.4 1.8 6.2 4.2-.2 2.1-2.8 2.3-4.4.8-1.3-1.2-1.9-2.8-1.8-5Z" />
    </AmenityBase>
  );
}

export function FridgeIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <rect x="7" y="3.3" width="10" height="17.4" rx="1.2" />
      <path d="M7 9.4h10M14.2 5.6v1.8M14.2 12.2v2.1" />
    </AmenityBase>
  );
}

export function MicrowaveIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <rect x="3.5" y="6" width="17" height="12" rx="1.5" />
      <rect x="6.2" y="8.8" width="8.7" height="6.4" rx=".5" />
      <circle cx="17.8" cy="10.1" r=".7" />
      <circle cx="17.8" cy="13.9" r=".7" />
    </AmenityBase>
  );
}

export function CookingIcon(props: IconProps) {
  return <KitchenIcon {...props} />;
}

export function CrockeryIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <path d="M4.8 3.5v8M3.4 3.5v4.2c0 2 1 3.3 2.8 3.8V21M6.2 3.5v4.2c0 2-1 3.3-2.8 3.8" />
      <path d="M15.7 5.2a6.8 6.8 0 1 0 0 13.6" />
      <path d="M18.2 6.7v10.6" />
    </AmenityBase>
  );
}

export function KettleIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <path d="M6 9h9.8l1 9.5H5zM8.2 9V5.8h5V9" />
      <path d="M16.5 10.2h1.8c2 0 2.7 1.3 2.7 2.8 0 1.7-1 3.2-3.1 3.2h-1.4" />
      <path d="m6 10.5-2.3 1.2" />
    </AmenityBase>
  );
}

export function CoffeeIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <path d="M5.2 6.2h10.5v12H5.2z" />
      <path d="M7.5 8.8h6M8 13h5.2M15.7 9.2h2.2c1.8 0 2.6 1.2 2.6 2.5s-.8 2.5-2.6 2.5h-2.2" />
      <path d="M7.8 4.2c0-1 .8-1 .8-2M11.3 4.2c0-1 .8-1 .8-2" />
    </AmenityBase>
  );
}

export function WineIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <path d="M7.2 4h9.6l-.8 5.5a4.1 4.1 0 0 1-8 0L7.2 4Z" />
      <path d="M12 13.6V20M8.8 20h6.4" />
      <path d="M8.2 8.2h7.6" />
    </AmenityBase>
  );
}

export function ToasterIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <path d="M5.4 8.4h13.2l1.1 9.7H4.3z" />
      <path d="M8.2 8.4V5.6h7.6v2.8M7.4 13.2h9.2" />
    </AmenityBase>
  );
}





export function PatioIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <path d="M12 4.2v16M5.3 8.7h13.4L12 4.2 5.3 8.7Z" />
      <path d="M8 20.2h8M7.3 13.2h9.4" />
      <path d="M5.6 16.5h3.1M15.3 16.5h3.1" />
    </AmenityBase>
  );
}

export function DiningIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <path d="M5 9.3h14l1 4.4H4zM7.2 13.7v6M16.8 13.7v6" />
      <path d="M6.2 7h3M14.8 7h3M7.7 7V4.5M16.3 7V4.5" />
    </AmenityBase>
  );
}

export function GymIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <path d="M3.2 9.5v5M6 7.5v9M18 7.5v9M20.8 9.5v5M6 12h12" />
    </AmenityBase>
  );
}

export function LongStayIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <path d="M6 4h12v16H6zM8.5 7.5h7M8.5 11h7M8.5 14.5h4.5" />
      <path d="M9 2.8v2.4M15 2.8v2.4" />
    </AmenityBase>
  );
}

export function SelfCheckinIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <path d="M6.5 20.5h11M7.5 20.5V4h9v16.5" />
      <path d="M12.8 12h.1" />
      <path d="M4.2 9.2h2.5M4.2 12h2.5M4.2 14.8h2.5" />
    </AmenityBase>
  );
}

export function BirthIcon(props: IconProps) { return <Base {...props}><circle cx="12" cy="9" r="6"/><path d="M12 15v6M9 18h6"/></Base>; }
export function EducationIcon(props: IconProps) { return <Base {...props}><path d="m3 9 9-5 9 5-9 5-9-5Z"/><path d="M6 11.5V17l6 3 6-3v-5.5"/></Base>; }

export function AirConditioningIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <path d="M12 3.5v17M4.6 7.8 19.4 16.2M4.6 16.2 19.4 7.8" />
      <path d="m9.6 4.8 2.4 1.7 2.4-1.7M9.6 19.2l2.4-1.7 2.4 1.7" />
      <path d="m5.8 10.4.3-2.9 2.6-1.1M18.2 13.6l-.3 2.9-2.6 1.1M5.8 13.6l.3 2.9 2.6 1.1M18.2 10.4l-.3-2.9-2.6-1.1" />
    </AmenityBase>
  );
}


export function BlenderIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <path d="M8.5 4h7l-1 9.3h-5zM10.1 13.3h3.8l1.2 6.7H8.9l1.2-6.7Z" />
      <path d="M9.2 7.2h5.6M10.3 17.1h3.4" />
    </AmenityBase>
  );
}


export function CookerIcon(props: IconProps) {
  return (
    <AmenityBase {...props}>
      <rect x="5.2" y="3.5" width="13.6" height="17" rx="1.3" />
      <circle cx="9" cy="7.6" r="1.3" />
      <circle cx="15" cy="7.6" r="1.3" />
      <circle cx="9" cy="12.4" r="1.3" />
      <circle cx="15" cy="12.4" r="1.3" />
      <path d="M8 17h8" />
    </AmenityBase>
  );
}


export function CancellationIcon(props: IconProps) {
  return <Base {...props}><path d="M7 3v3M17 3v3M5 6h14v14H5zM5 9h14"/><path d="m9 12 6 6M15 12l-6 6"/></Base>;
}

export function SafetyPropertyIcon(props: IconProps) {
  return <Base {...props}><path d="M12 3 6 6v6.2c0 4.3 2.2 7.2 6 8.8 3.8-1.6 6-4.5 6-8.8V6l-6-3Z"/><path d="M12 3v18"/></Base>;
}
