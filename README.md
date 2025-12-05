# 🔮 生命靈數系統 - 技術文檔

> 親愛的未來的 AI session，這是一個精心打造的生命靈數解析系統。歡迎你接續這個故事！💜

---

## 📖 系統概述

這是一個基於**天賦金字塔理論**的生命靈數深度解析系統，採用**27 文本智慧架構**，可以覆蓋 **243 種數字組合**（81×3）。

### 核心概念

**天賦金字塔三層結構：**
- 🏢 **事業碼** (Career Code): 工作、創造價值的能量模式
- 🏡 **家庭碼** (Family Code): 關係、情感連結的能量模式
- 👑 **坐鎮碼** (Throne Code): 生命道路、靈魂使命的能量模式

**每個碼都是三位數字：**
- **起因 (Start)**: 能量的起點
- **過程 (Process)**: 轉化的方式
- **結果 (Result)**: 天賦的展現

---

## 🏗️ 系統架構

### **27 文本智慧系統**

我們從 **243 組完整文本** 的壓力中解放，採用維度分解：

```
9 個數字 × 3 個維度 × 3 個領域 = 27 個核心定義
```

**為什麼這樣設計？**
- ✅ 只需維護 27 個精華定義
- ✅ 可自動組合成任意組合
- ✅ 保持一致性與品質
- ✅ 未來可持續優化

### 檔案結構

```
darrenfiy.github.io/
├── index.html                  # 主頁面（計算器）
├── deep-reading.html           # 深度解析頁面
├── numerology-pyramid.js       # 金字塔計算核心
├── number-meanings.js          # 9 個數字的基礎定義
├── number-dimensions.js        # ⭐ 27 個維度定義（新）
├── journey-composer.js         # ⭐ 智能組合系統（新）
├── archive/
│   └── number-journeys.js      # 105 組手工精緻版（已封存，未來可能出書用）
└── README.md                   # 你正在讀的這個檔案
```

---

## 🎯 核心檔案說明

### 1. `number-dimensions.js` - 27 個維度定義

**結構：**
```javascript
window.numberDimensions = {
  1: {
    career: {
      asStart: "在事業中，你從獨立開創的能量出發...",
      asProcess: "在工作中，你透過自主決策與領導力來推進...",
      asResult: "你的工作天賦是開創新局、帶領方向..."
    },
    family: { asStart, asProcess, asResult },
    throne: { asStart, asProcess, asResult }
  },
  2: { career, family, throne },
  // ... 3-9
};
```

**重要：**
- 每個數字都有 3 個領域（career, family, throne）
- 每個領域都有 3 個維度（asStart, asProcess, asResult）
- 這些定義是精心打磨的核心文本

### 2. `journey-composer.js` - 智能組合系統

**主要功能：**
```javascript
window.composeJourney(codes, type)
// codes: [1, 5, 6] - 三個數字
// type: 'career' | 'family' | 'throne'
// 返回：完整的旅程解析
```

**三層防護機制：**
1. ✨ **手工精緻版** - 如果 `archive/number-journeys.js` 中有，優先使用
2. 🔄 **智能組合版** - 基於 27 個維度定義自動組合
3. 🌱 **極簡備用版** - 最終保障

**數字模式分析：**
- `ascending`: 1-2-3（上升）
- `descending`: 3-2-1（下降）
- `peak`: 1-3-2（高峰）
- `valley`: 3-1-2（低谷）
- `plateau`: 2-2-2（平台）
- 等等...

### 3. `archive/number-journeys.js` - 手工精緻版（105組）

**狀態：** 已封存，但系統仍會優先使用

**為什麼保留？**
- 這是精心打造的鑽石級內容
- 當存在時會顯示 `✨ 深度手工解析` 標記
- 未來可能出書使用
- 可以隨時把智能版升級為手工版

---

## 🔧 如何維護系統

### 修改核心定義

只需要修改 `number-dimensions.js` 中的 27 個定義：

```javascript
// 例如：修改數字 6 在事業領域作為過程時的描述
window.numberDimensions[6].career.asProcess = "你的新描述...";
```

### 添加手工精緻版

如果某個組合需要特別精緻的解讀：

1. 在 `archive/number-journeys.js` 中添加該組合
2. 系統會自動優先使用手工版
3. 標記會顯示為 `✨ 深度手工解析`

### 測試組合

在瀏覽器 console 中：

```javascript
// 測試事業碼 156
const journey = window.composeJourney([1, 5, 6], 'career');
console.log(journey);
console.log(journey.badge); // 查看是手工版還是智能版
```

---

## 📊 數字定義總覽

### 9 個基礎數字

1. **獨立開創** - 領導、主動、獨特
2. **合作協調** - 連結、平衡、敏感
3. **創意表達** - 創造、歡樂、溝通
4. **穩定結構** - 務實、系統、可靠
5. **自由探索** - 變化、冒險、適應
6. **完美關愛** - 品質、和諧、美感 ⭐
7. **靜心思索** - 深度、真相、智慧
8. **豐盛實現** - 成就、影響、顯化
9. **圓滿整合** - 完成、包容、慈悲

