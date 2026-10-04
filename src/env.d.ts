/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="astro-integration-lottie/env" />
import type { ThemeChangedEvent } from "./events";

declare global {
  interface GlobalEventHandlersEventMap {
    'themechanged': ThemeChangedEvent;
  }
}

export {};
