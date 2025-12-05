// numerology-pyramid.js
// 天賦密碼金字塔系統：事業碼、家庭碼、坐鎮碼

// ====== 基本數字含義（1-9）======
window.numberMeanings = {
  1: { name: "開創", essence: "獨立、領導、創新" },
  2: { name: "協調", essence: "合作、敏感、平衡" },
  3: { name: "表達", essence: "創意、溝通、快樂" },
  4: { name: "穩定", essence: "務實、組織、安全" },
  5: { name: "自由", essence: "變化、冒險、適應" },
  6: { name: "關愛", essence: "責任、和諧、服務" },
  7: { name: "靜心", essence: "分析、靈性、真理" },
  8: { name: "豐盛", essence: "權力、財富、成就" },
  9: { name: "圓滿", essence: "人道、完成、整合" }
};

// ====== 事業碼解析 ======
window.careerCodeMeanings = {
  1: { name: "獨立開創者", desc: "適合領導、創業、開拓新領域的工作" },
  2: { name: "合作協調者", desc: "擅長團隊合作、中介協調、客戶關係" },
  3: { name: "創意表達者", desc: "適合藝術、溝通、教育、娛樂產業" },
  4: { name: "組織建設者", desc: "擅長規劃、管理、系統建立的工作" },
  5: { name: "自由探索者", desc: "適合行銷、旅行、多變的工作環境" },
  6: { name: "服務關懷者", desc: "擅長照顧、諮詢、美化環境的工作" },
  7: { name: "研究分析者", desc: "適合研究、分析、技術性的工作" },
  8: { name: "資源管理者", desc: "擅長管理、投資、商業運作" },
  9: { name: "整合引導者", desc: "適合顧問、指導、人道工作" }
};

// ====== 家庭碼解析 ======
window.familyCodeMeanings = {
  1: { name: "獨立空間", desc: "需要在關係中保有自主性與個人空間" },
  2: { name: "和諧連結", desc: "重視情感交流，是家中的情緒平衡者" },
  3: { name: "快樂氛圍", desc: "為家庭帶來歡樂與輕鬆的能量" },
  4: { name: "穩定基石", desc: "是家中的安定力量，提供實際支持" },
  5: { name: "自由呼吸", desc: "需要彈性與變化，不喜歡被束縛" },
  6: { name: "照顧核心", desc: "天生的照顧者，關注家人的需求" },
  7: { name: "安靜角落", desc: "需要獨處時間來充電與思考" },
  8: { name: "家族支柱", desc: "承擔責任，是家庭的實際資源提供者" },
  9: { name: "包容理解", desc: "用寬廣的心理解每個家人的需要" }
};

// ====== 坐鎮碼解析（與生命靈數一致）======
window.throneCodeMeanings = {
  1: { name: "開路者", desc: "你的核心使命是開創新路，帶領前行" },
  2: { name: "協調者", desc: "你的核心使命是連結與平衡不同的力量" },
  3: { name: "表達者", desc: "你的核心使命是透過創意表達帶來快樂" },
  4: { name: "築基者", desc: "你的核心使命是建立穩固的基礎與結構" },
  5: { name: "探索者", desc: "你的核心使命是體驗與帶來自由的可能" },
  6: { name: "守護者", desc: "你的核心使命是照顧與創造和諧美好" },
  7: { name: "洞見者", desc: "你的核心使命是追尋真理與深度智慧" },
  8: { name: "實現者", desc: "你的核心使命是將能量轉化為實際成果" },
  9: { name: "整合者", desc: "你的核心使命是整合並完成生命的循環" }
};

// ====== 工具函式：數字化簡到 1-9 ======
function reduceToSingleDigit(n) {
  let sum = n;
  while (sum > 9) {
    sum = sum
      .toString()
      .split("")
      .reduce((acc, d) => acc + Number(d), 0);
  }
  return sum;
}

// ====== 核心函式：計算天賦密碼金字塔 ======
window.calculateTalentCodes = function(birthdateStr) {
  // 預期格式：YYYY-MM-DD
  if (!birthdateStr) return null;

  const [yearStr, monthStr, dayStr] = birthdateStr.split("-");
  const year = parseInt(yearStr, 10);
  const month = parseInt(monthStr, 10);
  const day = parseInt(dayStr, 10);

  if (isNaN(year) || isNaN(month) || isNaN(day)) return null;

  // 拆成各個位數
  const [y1, y2, y3, y4] = yearStr.padStart(4, "0").split("").map(Number);
  const [m1, m2] = monthStr.padStart(2, "0").split("").map(Number);
  const [d1, d2] = dayStr.padStart(2, "0").split("").map(Number);

  // 底層計算：d+d, m+m, y+y, y+y
  const ddSum = d1 + d2;           // 例如 2+4=6
  const mmSum = m1 + m2;           // 例如 1+0=1
  const yLeftSum = y1 + y2;        // 例如 1+9=10
  const yRightSum = y3 + y4;       // 例如 8+5=13

  // 事業碼三個數字
  const careerFirst = reduceToSingleDigit(ddSum);           // 6
  const careerSecond = reduceToSingleDigit(mmSum);          // 1
  const careerThird = reduceToSingleDigit(ddSum + mmSum);   // 7

  // 家庭碼三個數字
  const familyFirst = reduceToSingleDigit(yLeftSum);              // 1
  const familySecond = reduceToSingleDigit(yRightSum);            // 4
  const familyThird = reduceToSingleDigit(yLeftSum + yRightSum);  // 5

  // 坐鎮碼三個數字
  const throneFirst = careerThird;   // 7
  const throneSecond = familyThird;  // 5
  const throneThird = reduceToSingleDigit(throneFirst + throneSecond);  // 3

  return {
    // 基礎數字（用於顯示完整金字塔）
    baseDigits: {
      dayDigits: [d1, d2],
      monthDigits: [m1, m2],
      yearDigits: [y1, y2, y3, y4]
    },

    // 三組號碼（每組三個數字）
    careerCode: [careerFirst, careerSecond, careerThird],
    familyCode: [familyFirst, familySecond, familyThird],
    throneCode: [throneFirst, throneSecond, throneThird],

    // 核心天賦數字（每組的第三個數字）
    coreTalents: {
      career: careerThird,    // 事業天賦核心
      family: familyThird,    // 家庭天賦核心
      throne: throneThird     // 生命道路核心（與生命靈數相同）
    }
  };
};

// ====== 工具函式：取得天賦解讀 ======
window.getTalentInterpretation = function(talentCodes) {
  if (!talentCodes) return null;

  const { career, family, throne } = talentCodes.coreTalents;

  return {
    career: {
      number: career,
      name: window.careerCodeMeanings[career]?.name || "—",
      desc: window.careerCodeMeanings[career]?.desc || "—"
    },
    family: {
      number: family,
      name: window.familyCodeMeanings[family]?.name || "—",
      desc: window.familyCodeMeanings[family]?.desc || "—"
    },
    throne: {
      number: throne,
      name: window.throneCodeMeanings[throne]?.name || "—",
      desc: window.throneCodeMeanings[throne]?.desc || "—"
    }
  };
};
