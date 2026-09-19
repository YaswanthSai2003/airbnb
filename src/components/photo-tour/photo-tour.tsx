"use client";

import {
  useCallback,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import {
  ChevronLeftIcon,
  HeartIcon,
  ShareIcon,
} from "@/components/icons";
import { ReferenceImage } from "@/components/ui/reference-image";
import { useDialogBehavior } from "@/hooks/use-dialog-behavior";
import {
  allTourImages,
  listing,
  type TourRoom,
} from "@/data/listing";

type TourImage = TourRoom["images"][number];

function getTourImageIndex(roomId: string, src: string) {
  const index = allTourImages.findIndex(
    (image) => image.roomId === roomId && image.src === src,
  );

  return index < 0 ? 0 : index;
}

function LargeTourImage({
  room,
  image,
  onOpenImage,
}: {
  room: TourRoom;
  image: TourImage;
  onOpenImage: (index: number) => void;
}) {
  return (
    <button
      type="button"
      aria-label={`Open ${room.title} photo`}
      className="group block h-[305.33px] w-[458px] overflow-hidden rounded-[8px] bg-[#eeeeee]"
      onClick={() => onOpenImage(getTourImageIndex(room.id, image.src))}
    >
      <ReferenceImage
        src={image.src}
        fallbackSrc="/images/listing/hero-1.jpeg"
        alt={image.alt}
        className="h-full w-full object-cover filter-none transition-transform duration-[400ms] ease-[cubic-bezier(0.2,0,0,1)] group-hover:scale-[1.028] group-hover:brightness-100"
      />
    </button>
  );
}

function PairedTourImages({
  room,
  images,
  onOpenImage,
}: {
  room: TourRoom;
  images: TourImage[];
  onOpenImage: (index: number) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-[12px]">
      {images.map((image) => (
        <button
          type="button"
          aria-label={`Open ${room.title} photo`}
          key={image.src}
          className="group h-[148.66px] w-[223px] overflow-hidden rounded-[8px] bg-[#eeeeee]"
          onClick={() => onOpenImage(getTourImageIndex(room.id, image.src))}
        >
          <ReferenceImage
            src={image.src}
            fallbackSrc="/images/listing/hero-1.jpeg"
            alt={image.alt}
            className="h-full w-full object-cover filter-none transition-transform duration-[400ms] ease-[cubic-bezier(0.2,0,0,1)] group-hover:scale-[1.028] group-hover:brightness-100"
          />
        </button>
      ))}
    </div>
  );
}

function TourRoomGallery({
  room,
  onOpenImage,
}: {
  room: TourRoom;
  onOpenImage: (index: number) => void;
}) {
  if (room.images.length === 1) {
    return (
      <LargeTourImage
        room={room}
        image={room.images[0]}
        onOpenImage={onOpenImage}
      />
    );
  }

  if (room.images.length === 2) {
    return (
      <PairedTourImages
        room={room}
        images={room.images}
        onOpenImage={onOpenImage}
      />
    );
  }

  if (room.id === "gym" && room.images.length === 5) {
    return (
      <div className="space-y-[12px]">
        <LargeTourImage
          room={room}
          image={room.images[0]}
          onOpenImage={onOpenImage}
        />

        <PairedTourImages
          room={room}
          images={room.images.slice(1, 3)}
          onOpenImage={onOpenImage}
        />

        <PairedTourImages
          room={room}
          images={room.images.slice(3, 5)}
          onOpenImage={onOpenImage}
        />
      </div>
    );
  }

  const rows: ReactNode[] = [];
  let cursor = 0;
  let wide = true;

  while (cursor < room.images.length) {
    if (wide || cursor === room.images.length - 1) {
      const image = room.images[cursor];

      rows.push(
        <LargeTourImage
          key={image.src}
          room={room}
          image={image}
          onOpenImage={onOpenImage}
        />,
      );

      cursor += 1;
    } else {
      const pair = room.images.slice(cursor, cursor + 2);

      rows.push(
        <PairedTourImages
          key={pair.map((image) => image.src).join("|")}
          room={room}
          images={pair}
          onOpenImage={onOpenImage}
        />,
      );

      cursor += pair.length;
    }

    wide = !wide;
  }

  return <div className="space-y-[12px]">{rows}</div>;
}

export function PhotoTour({
  open,
  onClose,
  initialRoomId,
  onOpenLightbox,
}: {
  open: boolean;

  /*
   * These remain part of the public component props because the parent
   * currently passes them. They intentionally have no Photo Tour action,
   * matching the reference behaviour.
   */
  saved: boolean;
  onToggleSaved: () => void;
  onShare: () => void;

  onClose: () => void;
  initialRoomId: string | null;
  onOpenLightbox: (index: number) => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => onClose(), [onClose]);

  useDialogBehavior(
    open,
    dialogRef,
    backRef,
    close,
  );

  const scrollToRoom = useCallback(
    (
      id: string,
      behavior: ScrollBehavior = "smooth",
    ) => {
      const root = document.getElementById("tourScroll");
      const room = document.getElementById(`tour-room-${id}`);

      if (!root || !room) {
        return;
      }

      const rootRect = root.getBoundingClientRect();
      const roomRect = room.getBoundingClientRect();

      const targetTop =
        root.scrollTop +
        roomRect.top -
        rootRect.top -
        16;

      root.scrollTo({
        top: Math.max(0, targetTop),
        behavior,
      });
    },
    [],
  );

  useEffect(() => {
    if (!open) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      if (initialRoomId) {
        scrollToRoom(initialRoomId, "auto");
        return;
      }

      const root = document.getElementById("tourScroll");

      root?.scrollTo({
        top: 0,
        behavior: "auto",
      });
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [
    initialRoomId,
    open,
    scrollToRoom,
  ]);

  if (!open) {
    return null;
  }

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
      className="fixed inset-0 z-[120] flex flex-col bg-white text-[#222]"
    >
      <header
        id="tourBar"
        className="relative flex h-[88px] shrink-0 items-center px-[32px]"
      >
        {/* Back */}
        <button
          ref={backRef}
          id="tourBack"
          type="button"
          onClick={onClose}
          aria-label="Back to listing"
          className="
            -ml-[8px]
            grid
            h-[40px]
            w-[40px]
            cursor-pointer
            place-items-center
            rounded-full
            hover:bg-[#f7f7f7]
            active:scale-[0.96]
          "
        >
          <ChevronLeftIcon size={18} />
        </button>

        {/* Title */}
        <h2
          className="
            absolute
            left-1/2
            top-1/2
            m-0
            -translate-x-1/2
            -translate-y-1/2
            text-[16px]
            font-[500]
            leading-[23px]
          "
        >
          Photo tour
        </h2>

        {/* Reference controls:
            visual / hover only, no actions */}
        <div className="ml-auto flex gap-[2px]">
          <button
            type="button"
            aria-label="Share photos"
            className="
              grid
              h-[40px]
              w-[40px]
              cursor-pointer
              place-items-center
              rounded-full
              text-[#222222]
              transition-colors
              hover:bg-[#f7f7f7]
              active:bg-[#ebebeb]
            "
          >
            <ShareIcon size={18} />
          </button>

          <button
            type="button"
            aria-label="Save photos"
            className="
              grid
              h-[40px]
              w-[40px]
              cursor-pointer
              place-items-center
              rounded-full
              text-[#222222]
              transition-colors
              hover:bg-[#f7f7f7]
              active:bg-[#ebebeb]
            "
          >
            <HeartIcon
              size={18}
              filled={false}
              className="text-[#222222]"
            />
          </button>
        </div>
      </header>

      <div
        id="tourScroll"
        className="reference-scrollbar flex-1 overflow-y-auto"
      >
        <div className="mx-auto w-[976px]">
          <nav
            id="tourNav"
            aria-label="Photo tour rooms"
            className="mb-[40px] grid grid-cols-8 gap-[12px]"
          >
            {listing.tourRooms.map((room) => (
              <button
                key={room.id}
                type="button"
                onClick={() => scrollToRoom(room.id)}
                className="group flex flex-col gap-[8px] text-left"
              >
                <ReferenceImage
                  src={room.images[0].src}
                  alt=""
                  className="h-[105.19px] w-full rounded-[8px] object-cover filter-none transition-transform duration-[400ms] ease-[cubic-bezier(0.2,0,0,1)] group-hover:scale-[1.028] group-hover:brightness-100"
                />

                <span className="text-[14px] leading-[18.4px]">
                  {room.title}
                </span>
              </button>
            ))}
          </nav>

          <div id="tourRooms">
            {listing.tourRooms.map((room) => (
              <section
                id={`tour-room-${room.id}`}
                key={room.id}
                className="grid grid-cols-2 gap-x-[60px] gap-y-[20px] pb-[4px] pt-[16px]"
              >
                <div className="sticky top-[32px] self-start">
                  <div className="text-[32px] font-[500] leading-[1.1]">
                    {room.title}
                  </div>

                  {room.description && (
                    <div className="mt-[8px] text-[16px] leading-[1.4] text-[#717171]">
                      {room.description}
                    </div>
                  )}
                </div>

                <TourRoomGallery
                  room={room}
                  onOpenImage={onOpenLightbox}
                />
              </section>
            ))}

            <div className="h-[80px]" />
          </div>
        </div>
      </div>
    </div>
  );
}