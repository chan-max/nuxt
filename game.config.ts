
import { defineGameConfig } from "./common/config"

export default defineGameConfig({
    tailwindColors: {
        "custom": {
            "50": "#e8fbf2",     // 浅青绿（背景高亮）
            "100": "#c6f8e3",    // 柔和青绿
            "200": "#8ff4c9",    // 明亮绿青
            "300": "#54dfae",    // 青绿色（按钮悬停）
            "400": "#2ac495",    // 主绿色（强调按钮）
            "500": "#0ea371",    // 深青绿（核心品牌色）
            "600": "#087e58",    // 深绿（次要色调）
            "700": "#055943",    // 暗绿（标题高亮）
            "800": "#032d22",    // 深暗绿（背景）
            "900": "#010f0c",    // 极暗绿（深色模式背景）
            "950": "#000704",    // 极暗黑绿（对比背景）
        }
    },


    brandName: "InfernoQuest",
    tagline: 'The Ultimate Destination for Gamers!',
    apiKey: 'f298164b-2e79-4823-ac51-53ffb604813d',
    apiURL: 'https://api.ohioon.com',



    gtmID: 'GTM-NTDHGBN9',


    favicon: '/favicon.png',

    metaDescription: `Forge your path to greatness with LunaForge, where lunar magic and gaming artistry collide. Create epic worlds, solve mystical puzzles, and embark on adventures that shine under the moon’s glow. LunaForge offers a unique gaming experience that blends creativity and strategy, allowing you to craft your destiny in a realm filled with lunar wonders. Step into the moonlight and let your imagination take flight with LunaForge!`,

    metaKeywords: 'lunaforge, lunar games, adventure games, action games, puzzle games, casual games, multiplayer games, single-player games, free games, browser games, mobile games, mystical fun, game challenges, game rewards, game tutorials, game walkthroughs, daily games, new games, popular games, trending games, game updates, game reviews, game achievements, game leaderboards, social games, play games, lunar play, creative play, game world, play online, game events, game activities, game competitions, moonlit gaming',
})