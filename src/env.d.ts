/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
declare global {
  function loadLottie(): Promise<void>;
}

export {};
