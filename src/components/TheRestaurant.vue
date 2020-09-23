<template>
  <div>
    <h1>{{restaurant.name}}</h1>
    <h1>{{restaurant.address}}</h1>
    <Table style="width:100%">
      <thead>
        <th>Foods</th>
      </thead>
      <tbody>
        <tr
          class="restaurantFood"
          v-for="food in restaurant.foods"
          :key="food.id"
          v-on:click="addToCart(food.id)"
        >
          <td>{{food.name}}</td>
        </tr>
      </tbody>
    </Table>
  </div>
</template>

<script>
export default {
  name: "TheRestaurant",
  props: {
    restaurant: Object,
    addToCart: Function
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table,
tr,
td {
  width: 100%;
  border: 1px dashed black;
}
.restaurantFood {
  cursor: pointer;
  height: 30px;
}
</style>
