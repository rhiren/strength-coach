const STORAGE_KEY = "strengthCoach:v1";

const AREAS = [
  { id: "upper", label: "Upper Body" },
  { id: "lower", label: "Lower Body" },
  { id: "total", label: "Total Body" }
];

const FOCUSES = {
  upper: ["chest", "back", "shoulders", "arms", "core"],
  lower: ["quads", "glutes", "hamstrings", "calves", "core"],
  total: ["push", "pull", "legs", "core", "conditioning"]
};

const GOALS = [
  { id: "balanced", label: "Balanced Strength" },
  { id: "muscle", label: "Build Muscle" },
  { id: "strength", label: "Get Stronger" },
  { id: "conditioning", label: "Strength + Conditioning" },
  { id: "posture", label: "Posture and Control" }
];

const LEVELS = [
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" }
];

const EQUIPMENT = [
  { id: "bodyweight", label: "No equipment" },
  { id: "dumbbells", label: "Dumbbells" },
  { id: "bands", label: "Bands" },
  { id: "gym", label: "Gym" }
];

const DURATIONS = [
  { id: 10, label: "10 min" },
  { id: 20, label: "20 min" },
  { id: 30, label: "30 min" },
  { id: 45, label: "45 min" }
];

const CONSTRAINTS = [
  { id: "knee", label: "Knee sensitive", terms: ["lunge", "squat", "step", "knee", "deep"] },
  { id: "shoulder", label: "Shoulder sensitive", terms: ["shoulder", "press", "raise", "push", "overhead"] },
  { id: "back", label: "Back sensitive", terms: ["deadlift", "hinge", "row", "loaded"] },
  { id: "no-jumping", label: "No jumping", terms: ["jump", "plyo"] },
  { id: "no-overhead", label: "No overhead pressing", terms: ["overhead", "shoulder press", "press"] }
];

const EXERCISE_MEDIA = {
  // Add real demos here as local assets become available.
  // Example:
  // pushup: {
  //   video: "./assets/exercises/pushup/demo.mp4",
  //   poster: "./assets/exercises/pushup/poster.jpg",
  //   frames: [
  //     { label: "Setup", image: "./assets/exercises/pushup/setup.jpg" },
  //     { label: "Work", image: "./assets/exercises/pushup/bottom.jpg" },
  //     { label: "Return", image: "./assets/exercises/pushup/top.jpg" }
  //   ]
  // }
  "incline-pushup": {
    embed: "https://www.youtube.com/embed/jq6PYk3eyUI",
    source: "https://www.youtube.com/shorts/jq6PYk3eyUI"
  },
  "db-floor-press": {
    embed: "https://www.youtube.com/embed/Gf65Yy0-wGI",
    source: "https://www.youtube.com/shorts/Gf65Yy0-wGI"
  }
};

const EXERCISES = [
  {
    id: "incline-pushup",
    name: "Incline Push-up",
    areas: ["upper", "total"],
    focus: ["chest", "push"],
    equipment: ["bodyweight", "dumbbells", "bands", "gym"],
    level: ["beginner", "intermediate"],
    kind: "strength",
    cues: ["Hands under shoulders", "Lower chest with control", "Keep ribs tucked"],
    substitute: "Wall push-up or dumbbell floor press"
  },
  {
    id: "pushup",
    name: "Push-up",
    areas: ["upper", "total"],
    focus: ["chest", "arms", "push", "core"],
    equipment: ["bodyweight", "dumbbells", "bands", "gym"],
    level: ["intermediate", "advanced"],
    kind: "strength",
    cues: ["Brace like a plank", "Elbows about 45 degrees", "Press the floor away"],
    substitute: "Incline push-up"
  },
  {
    id: "db-floor-press",
    name: "Dumbbell Floor Press",
    areas: ["upper", "total"],
    focus: ["chest", "arms", "push"],
    equipment: ["dumbbells", "gym"],
    level: ["beginner", "intermediate", "advanced"],
    kind: "strength",
    cues: ["Forearms vertical", "Pause elbows softly on floor", "Drive weights up evenly"],
    substitute: "Push-up or band chest press"
  },
  {
    id: "one-arm-row",
    name: "One-arm Dumbbell Row",
    areas: ["upper", "total"],
    focus: ["back", "pull"],
    equipment: ["dumbbells", "gym"],
    level: ["beginner", "intermediate", "advanced"],
    kind: "strength",
    cues: ["Hips square", "Pull elbow toward back pocket", "Do not shrug"],
    substitute: "Band row"
  },
  {
    id: "band-row",
    name: "Band Row",
    areas: ["upper", "total"],
    focus: ["back", "pull", "posture"],
    equipment: ["bands"],
    level: ["beginner", "intermediate", "advanced"],
    kind: "strength",
    cues: ["Tall chest", "Squeeze shoulder blades", "Control the return"],
    substitute: "Prone W raise"
  },
  {
    id: "shoulder-press",
    name: "Dumbbell Shoulder Press",
    areas: ["upper", "total"],
    focus: ["shoulders", "arms", "push"],
    equipment: ["dumbbells", "gym"],
    level: ["intermediate", "advanced"],
    kind: "strength",
    cues: ["Glutes lightly tight", "Press without leaning back", "Finish biceps near ears"],
    substitute: "Half-kneeling press or lateral raise"
  },
  {
    id: "lateral-raise",
    name: "Lateral Raise",
    areas: ["upper"],
    focus: ["shoulders"],
    equipment: ["dumbbells", "bands", "gym"],
    level: ["beginner", "intermediate", "advanced"],
    kind: "accessory",
    cues: ["Soft elbows", "Lead with elbows", "Stop around shoulder height"],
    substitute: "Wall slide"
  },
  {
    id: "curl-pressdown",
    name: "Curl to Triceps Extension",
    areas: ["upper"],
    focus: ["arms"],
    equipment: ["dumbbells", "bands", "gym"],
    level: ["beginner", "intermediate", "advanced"],
    kind: "accessory",
    cues: ["Keep elbows quiet", "Move with control", "Own the top and bottom"],
    substitute: "Close-grip push-up hold"
  },
  {
    id: "goblet-squat",
    name: "Goblet Squat",
    areas: ["lower", "total"],
    focus: ["quads", "glutes", "legs"],
    equipment: ["dumbbells", "gym"],
    level: ["beginner", "intermediate", "advanced"],
    kind: "strength",
    cues: ["Brace before descending", "Knees track over toes", "Stand tall through mid-foot"],
    substitute: "Box squat"
  },
  {
    id: "bodyweight-squat",
    name: "Bodyweight Squat",
    areas: ["lower", "total"],
    focus: ["quads", "glutes", "legs"],
    equipment: ["bodyweight", "dumbbells", "bands", "gym"],
    level: ["beginner", "intermediate"],
    kind: "strength",
    cues: ["Reach hips back and down", "Keep chest proud", "Stand with control"],
    substitute: "Sit-to-stand"
  },
  {
    id: "reverse-lunge",
    name: "Reverse Lunge",
    areas: ["lower", "total"],
    focus: ["quads", "glutes", "legs"],
    equipment: ["bodyweight", "dumbbells", "bands", "gym"],
    level: ["beginner", "intermediate", "advanced"],
    kind: "strength",
    cues: ["Step back softly", "Front foot stays planted", "Drive through front leg"],
    substitute: "Split squat hold"
  },
  {
    id: "romanian-deadlift",
    name: "Dumbbell Romanian Deadlift",
    areas: ["lower", "total"],
    focus: ["hamstrings", "glutes", "legs"],
    equipment: ["dumbbells", "gym"],
    level: ["beginner", "intermediate", "advanced"],
    kind: "strength",
    cues: ["Hinge at hips", "Keep weights close", "Feel hamstrings stretch"],
    substitute: "Glute bridge"
  },
  {
    id: "glute-bridge",
    name: "Glute Bridge",
    areas: ["lower", "total"],
    focus: ["glutes", "hamstrings"],
    equipment: ["bodyweight", "dumbbells", "bands", "gym"],
    level: ["beginner", "intermediate", "advanced"],
    kind: "strength",
    cues: ["Ribs down", "Push through heels", "Squeeze glutes at top"],
    substitute: "Hip thrust"
  },
  {
    id: "step-up",
    name: "Step-up",
    areas: ["lower", "total"],
    focus: ["quads", "glutes", "legs"],
    equipment: ["bodyweight", "dumbbells", "gym"],
    level: ["intermediate", "advanced"],
    kind: "strength",
    cues: ["Whole foot on step", "Stand without bouncing", "Control the descent"],
    substitute: "Reverse lunge"
  },
  {
    id: "calf-raise",
    name: "Calf Raise",
    areas: ["lower"],
    focus: ["calves"],
    equipment: ["bodyweight", "dumbbells", "bands", "gym"],
    level: ["beginner", "intermediate", "advanced"],
    kind: "accessory",
    cues: ["Rise through big toe", "Pause at top", "Lower slowly"],
    substitute: "Seated calf raise"
  },
  {
    id: "dead-bug",
    name: "Dead Bug",
    areas: ["upper", "lower", "total"],
    focus: ["core"],
    equipment: ["bodyweight", "dumbbells", "bands", "gym"],
    level: ["beginner", "intermediate", "advanced"],
    kind: "core",
    cues: ["Low back gently heavy", "Move opposite arm and leg", "Exhale as you extend"],
    substitute: "Heel taps"
  },
  {
    id: "plank",
    name: "Forearm Plank",
    areas: ["upper", "lower", "total"],
    focus: ["core"],
    equipment: ["bodyweight", "dumbbells", "bands", "gym"],
    level: ["beginner", "intermediate", "advanced"],
    kind: "core",
    cues: ["Elbows under shoulders", "Squeeze glutes", "Breathe behind the brace"],
    substitute: "Incline plank"
  },
  {
    id: "bear-crawl",
    name: "Bear Crawl Shoulder Tap",
    areas: ["total"],
    focus: ["core", "conditioning", "shoulders"],
    equipment: ["bodyweight", "dumbbells", "bands", "gym"],
    level: ["intermediate", "advanced"],
    kind: "conditioning",
    cues: ["Knees hover low", "Hips stay quiet", "Tap slowly"],
    substitute: "Quadruped shoulder tap"
  },
  {
    id: "squat-to-press",
    name: "Squat to Press",
    areas: ["total"],
    focus: ["legs", "push", "conditioning"],
    equipment: ["dumbbells", "bands", "gym"],
    level: ["intermediate", "advanced"],
    kind: "conditioning",
    cues: ["Squat first", "Drive up before pressing", "Keep reps crisp"],
    substitute: "Bodyweight squat plus reach"
  },
  {
    id: "march",
    name: "Loaded March",
    areas: ["total", "lower"],
    focus: ["core", "conditioning", "legs"],
    equipment: ["bodyweight", "dumbbells", "bands", "gym"],
    level: ["beginner", "intermediate", "advanced"],
    kind: "conditioning",
    cues: ["Stand tall", "Knee to hip height", "Move smoothly"],
    substitute: "Standing knee drive"
  }
];

const WARMUPS = [
  { id: "joint-prep", name: "Joint Prep", seconds: 40, phase: "Warmup", cue: "Circle shoulders, hips, knees, and ankles. Keep it easy." },
  { id: "pattern-rehearsal", name: "Bodyweight Pattern Rehearsal", seconds: 40, phase: "Warmup", cue: "Practice the main movement slowly before loading it." }
];

