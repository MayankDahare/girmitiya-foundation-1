import { useSyncExternalStore } from "react";

/* A minimal History-API router. Paths are real URLs (/about/vision) so
   in-page anchors (#programs) keep working as plain fragments. */

const listeners = new Set();

function subscribe(callback) {
  listeners.add(callback);
  window.addEventListener("popstate", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("popstate", callback);
  };
}

const getPath = () => window.location.pathname.replace(/\/+$/, "") || "/";

export function usePath() {
  return useSyncExternalStore(subscribe, getPath);
}

export function navigate(to) {
  const url = new URL(to, window.location.href);
  window.history.pushState({}, "", url.pathname + url.search + url.hash);
  listeners.forEach((listener) => listener());
}

/* Document-level click handler: turns same-origin links to another path into
   client-side navigations. Same-path links (pure #hash) are left to the
   browser so its native anchor scrolling still applies. */
export function handleLinkClick(event) {
  if (event.defaultPrevented || event.button !== 0) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  const anchor = event.target.closest?.("a[href]");
  if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

  const url = new URL(anchor.href, window.location.href);
  if (url.origin !== window.location.origin) return;
  if ((url.pathname.replace(/\/+$/, "") || "/") === getPath()) return;

  event.preventDefault();
  navigate(url.href);
}