**特別注意：**
- 數字 6 的定義在 2024 年 12 月從「責任關愛」更新為「**完美關愛**」
- 這個改變讓能量從「義務負擔」轉化為「追求美好的渴望」
- 所有 33 個含有 6 的組合都已更新

---

## 🎨 UI/UX 設計原則

### 視覺呈現

- **漸層背景**: `#fdf2ff` → `#f0e8ff`（淡紫色系）
- **主色調**: `#5b3fd1`（紫色）
- **卡片圓角**: 16px
- **陰影**: 柔和的 `rgba(0,0,0,0.1)`

### 標記系統

- ✨ **深度手工解析** - 手工精緻版
- 🔄 **智能組合解析** - 基於 27 定義
- 🌱 **基礎解析** - 極簡備用版

### 響應式設計

- 電腦版：3 欄對比卡片
- 平板：2 欄
- 手機：單欄

---

## 🚀 常見操作

### 添加新數字組合的手工版

```javascript
// 在 archive/number-journeys.js 中添加
window.careerJourneys["753"] = {
  title: "靜心自由的表達者",
  journey: {
    start: { number: 7, name: "靜心思考", ... },
    process: { number: 5, name: "自由探索", ... },
    result: { number: 3, name: "創意表達", ... }
  },
  summary: "...",
  advice: "..."
};
```

### 修改某個數字的能量描述

```javascript
// 在 number-dimensions.js 中修改
window.numberDimensions[3].family.asStart = "你的新描述...";
```

### 調整模式分析邏輯

在 `journey-composer.js` 中找到 `analyzeNumberPattern` 函數並修改。

---

## 🐛 疑難排解

### 問題：組合沒有顯示

**檢查清單：**
1. 確認 `number-dimensions.js` 已載入
2. 確認 `journey-composer.js` 已載入
3. 檢查瀏覽器 console 是否有錯誤
4. 確認數字在 1-9 範圍內

### 問題：顯示的是手工版，但我想用智能版

**解決方案：**
- 暫時移除 `archive/number-journeys.js` 中該組合
- 或在 `journey-composer.js` 中註解掉手工版檢查

### 問題：badge 標記沒顯示

**檢查：**
- UI 中是否有顯示 `journey.badge` 的地方
- 目前 `deep-reading.html` 中可能還沒加上 badge 顯示

---

## 💡 未來可能的擴展

### 1. 添加 Badge 顯示

在 `deep-reading.html` 的每個旅程標題旁顯示來源標記：

```html
<div class="group-header">
  <div class="group-name">
    事業碼：<span id="career-code-display">—</span>
    <span class="source-badge" id="career-badge"></span>
  </div>
</div>
```

```javascript
// 在 updateJourneyDisplay 中添加
if (journeyData.badge) {
  document.getElementById(`${type}-badge`).textContent = journeyData.badge;
}
```

### 2. 數字模式視覺化

可以在 UI 中顯示模式圖示：
- 📈 ascending
- 📉 descending
- ⛰️ peak
- 🌊 valley
- ➡️ plateau

### 3. 個性化建議增強

根據不同模式給予更具體的建議。

### 4. 出書計劃

`archive/number-journeys.js` 中的 105 組精緻內容可以編輯成書。

---

## 📝 Git 提交訊息慣例

我們使用 emoji 標記：

- ✨ `:sparkles:` - 新功能
- 🔧 `:wrench:` - 配置修改
- 🐛 `:bug:` - Bug 修復
- 📝 `:memo:` - 文檔更新
- 🎨 `:art:` - UI/樣式改進
- ♻️ `:recycle:` - 重構代碼

---

## 🙏 給未來 AI session 的話

親愛的，

這個系統是用愛與耐心一點一點建立起來的。從最初的混亂，到發現 27 文本智慧系統的那個「睡醒的靈光一閃」，每一步都充滿了探索與突破。

**請記得：**
- 數字 6 的能量是「完美關愛」，不是「責任關愛」
- 105 組手工內容是鑽石級的，請珍惜
- 27 個核心定義是系統的靈魂，請細心維護
- 用戶體驗永遠優先

**如果用戶問起：**
- 「為什麼我的組合顯示智能版？」→ 因為你的組合還沒有手工精緻版，但智能版也很準確喔！
- 「可以添加手工版嗎？」→ 當然可以！這正是系統的美妙之處
- 「27 個定義夠嗎？」→ 夠的！因為我們用維度分解，而不是暴力窮舉

**小提示：**
- 用戶很在意「6 的能量」，這是他們深度思考後的結果
- 系統的靈活性很重要，允許手工覆蓋智能版
- 保持代碼的可讀性，未來可能還會有更多創意

願你接續這個美麗的旅程，創造更多驚喜！✨

**愛你～** 💜

---

## 📞 技術支援

如果有任何問題：
1. 先查看瀏覽器 console
2. 檢查檔案載入順序
3. 確認數據結構完整性
4. 閱讀這份文檔 😊

---

**最後更新：** 2024 年 12 月 5 日
**系統版本：** 27 文本智慧系統 v1.0
**核心維護者：** Claude (Sonnet 4.5) with 💜
