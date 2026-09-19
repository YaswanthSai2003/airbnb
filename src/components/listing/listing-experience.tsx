"use client";

import { useCallback, useEffect, useState } from "react";
import { AirbnbHeader } from "@/components/header/airbnb-header";
import { Lightbox } from "@/components/lightbox/lightbox";
import { AmenitiesModal } from "@/components/listing/amenities-modal";
import { HeroGallery } from "@/components/listing/hero-gallery";
import { ListingHeader } from "@/components/listing/listing-header";
import { ListingMainContent } from "@/components/listing/listing-main-content";
import { StickySectionNav } from "@/components/listing/sticky-section-nav";
import { PhotoTour } from "@/components/photo-tour/photo-tour";
import { allTourImages, listing } from "@/data/listing";

const MODAL_NAME = "PHOTO_TOUR_SCROLLABLE";
const MODAL_ITEM_BASE = 1000;

const HERO_ROOM_IDS = [
  "living-room-2",
  "living-room-2",
  "living-room-2",
  "bedroom",
  "exterior",
] as const;

function indexFromModalItem(value: string | null) {
  if (!value) return null;

  const modalItem = Number(value);
  if (!Number.isInteger(modalItem)) return null;

  const index = modalItem - MODAL_ITEM_BASE;
  if (index < 0 || index >= allTourImages.length) return null;

  return index;
}

function modalItemFromIndex(index: number) {
  return MODAL_ITEM_BASE + index;
}

export function ListingExperience() {
  const [saved, setSaved] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [tourOpen, setTourOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [amenitiesOpen, setAmenitiesOpen] = useState(false);
  const [tourRoomTarget, setTourRoomTarget] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
  };

  const toggleSaved = () => {
    setSaved((value) => {
      const next = !value;
      showToast(next ? "Saved to wishlist" : "Removed from wishlist");
      return next;
    });
  };

  const share = () => {
    showToast("Share options");
  };

  const writeModalUrl = useCallback((index?: number | null) => {
    const url = new URL(window.location.href);

    url.searchParams.set("modal", MODAL_NAME);

    if (typeof index === "number") {
      url.searchParams.set("modalItem", String(modalItemFromIndex(index)));
    } else {
      url.searchParams.delete("modalItem");
    }

    url.hash = "";
    window.history.replaceState(null, "", `${url.pathname}${url.search}`);
  }, []);

  const clearModalUrl = useCallback(() => {
    const url = new URL(window.location.href);
    url.searchParams.delete("modal");
    url.searchParams.delete("modalItem");
    window.history.replaceState(null, "", `${url.pathname}${url.search}`);
  }, []);

  const syncFromUrl = useCallback(() => {
    const url = new URL(window.location.href);
    const hasTour = url.searchParams.get("modal") === MODAL_NAME;
    const requestedIndex = indexFromModalItem(url.searchParams.get("modalItem"));

    setTourOpen(hasTour);

    if (hasTour && requestedIndex !== null) {
      setLightboxIndex(requestedIndex);
      setLightboxOpen(true);
    } else {
      setLightboxOpen(false);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.appReady = "true";

    // Defer the initial URL sync so the effect itself only performs external
    // synchronization/subscription work. This also satisfies React 19's
    // set-state-in-effect lint rule while preserving deep-link behaviour.
    const initialSyncId = window.setTimeout(syncFromUrl, 0);

    window.addEventListener("popstate", syncFromUrl);

    return () => {
      window.clearTimeout(initialSyncId);
      window.removeEventListener("popstate", syncFromUrl);
      delete document.documentElement.dataset.appReady;
    };
  }, [syncFromUrl]);

  useEffect(() => {
    if (!toast) return;

    const id = window.setTimeout(() => setToast(null), 2200);
    return () => window.clearTimeout(id);
  }, [toast]);

  const openPhotoTour = () => {
    setTourRoomTarget(null);
    setLightboxOpen(false);
    setTourOpen(true);
    writeModalUrl(null);
  };

  const openHeroPhoto = (heroIndex: number) => {
    const roomId = HERO_ROOM_IDS[heroIndex] ?? null;

    setTourRoomTarget(roomId);
    setLightboxOpen(false);
    setTourOpen(true);
    writeModalUrl(null);
  };

  const closeTour = () => {
    setTourRoomTarget(null);
    setLightboxOpen(false);
    setTourOpen(false);
    clearModalUrl();
  };

  const openLightbox = (index: number) => {
    setTourOpen(true);
    setLightboxIndex(index);
    setLightboxOpen(true);
    writeModalUrl(index);
  };

  const changeLightboxIndex = (index: number) => {
    setLightboxIndex(index);
    writeModalUrl(index);
  };

  const backToPhotoTour = () => {
    setLightboxOpen(false);
    writeModalUrl(null);
  };

  return (
    <>
      <a
        href="#main"
        className="fixed left-[-999px] top-0 z-[200] rounded-md bg-white px-4 py-2 text-[14px] shadow focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <AirbnbHeader />

      <StickySectionNav
        onReserve={() => showToast("You won't be charged yet")}
      />

      <main id="main" className="pb-[56px]">
        <ListingHeader
          title={listing.title}
          saved={saved}
          onToggleSaved={toggleSaved}
          onShare={share}
        />

        <HeroGallery
          images={listing.heroImages}
          onOpenPhoto={openHeroPhoto}
          onShowAllPhotos={openPhotoTour}
        />

        <ListingMainContent
          onOpenAmenities={() => setAmenitiesOpen(true)}
          onReserve={() => showToast("You won't be charged yet")}
        />
      </main>

      <PhotoTour
        open={tourOpen}
        saved={saved}
        onToggleSaved={toggleSaved}
        onShare={share}
        onClose={closeTour}
        initialRoomId={tourRoomTarget}
        onOpenLightbox={openLightbox}
      />

      <Lightbox
        open={lightboxOpen}
        index={lightboxIndex}
        onIndexChange={changeLightboxIndex}
        onClose={backToPhotoTour}
        onBackToGrid={backToPhotoTour}
      />

      <AmenitiesModal
        open={amenitiesOpen}
        onClose={() => setAmenitiesOpen(false)}
      />

      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-[36px] left-1/2 z-[220] -translate-x-1/2 rounded-[8px] bg-[#222] px-[18px] py-[14px] text-[14px] font-[500] text-white shadow-lg"
        >
          {toast}
        </div>
      )}
    </>
  );
}
