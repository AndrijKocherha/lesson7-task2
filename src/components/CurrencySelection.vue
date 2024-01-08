<template>
   <div>
      <div class="title">Виберіть валютут</div>
      <select @change="currencyChange(currency)" v-model="currency">
         <option value="грн">Гривня</option>
         <option value="$">Долар</option>
      </select>
   </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
   name: 'CurrencySelection',
   data() {
      return {
         currency: 'грн',
      }
   },
   computed: {},
   methods: {
      ...mapActions(['currencyChange']),
   },
}
</script>

<style lang="scss" scoped></style>
