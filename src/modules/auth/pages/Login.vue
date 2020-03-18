<template>
  <v-app id="inspire" >
    <v-content >
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-6" color="pransparent">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer />
              </v-toolbar>

              <v-card-text>
                <v-text-field label="Login" prepend-icon="mdi mdi-account-lock" type="text"/>
                <v-text-field label="Password"  prepend-icon="mdi mdi-lock" type="password"/>
            
                  <v-btn block color="primary">Login</v-btn>
              </v-card-text>

            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>


<script>
import { mapGetters } from "vuex";
import  http from '@/http'

export default {
  computed: {
    ...mapGetters("auth", ["getUser"]),
    
    
  },

  methods:{
    
    async doLogin(){
      var data = {
        user: 'lukas',
        password:'motta'
      }
      try {

        const response = await http.authLogin(data)
        console.log(response)
      } catch (error) {
        console.erro(error)
      }
       
    }
  },
  created() {
   // this.doLogin()
  
   // http.auth.resetPassword({user:'lukas'})
    console.log("teste get user", this.doLogin());
  }
}
</script>

<style>

</style>