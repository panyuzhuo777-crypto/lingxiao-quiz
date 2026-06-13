const FALLBACK_DATA = {
  "quizTitle": "怪談事務所｜靈校心測",
  "subtitle": "你不是誤入校園，是被寫進怪談裡的人。",
  "brand": {
    "name": "好劇好散推理館",
    "channel": "聚散電台",
    "english": "The Truth Frequency",
    "slogan": "—— 今夜，真相屬於你。 ——"
  },
  "sourceNotes": {
    "sourceFile": "靈校心測題目和判定.docx",
    "rule": "先選擇男生角色版或女生角色版，再依每題選項替對應結果角色累計分數，最高分為身份判定。",
    "tieHandling": "若同分，建議顯示並列結果或讓玩家從同分角色中選擇；不加入隱藏加權。"
  },
  "resultGroups": {
    "male": ["前田", "遼新", "明堂"],
    "female": ["涼宛", "杰妮", "天柔"]
  },
  "results": [
    {
      "id": "maeda",
      "name": "前田",
      "polishedName": "校規證人・前田",
      "genderGroup": "male",
      "image": "前田.jpg",
      "abnormalIndex": "★★★★☆",
      "signalStability": 72,
      "fileComment": "你不是第一個聽見廣播的人，卻是第一個發現校規被改寫的人。",
      "officeNote": "你習慣先確認現場、保存證據，再決定要不要相信傳聞。靈校事件裡，你像一份被壓在抽屜底的舊口供，安靜，但很難被推翻。",
      "scriptPosition": "揭開規則異常、拼回事件時間線的關鍵證人。",
      "radioOutro": "前田頻率已鎖定，請勿在鐘聲後獨自離開教室。"
    },
    {
      "id": "liaoxin",
      "name": "遼新",
      "polishedName": "夜巡訊號員・遼新",
      "genderGroup": "male",
      "image": "辽新.jpg",
      "abnormalIndex": "★★★★☆",
      "signalStability": 64,
      "fileComment": "你總能走到訊號最差的地方，也總能把失蹤的聲音帶回來。",
      "officeNote": "你對危險有感，卻不太會因危險停下。當走廊紅燈亮起，你多半已經站在禁區門前，手裡還握著一台快沒電的錄音機。",
      "scriptPosition": "進入現場、追蹤異常源頭的夜巡調查員。",
      "radioOutro": "遼新頻率持續閃爍，請保持通訊，不要回頭應聲。"
    },
    {
      "id": "mingtang",
      "name": "明堂",
      "polishedName": "廣播室守門人・明堂",
      "genderGroup": "male",
      "image": "明堂.jpg",
      "abnormalIndex": "★★★☆☆",
      "signalStability": 81,
      "fileComment": "你守著門，也守著那段不該被播放的真相。",
      "officeNote": "你重視牽掛，也不輕易放下承諾。靈校事件裡，你像舊廣播室最後一盞燈，照見別人的恐懼，也照見自己不能退的理由。",
      "scriptPosition": "保護隊友、鎮住場面、守住核心線索的人。",
      "radioOutro": "明堂頻率穩定，廣播室門鎖已響，請確認來者姓名。"
    },
    {
      "id": "liangwan",
      "name": "涼宛",
      "polishedName": "紅燈檔案員・涼宛",
      "genderGroup": "female",
      "image": "凉宛.jpg",
      "abnormalIndex": "★★★☆☆",
      "signalStability": 86,
      "fileComment": "你翻到的不是檔案，是靈校刻意留下的第二份名單。",
      "officeNote": "你擅長從細節裡找出破綻，也懂得在混亂時保留判斷。當所有人盯著傳聞，你會去看公告欄上被撕掉的那一角。",
      "scriptPosition": "整理證詞、辨認謊言、保管重要檔案的調查核心。",
      "radioOutro": "涼宛頻率已接入，紅色警示燈亮起時，請繼續記錄。"
    },
    {
      "id": "jieni",
      "name": "杰妮",
      "polishedName": "怪談目擊者・杰妮",
      "genderGroup": "female",
      "image": "杰妮.jpg",
      "abnormalIndex": "★★★★★",
      "signalStability": 57,
      "fileComment": "你看到的東西不一定存在，但它一定正在看你。",
      "officeNote": "你容易被事件捲入，也容易撞見最不該撞見的片段。你的直覺像一卷受潮錄音帶，雜訊很重，卻藏著最接近真相的聲音。",
      "scriptPosition": "觸發怪談、看見異象、讓事件真正開始的人。",
      "radioOutro": "杰妮頻率受到干擾，若聽見第三次敲門，請立刻切斷訊號。"
    },
    {
      "id": "tianrou",
      "name": "天柔",
      "polishedName": "禁區回聲者・天柔",
      "genderGroup": "female",
      "image": "天柔.jpg",
      "abnormalIndex": "★★★★★",
      "signalStability": 49,
      "fileComment": "你不是被怪談選中，你本來就是那段回聲的一部分。",
      "officeNote": "你對情感與執念的訊號特別敏銳，越靠近禁區，越容易聽見不屬於現在的聲音。你像被寫進校史邊角的人名，越擦越清楚。",
      "scriptPosition": "承接核心詛咒、連接過去與現在的事件焦點。",
      "radioOutro": "天柔頻率低鳴中，請確認鏡中人影是否與你同步。"
    }
  ],
  "questions": {
    "male": [
      {
        "id": "M01",
        "caseTitle": "破界初始身份",
        "question": "怪談事務所・破界中，你扮演的角色是？",
        "options": [
          { "key": "A", "text": "雲落", "score": { "前田": 3, "遼新": 5 } },
          { "key": "B", "text": "醉牙", "score": { "明堂": 5 } },
          { "key": "C", "text": "秋田", "score": { "遼新": 3, "明堂": 3 } }
        ]
      },
      {
        "id": "M02",
        "caseTitle": "主角頻率",
        "question": "怪談事務所以下主角中，你最喜歡的是？",
        "options": [
          { "key": "A", "text": "雲落", "score": { "遼新": 5 } },
          { "key": "B", "text": "醉牙", "score": { "明堂": 5 } },
          { "key": "C", "text": "平八", "score": { "明堂": 5 } },
          { "key": "D", "text": "有鶴", "score": { "前田": 2, "遼新": 3 } },
          { "key": "E", "text": "柳志", "score": { "前田": 2, "遼新": 3 } }
        ]
      },
      {
        "id": "M03",
        "caseTitle": "親情與正義",
        "question": "如果親情和正義產生了矛盾，你的選擇是？",
        "options": [
          { "key": "A", "text": "絕對支持親情", "score": { "明堂": 8 } },
          { "key": "B", "text": "絕對支持正義", "score": { "前田": 8, "遼新": 3 } },
          { "key": "C", "text": "視情況而定", "score": { "明堂": 3, "遼新": 3 } }
        ]
      },
      {
        "id": "M04",
        "caseTitle": "愛情形態",
        "question": "愛情在你看來，更像是什麼？",
        "options": [
          { "key": "A", "text": "必不可少的生命要素", "score": { "明堂": 3, "遼新": 5 } },
          { "key": "B", "text": "特定時期的陪伴，隨時都會消失的泡沫", "score": { "明堂": 5, "遼新": 3 } },
          { "key": "C", "text": "感恩存在，沒有亦可的零食", "score": { "前田": 5 } }
        ]
      }
    ],
    "female": [
      {
        "id": "F01",
        "caseTitle": "破界初始身份",
        "question": "怪談事務所・破界中，你扮演的角色是？",
        "options": [
          { "key": "A", "text": "廣羽", "score": { "涼宛": 5, "杰妮": 2 } },
          { "key": "B", "text": "川子", "score": { "涼宛": 2, "天柔": 5 } },
          { "key": "C", "text": "桑娜", "score": { "杰妮": 5, "天柔": 5 } }
        ]
      },
      {
        "id": "F02",
        "caseTitle": "主角頻率",
        "question": "怪談事務所以下主角中，你最喜歡的是？",
        "options": [
          { "key": "A", "text": "芳芳", "score": { "涼宛": 5, "天柔": 3 } },
          { "key": "B", "text": "裂口女", "score": { "涼宛": 5, "杰妮": 3 } },
          { "key": "C", "text": "新奈", "score": { "天柔": 5, "杰妮": 3 } },
          { "key": "D", "text": "千面狐", "score": { "天柔": 3, "涼宛": 5 } },
          { "key": "E", "text": "祖麗", "score": { "杰妮": 5, "天柔": 2 } },
          { "key": "F", "text": "骷髏鎖月", "score": { "涼宛": 5, "杰妮": 2 } }
        ]
      },
      {
        "id": "F03",
        "caseTitle": "愛情與是非",
        "question": "你會為了愛情忽略是非黑白麼？",
        "options": [
          { "key": "A", "text": "會", "score": { "天柔": 10 } },
          { "key": "B", "text": "看情況", "score": { "天柔": 5, "涼宛": 3 } },
          { "key": "C", "text": "不會", "score": { "涼宛": 3, "杰妮": 5 } }
        ]
      },
      {
        "id": "F04",
        "caseTitle": "另一半特質",
        "question": "對於另一半，你最在意的品質：",
        "options": [
          { "key": "A", "text": "帥", "score": { "天柔": 5 } },
          { "key": "B", "text": "對你好", "score": { "涼宛": 5 } },
          { "key": "C", "text": "你喜歡就好", "score": { "天柔": 5, "杰妮": 2 } }
        ]
      }
    ]
  }
};

