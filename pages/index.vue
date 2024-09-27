<template>
  <main>
    <h1>Nuxt SSR of RHDS Elements</h1>
    <h2><rh-icon set="ui" icon="check-circle-fill" style="color: #3d7317; --rh-icon-size: var(--rh-size-icon-02)"></rh-icon> Elements that currently support SSR</h2>
    <p>* as of v2.0.1 of the Red Hat Design System</p>
    <div class="grid xs-two-columns">
      <rh-cta href="#some-link">Hello world</rh-cta>

      <rh-alert>
        <h3 slot="header">Default</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est
          egestas, a sollicitudin mauris tincidunt.</p>
        <rh-button slot="actions" variant="secondary" data-action="confirm">Confirm</rh-button>
        <rh-button slot="actions" variant="link" data-action="dismiss">Cancel</rh-button>
      </rh-alert>

      <div>
        <rh-tag color="red">Red</rh-tag>
        <rh-tag color="orange">Orange</rh-tag>
        <rh-tag color="green">Green</rh-tag>
        <rh-tag color="cyan">Cyan</rh-tag>
        <rh-tag color="blue">Blue</rh-tag>
        <rh-tag color="purple">Purple</rh-tag>
        <rh-tag>Gray</rh-tag>
      </div>

      <rh-timestamp date="Tue Aug 09 2006 14:57:00 GMT-0400"></rh-timestamp>

   </div>

   <hr>

    <h2><rh-icon set="ui" icon="warning-fill" style="color: #dca614; --rh-icon-size: var(--rh-size-icon-02)"></rh-icon> Partial support </h2>
    <h3>known issue: ::slotted element on server side</h3>
    <div class="grid xs-two-columns">
      <rh-card color-palette="lightest">
        <h2 slot="header">Card</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam eleifend elit sed est egestas, a sollicitudin mauris
          tincidunt. Pellentesque vel dapibus risus. Nullam aliquam
          felis orci, eget cursus mi lacinia quis. Vivamus at felis sem.</p>
        <rh-cta slot="footer" priority="primary">
          <a href="#">Call to action</a>
        </rh-cta>
      </rh-card>
    </div>

    <hr>

    <h2><rh-icon set="ui" icon="minus-circle-fill" style="color: #b1380b; --rh-icon-size: var(--rh-size-icon-02)"></rh-icon> Elements without current SSR support</h2>
    <p>* as of v2.0.1, more support is coming in RHDS v2.1 Clefairy</p>
    <p>Examples below are client side rendered</p>
    <div class="grid xs-two-columns">

      <rh-accordion>
        <h2><rh-accordion-header>Item One</rh-accordion-header></h2>
        <rh-accordion-panel>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </rh-accordion-panel>

        <h2><rh-accordion-header>Item Two</rh-accordion-header></h2>
        <rh-accordion-panel>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </rh-accordion-panel>

        <h2><rh-accordion-header>Item Three</rh-accordion-header></h2>
        <rh-accordion-panel>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </rh-accordion-panel>
      </rh-accordion>


      <rh-pagination>
        <ol>
          <li><a href="#">1</a></li>
          <li><a href="#2">2</a></li>
          <li><a href="#3">3</a></li>
          <li><a href="#4">4</a></li>
          <li><a href="#5">5</a></li>
        </ol>
      </rh-pagination>

      <rh-tabs>
        <rh-tab id="users" slot="tab">Users</rh-tab>
        <rh-tab-panel>Users</rh-tab-panel>
        <rh-tab slot="tab">Containers</rh-tab>
        <rh-tab-panel>Containers <a href="#">Focusable element</a></rh-tab-panel>
        <rh-tab slot="tab">Database</rh-tab>
        <rh-tab-panel>Database</rh-tab-panel>
        <rh-tab slot="tab">Servers</rh-tab>
        <rh-tab-panel>Servers</rh-tab-panel>
        <rh-tab slot="tab">Cloud</rh-tab>
        <rh-tab-panel>Cloud</rh-tab-panel>
      </rh-tabs>

      <rh-tile>
        <img slot="image" src="https://fakeimg.pl/296x50" alt="296 X 50 placeholder image">
        <div slot="title">Title</div>
        <h2 slot="headline"><a href="#top">Link</a></h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <div slot="footer">Suspendisse eu turpis elementum</div>
      </rh-tile>

      <rh-switch id="switch-a" accessible-label="Switch A" message-on="Message when on" message-off="Message when off" checked=""></rh-switch>
    
    </div>

    <hr>

    <div>
      <h2>Epic fail</h2>
      <h3>Even with tags ignored cause errors in nuxt...</h3>
      <ul>
        <li>Audio player - errors on window.addEventlistener even when added to ignore list</li>
        <li>Subnavigation - errors on window.addEventlistener even when added to ignore list</li>
      </ul>
    </div>
  </main>
</template>


<script type="module">
  import '@rhds/elements/rh-accordion/rh-accordion.js';
  import '@rhds/elements/rh-alert/rh-alert.js';
  import '@rhds/elements/rh-button/rh-button.js';
  import '@rhds/elements/rh-cta/rh-cta.js';
  import '@rhds/elements/rh-card/rh-card.js';
  import '@rhds/elements/rh-pagination/rh-pagination.js';
  import '@rhds/elements/rh-switch/rh-switch.js';
  import '@rhds/elements/rh-tabs/rh-tabs.js';
  import '@rhds/elements/rh-tag/rh-tag.js';
  import '@rhds/elements/rh-tile/rh-tile.js';
  import '@rhds/elements/rh-timestamp/rh-timestamp.js';
  import '@rhds/elements/rh-icon/rh-icon.js';
  import '@rhds/icons/ui/caret-left.js'
  import '@rhds/icons/ui/caret-right.js'
  import '@rhds/icons/ui/arrow-left.js'
  import '@rhds/icons/ui/arrow-right.js'
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
    link: [
      {
        rel: 'stylesheet',
        href: '/styles/elements/rh-tile/rh-tile-lightdom.css'
      },
      {
        rel: 'stylesheet',
        href: '/styles/elements/rh-pagination/rh-pagination-lightdom.css'
      },     
      {
        rel: 'stylesheet',
        href: '/styles/styles.css'
      }      
    ]
  });
</script>