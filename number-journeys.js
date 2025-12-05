// number-journeys.js
// 數字旅程的詳細解析：起因 → 過程 → 結果
// 這個檔案會持續擴充，目標是涵蓋所有可能的數字組合

// ====== 完整的事業碼旅程解析 ======
window.careerJourneys = {
  // 第1組：123 - 開創→協調→表達
  "123": {
    title: "開創協調的表達者",
    journey: {
      start: {
        number: 1,
        name: "獨立開創",
        energy: "從自主行動出發，帶著領導的能量",
        influence: "你的事業動機始於想要自己主導、開創新局"
      },
      process: {
        number: 2,
        name: "合作協調",
        energy: "透過人際連結與平衡來推進",
        influence: "在工作中你需要團隊合作，善於調和不同意見"
      },
      result: {
        number: 3,
        name: "創意表達",
        energy: "最終展現創造力與溝通能力",
        influence: "你的工作天賦在於將想法化為生動的表達"
      }
    },
    summary: "你從獨立開創開始，透過合作協調，最終成為創意表達者。",
    advice: "先勇敢開創自己的方向，再透過與人合作來豐富內容，最終用創意的方式呈現成果。"
  },

  // 第2組：213 - 協調→開創→表達
  "213": {
    title: "協調開創的表達者",
    journey: {
      start: {
        number: 2,
        name: "合作協調",
        energy: "從關係連結出發，帶著敏感的能量",
        influence: "你的事業動機始於想要創造和諧的環境"
      },
      process: {
        number: 1,
        name: "獨立開創",
        energy: "透過自主決策與行動來推進",
        influence: "在工作中你需要在合作中找到自己的主導權"
      },
      result: {
        number: 3,
        name: "創意表達",
        energy: "最終展現創造力與溝通能力",
        influence: "你的工作天賦在於將人際互動轉化為創意表達"
      }
    },
    summary: "你從合作協調開始，透過獨立開創，最終成為創意表達者。",
    advice: "先建立良好的人際關係，再在其中開創自己的空間，最終用創意表達來整合這兩者。"
  },

  // 第3組：134 - 開創→表達→穩定
  "134": {
    title: "開創表達的建設者",
    journey: {
      start: {
        number: 1,
        name: "獨立開創",
        energy: "從自主行動出發，帶著領導的能量",
        influence: "你的事業動機始於想要自己主導、開創新局"
      },
      process: {
        number: 3,
        name: "創意表達",
        energy: "透過創造力與溝通來推進",
        influence: "在工作中你需要表達空間，用創意方式解決問題"
      },
      result: {
        number: 4,
        name: "穩定結構",
        energy: "最終展現組織與建設能力",
        influence: "你的工作天賦在於將創意落實為穩固的系統"
      }
    },
    summary: "你從獨立開創開始，透過創意表達，最終成為建設者。",
    advice: "先勇敢開創，再用創意豐富內容，最終將一切建構成穩固的系統。"
  },

  // 第4組：314 - 表達→開創→穩定
  "314": {
    title: "表達開創的建設者",
    journey: {
      start: {
        number: 3,
        name: "創意表達",
        energy: "從創造力出發，帶著快樂的能量",
        influence: "你的事業動機始於想要分享創意、帶來歡樂"
      },
      process: {
        number: 1,
        name: "獨立開創",
        energy: "透過自主決策與行動來推進",
        influence: "在工作中你需要將創意轉化為實際行動"
      },
      result: {
        number: 4,
        name: "穩定結構",
        energy: "最終展現組織與建設能力",
        influence: "你的工作天賦在於將創意落實為穩固的系統"
      }
    },
    summary: "你從創意表達開始，透過獨立開創，最終成為建設者。",
    advice: "先自由表達你的創意，再勇敢將其開創出來，最終建立穩固的基礎來支撐它。"
  },

  // 第5組：224 - 協調→協調→穩定
  "224": {
    title: "雙重協調的穩定者",
    journey: {
      start: {
        number: 2,
        name: "合作協調",
        energy: "從關係連結出發，帶著敏感的能量",
        influence: "你的事業動機始於想要創造和諧的環境"
      },
      process: {
        number: 2,
        name: "合作協調",
        energy: "持續透過人際連結與平衡來推進",
        influence: "工作中你特別擅長在關係中協調、尋找共識"
      },
      result: {
        number: 4,
        name: "穩定結構",
        energy: "最終展現組織與建設能力",
        influence: "你的工作天賦在於建立和諧穩定的工作環境"
      }
    },
    summary: "你從合作協調開始，持續透過協調，最終成為穩定者。",
    advice: "你的強項在於人際間的平衡，先建立良好的關係網絡，再以此為基礎建立穩固的結構。"
  },

  // 第6組：145 - 開創→穩定→自由
  "145": {
    title: "開創穩定的探索者",
    journey: {
      start: {
        number: 1,
        name: "獨立開創",
        energy: "從自主行動出發，帶著領導的能量",
        influence: "你的事業動機始於想要自己主導、開創新局"
      },
      process: {
        number: 4,
        name: "穩定結構",
        energy: "透過組織與建設來推進",
        influence: "在工作中你需要建立穩固的方法與系統"
      },
      result: {
        number: 5,
        name: "自由探索",
        energy: "最終展現適應力與冒險精神",
        influence: "你的工作天賦在於在穩定基礎上自由探索"
      }
    },
    summary: "你從獨立開創開始，透過穩定建設，最終成為探索者。",
    advice: "先開創自己的方向，再建立穩固基礎，最後在這個基礎上自由探索新的可能性。"
  },

  // 第7組：415 - 穩定→開創→自由
  "415": {
    title: "穩定開創的探索者",
    journey: {
      start: {
        number: 4,
        name: "穩定結構",
        energy: "從組織建設出發，帶著務實的能量",
        influence: "你的事業動機始於想要建立可靠的方法與系統"
      },
      process: {
        number: 1,
        name: "獨立開創",
        energy: "透過自主決策與行動來推進",
        influence: "在工作中你需要將穩固的基礎轉化為實際行動"
      },
      result: {
        number: 5,
        name: "自由探索",
        energy: "最終展現適應力與冒險精神",
        influence: "你的工作天賦在於在穩定基礎上自由探索"
      }
    },
    summary: "你從穩定建設開始，透過獨立開創，最終成為探索者。",
    advice: "先建立穩固的基礎，再勇敢開創，最後在這個框架內自由探索新的可能性。"
  },

  // 第8組：235 - 協調→表達→自由
  "235": {
    title: "協調表達的冒險家",
    journey: {
      start: {
        number: 2,
        name: "合作協調",
        energy: "從關係連結出發，帶著敏感的能量",
        influence: "你的事業動機始於想要創造和諧的環境"
      },
      process: {
        number: 3,
        name: "創意表達",
        energy: "透過創造力與溝通來推進",
        influence: "在工作中你需要表達空間，用創意方式連結人際"
      },
      result: {
        number: 5,
        name: "自由探索",
        energy: "最終展現適應力與冒險精神",
        influence: "你的工作天賦在於在和諧關係中自由探索新方式"
      }
    },
    summary: "你從合作協調開始，透過創意表達，最終成為冒險家。",
    advice: "先建立良好的人際關係，再用創意方式表達，最後在這個基礎上自由探索各種可能性。"
  },

  // 第9組：325 - 表達→協調→自由
  "325": {
    title: "表達協調的冒險家",
    journey: {
      start: {
        number: 3,
        name: "創意表達",
        energy: "從創造力出發，帶著快樂的能量",
        influence: "你的事業動機始於想要分享創意、帶來歡樂"
      },
      process: {
        number: 2,
        name: "合作協調",
        energy: "透過人際連結與平衡來推進",
        influence: "在工作中你需要團隊合作，善於調和不同意見"
      },
      result: {
        number: 5,
        name: "自由探索",
        energy: "最終展現適應力與冒險精神",
        influence: "你的工作天賦在於在創意表達中自由探索新連結"
      }
    },
    summary: "你從創意表達開始，透過合作協調，最終成為冒險家。",
    advice: "先自由表達你的創意，再透過與人合作來豐富它，最後在這個互動中自由探索新方向。"
  },

  // 第10組：156 - 開創→自由→關愛
  "156": {
    title: "開創自由的精準修復者",
    journey: {
      start: {
        number: 1,
        name: "獨立開創",
        energy: "從自主行動出發，帶著領導的能量",
        influence: "你的事業動機始於想要自己主導、開創新局"
      },
      process: {
        number: 5,
        name: "自由探索",
        energy: "透過變化與冒險來推進",
        influence: "在工作中你需要多樣性與彈性，邊走邊調整到最佳狀態"
      },
      result: {
        number: 6,
        name: "完美關愛",
        energy: "最終展現精準調整與優雅完成的能力",
        influence: "你的工作天賦在於把混亂收束成完美的成果"
      }
    },
    summary: "你從獨立開創開始，透過自由探索，最終將可能性雕琢成最好版本。",
    advice: "先勇敢開創自己的道路，再自由探索各種可能，最後在這個過程中精修到完美狀態。"
  },

  // 第11組：516 - 自由→開創→關愛
  "516": {
    title: "自由開創的精緻實踐者",
    journey: {
      start: {
        number: 5,
        name: "自由探索",
        energy: "從變化冒險出發，帶著適應的能量",
        influence: "你的事業動機始於想要嘗試新鮮事物、尋求多樣性"
      },
      process: {
        number: 1,
        name: "獨立開創",
        energy: "透過自主決策與行動來推進",
        influence: "在工作中你將探索的發現化為具體決策與行動"
      },
      result: {
        number: 6,
        name: "完美關愛",
        energy: "最終展現精緻調整與優化成熟的能力",
        influence: "你的工作天賦在於為作品裝上靈魂與品質"
      }
    },
    summary: "你從自由探索開始，透過獨立開創，最終將雛形精緻化為成熟作品。",
    advice: "先允許自己自由探索，再勇敢開創具體方向，最後透過調整優化達到完美狀態。"
  },

  // 第12組：246 - 協調→穩定→關愛
  "246": {
    title: "協調穩定的品質守護者",
    journey: {
      start: {
        number: 2,
        name: "合作協調",
        energy: "從關係連結出發，帶著敏感的能量",
        influence: "你的事業動機始於想要創造和諧的環境"
      },
      process: {
        number: 4,
        name: "穩定結構",
        energy: "透過組織與建設來推進",
        influence: "在工作中你建立秩序與可預期性來推動前進"
      },
      result: {
        number: 6,
        name: "完美關愛",
        energy: "最終展現細緻品質與安心成果的能力",
        influence: "你的工作天賦在於將穩定升級成美感與完整"
      }
    },
    summary: "你從合作協調開始，透過穩定建設，最終將事情調整到最和諧的狀態。",
    advice: "先建立良好的人際關係，再建構穩固的系統，最後用你的耐心打造真正美好的成果。"
  },

  // 第13組：426 - 穩定→協調→關愛
  "426": {
    title: "穩定協調的修復設計者",
    journey: {
      start: {
        number: 4,
        name: "穩定結構",
        energy: "從組織建設出發，帶著務實的能量",
        influence: "你的事業動機始於想要建立可靠的方法與系統"
      },
      process: {
        number: 2,
        name: "合作協調",
        energy: "透過人際連結與平衡來推進",
        influence: "在工作中你透過互動與理解來修正方向"
      },
      result: {
        number: 6,
        name: "完美關愛",
        energy: "最終展現細緻精準、帶有溫度的成果",
        influence: "你的工作天賦在於讓系統變得有靈魂、有美感"
      }
    },
    summary: "你從穩定建設開始，透過合作協調，最終創造出成熟而完整的成果。",
    advice: "先建立穩固的基礎，再與人合作協調，最後用你的細緻讓世界從『能用』變成『好用』。"
  },

  // 第14組：336 - 表達→表達→關愛
  "336": {
    title: "雙重表達的情緒工匠",
    journey: {
      start: {
        number: 3,
        name: "創意表達",
        energy: "從創造力出發，帶著快樂的能量",
        influence: "你的事業動機始於想要分享創意、帶來歡樂"
      },
      process: {
        number: 3,
        name: "創意表達",
        energy: "持續透過創造力與溝通來推進",
        influence: "工作中你越說越清晰、越做越深入，透過表達精煉自己"
      },
      result: {
        number: 6,
        name: "完美關愛",
        energy: "最終展現和諧、美感、療癒的能力",
        influence: "你的工作天賦在於讓複雜情緒被理解並優雅收束"
      }
    },
    summary: "你從創意表達開始，持續透過表達進化，最終以修復與美感收尾。",
    advice: "你的強項在於創意表達，你的話語本身就是療癒，不需要刻意做到完美。"
  },

  // 第15組：167 - 開創→關愛→靜心
  "167": {
    title: "開創完美的品質洞察者",
    journey: {
      start: {
        number: 1,
        name: "獨立開創",
        energy: "從自主行動出發，帶著領導的能量",
        influence: "你的事業動機始於想要自己主導、開創新局"
      },
      process: {
        number: 6,
        name: "完美關愛",
        energy: "透過精準調整與優化來推進",
        influence: "在工作中你深度觀察、感受、修正，讓方向變得更準確"
      },
      result: {
        number: 7,
        name: "靜心思考",
        energy: "最終展現深度思考與分析能力",
        influence: "你的工作天賦在於形成敏銳、深刻、具有判斷力的洞察"
      }
    },
    summary: "你從獨立開創開始，透過完美精修，最終形成深刻洞見。",
    advice: "先勇敢開創自己的道路，再透過精修調整，最後在這個過程中發展深度思考能力。"
  },

  // 第16組：617 - 關愛→開創→靜心
  "617": {
    title: "完美開創的深度洞察者",
    journey: {
      start: {
        number: 6,
        name: "完美關愛",
        energy: "從對品質的敏感與美好的渴望出發",
        influence: "你的事業動機始於想要創造美好的環境、追求完整性"
      },
      process: {
        number: 1,
        name: "獨立開創",
        energy: "透過自主決策與行動來推進",
        influence: "在工作中你將對完美的追求轉化為實際行動"
      },
      result: {
        number: 7,
        name: "靜心思考",
        energy: "最終展現深度思考與分析能力",
        influence: "你的工作天賦在於在完美追求中發展深刻的洞察力"
      }
    },
    summary: "你從完美關愛開始，透過獨立開創，最終成為思考者。",
    advice: "先展現你對品質的敏感，再勇敢開創具體方向，最後在這個過程中發展深度思考能力。"
  },

  // 第17組：257 - 協調→自由→靜心
  "257": {
    title: "協調自由的思考者",
    journey: {
      start: {
        number: 2,
        name: "合作協調",
        energy: "從關係連結出發，帶著敏感的能量",
        influence: "你的事業動機始於想要創造和諧的環境"
      },
      process: {
        number: 5,
        name: "自由探索",
        energy: "透過變化與冒險來推進",
        influence: "在工作中你需要多樣性與彈性，不喜歡被束縛"
      },
      result: {
        number: 7,
        name: "靜心思考",
        energy: "最終展現深度思考與分析能力",
        influence: "你的工作天賦在於在人際與變化中發展洞察力"
      }
    },
    summary: "你從合作協調開始，透過自由探索，最終成為思考者。",
    advice: "先建立良好的人際關係，再自由探索各種可能，最後在這個互動中發展深度思考能力。"
  },

  // 第18組：527 - 自由→協調→靜心
  "527": {
    title: "自由協調的思考者",
    journey: {
      start: {
        number: 5,
        name: "自由探索",
        energy: "從變化冒險出發，帶著適應的能量",
        influence: "你的事業動機始於想要嘗試新鮮事物、尋求多樣性"
      },
      process: {
        number: 2,
        name: "合作協調",
        energy: "透過人際連結與平衡來推進",
        influence: "在工作中你需要團隊合作，善於調和不同意見"
      },
      result: {
        number: 7,
        name: "靜心思考",
        energy: "最終展現深度思考與分析能力",
        influence: "你的工作天賦在於在自由探索中發展人際洞察力"
      }
    },
    summary: "你從自由探索開始，透過合作協調，最終成為思考者。",
    advice: "先允許自己自由探索，再與人合作協調，最後在這個互動中發展深度思考能力。"
  },

  // 第19組：347 - 表達→穩定→靜心
  "347": {
    title: "表達穩定的思考者",
    journey: {
      start: {
        number: 3,
        name: "創意表達",
        energy: "從創造力出發，帶著快樂的能量",
        influence: "你的事業動機始於想要分享創意、帶來歡樂"
      },
      process: {
        number: 4,
        name: "穩定結構",
        energy: "透過組織與建設來推進",
        influence: "在工作中你需要建立穩固的方法與系統"
      },
      result: {
        number: 7,
        name: "靜心思考",
        energy: "最終展現深度思考與分析能力",
        influence: "你的工作天賦在於將創意建構成深刻的系統"
      }
    },
    summary: "你從創意表達開始，透過穩定建設，最終成為思考者。",
    advice: "先自由表達你的創意，再建立穩固的基礎，最後在這個系統中發展深度思考能力。"
  },

  // 第20組：437 - 穩定→表達→靜心
  "437": {
    title: "穩定表達的思考者",
    journey: {
      start: {
        number: 4,
        name: "穩定結構",
        energy: "從組織建設出發，帶著務實的能量",
        influence: "你的事業動機始於想要建立可靠的方法與系統"
      },
      process: {
        number: 3,
        name: "創意表達",
        energy: "透過創造力與溝通來推進",
        influence: "在工作中你需要表達空間，用創意方式解決問題"
      },
      result: {
        number: 7,
        name: "靜心思考",
        energy: "最終展現深度思考與分析能力",
        influence: "你的工作天賦在於在穩定基礎上發展創意洞察力"
      }
    },
    summary: "你從穩定建設開始，透過創意表達，最終成為思考者。",
    advice: "先建立穩固的基礎，再用創意方式表達，最後在這個過程中發展深度思考能力。"
  },

  // 第21組：178 - 開創→靜心→豐盛
  "178": {
    title: "開創思考的實現者",
    journey: {
      start: {
        number: 1,
        name: "獨立開創",
        energy: "從自主行動出發，帶著領導的能量",
        influence: "你的事業動機始於想要自己主導、開創新局"
      },
      process: {
        number: 7,
        name: "靜心思考",
        energy: "透過深度分析與反思來推進",
        influence: "在工作中你需要理解事物的本質，追求真相"
      },
      result: {
        number: 8,
        name: "豐盛實現",
        energy: "最終展現成就與影響力",
        influence: "你的工作天賦在於將深刻的洞察轉化為實際成果"
      }
    },
    summary: "你從獨立開創開始，透過靜心思考，最終成為實現者。",
    advice: "先勇敢開創自己的道路，再深入思考其意義，最後將這些洞察轉化為實際成就。"
  },

  // 第22組：718 - 靜心→開創→豐盛
  "718": {
    title: "思考開創的實現者",
    journey: {
      start: {
        number: 7,
        name: "靜心思考",
        energy: "從深度分析出發，帶著求真的能量",
        influence: "你的事業動機始於想要理解事物的本質、追尋真相"
      },
      process: {
        number: 1,
        name: "獨立開創",
        energy: "透過自主決策與行動來推進",
        influence: "在工作中你需要將深刻的洞察轉化為實際行動"
      },
      result: {
        number: 8,
        name: "豐盛實現",
        energy: "最終展現成就與影響力",
        influence: "你的工作天賦在於將深刻的洞察轉化為實際成果"
      }
    },
    summary: "你從靜心思考開始，透過獨立開創，最終成為實現者。",
    advice: "先深入思考事物的本質，再勇敢開創具體方向，最後將這些洞察轉化為實際成就。"
  },

  // 第23組：268 - 協調→關愛→豐盛
  "268": {
    title: "協調完美的優雅實現者",
    journey: {
      start: {
        number: 2,
        name: "合作協調",
        energy: "從關係連結出發，帶著敏感的能量",
        influence: "你的事業動機始於想要創造和諧的環境"
      },
      process: {
        number: 6,
        name: "完美關愛",
        energy: "透過修正、調頻、改善來推進",
        influence: "在工作中你把混亂整理成邏輯，讓複雜變簡單"
      },
      result: {
        number: 8,
        name: "豐盛實現",
        energy: "最終展現成就與影響力",
        influence: "你的工作天賦在於將和諧品質轉化為具體成果"
      }
    },
    summary: "你從合作協調開始，透過完美修復，最終將品質轉化為成就。",
    advice: "先建立良好的人際關係，再展現你的調整能力，你調整的不只是問題，而是整個系統的頻率。"
  },

  // 第24組：628 - 關愛→協調→豐盛
  "628": {
    title: "完美協調的系統實現者",
    journey: {
      start: {
        number: 6,
        name: "完美關愛",
        energy: "從對品質的敏感與美好可能性出發",
        influence: "你的事業動機始於看見更好的版本、想要修復與提升"
      },
      process: {
        number: 2,
        name: "合作協調",
        energy: "透過人際連結與平衡來推進",
        influence: "在工作中你透過互動、回饋、調整來雕琢成果"
      },
      result: {
        number: 8,
        name: "豐盛實現",
        energy: "最終展現成就與影響力",
        influence: "你的工作天賦在於將美感與品質轉為真正可運作的成功"
      }
    },
    summary: "你從品質敏感開始，透過合作協調，最終創造真正的成果與價值。",
    advice: "先展現你對品質的追求，再與人合作協調，你的細膩是一種資產，而不是負擔。"
  },

  // 第25組：358 - 表達→自由→豐盛
  "358": {
    title: "表達自由的實現者",
    journey: {
      start: {
        number: 3,
        name: "創意表達",
        energy: "從創造力出發，帶著快樂的能量",
        influence: "你的事業動機始於想要分享創意、帶來歡樂"
      },
      process: {
        number: 5,
        name: "自由探索",
        energy: "透過變化與冒險來推進",
        influence: "在工作中你需要多樣性與彈性，不喜歡被束縛"
      },
      result: {
        number: 8,
        name: "豐盛實現",
        energy: "最終展現成就與影響力",
        influence: "你的工作天賦在於將創意探索轉化為實際成就"
      }
    },
    summary: "你從創意表達開始，透過自由探索，最終成為實現者。",
    advice: "先自由表達你的創意，再勇敢探索各種可能，最後將這些探索轉化為實際成就。"
  },

  // 第26組：538 - 自由→表達→豐盛
  "538": {
    title: "自由表達的實現者",
    journey: {
      start: {
        number: 5,
        name: "自由探索",
        energy: "從變化冒險出發，帶著適應的能量",
        influence: "你的事業動機始於想要嘗試新鮮事物、尋求多樣性"
      },
      process: {
        number: 3,
        name: "創意表達",
        energy: "透過創造力與溝通來推進",
        influence: "在工作中你需要表達空間，用創意方式解決問題"
      },
      result: {
        number: 8,
        name: "豐盛實現",
        energy: "最終展現成就與影響力",
        influence: "你的工作天賦在於將自由探索轉化為有創意的成就"
      }
    },
    summary: "你從自由探索開始，透過創意表達，最終成為實現者。",
    advice: "先允許自己自由探索，再用創意方式表達，最後將這些探索轉化為實際成就。"
  },

  // 第27組：448 - 穩定→穩定→豐盛
  "448": {
    title: "雙重穩定的實現者",
    journey: {
      start: {
        number: 4,
        name: "穩定結構",
        energy: "從組織建設出發，帶著務實的能量",
        influence: "你的事業動機始於想要建立可靠的方法與系統"
      },
      process: {
        number: 4,
        name: "穩定結構",
        energy: "持續透過組織與建設來推進",
        influence: "工作中你特別擅長建立穩固的系統與結構"
      },
      result: {
        number: 8,
        name: "豐盛實現",
        energy: "最終展現成就與影響力",
        influence: "你的工作天賦在於將穩固的基礎轉化為實際成就"
      }
    },
    summary: "你從穩定建設開始，持續透過建設，最終成為實現者。",
    advice: "你的強項在於建立穩固的系統，先打好基礎，再將其轉化為實際的成就與影響力。"
  },

  // 第28組：189 - 開創→豐盛→圓滿
  "189": {
    title: "開創實現的整合者",
    journey: {
      start: {
        number: 1,
        name: "獨立開創",
        energy: "從自主行動出發，帶著領導的能量",
        influence: "你的事業動機始於想要自己主導、開創新局"
      },
      process: {
        number: 8,
        name: "豐盛實現",
        energy: "透過成就與影響力來推進",
        influence: "在工作中你追求實際成果，善於將想法實現"
      },
      result: {
        number: 9,
        name: "圓滿整合",
        energy: "最終展現包容與完成能力",
        influence: "你的工作天賦在於將個人成就轉化為更大的善"
      }
    },
    summary: "你從獨立開創開始，透過豐盛實現，最終成為整合者。",
    advice: "先勇敢開創自己的道路，再努力實現具體成果，最後將這些成就貢獻給更大的整體。"
  },

  // 第29組：819 - 豐盛→開創→圓滿
  "819": {
    title: "實現開創的整合者",
    journey: {
      start: {
        number: 8,
        name: "豐盛實現",
        energy: "從成就影響出發，帶著資源的能量",
        influence: "你的事業動機始於想要創造實際價值、達成目標"
      },
      process: {
        number: 1,
        name: "獨立開創",
        energy: "透過自主決策與行動來推進",
        influence: "在工作中你需要將資源轉化為實際行動"
      },
      result: {
        number: 9,
        name: "圓滿整合",
        energy: "最終展現包容與完成能力",
        influence: "你的工作天賦在於將個人成就轉化為更大的善"
      }
    },
    summary: "你從豐盛實現開始，透過獨立開創，最終成為整合者。",
    advice: "先建立實際的成就，再勇敢開創新方向，最後將這些成就整合為更大的貢獻。"
  },

  // 第30組：279 - 協調→靜心→圓滿
  "279": {
    title: "協調思考的整合者",
    journey: {
      start: {
        number: 2,
        name: "合作協調",
        energy: "從關係連結出發，帶著敏感的能量",
        influence: "你的事業動機始於想要創造和諧的環境"
      },
      process: {
        number: 7,
        name: "靜心思考",
        energy: "透過深度分析與反思來推進",
        influence: "在工作中你需要理解事物的本質，追求真相"
      },
      result: {
        number: 9,
        name: "圓滿整合",
        energy: "最終展現包容與完成能力",
        influence: "你的工作天賦在於將人際洞察轉化為完整的理解"
      }
    },
    summary: "你從合作協調開始，透過靜心思考，最終成為整合者。",
    advice: "先建立良好的人際關係，再深入思考其意義，最後將這些洞察整合為完整的理解。"
  },

  // 第31組：729 - 靜心→協調→圓滿
  "729": {
    title: "思考協調的整合者",
    journey: {
      start: {
        number: 7,
        name: "靜心思考",
        energy: "從深度分析出發，帶著求真的能量",
        influence: "你的事業動機始於想要理解事物的本質、追尋真相"
      },
      process: {
        number: 2,
        name: "合作協調",
        energy: "透過人際連結與平衡來推進",
        influence: "在工作中你需要團隊合作，善於調和不同意見"
      },
      result: {
        number: 9,
        name: "圓滿整合",
        energy: "最終展現包容與完成能力",
        influence: "你的工作天賦在於將深刻理解轉化為和諧的整合"
      }
    },
    summary: "你從靜心思考開始，透過合作協調，最終成為整合者。",
    advice: "先深入思考事物的本質，再與人合作協調，最後將這些理解整合為和諧的整體。"
  },

  // 第32組：369 - 表達→關愛→圓滿
  "369": {
    title: "表達完美的品質調音者",
    journey: {
      start: {
        number: 3,
        name: "創意表達",
        energy: "從創造力出發，帶著快樂的能量",
        influence: "你的事業動機始於想要分享創意、帶來歡樂"
      },
      process: {
        number: 6,
        name: "完美關愛",
        energy: "透過精修、微調、深度校準來推進",
        influence: "在工作中你能看出『差一點點』在哪裡，讓作品變成熟"
      },
      result: {
        number: 9,
        name: "圓滿整合",
        energy: "最終展現包容與完成能力",
        influence: "你的工作天賦在於將創意帶到能觸動人的高度"
      }
    },
    summary: "你從創意表達開始，透過完美精修，最終以圓滿收束。",
    advice: "先自由表達你的創意，再精修調整到位，你最亮的時候，是當作品『剛剛好』的那一刻。"
  },

  // 第33組：639 - 關愛→表達→圓滿
  "639": {
    title: "完美表達的智慧整合者",
    journey: {
      start: {
        number: 6,
        name: "完美關愛",
        energy: "從美感、完整性與細緻觀察出發",
        influence: "你的事業動機始於能一眼看出什麼地方可以更好"
      },
      process: {
        number: 3,
        name: "創意表達",
        energy: "透過創造力與溝通來推進",
        influence: "在工作中你透過語言、設計、創意把敏感轉成可被看懂的形式"
      },
      result: {
        number: 9,
        name: "圓滿整合",
        energy: "最終展現包容與完成能力",
        influence: "你的工作天賦在於將碎片整合成全貌，形成具有深度與影響力的結論"
      }
    },
    summary: "你從完美追求開始，透過創意表達，最終整合出智慧性的成果。",
    advice: "先展現你對美感的追求，再用創意方式表達，你的美感是智慧的入口──不要低估它的力量。"
  },

  // 第34組：459 - 穩定→自由→圓滿
  "459": {
    title: "穩定自由的整合者",
    journey: {
      start: {
        number: 4,
        name: "穩定結構",
        energy: "從組織建設出發，帶著務實的能量",
        influence: "你的事業動機始於想要建立可靠的方法與系統"
      },
      process: {
        number: 5,
        name: "自由探索",
        energy: "透過變化與冒險來推進",
        influence: "在工作中你需要多樣性與彈性，不喜歡被束縛"
      },
      result: {
        number: 9,
        name: "圓滿整合",
        energy: "最終展現包容與完成能力",
        influence: "你的工作天賦在於在穩定基礎上完成自由的探索"
      }
    },
    summary: "你從穩定建設開始，透過自由探索，最終成為整合者。",
    advice: "先建立穩固的基礎，再自由探索各種可能，最後將這些探索整合為完整的成果。"
  },

  // 第35組：549 - 自由→穩定→圓滿
  "549": {
    title: "自由穩定的整合者",
    journey: {
      start: {
        number: 5,
        name: "自由探索",
        energy: "從變化冒險出發，帶著適應的能量",
        influence: "你的事業動機始於想要嘗試新鮮事物、尋求多樣性"
      },
      process: {
        number: 4,
        name: "穩定結構",
        energy: "透過組織與建設來推進",
        influence: "在工作中你需要建立穩固的方法與系統"
      },
      result: {
        number: 9,
        name: "圓滿整合",
        energy: "最終展現包容與完成能力",
        influence: "你的工作天賦在於在自由探索中建立完整的系統"
      }
    },
    summary: "你從自由探索開始，透過穩定建設，最終成為整合者。",
    advice: "先允許自己自由探索，再建立穩固的基礎，最後將這些探索整合為完整的系統。"
  }
};

