<template>
  <v-app>
    <template>
      <Painel v-if="token">
        <router-view></router-view>
      </Painel>
      
      <template else>
        <router-view></router-view>
      </template>
    </template>
  </v-app>
</template>

<script>
 import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    Painel: () => import("@/modules/painel/pages/Painel")
  },

  data() {
    return {};
  },

  computed: {
    ...mapGetters("auth", ["getToken"]),
    token(){
      return !! this.getToken
    }
  },

  methods:{

  }
};
</script>
