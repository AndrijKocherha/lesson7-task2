<template>
   <div class="product-item">
      <div class="product-item__name">{{ product.name }}</div>
      <div class="product-item__ation">
         <div class="product-item__price">{{ currentPrice(product.price) }} {{ currencyVal }}</div>
         <button @click="buyProduct(product.id)" class="product-item__btn">Купити</button>
      </div>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
   name: 'ProductItem',
   props: {
      product: {
         type: Object,
         required: true,
      },
   },
   computed: {
      ...mapGetters(['currencyVal', 'currentPrice']),
   },
   methods: {
      ...mapActions(['buyProduct']),
   },
}
</script>

<style lang="scss" scoped>
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
