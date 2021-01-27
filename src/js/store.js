
import { createStore } from 'framework7/lite';
import { request } from 'framework7';
import { f7, f7ready } from "framework7-vue";
import axios from 'axios'

const store = createStore({
  state: {
    items: [],
    ledgers: [],
  },
  getters: {
    items({ state }) {
      return state.items;
    },
    ledgers({ state }) {
      return state.ledgers;
    }
  },
  actions: {
    //
    async get_items({ state }) {         
      fetch('http://localhost:8080/item_list/item_list')
        .then((res) => res.json())
        .then((items) => {              
          state.items = items;               
        })           
    },
    
    async get_ledgers({ state }) {         
      fetch('http://localhost:8080/Ledger/ledger_list')
        .then((res) => res.json())
        .then((ledgers) => {              
          state.ledgers = ledgers;               
        })           
    },
    //ends
    loginAuthentication({ state }, {data}) {
      request.post('http://localhost:8080/Login/login_authentication',JSON.stringify(data))
             .then((res)=>{
               if(res.data!=""){
                 localStorage.setItem('usergroup',res.data)
                }
               console.log(localStorage.getItem('usergroup'));
               f7.views.main.router.navigate('/home/')
             })
      
    },
  },
})
export default store;