const COOLDOWNS = [
  { name: "Breathing Reset", seconds: 45, phase: "Cooldown", cue: "Breathe through the nose if comfortable and let the heart rate settle." },
  { name: "Easy Mobility", seconds: 45, phase: "Cooldown", cue: "Move through the areas you trained without forcing range." }
];

const state = {
  view: "today",
  area: "upper",
  focus: "",
  routine: null,
  setIndex: 0,
  remaining: 0,
  elapsed: 0,
  running: false,
  phase: "ready",
  warmupIndex: 0,
  selectedDifficulty: "right",
  timerId: null,
  libraryFilter: "all",
  learnScope: "plan",
  data: loadData()
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function loadData() {
  const defaults = {
    profile: {
      name: "Hiren",
      goal: "balanced",
      level: "beginner",
      equipment: "bodyweight",
      duration: 20,
      weeklyTarget: 3,
      avoid: "",
      constraints: []
    },
    favorites: [],
    history: []
  };
  try {
    return { ...defaults, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") };
  } catch {
    return defaults;
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function optionHtml(items, selected) {
  return items.map((item) => `<option value="${item.id}" ${String(item.id) === String(selected) ? "selected" : ""}>${escapeHtml(item.label)}</option>`).join("");
}

function labelFor(items, id) {
  return items.find((item) => String(item.id) === String(id))?.label || id;
}

function formatTime(seconds) {
  const value = Math.max(0, Math.floor(seconds || 0));
  return `${String(Math.floor(value / 60)).padStart(2, "0")}:${String(value % 60).padStart(2, "0")}`;
}

function sentenceCase(text) {
  return String(text || "").replace(/^./, (char) => char.toUpperCase());
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function initControls() {
  $("#areaControls").innerHTML = AREAS.map((area) => `
    <button class="segment ${state.area === area.id ? "active" : ""}" data-area="${area.id}" type="button">${area.label}</button>
  `).join("");

  $("#goalSelect").innerHTML = optionHtml(GOALS, state.data.profile.goal);
  $("#durationSelect").innerHTML = optionHtml(DURATIONS, state.data.profile.duration);
  $("#levelSelect").innerHTML = optionHtml(LEVELS, state.data.profile.level);
  $("#equipmentSelect").innerHTML = optionHtml(EQUIPMENT, state.data.profile.equipment);

  const profileForm = $("#profileForm");
  profileForm.elements.name.value = state.data.profile.name || "";
  profileForm.elements.goal.innerHTML = optionHtml(GOALS, state.data.profile.goal);
  profileForm.elements.level.innerHTML = optionHtml(LEVELS, state.data.profile.level);
  profileForm.elements.equipment.innerHTML = optionHtml(EQUIPMENT, state.data.profile.equipment);
  profileForm.elements.duration.innerHTML = optionHtml(DURATIONS, state.data.profile.duration);
  profileForm.elements.weeklyTarget.value = state.data.profile.weeklyTarget || 3;
  profileForm.elements.avoid.value = state.data.profile.avoid || "";
  $$("#profileForm input[name='constraints']").forEach((input) => {
    input.checked = (state.data.profile.constraints || []).includes(input.value);
  });

  renderFocusControls();
}

function renderFocusControls() {
  const focusOptions = FOCUSES[state.area] || [];
  $("#focusControls").innerHTML = [
    `<button class="focus-chip ${state.focus === "" ? "active" : ""}" data-focus="" type="button">No specific focus</button>`,
    ...focusOptions.map((focus) => `<button class="focus-chip ${state.focus === focus ? "active" : ""}" data-focus="${focus}" type="button">${focus}</button>`)
  ].join("");
}

function scoreExercise(exercise, settings) {
  let score = 0;
  if (exercise.areas.includes(settings.area)) score += 6;
  if (settings.focus && exercise.focus.includes(settings.focus)) score += 7;
  if (exercise.equipment.includes(settings.equipment)) score += 5;
  if (exercise.level.includes(settings.level)) score += 4;
  if (settings.goal === "conditioning" && exercise.kind === "conditioning") score += 4;
  if (settings.goal === "posture" && (exercise.focus.includes("back") || exercise.focus.includes("core") || exercise.focus.includes("pull"))) score += 3;
  if (settings.goal === "muscle" && ["strength", "accessory"].includes(exercise.kind)) score += 3;
  if (settings.goal === "strength" && exercise.kind === "strength") score += 4;
  return score;
}

function constraintTerms() {
  const selected = state.data.profile.constraints || [];
  return CONSTRAINTS.filter((item) => selected.includes(item.id)).flatMap((item) => item.terms);
}

function exerciseText(exercise) {
  return [exercise.id, exercise.name, exercise.kind, exercise.substitute, ...(exercise.focus || [])].join(" ").toLowerCase();
}

function violatesConstraint(exercise) {
  const text = exerciseText(exercise);
  return constraintTerms().some((term) => text.includes(term));
}

function swapOptions(exercise) {
  const sameArea = EXERCISES.filter((item) => item.id !== exercise.id && item.areas.some((area) => exercise.areas.includes(area)));
  const overlap = (item) => item.focus.filter((focus) => exercise.focus.includes(focus)).length;
  const sorted = sameArea.sort((a, b) => overlap(b) - overlap(a));
  const easier = sorted.find((item) => item.level.includes("beginner")) || sorted[0];
  const harder = sorted.find((item) => item.level.includes("advanced")) || sorted.find((item) => item.level.includes("intermediate")) || sorted[0];
  const noEquipment = sorted.find((item) => item.equipment.includes("bodyweight")) || easier;
  const dumbbell = sorted.find((item) => item.equipment.includes("dumbbells")) || harder;
  return {
    easier: easier?.name || exercise.substitute,
    harder: harder?.name || exercise.name,
    noEquipment: noEquipment?.name || exercise.substitute,
    dumbbell: dumbbell?.name || exercise.name
  };
}

function pickExercises(settings, count) {
  const avoidTerms = String(state.data.profile.avoid || "").toLowerCase().split(/[,\n]/).map((term) => term.trim()).filter(Boolean);
  const baseCandidates = EXERCISES
    .filter((exercise) => exercise.areas.includes(settings.area))
    .filter((exercise) => exercise.equipment.includes(settings.equipment) || exercise.equipment.includes("bodyweight"))
    .filter((exercise) => exercise.level.includes(settings.level) || settings.level !== "beginner")
    .filter((exercise) => !avoidTerms.some((term) => exercise.name.toLowerCase().includes(term) || exercise.focus.includes(term)));
  const safetyFiltered = baseCandidates.filter((exercise) => !violatesConstraint(exercise));
  const candidates = (safetyFiltered.length ? safetyFiltered : baseCandidates)
    .map((exercise) => ({ exercise, score: scoreExercise(exercise, settings) }))
    .sort((a, b) => b.score - a.score);

  const mustHaveFocus = settings.focus ? candidates.filter((item) => item.exercise.focus.includes(settings.focus)).slice(0, 2) : [];
  const selected = [...mustHaveFocus];

  for (const item of shuffle(candidates)) {
    if (selected.some((entry) => entry.exercise.id === item.exercise.id)) continue;
    selected.push(item);
    if (selected.length >= count) break;
  }

  return selected.slice(0, count).map((item) => item.exercise);
}

function diagramKind(exercise) {
  if (["goblet-squat", "bodyweight-squat", "squat-to-press"].includes(exercise.id)) return "squat";
  if (["reverse-lunge", "step-up"].includes(exercise.id)) return "split";
  if (["romanian-deadlift", "glute-bridge"].includes(exercise.id)) return "hinge";
  if (["incline-pushup", "pushup", "db-floor-press"].includes(exercise.id)) return "push";
  if (["one-arm-row", "band-row"].includes(exercise.id)) return "pull";
  if (["shoulder-press", "lateral-raise", "curl-pressdown"].includes(exercise.id)) return "arms";
  if (["dead-bug", "plank", "bear-crawl"].includes(exercise.id)) return "core";
  return "standing";
}

function visualKind(exercise) {
  return {
    "incline-pushup": "inclinePushup",
    pushup: "pushup",
    "db-floor-press": "floorPress",
    "one-arm-row": "dumbbellRow",
    "band-row": "bandRow",
    "shoulder-press": "shoulderPress",
    "lateral-raise": "lateralRaise",
    "curl-pressdown": "curlExtension",
    "goblet-squat": "gobletSquat",
    "bodyweight-squat": "bodyweightSquat",
    "reverse-lunge": "reverseLunge",
    "romanian-deadlift": "romanianDeadlift",
    "glute-bridge": "gluteBridge",
    "step-up": "stepUp",
    "calf-raise": "calfRaise",
    "dead-bug": "deadBug",
    plank: "plank",
    "bear-crawl": "bearTap",
    "squat-to-press": "squatToPress",
    march: "march"
  }[exercise.id] || "standing";
}

function movementFigure(kind, id) {
  const rep = (label) => `<text x="160" y="30" text-anchor="middle" class="movement-step">${label}</text>`;
  const head = (x, y) => `<circle class="body-line" cx="${x}" cy="${y}" r="12"></circle>`;
  const db = (x, y) => `<rect class="diagram-prop" x="${x}" y="${y}" width="22" height="14" rx="4"></rect>`;
  const band = `<path class="band-line" d="M42 112 C94 92 122 92 170 112"></path><circle class="anchor" cx="42" cy="112" r="7"></circle>`;
  const ground = `<line class="ground-line" x1="34" y1="160" x2="286" y2="160"></line>`;

  const standing = `
    ${ground}${head(132, 62)}
    <line class="body-line" x1="132" y1="76" x2="132" y2="118"></line>
    <line class="body-line" x1="132" y1="118" x2="110" y2="158"></line>
    <line class="body-line" x1="132" y1="118" x2="154" y2="158"></line>`;

  const visuals = {
    inclinePushup: `
      ${rep("Incline push-up: lower chest, press away")}${ground}
      <rect class="surface-line" x="198" y="104" width="74" height="12" rx="6"></rect>
      <g class="lift-body">
        <circle class="body-line" cx="82" cy="100" r="12"></circle>
        <line class="body-line" x1="94" y1="104" x2="172" y2="126"></line>
        <line class="body-line moving-limb" x1="174" y1="126" x2="214" y2="111"><animate attributeName="y2" values="111;136;111" dur="2.2s" repeatCount="indefinite"></animate></line>
        <line class="body-line moving-limb" x1="178" y1="128" x2="226" y2="111"><animate attributeName="y2" values="111;136;111" dur="2.2s" repeatCount="indefinite"></animate></line>
        <line class="body-line" x1="172" y1="126" x2="70" y2="160"></line>
      </g>
      <path class="motion-track" d="M118 90 C156 104 178 112 210 126"></path>`,
    pushup: `
      ${rep("Push-up: plank body, elbows bend")}${ground}
      <g class="lift-body">
        <circle class="body-line" cx="74" cy="111" r="12"><animate attributeName="cy" values="102;122;102" dur="2.2s" repeatCount="indefinite"></animate></circle>
        <line class="body-line" x1="86" y1="116" x2="174" y2="143"><animate attributeName="y1" values="106;126;106" dur="2.2s" repeatCount="indefinite"></animate><animate attributeName="y2" values="133;150;133" dur="2.2s" repeatCount="indefinite"></animate></line>
        <line class="body-line moving-limb" x1="120" y1="126" x2="105" y2="160"><animate attributeName="y1" values="116;136;116" dur="2.2s" repeatCount="indefinite"></animate></line>
        <line class="body-line moving-limb" x1="124" y1="128" x2="142" y2="160"><animate attributeName="y1" values="118;138;118" dur="2.2s" repeatCount="indefinite"></animate></line>
        <line class="body-line" x1="174" y1="143" x2="226" y2="160"></line>
      </g>
      <path class="movement-arrow" d="M256 82 v54"></path>`,
    floorPress: `
      ${rep("Floor press: elbows touch, press weights up")}${ground}
      <circle class="body-line" cx="90" cy="137" r="12"></circle>
      <line class="body-line" x1="102" y1="140" x2="180" y2="146"></line>
      <line class="body-line" x1="178" y1="146" x2="228" y2="158"></line>
      <line class="body-line moving-limb" x1="130" y1="130" x2="130" y2="90"><animate attributeName="y2" values="130;78;130" dur="2.1s" repeatCount="indefinite"></animate></line>
      <line class="body-line moving-limb" x1="158" y1="132" x2="158" y2="92"><animate attributeName="y2" values="132;80;132" dur="2.1s" repeatCount="indefinite"></animate></line>
      <rect class="diagram-prop moving-weight" x="119" y="72" width="22" height="14" rx="4"><animate attributeName="y" values="122;72;122" dur="2.1s" repeatCount="indefinite"></animate></rect>
      <rect class="diagram-prop moving-weight" x="147" y="74" width="22" height="14" rx="4"><animate attributeName="y" values="124;74;124" dur="2.1s" repeatCount="indefinite"></animate></rect>`,
    dumbbellRow: `
      ${rep("Row: elbow travels toward back pocket")}${ground}
      <circle class="body-line" cx="96" cy="76" r="12"></circle>
      <line class="body-line" x1="108" y1="86" x2="164" y2="122"></line>
      <line class="body-line" x1="164" y1="122" x2="138" y2="160"></line>
      <line class="body-line" x1="164" y1="122" x2="210" y2="160"></line>
      <line class="body-line" x1="124" y1="102" x2="84" y2="132"></line>
      <line class="body-line moving-limb" x1="128" y1="102" x2="174" y2="130"><animate attributeName="x2" values="188;142;188" dur="2s" repeatCount="indefinite"></animate><animate attributeName="y2" values="140;108;140" dur="2s" repeatCount="indefinite"></animate></line>
      <rect class="diagram-prop moving-weight" x="178" y="134" width="22" height="14" rx="4"><animate attributeName="x" values="178;132;178" dur="2s" repeatCount="indefinite"></animate><animate attributeName="y" values="134;104;134" dur="2s" repeatCount="indefinite"></animate></rect>`,
    bandRow: `
      ${rep("Band row: pull handles to ribs")}${ground}${band}
      <circle class="body-line" cx="218" cy="70" r="12"></circle>
      <line class="body-line" x1="218" y1="84" x2="218" y2="124"></line>
      <line class="body-line" x1="218" y1="124" x2="196" y2="160"></line>
      <line class="body-line" x1="218" y1="124" x2="240" y2="160"></line>
      <line class="body-line moving-limb" x1="218" y1="100" x2="170" y2="112"><animate attributeName="x2" values="170;206;170" dur="2s" repeatCount="indefinite"></animate></line>
      <circle class="moving-weight" cx="170" cy="112" r="6"><animate attributeName="cx" values="170;206;170" dur="2s" repeatCount="indefinite"></animate></circle>`,
    shoulderPress: `
      ${rep("Shoulder press: ribs down, press overhead")}${standing}
      <line class="body-line moving-limb" x1="132" y1="92" x2="106" y2="88"><animate attributeName="y2" values="114;54;114" dur="2.1s" repeatCount="indefinite"></animate></line>
      <line class="body-line moving-limb" x1="132" y1="92" x2="158" y2="88"><animate attributeName="y2" values="114;54;114" dur="2.1s" repeatCount="indefinite"></animate></line>
      <rect class="diagram-prop moving-weight" x="96" y="47" width="20" height="14" rx="4"><animate attributeName="y" values="107;47;107" dur="2.1s" repeatCount="indefinite"></animate></rect>
      <rect class="diagram-prop moving-weight" x="148" y="47" width="20" height="14" rx="4"><animate attributeName="y" values="107;47;107" dur="2.1s" repeatCount="indefinite"></animate></rect>`,
    lateralRaise: `
      ${rep("Lateral raise: elbows lift to shoulder height")}${standing}
      <line class="body-line moving-limb" x1="132" y1="92" x2="98" y2="124"><animate attributeName="x2" values="108;82;108" dur="2.2s" repeatCount="indefinite"></animate><animate attributeName="y2" values="124;92;124" dur="2.2s" repeatCount="indefinite"></animate></line>
      <line class="body-line moving-limb" x1="132" y1="92" x2="166" y2="124"><animate attributeName="x2" values="156;182;156" dur="2.2s" repeatCount="indefinite"></animate><animate attributeName="y2" values="124;92;124" dur="2.2s" repeatCount="indefinite"></animate></line>
      <line class="target-zone" x1="72" y1="92" x2="192" y2="92"></line>`,
    curlExtension: `
      ${rep("Curl, then extend triceps with control")}${standing}
      <line class="body-line moving-limb" x1="132" y1="92" x2="112" y2="126"><animate attributeName="y2" values="126;94;126" dur="2.4s" repeatCount="indefinite"></animate></line>
      <line class="body-line moving-limb" x1="132" y1="92" x2="152" y2="126"><animate attributeName="y2" values="126;94;126" dur="2.4s" repeatCount="indefinite"></animate></line>
      <text x="214" y="98" class="movement-label">curl + extend</text>
      ${db(102, 122)}${db(150, 122)}`,
    gobletSquat: `
      ${rep("Goblet squat: sit between feet, stand tall")}${ground}
      <g class="lift-body">
        <circle class="body-line" cx="152" cy="62" r="12"><animate attributeName="cy" values="62;84;62" dur="2.3s" repeatCount="indefinite"></animate></circle>
        <line class="body-line" x1="152" y1="76" x2="152" y2="116"><animate attributeName="y1" values="76;98;76" dur="2.3s" repeatCount="indefinite"></animate><animate attributeName="y2" values="116;134;116" dur="2.3s" repeatCount="indefinite"></animate></line>
        <line class="body-line moving-limb" x1="152" y1="116" x2="120" y2="160"><animate attributeName="y1" values="116;134;116" dur="2.3s" repeatCount="indefinite"></animate></line>
        <line class="body-line moving-limb" x1="152" y1="116" x2="186" y2="160"><animate attributeName="y1" values="116;134;116" dur="2.3s" repeatCount="indefinite"></animate></line>
        <rect class="diagram-prop moving-weight" x="140" y="86" width="24" height="18" rx="5"><animate attributeName="y" values="86;108;86" dur="2.3s" repeatCount="indefinite"></animate></rect>
      </g>`,
    bodyweightSquat: `
      ${rep("Bodyweight squat: hips back, knees track")}${ground}
      <g class="lift-body">
        <circle class="body-line" cx="154" cy="60" r="12"><animate attributeName="cy" values="60;84;60" dur="2.3s" repeatCount="indefinite"></animate></circle>
        <line class="body-line" x1="154" y1="74" x2="154" y2="116"><animate attributeName="y1" values="74;98;74" dur="2.3s" repeatCount="indefinite"></animate><animate attributeName="y2" values="116;134;116" dur="2.3s" repeatCount="indefinite"></animate></line>
        <line class="body-line moving-limb" x1="154" y1="94" x2="122" y2="110"><animate attributeName="y1" values="94;116;94" dur="2.3s" repeatCount="indefinite"></animate><animate attributeName="y2" values="110;132;110" dur="2.3s" repeatCount="indefinite"></animate></line>
        <line class="body-line moving-limb" x1="154" y1="116" x2="122" y2="160"><animate attributeName="y1" values="116;134;116" dur="2.3s" repeatCount="indefinite"></animate></line>
        <line class="body-line moving-limb" x1="154" y1="116" x2="190" y2="160"><animate attributeName="y1" values="116;134;116" dur="2.3s" repeatCount="indefinite"></animate></line>
      </g>`,
    reverseLunge: `
      ${rep("Reverse lunge: step back, front leg drives")}${ground}
      <circle class="body-line" cx="154" cy="58" r="12"></circle>
      <line class="body-line" x1="154" y1="72" x2="154" y2="116"></line>
      <line class="body-line" x1="154" y1="92" x2="126" y2="116"></line>
      <line class="body-line" x1="154" y1="92" x2="182" y2="116"></line>
      <line class="body-line" x1="154" y1="116" x2="132" y2="160"></line>
      <line class="body-line moving-limb" x1="154" y1="116" x2="202" y2="160"><animate attributeName="x2" values="164;214;164" dur="2.4s" repeatCount="indefinite"></animate></line>
      <path class="motion-track" d="M164 148 C180 150 196 152 214 158"></path>`,
    romanianDeadlift: `
      ${rep("RDL: hinge hips back, weight close")}${ground}
      <circle class="body-line" cx="120" cy="62" r="12"><animate attributeName="cx" values="120;96;120" dur="2.3s" repeatCount="indefinite"></animate><animate attributeName="cy" values="62;78;62" dur="2.3s" repeatCount="indefinite"></animate></circle>
      <line class="body-line" x1="120" y1="76" x2="146" y2="118"><animate attributeName="x1" values="120;96;120" dur="2.3s" repeatCount="indefinite"></animate><animate attributeName="y1" values="76;92;76" dur="2.3s" repeatCount="indefinite"></animate><animate attributeName="x2" values="146;136;146" dur="2.3s" repeatCount="indefinite"></animate></line>
      <line class="body-line" x1="146" y1="118" x2="124" y2="160"></line>
      <line class="body-line" x1="146" y1="118" x2="168" y2="160"></line>
      <rect class="diagram-prop moving-weight" x="130" y="114" width="22" height="14" rx="4"><animate attributeName="y" values="96;126;96" dur="2.3s" repeatCount="indefinite"></animate></rect>`,
    gluteBridge: `
      ${rep("Glute bridge: drive hips up, ribs down")}${ground}
      <circle class="body-line" cx="82" cy="138" r="12"></circle>
      <line class="body-line" x1="94" y1="140" x2="154" y2="146"></line>
      <line class="body-line moving-limb" x1="154" y1="146" x2="206" y2="160"><animate attributeName="y1" values="146;112;146" dur="2.2s" repeatCount="indefinite"></animate></line>
      <line class="body-line" x1="206" y1="160" x2="236" y2="160"></line>
      <path class="movement-arrow" d="M158 138 v-42"></path>`,
    stepUp: `
      ${rep("Step-up: whole foot plants, stand tall")}${ground}
      <rect class="surface-line" x="190" y="128" width="72" height="32" rx="6"></rect>
      <circle class="body-line" cx="134" cy="60" r="12"><animate attributeName="cx" values="116;208;116" dur="2.8s" repeatCount="indefinite"></animate><animate attributeName="cy" values="78;52;78" dur="2.8s" repeatCount="indefinite"></animate></circle>
      <line class="body-line moving-limb" x1="134" y1="74" x2="134" y2="116"><animate attributeName="x1" values="116;208;116" dur="2.8s" repeatCount="indefinite"></animate><animate attributeName="x2" values="116;208;116" dur="2.8s" repeatCount="indefinite"></animate><animate attributeName="y1" values="92;66;92" dur="2.8s" repeatCount="indefinite"></animate><animate attributeName="y2" values="130;108;130" dur="2.8s" repeatCount="indefinite"></animate></line>
      <path class="motion-track" d="M116 138 C146 122 174 92 208 74"></path>`,
    calfRaise: `
      ${rep("Calf raise: rise through big toe, pause")}${standing}
      <g class="lift-body">
        <animateTransform attributeName="transform" type="translate" values="0 0;0 -18;0 0" dur="2s" repeatCount="indefinite"></animateTransform>
        <line class="body-line moving-limb" x1="110" y1="158" x2="92" y2="160"></line>
        <line class="body-line moving-limb" x1="154" y1="158" x2="172" y2="160"></line>
      </g>
      <path class="movement-arrow" d="M218 148 v-40"></path>`,
    deadBug: `
      ${rep("Dead bug: opposite arm and leg extend")}${ground}
      <circle class="body-line" cx="154" cy="118" r="12"></circle>
      <line class="body-line" x1="142" y1="124" x2="116" y2="144"></line>
      <line class="body-line" x1="166" y1="124" x2="192" y2="144"></line>
      <line class="body-line moving-limb" x1="148" y1="112" x2="122" y2="76"><animate attributeName="x2" values="132;100;132" dur="2.4s" repeatCount="indefinite"></animate><animate attributeName="y2" values="92;66;92" dur="2.4s" repeatCount="indefinite"></animate></line>
      <line class="body-line moving-limb" x1="160" y1="128" x2="196" y2="154"><animate attributeName="x2" values="180;228;180" dur="2.4s" repeatCount="indefinite"></animate><animate attributeName="y2" values="138;158;138" dur="2.4s" repeatCount="indefinite"></animate></line>`,
    plank: `
      ${rep("Plank: hold one long line and breathe")}${ground}
      <circle class="body-line" cx="82" cy="116" r="12"></circle>
      <line class="body-line" x1="94" y1="120" x2="188" y2="144"></line>
      <line class="body-line" x1="116" y1="126" x2="104" y2="160"></line>
      <line class="body-line" x1="188" y1="144" x2="242" y2="160"></line>
      <circle class="breath-dot" cx="150" cy="116" r="8"></circle>`,
    bearTap: `
      ${rep("Bear tap: knees hover, hips stay quiet")}${ground}
      <circle class="body-line" cx="96" cy="92" r="12"></circle>
      <line class="body-line" x1="108" y1="98" x2="176" y2="118"></line>
      <line class="body-line" x1="138" y1="106" x2="122" y2="150"></line>
      <line class="body-line" x1="176" y1="118" x2="202" y2="150"></line>
      <line class="body-line moving-limb" x1="128" y1="104" x2="86" y2="144"><animate attributeName="x2" values="86;136;86" dur="2.3s" repeatCount="indefinite"></animate><animate attributeName="y2" values="144;94;144" dur="2.3s" repeatCount="indefinite"></animate></line>
      <line class="target-zone" x1="128" y1="94" x2="150" y2="112"></line>`,
    squatToPress: `
      ${rep("Squat to press: legs drive before arms")}${ground}
      <circle class="body-line" cx="154" cy="70" r="12"><animate attributeName="cy" values="82;58;82" dur="2.7s" repeatCount="indefinite"></animate></circle>
      <line class="body-line" x1="154" y1="84" x2="154" y2="126"><animate attributeName="y1" values="96;72;96" dur="2.7s" repeatCount="indefinite"></animate><animate attributeName="y2" values="134;116;134" dur="2.7s" repeatCount="indefinite"></animate></line>
      <line class="body-line moving-limb" x1="154" y1="96" x2="128" y2="112"><animate attributeName="y2" values="112;50;112" dur="2.7s" repeatCount="indefinite"></animate></line>
      <line class="body-line moving-limb" x1="154" y1="96" x2="180" y2="112"><animate attributeName="y2" values="112;50;112" dur="2.7s" repeatCount="indefinite"></animate></line>
      <line class="body-line" x1="154" y1="126" x2="126" y2="160"></line>
      <line class="body-line" x1="154" y1="126" x2="184" y2="160"></line>`,
    march: `
      ${rep("March: tall posture, knee to hip height")}${standing}
      <line class="body-line moving-limb" x1="132" y1="118" x2="170" y2="154"><animate attributeName="x2" values="170;184;170" dur="2s" repeatCount="indefinite"></animate><animate attributeName="y2" values="154;104;154" dur="2s" repeatCount="indefinite"></animate></line>
      <line class="target-zone" x1="166" y1="104" x2="204" y2="104"></line>`
  };

  return visuals[kind] || `${rep("Move smoothly with control")}${standing}`;
}

function movementDiagram(exercise) {
  const kind = visualKind(exercise);

  return `<svg class="movement-svg movement-${kind}" viewBox="0 0 320 200" role="img" aria-label="${escapeHtml(exercise.name)} movement animation">
    <defs>
      <marker id="arrow-${exercise.id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" class="arrow-head"></path>
      </marker>
    </defs>
    <rect x="8" y="8" width="304" height="184" rx="16" fill="#f7f9fb"></rect>
    ${movementFigure(kind, exercise.id)}
    <text x="160" y="184" text-anchor="middle" class="diagram-cue">${escapeHtml(exercise.cues[0] || "Move with control")}</text>
  </svg>`;
}

function visualStepGuide(exercise) {
  const kind = visualKind(exercise);
  const guides = {
    inclinePushup: ["Hands set", "Lower chest", "Press away"],
    pushup: ["Brace plank", "Lower as one", "Press tall"],
    floorPress: ["Elbows down", "Press weights", "Control down"],
    dumbbellRow: ["Set hinge", "Elbow back", "Lower slow"],
    bandRow: ["Tall chest", "Pull handles", "Reach slow"],
    shoulderPress: ["Stack ribs", "Press overhead", "Lower clean"],
    lateralRaise: ["Soft elbows", "Lift to side", "Lower slow"],
    curlExtension: ["Elbows quiet", "Curl or extend", "Return slow"],
    gobletSquat: ["Brace tall", "Sit between feet", "Stand strong"],
    bodyweightSquat: ["Feet rooted", "Hips back", "Stand tall"],
    reverseLunge: ["Stand tall", "Step back", "Drive front leg"],
    romanianDeadlift: ["Soft knees", "Hinge hips", "Stand tall"],
    gluteBridge: ["Ribs down", "Lift hips", "Lower smooth"],
    stepUp: ["Foot planted", "Stand on box", "Step down"],
    calfRaise: ["Feet rooted", "Rise up", "Lower slow"],
    deadBug: ["Brace back", "Extend opposite", "Return controlled"],
    plank: ["Elbows set", "Long line", "Breathe"],
    bearTap: ["Knees hover", "Tap shoulder", "Stay quiet"],
    squatToPress: ["Squat first", "Drive and press", "Reset clean"],
    march: ["Stand tall", "Knee up", "Switch sides"]
  };
  const labels = guides[kind] || ["Set up", "Move", "Return"];
  const cues = [
    exercise.cues[0] || labels[0],
    exercise.cues[1] || labels[1],
    exercise.cues[2] || labels[2]
  ];
  return labels.map((label, index) => ({
    label,
    cue: cues[index],
    art: stepIllustration(kind, index)
  }));
}

function stepIllustration(kind, step) {
  const familyMap = {
    inclinePushup: "push",
    pushup: "push",
    floorPress: "press",
    dumbbellRow: "pull",
    bandRow: "pull",
    shoulderPress: "overhead",
    lateralRaise: "raise",
    curlExtension: "arms",
    gobletSquat: "squat",
    bodyweightSquat: "squat",
    reverseLunge: "lunge",
    romanianDeadlift: "hinge",
    gluteBridge: "bridge",
    stepUp: "step",
    calfRaise: "calf",
    deadBug: "core",
    plank: "plank",
    bearTap: "bear",
    squatToPress: "squatPress",
    march: "march"
  };
  const family = familyMap[kind] || "standing";
  const stage = ["setup", "work", "return"][step] || "setup";
  const ground = `<line class="step-ground" x1="24" y1="132" x2="176" y2="132"></line>`;
  const head = (x, y) => `<circle class="step-body" cx="${x}" cy="${y}" r="10"></circle>`;
  const line = (x1, y1, x2, y2, moving = false) => `<line class="${moving ? "step-body step-blue" : "step-body"}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"></line>`;
  const weight = (x, y) => `<rect class="step-weight" x="${x}" y="${y}" width="18" height="12" rx="4"></rect>`;
  const arrow = (path) => `<path class="step-arrow" d="${path}"></path>`;
  const target = (x1, y1, x2, y2) => `<line class="step-target" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"></line>`;

  const scenes = {
    squat: {
      setup: `${ground}${head(100, 42)}${line(100, 54, 100, 88)}${line(100, 88, 82, 132)}${line(100, 88, 120, 132)}${target(70, 132, 130, 132)}`,
      work: `${ground}${head(100, 62)}${line(100, 74, 96, 102)}${line(96, 102, 74, 132, true)}${line(96, 102, 126, 132, true)}${arrow("M136 50 C126 70 120 86 118 108")}`,
      return: `${ground}${head(100, 42)}${line(100, 54, 100, 88)}${line(100, 88, 82, 132, true)}${line(100, 88, 120, 132, true)}${arrow("M144 106 C138 80 124 58 108 44")}`
    },
    lunge: {
      setup: `${ground}${head(86, 42)}${line(86, 54, 86, 90)}${line(86, 90, 70, 132)}${line(86, 90, 104, 132)}${arrow("M118 120 C132 122 146 126 158 132")}`,
      work: `${ground}${head(100, 56)}${line(100, 68, 98, 100)}${line(98, 100, 72, 132, true)}${line(98, 100, 148, 132, true)}${target(66, 132, 112, 132)}`,
      return: `${ground}${head(86, 42)}${line(86, 54, 86, 90)}${line(86, 90, 70, 132)}${line(86, 90, 104, 132, true)}${arrow("M154 132 C132 128 112 116 96 96")}`
    },
    hinge: {
      setup: `${ground}${head(88, 42)}${line(88, 54, 102, 92)}${line(102, 92, 84, 132)}${line(102, 92, 122, 132)}${weight(72, 96)}`,
      work: `${ground}${head(74, 58)}${line(84, 68, 124, 94, true)}${line(124, 94, 100, 132)}${line(124, 94, 142, 132)}${weight(104, 102)}${arrow("M80 46 C66 62 62 84 72 108")}`,
      return: `${ground}${head(88, 42)}${line(88, 54, 102, 92, true)}${line(102, 92, 84, 132)}${line(102, 92, 122, 132)}${weight(72, 96)}`
    },
    bridge: {
      setup: `${ground}${head(54, 112)}${line(64, 114, 112, 124)}${line(112, 124, 154, 132)}${target(96, 112, 142, 92)}`,
      work: `${ground}${head(54, 112)}${line(64, 114, 118, 92, true)}${line(118, 92, 154, 132)}${arrow("M104 122 C104 106 110 94 122 84")}`,
      return: `${ground}${head(54, 112)}${line(64, 114, 112, 124, true)}${line(112, 124, 154, 132)}${arrow("M122 86 C116 104 112 116 112 126")}`
    },
    push: {
      setup: `${ground}${head(56, 86)}${line(66, 90, 126, 112)}${line(126, 112, 164, 132)}${line(108, 106, 92, 132, true)}${target(130, 96, 172, 96)}`,
      work: `${ground}${head(56, 104)}${line(66, 108, 126, 124)}${line(126, 124, 164, 132)}${line(108, 116, 96, 132, true)}${arrow("M150 78 v38")}`,
      return: `${ground}${head(56, 86)}${line(66, 90, 126, 112)}${line(126, 112, 164, 132)}${line(108, 106, 92, 132, true)}${arrow("M150 118 v-38")}`
    },
    press: {
      setup: `${ground}${head(58, 112)}${line(68, 114, 124, 120)}${line(92, 108, 92, 82, true)}${line(118, 110, 118, 84, true)}${weight(83, 78)}${weight(109, 80)}`,
      work: `${ground}${head(58, 112)}${line(68, 114, 124, 120)}${line(92, 108, 92, 50, true)}${line(118, 110, 118, 52, true)}${weight(83, 46)}${weight(109, 48)}${arrow("M150 110 v-56")}`,
      return: `${ground}${head(58, 112)}${line(68, 114, 124, 120)}${line(92, 108, 92, 82, true)}${line(118, 110, 118, 84, true)}${weight(83, 78)}${weight(109, 80)}`
    },
    pull: {
      setup: `${ground}${head(68, 52)}${line(78, 62, 120, 92)}${line(120, 92, 98, 132)}${line(120, 92, 146, 132)}${line(96, 76, 152, 106, true)}${weight(150, 104)}`,
      work: `${ground}${head(68, 52)}${line(78, 62, 120, 92)}${line(120, 92, 98, 132)}${line(120, 92, 146, 132)}${line(96, 76, 116, 86, true)}${weight(116, 84)}${arrow("M160 112 C140 104 126 94 112 82")}`,
      return: `${ground}${head(68, 52)}${line(78, 62, 120, 92)}${line(120, 92, 98, 132)}${line(120, 92, 146, 132)}${line(96, 76, 152, 106, true)}${weight(150, 104)}`
    },
    overhead: {
      setup: `${ground}${head(100, 42)}${line(100, 54, 100, 90)}${line(100, 90, 82, 132)}${line(100, 90, 118, 132)}${line(100, 66, 78, 82, true)}${line(100, 66, 122, 82, true)}`,
      work: `${ground}${head(100, 42)}${line(100, 54, 100, 90)}${line(100, 90, 82, 132)}${line(100, 90, 118, 132)}${line(100, 64, 78, 28, true)}${line(100, 64, 122, 28, true)}${arrow("M150 92 v-58")}`,
      return: `${ground}${head(100, 42)}${line(100, 54, 100, 90)}${line(100, 90, 82, 132)}${line(100, 90, 118, 132)}${line(100, 66, 78, 82, true)}${line(100, 66, 122, 82, true)}`
    },
    raise: {
      setup: `${ground}${head(100, 42)}${line(100, 54, 100, 90)}${line(100, 90, 82, 132)}${line(100, 90, 118, 132)}${line(100, 66, 78, 100, true)}${line(100, 66, 122, 100, true)}`,
      work: `${ground}${head(100, 42)}${line(100, 54, 100, 90)}${line(100, 90, 82, 132)}${line(100, 90, 118, 132)}${line(100, 66, 58, 66, true)}${line(100, 66, 142, 66, true)}${target(52, 66, 148, 66)}`,
      return: `${ground}${head(100, 42)}${line(100, 54, 100, 90)}${line(100, 90, 82, 132)}${line(100, 90, 118, 132)}${line(100, 66, 78, 100, true)}${line(100, 66, 122, 100, true)}`
    },
    arms: {
      setup: `${ground}${head(100, 42)}${line(100, 54, 100, 90)}${line(100, 90, 82, 132)}${line(100, 90, 118, 132)}${line(100, 66, 84, 104, true)}${line(100, 66, 116, 104, true)}`,
      work: `${ground}${head(100, 42)}${line(100, 54, 100, 90)}${line(100, 90, 82, 132)}${line(100, 90, 118, 132)}${line(100, 66, 82, 74, true)}${line(100, 66, 118, 74, true)}${arrow("M146 106 C136 88 132 74 130 58")}`,
      return: `${ground}${head(100, 42)}${line(100, 54, 100, 90)}${line(100, 90, 82, 132)}${line(100, 90, 118, 132)}${line(100, 66, 84, 104, true)}${line(100, 66, 116, 104, true)}`
    },
    step: {
      setup: `${ground}<rect class="step-platform" x="118" y="104" width="48" height="28" rx="6"></rect>${head(76, 52)}${line(76, 64, 76, 96)}${line(76, 96, 58, 132)}${line(76, 96, 118, 112, true)}`,
      work: `${ground}<rect class="step-platform" x="118" y="104" width="48" height="28" rx="6"></rect>${head(140, 42)}${line(140, 54, 140, 92)}${line(140, 92, 124, 104, true)}${line(140, 92, 154, 132)}${arrow("M80 118 C100 92 116 70 136 50")}`,
      return: `${ground}<rect class="step-platform" x="118" y="104" width="48" height="28" rx="6"></rect>${head(76, 52)}${line(76, 64, 76, 96)}${line(76, 96, 58, 132)}${line(76, 96, 118, 112, true)}`
    },
    calf: {
      setup: `${ground}${head(100, 42)}${line(100, 54, 100, 90)}${line(100, 90, 82, 132)}${line(100, 90, 118, 132)}${target(70, 132, 130, 132)}`,
      work: `${ground}${head(100, 30)}${line(100, 42, 100, 78)}${line(100, 78, 84, 118, true)}${line(100, 78, 116, 118, true)}${arrow("M148 122 v-46")}`,
      return: `${ground}${head(100, 42)}${line(100, 54, 100, 90)}${line(100, 90, 82, 132, true)}${line(100, 90, 118, 132, true)}`
    },
    core: {
      setup: `${ground}${head(90, 94)}${line(100, 98, 134, 104)}${line(104, 92, 86, 62, true)}${line(132, 108, 160, 126, true)}${target(82, 132, 168, 132)}`,
      work: `${ground}${head(90, 94)}${line(100, 98, 134, 104)}${line(104, 92, 66, 44, true)}${line(132, 108, 176, 132, true)}${arrow("M122 60 C98 54 78 48 62 40")}`,
      return: `${ground}${head(90, 94)}${line(100, 98, 134, 104)}${line(104, 92, 86, 62, true)}${line(132, 108, 160, 126, true)}`
    },
    plank: {
      setup: `${ground}${head(54, 90)}${line(64, 94, 130, 116)}${line(88, 102, 78, 132)}${line(130, 116, 168, 132)}${target(54, 90, 168, 132)}`,
      work: `${ground}${head(54, 90)}${line(64, 94, 130, 116)}${line(88, 102, 78, 132)}${line(130, 116, 168, 132)}<circle class="step-breath" cx="104" cy="88" r="10"></circle>`,
      return: `${ground}${head(54, 90)}${line(64, 94, 130, 116)}${line(88, 102, 78, 132)}${line(130, 116, 168, 132)}<circle class="step-breath" cx="104" cy="88" r="10"></circle>`
    },
    bear: {
      setup: `${ground}${head(62, 70)}${line(72, 76, 128, 92)}${line(92, 82, 78, 124)}${line(128, 92, 150, 124)}${target(84, 124, 152, 124)}`,
      work: `${ground}${head(62, 70)}${line(72, 76, 128, 92)}${line(92, 82, 116, 70, true)}${line(128, 92, 150, 124)}${arrow("M82 122 C92 98 104 82 116 70")}`,
      return: `${ground}${head(62, 70)}${line(72, 76, 128, 92)}${line(92, 82, 78, 124, true)}${line(128, 92, 150, 124)}`
    },
    squatPress: {
      setup: `${ground}${head(100, 60)}${line(100, 72, 98, 104)}${line(98, 104, 74, 132)}${line(98, 104, 126, 132)}${line(100, 78, 76, 94, true)}${line(100, 78, 124, 94, true)}`,
      work: `${ground}${head(100, 38)}${line(100, 50, 100, 88)}${line(100, 88, 82, 132)}${line(100, 88, 118, 132)}${line(100, 62, 76, 28, true)}${line(100, 62, 124, 28, true)}${arrow("M150 112 C140 78 128 48 110 30")}`,
      return: `${ground}${head(100, 60)}${line(100, 72, 98, 104)}${line(98, 104, 74, 132)}${line(98, 104, 126, 132)}${line(100, 78, 76, 94, true)}${line(100, 78, 124, 94, true)}`
    },
    march: {
      setup: `${ground}${head(100, 42)}${line(100, 54, 100, 90)}${line(100, 90, 82, 132)}${line(100, 90, 118, 132)}${target(120, 82, 156, 82)}`,
      work: `${ground}${head(100, 42)}${line(100, 54, 100, 90)}${line(100, 90, 82, 132)}${line(100, 90, 142, 82, true)}${arrow("M138 128 C150 112 154 96 146 82")}`,
      return: `${ground}${head(100, 42)}${line(100, 54, 100, 90)}${line(100, 90, 118, 132)}${line(100, 90, 82, 82, true)}`
    },
    standing: {
      setup: `${ground}${head(100, 42)}${line(100, 54, 100, 90)}${line(100, 90, 82, 132)}${line(100, 90, 118, 132)}`,
      work: `${ground}${head(100, 42)}${line(100, 54, 100, 90)}${line(100, 90, 82, 132)}${line(100, 90, 118, 132)}${arrow("M140 108 C150 92 150 72 138 56")}`,
      return: `${ground}${head(100, 42)}${line(100, 54, 100, 90)}${line(100, 90, 82, 132)}${line(100, 90, 118, 132)}`
    }
  };

  return `<svg class="step-svg step-${family}" viewBox="0 0 200 150" role="img" aria-hidden="true">
    <rect x="10" y="10" width="180" height="130" rx="18"></rect>
    ${scenes[family]?.[stage] || scenes.standing[stage]}
  </svg>`;
}

function exerciseStepVisual(exercise, variant = "full") {
  const steps = visualStepGuide(exercise);
  return `
    <div class="step-visual ${variant === "compact" ? "compact-step-visual" : ""}" aria-label="${escapeHtml(exercise.name)} visual steps">
      ${steps.map((step, index) => `
        <article class="step-card">
          <div class="step-index">${index + 1}</div>
          <div class="step-art">${step.art}</div>
          <div class="step-copy">
            <strong>${escapeHtml(step.label)}</strong>
            <span>${escapeHtml(step.cue)}</span>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function demoSearchUrl(exercise) {
  const query = encodeURIComponent(`${exercise.name} proper form exercise demonstration side view`);
  return `https://www.youtube.com/results?search_query=${query}`;
}

function exerciseMediaVisual(exercise, variant = "full") {
  const media = EXERCISE_MEDIA[exercise.id];
  const anchors = [
    exercise.cues[0] || "Set up with control",
    exercise.cues[1] || "Move through a pain-free range",
    exercise.cues[2] || "Return without rushing"
  ];
  const slots = [
    { label: "Setup", text: anchors[0] },
    { label: "Work", text: anchors[1] },
    { label: "Return", text: anchors[2] }
  ];

  if (media?.video || media?.embed) {
    return `
      <div class="media-visual ${variant === "compact" ? "compact-media-visual" : ""}">
        <div class="demo-stage">
          ${media.video
            ? `<video src="${escapeHtml(media.video)}" ${media.poster ? `poster="${escapeHtml(media.poster)}"` : ""} controls muted loop playsinline></video>`
            : `<iframe src="${escapeHtml(media.embed)}" title="${escapeHtml(exercise.name)} demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>`}
        </div>
        ${media.source && variant !== "compact" ? `<a class="media-link secondary-media-link" href="${escapeHtml(media.source)}" target="_blank" rel="noreferrer">Open source video</a>` : ""}
        <div class="media-slots">
          ${(media.frames || slots).slice(0, 3).map((slot) => `
            <article class="reference-slot ${slot.image ? "has-image" : ""}">
              ${slot.image ? `<img src="${escapeHtml(slot.image)}" alt="${escapeHtml(exercise.name)} ${escapeHtml(slot.label)} reference" />` : `<span>${escapeHtml(slot.label)}</span>`}
              <strong>${escapeHtml(slot.label)}</strong>
              <small>${escapeHtml(slot.text || "")}</small>
            </article>
          `).join("")}
        </div>
      </div>
    `;
  }

  return `
    <div class="media-visual missing-demo ${variant === "compact" ? "compact-media-visual" : ""}">
      <div class="demo-stage media-placeholder">
        <div>
          <span class="media-kicker">Real demo needed</span>
          <strong>${escapeHtml(exercise.name)}</strong>
          <p>Use a side-angle video or clear reference photos before trusting a visual demo.</p>
          ${variant === "compact" ? "" : `<a class="media-link" href="${demoSearchUrl(exercise)}" target="_blank" rel="noreferrer">Find reference video</a>`}
        </div>
      </div>
      <div class="media-slots">
        ${slots.map((slot) => `
          <article class="reference-slot">
            <span>${escapeHtml(slot.label)}</span>
            <strong>${escapeHtml(slot.label)}</strong>
            <small>${escapeHtml(slot.text)}</small>
          </article>
        `).join("")}
      </div>
    </div>
  `;
}

function learningPoints(exercise) {
  const kind = diagramKind(exercise);
  const patterns = {
    squat: {
      setup: ["Feet about shoulder width", "Brace before you descend", "Keep the weight over mid-foot"],
      mistakes: ["Knees collapsing inward", "Heels lifting", "Rushing the bottom position"]
    },
    split: {
      setup: ["Start tall with ribs stacked", "Step or place the front foot firmly", "Keep the front knee tracking over toes"],
      mistakes: ["Pushing off the back leg too much", "Letting the front knee cave", "Dropping without control"]
    },
    hinge: {
      setup: ["Soften knees", "Push hips back", "Keep spine long and weight close"],
      mistakes: ["Squatting instead of hinging", "Rounding the back", "Letting the weight drift away"]
    },
    push: {
    setup: ["Brace like a plank", "Set hands or equipment under control", "Keep shoulders away from ears"],
      mistakes: ["Flaring elbows hard", "Losing rib position", "Cutting the range short"]
    },
    pull: {
      setup: ["Set the torso before pulling", "Start with the shoulder blade", "Pull elbow toward your ribs"],
      mistakes: ["Shrugging", "Twisting the torso", "Yanking the weight"]
    },
    arms: {
      setup: ["Stand tall", "Keep elbows controlled", "Use a weight you can pause"],
      mistakes: ["Swinging the torso", "Letting wrists collapse", "Rushing the lowering phase"]
    },
    core: {
      setup: ["Brace gently before moving", "Keep breathing", "Move slowly enough to stay stable"],
      mistakes: ["Holding breath too long", "Arching the low back", "Moving faster than control allows"]
    },
    standing: {
      setup: ["Stand tall", "Brace lightly", "Move through pain-free range"],
      mistakes: ["Rushing reps", "Losing posture", "Using momentum first"]
    }
  };

  return patterns[kind] || patterns.standing;
}

function prescriptionFor(exercise, settings) {
  const levelBonus = settings.level === "advanced" ? 1 : 0;
  const base = {
    balanced: { sets: 2 + levelBonus, reps: "8-10 reps", restSeconds: 60 },
    muscle: { sets: 3, reps: "8-12 reps", restSeconds: 75 },
    strength: { sets: 3 + levelBonus, reps: "6-8 reps", restSeconds: 90 },
    conditioning: { sets: 2, reps: exercise.kind === "core" ? "30 sec" : "12-15 reps", restSeconds: 35 },
    posture: { sets: 2, reps: exercise.kind === "core" ? "30 sec" : "10-12 reps", restSeconds: 45 }
  }[settings.goal] || { sets: 2, reps: "8-10 reps", restSeconds: 60 };

  if (exercise.kind === "accessory" && settings.goal === "strength") {
    return { sets: 2, reps: "10-12 reps", restSeconds: 60 };
  }

  if (exercise.kind === "core") {
    return { sets: Math.min(base.sets, 2), reps: base.reps.includes("sec") ? base.reps : "30 sec", restSeconds: Math.min(base.restSeconds, 45) };
  }

  return base;
}

function historyForExercise(exerciseId) {
  return (state.data.history || [])
    .flatMap((session) => session.setLogs || [])
    .filter((log) => log.exerciseId === exerciseId);
}

function progressionFor(exercise) {
  const recent = historyForExercise(exercise.id).slice(0, 4);
  if (!recent.length) return "Start conservative and leave 2 reps in reserve.";
  const hard = recent.filter((log) => log.difficulty === "hard").length;
  const easy = recent.filter((log) => log.difficulty === "easy").length;
  const avgReps = Math.round(recent.reduce((sum, log) => sum + Number(log.reps || 0), 0) / recent.length);
  if (hard >= 2) return "Reduce load or use the easier swap next time.";
  if (easy >= 2) return "Add 1-2 reps or a little weight next time.";
  if (avgReps > 0) return `Repeat this range and aim to beat ${avgReps} reps with clean form.`;
  return "Repeat the same setup and keep the effort controlled.";
}

function buildRoutine(settings) {
  const minutes = Number(settings.duration);
  const exerciseCount = minutes <= 10 ? 3 : minutes <= 20 ? 5 : minutes <= 30 ? 6 : 8;
  const exercises = pickExercises(settings, exerciseCount).map((exercise) => ({
    ...exercise,
    prescription: prescriptionFor(exercise, settings),
    swaps: swapOptions(exercise),
    progression: progressionFor(exercise)
  }));

  const sets = exercises.flatMap((exercise) =>
    Array.from({ length: exercise.prescription.sets }).map((_, index) => ({
      id: `${exercise.id}-set-${index + 1}`,
      exercise,
      setNumber: index + 1,
      totalSets: exercise.prescription.sets,
      reps: exercise.prescription.reps,
      restSeconds: exercise.prescription.restSeconds,
      cue: exercise.cues[index % exercise.cues.length],
      substitute: exercise.substitute,
      swaps: exercise.swaps
    }))
  );

  return {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    title: `${labelFor(AREAS, settings.area)}${settings.focus ? `: ${settings.focus}` : ""}`,
    targetMinutes: minutes,
    settings,
    warmups: WARMUPS,
    exercises,
    sets,
    setLogs: []
  };
}

function renderRoutine() {
  if (!state.routine) {
    $("#routineMeta").textContent = "Not generated";
    $("#routinePreview").innerHTML = `<div class="empty-state">Choose an area and generate a routine to see the plan.</div>`;
    $("#player").hidden = true;
    updateShellMode();
    return;
  }

  $("#routineMeta").textContent = `${state.routine.targetMinutes} min plan`;
  $("#routinePreview").innerHTML = `
    <div class="routine-title">
      <div>
        <p class="eyebrow">${escapeHtml(labelFor(GOALS, state.routine.settings.goal))}</p>
        <h3>${escapeHtml(state.routine.title)}</h3>
      </div>
      <div class="routine-actions">
        <span class="pill">${escapeHtml(labelFor(EQUIPMENT, state.routine.settings.equipment))}</span>
        <button class="learn-link" data-save-favorite type="button">Save favorite</button>
      </div>
    </div>
    <article class="exercise-row warmup-row">
      <div>
        <h4>Warmup</h4>
        <p>${state.routine.warmups.map((item) => `${escapeHtml(item.name)} ${formatTime(item.seconds)}`).join(" · ")}</p>
      </div>
      <span>Built in</span>
    </article>
    <div class="exercise-list">
      ${state.routine.exercises.map((exercise) => `
        <article class="exercise-row">
          <div>
            <h4>${escapeHtml(exercise.name)}</h4>
            <p>${exercise.prescription.sets} sets · ${escapeHtml(exercise.prescription.reps)} · ${formatTime(exercise.prescription.restSeconds)} rest</p>
            <p class="mini-note">${escapeHtml(exercise.progression)}</p>
          </div>
          <button class="learn-link" data-learn-exercise="${escapeHtml(exercise.id)}" type="button">Learn</button>
        </article>
      `).join("")}
    </div>
  `;

  $("#player").hidden = false;
  state.setIndex = 0;
  state.remaining = 0;
  state.elapsed = 0;
  state.running = false;
  state.warmupIndex = 0;
  state.phase = "readyWarmup";
  state.selectedDifficulty = "right";
  clearInterval(state.timerId);
  $("#startPause").textContent = "Start warmup";
  $("#completionSummary").hidden = true;
  $("#completionSummary").innerHTML = "";
  renderPlayer();
  renderLearn();
  updateShellMode();
}

function renderPlayer() {
  const routine = state.routine;
  if (!routine) return;
  const warmup = routine.warmups?.[state.warmupIndex];
  const set = routine.sets[state.setIndex];
  const next = routine.sets[state.setIndex + 1];
  const inWarmup = state.phase === "readyWarmup" || state.phase === "warmup";
  const progressUnits = (routine.warmups?.length || 0) + routine.sets.length;
  const doneUnits = inWarmup ? state.warmupIndex : (routine.warmups?.length || 0) + state.setIndex;
  const progress = state.phase === "complete" ? 100 : Math.min(100, Math.max(0, (doneUnits / progressUnits) * 100));
  const phaseLabel = inWarmup ? `Warmup ${state.warmupIndex + 1} of ${routine.warmups.length}` : state.phase === "rest" ? "Rest" : state.phase === "complete" ? "Complete" : `Set ${set.setNumber} of ${set.totalSets}`;

  $("#playerPhase").textContent = phaseLabel;
  $("#currentExercise").textContent = inWarmup ? warmup.name : state.phase === "rest" ? "Rest" : set.exercise.name;
  $("#currentPrescription").textContent = inWarmup
    ? `${formatTime(warmup.seconds)} · ${warmup.cue}`
    : state.phase === "rest"
    ? `Next: ${next ? `${next.exercise.name} · set ${next.setNumber} of ${next.totalSets} · ${next.reps}` : "Finish workout"}`
    : `${set.reps} · then ${formatTime(set.restSeconds)} rest`;
  $("#timeDisplay").textContent = inWarmup || state.phase === "rest" ? formatTime(state.remaining || (inWarmup ? warmup.seconds : 0)) : formatTime(state.elapsed);
  $("#currentCue").textContent = inWarmup ? warmup.cue : state.phase === "rest" ? "Recover, breathe, and set up the next movement." : set.cue;
  $("#workoutProgress").style.width = `${progress}%`;
  $("#nextExercise").innerHTML = next
    ? `<strong>${escapeHtml(next.exercise.name)}</strong><span>Set ${next.setNumber} of ${next.totalSets} · ${escapeHtml(next.reps)}</span>`
    : `<strong>Done</strong><span>Finish and save the session.</span>`;
  $("#playerVisual").innerHTML = inWarmup ? `<div class="empty-mini">Warm up smoothly before the first set.</div>` : exerciseMediaVisual(set.exercise, "compact");
  $("#substitution").innerHTML = inWarmup ? "Working sets will show easier, harder, no-equipment, and dumbbell swaps." : renderSwaps(set.exercise);
  $("#setLogger").hidden = state.phase !== "set";
  $("#startPause").disabled = state.phase === "rest" || state.phase === "set" || state.phase === "warmup" || state.phase === "complete";
  $("#doneSet").disabled = !["set", "warmup"].includes(state.phase);
  $("#doneSet").textContent = state.phase === "warmup" ? "Done warmup" : "Done";
  $("#skipStep").textContent = state.phase === "rest" ? "Skip rest" : inWarmup ? "Skip warmup" : "Skip set";
  $("#startPause").textContent = inWarmup ? "Start warmup" : "Start set";
}

function renderSwaps(exercise) {
  const swaps = exercise.swaps || swapOptions(exercise);
  return `
    <div class="swap-list">
      <span><strong>Easier:</strong> ${escapeHtml(swaps.easier)}</span>
      <span><strong>Harder:</strong> ${escapeHtml(swaps.harder)}</span>
      <span><strong>No equipment:</strong> ${escapeHtml(swaps.noEquipment)}</span>
      <span><strong>Dumbbell:</strong> ${escapeHtml(swaps.dumbbell)}</span>
    </div>
  `;
}

function tick() {
  if (!state.running) return;
  if (state.phase === "rest" || state.phase === "warmup") {
    state.remaining -= 1;
    if (state.remaining <= 0) {
      if (state.phase === "warmup") advanceWarmup();
      else advanceSet();
      return;
    }
  } else if (state.phase === "set") {
    state.elapsed += 1;
  }
  renderPlayer();
}

function startSet() {
  if (!state.routine || state.phase === "rest" || state.phase === "complete") return;
  if (state.phase === "readyWarmup") {
    const warmup = state.routine.warmups[state.warmupIndex];
    state.phase = "warmup";
    state.running = true;
    state.remaining = warmup.seconds;
    clearInterval(state.timerId);
    state.timerId = setInterval(tick, 1000);
    renderPlayer();
    return;
  }
  state.phase = "set";
  state.running = true;
  state.elapsed = 0;
  seedSetLogger();
  clearInterval(state.timerId);
  state.timerId = setInterval(tick, 1000);
  $("#startPause").textContent = "Set running";
  renderPlayer();
}

function doneSet() {
  if (!state.routine) return;
  if (state.phase === "warmup") {
    advanceWarmup();
    return;
  }
  if (state.phase !== "set") return;
  logCurrentSet();
  if (state.setIndex >= state.routine.sets.length - 1) {
    completeWorkout();
    return;
  }
  const set = state.routine.sets[state.setIndex];
  state.phase = "rest";
  state.running = true;
  state.remaining = set.restSeconds;
  clearInterval(state.timerId);
  state.timerId = setInterval(tick, 1000);
  $("#startPause").textContent = "Start set";
  renderPlayer();
}

function advanceWarmup() {
  if (!state.routine) return;
  if (state.warmupIndex >= state.routine.warmups.length - 1) {
    state.phase = "ready";
    state.running = false;
    state.remaining = 0;
    clearInterval(state.timerId);
    renderPlayer();
    return;
  }
  state.warmupIndex += 1;
  state.phase = "readyWarmup";
  state.running = false;
  state.remaining = 0;
  clearInterval(state.timerId);
  renderPlayer();
}

function advanceSet() {
  if (!state.routine) return;
  if (state.phase === "readyWarmup" || state.phase === "warmup") {
    advanceWarmup();
    return;
  }
  if (state.setIndex >= state.routine.sets.length - 1) {
    completeWorkout();
    return;
  }
  state.setIndex += 1;
  state.phase = "ready";
  state.running = false;
  state.elapsed = 0;
  state.remaining = 0;
  clearInterval(state.timerId);
  $("#startPause").textContent = "Start set";
  renderPlayer();
}

function seedSetLogger() {
  const set = state.routine?.sets[state.setIndex];
  if (!set) return;
  const saved = state.routine.setLogs.find((log) => log.setId === set.id);
  $("#actualReps").value = saved?.reps || suggestedRepNumber(set.reps);
  $("#actualWeight").value = saved?.weight ?? "";
  state.selectedDifficulty = saved?.difficulty || "right";
  $$("#difficultyControls [data-difficulty]").forEach((button) => button.classList.toggle("active", button.dataset.difficulty === state.selectedDifficulty));
}

function suggestedRepNumber(reps) {
  const match = String(reps).match(/\d+/g);
  return match?.length ? match[match.length - 1] : "";
}

function logCurrentSet() {
  const set = state.routine?.sets[state.setIndex];
  if (!set) return;
  const entry = {
    setId: set.id,
    exerciseId: set.exercise.id,
    exerciseName: set.exercise.name,
    setNumber: set.setNumber,
    reps: Number($("#actualReps").value || 0),
    weight: Number($("#actualWeight").value || 0),
    difficulty: state.selectedDifficulty,
    elapsedSeconds: state.elapsed,
    loggedAt: new Date().toISOString()
  };
  state.routine.setLogs = state.routine.setLogs.filter((log) => log.setId !== set.id);
  state.routine.setLogs.push(entry);
}

function completeWorkout() {
  if (!state.routine || state.phase === "complete") return;
  clearInterval(state.timerId);
  state.running = false;
  state.phase = "complete";
  $("#startPause").textContent = "Start set";
  const completed = {
    id: state.routine.id,
    title: state.routine.title,
    area: state.routine.settings.area,
    focus: state.routine.settings.focus,
    goal: state.routine.settings.goal,
    duration: state.routine.targetMinutes,
    completedAt: new Date().toISOString(),
    exercises: state.routine.exercises.map((exercise) => exercise.name),
    setLogs: [...state.routine.setLogs],
    totalSets: state.routine.setLogs.length || state.routine.sets.length,
    nextRecommendation: nextSessionRecommendation(state.routine)
  };
  state.data.history = [completed, ...state.data.history].slice(0, 50);
  saveData();
  renderHistory();
  renderBalance();
  $("#currentExercise").textContent = "Workout saved";
  $("#currentPrescription").textContent = `${state.routine.sets.length} sets completed`;
  $("#currentCue").textContent = completed.nextRecommendation;
  $("#timeDisplay").textContent = "Done";
  $("#workoutProgress").style.width = "100%";
  renderCompletionSummary(completed);
  $("#startPause").disabled = true;
  $("#doneSet").disabled = true;
}

function nextSessionRecommendation(routine) {
  const logs = routine.setLogs || [];
  if (!logs.length) return "Next time, log reps and difficulty so the coach can progress you.";
  const hard = logs.filter((log) => log.difficulty === "hard").length;
  const easy = logs.filter((log) => log.difficulty === "easy").length;
  if (hard > logs.length / 3) return "Next time, reduce load or choose easier swaps for the hardest movements.";
  if (easy > logs.length / 2) return "Next time, add 1-2 reps, add a little weight, or add one set to the first movement.";
  return "Next time, repeat this routine and try to improve one set while keeping form clean.";
}

function renderCompletionSummary(session) {
  const focusAreas = [...new Set(state.routine.exercises.flatMap((exercise) => exercise.focus).slice(0, 8))];
  $("#completionSummary").hidden = false;
  $("#completionSummary").innerHTML = `
    <h3>Session Summary</h3>
    <div class="summary-grid">
      <span><strong>${session.totalSets}</strong> sets logged</span>
      <span><strong>${state.routine.exercises.length}</strong> exercises</span>
      <span><strong>${focusAreas.map(escapeHtml).join(", ")}</strong></span>
    </div>
    <p>${escapeHtml(session.nextRecommendation)}</p>
  `;
}

function renderLibrary() {
  const groups = AREAS.filter((area) => state.libraryFilter === "all" || area.id === state.libraryFilter);
  const favoriteCards = (state.data.favorites || []).map((favorite) => `
    <button class="library-card favorite-card" data-load-favorite="${escapeHtml(favorite.id)}" type="button">
      <span>Favorite routine</span>
      <strong>${escapeHtml(favorite.title)}</strong>
      <em>${escapeHtml(labelFor(GOALS, favorite.settings.goal))} · ${favorite.exerciseNames.length} exercises</em>
    </button>
  `).join("");
  const libraryCards = groups.map((area) => {
    const focusList = FOCUSES[area.id].map((focus) => {
      const count = EXERCISES.filter((exercise) => exercise.areas.includes(area.id) && exercise.focus.includes(focus)).length;
      return `<button class="library-card" data-library-area="${area.id}" data-library-focus="${focus}" type="button">
        <span>${escapeHtml(area.label)}</span>
        <strong>${escapeHtml(focus)}</strong>
        <em>${count} exercise options</em>
      </button>`;
    }).join("");
    return focusList;
  }).join("");
  $("#libraryGrid").innerHTML = favoriteCards + libraryCards;
}

function learningExerciseList() {
  if (state.learnScope === "plan" && state.routine?.exercises?.length) {
    return state.routine.exercises;
  }
  return EXERCISES;
}

function renderLearn() {
  const planAvailable = Boolean(state.routine?.exercises?.length);
  if (state.learnScope === "plan" && !planAvailable) state.learnScope = "all";
  $("[data-learn-scope='plan']").disabled = !planAvailable;
  $$(".filter-button[data-learn-scope]").forEach((button) => button.classList.toggle("active", button.dataset.learnScope === state.learnScope));
  $("#learnScopeTitle").textContent = state.learnScope === "plan" ? "Exercises in your current plan" : "All exercise tutorials";

  const exercises = learningExerciseList();
  $("#learnGrid").innerHTML = exercises.map((exercise) => {
    const points = learningPoints(exercise);
    const prescription = exercise.prescription || prescriptionFor(exercise, currentSettings());
    return `
      <article class="learn-card" id="learn-${escapeHtml(exercise.id)}">
        <div class="learn-visual">${exerciseMediaVisual(exercise)}</div>
        <div class="learn-body">
          <div class="learn-head">
            <div>
              <p class="eyebrow">${exercise.focus.slice(0, 2).map(sentenceCase).map(escapeHtml).join(" · ")}</p>
              <h3>${escapeHtml(exercise.name)}</h3>
            </div>
            <span class="pill">${prescription.sets}x ${escapeHtml(prescription.reps)}</span>
          </div>
          <div class="learn-section">
            <h4>How to do it</h4>
            <ol>
              ${points.setup.map((point) => `<li>${escapeHtml(point)}.</li>`).join("")}
              <li>${escapeHtml(exercise.cues[0])}.</li>
            </ol>
          </div>
          <div class="learn-columns">
            <div class="learn-section">
              <h4>Coach cues</h4>
              <ul>${exercise.cues.map((cue) => `<li>${escapeHtml(cue)}.</li>`).join("")}</ul>
            </div>
            <div class="learn-section">
              <h4>Watch for</h4>
              <ul>${points.mistakes.map((mistake) => `<li>${escapeHtml(mistake)}.</li>`).join("")}</ul>
            </div>
          </div>
          <div class="sub-card compact-sub">${renderSwaps(exercise)}</div>
        </div>
      </article>
    `;
  }).join("");
}

function renderHistory() {
  const history = state.data.history || [];
  $("#historyList").innerHTML = history.length
    ? history.map((item) => `
      <article class="history-item">
        <div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${new Date(item.completedAt).toLocaleString()} · ${escapeHtml(labelFor(GOALS, item.goal))} · ${item.duration} min · ${item.totalSets || item.exercises.length} sets</p>
          ${item.nextRecommendation ? `<p class="mini-note">${escapeHtml(item.nextRecommendation)}</p>` : ""}
        </div>
        <span>${escapeHtml(labelFor(AREAS, item.area))}</span>
      </article>
    `).join("")
    : `<div class="empty-state">No completed workouts yet. Generate a routine and finish it to build your history.</div>`;
}

function renderBalance() {
  const recent = (state.data.history || []).slice(0, 8);
  const counts = AREAS.reduce((acc, area) => ({ ...acc, [area.id]: recent.filter((item) => item.area === area.id).length }), {});
  const total = recent.length;
  const leastTrained = AREAS.slice().sort((a, b) => counts[a.id] - counts[b.id])[0];
  const weeklyTarget = Number(state.data.profile.weeklyTarget || 3);
  const thisWeek = (state.data.history || []).filter((item) => Date.now() - new Date(item.completedAt).getTime() < 7 * 24 * 60 * 60 * 1000).length;

  $("#profileSummary").textContent = `${labelFor(LEVELS, state.data.profile.level)} · ${labelFor(EQUIPMENT, state.data.profile.equipment)}`;
  $("#balanceCheck").innerHTML = `
    <div class="metrics">
      <div class="metric"><span>This week</span><strong>${thisWeek}/${weeklyTarget}</strong></div>
      <div class="metric"><span>Recent sessions</span><strong>${total}</strong></div>
    </div>
    <p>${total ? `Recent balance: upper ${counts.upper}, lower ${counts.lower}, total ${counts.total}.` : "Complete workouts to get balance suggestions."}</p>
    <p class="recommendation">Suggested next area: ${escapeHtml(leastTrained.label)}.</p>
  `;
}

function breadcrumbItems() {
  if (state.view === "today" && state.routine) {
    return [
      { label: "Builder", action: "builder" },
      { label: "Routine", current: true }
    ];
  }
  if (state.view === "today") {
    return [{ label: "Builder", current: true }];
  }
  const activeNav = $(`.nav-item[data-view="${state.view}"]`);
  const viewLabel = activeNav?.getAttribute("aria-label") || activeNav?.textContent || "";
  return [
    { label: state.routine ? "Routine" : "Builder", view: "today" },
    { label: viewLabel, current: true }
  ];
}

function renderBreadcrumbs() {
  $("#breadcrumbs").innerHTML = breadcrumbItems().map((item, index) => {
    const divider = index ? `<span class="breadcrumb-divider">/</span>` : "";
    if (item.current) return `${divider}<span class="breadcrumb-current">${escapeHtml(item.label)}</span>`;
    const attr = item.action ? `data-crumb-action="${escapeHtml(item.action)}"` : `data-crumb-view="${escapeHtml(item.view)}"`;
    return `${divider}<button class="breadcrumb-link" ${attr} type="button">${escapeHtml(item.label)}</button>`;
  }).join("");
}

function render() {
  initControls();
  renderRoutine();
  renderLibrary();
  renderLearn();
  renderHistory();
  renderBalance();
  updateShellMode();
}

function switchView(viewId) {
  state.view = viewId;
  $$(".nav-item").forEach((button) => button.classList.toggle("active", button.dataset.view === viewId));
  $$(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
  const activeNav = $(`.nav-item[data-view="${viewId}"]`);
  $("#viewTitle").textContent = activeNav?.getAttribute("aria-label") || activeNav?.textContent || "";
  closeMenu();
  updateShellMode();
}

function currentSettings() {
  return {
    area: state.area,
    focus: state.focus,
    goal: $("#goalSelect").value,
    duration: Number($("#durationSelect").value),
    level: $("#levelSelect").value,
    equipment: $("#equipmentSelect").value
  };
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest(".nav-item");
  if (nav) switchView(nav.dataset.view);

  const crumbView = event.target.closest("[data-crumb-view]");
  if (crumbView) switchView(crumbView.dataset.crumbView);

  const crumbAction = event.target.closest("[data-crumb-action]");
  if (crumbAction?.dataset.crumbAction === "builder") {
    state.routine = null;
    state.phase = "ready";
    state.running = false;
    state.elapsed = 0;
    state.remaining = 0;
    clearInterval(state.timerId);
    switchView("today");
    render();
  }

  const area = event.target.closest("[data-area]");
  if (area) {
    state.area = area.dataset.area;
    state.focus = "";
    initControls();
  }

  const focus = event.target.closest("[data-focus]");
  if (focus) {
    state.focus = focus.dataset.focus;
    renderFocusControls();
  }

  const libraryCard = event.target.closest("[data-library-area]");
  if (libraryCard) {
    state.area = libraryCard.dataset.libraryArea;
    state.focus = libraryCard.dataset.libraryFocus;
    switchView("today");
    initControls();
  }

  const learnButton = event.target.closest("[data-learn-scope]");
  if (learnButton) {
    state.learnScope = learnButton.dataset.learnScope;
    renderLearn();
  }

  const learnExercise = event.target.closest("[data-learn-exercise]");
  if (learnExercise) {
    state.learnScope = "plan";
    switchView("learn");
    renderLearn();
    document.getElementById(`learn-${learnExercise.dataset.learnExercise}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const saveFavorite = event.target.closest("[data-save-favorite]");
  if (saveFavorite && state.routine) {
    saveCurrentFavorite();
    renderLibrary();
    renderRoutine();
  }

  const loadFavorite = event.target.closest("[data-load-favorite]");
  if (loadFavorite) {
    loadFavoriteRoutine(loadFavorite.dataset.loadFavorite);
  }

  const difficulty = event.target.closest("[data-difficulty]");
  if (difficulty) {
    state.selectedDifficulty = difficulty.dataset.difficulty;
    $$("#difficultyControls [data-difficulty]").forEach((button) => button.classList.toggle("active", button === difficulty));
  }

  const filter = event.target.closest("[data-library-filter]");
  if (filter) {
    state.libraryFilter = filter.dataset.libraryFilter;
    $$(".filter-button[data-library-filter]").forEach((button) => button.classList.toggle("active", button === filter));
    renderLibrary();
  }
});

function openMenu() {
  document.body.classList.add("menu-open");
  $("#menuToggle").setAttribute("aria-expanded", "true");
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  $("#menuToggle").setAttribute("aria-expanded", "false");
}

function updateShellMode() {
  const inRoutineFocus = Boolean(state.routine && state.view === "today");
  document.body.classList.toggle("routine-focus", inRoutineFocus);
  document.body.classList.toggle("has-routine", Boolean(state.routine));
  $("#resetPlanner").textContent = inRoutineFocus ? "New routine" : "Reset";
  if (inRoutineFocus) {
    $("#viewTitle").textContent = "Routine";
  } else {
    const activeNav = $(`.nav-item[data-view="${state.view}"]`);
    $("#viewTitle").textContent = activeNav?.getAttribute("aria-label") || activeNav?.textContent || "";
  }
  renderBreadcrumbs();
}

function saveCurrentFavorite() {
  const favorite = {
    id: crypto.randomUUID(),
    title: state.routine.title,
    settings: state.routine.settings,
    exerciseIds: state.routine.exercises.map((exercise) => exercise.id),
    exerciseNames: state.routine.exercises.map((exercise) => exercise.name),
    savedAt: new Date().toISOString()
  };
  state.data.favorites = [favorite, ...(state.data.favorites || []).filter((item) => item.title !== favorite.title)].slice(0, 8);
  saveData();
}

function loadFavoriteRoutine(id) {
  const favorite = (state.data.favorites || []).find((item) => item.id === id);
  if (!favorite) return;
  state.area = favorite.settings.area;
  state.focus = favorite.settings.focus || "";
  state.routine = buildRoutine(favorite.settings);
  const ordered = favorite.exerciseIds.map((exerciseId) => state.routine.exercises.find((exercise) => exercise.id === exerciseId) || EXERCISES.find((exercise) => exercise.id === exerciseId)).filter(Boolean);
  if (ordered.length) {
    state.routine.exercises = ordered.map((exercise) => ({
      ...exercise,
      prescription: exercise.prescription || prescriptionFor(exercise, favorite.settings),
      swaps: exercise.swaps || swapOptions(exercise),
      progression: progressionFor(exercise)
    }));
    state.routine.sets = state.routine.exercises.flatMap((exercise) =>
      Array.from({ length: exercise.prescription.sets }).map((_, index) => ({
        id: `${exercise.id}-set-${index + 1}`,
        exercise,
        setNumber: index + 1,
        totalSets: exercise.prescription.sets,
        reps: exercise.prescription.reps,
        restSeconds: exercise.prescription.restSeconds,
        cue: exercise.cues[index % exercise.cues.length],
        substitute: exercise.substitute,
        swaps: exercise.swaps
      }))
    );
  }
  switchView("today");
  initControls();
  renderRoutine();
}

$("#generateWorkout").addEventListener("click", () => {
  state.routine = buildRoutine(currentSettings());
  renderRoutine();
  $("#player").scrollIntoView({ behavior: "smooth", block: "start" });
});

$("#resetPlanner").addEventListener("click", () => {
  state.focus = "";
  state.routine = null;
  state.phase = "ready";
  state.running = false;
  state.elapsed = 0;
  state.remaining = 0;
  clearInterval(state.timerId);
  render();
});

$("#startPause").addEventListener("click", () => {
  startSet();
});

$("#doneSet").addEventListener("click", doneSet);
$("#skipStep").addEventListener("click", advanceSet);
$("#finishWorkout").addEventListener("click", completeWorkout);

$("#menuToggle").addEventListener("click", () => {
  if (document.body.classList.contains("menu-open")) closeMenu();
  else openMenu();
});

$("#menuOverlay").addEventListener("click", closeMenu);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

$("#profileForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  state.data.profile = {
    name: form.get("name") || "Hiren",
    goal: form.get("goal"),
    level: form.get("level"),
    equipment: form.get("equipment"),
    duration: Number(form.get("duration")),
    weeklyTarget: Number(form.get("weeklyTarget")),
    constraints: form.getAll("constraints"),
    avoid: form.get("avoid") || ""
  };
  saveData();
  initControls();
  renderBalance();
});

$("#clearHistory").addEventListener("click", () => {
  state.data.history = [];
  saveData();
  renderHistory();
  renderBalance();
});

render();
