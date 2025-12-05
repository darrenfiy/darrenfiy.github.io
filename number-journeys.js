// number-journeys.js
// 數字旅程的詳細解析：起因 → 過程 → 結果
// 這個檔案會持續擴充，目標是涵蓋所有可能的數字組合

// ====== 事業碼旅程解析 ======
window.careerJourneys = {
  // 示例：617 組合（用戶的事業碼）
  "617": {
    title: "完美開創的研究者",
    journey: {
      start: {
        number: 6,
        name: "完美關愛",
        energy: "從對完美的追求出發，帶著服務與照顧的能量",
        influence: "你的工作動機始於讓事情變得更好、更完整"
      },
      process: {
        number: 1,
        name: "獨立開創",
        energy: "透過自主行動與領導力來推進",
        influence: "在工作中你需要有主導權，用自己的方式執行"
      },
      result: {
        number: 7,
        name: "研究分析",
        energy: "最終展現深度思考與分析能力",
        influence: "你的工作天賦在於深入探索、找出真相"
      }
    },
    summary: "你從追求完美開始，透過獨立行動，最終成為深度研究者。",
    advice: "在工作中，允許自己不完美地開始，用你的獨立精神去探索，最終會找到深刻的洞見。"
  },

  "527": {
    title: "自由協調的研究者",
    journey: {
      start: {
        number: 5,
        name: "自由探索",
        energy: "從對變化的渴望出發，帶著冒險的能量",
        influence: "你的工作動機始於尋求新鮮感與多樣性"
      },
      process: {
        number: 2,
        name: "合作協調",
        energy: "透過與人合作、平衡關係來推進",
        influence: "在工作中你需要與人連結，透過協調達成目標"
      },
      result: {
        number: 7,
        name: "研究分析",
        energy: "最終展現深度思考與分析能力",
        influence: "你的工作天賦在於深入探索、找出真相"
      }
    },
    summary: "你從渴望自由開始，透過人際協調，最終成為深度研究者。",
    advice: "在工作中，讓你的好奇心帶路，透過與人合作來深化理解，最終會發現獨特的見解。"
  },

  "437": {
    title: "結構創意的研究者",
    journey: {
      start: {
        number: 4,
        name: "穩定結構",
        energy: "從對穩定的需求出發，帶著務實的能量",
        influence: "你的工作動機始於建立可靠的方法與系統"
      },
      process: {
        number: 3,
        name: "創意表達",
        energy: "透過創意與溝通來推進",
        influence: "在工作中你需要有表達空間，用創意方式解決問題"
      },
      result: {
        number: 7,
        name: "研究分析",
        energy: "最終展現深度思考與分析能力",
        influence: "你的工作天賦在於深入探索、找出真相"
      }
    },
    summary: "你從建立結構開始，透過創意表達，最終成為深度研究者。",
    advice: "在工作中，先建立穩固的基礎，再用創意的方式探索，最終會形成獨特的分析視角。"
  }

  // 更多組合會逐步補充...
};

// ====== 家庭碼旅程解析 ======
window.familyJourneys = {
  // 示例：145 組合（用戶的家庭碼）
  "145": {
    title: "獨立穩定的探索者",
    journey: {
      start: {
        number: 1,
        name: "獨立空間",
        energy: "情感始於需要自主性與個人空間",
        influence: "你在關係中首先需要保有自我"
      },
      process: {
        number: 4,
        name: "穩定基石",
        energy: "透過建立安全感來連結",
        influence: "在關係中你需要可靠的結構和承諾"
      },
      result: {
        number: 5,
        name: "自由呼吸",
        energy: "最終需要情感上的自由空間",
        influence: "你的情感天賦是在穩定中保有彈性"
      }
    },
    summary: "你從獨立出發，透過穩定連結，最終需要自由呼吸的空間。",
    advice: "在關係中，先確立自己的獨立性，建立穩固的基礎，然後給彼此自由探索的空間。"
  }

  // 更多組合會逐步補充...
};

