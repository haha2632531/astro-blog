---
author: Sat Naing
pubDatetime: 2026-11-13
modDatetime: 2026-11-13
title: 二十年如梦一场
featured: true
draft: false
tags:
  - agent
  - ai
description: 通过 CSS 变量调整浅色与深色配色，并控制明暗模式开关。
---
又逢农历七月十五，恍然之间，已是整整二十年。

总忍不住翻起你的年岁，二十载光阴流转，四季更迭二十轮，许多人事都慢慢模糊，可关于你的细碎记忆，依旧清晰地嵌在心底，从未褪色。

身为家里的长子，早早便分家立户，独自扛起了自己的四口之家的重担。从我记事起，你就常年跟着建筑项目四处奔波讨生活。为了养家糊口，你常年远赴外省，足迹落在五河、大庆、哈尔滨...这些遥远的地方。

我的童年，几乎都是在“等你回家”中度过。一年到头，唯有过年短短数日，方能盼到你归来的身影。

你一辈子勤恳节俭，向来舍不得亏待家人，却唯独苦了自己。平日里身体偶有不适，也总当作小事，咬牙扛过。总盼着等孩子们成家立业，便能好好歇一歇，不再奔波劳碌，未曾想，就此永久停歇。

刚开始那几年，我常常会做梦。梦里都是你，你并没有离开，只是去了很远很远的北方务工，太忙、太累，没有时间回家。还曾听人说过，在哪里哪里见过你。我甚至梦过自己去找你，还真被我找到了，只是你不认识我了。带你回家，可你始终沉默寡言，从来不跟我多说一句话，早出晚归。就这样相处了好几个月，还是收拾行囊出远门了...岁月是无声的良药，也是无声的告别。

往后数年，梦见你的次数越来越少了，才偶然梦见一次。再往后的十几年，梦境愈发稀少，时至今日，已是许久不曾于梦里见你。

当年那个日日盼你回家的小孩，如今亦是两个孩子的父亲。也扛起家庭的责任、辛劳与牵挂，才终于读懂，当年你常年漂泊在外的无奈。

二十年人事匆匆，岁岁年年，思念从未消散。我常常悄悄期许，能否再有一次机会，好好做一次有你的梦。倘若梦中得以相见，便备上一杯好酒，敬你半生劳苦，纵然无言，远远看上一眼也好。

山河依旧，岁月绵长。把酒遥怀，念自心上.


| Color Property | Definition & Usage |
| -------------------- | ---------------------------------------------------------- |
| `--color-fill` | Primary color of the website. Usually the main background. |
| `--color-text-base` | Secondary color of the website. Usually the text color. |
| `--color-accent` | Accent color of the website. Link color, hover color etc. |
| `--color-card` | Card, scrollbar and code background color (like `this`). |
| `--color-card-muted` | Card and scrollbar background color for hover state etc. |
| `--color-border` | Border color. Especially used in horizontal row (hr) |


Here is an example of changing the light color scheme.

```css
@layer base {
  /* lobster color scheme */
  :root,
  html[data-theme="light"] {
    --color-fill: 246, 238, 225;
    --color-text-base: 1, 44, 86;
    --color-accent: 225, 74, 57;
    --color-card: 220, 152, 145;
    --color-card-muted: 233, 119, 106;
    --color-border: 220, 152, 145;
  }
}
```

> Check out some [predefined color schemes](https://astro-paper.pages.dev/posts/predefined-color-schemes/) AstroPaper has already crafted for you.