// ====== 完整的家庭碼旅程解析 ======
window.familyJourneys = {
  // 第1組：123 - 開創→協調→表達
  "123": {
    title: "開創協調的表達之家",
    journey: {
      start: {
        number: 1,
        name: "獨立空間",
        energy: "情感始於需要自主性與個人空間",
        influence: "你在關係中首先需要保有自我的獨立性"
      },
      process: {
        number: 2,
        name: "合作協調", 
        energy: "透過情感交流與平衡來連結",
        influence: "在關係中你學習與人分享感受，尋找共識"
      },
      result: {
        number: 3,
        name: "創意表達",
        energy: "最終展現快樂的溝通能力",
        influence: "你的家庭天賦是用輕鬆有趣的方式表達愛"
      }
    },
    summary: "你從獨立出發，透過協調連結，最終成為快樂的表達者。",
    advice: "在關係中，先確立自己的獨立空間，再學習溫柔地連結，最後用創意的方式表達你的愛。"
  },

  // 第2組：213 - 協調→開創→表達  
  "213": {
    title: "協調開創的表達之家",
    journey: {
      start: {
        number: 2,
        name: "合作協調",
        energy: "情感始於需要連結與和諧",
        influence: "你在關係中首先追求情感上的親密感"
      },
      process: {
        number: 1,
        name: "獨立空間",
        energy: "透過保持自我界線來成長", 
        influence: "在關係中你學習如何在親密中保有自我"
      },
      result: {
        number: 3,
        name: "創意表達",
        energy: "最終展現快樂的溝通能力",
        influence: "你的家庭天賦是在和諧關係中創造歡樂"
      }
    },
    summary: "你從協調出發，透過獨立成長，最終成為快樂的表達者。",
    advice: "在關係中，先建立情感連結，再學習保持自我界線，最後在這個平衡中創造歡樂的表達。"
  },

  // 第3組：134 - 開創→表達→穩定
  "134": {
    title: "開創表達的穩定之家",
    journey: {
      start: {
        number: 1,
        name: "獨立空間",
        energy: "情感始於需要自主性與個人空間",
        influence: "你在關係中首先需要保有自我的獨立性"
      },
      process: {
        number: 3,
        name: "創意表達",
        energy: "透過分享歡樂與創意來連結",
        influence: "在關係中你用有趣的方式表達情感"
      },
      result: {
        number: 4,
        name: "穩定基石",
        energy: "最終展現可靠的承諾能力",
        influence: "你的家庭天賦是為歡樂建立穩固的基礎"
      }
    },
    summary: "你從獨立出發，透過創意表達，最終成為穩定基石。",
    advice: "在關係中，先確立自己的獨立空間，再用創意表達情感，最後為這些歡樂建立穩固的承諾。"
  },

  // 第4組：314 - 表達→開創→穩定
  "314": {
    title: "表達開創的穩定之家",
    journey: {
      start: {
        number: 3,
        name: "創意表達",
        energy: "情感始於想要分享歡樂與趣味",
        influence: "你在關係中首先追求輕鬆愉快的互動"
      },
      process: {
        number: 1,
        name: "獨立空間",
        energy: "透過確立自我界線來成長",
        influence: "在關係中你學習在歡樂中保有自主性"
      },
      result: {
        number: 4,
        name: "穩定基石",
        energy: "最終展現可靠的承諾能力",
        influence: "你的家庭天賦是為創意表達建立穩固的家"
      }
    },
    summary: "你從表達出發，透過獨立成長，最終成為穩定基石。",
    advice: "在關係中，先分享歡樂與創意，再學習保持自我界線，最後為這些美好建立穩固的家。"
  },

  // 第5組：224 - 協調→協調→穩定
  "224": {
    title: "雙重協調的穩定之家",
    journey: {
      start: {
        number: 2,
        name: "合作協調",
        energy: "情感始於需要連結與和諧",
        influence: "你在關係中首先追求情感上的親密感"
      },
      process: {
        number: 2,
        name: "合作協調",
        energy: "持續透過情感交流來深化",
        influence: "在關係中你特別擅長感受他人的情緒"
      },
      result: {
        number: 4,
        name: "穩定基石",
        energy: "最終展現可靠的承諾能力",
        influence: "你的家庭天賦是為親密關係建立穩固的根基"
      }
    },
    summary: "你從協調出發，持續協調深化，最終成為穩定基石。",
    advice: "在關係中，你的強項是情感的連結與協調，先建立深刻的親密感，再為這份親密建立穩固的承諾。"
  },

  // 第6組：145 - 開創→穩定→自由
  "145": {
    title: "開創穩定的自由之家",
    journey: {
      start: {
        number: 1,
        name: "獨立空間",
        energy: "情感始於需要自主性與個人空間",
        influence: "你在關係中首先需要保有自我的獨立性"
      },
      process: {
        number: 4,
        name: "穩定基石",
        energy: "透過建立安全感來成長",
        influence: "在關係中你需要可靠的結構和承諾"
      },
      result: {
        number: 5,
        name: "自由呼吸",
        energy: "最終展現靈活適應的能力",
        influence: "你的家庭天賦是在穩定基礎上保有自由的空間"
      }
    },
    summary: "你從獨立出發，透過穩定成長，最終需要自由呼吸。",
    advice: "在關係中，先確立自己的獨立空間，再建立穩固的承諾，最後在這個安全基礎上保有自由的彈性。"
  },

  // 第7組：415 - 穩定→開創→自由
  "415": {
    title: "穩定開創的自由之家",
    journey: {
      start: {
        number: 4,
        name: "穩定基石",
        energy: "情感始於需要安全感與承諾",
        influence: "你在關係中首先追求可靠穩固的結構"
      },
      process: {
        number: 1,
        name: "獨立空間",
        energy: "透過保持自我界線來成長",
        influence: "在關係中你學習在安全中保有自主性"
      },
      result: {
        number: 5,
        name: "自由呼吸",
        energy: "最終展現靈活適應的能力",
        influence: "你的家庭天賦是在穩定承諾中保有自由的空間"
      }
    },
    summary: "你從穩定出發，透過獨立成長，最終需要自由呼吸。",
    advice: "在關係中，先建立穩固的安全感，再學習保持自我界線，最後在這個框架內保有自由的彈性。"
  },

  // 第8組：235 - 協調→表達→自由
  "235": {
    title: "協調表達的自由之家",
    journey: {
      start: {
        number: 2,
        name: "合作協調",
        energy: "情感始於需要連結與和諧",
        influence: "你在關係中首先追求情感上的親密感"
      },
      process: {
        number: 3,
        name: "創意表達",
        energy: "透過分享歡樂與創意來深化",
        influence: "在關係中你用有趣的方式表達情感"
      },
      result: {
        number: 5,
        name: "自由呼吸",
        energy: "最終展現靈活適應的能力",
        influence: "你的家庭天賦是在親密關係中保有自由的空間"
      }
    },
    summary: "你從協調出發，透過創意表達，最終需要自由呼吸。",
    advice: "在關係中，先建立情感的連結，再用創意方式表達，最後在這個親密中保有自由的空間。"
  },

  // 第9組：325 - 表達→協調→自由
  "325": {
    title: "表達協調的自由之家",
    journey: {
      start: {
        number: 3,
        name: "創意表達",
        energy: "情感始於想要分享歡樂與趣味",
        influence: "你在關係中首先追求輕鬆愉快的互動"
      },
      process: {
        number: 2,
        name: "合作協調",
        energy: "透過情感交流來深化",
        influence: "在關係中你學習在歡樂中建立親密感"
      },
      result: {
        number: 5,
        name: "自由呼吸",
        energy: "最終展現靈活適應的能力",
        influence: "你的家庭天賦是在歡樂關係中保有自由的空間"
      }
    },
    summary: "你從表達出發，透過協調深化，最終需要自由呼吸。",
    advice: "在關係中，先分享歡樂與創意，再建立情感的連結，最後在這個和諧中保有自由的空間。"
  },

  // 第10組：156 - 開創→自由→完美關愛
  "156": {
    title: "開創自由的完美之家",
    journey: {
      start: {
        number: 1,
        name: "獨立空間",
        energy: "情感始於需要自主性與個人空間",
        influence: "你在關係中首先需要保有自我的獨立性"
      },
      process: {
        number: 5,
        name: "自由呼吸",
        energy: "透過靈活適應來成長",
        influence: "在關係中你需要變化的空間，不喜歡被束縛"
      },
      result: {
        number: 6,
        name: "完美關愛",
        energy: "最終展現理想化的照顧能力",
        influence: "你的家庭天賦是在自由獨立中創造完美的關愛"
      }
    },
    summary: "你從獨立出發，透過自由探索，最終成為完美關愛者。",
    advice: "在關係中，先確立自己的獨立空間，再保持自由的彈性，最後用理想的方式創造關愛的環境。"
  },

  // 第11組：516 - 自由→開創→完美關愛
  "516": {
    title: "自由開創的完美之家",
    journey: {
      start: {
        number: 5,
        name: "自由呼吸",
        energy: "情感始於需要變化與冒險",
        influence: "你在關係中首先追求新鮮感與自由"
      },
      process: {
        number: 1,
        name: "獨立空間",
        energy: "透過確立自我界線來成長",
        influence: "在關係中你學習在自由中保有自我"
      },
      result: {
        number: 6,
        name: "完美關愛",
        energy: "最終展現理想化的照顧能力",
        influence: "你的家庭天賦是在自由探索中創造完美的關愛"
      }
    },
    summary: "你從自由出發，透過獨立成長，最終成為完美關愛者。",
    advice: "在關係中，先保持自由的空間，再確立自己的獨立性，最後用理想的方式創造關愛的環境。"
  },

  // 第12組：246 - 協調→穩定→完美關愛
  "246": {
    title: "協調穩定的完美之家",
    journey: {
      start: {
        number: 2,
        name: "合作協調",
        energy: "情感始於需要連結與和諧",
        influence: "你在關係中首先追求情感上的親密感"
      },
      process: {
        number: 4,
        name: "穩定基石",
        energy: "透過建立安全感來深化",
        influence: "在關係中你需要可靠的結構和承諾"
      },
      result: {
        number: 6,
        name: "完美關愛",
        energy: "最終展現理想化的照顧能力",
        influence: "你的家庭天賦是為親密關係創造完美的和諧"
      }
    },
    summary: "你從協調出發，透過穩定成長，最終成為完美關愛者。",
    advice: "在關係中，先建立情感的連結，再建立穩固的承諾，最後用理想的方式創造完美的和諧。"
  },

  // 第13組：426 - 穩定→協調→完美關愛
  "426": {
    title: "穩定協調的完美之家",
    journey: {
      start: {
        number: 4,
        name: "穩定基石",
        energy: "情感始於需要安全感與承諾",
        influence: "你在關係中首先追求可靠穩固的結構"
      },
      process: {
        number: 2,
        name: "合作協調",
        energy: "透過情感交流來深化",
        influence: "在關係中你學習在安全中建立親密感"
      },
      result: {
        number: 6,
        name: "完美關愛",
        energy: "最終展現理想化的照顧能力",
        influence: "你的家庭天賦是在穩定基礎上創造完美的和諧"
      }
    },
    summary: "你從穩定出發，透過協調深化，最終成為完美關愛者。",
    advice: "在關係中，先建立穩固的安全感，再建立情感的連結，最後用理想的方式創造完美的和諧。"
  },

  // 第14組：336 - 表達→表達→完美關愛
  "336": {
    title: "雙重表達的完美之家",
    journey: {
      start: {
        number: 3,
        name: "創意表達",
        energy: "情感始於想要分享歡樂與趣味",
        influence: "你在關係中首先追求輕鬆愉快的互動"
      },
      process: {
        number: 3,
        name: "創意表達",
        energy: "持續透過歡樂分享來深化",
        influence: "在關係中你特別擅長用創意創造快樂"
      },
      result: {
        number: 6,
        name: "完美關愛",
        energy: "最終展現理想化的照顧能力",
        influence: "你的家庭天賦是用創意歡樂創造完美的關愛環境"
      }
    },
    summary: "你從表達出發，持續表達深化，最終成為完美關愛者。",
    advice: "在關係中，你的強項是創意與歡樂的表達，先用它來創造快樂，再深化為完美的關愛環境。"
  },

  // 第15組：167 - 開創→完美關愛→靜心
  "167": {
    title: "開創完美的思考之家",
    journey: {
      start: {
        number: 1,
        name: "獨立空間",
        energy: "情感始於需要自主性與個人空間",
        influence: "你在關係中首先需要保有自我的獨立性"
      },
      process: {
        number: 6,
        name: "完美關愛",
        energy: "透過創造理想和諧來成長",
        influence: "在關係中你追求完美的照顧與和諧"
      },
      result: {
        number: 7,
        name: "靜心思考",
        energy: "最終展現深度理解的能力",
        influence: "你的家庭天賦是在完美關愛中發展深刻的理解"
      }
    },
    summary: "你從獨立出發，透過完美關愛，最終成為深度思考者。",
    advice: "在關係中，先確立自己的獨立空間，再創造完美的關愛環境，最後在這個和諧中發展深刻的理解。"
  },

  // 第16組：617 - 完美關愛→開創→靜心
  "617": {
    title: "完美開創的思考之家",
    journey: {
      start: {
        number: 6,
        name: "完美關愛",
        energy: "情感始於想要創造理想和諧",
        influence: "你在關係中首先追求完美的照顧與和諧"
      },
      process: {
        number: 1,
        name: "獨立空間",
        energy: "透過保持自我界線來成長",
        influence: "在關係中你學習在完美關愛中保有自我"
      },
      result: {
        number: 7,
        name: "靜心思考",
        energy: "最終展現深度理解的能力",
        influence: "你的家庭天賦是在完美關愛中發展深刻的理解"
      }
    },
    summary: "你從完美關愛出發，透過獨立成長，最終成為深度思考者。",
    advice: "在關係中，先創造完美的關愛環境，再確立自己的獨立性，最後在這個平衡中發展深刻的理解。"
  },

  // 第17組：257 - 協調→自由→靜心
  "257": {
    title: "協調自由的思考之家",
    journey: {
      start: {
        number: 2,
        name: "合作協調",
        energy: "情感始於需要連結與和諧",
        influence: "你在關係中首先追求情感上的親密感"
      },
      process: {
        number: 5,
        name: "自由呼吸",
        energy: "透過靈活適應來成長",
        influence: "在關係中你需要變化的空間，不喜歡被束縛"
      },
      result: {
        number: 7,
        name: "靜心思考",
        energy: "最終展現深度理解的能力",
        influence: "你的家庭天賦是在親密與自由中發展深刻的理解"
      }
    },
    summary: "你從協調出發，透過自由探索，最終成為深度思考者。",
    advice: "在關係中，先建立情感的連結，再保持自由的彈性，最後在這個動態平衡中發展深刻的理解。"
  },

  // 第18組：527 - 自由→協調→靜心
  "527": {
    title: "自由協調的思考之家",
    journey: {
      start: {
        number: 5,
        name: "自由呼吸",
        energy: "情感始於需要變化與冒險",
        influence: "你在關係中首先追求新鮮感與自由"
      },
      process: {
        number: 2,
        name: "合作協調",
        energy: "透過情感交流來成長",
        influence: "在關係中你學習在自由中建立親密感"
      },
      result: {
        number: 7,
        name: "靜心思考",
        energy: "最終展現深度理解的能力",
        influence: "你的家庭天賦是在自由探索中發展親密的理解"
      }
    },
    summary: "你從自由出發，透過協調成長，最終成為深度思考者。",
    advice: "在關係中，先保持自由的空間，再建立情感的連結，最後在這個結合中發展深刻的理解。"
  },

  // 第19組：347 - 表達→穩定→靜心
  "347": {
    title: "表達穩定的思考之家",
    journey: {
      start: {
        number: 3,
        name: "創意表達",
        energy: "情感始於想要分享歡樂與趣味",
        influence: "你在關係中首先追求輕鬆愉快的互動"
      },
      process: {
        number: 4,
        name: "穩定基石",
        energy: "透過建立安全感來成長",
        influence: "在關係中你需要可靠的結構和承諾"
      },
      result: {
        number: 7,
        name: "靜心思考",
        energy: "最終展現深度理解的能力",
        influence: "你的家庭天賦是在歡樂承諾中發展深刻的理解"
      }
    },
    summary: "你從表達出發，透過穩定成長，最終成為深度思考者。",
    advice: "在關係中，先分享歡樂與創意，再建立穩固的承諾，最後在這個基礎上發展深刻的理解。"
  },

  // 第20組：437 - 穩定→表達→靜心
  "437": {
    title: "穩定表達的思考之家",
    journey: {
      start: {
        number: 4,
        name: "穩定基石",
        energy: "情感始於需要安全感與承諾",
        influence: "你在關係中首先追求可靠穩固的結構"
      },
      process: {
        number: 3,
        name: "創意表達",
        energy: "透過分享歡樂來成長",
        influence: "在關係中你用有趣的方式表達情感"
      },
      result: {
        number: 7,
        name: "靜心思考",
        energy: "最終展現深度理解的能力",
        influence: "你的家庭天賦是在穩定基礎上發展歡樂的理解"
      }
    },
    summary: "你從穩定出發，透過表達成長，最終成為深度思考者。",
    advice: "在關係中，先建立穩固的安全感，再用創意表達情感，最後在這個結合中發展深刻的理解。"
  },

  // 第21組：178 - 開創→靜心→豐盛
  "178": {
    title: "開創思考的豐盛之家",
    journey: {
      start: {
        number: 1,
        name: "獨立空間",
        energy: "情感始於需要自主性與個人空間",
        influence: "你在關係中首先需要保有自我的獨立性"
      },
      process: {
        number: 7,
        name: "靜心思考",
        energy: "透過深度理解來成長",
        influence: "在關係中你追求對情感本質的洞察"
      },
      result: {
        number: 8,
        name: "豐盛資源",
        energy: "最終展現滋養支持的能力",
        influence: "你的家庭天賦是將深刻理解轉化為實際的滋養"
      }
    },
    summary: "你從獨立出發，透過靜心思考，最終成為豐盛滋養者。",
    advice: "在關係中，先確立自己的獨立空間，再發展深刻的理解，最後將這些洞察轉化為實際的滋養。"
  },

  // 第22組：718 - 靜心→開創→豐盛
  "718": {
    title: "思考開創的豐盛之家",
    journey: {
      start: {
        number: 7,
        name: "靜心思考",
        energy: "情感始於想要理解關係的本質",
        influence: "你在關係中首先追求深刻的洞察"
      },
      process: {
        number: 1,
        name: "獨立空間",
        energy: "透過保持自我界線來成長",
        influence: "在關係中你學習在理解中保有自我"
      },
      result: {
        number: 8,
        name: "豐盛資源",
        energy: "最終展現滋養支持的能力",
        influence: "你的家庭天賦是將深刻理解轉化為實際的滋養"
      }
    },
    summary: "你從靜心出發，透過獨立成長，最終成為豐盛滋養者。",
    advice: "在關係中，先發展深刻的理解，再確立自己的獨立性，最後將這些洞察轉化為實際的滋養。"
  },

  // 第23組：268 - 協調→完美關愛→豐盛
  "268": {
    title: "協調完美的豐盛之家",
    journey: {
      start: {
        number: 2,
        name: "合作協調",
        energy: "情感始於需要連結與和諧",
        influence: "你在關係中首先追求情感上的親密感"
      },
      process: {
        number: 6,
        name: "完美關愛",
        energy: "透過創造理想和諧來成長",
        influence: "在關係中你追求完美的照顧與和諧"
      },
      result: {
        number: 8,
        name: "豐盛資源",
        energy: "最終展現滋養支持的能力",
        influence: "你的家庭天賦是將完美關愛轉化為實際的滋養"
      }
    },
    summary: "你從協調出發，透過完美關愛，最終成為豐盛滋養者。",
    advice: "在關係中，先建立情感的連結，再創造完美的關愛環境，最後將這份和諧轉化為實際的滋養。"
  },

  // 第24組：628 - 完美關愛→協調→豐盛
  "628": {
    title: "完美協調的豐盛之家",
    journey: {
      start: {
        number: 6,
        name: "完美關愛",
        energy: "情感始於想要創造理想和諧",
        influence: "你在關係中首先追求完美的照顧與和諧"
      },
      process: {
        number: 2,
        name: "合作協調",
        energy: "透過情感交流來成長",
        influence: "在關係中你學習在完美關愛中建立親密感"
      },
      result: {
        number: 8,
        name: "豐盛資源",
        energy: "最終展現滋養支持的能力",
        influence: "你的家庭天賦是將完美關愛轉化為實際的滋養"
      }
    },
    summary: "你從完美關愛出發，透過協調成長，最終成為豐盛滋養者。",
    advice: "在關係中，先創造完美的關愛環境，再建立情感的連結，最後將這份和諧轉化為實際的滋養。"
  },

  // 第25組：358 - 表達→自由→豐盛
  "358": {
    title: "表達自由的豐盛之家",
    journey: {
      start: {
        number: 3,
        name: "創意表達",
        energy: "情感始於想要分享歡樂與趣味",
        influence: "你在關係中首先追求輕鬆愉快的互動"
      },
      process: {
        number: 5,
        name: "自由呼吸",
        energy: "透過靈活適應來成長",
        influence: "在關係中你需要變化的空間，不喜歡被束縛"
      },
      result: {
        number: 8,
        name: "豐盛資源",
        energy: "最終展現滋養支持的能力",
        influence: "你的家庭天賦是將創意探索轉化為實際的滋養"
      }
    },
    summary: "你從表達出發，透過自由探索，最終成為豐盛滋養者。",
    advice: "在關係中，先分享歡樂與創意，再保持自由的彈性，最後將這些探索轉化為實際的滋養。"
  },

  // 第26組：538 - 自由→表達→豐盛
  "538": {
    title: "自由表達的豐盛之家",
    journey: {
      start: {
        number: 5,
        name: "自由呼吸",
        energy: "情感始於需要變化與冒險",
        influence: "你在關係中首先追求新鮮感與自由"
      },
      process: {
        number: 3,
        name: "創意表達",
        energy: "透過分享歡樂來成長",
        influence: "在關係中用有趣的方式表達情感"
      },
      result: {
        number: 8,
        name: "豐盛資源",
        energy: "最終展現滋養支持的能力",
        influence: "你的家庭天賦是將自由探索轉化為有創意的滋養"
      }
    },
    summary: "你從自由出發，透過表達成長，最終成為豐盛滋養者。",
    advice: "在關係中，先保持自由的空間，再用創意表達情感，最後將這些探索轉化為實際的滋養。"
  },

  // 第27組：448 - 穩定→穩定→豐盛
  "448": {
    title: "雙重穩定的豐盛之家",
    journey: {
      start: {
        number: 4,
        name: "穩定基石",
        energy: "情感始於需要安全感與承諾",
        influence: "你在關係中首先追求可靠穩固的結構"
      },
      process: {
        number: 4,
        name: "穩定基石",
        energy: "持續透過建立安全感來深化",
        influence: "在關係中你特別擅長創造穩固的承諾"
      },
      result: {
        number: 8,
        name: "豐盛資源",
        energy: "最終展現滋養支持的能力",
        influence: "你的家庭天賦是將穩固基礎轉化為實際的滋養"
      }
    },
    summary: "你從穩定出發，持續穩定深化，最終成為豐盛滋養者。",
    advice: "在關係中，你的強項是建立安全感與承諾，先用它創造穩固的基礎，再將其轉化為實際的滋養。"
  },

  // 第28組：189 - 開創→豐盛→圓滿
  "189": {
    title: "開創豐盛的圓滿之家",
    journey: {
      start: {
        number: 1,
        name: "獨立空間",
        energy: "情感始於需要自主性與個人空間",
        influence: "你在關係中首先需要保有自我的獨立性"
      },
      process: {
        number: 8,
        name: "豐盛資源",
        energy: "透過實際滋養來成長",
        influence: "在關係中你追求提供實際的支持與資源"
      },
      result: {
        number: 9,
        name: "圓滿整合",
        energy: "最終展現包容完成的能力",
        influence: "你的家庭天賦是將獨立與滋養整合為完整的愛"
      }
    },
    summary: "你從獨立出發，透過豐盛滋養，最終成為圓滿整合者。",
    advice: "在關係中，先確立自己的獨立空間，再提供實際的滋養，最後將這兩者整合為完整的愛的循環。"
  },

  // 第29組：819 - 豐盛→開創→圓滿
  "819": {
    title: "豐盛開創的圓滿之家",
    journey: {
      start: {
        number: 8,
        name: "豐盛資源",
        energy: "情感始於想要提供實際的滋養",
        influence: "你在關係中首先追求實質的支持與資源"
      },
      process: {
        number: 1,
        name: "獨立空間",
        energy: "透過保持自我界線來成長",
        influence: "在關係中你學習在滋養中保有自我"
      },
      result: {
        number: 9,
        name: "圓滿整合",
        energy: "最終展現包容完成的能力",
        influence: "你的家庭天賦是將滋養與獨立整合為完整的愛"
      }
    },
    summary: "你從豐盛出發，透過獨立成長，最終成為圓滿整合者。",
    advice: "在關係中，先提供實際的滋養，再確立自己的獨立性，最後將這兩者整合為完整的愛的循環。"
  },

  // 第30組：279 - 協調→靜心→圓滿
  "279": {
    title: "協調思考的圓滿之家",
    journey: {
      start: {
        number: 2,
        name: "合作協調",
        energy: "情感始於需要連結與和諧",
        influence: "你在關係中首先追求情感上的親密感"
      },
      process: {
        number: 7,
        name: "靜心思考",
        energy: "透過深度理解來成長",
        influence: "在關係中你追求對情感本質的洞察"
      },
      result: {
        number: 9,
        name: "圓滿整合",
        energy: "最終展現包容完成的能力",
        influence: "你的家庭天賦是將親密與理解整合為完整的愛"
      }
    },
    summary: "你從協調出發，透過靜心思考，最終成為圓滿整合者。",
    advice: "在關係中，先建立情感的連結，再發展深刻的理解，最後將這兩者整合為完整的愛的智慧。"
  },

  // 第31組：729 - 靜心→協調→圓滿
  "729": {
    title: "思考協調的圓滿之家",
    journey: {
      start: {
        number: 7,
        name: "靜心思考",
        energy: "情感始於想要理解關係的本質",
        influence: "你在關係中首先追求深刻的洞察"
      },
      process: {
        number: 2,
        name: "合作協調",
        energy: "透過情感交流來成長",
        influence: "在關係中你學習在理解中建立親密感"
      },
      result: {
        number: 9,
        name: "圓滿整合",
        energy: "最終展現包容完成的能力",
        influence: "你的家庭天賦是將理解與親密整合為完整的愛"
      }
    },
    summary: "你從靜心出發，透過協調成長，最終成為圓滿整合者。",
    advice: "在關係中，先發展深刻的理解，再建立情感的連結，最後將這兩者整合為完整的愛的智慧。"
  },

  // 第32組：369 - 表達→完美關愛→圓滿
  "369": {
    title: "表達完美的圓滿之家",
    journey: {
      start: {
        number: 3,
        name: "創意表達",
        energy: "情感始於想要分享歡樂與趣味",
        influence: "你在關係中首先追求輕鬆愉快的互動"
      },
      process: {
        number: 6,
        name: "完美關愛",
        energy: "透過創造理想和諧來成長",
        influence: "在關係中你追求完美的照顧與和諧"
      },
      result: {
        number: 9,
        name: "圓滿整合",
        energy: "最終展現包容完成的能力",
        influence: "你的家庭天賦是將歡樂與完美整合為完整的愛"
      }
    },
    summary: "你從表達出發，透過完美關愛，最終成為圓滿整合者。",
    advice: "在關係中，先分享歡樂與創意，再創造完美的關愛環境，最後將這兩者整合為完整的愛的體驗。"
  },

  // 第33組：639 - 完美關愛→表達→圓滿
  "639": {
    title: "完美表達的圓滿之家",
    journey: {
      start: {
        number: 6,
        name: "完美關愛",
        energy: "情感始於想要創造理想和諧",
        influence: "你在關係中首先追求完美的照顧與和諧"
      },
      process: {
        number: 3,
        name: "創意表達",
        energy: "透過分享歡樂來成長",
        influence: "在關係中用有趣的方式表達情感"
      },
      result: {
        number: 9,
        name: "圓滿整合",
        energy: "最終展現包容完成的能力",
        influence: "你的家庭天賦是將完美與歡樂整合為完整的愛"
      }
    },
    summary: "你從完美關愛出發，透過表達成長，最終成為圓滿整合者。",
    advice: "在關係中，先創造完美的關愛環境，再用創意表達情感，最後將這兩者整合為完整的愛的體驗。"
  },

  // 第34組：459 - 穩定→自由→圓滿
  "459": {
    title: "穩定自由的圓滿之家",
    journey: {
      start: {
        number: 4,
        name: "穩定基石",
        energy: "情感始於需要安全感與承諾",
        influence: "你在關係中首先追求可靠穩固的結構"
      },
      process: {
        number: 5,
        name: "自由呼吸",
        energy: "透過靈活適應來成長",
        influence: "在關係中你需要變化的空間，不喜歡被束縛"
      },
      result: {
        number: 9,
        name: "圓滿整合",
        energy: "最終展現包容完成的能力",
        influence: "你的家庭天賦是將穩定與自由整合為完整的愛"
      }
    },
    summary: "你從穩定出發，透過自由探索，最終成為圓滿整合者。",
    advice: "在關係中，先建立穩固的安全感，再保持自由的彈性，最後將這兩者整合為完整的愛的平衡。"
  },

  // 第35組：549 - 自由→穩定→圓滿
  "549": {
    title: "自由穩定的圓滿之家",
    journey: {
      start: {
        number: 5,
        name: "自由呼吸",
        energy: "情感始於需要變化與冒險",
        influence: "你在關係中首先追求新鮮感與自由"
      },
      process: {
        number: 4,
        name: "穩定基石",
        energy: "透過建立安全感來成長",
        influence: "在關係中你需要可靠的結構和承諾"
      },
      result: {
        number: 9,
        name: "圓滿整合",
        energy: "最終展現包容完成的能力",
        influence: "你的家庭天賦是將自由與穩定整合為完整的愛"
      }
    },
    summary: "你從自由出發，透過穩定成長，最終成為圓滿整合者。",
    advice: "在關係中，先保持自由的空間，再建立穩固的安全感，最後將這兩者整合為完整的愛的平衡。"
  }
};

