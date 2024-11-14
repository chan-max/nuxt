
import { defineGameConfig } from "./common/config"

export default defineGameConfig({
    tailwindColors: {
        "custom": {
            "50": "#fff5eb",     // 浅橙粉
            "100": "#fee4d4",    // 浅橙色（背景高亮）
            "200": "#fdc4a2",    // 浅橙红
            "300": "#fb926b",    // 橙红色（按钮背景、悬停效果）
            "400": "#f86842",    // 鲜橙色（品牌主色）
            "500": "#f53d1a",    // 核心烈焰色（主要按钮、品牌色调）
            "600": "#d43015",    // 深红橙（次要按钮）
            "700": "#a42411",    // 暗红橙（文字高亮）
            "800": "#71190c",    // 暗红色（卡片背景）
            "900": "#3f0c06",    // 深棕红（深色模式主背景）
            "950": "#200503"     // 极深棕（对比色背景）
        }
    }
    ,


    brandName: "HexBlaze",
    tagline: 'Ignite the Power, Shape the Unknown.',
    apiKey: 'f298164b-2e79-4823-ac51-53ffb604813d',
    apiURL: 'https://api.ohioon.com',


    gtmID: 'GTM-PRWCQRCM',


    favicon: '/favicon.svg',

    metaDescription: `Forge your path to greatness with LunaForge, where lunar magic and gaming artistry collide. Create epic worlds, solve mystical puzzles, and embark on adventures that shine under the moon’s glow. LunaForge offers a unique gaming experience that blends creativity and strategy, allowing you to craft your destiny in a realm filled with lunar wonders. Step into the moonlight and let your imagination take flight with LunaForge!`,

    metaKeywords: 'lunaforge, lunar games, adventure games, action games, puzzle games, casual games, multiplayer games, single-player games, free games, browser games, mobile games, mystical fun, game challenges, game rewards, game tutorials, game walkthroughs, daily games, new games, popular games, trending games, game updates, game reviews, game achievements, game leaderboards, social games, play games, lunar play, creative play, game world, play online, game events, game activities, game competitions, moonlit gaming',
})