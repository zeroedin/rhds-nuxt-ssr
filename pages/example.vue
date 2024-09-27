<template>
  <h2>Popular products</h2>
  <div>
    <rh-card>
      <div slot="header">
        <h3>Red Hat Enterprise Linux</h3>
      </div>
    </rh-card>
  </div>
</template>

<script type="module">
import "@rhds/elements/rh-card/rh-card.js";
</script>

<script setup>
useHead({
  script: [
    {
      type: 'module',
      innerHTML: `
        import '/javascript/dsd-polyfill.js';
      `
    },
  ],
});
</script>