<template>
  <div
    class="bg-custom-800 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 text-white"
  >
    <!-- Game Thumbnail -->
    <div class="relative group">
      <a :href="`/detail/${game.id}`">
        <img
          :src="game.thumb"
          :alt="game.title"
          class="w-full h-40 object-cover cursor-pointer group-hover:opacity-80 transition-opacity duration-300"
        />
      </a>
      <a
        @click.stop="playnow"
        target="_blank"
        class="absolute bottom-2 right-2 bg-flame-500 text-white px-3 py-1 rounded-full text-xs font-semibold hover:bg-flame-600 transition-colors cursor-pointer shadow-md"
      >
        Play Now
      </a>
    </div>
    <!-- Game Details -->
    <div class="p-4 flex flex-col space-y-3">
      <h2 class="text-base font-bold text-flame-400">{{ game.title }}</h2>
      <p
        class="text-sm text-gray-300 overflow-hidden overflow-ellipsis"
        style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical"
      >
        {{ game.description }}
      </p>
      <div class="flex flex-wrap gap-2">
        <template v-for="tag in formatTags(game.tags)" :key="tag">
          <span
            @click="tagClick(tag)"
            class="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs cursor-pointer hover:bg-gray-600 hover:text-white transition"
            :title="getTagTitle(tag)"
          >
            {{ tag }}
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
  router.push({ path: "/search" });
  searchClickEventBus.emit(tag);
}

// 动态生成标签的title，假设我们希望显示 "Browse games with [tag]"
function getTagTitle(tag) {
  return `Browse games with the "${tag}" tag.`;
}
</script>