// ====== 完整的坐鎮碼旅程解析 ======
window.throneJourneys = {
  // 第1組：123 - 開創→協調→表達
  "123": {
    title: "開創協調的傳播者",
    journey: {
      start: {
        number: 1,
        name: "獨立開創",
        energy: "靈魂始於獨特的自我表達",
        influence: "你的生命課題始於勇敢做自己"
      },
      process: {
        number: 2,
        name: "合作協調", 
        energy: "透過與世界連結來成長",
        influence: "你學習在保持自我中與他人合作"
      },
      result: {
        number: 3,
        name: "創意表達",
        energy: "最終成為歡樂的傳播者",
        influence: "你的生命使命是用創意連結人心"
      }
    },
    summary: "你從獨立開創出發，透過合作協調，最終成為創意傳播者。",
    advice: "勇敢展現你的獨特，在與世界的互動中找到平衡，最終用創意為人們帶來歡樂與連結。"
  },

  // 第2組：213 - 協調→開創→表達  
  "213": {
    title: "協調開創的橋樑者",
    journey: {
      start: {
        number: 2,
        name: "合作協調",
        energy: "靈魂始於對連結的敏感",
        influence: "你的生命課題始於理解和諧的藝術"
      },
      process: {
        number: 1,
        name: "獨立開創",
        energy: "透過確立自我來成長", 
        influence: "你學習在關係中找到自己的聲音"
      },
      result: {
        number: 3,
        name: "創意表達",
        energy: "最終成為快樂的橋樑者",
        influence: "你的生命使命是連結不同的人事物"
      }
    },
    summary: "你從合作協調出發，透過獨立開創，最終成為創意橋樑者。",
    advice: "先感受世界的和諧律動，再找到自己的獨特位置，最終成為連結不同能量的創意橋樑。"
  },

  // 第3組：134 - 開創→表達→穩定
  "134": {
    title: "開創表達的建造者",
    journey: {
      start: {
        number: 1,
        name: "獨立開創",
        energy: "靈魂始於獨特的創意火花",
        influence: "你的生命課題始於信任自己的靈感"
      },
      process: {
        number: 3,
        name: "創意表達",
        energy: "透過分享歡樂來擴展",
        influence: "你學習將內在火花轉化為外在表達"
      },
      result: {
        number: 4,
        name: "穩定基石",
        energy: "最終成為可靠的建造者",
        influence: "你的生命使命是為創意建立穩固的結構"
      }
    },
    summary: "你從獨立開創出發，透過創意表達，最終成為穩定建造者。",
    advice: "信任你獨特的創意靈感，勇敢表達出來，最終為這些創意建立能持久影響的結構。"
  },

  // 第4組：314 - 表達→開創→穩定
  "314": {
    title: "表達開創的實作者",
    journey: {
      start: {
        number: 3,
        name: "創意表達",
        energy: "靈魂始於對美的感知",
        influence: "你的生命課題始於分享內在的歡樂"
      },
      process: {
        number: 1,
        name: "獨立開創",
        energy: "透過勇敢行動來成長",
        influence: "你學習將創意轉化為實際行動"
      },
      result: {
        number: 4,
        name: "穩定基石",
        energy: "最終成為務實的實作者",
        influence: "你的生命使命是將美好願景落實於現實"
      }
    },
    summary: "你從創意表達出發，透過獨立開創，最終成為穩定實作者。",
    advice: "先分享你感受到的美好，再勇敢採取行動，最終將這些願景建構成穩固的現實。"
  },

  // 第5組：224 - 協調→協調→穩定
  "224": {
    title: "雙重協調的和諧者",
    journey: {
      start: {
        number: 2,
        name: "合作協調",
        energy: "靈魂始於深刻的同理心",
        influence: "你的生命課題始於理解關係的本質"
      },
      process: {
        number: 2,
        name: "合作協調",
        energy: "持續透過連結來深化",
        influence: "你特別擅長感知能量的流動與平衡"
      },
      result: {
        number: 4,
        name: "穩定基石",
        energy: "最終成為和諧的穩定者",
        influence: "你的生命使命是為世界帶來穩定的和諧"
      }
    },
    summary: "你從合作協調出發，持續協調深化，最終成為和諧穩定者。",
    advice: "運用你深刻的同理心，感知世界的能量流動，最終成為帶來穩定和諧的基石。"
  },

  // 第6組：145 - 開創→穩定→自由
  "145": {
    title: "開創穩定的探險家",
    journey: {
      start: {
        number: 1,
        name: "獨立開創",
        energy: "靈魂始於自主的意志",
        influence: "你的生命課題始於跟隨內在的衝動"
      },
      process: {
        number: 4,
        name: "穩定基石",
        energy: "透過建立結構來成長",
        influence: "你學習為自己的衝動找到堅實的基礎"
      },
      result: {
        number: 5,
        name: "自由體驗",
        energy: "最終成為自由的探險家",
        influence: "你的生命使命是在穩定基礎上自由探索"
      }
    },
    summary: "你從獨立開創出發，透過穩定基石，最終成為自由探險家。",
    advice: "跟隨你內在的衝動，為它建立穩固的基礎，最終在這個結構中自由探索無限可能。"
  },

  // 第7組：415 - 穩定→開創→自由
  "415": {
    title: "穩定開創的改革者",
    journey: {
      start: {
        number: 4,
        name: "穩定基石",
        energy: "靈魂始於對結構的直覺",
        influence: "你的生命課題始於建立可靠的系統"
      },
      process: {
        number: 1,
        name: "獨立開創",
        energy: "透過勇敢突破來成長",
        influence: "你學習在穩定中開創新的可能性"
      },
      result: {
        number: 5,
        name: "自由體驗",
        energy: "最終成為自由的改革者",
        influence: "你的生命使命是在傳統中創造新的自由"
      }
    },
    summary: "你從穩定基石出發，透過獨立開創，最終成為自由改革者。",
    advice: "先建立穩固的基礎，再勇敢開創新路，最終在傳統與創新間找到自由的平衡。"
  },

  // 第8組：235 - 協調→表達→自由
  "235": {
    title: "協調表達的流動者",
    journey: {
      start: {
        number: 2,
        name: "合作協調",
        energy: "靈魂始於敏感的連結力",
        influence: "你的生命課題始於感知無形的連結"
      },
      process: {
        number: 3,
        name: "創意表達",
        energy: "透過藝術化表達來成長",
        influence: "你學習將感知轉化為美麗的表達"
      },
      result: {
        number: 5,
        name: "自由體驗",
        energy: "最終成為自由的流動者",
        influence: "你的生命使命是讓能量自由流動與轉化"
      }
    },
    summary: "你從合作協調出發，透過創意表達，最終成為自由流動者。",
    advice: "感知世界的隱形連結，用創意將其表達出來，最終成為讓能量自由流動的管道。"
  },

  // 第9組：325 - 表達→協調→自由
  "325": {
    title: "表達協調的舞者",
    journey: {
      start: {
        number: 3,
        name: "創意表達",
        energy: "靈魂始於內在的歡樂泉源",
        influence: "你的生命課題始於分享生命的喜悅"
      },
      process: {
        number: 2,
        name: "合作協調",
        energy: "透過與人共鳴來成長",
        influence: "你學習在表達中找到與世界的和諧"
      },
      result: {
        number: 5,
        name: "自由體驗",
        energy: "最終成為自由的舞者",
        influence: "你的生命使命是在和諧中自由創造"
      }
    },
    summary: "你從創意表達出發，透過合作協調，最終成為自由舞者。",
    advice: "分享你內在的歡樂，在與世界的互動中找到節奏，最終在和諧中自由舞動創造。"
  },

  // 第10組：156 - 開創→自由→完美關愛
  "156": {
    title: "開創自由的療癒者",
    journey: {
      start: {
        number: 1,
        name: "獨立開創",
        energy: "靈魂始於獨特的生命力",
        influence: "你的生命課題始於活出真實的自己"
      },
      process: {
        number: 5,
        name: "自由體驗",
        energy: "透過多元探索來成長",
        influence: "你學習在自由中擴展生命的維度"
      },
      result: {
        number: 6,
        name: "完美關愛",
        energy: "最終成為完美的療癒者",
        influence: "你的生命使命是用自由的心創造完美的愛"
      }
    },
    summary: "你從獨立開創出發，透過自由體驗，最終成為完美療癒者。",
    advice: "活出真實的自己，自由探索生命，最終用這份自由創造完美的療癒與關愛。"
  },

  // 第11組：516 - 自由→開創→完美關愛
  "516": {
    title: "自由開創的美化者",
    journey: {
      start: {
        number: 5,
        name: "自由體驗",
        energy: "靈魂始於對變化的渴望",
        influence: "你的生命課題始於擁抱生命的多樣性"
      },
      process: {
        number: 1,
        name: "獨立開創",
        energy: "透過聚焦行動來成長",
        influence: "你學習在變化中找到自己的方向"
      },
      result: {
        number: 6,
        name: "完美關愛",
        energy: "最終成為完美的美化者",
        influence: "你的生命使命是用自由精神創造完美的和諧"
      }
    },
    summary: "你從自由體驗出發，透過獨立開創，最終成為完美美化者。",
    advice: "擁抱生命的多元面貌，找到自己的獨特道路，最終用自由精神創造完美的和諧世界。"
  },

  // 第12組：246 - 協調→穩定→完美關愛
  "246": {
    title: "協調穩定的滋養者",
    journey: {
      start: {
        number: 2,
        name: "合作協調",
        energy: "靈魂始於深度的感受力",
        influence: "你的生命課題始於理解情感的智慧"
      },
      process: {
        number: 4,
        name: "穩定基石",
        energy: "透過建立安全感來成長",
        influence: "你學習為感受找到穩固的容器"
      },
      result: {
        number: 6,
        name: "完美關愛",
        energy: "最終成為完美的滋養者",
        influence: "你的生命使命是為世界帶來穩定的滋養"
      }
    },
    summary: "你從合作協調出發，透過穩定基石，最終成為完美滋養者。",
    advice: "深入感受世界的脈動，為這些感受建立安全的空間，最終成為穩定滋養的源頭。"
  },

  // 第13組：426 - 穩定→協調→完美關愛
  "426": {
    title: "穩定協調的容器",
    journey: {
      start: {
        number: 4,
        name: "穩定基石",
        energy: "靈魂始於結構的智慧",
        influence: "你的生命課題始於建立有形的支持"
      },
      process: {
        number: 2,
        name: "合作協調",
        energy: "透過情感連結來成長",
        influence: "你學習在結構中注入溫暖的能量"
      },
      result: {
        number: 6,
        name: "完美關愛",
        energy: "最終成為完美的容器",
        influence: "你的生命使命是成為愛與支持的完美容器"
      }
    },
    summary: "你從穩定基石出發，透過合作協調，最終成為完美容器。",
    advice: "建立穩固的支持系統，在其中注入情感的溫暖，最終成為承載完美關愛的容器。"
  },

  // 第14組：336 - 表達→表達→完美關愛
  "336": {
    title: "雙重表達的藝術家",
    journey: {
      start: {
        number: 3,
        name: "創意表達",
        energy: "靈魂始於歡樂的創造力",
        influence: "你的生命課題始於展現內在的美"
      },
      process: {
        number: 3,
        name: "創意表達",
        energy: "持續透過創造來深化",
        influence: "你特別擅長將美轉化為各種形式"
      },
      result: {
        number: 6,
        name: "完美關愛",
        energy: "最終成為完美的藝術家",
        influence: "你的生命使命是用創作為世界帶來完美的愛"
      }
    },
    summary: "你從創意表達出發，持續表達深化，最終成為完美藝術家。",
    advice: "盡情展現你內在的美，不斷深化你的創造，最終用藝術為世界帶來完美的愛的體驗。"
  },

  // 第15組：167 - 開創→完美關愛→靜心
  "167": {
    title: "開創完美的智者",
    journey: {
      start: {
        number: 1,
        name: "獨立開創",
        energy: "靈魂始於獨特的真理追尋",
        influence: "你的生命課題始於走自己的道路"
      },
      process: {
        number: 6,
        name: "完美關愛",
        energy: "透過創造和諧來成長",
        influence: "你學習在道路上創造完美的愛"
      },
      result: {
        number: 7,
        name: "靜心思考",
        energy: "最終成為深度的智者",
        influence: "你的生命使命是在完美愛中發現深度的智慧"
      }
    },
    summary: "你從獨立開創出發，透過完美關愛，最終成為深度智者。",
    advice: "勇敢走自己的路，在路上創造完美的和諧，最終在愛中發現生命的深度智慧。"
  },

  // 第16組：617 - 完美關愛→開創→靜心
  "617": {
    title: "完美開創的探索者",
    journey: {
      start: {
        number: 6,
        name: "完美關愛",
        energy: "靈魂始於對完美的直覺",
        influence: "你的生命課題始於創造理想的和諧"
      },
      process: {
        number: 1,
        name: "獨立開創",
        energy: "透過勇敢行動來成長",
        influence: "你學習將完美願景付諸實踐"
      },
      result: {
        number: 7,
        name: "靜心思考",
        energy: "最終成為深度的探索者",
        influence: "你的生命使命是在實踐中探索真理的本質"
      }
    },
    summary: "你從完美關愛出發，透過獨立開創，最終成為深度探索者。",
    advice: "跟隨你對完美的直覺，勇敢將其實現，最終在實踐中深入探索生命的真理。"
  },

  // 第17組：257 - 協調→自由→靜心
  "257": {
    title: "協調自由的哲學家",
    journey: {
      start: {
        number: 2,
        name: "合作協調",
        energy: "靈魂始於關係的奧秘",
        influence: "你的生命課題始於理解連結的藝術"
      },
      process: {
        number: 5,
        name: "自由體驗",
        energy: "透過多元體驗來成長",
        influence: "你學習在關係中保持自由的空間"
      },
      result: {
        number: 7,
        name: "靜心思考",
        energy: "最終成為深度的哲學家",
        influence: "你的生命使命是在關係與自由間發現智慧"
      }
    },
    summary: "你從合作協調出發，透過自由體驗，最終成為深度哲學家。",
    advice: "深入理解關係的藝術，在其中保持自由的探索，最終發現連結與獨立間的深刻智慧。"
  },

  // 第18組：527 - 自由→協調→靜心
  "527": {
    title: "自由協調的觀察者",
    journey: {
      start: {
        number: 5,
        name: "自由體驗",
        energy: "靈魂始於對變化的熱愛",
        influence: "你的生命課題始於擁抱生命的流動"
      },
      process: {
        number: 2,
        name: "合作協調",
        energy: "透過深度連結來成長",
        influence: "你學習在自由中建立有意義的關係"
      },
      result: {
        number: 7,
        name: "靜心思考",
        energy: "最終成為深度的觀察者",
        influence: "你的生命使命是在流動中觀察永恆的真理"
      }
    },
    summary: "你從自由體驗出發，透過合作協調，最終成為深度觀察者。",
    advice: "擁抱生命的流動變化，在其中建立深刻的連結，最終成為觀察生命真理的智者。"
  },

  // 第19組：347 - 表達→穩定→靜心
  "347": {
    title: "表達穩定的建築師",
    journey: {
      start: {
        number: 3,
        name: "創意表達",
        energy: "靈魂始於內在的靈感泉源",
        influence: "你的生命課題始於信任創造的衝動"
      },
      process: {
        number: 4,
        name: "穩定基石",
        energy: "透過建立結構來成長",
        influence: "你學習為靈感找到堅實的基礎"
      },
      result: {
        number: 7,
        name: "靜心思考",
        energy: "最終成為深度的建築師",
        influence: "你的生命使命是為創意建造智慧的殿堂"
      }
    },
    summary: "你從創意表達出發，透過穩定基石，最終成為深度建築師。",
    advice: "信任你的創造靈感，為它建立穩固的基礎，最終建造承載智慧的美麗結構。"
  },

  // 第20組：437 - 穩定→表達→靜心
  "437": {
    title: "穩定表達的匠人",
    journey: {
      start: {
        number: 4,
        name: "穩定基石",
        energy: "靈魂始於結構的直覺",
        influence: "你的生命課題始於建立可靠的支持"
      },
      process: {
        number: 3,
        name: "創意表達",
        energy: "透過藝術化表達來成長",
        influence: "你學習在結構中注入美麗的能量"
      },
      result: {
        number: 7,
        name: "靜心思考",
        energy: "最終成為深度的匠人",
        influence: "你的生命使命是在穩定中創造智慧的藝術"
      }
    },
    summary: "你從穩定基石出發，透過創意表達，最終成為深度匠人。",
    advice: "建立穩固的基礎，在其中注入創意的表達，最終創造融合智慧與美的藝術作品。"
  },

  // 第21組：178 - 開創→靜心→豐盛
  "178": {
    title: "開創智慧的顯化者",
    journey: {
      start: {
        number: 1,
        name: "獨立開創",
        energy: "靈魂始於獨特的生命意願",
        influence: "你的生命課題始於實現內在的藍圖"
      },
      process: {
        number: 7,
        name: "靜心思考",
        energy: "透過深度理解來成長",
        influence: "你學習在行動中融入智慧"
      },
      result: {
        number: 8,
        name: "豐盛資源",
        energy: "最終成為豐盛的顯化者",
        influence: "你的生命使命是將智慧轉化為豐盛的成果"
      }
    },
    summary: "你從獨立開創出發，透過靜心思考，最終成為豐盛顯化者。",
    advice: "勇敢實現內在的藍圖，在行動中融入深刻的理解，最終將智慧顯化為豐盛的成果。"
  },

  // 第22組：718 - 靜心→開創→豐盛
  "718": {
    title: "智慧開創的實踐者",
    journey: {
      start: {
        number: 7,
        name: "靜心思考",
        energy: "靈魂始於對真理的渴求",
        influence: "你的生命課題始於理解生命的本質"
      },
      process: {
        number: 1,
        name: "獨立開創",
        energy: "透過勇敢行動來成長",
        influence: "你學習將理解轉化為實際創造"
      },
      result: {
        number: 8,
        name: "豐盛資源",
        energy: "最終成為豐盛的實踐者",
        influence: "你的生命使命是將智慧實踐為豐盛的現實"
      }
    },
    summary: "你從靜心思考出發，透過獨立開創，最終成為豐盛實踐者。",
    advice: "深入理解生命的本質，勇敢將其付諸實踐，最終將智慧轉化為豐盛的現實。"
  },

  // 第23組：268 - 協調→完美關愛→豐盛
  "268": {
    title: "協調完美的滋養源",
    journey: {
      start: {
        number: 2,
        name: "合作協調",
        energy: "靈魂始於關係的智慧",
        influence: "你的生命課題始於理解和諧的創造"
      },
      process: {
        number: 6,
        name: "完美關愛",
        energy: "透過創造完美來成長",
        influence: "你學習在關係中創造理想的愛"
      },
      result: {
        number: 8,
        name: "豐盛資源",
        energy: "最終成為豐盛的滋養源",
        influence: "你的生命使命是將完美的愛轉化為豐盛的滋養"
      }
    },
    summary: "你從合作協調出發，透過完美關愛，最終成為豐盛滋養源。",
    advice: "理解關係的智慧，在其中創造完美的愛，最終將這份愛轉化為滋養世界的資源。"
  },

  // 第24組：628 - 完美關愛→協調→豐盛
  "628": {
    title: "完美協調的支持者",
    journey: {
      start: {
        number: 6,
        name: "完美關愛",
        energy: "靈魂始於對完美的感知",
        influence: "你的生命課題始於創造理想的和諧"
      },
      process: {
        number: 2,
        name: "合作協調",
        energy: "透過深度連結來成長",
        influence: "你學習在完美中建立有意義的關係"
      },
      result: {
        number: 8,
        name: "豐盛資源",
        energy: "最終成為豐盛的支持者",
        influence: "你的生命使命是將完美關係轉化為實際支持"
      }
    },
    summary: "你從完美關愛出發，透過合作協調，最終成為豐盛支持者。",
    advice: "創造理想的和諧，在其中建立深刻的關係，最終將這些連結轉化為實際的支持力量。"
  },

  // 第25組：358 - 表達→自由→豐盛
  "358": {
    title: "表達自由的創造者",
    journey: {
      start: {
        number: 3,
        name: "創意表達",
        energy: "靈魂始於歡樂的創造衝動",
        influence: "你的生命課題始於分享內在的美"
      },
      process: {
        number: 5,
        name: "自由體驗",
        energy: "透過多元探索來成長",
        influence: "你學習在創造中保持自由的空間"
      },
      result: {
        number: 8,
        name: "豐盛資源",
        energy: "最終成為豐盛的創造者",
        influence: "你的生命使命是將自由創意轉化為豐盛的成果"
      }
    },
    summary: "你從創意表達出發，透過自由體驗，最終成為豐盛創造者。",
    advice: "分享你內在的美，在創造中保持自由的探索，最終將創意轉化為豐盛的成果。"
  },

  // 第26組：538 - 自由→表達→豐盛
  "538": {
    title: "自由表達的企業家",
    journey: {
      start: {
        number: 5,
        name: "自由體驗",
        energy: "靈魂始於對變化的熱情",
        influence: "你的生命課題始於擁抱生命的可能性"
      },
      process: {
        number: 3,
        name: "創意表達",
        energy: "透過藝術化呈現來成長",
        influence: "你學習將體驗轉化為美麗的表達"
      },
      result: {
        number: 8,
        name: "豐盛資源",
        energy: "最終成為豐盛的企業家",
        influence: "你的生命使命是將自由體驗轉化為有價值的創造"
      }
    },
    summary: "你從自由體驗出發，透過創意表達，最終成為豐盛企業家。",
    advice: "擁抱生命的無限可能，將體驗轉化為美麗的表達，最終創造有價值的豐盛事業。"
  },

  // 第27組：448 - 穩定→穩定→豐盛
  "448": {
    title: "雙重穩定的建造者",
    journey: {
      start: {
        number: 4,
        name: "穩定基石",
        energy: "靈魂始於結構的天賦",
        influence: "你的生命課題始於建立持久的基礎"
      },
      process: {
        number: 4,
        name: "穩定基石",
        energy: "持續透過建設來深化",
        influence: "你特別擅長創造可靠的系統"
      },
      result: {
        number: 8,
        name: "豐盛資源",
        energy: "最終成為豐盛的建造者",
        influence: "你的生命使命是將穩固結構轉化為豐盛的資源"
      }
    },
    summary: "你從穩定基石出發，持續建設深化，最終成為豐盛建造者。",
    advice: "運用你建立結構的天賦，創造可靠的系統，最終將這些基礎轉化為豐盛的資源。"
  },

  // 第28組：189 - 開創→豐盛→圓滿
  "189": {
    title: "開創豐盛的整合者",
    journey: {
      start: {
        number: 1,
        name: "獨立開創",
        energy: "靈魂始於獨特的創造衝動",
        influence: "你的生命課題始於實現個人的天賦"
      },
      process: {
        number: 8,
        name: "豐盛資源",
        energy: "透過創造價值來成長",
        influence: "你學習將天賦轉化為實際的貢獻"
      },
      result: {
        number: 9,
        name: "圓滿整合",
        energy: "最終成為圓滿的整合者",
        influence: "你的生命使命是將個人成就整合為更大的善"
      }
    },
    summary: "你從獨立開創出發，透過豐盛資源，最終成為圓滿整合者。",
    advice: "實現你獨特的天賦，將其轉化為有價值的貢獻，最終將個人成就整合為對整體的服務。"
  },

  // 第29組：819 - 豐盛→開創→圓滿
  "819": {
    title: "豐盛開創的領導者",
    journey: {
      start: {
        number: 8,
        name: "豐盛資源",
        energy: "靈魂始於資源的智慧",
        influence: "你的生命課題始於善用已有的豐盛"
      },
      process: {
        number: 1,
        name: "獨立開創",
        energy: "透過創新行動來成長",
        influence: "你學習用資源開創新的可能性"
      },
      result: {
        number: 9,
        name: "圓滿整合",
        energy: "最終成為圓滿的領導者",
        influence: "你的生命使命是將資源與創新整合為領導的力量"
      }
    },
    summary: "你從豐盛資源出發，透過獨立開創，最終成為圓滿領導者。",
    advice: "善用你已有的資源，用它們開創新的道路，最終成為整合資源與創新的領導力量。"
  },

  // 第30組：279 - 協調→靜心→圓滿
  "279": {
    title: "協調智慧的導師",
    journey: {
      start: {
        number: 2,
        name: "合作協調",
        energy: "靈魂始於關係的深度",
        influence: "你的生命課題始於理解連結的奧秘"
      },
      process: {
        number: 7,
        name: "靜心思考",
        energy: "透過深刻理解來成長",
        influence: "你學習在關係中發展智慧"
      },
      result: {
        number: 9,
        name: "圓滿整合",
        energy: "最終成為圓滿的導師",
        influence: "你的生命使命是將關係智慧分享給世界"
      }
    },
    summary: "你從合作協調出發，透過靜心思考，最終成為圓滿導師。",
    advice: "深入理解關係的奧秘，在其中發展深刻的智慧，最終成為分享關係智慧的導師。"
  },

  // 第31組：729 - 靜心→協調→圓滿
  "729": {
    title: "智慧協調的療癒者",
    journey: {
      start: {
        number: 7,
        name: "靜心思考",
        energy: "靈魂始於真理的追尋",
        influence: "你的生命課題始於發現生命的本質"
      },
      process: {
        number: 2,
        name: "合作協調",
        energy: "透過深度連結來成長",
        influence: "你學習在智慧中建立有意義的關係"
      },
      result: {
        number: 9,
        name: "圓滿整合",
        energy: "最終成為圓滿的療癒者",
        influence: "你的生命使命是用智慧療癒關係的創傷"
      }
    },
    summary: "你從靜心思考出發，透過合作協調，最終成為圓滿療癒者。",
    advice: "追尋生命的真理，在其中建立深刻的連結，最終用智慧療癒關係中的傷痛。"
  },

  // 第32組：369 - 表達→完美關愛→圓滿
  "369": {
    title: "表達完美的藝術家",
    journey: {
      start: {
        number: 3,
        name: "創意表達",
        energy: "靈魂始於美的感知",
        influence: "你的生命課題始於展現內在的創造力"
      },
      process: {
        number: 6,
        name: "完美關愛",
        energy: "透過創造理想來成長",
        influence: "你學習在創造中追求完美的和諧"
      },
      result: {
        number: 9,
        name: "圓滿整合",
        energy: "最終成為圓滿的藝術家",
        influence: "你的生命使命是將美與愛整合為完整的藝術"
      }
    },
    summary: "你從創意表達出發，透過完美關愛，最終成為圓滿藝術家。",
    advice: "展現你內在的創造力，在其中追求完美的和諧，最終將美與愛整合為完整的藝術表達。"
  },

  // 第33組：639 - 完美關愛→表達→圓滿
  "639": {
    title: "完美表達的療癒師",
    journey: {
      start: {
        number: 6,
        name: "完美關愛",
        energy: "靈魂始於和諧的直覺",
        influence: "你的生命課題始於創造理想的環境"
      },
      process: {
        number: 3,
        name: "創意表達",
        energy: "透過藝術化呈現來成長",
        influence: "你學習將和諧轉化為美麗的表達"
      },
      result: {
        number: 9,
        name: "圓滿整合",
        energy: "最終成為圓滿的療癒師",
        influence: "你的生命使命是將完美關愛轉化為療癒的藝術"
      }
    },
    summary: "你從完美關愛出發，透過創意表達，最終成為圓滿療癒師。",
    advice: "創造理想的和諧環境，將其轉化為美麗的表達，最終成為用藝術療癒的完美療癒師。"
  },

  // 第34組：459 - 穩定→自由→圓滿
  "459": {
    title: "穩定自由的平衡者",
    journey: {
      start: {
        number: 4,
        name: "穩定基石",
        energy: "靈魂始於結構的智慧",
        influence: "你的生命課題始於建立可靠的基礎"
      },
      process: {
        number: 5,
        name: "自由體驗",
        energy: "透過多元探索來成長",
        influence: "你學習在穩定中保持自由的空間"
      },
      result: {
        number: 9,
        name: "圓滿整合",
        energy: "最終成為圓滿的平衡者",
        influence: "你的生命使命是將穩定與自由整合為完整的平衡"
      }
    },
    summary: "你從穩定基石出發，透過自由體驗，最終成為圓滿平衡者。",
    advice: "建立可靠的基礎，在其中保持自由的探索，最終成為平衡結構與流動的大師。"
  },

  // 第35組：549 - 自由→穩定→圓滿
  "549": {
    title: "自由穩定的整合者",
    journey: {
      start: {
        number: 5,
        name: "自由體驗",
        energy: "靈魂始於變化的熱情",
        influence: "你的生命課題始於擁抱生命的流動"
      },
      process: {
        number: 4,
        name: "穩定基石",
        energy: "透過建立結構來成長",
        influence: "你學習在自由中創造穩定的基礎"
      },
      result: {
        number: 9,
        name: "圓滿整合",
        energy: "最終成為圓滿的整合者",
        influence: "你的生命使命是將自由與穩定整合為完整的系統"
      }
    },
    summary: "你從自由體驗出發，透過穩定基石，最終成為圓滿整合者。",
    advice: "擁抱生命的流動變化，在其中創造穩固的基礎，最終成為整合自由與結構的大師。"
  }
};

// ====== 最終版的獲取旅程解析函式 ======
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
    default:
      console.warn(`未知的旅程類型：${type}`);
  }
  
  // 如果真的找不到（理論上不會發生）
  if (!journeyData) {
    console.warn(`未找到 ${type} 類型的 ${codeKey} 組合解析`);
    return {
      title: `${codes[0]} → ${codes[1]} → ${codes[2]}`,
      journey: {
        start: { number: codes[0], name: "探索中", energy: "能量正在流動", influence: "起點能量" },
        process: { number: codes[1], name: "轉化中", energy: "過程正在發展", influence: "轉化過程" },
        result: { number: codes[2], name: "展現中", energy: "結果正在形成", influence: "最終展現" }
      },
      summary: "這個獨特的數字組合正在等待更深的詮釋",
      advice: "你的旅程是獨一無二的，繼續探索會發現更多驚喜"
    };
  }
  
  return journeyData;
};
