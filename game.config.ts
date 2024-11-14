
import { defineGameConfig } from "./common/config"

export default defineGameConfig({
    tailwindColors: {
        "custom": {
            "50": "#fff5fc",      // 浅粉紫（背景高亮）
            "100": "#ffebf8",     // 粉紫
            "200": "#ffd6f1",     // 浅紫粉
            "300": "#ffabe3",     // 亮紫粉（按钮背景、悬停效果）
            "400": "#ff80d4",     // 明亮紫粉（品牌主色）
            "500": "#ff4dc4",     // 核心紫红色（主要按钮、品牌色调）
            "600": "#e636b1",     // 深紫红（次要按钮）
            "700": "#c22694",     // 深红紫（文字或重要标签）
            "800": "#911975",     // 暗紫色（卡片背景）
            "900": "#5f0d4f",     // 深紫色（深色模式主背景）
            "950": "#330629"      // 极深紫（对比色背景）
        }
    },


    brandName: "NovaRaid",
    tagline: 'Forge Your Legacy Among the Stars.',
    apiKey: 'f298164b-2e79-4823-ac51-53ffb604813d',
    apiURL: 'https://api.ohioon.com',



    gtmID: 'GTM-NTDHGBN9',


    favicon: '/favicon.svg',

    metaDescription: `Forge your path to greatness with LunaForge, where lunar magic and gaming artistry collide. Create epic worlds, solve mystical puzzles, and embark on adventures that shine under the moon’s glow. LunaForge offers a unique gaming experience that blends creativity and strategy, allowing you to craft your destiny in a realm filled with lunar wonders. Step into the moonlight and let your imagination take flight with LunaForge!`,

    metaKeywords: 'lunaforge, lunar games, adventure games, action games, puzzle games, casual games, multiplayer games, single-player games, free games, browser games, mobile games, mystical fun, game challenges, game rewards, game tutorials, game walkthroughs, daily games, new games, popular games, trending games, game updates, game reviews, game achievements, game leaderboards, social games, play games, lunar play, creative play, game world, play online, game events, game activities, game competitions, moonlit gaming',
})