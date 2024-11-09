<template>
  <div>
    <h1>产品列表</h1>
    <div class="product-list">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
    <button @click="loadMore">加载更多</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProductCard from "~/components/ProductCard.vue";

const products = ref([]);
const limit = ref(10);
const offset = ref(0);

const fetchProducts = async () => {
  const response = await fetch(
    `https://fakestoreapi.com/products?limit=${limit.value}&offset=${offset.value}`
  );
  const data = await response.json();
  products.value.push(...data);
};

const loadMore = () => {
  offset.value += limit.value;
  fetchProducts();
};

// 初始加载
fetchProducts();
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap; /* 允许换行 */
  justify-content: center; /* 居中对齐 */
}

.product-card {
  flex: 0 0 calc(25% - 20px); /* 每个产品卡片占据25%的宽度，并留出间距 */
  margin: 10px; /* 每个卡片的外边距 */
}

.product-image {
  width: 100%; /* 图片宽度100% */
}
</style>