const app = document.querySelector("#app");
const homeTemplate = document.querySelector("#home-template");
const questionTemplate = document.querySelector("#question-template");
const resultTemplate = document.querySelector("#result-template");

const state = {
  data: FALLBACK_DATA,
  source: "fallback",
  gender: null,
  questionIndex: 0,
  scores: {},
  answers: []
};

init();

async function init() {
  state.data = await loadQuizData();
  renderHome();
}

async function loadQuizData() {
  try {
    const response = await fetch("lingxiao_quiz_logic.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`JSON request failed: ${response.status}`);
    const data = await response.json();
    state.source = "json";
    return data;
  } catch (error) {
    state.source = "fallback";
    console.info("使用內嵌備援資料。直接以 file:// 開啟時，部分瀏覽器會阻擋本地 JSON 讀取。", error);
    return FALLBACK_DATA;
  }
}

function renderHome() {
  const fragment = homeTemplate.content.cloneNode(true);
  const sourceStatus = fragment.querySelector("#source-status");
  sourceStatus.textContent = state.source === "json"
    ? "SOURCE: lingxiao_quiz_logic.json 已接入"
    : "SOURCE: 內嵌備援資料已接入";

  fragment.querySelectorAll("[data-start]").forEach((button) => {
    button.addEventListener("click", () => startQuiz(button.dataset.start));
  });

  replaceView(fragment);
}

function startQuiz(gender) {
  state.gender = gender;
  state.questionIndex = 0;
  state.answers = [];
  state.scores = {};

  state.data.resultGroups[gender].forEach((roleName) => {
    state.scores[roleName] = 0;
  });

  renderQuestion();
}

function renderQuestion() {
  const questions = state.data.questions[state.gender];
  const question = questions[state.questionIndex];
  const fragment = questionTemplate.content.cloneNode(true);
  const progress = ((state.questionIndex + 1) / questions.length) * 100;

  fragment.querySelector(".case-id").textContent = `CASE ${question.id}`;
  fragment.querySelector(".progress-text").textContent = `${state.questionIndex + 1}/${questions.length}`;
  fragment.querySelector(".progress-track span").style.setProperty("--progress", `${progress}%`);
  fragment.querySelector(".case-title").textContent = question.caseTitle;
  fragment.querySelector(".question-text").textContent = question.question;

  const optionsList = fragment.querySelector(".options-list");
  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "option-button";
    button.type = "button";
    button.innerHTML = `
      <span class="option-key">${option.key}</span>
      <span>${option.text}</span>
    `;
    button.addEventListener("click", () => chooseOption(button, question, option));
    optionsList.appendChild(button);
  });

  replaceView(fragment);
}

