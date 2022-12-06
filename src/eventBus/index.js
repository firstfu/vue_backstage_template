import Vue from 'vue'

/**
 * 定義空的vue實例，作為 eventBus實現非父子組件之間的通信
 */
const eventBus = new Vue({})

export default eventBus
