<template>
   <div class="cart">
      <div class="title">Корзина</div>
      <div v-if="cartProdList.length !== 0" class="cart__body">
         <div class="cart__list">
            <div v-for="product in cartProdList" :key="product.id" class="product-item">
               <div class="product-item__name">{{ product.name }}</div>
               <div class="product-item__ation">
                  <div class="product-item__price">{{ currentPrice(product.price) }} {{ currencyVal }}</div>
                  <button @click="refuseProduct(product.id)" class="product-item__btn">Відмовитись</button>
               </div>
            </div>
         </div>
         <div class="cart__check product-item">
            <div class="product-item__name">Разом до оплати</div>
            <div class="product-item__ation">
               <div class="product-item__price">{{ currentPrice(sumToPay) }} - {{ currencyVal }}</div>
               <button @click="payForProducts()" class="product-item__btn">Оплатити</button>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
   name: 'ShoppingCartProducts',
   computed: {
      ...mapGetters(['cartProdList', 'currencyVal', 'sumToPay', 'currentPrice']),
   },
   methods: {
      ...mapActions(['refuseProduct', 'payForProducts']),
   },
}
</script>

<style lang="scss" scoped>
.cart {
   display: inline-block;
   &__body {
      padding: 5px;
      border: 1px solid #000;
   }
   &__list {
      &:not(:last-child) {
         margin-bottom: 30px;
      }
   }
}
</style>
