// journey-composer.js
// 智能旅程組合系統：用 27 個核心定義組合出任何旅程

// ====== 主要組合函數 ======
window.composeJourney = function(codes, type) {
  const [a, b, c] = codes.map(Number);
  const dims = window.numberDimensions;
  const meanings = window.numberMeanings;

  // 檢查是否有必要的資料
  if (!dims || !meanings) {
    console.error('缺少必要的資料：numberDimensions 或 numberMeanings');
    return window.getFallbackJourney?.(codes, type) || getSimpleFallback(codes);
  }

  // 1. 優先使用手工撰寫的精緻版本
  const handcrafted = getHandcraftedJourney(codes.join(''), type);
  if (handcrafted) {
    handcrafted.source = 'handcrafted';
    handcrafted.badge = '✨ 深度手工解析';
    return handcrafted;
  }

  // 2. 使用智能組合（基於 27 個核心定義）
  const typeNames = {
    career: { zh: "事業", en: "Career", icon: "💼" },
    family: { zh: "家庭", en: "Family", icon: "🏡" },
    throne: { zh: "生命", en: "Life Path", icon: "👑" }
  };

  const typeInfo = typeNames[type] || typeNames.career;

  // 檢查維度定義是否存在
  if (!dims[a]?.[type] || !dims[b]?.[type] || !dims[c]?.[type]) {
    console.warn(`缺少數字 ${a}, ${b}, ${c} 在 ${type} 的維度定義`);
    return window.getFallbackJourney?.(codes, type) || getSimpleFallback(codes);
  }

  // 分析數字模式
  const pattern = analyzeNumberPattern(a, b, c);

  const journey = {
    title: `${meanings[a].name} → ${meanings[b].name} → ${meanings[c].name}`,
    subtitle: `${typeInfo.icon} ${typeInfo.zh}天賦旅程`,
    journey: {
      start: {
        number: a,
        name: meanings[a].name,
        energy: dims[a][type].asStart,
        influence: `你在${typeInfo.zh}的起點：${meanings[a].essence.split('、')[0]}`
      },
      process: {
        number: b,
        name: meanings[b].name,
        energy: dims[b][type].asProcess,
        influence: `你在${typeInfo.zh}的成長：${meanings[b].essence.split('、')[0]}`
      },
      result: {
        number: c,
        name: meanings[c].name,
        energy: dims[c][type].asResult,
        influence: `你在${typeInfo.zh}的天賦：${meanings[c].essence.split('、')[0]}`
      }
    },
    summary: generateSummary(a, b, c, typeInfo, meanings, pattern),
    advice: generateAdvice(a, b, c, pattern),
    pattern: pattern,
    source: 'composed',
    badge: '🔄 智能組合解析'
  };

  return journey;
};

// ====== 分析數字模式 ======
function analyzeNumberPattern(a, b, c) {
  const patterns = {
    ASCENDING: 'ascending',         // 1-2-3 上升
    DESCENDING: 'descending',       // 3-2-1 下降
    PEAK: 'peak',                   // 1-3-2 高峰
    VALLEY: 'valley',               // 3-1-2 低谷
    PLATEAU: 'plateau',             // 2-2-2 平台
    ASCEND_PLATEAU: 'ascend_plateau', // 1-2-2
    DESCEND_PLATEAU: 'descend_plateau', // 2-2-1
    WAVE: 'wave'                    // 其他波動
  };

  // 完全相同
  if (a === b && b === c) return patterns.PLATEAU;

  // 完全上升
  if (a < b && b < c) return patterns.ASCENDING;

  // 完全下降
  if (a > b && b > c) return patterns.DESCENDING;

  // 高峰型（中間最高）
  if (a < b && b > c) return patterns.PEAK;

  // 低谷型（中間最低）
  if (a > b && b < c) return patterns.VALLEY;

  // 上升後平台
  if (a < b && b === c) return patterns.ASCEND_PLATEAU;

  // 下降後平台
  if (a > b && b === c) return patterns.DESCEND_PLATEAU;

  // 平台後上升
  if (a === b && b < c) return patterns.ASCEND_PLATEAU;

  // 平台後下降
  if (a === b && b > c) return patterns.DESCEND_PLATEAU;

  return patterns.WAVE;
}

