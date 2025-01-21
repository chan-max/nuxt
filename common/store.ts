import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', () => {
  // 定义状态，用于存储 config.json 的数据
  const config = ref<Record<string, any>>({})

  // 定义方法，用于初始化数据
  const init = async () => {
    try {
      // 使用 fetch 从本地读取 config.json
      const response = await fetch('/config.json')
      if (!response.ok) {
        throw new Error(`Failed to load config.json: ${response.statusText}`)
      }
      const data = await response.json()
      config.value = data // 将读取到的数据存入仓库
    } catch (error) {
      console.error('Error loading config.json:', error)
    }
  }

  return {
    config,
    init
  }
})
