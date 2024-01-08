import { createStore } from 'vuex'
import { productsList } from '@/constants/productsList'
const dollarRate = 45
export default createStore({
   state: {
      productsList: productsList,
      cartProdList: [
         { id: 9, name: 'Банани', price: 80 },
         { id: 10, name: 'Печиво', price: 50 },
      ],
      currencyVal: 'грн',
   },
   getters: {
      products: ({ productsList }) => productsList,
      cartProdList: ({ cartProdList }) => cartProdList,
      currencyVal: ({ currencyVal }) => currencyVal,
      sumToPay(state) {
         return state.cartProdList.reduce((prevSum, product) => (prevSum += product.price), 0)
      },
      currentPrice: (state) => (price) => {
         if (state.currencyVal === 'грн') return price
         else return (price /= dollarRate).toFixed(2)
      },
   },
   mutations: {
      onBuyProduct(state, id) {
         this.commit('changeProductPossition', { id, listFrom: 'productsList', listTo: 'cartProdList' })
      },
      onRefuseProduct(state, id) {
         this.commit('changeProductPossition', { id, listFrom: 'cartProdList', listTo: 'productsList' })
      },
      changeProductPossition(state, pl) {
         let prodToReplace = state[pl.listFrom].find((product) => product.id === pl.id)
         state[pl.listFrom] = state[pl.listFrom].filter((product) => product.id !== pl.id)
         state[pl.listTo].push(prodToReplace)
      },
      onPayForProducts(state) {
         state.cartProdList = []
      },
      onCurrencyChange(state, currency) {
         state.currencyVal = currency
      },
   },
   actions: {
      buyProduct({ commit }, id) {
         commit('onBuyProduct', id)
      },
      refuseProduct({ commit }, id) {
         commit('onRefuseProduct', id)
      },
      payForProducts({ commit }) {
         commit('onPayForProducts')
      },
      currencyChange({ commit }, currency) {
         commit('onCurrencyChange', currency)
      },
   },
   modules: {},
})
