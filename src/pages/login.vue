<template>
<f7-page no-toolbar no-navbar no-swipeback login-screen>
  <f7-login-screen-title>Framework7</f7-login-screen-title>
  <f7-list form>
    <f7-list-input
      label="Username"
      type="text"
      placeholder="Your username"
      v-model:value="username"
    ></f7-list-input>
    <f7-list-input
      label="Password"
      type="password"
      placeholder="Your password"
      v-model:value="password"
    ></f7-list-input>
  </f7-list>
  <f7-list>
    <f7-list-button @click="signIn">Sign In</f7-list-button>
    <f7-block-footer>Some text about login information.<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</f7-block-footer>
  </f7-list>
</f7-page>
</template>

<script>
import store from '../js/store';

export default {

  data(){
    var username = "";
    var password = "";
    return{
      username,
      password
    }
  },
  methods:{
    signIn(){
        var data={
          username:this.username,
          password:this.password
        }
        store.dispatch('loginAuthentication',{data:data});
    }
  }
}
</script>