// ====== 生成總結 ======
function generateSummary(a, b, c, typeInfo, meanings, pattern) {
  const aName = meanings[a].name;
  const bName = meanings[b].name;
  const cName = meanings[c].name;

  const patternTemplates = {
    ascending: `你的${typeInfo.zh}旅程是上升的：從${aName}出發，透過${bName}的轉化，最終到達更高的${cName}。`,
    descending: `你的${typeInfo.zh}旅程是內化的：從${aName}開始，透過${bName}的沉澱，深入內在的${cName}智慧。`,
    peak: `你的${typeInfo.zh}旅程有個高峰：從${aName}起步，在${bName}達到頂點，然後整合為${cName}的展現。`,
    valley: `你的${typeInfo.zh}旅程先深入再升起：從${aName}開始，在${bName}深入內在，然後展現為${cName}的光芒。`,
    plateau: `你的${typeInfo.zh}旅程是專注的：${aName}的能量貫穿始終，讓你在此領域有純粹而深刻的天賦。`,
    ascend_plateau: `你的${typeInfo.zh}旅程先上升再穩定：從${aName}開始，透過${bName}提升，然後在${cName}穩定展現。`,
    descend_plateau: `你的${typeInfo.zh}旅程先沉澱再穩定：從${aName}開始，透過${bName}深化，然後在${cName}穩定呈現。`,
    wave: `你的${typeInfo.zh}旅程有獨特的波動：從${aName}開始，經歷${bName}的洗禮，最終成為${cName}。`
  };

  return patternTemplates[pattern] ||
    `你在${typeInfo.zh}中，從${aName}開始，經歷${bName}的轉化，最終展現為${cName}。`;
}

// ====== 生成建議 ======
function generateAdvice(a, b, c, pattern) {
  const adviceTemplates = {
    ascending: "信任上升的節奏，允許自己擴張與提升，每一步都在準備你迎接下一步。",
    descending: "尊重內化的過程，深度需要時間沉澱，你的智慧在安靜中增長。",
    peak: "重視頂點的學習，那是你成長最快的階段，也是天賦最閃耀的時刻。",
    valley: "擁抱低谷的禮物，那是你重新連結內在的機會，也是重新選擇的起點。",
    plateau: "善用專注的能量，你在這個領域有純粹的天賦，深耕會帶來豐收。",
    ascend_plateau: "上升後保持穩定，學習在提升的狀態中持續展現。",
    descend_plateau: "沉澱後保持穩定，內在的智慧會在平靜中持續發光。",
    wave: "擁抱旅程的波動，每個起伏都是成長的一部分。"
  };

  const baseAdvice = "尊重你的起點，信任轉化過程，最終會發現獨特的天賦展現方式。";

  return adviceTemplates[pattern] || baseAdvice;
}

// ====== 獲取手工撰寫內容 ======
function getHandcraftedJourney(codeKey, type) {
  try {
    switch(type) {
      case 'career':
        return window.careerJourneys?.[codeKey];
      case 'family':
        return window.familyJourneys?.[codeKey];
      case 'throne':
        return window.throneJourneys?.[codeKey];
    }
  } catch (error) {
    console.warn('獲取手工內容時發生錯誤:', error);
  }
  return null;
}

// ====== 極簡備用方案 ======
function getSimpleFallback(codes) {
  return {
    title: `探索 ${codes.join(' → ')} 的旅程`,
    journey: {
      start: {
        number: codes[0],
        name: "起點",
        energy: "能量正在覺醒",
        influence: "這是你的開始"
      },
      process: {
        number: codes[1],
        name: "過程",
        energy: "轉化正在發生",
        influence: "這是你的學習"
      },
      result: {
        number: codes[2],
        name: "結果",
        energy: "天賦正在展現",
        influence: "這是你的禮物"
      }
    },
    summary: "這組獨特的數字組合正在等待更深的理解。",
    advice: "每個人的旅程都是獨一無二的，繼續探索會發現更多屬於你的寶藏。",
    source: 'fallback',
    badge: '🌱 基礎解析'
  };
}

// ====== 向後兼容：更新主接口 ======
// 如果系統使用 getJourneyInterpretation，自動導向新系統
if (typeof window.getJourneyInterpretation === 'function') {
  window._originalGetJourneyInterpretation = window.getJourneyInterpretation;
}

window.getJourneyInterpretation = function(codes, type) {
  return window.composeJourney(codes, type);
};
