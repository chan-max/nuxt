<template>
  <div class="w-full p-6 bg-custom-400 shadow-md">
    <!-- 标签容器 -->
    <div class="flex flex-wrap justify-center gap-2">
      <span
        v-for="(category, index) in categoriesData"
        :key="index"
        class="text-xs md:text-base font-medium text-white underline hover:text-custom-900 focus:text-custom-dark focus:underline transition-all duration-300 cursor-pointer"
      >
        {{ category }}
      </span>
    </div>
  </div>

  <div class="sm:my-12" v-if="carouselData.length">
    <Carousel :slides="carouselData" @playnow="playnow" @click="carouselClick" />
  </div>

  <div class="sm:my-12" v-if="categorieMapData.length">
    <GameListCard
      v-for="item in categorieMapData"
      :title="item.title"
      :games="item.data.games"
    ></GameListCard>
  </div>
</template>

<script lang="ts" setup>
import API from "@/common/api";

let { data: categoriesData } = API.getCategories();

let { data: randomGames } = API.getRandomGames({ count: 5 });

let carouselData = computed(() => {
  if (!randomGames.value) {
    return [];
  }
  return (randomGames.value as Array<any>).map((item) => {
    return {
      ...item,
      tags: item.tags.split(","),
    };
  });
});

/**
 * @method 点击playnow
 */
function playnow(item) {
  debugger;
}

/**
 * @method 点击轮播图图片，进入详情
 */
function carouselClick(item) {
  debugger;
}

const loading = ref(true);

/**
 * @struct 首页热搜游戏数据结构
 * */
const categorieMapData = ref([] as Array<any>);

onMounted(async () => {
  try {
    // 获取分类
    const { data: categoryData } = await API.getTopCategories();

    await Promise.all(
      (categoryData.value as Array<string>).map(async (category) => {
        const { data: searchData } = await API.searchGames({
          category: category,
          page: 1,
          pageSize: 12,
        });
        categorieMapData.value.push({
          title: category,
          data: searchData.value,
        });
      })
    );

    console.log(JSON.parse(JSON.stringify(categorieMapData.value)));
  } catch (error) {
    console.error("请求错误", error);
  } finally {
    loading.value = false;
  }
});
</script>
