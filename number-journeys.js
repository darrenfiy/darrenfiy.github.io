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
