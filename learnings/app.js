// hello world
const app1 = new Vue({
  el: '#app1',
  data: {
    message: 'hello world 2',
    msg: 'bah bah',
  },
})

// v-if v-show
const app2 = new Vue({
  el: '#app2',
  data: {
    message: 'hello world 2',
    showText: false,
  },
})

// v-for
const app3 = new Vue({
  el: '#app3',
  data: {
    list: ['ali alavi', 'taghi ghorbani', 'mmd ghanbari'],
  },
})

// v-mode;
const app4 = new Vue({
  el: '#app4',
  data: {
    userInput: 'taghi',
  },
})

// V-bind
const app5 = new Vue({
  el: '#app5',
  data: {
    title2: 'you are seeing pop up title',
  },
})

// V-on
const app6 = new Vue({
  el: '#app6',
  data: {
    clickHandler: console.log,
  },
})

// component
Vue.component('username-item', {
  template: '<li> {{ user }} </li>',
  props: ['user'],
})

const app7 = new Vue({
  el: '#app7',
  data: {
    list: ['ali alavi', 'taghi ghorbani', 'mmd ghanbari'],
    clickHandler: function () {
      app7.$data.list = ['ali alavi']
    },
  },
})

app7.$el === document.getElementById('app7')

app7.$watch('list', function (pre, next) {
  console.log(next)
})
