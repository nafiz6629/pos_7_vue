<template>
  <f7-app v-bind="f7params">
    <!-- Left panel with cover effect when hidden -->
    <f7-panel left cover theme-dark :visible-breakpoint="960">
      <f7-view>
        <f7-page>
          <f7-navbar title="Left Panel"></f7-navbar>
          <f7-block-title>Left View Navigation</f7-block-title>
          <f7-list>
            <f7-list-item
              link="/left-page-1/"
              title="Left Page 1"
            ></f7-list-item>
            <f7-list-item
              link="/left-page-2/"
              title="Left Page 2"
            ></f7-list-item>
              <f7-button panel-close="left" @click="logout" raised fill>Logout</f7-button>
          </f7-list>
          <f7-block-title>Control Main View</f7-block-title>
          <f7-list>
            <f7-list-item
              link="/about/"
              view=".view-main"
              panel-close
              title="About"
            ></f7-list-item>
            <f7-list-item
              link="/form/"
              view=".view-main"
              panel-close
              title="Form"
            ></f7-list-item>
            <f7-list-item
              link="#"
              view=".view-main"
              back
              panel-close
              title="Back in history"
            ></f7-list-item>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-panel>

    <!-- Right panel with reveal effect-->
    <f7-panel right reveal theme-dark>
      <f7-view>
        <f7-page>
          <f7-navbar title="Right Panel"></f7-navbar>
          <f7-block-title>Accounts</f7-block-title>
          <f7-list>
            <f7-list-item
              link="/left-page-1/"
              title="Sale Report"
            ></f7-list-item>
            <f7-list-item
              link="/left-page-2/"
              title="Purchase Report"
            ></f7-list-item>
            <f7-list-item link="/left-page-2/" title="Day Book"></f7-list-item>
            <f7-list-item
              link="/left-page-2/"
              title="All Transactions"
            ></f7-list-item>
            <f7-list-item
              link="/left-page-2/"
              title="Income Statement"
            ></f7-list-item>
            <f7-list-item
              link="/left-page-2/"
              title="Cashflow Statement"
            ></f7-list-item>
            <f7-list-item
              link="/left-page-2/"
              title="Balance Sheet"
            ></f7-list-item>
          </f7-list>
          <f7-block-title>Inventory</f7-block-title>
          <f7-list>
            <f7-list-item
              link="/form/"
              view=".view-main"
              title="Analysis"
            ></f7-list-item>
            <f7-list-item
              link="/about/"
              view=".view-main"
              title="Live Stock"
            ></f7-list-item>
            <f7-list-item
              link="/form/"
              view=".view-main"
              panel-close
              title="Inventory Journal"
            ></f7-list-item>
            <f7-list-item
              link="/form/"
              view=".view-main"
              title="Item Leger"
            ></f7-list-item>
            <f7-list-item
              link="/form/"
              view=".view-main"
              title="Inventory Balance Sheet"
            ></f7-list-item>
            <f7-list-item
              link="/form/"
              view=".view-main"
              title="Item Wise Balance Sheet"
            ></f7-list-item>
            <f7-list-item
              link="/form/"
              view=".view-main"
              title="Item Wise Profit And Loss"
            ></f7-list-item>
            <f7-list-item
              link="/form/"
              view=".view-main"
              title="Inventory Log Book"
            ></f7-list-item>
            <f7-list-item
              link="/form/"
              view=".view-main"
              title="Item List"
            ></f7-list-item>
          </f7-list>
          <f7-block>Right panel content goes here</f7-block>
        </f7-page>
      </f7-view>
    </f7-panel>

    <!-- Your main view, should have "view-main" class -->
    <f7-view browser-history browser-history-separator="" main class="safe-areas" url="/"></f7-view>

    <!-- Popup -->
    <f7-popup id="my-popup">
      <f7-view>
        <f7-page>
          <f7-navbar title="Popup">
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>
            <p>Popup content goes here.</p>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>

    <f7-login-screen id="my-login-screen">
      <f7-view>
        <f7-page login-screen>
          <f7-login-screen-title>Login</f7-login-screen-title>
          <f7-list form>
            <f7-list-input
              type="text"
              name="username"
              placeholder="Your username"
              v-model:value="username"
            ></f7-list-input>
            <f7-list-input
              type="password"
              name="password"
              placeholder="Your password"
              v-model:value="password"
            ></f7-list-input>
          </f7-list>
          <f7-list>
            <f7-list-button
              title="Sign In"
              @click="alertLoginData"
            ></f7-list-button>
            <f7-block-footer>
              Some text about login information.<br />Click "Sign In" to close
              Login Screen
            </f7-block-footer>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-login-screen>
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
  methods:{
    logout(){
      f7.views.main.router.navigate('/login/')
    }
  }
};
</script>