// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [["nuxt-ssr-lit", { 
    litElementPrefix: ["rh-"],
    litElementExclude: [
      'rh-accordion',
      'rh-audio-player',
      'rh-audio-player-about',
      'rh-audio-player-subscribe',
      'rh-transcript',
      'rh-cue',
      'rh-pagination', 
      'rh-tile', 
      'rh-tabs', 
      'rh-tab', 
      'rh-tab-panel',
      'rh-subnav',
      'rh-switch',
    ]
  }]],
})