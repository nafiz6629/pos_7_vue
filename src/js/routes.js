
import HomePage from '../pages/home.vue';
import EmptyPage from '../pages/empty.vue';
import LoginPage from '../pages/login.vue';
import AboutPage from '../pages/about.vue';
import FormPage from '../pages/form.vue';

import SupplierPage from '../pages/supplier/index.vue';



import ItemsPage from '../pages/itemlist/items.vue';
import ItemDetails from '../pages/itemlist/item-details.vue';
import LedgerPage from '../pages/ledger/index.vue';

import LeftPage1 from '../pages/left-page-1.vue';
import LeftPage2 from '../pages/left-page-2.vue';
import DynamicRoutePage from '../pages/dynamic-route.vue';
import RequestAndLoad from '../pages/request-and-load.vue';
import NotFoundPage from '../pages/404.vue';

var routes = [
  {
    path: '/',
    component: EmptyPage,
  },
  {
    path: '/login/',
    component: LoginPage,
  },
  {
    path: '/home/',
    component: HomePage,
  },
  //supplier starts
  {
    path: '/supplier/',   
    component: SupplierPage,      
  },
  //supplier ends
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },

  {
    path: '/left-page-1/',
    component: LeftPage1,
  },
  {
    path: '/left-page-2/',
    component: LeftPage2,
  },
  // starts
  {
    path: '/item-list/',
    component: ItemsPage,
    props:  true 
  },
    

  {
    path: '/item-details/:id',   
    component: ItemDetails,
    props:true   
  },

  {
    path: '/customer/',   
    component: LedgerPage,      
  },
  {
    path: '/ledger/',   
    component: LedgerPage,      
  },
  // ends 
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