function chooseOption(button, question, option) {
  if (button.classList.contains("selected")) return;
  button.classList.add("selected");

  // 加權計算：保留 JSON 中每個選項對多個角色加分的原始邏輯。
  // 例如某個選項可能同時讓「前田 +3、遼新 +5」，此處會逐一累加。
  Object.entries(option.score).forEach(([roleName, points]) => {
    state.scores[roleName] = (state.scores[roleName] || 0) + points;
  });

  state.answers.push({
    questionId: question.id,
    optionKey: option.key,
    optionText: option.text,
    score: option.score
  });

  window.setTimeout(() => {
    state.questionIndex += 1;
    const hasNext = state.questionIndex < state.data.questions[state.gender].length;
    if (hasNext) {
      renderQuestion();
    } else {
      renderResult();
    }
  }, 280);
}

function getWinningResult() {
  const orderedRoleNames = state.data.resultGroups[state.gender];

  // 同分處理：不新增隱藏題或額外權重。
  // 若分數相同，依 JSON resultGroups 內的既有順序作為 tie-break。
  const winnerName = orderedRoleNames.reduce((currentWinner, roleName) => {
    if (state.scores[roleName] > state.scores[currentWinner]) return roleName;
    return currentWinner;
  }, orderedRoleNames[0]);

  return state.data.results.find((result) => result.name === winnerName);
}

