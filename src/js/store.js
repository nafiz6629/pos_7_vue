
import { createStore } from 'framework7/lite';
import { request } from 'framework7';
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
               localStorage.setItem('usergroup',res.data)
              //  console.log(localStorage.getItem('usergroup'));

             })
      
    },
  },
})
export default store;
