<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar large :sliding="false">
      <f7-nav-left>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title sliding>POS Layer</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
      <f7-nav-title-large>POS Layer</f7-nav-title-large>
    </f7-navbar>
    <!-- wefewf -->
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
              <f7-button color="red" panel-close="left" @click="logout" raised fill>Logout</f7-button>
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
    <!-- wefewf -->

    <!-- ewfewfewf -->
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
            <f7-list-item link="/customer/" view=".view-main" title="Customer"></f7-list-item>
            <f7-list-item link="/ledger/" view=".view-main" title="Ledger"></f7-list-item>
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
              link="/item-list/"
              view=".view-main"
              title="Item List"
            ></f7-list-item>
            
          </f7-list>
          <f7-block>Right panel content goes here</f7-block>
        </f7-page>
      </f7-view>
    </f7-panel>
    <!-- ewfewfewf -->
    <!-- Toolbar-->
    <f7-toolbar bottom>
      <f7-link>Left Link</f7-link>
      <f7-link>Right Link</f7-link>
    </f7-toolbar>
    <!-- Page content-->
    <f7-block strong>
      <p>This is an example of split view application layout, commonly used on tablets. The main approach of such kind of layout is that you can see different views at the same time.</p>

      <p>Each view may have different layout, different navbar type (dynamic, fixed or static) or without navbar.</p>

      <p>The fun thing is that you can easily control one view from another without any line of JavaScript just using "data-view" attribute on links.</p>
    </f7-block>
    <f7-block-title>Navigation</f7-block-title>
    <f7-list>
      <f7-list-item link="/about/" title="About"></f7-list-item>
      <f7-list-item link="/form/" title="Form"></f7-list-item>
      <f7-list-item link="/login/" title="login"></f7-list-item>
    </f7-list>

    <f7-block-title>Modals</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col width="50">
          <f7-button fill raised popup-open="#my-popup">Popup</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button fill raised login-screen-open="#my-login-screen">Login Screen</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block-title>Panels</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col width="50">
          <f7-button fill raised panel-open="left">Left Panel</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button fill raised panel-open="right">Right Panel</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-list>
      <f7-list-item
        title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      ></f7-list-item>
      <f7-list-item
        title="Default Route (404)"
        link="/load-something-that-doesnt-exist/"
      ></f7-list-item>
      <f7-list-item
        title="Request Data & Load"
        link="/request-and-load/user/123456/"
      ></f7-list-item>
    </f7-list>
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