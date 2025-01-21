<template>
  <div class="flex flex-col items-center justify-start min-h-screen py-8 gap-6">
    <!-- 页面标题 -->
    <h1 class="title">Configuration</h1>

    <!-- 页面描述 -->
    <p class="description">Please configure the settings as per your requirements.</p>

    <!-- 外层容器，带有半透明的淡粉色边框 -->
    <div class="input-container">
      <!-- 输入框 -->
      <input
        v-model="configStore.config"
        type="text"
        placeholder="Enter configuration"
        class="input-field"
      />

      <!-- 提交按钮 -->
      <button @click="handleSubmit" class="submit-btn">Submit</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useConfigStore } from "~/common/store";

// 获取 config 仓库
const configStore = useConfigStore();

// 提交处理函数
const handleSubmit = () => {
  // 提交逻辑可以放这里
  console.log("Configuration submitted:", configStore.config);
};
</script>

<style scoped>
/* 设置标题和描述的样式 */
h1 {
  font-size: 6rem;
  font-weight: bold;
  color: #333;
}

p {
  font-size: 1.25rem;
  color: #999;
  max-width: 600px;
  text-align: center;
}

/* 外层容器，带有半透明的淡粉色边框 */
.input-container {
  display: flex;
  align-items: center;
  gap: 6px; /* 输入框和按钮之间的间距 */
  max-width: 720px; /* 增加容器的最大宽度，原来的 500px 增加 1.5 倍 */
  width: 100%;
  height: 72px; /* 增加容器的高度 */
  border: 4px solid rgba(234, 100, 217, 0.3); /* 半透明淡粉色边框 */
  border-radius: 999px; /* 最大圆角效果 */
  overflow: hidden; /* 确保输入框和按钮保持圆角 */
  padding: 4px 12px; /* 外部容器内边距 */
}

/* 输入框样式 */
.input-field {
  flex: 1; /* 使输入框占满容器 */
  padding: 16px 24px; /* 增加内边距 */
  font-size: 1.125rem; /* 增大字体 */
  border: none; /* 去除输入框的默认边框 */
  outline: none; /* 去除输入框的默认聚焦边框 */
  border-radius: 999px 0 0 999px; /* 左侧最大圆角 */
  background-color: #fff; /* 设置背景为白色 */
  color: #333; /* 设置字体颜色 */
  transition: box-shadow 0.3s; /* 输入框的过渡效果 */
}

/* 按钮样式 */
.submit-btn {
  padding: 12px 16px; /* 按钮的内边距（比原来小） */
  font-size: 1rem; /* 按钮的字体大小更小 */
  background-color: #f06292; /* 设置按钮背景颜色为粉色 */
  color: white; /* 设置按钮文字颜色 */
  border: none; /* 去除默认边框 */
  border-radius: 999px; /* 右侧最大圆角 */
  cursor: pointer; /* 鼠标悬浮时变成指针 */
  transition: background-color 0.3s; /* 按钮的过渡效果 */
}

/* 按钮悬停效果 */
.submit-btn:hover {
  background-color: #ec407a; /* 鼠标悬停时按钮颜色变暗 */
}

/* 输入框聚焦时的效果 */
.input-field:focus {
}

/* 按钮聚焦时的效果 */
.submit-btn:focus {
  outline: none; /* 去掉默认聚焦边框 */
}
</style>
