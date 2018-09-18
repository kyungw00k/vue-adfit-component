import Banner from '@/components/Banner.vue'

const plugin = {
  install: Vue => {
    Vue.component('adfit-banner', Banner)
  }
}

Banner.install = plugin.install

export default {
  Banner
}
