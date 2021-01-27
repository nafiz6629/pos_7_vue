<template>
  <div class="page">
    <div class="navbar">
      <div class="navbar-bg"></div>
      <div class="navbar-inner">
        <div class="title">Item List</div>
      </div>
    </div>
    <div class="page-content">    
      <!-- <div class="block-title">Songs</div> -->
      <div class="list media-list">
        <ul>
          <li v-for="product in items" :key="product">
            <!-- <a href="/item-details/2" class="item-link item-content"> -->
            <a href="'/item-details/${product.product_name}'" class="item-link item-content">
              <div class="item-media"><img :src="product.thumbnail_image_url"
                  width="80" /></div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">{{product.product_name}}</div>                  
                  <div class="item-after">Qty: {{product.stock}}</div>
                </div>
                <div class="item-subtitle">SKU: {{product.product_code}} || Category: {{product.category_name}} || Price: {{product.unit_price}} </div>
              </div>
            </a>
          </li>
          
        </ul>
      </div>      
    </div>
  </div>
</template>
<script>
import store from '../../js/store';

import { onMounted } from 'vue'; 
import { useStore } from 'framework7-vue';

  export default {
  setup() {   
      const items = useStore('items');
      onMounted(() => {      
        store.dispatch('get_items') 
       
      });

      return {
        items,
      }
      
    },
      
    
  }
  
</script>

<style>
.demo-list-icon,
.icon-f7 {
  background: #ccc;
  display: block;
  position: relative;
}
.ios .demo-list-icon,
.ios .icon-f7,
.ios .icon-vi {
  width: 29px;
  height: 29px;
  border-radius: 6px;
  box-sizing: border-box;
}
.md .demo-list-icon,
.md .icon-f7,
.md .icon-vi {
  width: 24px;
  height: 24px;
  border-radius: 4px;
}
.aurora .demo-list-icon,
.aurora .icon-f7,
.aurora .icon-vi {
  width: 18px;
  height: 18px;
  border-radius: 4px;
}



</style>