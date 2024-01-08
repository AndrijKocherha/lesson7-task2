<template>
   <div>
      <shop-manager />
   </div>
</template>

<script>
import ShopManager from './components/ShopManager.vue'

export default {
   name: 'App',
   components: { ShopManager },
}
</script>

<style lang="scss">
.title {
   font-size: 20px;
   margin-bottom: 20px;
}
.product-item {
   display: flex;
   max-width: 300px;
   justify-content: space-between;
   gap: 20px;
   &:not(:last-child) {
      margin-bottom: 10px;
   }
   // .product-item__name
   &__name {
   }
   // .product-item__ation
   &__ation {
      display: flex;
      gap: 20px;
   }
   // .product-item__price
   &__price {
   }
   // .product-item__btn
   &__btn {
   }
}
</style>
