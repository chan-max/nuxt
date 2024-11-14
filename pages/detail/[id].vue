<template>
  <div class="max-w-5xl mx-auto py-6 px-4 lg:px-8 bg-white rounded-lg shadow-md">
    <!-- 上部内容：图片和基本信息 -->
    <div class="flex flex-col md:flex-row items-start gap-8">
      <!-- 左侧图片 -->
      <div class="flex-shrink-0 w-full md:w-2/5">
        <img
          :src="data?.thumb"
          :alt="data?.title"
          class="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <!-- 右侧标题和基本信息 -->
      <div class="flex-1">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">{{ data?.title }}</h1>
        <p class="text-gray-700 text-lg leading-relaxed mb-4">
          {{ data?.description }}
        </p>
        <div class="flex flex-wrap gap-2 items-center">
          <button
            class="px-6 py-2 bg-custom-500 text-white rounded-lg text-sm font-semibold hover:bg-custom-600 transition"
            @click="playnow"
          >
            Play Now
          </button>
          <div class="flex flex-wrap gap-2 mt-2">
            <span
              v-for="tag in data?.tags?.split(', ')"
              :key="tag"
              class="bg-gray-100 text-gray-800 px-3 py-1 rounded-lg text-sm border border-gray-300"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- 下部内容 -->
    <div class="mt-8 grid gap-8 md:grid-cols-3">
      <!-- 游戏分类 -->
      <div>
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Game Details</h2>
        <ul class="text-gray-700 leading-relaxed">
          <li><strong>Category:</strong> {{ data?.category }}</li>
          <li><strong>Width:</strong> {{ data?.width }} px</li>
          <li><strong>Height:</strong> {{ data?.height }} px</li>
        </ul>
      </div>

      <!-- 游戏说明 -->
      <div class="md:col-span-2">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">How to Play</h2>
        <p class="text-gray-700 leading-relaxed">{{ data?.instructions }}</p>
      </div>
    </div>

    <!-- 分享功能 -->
    <div class="mt-8">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">Contact</h2>
      <SocialShareList />
    </div>
  </div>
</template>

<script setup lang="ts">
import API from "@/common/api";
import SocialShareList from "@/components/SocialShareList.vue";
import { useGameModal } from "~/common/useGameModal";
import { useLoading } from "~/common/useLoading";

const route = useRoute();
const id = route.params.id;

// 获取游戏详情数据
const { data, pending } = API.getGamesById({ id: id as string });

const { openGameModal } = useGameModal();

const { startLoading, stopLoading } = useLoading();

watchEffect(() => {
  if (pending.value) {
    startLoading();
  } else {
    stopLoading();
  }
});

function playnow() {
  openGameModal(data.value);
}
</script>
