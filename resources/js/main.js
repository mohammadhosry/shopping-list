import Vue from 'vue';
import ShoppingList from './components/ShoppingList';

Vue.component('shopping-list', ShoppingList)

new Vue({
    el: '#app',
})