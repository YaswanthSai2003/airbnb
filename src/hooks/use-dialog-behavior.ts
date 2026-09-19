"use client";

import { RefObject, useEffect } from "react";

const focusableSelector = [
  "button:not([disabled])",
  "a[href]",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

export function useDialogBehavior(
  open: boolean,
  containerRef: RefObject<HTMLElement | null>,
  initialFocusRef: RefObject<HTMLElement | null>,
  onEscape: () => void,
) {
  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => initialFocusRef.current?.focus(), 0);

    const onKeyDown = (event: KeyboardEvent) => {
      const root = containerRef.current;
      if (!root) return;

      // Nested dialogs can coexist (Photo Tour -> Lightbox). Only the dialog
      // that currently owns focus handles Escape/Tab, so Escape closes one
      // layer at a time and focus can return to the originating control.
      const active = document.activeElement;
      const ownsFocus = active instanceof Node && root.contains(active);

      if (event.key === "Escape") {
        if (!ownsFocus) return;
        event.preventDefault();
        onEscape();
        return;
      }

      if (event.key !== "Tab" || !ownsFocus) return;
      const items = Array.from(root.querySelectorAll<HTMLElement>(focusableSelector)).filter(
        (el) => !el.hasAttribute("disabled") && el.getAttribute("aria-hidden") !== "true",
      );
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.();
    };
  }, [open, containerRef, initialFocusRef, onEscape]);
}
