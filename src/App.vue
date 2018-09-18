<template>
  <div id="app">
    <adfit-banner
      ad-test="Y"
      ad-unit="05d24"
      v-on:ad-loaded="adLoaded"
      v-on:ad-failed="adFailed"
    />
  </div>
</template>

<script>
  export default {
    name: "App",
    data () {
      return {};
    },
    methods: {
      adLoaded (el) {
        console.info('Ad Loaded')
      },
      adFailed (el) {
        console.error('Ad Failed')
      }
    }
  };
</script>
