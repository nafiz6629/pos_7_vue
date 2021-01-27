
import { createStore } from 'framework7/lite';
import { request } from 'framework7';
import { f7, f7ready } from "framework7-vue";
import axios from 'axios'

const store = createStore({
  state: {
    items: [],
    ledgers: [],
    suppliers: [],
  },
  getters: {
    items({ state }) {
      return state.items;
    },
    ledgers({ state }) {
      return state.ledgers;
    },
    suppliers({ state }) {
      return state.suppliers;
    }
  },
  actions: {
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
    //suppliers
    async get_suppliers({ state }) {         
      fetch('http://localhost:8080/Supplier/supplier_list')
        .then((res) => res.json())
        .then((suppliers) => {              
          state.suppliers = suppliers;               
        })           
    },
    //suppliers ends
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
    
  },
})
export default store;
