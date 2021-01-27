<template>
<f7-page>
  <f7-navbar title="Cards"></f7-navbar> 


  <f7-block-title>Styled Cards</f7-block-title>
 
  <f7-card class="demo-card-header-pic">
    <f7-card-header
      class="no-border"
      valign="bottom"
      style="background-image:url(https://cdn.framework7.io/placeholder/people-1000x600-6.jpg)"
    >Journey To Mountains </f7-card-header>
    <f7-card-content>
      <p class="date">Posted on January 21, 2015 </p>
      <p>Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...</p>
    </f7-card-content>
    <f7-card-footer>
      <f7-link>Like</f7-link>
      <f7-link>Read more</f7-link>
    </f7-card-footer>
  </f7-card>

  
</f7-page>
</template>

<script>
import { computed } from 'vue';
import store from '../../js/store';
  export default{
  // props:[
  //   id
  // ]

  // data()
  // {
  //   return {
  //     product_id: this.$route.params.product_id
  //   };
  // },
  computed:{
    //user();
    // products(){
    //  console.log(this.$route.params.product_id);
    //   return store.state.products.find(
    //     products =>product.product_id === this.product_id
    //   );
    
    },


  //   }
  methods:{
// user()
// {
//   console.log($route.params.id);
// }
  }

   

  }
</script>

<style>
  .demo-card-header-pic .card-header {
    height: 40vw;
    background-size: cover;
    background-position: center;
    color: #fff;
  }
  .demo-card-header-pic .card-content-padding .date{
    color: #8e8e93;
  }
  .demo-facebook-card .card-header {
    display: block;
    padding: 10px;
  }
  
  .demo-facebook-card .card-footer {
    background: #fafafa;
  }
  .theme-dark .demo-facebook-card .card-footer {
    background-color: transparent;
  }
  .demo-facebook-card .card-footer a {
    color: #81848b;
    font-weight: 500;
  }
  .demo-facebook-card .card-content img {
    display: block;
  }
  .demo-facebook-card .card-content-padding {
    padding: 15px 10px;
  }
  .demo-facebook-card .card-content-padding .likes {
    color: #8e8e93;
  }

</style>
