/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="astro-integration-lottie/env" />
declare global {
  function loadLottie(id?: string): Promise<void>;
}

export {};
