<template>
  <div id="app">
    <adfit-banner
      :ad-test="N"
      :ad-unit="DAN-qec5f2maqlpi"
      @:ad-loaded="adLoaded"
      @:ad-failed="adFailed"
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
      // eslint-disable-next-line no-unused-vars
      adLoaded (el) {
        console.info('Ad Loaded')
      },
      // eslint-disable-next-line no-unused-vars
      adFailed (el) {
        console.error('Ad Failed')
      }
    }
  };
</script>