function renderResult() {
  const result = getWinningResult();
  const fragment = resultTemplate.content.cloneNode(true);
  const percentages = getScorePercentages(result.name);

  fragment.querySelector(".result-image").src = result.image;
  fragment.querySelector(".result-image").alt = result.polishedName;
  fragment.querySelector(".result-name").textContent = result.polishedName;
  fragment.querySelector(".abnormal-index").textContent = result.abnormalIndex;
  fragment.querySelector(".signal-stability").textContent = `${result.signalStability}%`;
  fragment.querySelector(".file-comment").textContent = result.fileComment;
  fragment.querySelector(".office-note").textContent = result.officeNote;
  fragment.querySelector(".script-position").textContent = result.scriptPosition;
  fragment.querySelector(".radio-outro").textContent = result.radioOutro;

  const scoreBoard = fragment.querySelector(".score-board");
  state.data.resultGroups[state.gender].forEach((roleName) => {
    const pill = document.createElement("span");
    pill.className = "score-pill";
    pill.innerHTML = `
      <strong>${roleName}</strong>
      <span>${percentages[roleName]}%</span>
      <small>${state.scores[roleName] || 0} 分</small>
    `;
    scoreBoard.appendChild(pill);
  });

  fragment.querySelector("[data-copy]").addEventListener("click", () => copyResult(result));
  fragment.querySelector("[data-reset]").addEventListener("click", renderHome);

  replaceView(fragment);
}

function getScorePercentages(winnerName) {
  const roleNames = state.data.resultGroups[state.gender];
  const total = roleNames.reduce((sum, roleName) => sum + Math.max(0, state.scores[roleName] || 0), 0);

  if (total <= 0) {
    return Object.fromEntries(roleNames.map((roleName) => [roleName, roleName === winnerName ? 100 : 0]));
  }

  return Object.fromEntries(roleNames.map((roleName) => {
    const score = Math.max(0, state.scores[roleName] || 0);
    return [roleName, Math.round((score / total) * 100)];
  }));
}

async function copyResult(result) {
  const percentages = getScorePercentages(result.name);
  const percentageText = state.data.resultGroups[state.gender]
    .map((roleName) => `${roleName} ${percentages[roleName]}%`)
    .join("｜");
  const text = [
    `怪談事務所｜靈校心測`,
    `身份判定｜${result.polishedName}`,
    `異常指數｜${result.abnormalIndex}`,
    `訊號穩定度｜${result.signalStability}%`,
    `匹配頻率｜${percentageText}`,
    `檔案評語｜${result.fileComment}`,
    `事務所備註｜${result.officeNote}`,
    `劇本定位｜${result.scriptPosition}`,
    `聚散電台收尾｜${result.radioOutro}`,
    "",
    "好劇好散推理館",
    "The Truth Frequency",
    "—— 今夜，真相屬於你。 ——"
  ].join("\n");

  const status = document.querySelector(".copy-status");
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      fallbackCopy(text);
    }
    status.textContent = "結果文案已複製。";
  } catch (error) {
    fallbackCopy(text);
    status.textContent = "結果文案已複製。";
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function replaceView(fragment) {
  app.replaceChildren(fragment);
  window.scrollTo({ top: 0, behavior: "smooth" });
}
