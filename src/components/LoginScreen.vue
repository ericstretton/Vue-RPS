<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-1">
          My RPS Log-in Screen
        </h1>
        <v-alert v-if="isAlert" type="error">
          Error, Please Try Again.
        </v-alert>
        <v-alert v-if="isLoggedIn" type="success">
          Log-in Attempt Successful.
        </v-alert>
        <v-text-field
              v-model="username"
              label="Username"
              clearable
        ></v-text-field>
          <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min, rules.max,]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
            <v-btn
              elevation ="2"
              color = primary
              @click="login">
              Log in
              </v-btn>
            <v-btn
              elevation ="2"
              color = "red lighten-2"
              @click="logout">
              Log out
            </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

  export default {
    name: 'LoginScreen',

    data: () => {
      return{
        username : undefined, 
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: 'Password',
        isAlert: false,
        isLoggedIn: false,
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          max: v => v.length <= 25 || 'Max 25 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },
      }
    },
    methods: {
      login() {
        axios.request({
          url: 'https://reqres.in/api/login',
          method: `POST`,
          headers : {
            'Content-Type' : 'application/json'
          },
          data: {
            "email": this.username,
            "password": this.password
          },
        }).then((response)=>{
          cookies.set('sessionToken', response.data.token),
          this.isAlert = false;
          this.isLoggedIn = true;
          this.$router.push({path: "GameView"})
          console.log(response);
        }).catch((error)=>{
          this.isAlert = true;
          this.isLoggedIn = false;
          console.log(error);
        })
      },
      logout(){
        cookies.remove('sessionToken');
      }
    },
  }
</script>
