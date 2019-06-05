<template>
  <div id="app">
    <adfit-banner
      ad-test="N"
      ad-unit="DAN-qec5f2maqlpi"
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
