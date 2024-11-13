<template>
  <div
    class="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
  >
    <!-- Game Thumbnail -->
    <div class="relative">
      <a :href="`/detail/${game.id}`">
        <img
          :src="game.thumb"
          :alt="game.title"
          class="w-full h-40 object-cover cursor-pointer"
        />
      </a>
      <button
        @click.stop="playnow(game)"
        target="_blank"
        class="absolute bottom-3 right-3 bg-custom-500 text-white px-3 py-1 rounded-full text-sm font-semibold hover:bg-custom-600 transition-colors"
      >
        Play Now
      </button>
    </div>
    <!-- Game Details -->
    <div class="p-4 flex flex-col space-y-3">
      <!-- Title -->
      <h2 class="text-base font-bold text-gray-800 truncate">
        {{ game.title }}
      </h2>
      <!-- Description -->
      <p
        class="text-sm text-gray-600 overflow-hidden overflow-ellipsis"
        style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical"
      >
        {{ game.description }}
      </p>
      <!-- Tags -->
      <div class="flex flex-wrap gap-2">
        <template v-for="tag in formatTags(game.tags)" :key="tag">
          <span
            @click="tagClick(tag)"
            class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs cursor-pointer hover:bg-gray-200 hover:text-gray-800 transition"
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

<style>
/* Optional: Add any specific global or scoped styles here */
</style>
