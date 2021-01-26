<template>
  <f7-page name="empty">

  </f7-page>
</template>

<script>
import { f7, f7ready } from "framework7-vue";

export default {
   methods:{
    logout(){
      // console.log(localStorage.getItem('usergroup'))
      localStorage.removeItem('usergroup')
      // console.log(localStorage.getItem('usergroup'))
      f7.views.main.router.navigate('/login/')
    }
  }
}
</script>