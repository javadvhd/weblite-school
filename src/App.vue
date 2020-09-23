<template>
  <div id="app">
    <TheAppbar :changePage="changePage" />
    <TheRestaurants
      v-if="page==='list'"
      :restaurants="restaurants"
      :showRestaurant="showRestaurant"
    />
    <TheOrders v-else-if="page==='orders'" :userSelects="userSelects" />
    <TheRestaurant
      v-else-if="page==='singleRestaurnat'"
      :restaurant="currentRestaurant"
      :addToCart="addToCart"
    />
  </div>
</template>

<script>
import TheRestaurants from "./components/TheRestaurants";
import TheOrders from "./components/TheOrders";
import TheAppbar from "./components/TheAppbar";
import rawDatas from "./helper/data";
import TheRestaurant from "./components/TheRestaurant";
export default {
  name: "App",
  components: {
    TheRestaurants,
    TheOrders,
    TheAppbar,
    TheRestaurant
  },
  data: () => ({
    page: "list",
    restaurants: [],
    user: {},
    currentRestaurant: {}
  }),
  created: function() {
    this.restaurants = rawDatas.restaurants;
    this.user = rawDatas.user;
  },
  methods: {
    changePage: function(page) {
      this.page = page;
    },
    showRestaurant: function(restaurantId) {
      this.currentRestaurant = this.restaurants.find(
        restaurant => restaurant.id === restaurantId
      );
      this.page = "singleRestaurnat";
    },
    addToCart: function(foodId) {
      const restId = this.user.cart.restaurantId;
      if (restId && restId !== this.currentRestaurant.id)
        window.alert("نمیتوانید از دو رستوران متفاوت سفارش دهید");
      else {
        this.user.cart.restaurantId = this.currentRestaurant.id;
        this.user.cart.items.push(foodId);
        window.alert("غذا به سبد خرید اضافه شد");
      }
    }
  },
  computed: {
    userSelects: function() {
      return this.user.cart.items.map(item => {
        const restaurantFoods = this.restaurants.find(
          restaurant => restaurant.id === this.user.cart.restaurantId
        ).foods;
        return restaurantFoods.find(food => food.id === item);
      });
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