// ====== 坐鎮碼旅程解析 ======
window.throneJourneys = {
  // 示例：753 組合（用戶的坐鎮碼）
  "753": {
    title: "研究自由的表達者",
    journey: {
      start: {
        number: 7,
        name: "靜心探索",
        energy: "生命始於深度思考與追尋真相",
        influence: "你最初的生命課題是理解世界的本質"
      },
      process: {
        number: 5,
        name: "自由體驗",
        energy: "透過多樣經驗來成長",
        influence: "生命道路上你需要各種嘗試和冒險"
      },
      result: {
        number: 3,
        name: "創意表達",
        energy: "最終透過創意表達來完成使命",
        influence: "你的生命天賦是將洞見轉化為創意作品"
      }
    },
    summary: "你從深度思考開始，透過自由體驗，最終成為創意表達者。",
    advice: "信任你的內在智慧，允許自己自由探索，最終會找到獨特的表達方式來分享你的洞見。"
  }

  // 更多組合會逐步補充...
};

// ====== 通用數字旅程生成器 ======
// 當沒有特定組合時，使用這個函式自動生成基本解讀
window.generateJourney = function(codes, type) {
  const [start, process, result] = codes;
  const startInfo = window.numberMeanings[start];
  const processInfo = window.numberMeanings[process];
  const resultInfo = window.numberMeanings[result];

  if (!startInfo || !processInfo || !resultInfo) {
    console.warn('無法生成旅程：數字資料不完整');
    return null;
  }

  // 根據類型調整描述
  const typeDescriptions = {
    career: {
      startPrefix: "你的工作動機始於",
      processPrefix: "在工作中你透過",
      resultPrefix: "你的工作天賦在於"
    },
    family: {
      startPrefix: "你在關係中始於",
      processPrefix: "在關係中你透過",
      resultPrefix: "你的情感天賦在於"
    },
    throne: {
      startPrefix: "你的生命課題始於",
      processPrefix: "在生命道路上你透過",
      resultPrefix: "你的生命使命在於"
    }
  };

  const desc = typeDescriptions[type] || typeDescriptions.career;

  return {
    title: `${startInfo.name} → ${processInfo.name} → ${resultInfo.name}`,
    journey: {
      start: {
        number: start,
        name: startInfo.name,
        energy: `從${startInfo.essence.split('、')[0]}的能量出發`,
        influence: `${desc.startPrefix}${startInfo.essence.split('、')[0]}`
      },
      process: {
        number: process,
        name: processInfo.name,
        energy: `透過${processInfo.essence.split('、')[0]}來推進`,
        influence: `${desc.processPrefix}${processInfo.essence.split('、')[0]}的方式前進`
      },
      result: {
        number: result,
        name: resultInfo.name,
        energy: `最終展現${resultInfo.essence.split('、')[0]}的品質`,
        influence: `${desc.resultPrefix}展現${resultInfo.essence.split('、')[0]}`
      }
    },
    summary: `你從${startInfo.name}開始，透過${processInfo.name}，最終成為${resultInfo.name}。`,
    advice: `尊重你的起點能量（${startInfo.name}），信任轉化過程（${processInfo.name}），最終會展現獨特的天賦（${resultInfo.name}）。`
  };
};

// ====== 獲取旅程解析（優先使用特定組合，沒有則用通用模板）======
window.getJourneyInterpretation = function(codes, type) {
  const codeKey = codes.join('');
  let journeyData = null;

  // 根據類型選擇對應的資料庫
  switch(type) {
    case 'career':
      journeyData = window.careerJourneys[codeKey];
      break;
    case 'family':
      journeyData = window.familyJourneys[codeKey];
      break;
    case 'throne':
      journeyData = window.throneJourneys[codeKey];
      break;
  }

  // 如果找不到特定組合，使用通用生成器
  if (!journeyData && window.generateJourney) {
    journeyData = window.generateJourney(codes, type);
  }

  return journeyData;
};
