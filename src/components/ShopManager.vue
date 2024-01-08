<template>
   <div>
      <div class="shop-head">
         <list-products />
         <currency-selection />
      </div>
      <shopping-cart-products />
   </div>
</template>

<script>
import ShoppingCartProducts from './ShoppingCartProducts.vue'
import CurrencySelection from './CurrencySelection.vue'
import ListProducts from './ListProducts.vue'

export default {
   name: 'ShopManager',
   components: { ListProducts, CurrencySelection, ShoppingCartProducts },
}
</script>

<style lang="scss" scoped>
.shop-head {
   display: flex;
   gap: 40px;
   margin-bottom: 20px;
}
</style>
