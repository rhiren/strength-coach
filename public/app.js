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
  { name: "Joint Prep", seconds: 40, phase: "Warmup", cue: "Circle shoulders, hips, knees, and ankles. Keep it easy." },
  { name: "Bodyweight Pattern Rehearsal", seconds: 40, phase: "Warmup", cue: "Practice the main movement slowly before loading it." }
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
      avoid: ""
    },
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

function pickExercises(settings, count) {
  const avoidTerms = String(state.data.profile.avoid || "").toLowerCase().split(/[,\n]/).map((term) => term.trim()).filter(Boolean);
  const candidates = EXERCISES
    .filter((exercise) => exercise.areas.includes(settings.area))
    .filter((exercise) => exercise.equipment.includes(settings.equipment) || exercise.equipment.includes("bodyweight"))
    .filter((exercise) => exercise.level.includes(settings.level) || settings.level !== "beginner")
    .filter((exercise) => !avoidTerms.some((term) => exercise.name.toLowerCase().includes(term) || exercise.focus.includes(term)))
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

function movementDiagram(exercise) {
  const kind = diagramKind(exercise);
  const common = `
    <defs>
      <marker id="arrow-${exercise.id}" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
        <path d="M0,0 L0,6 L6,3 z" fill="#0a84ff"></path>
      </marker>
    </defs>
    <rect x="8" y="8" width="304" height="184" rx="10" fill="#f4f7f8"></rect>
    <line x1="34" y1="160" x2="286" y2="160" stroke="#cfd9df" stroke-width="4" stroke-linecap="round"></line>
  `;
  const diagrams = {
    squat: `
      ${common}
      <circle cx="92" cy="62" r="14"></circle><line x1="92" y1="77" x2="92" y2="118"></line><line x1="92" y1="92" x2="65" y2="108"></line><line x1="92" y1="92" x2="119" y2="108"></line><line x1="92" y1="118" x2="72" y2="158"></line><line x1="92" y1="118" x2="116" y2="158"></line>
      <circle cx="218" cy="82" r="14"></circle><line x1="218" y1="97" x2="206" y2="128"></line><line x1="210" y1="111" x2="184" y2="124"></line><line x1="210" y1="111" x2="237" y2="122"></line><line x1="206" y1="128" x2="176" y2="158"></line><line x1="206" y1="128" x2="238" y2="158"></line>
      <path d="M132 70 C160 58 182 60 198 74" stroke="#0a84ff" marker-end="url(#arrow-${exercise.id})"></path>
    `,
    split: `
      ${common}
      <circle cx="94" cy="62" r="14"></circle><line x1="94" y1="77" x2="94" y2="120"></line><line x1="94" y1="94" x2="70" y2="112"></line><line x1="94" y1="94" x2="118" y2="112"></line><line x1="94" y1="120" x2="72" y2="158"></line><line x1="94" y1="120" x2="118" y2="158"></line>
      <circle cx="220" cy="78" r="14"></circle><line x1="220" y1="93" x2="215" y2="128"></line><line x1="217" y1="108" x2="190" y2="120"></line><line x1="217" y1="108" x2="244" y2="120"></line><line x1="215" y1="128" x2="178" y2="158"></line><line x1="215" y1="128" x2="254" y2="158"></line>
      <path d="M135 116 C160 132 180 132 202 116" stroke="#0a84ff" marker-end="url(#arrow-${exercise.id})"></path>
    `,
    hinge: `
      ${common}
      <circle cx="94" cy="60" r="14"></circle><line x1="94" y1="75" x2="96" y2="120"></line><line x1="96" y1="92" x2="72" y2="110"></line><line x1="96" y1="92" x2="120" y2="110"></line><line x1="96" y1="120" x2="76" y2="158"></line><line x1="96" y1="120" x2="118" y2="158"></line>
      <circle cx="218" cy="78" r="14"></circle><line x1="207" y1="91" x2="172" y2="121"></line><line x1="186" y1="110" x2="158" y2="130"></line><line x1="186" y1="110" x2="216" y2="128"></line><line x1="172" y1="121" x2="164" y2="158"></line><line x1="172" y1="121" x2="226" y2="158"></line>
      <path d="M130 82 C155 70 178 70 198 84" stroke="#0a84ff" marker-end="url(#arrow-${exercise.id})"></path>
    `,
    push: `
      ${common}
      <circle cx="86" cy="106" r="12"></circle><line x1="98" y1="110" x2="152" y2="132"></line><line x1="120" y1="119" x2="104" y2="158"></line><line x1="120" y1="119" x2="134" y2="158"></line><line x1="152" y1="132" x2="198" y2="154"></line><line x1="152" y1="132" x2="112" y2="154"></line>
      <circle cx="214" cy="124" r="12"></circle><line x1="226" y1="128" x2="266" y2="146"></line><line x1="242" y1="136" x2="226" y2="158"></line><line x1="242" y1="136" x2="262" y2="158"></line><line x1="266" y1="146" x2="286" y2="158"></line><line x1="266" y1="146" x2="232" y2="158"></line>
      <path d="M178 102 C194 91 210 93 226 106" stroke="#0a84ff" marker-end="url(#arrow-${exercise.id})"></path>
    `,
    pull: `
      ${common}
      <circle cx="88" cy="70" r="14"></circle><line x1="96" y1="82" x2="132" y2="120"></line><line x1="114" y1="101" x2="84" y2="124"></line><line x1="114" y1="101" x2="146" y2="120"></line><line x1="132" y1="120" x2="110" y2="158"></line><line x1="132" y1="120" x2="162" y2="158"></line>
      <circle cx="214" cy="70" r="14"></circle><line x1="222" y1="82" x2="250" y2="120"></line><line x1="236" y1="101" x2="214" y2="124"></line><line x1="236" y1="101" x2="264" y2="114"></line><line x1="250" y1="120" x2="226" y2="158"></line><line x1="250" y1="120" x2="278" y2="158"></line>
      <path d="M156 118 C176 108 194 108 212 118" stroke="#0a84ff" marker-end="url(#arrow-${exercise.id})"></path>
    `,
    arms: `
      ${common}
      <circle cx="94" cy="60" r="14"></circle><line x1="94" y1="75" x2="94" y2="120"></line><line x1="94" y1="90" x2="66" y2="122"></line><line x1="94" y1="90" x2="122" y2="122"></line><line x1="94" y1="120" x2="74" y2="158"></line><line x1="94" y1="120" x2="116" y2="158"></line>
      <circle cx="220" cy="60" r="14"></circle><line x1="220" y1="75" x2="220" y2="120"></line><line x1="220" y1="90" x2="188" y2="82"></line><line x1="220" y1="90" x2="252" y2="82"></line><line x1="220" y1="120" x2="200" y2="158"></line><line x1="220" y1="120" x2="242" y2="158"></line>
      <path d="M138 94 C162 80 182 80 204 94" stroke="#0a84ff" marker-end="url(#arrow-${exercise.id})"></path>
    `,
    core: `
      ${common}
      <circle cx="84" cy="126" r="12"></circle><line x1="96" y1="128" x2="158" y2="146"></line><line x1="118" y1="135" x2="92" y2="158"></line><line x1="118" y1="135" x2="134" y2="158"></line><line x1="158" y1="146" x2="204" y2="158"></line><line x1="158" y1="146" x2="122" y2="158"></line>
      <path d="M80 92 C118 78 158 78 198 92" stroke="#0a84ff" marker-end="url(#arrow-${exercise.id})"></path>
      <circle cx="224" cy="104" r="12"></circle><line x1="236" y1="108" x2="266" y2="138"></line><line x1="250" y1="122" x2="226" y2="146"></line><line x1="250" y1="122" x2="278" y2="146"></line>
    `,
    standing: `
      ${common}
      <circle cx="158" cy="60" r="14"></circle><line x1="158" y1="75" x2="158" y2="120"></line><line x1="158" y1="92" x2="128" y2="112"></line><line x1="158" y1="92" x2="188" y2="112"></line><line x1="158" y1="120" x2="136" y2="158"></line><line x1="158" y1="120" x2="180" y2="158"></line>
      <path d="M104 90 C136 70 178 70 212 90" stroke="#0a84ff" marker-end="url(#arrow-${exercise.id})"></path>
    `
  };

  return `<svg class="movement-svg" viewBox="0 0 320 200" role="img" aria-label="${escapeHtml(exercise.name)} movement diagram">
    <g fill="none" stroke="#18202a" stroke-width="7" stroke-linecap="round" stroke-linejoin="round">
      ${diagrams[kind] || diagrams.standing}
    </g>
  </svg>`;
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

function buildRoutine(settings) {
  const minutes = Number(settings.duration);
  const exerciseCount = minutes <= 10 ? 3 : minutes <= 20 ? 5 : minutes <= 30 ? 6 : 8;
  const exercises = pickExercises(settings, exerciseCount).map((exercise) => ({
    ...exercise,
    prescription: prescriptionFor(exercise, settings)
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
      substitute: exercise.substitute
    }))
  );

  return {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    title: `${labelFor(AREAS, settings.area)}${settings.focus ? `: ${settings.focus}` : ""}`,
    targetMinutes: minutes,
    settings,
    exercises,
    sets
  };
}

function renderRoutine() {
  if (!state.routine) {
    $("#routineMeta").textContent = "Not generated";
    $("#routinePreview").innerHTML = `<div class="empty-state">Choose an area and generate a routine to see the plan.</div>`;
    $("#player").hidden = true;
    return;
  }

  $("#routineMeta").textContent = `${state.routine.targetMinutes} min plan`;
  $("#routinePreview").innerHTML = `
    <div class="routine-title">
      <div>
        <p class="eyebrow">${escapeHtml(labelFor(GOALS, state.routine.settings.goal))}</p>
        <h3>${escapeHtml(state.routine.title)}</h3>
      </div>
      <span class="pill">${escapeHtml(labelFor(EQUIPMENT, state.routine.settings.equipment))}</span>
    </div>
    <div class="exercise-list">
      ${state.routine.exercises.map((exercise) => `
        <article class="exercise-row">
          <div>
            <h4>${escapeHtml(exercise.name)}</h4>
            <p>${exercise.prescription.sets} sets · ${escapeHtml(exercise.prescription.reps)} · ${formatTime(exercise.prescription.restSeconds)} rest</p>
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
  state.phase = "ready";
  clearInterval(state.timerId);
  $("#startPause").textContent = "Start set";
  renderPlayer();
  renderLearn();
}

function renderPlayer() {
  const routine = state.routine;
  if (!routine) return;
  const set = routine.sets[state.setIndex];
  const next = routine.sets[state.setIndex + 1];
  const progress = Math.min(100, Math.max(0, (state.setIndex / routine.sets.length) * 100));
  const phaseLabel = state.phase === "rest" ? "Rest" : state.phase === "complete" ? "Complete" : `Set ${set.setNumber} of ${set.totalSets}`;

  $("#playerPhase").textContent = phaseLabel;
  $("#currentExercise").textContent = state.phase === "rest" ? "Rest" : set.exercise.name;
  $("#currentPrescription").textContent = state.phase === "rest"
    ? `Next: ${next ? `${next.exercise.name} · set ${next.setNumber} of ${next.totalSets} · ${next.reps}` : "Finish workout"}`
    : `${set.reps} · then ${formatTime(set.restSeconds)} rest`;
  $("#timeDisplay").textContent = state.phase === "rest" ? formatTime(state.remaining) : formatTime(state.elapsed);
  $("#currentCue").textContent = state.phase === "rest" ? "Recover, breathe, and set up the next movement." : set.cue;
  $("#workoutProgress").style.width = `${progress}%`;
  $("#nextExercise").innerHTML = next
    ? `<strong>${escapeHtml(next.exercise.name)}</strong><span>Set ${next.setNumber} of ${next.totalSets} · ${escapeHtml(next.reps)}</span>`
    : `<strong>Done</strong><span>Finish and save the session.</span>`;
  $("#substitution").textContent = set.substitute || "Use a lighter variation and keep the movement pain-free.";
  $("#startPause").disabled = state.phase === "rest" || state.phase === "complete";
  $("#doneSet").disabled = state.phase !== "set";
  $("#skipStep").textContent = state.phase === "rest" ? "Skip rest" : "Skip set";
}

function tick() {
  if (!state.running) return;
  if (state.phase === "rest") {
    state.remaining -= 1;
    if (state.remaining <= 0) {
      advanceSet();
      return;
    }
  } else if (state.phase === "set") {
    state.elapsed += 1;
  }
  renderPlayer();
}

function startSet() {
  if (!state.routine || state.phase === "rest" || state.phase === "complete") return;
  state.phase = "set";
  state.running = true;
  state.elapsed = 0;
  clearInterval(state.timerId);
  state.timerId = setInterval(tick, 1000);
  $("#startPause").textContent = "Set running";
  renderPlayer();
}

function doneSet() {
  if (!state.routine || state.phase !== "set") return;
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

function advanceSet() {
  if (!state.routine) return;
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
    exercises: state.routine.exercises.map((exercise) => exercise.name)
  };
  state.data.history = [completed, ...state.data.history].slice(0, 50);
  saveData();
  renderHistory();
  renderBalance();
  $("#currentExercise").textContent = "Workout saved";
  $("#currentPrescription").textContent = `${state.routine.sets.length} sets completed`;
  $("#currentCue").textContent = "Nice. Your history and balance check are updated.";
  $("#timeDisplay").textContent = "Done";
  $("#workoutProgress").style.width = "100%";
  $("#startPause").disabled = true;
  $("#doneSet").disabled = true;
}

function renderLibrary() {
  const groups = AREAS.filter((area) => state.libraryFilter === "all" || area.id === state.libraryFilter);
  $("#libraryGrid").innerHTML = groups.map((area) => {
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
        <div class="learn-visual">${movementDiagram(exercise)}</div>
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
          <div class="sub-card compact-sub"><strong>Substitute:</strong> ${escapeHtml(exercise.substitute)}</div>
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
          <p>${new Date(item.completedAt).toLocaleString()} · ${escapeHtml(labelFor(GOALS, item.goal))} · ${item.duration} min</p>
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

function render() {
  initControls();
  renderRoutine();
  renderLibrary();
  renderLearn();
  renderHistory();
  renderBalance();
}

function switchView(viewId) {
  state.view = viewId;
  $$(".nav-item").forEach((button) => button.classList.toggle("active", button.dataset.view === viewId));
  $$(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
  $("#viewTitle").textContent = $(`.nav-item[data-view="${viewId}"]`).textContent;
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

  const filter = event.target.closest("[data-library-filter]");
  if (filter) {
    state.libraryFilter = filter.dataset.libraryFilter;
    $$(".filter-button[data-library-filter]").forEach((button) => button.classList.toggle("active", button === filter));
    renderLibrary();
  }
});

$("#generateWorkout").addEventListener("click", () => {
  state.routine = buildRoutine(currentSettings());
  renderRoutine();
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
