<template>
  <div>
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
      }
    },
    components: {},
    computed: {
      ...mapGetters([])
    }
  }
</script>
