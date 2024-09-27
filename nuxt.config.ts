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
      'rh-subnav'
    ]
  }]],
  vite: {
    build: {
      target: 'esnext',
    },
  },
  hooks: {
    'vite:extendConfig'(config, { isServer }) {
      console.log(
        isServer ? 'server' : 'client',
        'config target is',
        config.build!.target
      );
    },
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext'
      },
    },
    // moduleSideEffects: [
    //   '@rhds/elements/rh-alert/rh-alert.js',
    //   '@rhds/elements/rh-button/rh-button.js',
    //   '@rhds/elements/rh-cta/rh-cta.js',
    //   '@rhds/elements/rh-card/rh-card.js',
    //   '@rhds/elements/rh-pagination/rh-pagination.js',
    //   '@rhds/elements/rh-tabs/rh-tabs.js',
    //   '@rhds/elements/rh-tag/rh-tag.js',
    //   '@rhds/elements/rh-tile/rh-tile.js',
    //   '@rhds/elements/rh-icon/rh-icon.js',
    //   '@rhds/icons/microns/arrow-right.js',
    //   '@rhds/icons/ui/arrow-right.js',
    // ]
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.includes("-"),
    },
  },
})