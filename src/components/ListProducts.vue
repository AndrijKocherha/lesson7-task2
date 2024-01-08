<template>
   <div class="products-list">
      <div class="title">Список товарів</div>
      <product-item v-for="product in products" :key="product.id" :product="product" />
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductItem from './ProductItem.vue'
export default {
   name: 'ListProducts',
   computed: {
      ...mapGetters(['products']),
   },
   components: { ProductItem },
}
</script>

<style lang="scss" scoped>
.products-list {
   padding: 5px;
   border: 1px solid #000;
}
</style>
