<template>
  <div
    class="bg-custom-900 text-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
  >
    <!-- Game Thumbnail -->
    <div class="relative">
      <NuxtLink :to="`/detail/${game.id}`">
        <img
          :src="game.thumb"
          :alt="game.title"
          class="w-full h-36 sm:h-48 object-cover cursor-pointer"
        />
      </NuxtLink>
      <a
        @click.stop="playnow"
        target="_blank"
        class="absolute bottom-3 right-3 bg-flame-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold hover:bg-flame-400 transition-colors cursor-pointer shadow-md"
      >
        Play Now
      </a>
    </div>
    <!-- Game Details -->
    <div class="p-4 flex flex-col space-y-3">
      <!-- Title -->
      <h2 class="text-base sm:text-lg font-extrabold text-flame-500">
        {{ game.title }}
      </h2>
      <!-- Description -->
      <p
        class="text-xs sm:text-sm text-gray-300 overflow-hidden overflow-ellipsis"
        style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical"
      >
        {{ game.description }}
      </p>
      <!-- Tags -->
      <div class="flex flex-wrap gap-2">
        <template v-for="tag in formatTags(game.tags)" :key="tag">
          <span
            @click="tagClick(tag)"
            class="bg-custom-800 text-custom-300 px-2 py-1 rounded-full text-xs sm:text-sm cursor-pointer hover:bg-custom-700 transition"
            :title="getTagTitle(tag)"
          >
            <NuxtLink to="/search">
              {{ tag }}
            </NuxtLink>
          </span>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { searchClickEventBus } from "~/common/eventBus";
import { searchContent, searchType, SearchTypes } from "~/common/search";

defineProps({
  game: {
    type: Object,
    required: true,
  },
});

const router = useRouter();
const emits = defineEmits(["playnow"]);

function playnow(game) {
  emits("playnow", game);
}

// 格式化标签，最多显示8个标签
function formatTags(tags) {
  return tags.split(",").slice(0, 8);
}

function tagClick(tag) {
  searchType.value = SearchTypes.Tags;
  searchContent.value = tag;
  searchClickEventBus.emit(tag);
}

// 动态生成标签的title，假设我们希望显示 "Browse games with [tag]"
function getTagTitle(tag) {
  return `Browse games with the "${tag}" tag.`;
}
</script>
