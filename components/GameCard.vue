<template>
  <div
    class="bg-white border border-200 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
  >
    <!-- Game Thumbnail -->
    <div class="relative">
      <a :href="`/detail/${game.id}`">
        <img
          :src="game.thumb"
          :alt="game.title"
          class="w-full h-44 object-cover cursor-pointer"
        />
      </a>
      <button
        @click.stop="playnow(game)"
        class="absolute bottom-4 right-4 bg-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md hover:bg-400 hover:shadow-lg transition-transform transform hover:scale-110"
      >
        Play Now
      </button>
    </div>
    <!-- Game Details -->
    <div class="p-4 flex flex-col space-y-3">
      <!-- Title -->
      <h2 class="text-lg font-semibold text-900 truncate">
        {{ game.title }}
      </h2>
      <!-- Description -->
      <p
        class="text-sm text-700 overflow-hidden"
        style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical"
      >
        {{ game.description }}
      </p>
      <!-- Tags -->
      <div class="flex flex-wrap gap-2">
        <template v-for="tag in formatTags(game.tags)" :key="tag">
          <span
            @click="tagClick(tag)"
            class="bg-100 text-800 px-3 py-1 rounded-full text-xs font-medium cursor-pointer border border-200 hover:bg-200 hover:border-400 hover:text-900 transition"
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

const emits = defineEmits(["playnow"]);

// Emit "play now" event
function playnow(game) {
  emits("playnow", game);
}

// Format tags: limit to 8 maximum
function formatTags(tags) {
  return tags.split(",").slice(0, 8);
}

// Handle tag click
function tagClick(tag) {
  searchType.value = SearchTypes.Tags;
  searchContent.value = tag;
  router.push({ path: "/search" });
  searchClickEventBus.emit(tag);
}

// Generate title for tags
function getTagTitle(tag) {
  return `Browse games with the "${tag}" tag.`;
}
</script>
