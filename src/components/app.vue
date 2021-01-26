<template>
  <f7-app  v-bind="f7params">
    <f7-view browser-history browser-history-separator="" main class="safe-areas" url="/"></f7-view>


  </f7-app>
</template>
<script>
import { ref, onMounted } from "vue";
import { f7, f7ready } from "framework7-vue";
import { getDevice } from "../js/framework7-custom.js";
import cordovaApp from "../js/cordova-app.js";
import routes from "../js/routes.js";
import store from "../js/store";
export default {
  setup() {
    const device = getDevice();
    // Framework7 Parameters
    const f7params = {
      name: "POS Layer", // App name
      theme: "auto", // Automatic theme detection

      id: "io.framework7.poslayerapp", // App bundle ID
      // App store
      store: store,
      // App routes
      routes: routes,
      // Register service worker
      serviceWorker: {
        path: "/service-worker.js",
      },

      // Input settings
      input: {
        scrollIntoViewOnFocus: device.cordova && !device.electron,
        scrollIntoViewCentered: device.cordova && !device.electron,
      },
      // Cordova Statusbar settings
      statusbar: {
        iosOverlaysWebView: true,
        androidOverlaysWebView: false,
      },
    };
    // Login screen data
    const username = ref("");
    const password = ref("");

    const alertLoginData = () => {
      f7.dialog.alert(
        "Username: " + username.value + "<br>Password: " + password.value,
        () => {
          f7.loginScreen.close();
        }
      );
    };
    onMounted(() => {
      f7ready(() => {
        // Init cordova APIs (see cordova-app.js)
        if (device.cordova) {
          cordovaApp.init(f7);
        }

        // Call F7 APIs here
      });
    });

    return {
      f7params,
      username,
      password,
      alertLoginData,
    };
  },
  mounted(){
    if(localStorage.getItem('usergroup')!=null){
      // console.log(localStorage.getItem('usergroup'))
    }
    else{
      f7.views.main.router.navigate('/login/')

    }
  },
  methods:{
    logout(){
      // console.log(localStorage.getItem('usergroup'))
      localStorage.removeItem('usergroup')
      // console.log(localStorage.getItem('usergroup'))
      f7.views.main.router.navigate('/login/')
    }
  }
};
</script>