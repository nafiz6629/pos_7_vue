
import { createStore } from 'framework7/lite';
import { request } from 'framework7';
import { f7, f7ready } from "framework7-vue";

const store = createStore({
  state: {

  },
  getters: {
    products({ state }) {
      return state.products;
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
  },
})
export default store;
