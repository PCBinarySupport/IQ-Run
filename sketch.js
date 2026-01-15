let inMenu = true; // Tracks whether the user is in the menu or playing the game

// Other state variables initialized here

let additionButton;
let subtractionButton;
let shopButton;
let inventoryButton;

let multiplicationButton;
let divisionButton;
let backButton;

let score = 0; // cents
let correctAnswers = 0;
let incorrectAnswers = 0;

let wrongStreak = 0;
let streakCount = 0;
let highestStreak = 0;
let streakColor;

let hintVisible = false;
let hintVisible2 = false;

let userInput = 0;

let firstNumber, secondNumber;
let attemptCount = 0;

let correctAnswersAdd = 0;
let correctAnswersSub = 0;
let correctAnswersMul = 0;
let correctAnswersDiv = 0;

let incorrectAnswersAdd = 0;
let incorrectAnswersSub = 0;
let incorrectAnswersMul = 0;
let incorrectAnswersDiv = 0;

// Correct answers for each game mode
let correctAnswersAddList = [];
let correctAnswersSubList = [];
let correctAnswersMulList = [];
let correctAnswersDivList = [];

// Incorrect answers for each game mode
let incorrectAnswersAddList = [];
let incorrectAnswersSubList = [];
let incorrectAnswersMulList = [];
let incorrectAnswersDivList = [];

let wrongStreakAdd = 0;
let wrongStreakSub = 0;
let wrongStreakMul = 0;
let wrongStreakDiv = 0;

let streakCountAdd = 0;
let streakCountSub = 0;
let streakCountMul = 0;
let streakCountDiv = 0;

let highestStreakAdd = 0;
let highestStreakSub = 0;
let highestStreakMul = 0;
let highestStreakDiv = 0;

let levelColor;
let levelText = "";
let pointsAgainst = 0;
let correctAnswersForCurrentLevel = 0;
let correctAnswersForCurrentLevelSub = 0;

let levelAdd = 1;
let levelSub = 1;
let currentLevel = 1;
let currentLevelAdd = 1;
let currentLevelSub = 1;
let levelChanged = false;

// =======================================================
// ✅ SAVE STREAK POPUP (WORKING EXTRACT MODULE)
// =======================================================
let showSavePopup = false;
let streakSaved = false;

// ✅ NEW: pending mode so popup knows EXACTLY which streak to affect
let pendingStreakMode = ""; // "add" | "sub" | "mul" | "div"

// ✅ NEW: "Not enough money" toast
let showNotEnoughMoney = false;
let notEnoughMoneyStart = 0;
const NOT_ENOUGH_MONEY_MS = 900;
// =======================================================

let correctStreakAdd = 0;
let incorrectStreakAdd = 0;
let correctAnswersInRow = 0;
let incorrectAnswersInRow = 0;

let hintButton;
let yesButton;
let noButton;

let showConfirmation = false;

let showIncorrectListAdd = false;
let showIncorrectListSub = false;
let showIncorrectListMul = false;
let showIncorrectListDiv = false;

let showCorrectListAdd = false;
let showCorrectListSub = false;
let showCorrectListMul = false;
let showCorrectListDiv = false;

let showCorrectList = false;
let showIncorrectList = false;
let scrollOffsetCorrect = 0;
let scrollOffsetIncorrect = 0;
let isScrollingCorrect = false;
let isScrollingIncorrect = false;

let showHighestStreak = false;

let isMultiplicationGame = false;
let isSubtractionGame = false;
let isAdditionGame = false;
let correctAnswer;
let correctAnswerStreak = 0;
let maxDigitCount = 2;
let correctAnswerDisplayTime = 5000;
let textStartTime = 0;

let hintButton2;
let userConfirmsPurchase = false;
let showConfirmation2 = false;

let showCorrectText = false;

let isDivisionGame = false;
let isShopGame = false;
let isInventoryGame = false;

let isBuyingHint = false;
let hasBoughtHint = false;
let hasBoughtHint2 = false;

let feedback = "";

// =======================================================
// ✅ KEYPAD BUTTONS
// =======================================================
let keypadToggleButton;
let showKeypad = false;
let keypadButtons = [];
let keypadMinimizeButton;

let keypadPanelW = 220;
let keypadPanelH = 200;
let keypadPanelX = 0;
let keypadPanelY = 0;

// ✅ draggable keypad (layout only)
let keypadDragging = false;
let keypadDragOffX = 0;
let keypadDragOffY = 0;
let keypadEverMoved = false;
const KEYPAD_HANDLE_H = 34;

// =======================================================
// ✅ EXIT CONFIRM + "DON'T REGENERATE PROBLEM" CONTROL
// =======================================================
let showExitConfirmation = false;
let exitYesButton;
let exitNoButton;

// Track whether we have an active problem to preserve when returning to menu
let hasActiveProblem = false;
// Track which mode the preserved problem belongs to
let activeMode = ""; // "add" | "sub" | "mul" | "div" | "shop" | "inv"

// =======================================================
// ✅ SKETCH PAD (SCRATCH PAD)
// =======================================================
let sketchPadButton;
let showSketchPad = false;

let undoButton;
let redoButton;
let eraserButton;
let clearSketchButton;

// ✅ minimize button for sketch pad (same style as keypad)
let sketchMinimizeButton;

let sketchTool = "pen"; // "pen" or "eraser"
let currentStroke = null;

// ✅ separate sketch pads per game mode
let strokesByMode = { add: [], sub: [], mul: [], div: [] };
let redoByMode = { add: [], sub: [], mul: [], div: [] };

// scratch area (AUTO LAYOUT; matches keypad height with a small gap)
let sketchArea = { x: 20, y: 220, w: 380, h: 160 };
const SKETCH_KEYPAD_GAP = 12;

// pen/eraser styling
const penWeight = 5;
const eraserWeight = 24;

// =======================================================
// ✅ 4 PEN SLOTS + LONG PRESS COLOR PICKER
// =======================================================
let penButtons = [];        // 4 buttons shown in the black box area
let penSlotColors = [];     // each slot stores its own color
let activePenSlot = 0;      // which slot is currently drawing
const LONG_PRESS_MS = 450;

let penPressIndex = -1;
let penPressStart = 0;
let penPressActive = false;

// color picker “wheel” (uses native picker on phones)
let colorPicker;
let colorSelectButton;
let pickingColor = false;
let pickingSlotIndex = -1;

let cnv; // canvas reference

// =======================================================
// ✅ UI LAYOUT CONSTANTS (for the black box area you drew)
// =======================================================
const UI_LEFT_X = 20;
const UI_TOP_GAP = 6;      // small gap under "Addition/Subtraction Level ..."
const UI_BOTTOM_GAP = 6;   // small gap above sketch pad
const TOOLBAR_BTN_H = 26;  // reduced heights so everything fits
const TOOLBAR_BTN_W_SMALL = 45;
const TOOLBAR_GAP = 6;

// ✅ NEW: spacing for portrait stacked controls
const PORTRAIT_HINT_STACK_GAP = 10;

// dynamic toolbar layout (computed each frame in math games)
let toolbarTop = 0;
let row1Y = 0;
let row2Y = 0;
let penRowY = 0;

// =======================================================
// ✅ RESPONSIVE LAYOUT STATE (layout only)
// =======================================================
let L = null; // layout object (computed each frame)

// =======================================================
// ✅ SAVE STREAK POPUP BUTTONS (FIX)
// =======================================================
let saveYesButton;
let saveNoButton;

// =======================================================


function isMathGame() {
  return isAdditionGame || isSubtractionGame || isMultiplicationGame || isDivisionGame;
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  // ✅ iPhone/Safari touch fix: stop page scrolling/zoom stealing touches
  cnv.elt.style.touchAction = "none";
  cnv.elt.style.webkitUserSelect = "none";
  cnv.elt.style.userSelect = "none";
  cnv.elt.style.webkitTapHighlightColor = "rgba(0,0,0,0)";

  document.body.style.margin = "0";
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";

  // // ✅ make touch events non-passive so preventDefault actually works on iOS
  cnv.elt.addEventListener("touchstart", (e) => e.preventDefault(), { passive: false });
  cnv.elt.addEventListener("touchmove", (e) => e.preventDefault(), { passive: false });
  cnv.elt.addEventListener("touchend", (e) => e.preventDefault(), { passive: false });

  additionButton = new Button(100, 150, 190, 50, "Addition");
  subtractionButton = new Button(310, 150, 190, 50, "Subtraction");
  multiplicationButton = new Button(100, 215, 190, 50, "Multiplication");
  divisionButton = new Button(310, 215, 190, 50, "Division");
  shopButton = new Button(100, 280, 190, 50, "Shop");
  inventoryButton = new Button(310, 280, 190, 50, "Inventory");

  backButton = new Button(10, 10, 120, 30, "Back to Menu");

  // (positions updated dynamically in math games)
  hintButton = new Button(50, 350, 130, 30, "Show Hint");
  hintButton2 = new Button(50, 350, 130, 30, "Show Hint");

  sketchPadButton = new Button(210, 350, 150, 30, "Sketch Pad");

  yesButton = new Button(200, 200, 100, 30, "Yes");
  noButton = new Button(300, 200, 100, 30, "No");

  keypadToggleButton = new Button(430, 350, 150, 30, "Show Keypad");

  exitYesButton = new Button(200, 250, 100, 30, "Yes");
  exitNoButton = new Button(310, 250, 100, 30, "No");

  // ✅ sketch toolbar (positions updated dynamically in math games)
  undoButton = new Button(20, 85, 45, 32, "↶");
  redoButton = new Button(70, 85, 45, 32, "↷");
  eraserButton = new Button(120, 85, 80, 32, "Eraser");
  clearSketchButton = new Button(20, 125, 180, 32, "Clear");

  buildKeypad();

  sketchMinimizeButton = new Button(0, 0, 22, 22, "–");
  sketchMinimizeButton.bgColor = color(230);

  // ✅ SAVE STREAK POPUP BUTTONS
  saveYesButton = new Button(0, 0, 110, 40, "Yes");
  saveYesButton.bgColor = color(0, 200, 0);

  saveNoButton = new Button(0, 0, 110, 40, "No");
  saveNoButton.bgColor = color(200, 0, 0);

  // ✅ 4 pen slots default colors
  penSlotColors = [
    color(0, 0, 0),
    color(0, 200, 255),
    color(255, 0, 0),
    color(0, 160, 0)
  ];
  activePenSlot = 0;

  for (let i = 0; i < 4; i++) {
    let b = new Button(0, 0, 40, 28, ""); // label drawn manually
    b.bgColor = penSlotColors[i];
    penButtons.push(b);
  }

  // ✅ native color picker
  colorPicker = createColorPicker("#000000");
  colorPicker.hide();

  colorSelectButton = createButton("Select");
  colorSelectButton.hide();
  colorSelectButton.mousePressed(() => {
    if (pickingColor && pickingSlotIndex >= 0) {
      let c = colorPicker.color();
      penSlotColors[pickingSlotIndex] = color(red(c), green(c), blue(c));
      activePenSlot = pickingSlotIndex;
      closeColorPicker();
    }
  });

  // Initialize
  generateNewProblem();
  hasActiveProblem = true;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // keep keypad on-screen after resize
  if (showKeypad) {
    if (!keypadEverMoved) {
      setDefaultKeypadPosition();
    } else {
      constrainKeypadToScreen();
    }
  }
}

function getSketchModeKey() {
  if (isAdditionGame) return "add";
  if (isSubtractionGame) return "sub";
  if (isMultiplicationGame) return "mul";
  if (isDivisionGame) return "div";
  return "add"; // safe fallback
}

function getStrokes() {
  return strokesByMode[getSketchModeKey()];
}

function getRedoStrokes() {
  return redoByMode[getSketchModeKey()];
}

function setStrokes(arr) {
  strokesByMode[getSketchModeKey()] = arr;
}

function setRedoStrokes(arr) {
  redoByMode[getSketchModeKey()] = arr;
}

// =======================================================
// ✅ SAVE POPUP HELPERS (EXTRACTED)
// =======================================================
function openSavePopupForCurrentMode() {
  showSavePopup = true;

  if (isAdditionGame) pendingStreakMode = "add";
  else if (isSubtractionGame) pendingStreakMode = "sub";
  else if (isMultiplicationGame) pendingStreakMode = "mul";
  else if (isDivisionGame) pendingStreakMode = "div";
  else pendingStreakMode = "";
}

function losePendingStreak() {
  if (pendingStreakMode === "add") streakCountAdd = 0;
  if (pendingStreakMode === "sub") streakCountSub = 0;
  if (pendingStreakMode === "mul") streakCountMul = 0;
  if (pendingStreakMode === "div") streakCountDiv = 0;

  pendingStreakMode = "";
  updateStreakColor();
}
// =======================================================

// =======================================================
// ✅ RESPONSIVE LAYOUT COMPUTE (layout only)
// =======================================================
function computeLayout() {
  const w = width;
  const h = height;
  const portrait = h > w;

  // scaling helper
  const s = constrain(min(w / 600, h / 400), 0.75, 1.6);

  const margin = 12 * s;

  // common sizes
  const backW = 120 * s;
  const backH = 30 * s;

  const statsX = w - (100 * s);
  const statsTopY = 50 * s;

  const levelX = 10 * s;
  const levelY = 70 * s;

  const problemY = 130 * s;
  const answerY = 180 * s;

  // bottom buttons
  const bottomBtnH = 30 * s;
  const keypadToggleW = 150 * s;
  const sketchToggleW = 150 * s;

  // toolbar metrics
  const toolBtnH = 26 * s;
  const toolBtnSmallW = 45 * s;
  const toolGap = 6 * s;

  // keypad size scaling (slight)
  keypadPanelW = 220 * s;
  keypadPanelH = 200 * s;

  // portrait-specific targets (based on your mockup)
  // - sketch pad becomes large centered rectangle
  // - keypad overlays bottom-right of sketch pad (draggable)
  let sketchRect = { x: 0, y: 0, w: 0, h: 0 };
  let bottomRowY = h - bottomBtnH - (18 * s);

  if (!portrait) {
    // LANDSCAPE: keep your current design, just scaled + responsive
    // Default keypad position (if not moved): right side around mid-lower
    const keypadDefaultX = w - keypadPanelW - (20 * s);
    const keypadDefaultY = (h - keypadPanelH) / 2 + (90 * s);

    // sketch area matches keypad height and sits left of it
    sketchRect.x = UI_LEFT_X * s;
    sketchRect.y = keypadDefaultY;
    sketchRect.h = keypadPanelH;
    sketchRect.w = max(140 * s, (keypadDefaultX - (SKETCH_KEYPAD_GAP * s)) - sketchRect.x);

    return {
      portrait,
      s,
      margin,
      back: { x: 10 * s, y: 10 * s, w: backW, h: backH },
      stats: { x: statsX, y: statsTopY, line1: statsTopY, line2: statsTopY + 30 * s, line3: statsTopY + 60 * s },
      level: { x: levelX, y: levelY },
      problem: { y: problemY, answerY: answerY, incorrectY: 80 * s },
      bottom: {
        keypadToggle: { w: keypadToggleW, h: bottomBtnH, x: w - keypadToggleW - (20 * s), y: bottomRowY },
        sketchToggle: { w: sketchToggleW, h: bottomBtnH, x: (w - keypadToggleW - (20 * s)) - sketchToggleW - (12 * s), y: bottomRowY }
      },
      toolbar: { topBase: (70 * s) + UI_TOP_GAP * s, btnH: toolBtnH, smallW: toolBtnSmallW, gap: toolGap },
      sketch: sketchRect,
      keypadDefault: { x: keypadDefaultX, y: keypadDefaultY }
    };
  } else {
    // PORTRAIT: reorganize like your vertical mockup
    // Give more top space so Hint + 2 buttons fit BEFORE the sketch area
    const topBlockH = 310 * s; // increased so stacked buttons show

    const sketchX = margin;
    const sketchY = topBlockH;
    const sketchW = w - (2 * margin);
    const sketchH = max(180 * s, h - topBlockH - margin);

    sketchRect = { x: sketchX, y: sketchY, w: sketchW, h: sketchH };

    // Default keypad overlays bottom-right of sketch area
    const keypadDefaultX = (sketchRect.x + sketchRect.w) - keypadPanelW - (12 * s);
const keypadDefaultY = keypadToggleButton.y + keypadToggleButton.h + (12 * s);


    // Bottom buttons returned but NOT used in portrait (we stack under hint instead)
    return {
      portrait,
      s,
      margin,
      back: { x: margin, y: margin, w: backW, h: backH },
      stats: { x: w - (100 * s), y: margin + (backH / 2), line1: 50 * s, line2: 80 * s, line3: 110 * s },
      level: { x: margin, y: margin + backH + (10 * s) },
      problem: { y: 125 * s, answerY: 165 * s, incorrectY: 95 * s },
      bottom: {
        keypadToggle: { w: keypadToggleW, h: bottomBtnH, x: w - keypadToggleW - margin, y: h - bottomBtnH - margin },
        sketchToggle: { w: sketchToggleW, h: bottomBtnH, x: margin, y: h - bottomBtnH - margin }
      },
      toolbar: { topBase: (90 * s), btnH: toolBtnH, smallW: toolBtnSmallW, gap: toolGap },
      sketch: sketchRect,
      keypadDefault: { x: keypadDefaultX, y: keypadDefaultY }
    };
  }
}

function applyLayout() {
  L = computeLayout();

  // back button
  backButton.x = L.back.x;
  backButton.y = L.back.y;
  backButton.w = L.back.w;
  backButton.h = L.back.h;

  // bottom toggles defaults (landscape uses these; portrait gets overridden below)
  keypadToggleButton.w = L.bottom.keypadToggle.w;
  keypadToggleButton.h = L.bottom.keypadToggle.h;
  keypadToggleButton.x = L.bottom.keypadToggle.x;
  keypadToggleButton.y = L.bottom.keypadToggle.y;

  sketchPadButton.w = L.bottom.sketchToggle.w;
  sketchPadButton.h = L.bottom.sketchToggle.h;
  sketchPadButton.x = L.bottom.sketchToggle.x;
  sketchPadButton.y = L.bottom.sketchToggle.y;

  // sketch area
  sketchArea.x = L.sketch.x;
  sketchArea.y = L.sketch.y;
  sketchArea.w = L.sketch.w;
  sketchArea.h = L.sketch.h;

  // sketch minimize
  sketchMinimizeButton.x = sketchArea.x + sketchArea.w - (32 * L.s);
  sketchMinimizeButton.y = sketchArea.y + (10 * L.s);

  // keypad default position (only if user hasn't moved it yet)
  if (showKeypad) {
    if (!keypadEverMoved) setDefaultKeypadPosition();
    else constrainKeypadToScreen();
  }

  // update toolbar + hint placement for math games
  updateLayoutForSketchAndKeypad();

  // ✅ PORTRAIT: ensure sketch area starts BELOW the stacked buttons
  if (L && L.portrait) {
    const s = L.s;
    const neededTop = keypadToggleButton.y + keypadToggleButton.h + (12 * s);

    if (sketchArea.y < neededTop) {
      const bottomLimit = height - (12 * s);
      sketchArea.y = neededTop;
      sketchArea.h = max(160 * s, bottomLimit - sketchArea.y);

      // keep sketch minimize aligned
      sketchMinimizeButton.x = sketchArea.x + sketchArea.w - (32 * s);
      sketchMinimizeButton.y = sketchArea.y + (10 * s);
    }
  }
}

function setDefaultKeypadPosition() {
  keypadPanelX = L.keypadDefault.x;
  keypadPanelY = L.keypadDefault.y;
  constrainKeypadToScreen();
}

function constrainKeypadToScreen() {
  keypadPanelX = constrain(keypadPanelX, 8, width - keypadPanelW - 8);
  keypadPanelY = constrain(keypadPanelY, 8, height - keypadPanelH - 8);
}

// =======================================================
// ✅ LAYOUT: sketch+keypad + hint aligned + centered toolbar
// =======================================================
function updateLayoutForSketchAndKeypad() {
  const s = L ? L.s : 1;

  // row layout width anchored to left margin area
  const leftX = L ? (L.margin) : UI_LEFT_X;
  const baseTop = (L ? L.toolbar.topBase : (70 + UI_TOP_GAP));
  const toolbarBottom = sketchArea.y - (UI_BOTTOM_GAP * s);

  const btnH = TOOLBAR_BTN_H * s;
  const gap = TOOLBAR_GAP * s;

  const toolbarTotalH = (3 * btnH) + (2 * gap);
  const availableH = toolbarBottom - baseTop;

  if (!L || !L.portrait) {
    // landscape: vertically centered like before
    toolbarTop = baseTop + max(0, (availableH - toolbarTotalH) / 2);
  } else {
    // portrait: fixed-ish top placement, but never overlapping
    toolbarTop = min(baseTop, toolbarBottom - toolbarTotalH);
    toolbarTop = max(L.level.y + (30 * s), toolbarTop);
  }

  row1Y = toolbarTop;
  row2Y = row1Y + btnH + gap;
  penRowY = row2Y + btnH + gap;

  // row1
  undoButton.x = leftX;
  undoButton.y = row1Y;
  undoButton.w = TOOLBAR_BTN_W_SMALL * s;
  undoButton.h = btnH;

  redoButton.x = undoButton.x + undoButton.w + gap;
  redoButton.y = row1Y;
  redoButton.w = TOOLBAR_BTN_W_SMALL * s;
  redoButton.h = btnH;

  eraserButton.x = redoButton.x + redoButton.w + gap;
  eraserButton.y = row1Y;
  eraserButton.w = 88 * s;
  eraserButton.h = btnH;

  // row2 (clear)
  clearSketchButton.x = leftX;
  clearSketchButton.y = row2Y;
  clearSketchButton.w = (eraserButton.x + eraserButton.w) - leftX;
  clearSketchButton.h = btnH;

  // pen buttons row (4 evenly across same width)
  let penBoxX = leftX;
  let penBoxW = clearSketchButton.w;
  let penBtnW = (penBoxW - 3 * gap) / 4;
  let penBtnH = btnH;

  for (let i = 0; i < 4; i++) {
    penButtons[i].x = penBoxX + i * (penBtnW + gap);
    penButtons[i].y = penRowY;
    penButtons[i].w = penBtnW;
    penButtons[i].h = penBtnH;
    penButtons[i].bgColor = penSlotColors[i];
  }

  // =========================================================
  // ✅ HINT BUTTON placement
  // =========================================================
  const hintW = 130 * s;
  const hintH = 30 * s;

  let hx, hy;

  if (!L || !L.portrait) {
    hx = (keypadToggleButton.x + keypadToggleButton.w / 2) - (hintW / 2);
    hy = penRowY - (2 * s);
  } else {
  // ✅ portrait: place hint BELOW "Your Answer" so it never covers input on iPhone
  hx = width - hintW - (L.margin);

  const answerLineY = (L && L.problem ? L.problem.answerY : 180 * s);

  // put hint BELOW the answer line
  hy = answerLineY + 22 * s;

  // but NEVER let it overlap the sketch area
  const maxY = sketchArea.y - hintH - (12 * s);
  hy = min(hy, maxY);

  // also never too high
  hy = max(hy, (L.back.y + L.back.h + 10 * s));
}


  hintButton.x = hx;  hintButton.y = hy;  hintButton.w = hintW;  hintButton.h = hintH;
  hintButton2.x = hx; hintButton2.y = hy; hintButton2.w = hintW; hintButton2.h = hintH;

  // ✅ PORTRAIT: place BOTH buttons UNDER the hint
  if (L && L.portrait) {
    const stackGap = PORTRAIT_HINT_STACK_GAP * s;

    sketchPadButton.w = hintW;
    sketchPadButton.h = hintH;
    sketchPadButton.x = hx;
    sketchPadButton.y = hy + hintH + stackGap;

    keypadToggleButton.w = hintW;
    keypadToggleButton.h = hintH;
    keypadToggleButton.x = hx;
    keypadToggleButton.y = sketchPadButton.y + hintH + stackGap;
  }

  updateColorPickerPosition();
}

function updateColorPickerPosition() {
  if (!pickingColor) return;

  let s = L ? L.s : 1;

  // put picker just under the pen row area
  let x = (L ? L.margin : UI_LEFT_X);
  let y = penRowY + (TOOLBAR_BTN_H * s) + (8 * s);
  colorPicker.position(x, y);
  colorSelectButton.position(x + 140, y);
}

function openColorPickerForSlot(slotIndex) {
  pickingColor = true;
  pickingSlotIndex = slotIndex;

  let c = penSlotColors[slotIndex];
  colorPicker.value(rgbToHex(red(c), green(c), blue(c)));

  colorPicker.show();
  colorSelectButton.show();
  updateColorPickerPosition();
}

function closeColorPicker() {
  pickingColor = false;
  pickingSlotIndex = -1;
  colorPicker.hide();
  colorSelectButton.hide();
}

function rgbToHex(r, g, b) {
  const toHex = (n) => {
    n = int(n);
    let s = n.toString(16);
    return s.length === 1 ? "0" + s : s;
  };
  return "#" + toHex(r) + toHex(g) + toHex(b);
}

function buildKeypad() {
  keypadButtons = [];

  // minimize button (position updated in drawKeypad)
  keypadMinimizeButton = new Button(keypadPanelX + keypadPanelW - 32, keypadPanelY + 10, 22, 22, "–");
  keypadMinimizeButton.bgColor = color(230);

  let paddingTop = 40;
  let w = 54;
  let h = 32;
  let gap = 8;

  // scale keypad buttons with layout scaling (layout-only)
  const s = L ? L.s : 1;
  w *= s; h *= s; gap *= s; paddingTop *= s;

  let gridW = 3 * w + 2 * gap;

  // store RELATIVE positions (so keypad can be dragged)
  let startXRel = (keypadPanelW - gridW) / 2;
  let startYRel = paddingTop;

  let labels = [
    "1", "2", "3",
    "4", "5", "6",
    "7", "8", "9",
    "DEL", "0", "ENTER"
  ];

  let idx = 0;
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 3; c++) {
      let rx = startXRel + c * (w + gap);
      let ry = startYRel + r * (h + gap);

      let b = new Button(keypadPanelX + rx, keypadPanelY + ry, w, h, labels[idx]);
      // ✅ store relative offsets for dragging
      b.rx = rx;
      b.ry = ry;

      if (labels[idx] === "DEL") b.bgColor = color(255, 200, 200);
      if (labels[idx] === "ENTER") b.bgColor = color(200, 255, 200);

      keypadButtons.push(b);
      idx++;
    }
  }
}

function drawKeypad() {
  // panel
  fill(255, 255, 255, 235);
  rect(keypadPanelX, keypadPanelY, keypadPanelW, keypadPanelH, 12);

  // minimize button
  keypadMinimizeButton.x = keypadPanelX + keypadPanelW - (32 * (L ? L.s : 1));
  keypadMinimizeButton.y = keypadPanelY + (10 * (L ? L.s : 1));

  keypadMinimizeButton.display();

  // update keypad button positions from relative offsets (supports dragging)
  for (let b of keypadButtons) {
    if (b.rx !== undefined) b.x = keypadPanelX + b.rx;
    if (b.ry !== undefined) b.y = keypadPanelY + b.ry;
    b.display();
  }
}

function handleKeypadPress(label) {
  if (showSavePopup) return;
  if (showExitConfirmation) return;
  if (showConfirmation) return; // ✅ prevents keypad from acting during hint popup

  if (label === "DEL") {
    userInput = Math.floor(userInput / 10);
    return;
  }

  if (label === "ENTER") {
    checkAnswer();
    return;
  }

  if (label >= "0" && label <= "9") {
    userInput = userInput * 10 + (label - "0");
  }
}

function draw() {
  background(255);
  noStroke();

  // compute/apply responsive layout every frame (layout only)
  applyLayout();

  if (inMenu) {
    displayMenu();
  } else {
    drawGame();

    if (showCorrectText) {
      noStroke();
      fill(0, 255, 0);
      textSize(32 * (L ? L.s : 1));
      textAlign(CENTER, CENTER);
      text("Correct!", width / 2, 20 * (L ? L.s : 1));

      if (millis() - textStartTime > correctAnswerDisplayTime) {
        showCorrectText = false;
      }
    }

    if (isAdditionGame || isSubtractionGame) {
      updateLevelDisplay();
      displayLevel();
    }

    if (showSavePopup) {
      drawSavePopup();
    }

    if (showExitConfirmation) {
      drawExitConfirmationDialog();
    }
  }

  // ✅ Not enough money toast (drawn above everything)
  if (showNotEnoughMoney) {
    if (millis() - notEnoughMoneyStart > NOT_ENOUGH_MONEY_MS) {
      showNotEnoughMoney = false;
    } else {
      noStroke();
      fill(0, 0, 0, 180);
      rect(width / 2 - 170, 35, 340, 55, 14);

      fill(255);
      textAlign(CENTER, CENTER);
      textSize(20);
      text("Not enough money", width / 2, 62);
    }
  }

  // ✅ IMPORTANT FIX: draw hint confirmation LAST so it stays on top of keypad/sketch/etc
  if (showConfirmation) {
    showConfirmationDialog();
  }
}

function drawSavePopup() {
  // dark overlay
  noStroke();
  fill(0, 0, 0, 150);
  rect(0, 0, width, height);

  // popup card
  fill(245);
  stroke(0);
  strokeWeight(2);
  rect(width / 2 - 200, 100, 400, 220, 18);

  // text
  noStroke();
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(22);
  text("Save your streak?", width / 2, 150);

  textSize(18);
  text("Cost: $2.00", width / 2, 185);

  textSize(16);
  text("Money: $" + nf(score / 100.0, 1, 2), width / 2, 212);

  // buttons
  saveYesButton.w = 120;
  saveYesButton.h = 45;
  saveNoButton.w = 120;
  saveNoButton.h = 45;

  saveYesButton.x = width / 2 - 140;
  saveYesButton.y = 255;

  saveNoButton.x = width / 2 + 20;
  saveNoButton.y = 255;

  saveYesButton.display();
  saveNoButton.display();
}

// =======================================================
// ✅ RESPONSIVE MENU LAYOUT (layout only)
// =======================================================
function layoutMenuButtons() {
  const s = L ? L.s : 1;

  const titleY = 50 * s;

  // two-column grid like your current layout
  const colGap = 20 * s;
  const rowGap = 15 * s;

  const btnW = min(240 * s, (width - (3 * colGap)) / 2);
  const btnH = 50 * s;

  const leftX = (width / 2) - btnW - (colGap / 2);
  const rightX = (width / 2) + (colGap / 2);

  const startY = 120 * s;

  additionButton.x = leftX;  additionButton.y = startY;               additionButton.w = btnW; additionButton.h = btnH;
  subtractionButton.x = rightX; subtractionButton.y = startY;         subtractionButton.w = btnW; subtractionButton.h = btnH;

  multiplicationButton.x = leftX; multiplicationButton.y = startY + (btnH + rowGap); multiplicationButton.w = btnW; multiplicationButton.h = btnH;
  divisionButton.x = rightX; divisionButton.y = startY + (btnH + rowGap);            divisionButton.w = btnW; divisionButton.h = btnH;

  shopButton.x = leftX;  shopButton.y = startY + 2 * (btnH + rowGap); shopButton.w = btnW; shopButton.h = btnH;
  inventoryButton.x = rightX; inventoryButton.y = startY + 2 * (btnH + rowGap);     inventoryButton.w = btnW; inventoryButton.h = btnH;

  return titleY;
}

function displayMenu() {
  const s = L ? L.s : 1;
  const titleY = layoutMenuButtons();

  noStroke();
  textSize(32 * s);
  fill(0);
  textAlign(CENTER, CENTER);
  text("Main Menu", width / 2, titleY);

  additionButton.display();
  subtractionButton.display();
  multiplicationButton.display();
  divisionButton.display();
  shopButton.display();
  inventoryButton.display();

  backButton.bgColor = color(200);
}

function drawGame() {
  background(231, 173, 311);

  // ✅ Only do sketch/keypad/hint UI in the 4 games (NOT shop/inventory)
  if (isMathGame()) {
    // keep UI allowed
  } else {
    // make sure these don't appear in shop/inventory
    showKeypad = false;
    showSketchPad = false;
    closeColorPicker();
  }

  // ✅ hint BEHIND
  if (hintVisible) showHint();
  if (hintVisible2) showHint();

  // ✅ sketch pad ON TOP (relative to hint)
  drawSketchPad();

  if (!showConfirmation && !showExitConfirmation) displayProblem();

  displayStats();

  // ✅ Only show hint/sketch/keypad controls in math games
  if (isMathGame()) {
    hintButton.display();
    if (isAdditionGame || isSubtractionGame) hintButton2.display();

    // ✅ hide sketch button when sketch is open (like keypad)
    if (!showSketchPad) {
      sketchPadButton.display();
      sketchPadButton.label = "Sketch Pad";
    }

    if (!showKeypad) keypadToggleButton.display();
  }

  // ❌ IMPORTANT: DO NOT draw showConfirmationDialog() here anymore
  // if (showConfirmation) showConfirmationDialog();

  if (getCurrentStreak() >= 3) displayStreak();
  if (showHighestStreak) displayHighestStreak();

  backButton.bgColor = color(255, 100, 100);
  backButton.display();

  if (isAdditionGame && showCorrectListAdd) {
    displayCorrectAnswers(correctAnswersAddList, "Correct Answers (Addition)");
  } else if (isSubtractionGame && showCorrectListSub) {
    displayCorrectAnswers(correctAnswersSubList, "Correct Answers (Subtraction)");
  } else if (isMultiplicationGame && showCorrectListMul) {
    displayCorrectAnswers(correctAnswersMulList, "Correct Answers (Multiplication)");
  } else if (isDivisionGame && showCorrectListDiv) {
    displayCorrectAnswers(correctAnswersDivList, "Correct Answers (Division)");
  }

  if (isAdditionGame && showIncorrectListAdd) {
    displayIncorrectAnswers(incorrectAnswersAddList, "Incorrect Answers (Addition)");
  } else if (isSubtractionGame && showIncorrectListSub) {
    displayIncorrectAnswers(incorrectAnswersSubList, "Incorrect Answers (Subtraction)");
  } else if (isMultiplicationGame && showIncorrectListMul) {
    displayIncorrectAnswers(incorrectAnswersMulList, "Incorrect Answers (Multiplication)");
  } else if (isDivisionGame && showIncorrectListDiv) {
    displayIncorrectAnswers(incorrectAnswersDivList, "Incorrect Answers (Division)");
  }

  // keypad is drawn LAST so drawing stays BEHIND it
  if (showKeypad) drawKeypad();

  if (showSketchPad) {
    undoButton.display();
    redoButton.display();

    // pen icon when in pen mode
    if (sketchTool === "pen") eraserButton.label = "✎";
    else eraserButton.label = "Eraser";
    eraserButton.display();

    clearSketchButton.display();
    drawPenBoxAndButtons();
  }
}

function drawPenBoxAndButtons() {
  for (let i = 0; i < penButtons.length; i++) {
    penButtons[i].bgColor = penSlotColors[i];
    penButtons[i].display();

    push();
    noStroke();
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(16 * (L ? L.s : 1));
    text("✎", penButtons[i].x + penButtons[i].w / 2, penButtons[i].y + penButtons[i].h / 2);
    pop();

    if (i === activePenSlot) {
      push();
      noFill();
      stroke(255);
      strokeWeight(3);
      rect(penButtons[i].x - 2, penButtons[i].y - 2, penButtons[i].w + 4, penButtons[i].h + 4, 10);
      pop();
    }
  }
}

function displayProblem() {
  const s = L ? L.s : 1;

  if (attemptCount == 1) {
    noStroke();
    textSize(18 * s);
    fill(255, 0, 0);
    textAlign(CENTER, CENTER);
    text("Incorrect! Please try again.", width / 2, (L ? L.problem.incorrectY : 80));
  }

  noStroke();
  textSize(32 * s);
  fill(0);
  textAlign(CENTER, CENTER);

  const probY = L ? L.problem.y : 130;
  const ansY = L ? L.problem.answerY : 180;

  if (isAdditionGame) {
    text(firstNumber + " + " + secondNumber, width / 2, probY);
    textSize(24 * s);
    text("Your Answer: " + userInput, width / 2, ansY);
  }

  if (isSubtractionGame) {
    text(firstNumber + " - " + secondNumber, width / 2, probY);
    textSize(24 * s);
    text("Your Answer: " + userInput, width / 2, ansY);
  }

  if (isMultiplicationGame) {
    text(firstNumber + " × " + secondNumber, width / 2, probY);
    textSize(24 * s);
    text("Your Answer: " + userInput, width / 2, ansY);
  }

  if (isDivisionGame) {
    text(firstNumber + " ÷ " + secondNumber, width / 2, probY);
    textSize(24 * s);
    text("Your Answer: " + userInput, width / 2, ansY);
  }

  if (isShopGame) {
    noStroke();
    textSize(24 * s);
    text("Welcome to Shop\nCurrently under construction", width / 2, probY);
  }

  if (isInventoryGame) {
    noStroke();
    textSize(24 * s);
    text("Welcome to Inventory\nCurrently under construction", width / 2, probY);
  }
}

function displayStats() {
  const s = L ? L.s : 1;

  noStroke();
  textSize(20 * s);
  fill(0);
  textAlign(CENTER, CENTER);

  const x = L ? L.stats.x : 500;

  const y1 = L ? L.stats.line1 : 50;
  const y2 = L ? L.stats.line2 : 80;
  const y3 = L ? L.stats.line3 : 110;

  text("Money: $" + nf(score / 100.0, 1, 2), x, y1);

  if (isAdditionGame) {
    text("Correct: " + correctAnswersAdd, x, y2);
    text("Incorrect: " + incorrectAnswersAdd, x, y3);
  } else if (isSubtractionGame) {
    text("Correct: " + correctAnswersSub, x, y2);
    text("Incorrect: " + incorrectAnswersSub, x, y3);
  } else if (isMultiplicationGame) {
    text("Correct: " + correctAnswersMul, x, y2);
    text("Incorrect: " + incorrectAnswersMul, x, y3);
  } else if (isDivisionGame) {
    text("Correct: " + correctAnswersDiv, x, y2);
    text("Incorrect: " + incorrectAnswersDiv, x, y3);
  }
}

function generateNewProblem() {
  hasBoughtHint = false;
  hasBoughtHint2 = false;

  userInput = 0;
  attemptCount = 0;
  hintVisible = false;
  hintVisible2 = false;

  hintButton.label = "Show Hint";
  hintButton2.label = "Show Hint";

  if (isMultiplicationGame) {
    firstNumber = int(random(1, 13));
    secondNumber = int(random(1, 13));
    correctAnswer = firstNumber * secondNumber;
  }

  if (isDivisionGame) {
    secondNumber = int(random(1, 13));
    firstNumber = secondNumber * int(random(1, 13));
    correctAnswer = firstNumber / secondNumber;
  }

  // Variables for number ranges (based on levels)
  let firstNumMin = 0;
  let firstNumMax = 0;
  let secondNumMin = 0;
  let secondNumMax = 0;

  let activeLevel = currentLevel;
  if (isAdditionGame) activeLevel = levelAdd;
  if (isSubtractionGame) activeLevel = levelSub;

  if (activeLevel == 1) {
    firstNumMin = 10;
    firstNumMax = 99;
    secondNumMin = 1;
    secondNumMax = 9;
  } else if (activeLevel == 2) {
    firstNumMin = 10;
    firstNumMax = 99;
    secondNumMin = 10;
    secondNumMax = 99;
  } else if (activeLevel == 3) {
    firstNumMin = 10;
    firstNumMax = 99;
    secondNumMin = 1;
    secondNumMax = 99;
  } else if (activeLevel == 4) {
    firstNumMin = 100;
    firstNumMax = 999;
    secondNumMin = 10;
    secondNumMax = 99;
  } else if (activeLevel == 5) {
    firstNumMin = 100;
    firstNumMax = 999;
    secondNumMin = 10;
    secondNumMax = 99;
  } else if (activeLevel == 6) {
    firstNumMin = 100;
    firstNumMax = 999;
    secondNumMin = 100;
    secondNumMax = 999;
  } else if (activeLevel == 7) {
    firstNumMin = 100;
    firstNumMax = 999;
    secondNumMin = 100;
    secondNumMax = 999;
  } else if (activeLevel == 8) {
    firstNumMin = 1000;
    firstNumMax = 9999;
    secondNumMin = 100;
    secondNumMax = 999;
  } else if (activeLevel == 9) {
    firstNumMin = 1000;
    firstNumMax = 9999;
    secondNumMin = 100;
    secondNumMax = 999;
  } else if (activeLevel == 10) {
    firstNumMin = 1000;
    firstNumMax = 9999;
    secondNumMin = 1000;
    secondNumMax = 9999;
  } else if (activeLevel == 11) {
    firstNumMin = 1000;
    firstNumMax = 9999;
    secondNumMin = 1000;
    secondNumMax = 9999;
  } else if (activeLevel == 12) {
    firstNumMin = 10000;
    firstNumMax = 99999;
    secondNumMin = 1000;
    secondNumMax = 9999;
  } else if (activeLevel == 13) {
    firstNumMin = 10000;
    firstNumMax = 99999;
    secondNumMin = 1000;
    secondNumMax = 9999;
  } else if (activeLevel == 14) {
    firstNumMin = 10000;
    firstNumMax = 99999;
    secondNumMin = 10000;
    secondNumMax = 99999;
  } else if (activeLevel == 15) {
    firstNumMin = 10000;
    firstNumMax = 99999;
    secondNumMin = 10000;
    secondNumMax = 99999;
  } else if (activeLevel == 16) {
    firstNumMin = 100000;
    firstNumMax = 999999;
    secondNumMin = 10000;
    secondNumMax = 99999;
  } else if (activeLevel == 17) {
    firstNumMin = 100000;
    firstNumMax = 999999;
    secondNumMin = 10000;
    secondNumMax = 99999;
  } else if (activeLevel == 18) {
    firstNumMin = 100000;
    firstNumMax = 999999;
    secondNumMin = 100000;
    secondNumMax = 999999;
  } else if (activeLevel == 19) {
    firstNumMin = 100000;
    firstNumMax = 999999;
    secondNumMin = 10000;
    secondNumMax = 999999;
  }

  if (isAdditionGame) {
    firstNumber = int(random(firstNumMin, firstNumMax));
    secondNumber = int(random(secondNumMin, secondNumMax));
    correctAnswer = firstNumber + secondNumber;
  }

  if (isSubtractionGame) {
    firstNumber = int(random(firstNumMin, firstNumMax));
    secondNumber = int(random(secondNumMin, secondNumMax));

    if (firstNumber < secondNumber) {
      let temp = firstNumber;
      firstNumber = secondNumber;
      secondNumber = temp;
    }

    correctAnswer = firstNumber - secondNumber;
  }

  hasActiveProblem = true;
}

function displayLevel() {
  const s = L ? L.s : 1;
  noStroke();
  fill(levelColor);
  textSize(22 * s);
  textAlign(LEFT, CENTER);
  const lx = L ? L.level.x : 10;
  const ly = L ? L.level.y : 70;
  text(levelText, lx, ly);
}

function updateLevelDisplay() {
  if (isAdditionGame) {
    if (levelAdd === 4) { levelColor = color(173, 216, 230); levelText = "Addition Level 4!"; }
    else if (levelAdd === 6) { levelColor = color(255, 165, 0); levelText = "Addition Level 6!"; }
    else if (levelAdd === 8) { levelColor = color(255, 255, 0); levelText = "Addition Level 8!"; }
    else if (levelAdd === 10) { levelColor = color(0, 255, 0); levelText = "Addition Level 10!"; }
    else if (levelAdd === 12) { levelColor = color(255, 105, 180); levelText = "Addition Level 12!"; }
    else if (levelAdd === 14) { levelColor = color(0, 0, 255); levelText = "Addition Level 14!"; }
    else if (levelAdd === 16) { levelColor = color(128, 0, 128); levelText = "Addition Level 16!"; }
    else if (levelAdd === 18) { levelColor = color(255, 215, 0); levelText = "Addition Level 18!"; }
    else if (levelAdd === 19) { levelColor = color(255, 215, 0); levelText = "Addition Level 19!"; }
    else { levelColor = color(0); levelText = "Addition Level " + levelAdd; }
  }

  if (isSubtractionGame) {
    if (levelSub === 4) { levelColor = color(173, 216, 230); levelText = "Subtraction Level 4!"; }
    else if (levelSub === 6) { levelColor = color(255, 165, 0); levelText = "Subtraction Level 6!"; }
    else if (levelSub === 8) { levelColor = color(255, 255, 0); levelText = "Subtraction Level 8!"; }
    else if (levelSub === 10) { levelColor = color(0, 255, 0); levelText = "Subtraction Level 10!"; }
    else if (levelSub === 12) { levelColor = color(255, 105, 180); levelText = "Subtraction Level 12!"; }
    else if (levelSub === 14) { levelColor = color(0, 0, 255); levelText = "Subtraction Level 14!"; }
    else if (levelSub === 16) { levelColor = color(128, 0, 128); levelText = "Subtraction Level 16!"; }
    else if (levelSub === 18) { levelColor = color(255, 215, 0); levelText = "Subtraction Level 18!"; }
    else if (levelSub === 19) { levelColor = color(255, 215, 0); levelText = "Subtraction Level 19!"; }
    else { levelColor = color(0); levelText = "Subtraction Level " + levelSub; }
  }
}

// =======================================================
// ✅ YOUR checkAnswer() (ONLY CHANGE = popup call uses openSavePopupForCurrentMode())
// =======================================================
function checkAnswer() {
  // Addition Game Logic
  if (isAdditionGame) {
    if (userInput == firstNumber + secondNumber) {
      if (attemptCount < 2) {
        correctAnswersAdd++;
        showCorrectText = true;
        textStartTime = millis();

        correctAnswersAddList.push(firstNumber + " + " + secondNumber + " = " + userInput);
        wrongStreakAdd = 0;
        streakCountAdd++;
        highestStreakAdd = max(highestStreakAdd, streakCountAdd);
        updateStreakColor();

        if (streakCountAdd >= 20) score += 15;
        else if (streakCountAdd >= 10) score += 10;
        else score += 5;

        correctAnswersForCurrentLevel++;

        if (correctAnswersForCurrentLevel >= 6) {
          currentLevel++;
          levelAdd = currentLevel;
          correctAnswersForCurrentLevel = 0;
        }

        generateNewProblem();
      } else {
        generateNewProblem();
      }
    } else {
      incorrectAnswersAddList.push(firstNumber + " + " + secondNumber + " = " + userInput);
      wrongStreakAdd++;

      if (wrongStreakAdd >= 3) {
        score -= 1;
        wrongStreakAdd = 0;
      }

      // ✅ IMPORTANT: when hint pops up automatically, set label to "Hide Hint"
      if (attemptCount == 0) {
        attemptCount = 1;
        hintVisible2 = true;
        hintButton2.label = "Hide Hint";
        userInput = 0;
      } else if (attemptCount == 1) {
        attemptCount = 2;
        hintVisible2 = true;
        hintButton2.label = "Hide Hint";
        userInput = correctAnswer;
        incorrectAnswersAdd++;
      } else if (attemptCount == 2) {
        hintVisible2 = true;
        hintButton2.label = "Hide Hint";
        userInput = correctAnswer;
      }

      if (streakCountAdd > 0) {
        openSavePopupForCurrentMode();
      }

      if (attemptCount == 2) {
        pointsAgainst++;
      }

      if (pointsAgainst >= 2) {
        levelAdd = max(1, levelAdd - 1);
        currentLevel = levelAdd;
        pointsAgainst = 0;
      }
    }
  }

  // Subtraction Game Logic
  if (isSubtractionGame) {
    if (userInput == firstNumber - secondNumber) {
      if (attemptCount < 2) {
        correctAnswersSub++;
        showCorrectText = true;
        textStartTime = millis();

        correctAnswersSubList.push(firstNumber + " - " + secondNumber + " = " + userInput);
        wrongStreakSub = 0;
        streakCountSub++;
        highestStreakSub = max(highestStreakSub, streakCountSub);
        updateStreakColor();

        if (streakCountSub >= 20) score += 15;
        else if (streakCountSub >= 10) score += 10;
        else score += 5;

        correctAnswersForCurrentLevel++;

        if (correctAnswersForCurrentLevel >= 6) {
          currentLevel++;
          levelSub = currentLevel;
          correctAnswersForCurrentLevel = 0;
        }

        generateNewProblem();
      } else {
        generateNewProblem();
      }
    } else {
      incorrectAnswersSubList.push(firstNumber + " - " + secondNumber + " = " + userInput);
      wrongStreakSub++;

      if (wrongStreakSub >= 3) {
        score -= 1;
        wrongStreakSub = 0;
      }

      // ✅ IMPORTANT: when hint pops up automatically, set label to "Hide Hint"
      if (attemptCount == 0) {
        attemptCount = 1;
        hintVisible2 = true;
        hintButton2.label = "Hide Hint";
        userInput = 0;
      } else if (attemptCount == 1) {
        attemptCount = 2;
        hintVisible2 = true;
        hintButton2.label = "Hide Hint";
        userInput = correctAnswer;
        incorrectAnswersSub++;
      } else if (attemptCount == 2) {
        hintVisible2 = true;
        hintButton2.label = "Hide Hint";
        userInput = correctAnswer;
      }

      if (streakCountSub > 0) {
        openSavePopupForCurrentMode();
      }

      if (attemptCount == 2) {
        pointsAgainst++;
      }

      if (pointsAgainst >= 2) {
        levelSub = max(1, levelSub - 1);
        currentLevel = levelSub;
        pointsAgainst = 0;
      }
    }
  }

  // Multiplication Game Logic
  if (isMultiplicationGame) {
    if (userInput == firstNumber * secondNumber) {
      if (attemptCount < 2) {
        correctAnswersMul++;
        showCorrectText = true;
        textStartTime = millis();

        correctAnswersMulList.push(firstNumber + " × " + secondNumber + " = " + userInput);
        wrongStreakMul = 0;
        streakCountMul++;
        highestStreakMul = max(highestStreakMul, streakCountMul);
        updateStreakColor();

        if (streakCountMul >= 20) score += 15;
        else if (streakCountMul >= 10) score += 10;
        else score += 5;

        generateNewProblem();
      } else {
        generateNewProblem();
      }
    } else {
      incorrectAnswersMulList.push(firstNumber + " × " + secondNumber + " = " + userInput);
      wrongStreakMul++;

      if (wrongStreakMul >= 3) {
        score -= 1;
        wrongStreakMul = 0;
      }

      // ✅ IMPORTANT: when hint pops up automatically, set label to "Hide Hint"
      if (attemptCount == 0) {
        attemptCount = 1;
        hintVisible = true;
        hintButton.label = "Hide Hint";
        userInput = 0;
      } else if (attemptCount == 1) {
        attemptCount = 2;
        userInput = firstNumber * secondNumber;
        hintVisible = true;
        hintButton.label = "Hide Hint";
        incorrectAnswersMul++;
      } else if (attemptCount == 2) {
        userInput = firstNumber * secondNumber;
        hintVisible = true;
        hintButton.label = "Hide Hint";
      }

      if (streakCountMul > 0) {
        openSavePopupForCurrentMode();
      }
    }
  }

  // Division Game Logic
  if (isDivisionGame) {
    if (userInput == firstNumber / secondNumber) {
      if (attemptCount < 2) {
        correctAnswersDiv++;
        showCorrectText = true;
        textStartTime = millis();

        correctAnswersDivList.push(firstNumber + " ÷ " + secondNumber + " = " + userInput);
        wrongStreakDiv = 0;
        streakCountDiv++;
        highestStreakDiv = max(highestStreakDiv, streakCountDiv);
        updateStreakColor();

        if (streakCountDiv >= 20) score += 15;
        else if (streakCountDiv >= 10) score += 10;
        else score += 5;

        generateNewProblem();
      } else {
        generateNewProblem();
      }
    } else {
      incorrectAnswersDivList.push(firstNumber + " ÷ " + secondNumber + " = " + userInput);
      wrongStreakDiv++;

      if (wrongStreakDiv >= 3) {
        score -= 1;
        wrongStreakDiv = 0;
      }

      // ✅ IMPORTANT: when hint pops up automatically, set label to "Hide Hint"
      if (attemptCount == 0) {
        attemptCount = 1;
        hintVisible = true;
        hintButton.label = "Hide Hint";
        userInput = 0;
      } else if (attemptCount == 1) {
        attemptCount = 2;
        userInput = firstNumber / secondNumber;
        hintVisible = true;
        hintButton.label = "Hide Hint";
        incorrectAnswersDiv++;
      } else if (attemptCount == 2) {
        userInput = firstNumber / secondNumber;
        hintVisible = true;
        hintButton.label = "Hide Hint";
      }

      if (streakCountDiv > 0) {
        openSavePopupForCurrentMode();
      }
    }
  }
}

function displayStreak() {
  const s = L ? L.s : 1;
  noStroke();
  textSize(24 * s);
  fill(streakColor);
  textAlign(CENTER, CENTER);

  if (isAdditionGame) text("Addition Streak: " + streakCountAdd, width / 2, 50 * s);
  else if (isSubtractionGame) text("Subtraction Streak: " + streakCountSub, width / 2, 50 * s);
  else if (isMultiplicationGame) text("Multiplication Streak: " + streakCountMul, width / 2, 50 * s);
  else if (isDivisionGame) text("Division Streak: " + streakCountDiv, width / 2, 50 * s);
}

function displayHighestStreak() {
  let currentStreak = getHighestStreak();
  if (currentStreak >= 3) {
    const s = L ? L.s : 1;
    noStroke();
    textSize(20 * s);
    fill(streakColor);
    textAlign(CENTER, CENTER);
    text("Highest Streak: " + currentStreak, (L ? L.stats.x : 500), 134 * s);
  }
}

function updateStreakColor() {
  if (isAdditionGame) {
    if (streakCountAdd >= 20) streakColor = color(0, 255, 0);
    else if (streakCountAdd >= 10) streakColor = color(0, 0, 255);
    else if (streakCountAdd >= 3) streakColor = color(255, 0, 0);
    else streakColor = color(0);
  } else if (isSubtractionGame) {
    if (streakCountSub >= 20) streakColor = color(0, 255, 0);
    else if (streakCountSub >= 10) streakColor = color(0, 0, 255);
    else if (streakCountSub >= 3) streakColor = color(255, 0, 0);
    else streakColor = color(0);
  } else if (isMultiplicationGame) {
    if (streakCountMul >= 20) streakColor = color(0, 255, 0);
    else if (streakCountMul >= 10) streakColor = color(0, 0, 255);
    else if (streakCountMul >= 3) streakColor = color(255, 0, 0);
    else streakColor = color(0);
  } else if (isDivisionGame) {
    if (streakCountDiv >= 20) streakColor = color(0, 255, 0);
    else if (streakCountDiv >= 10) streakColor = color(0, 0, 255);
    else if (streakCountDiv >= 3) streakColor = color(255, 0, 0);
    else streakColor = color(0);
  }

  if (streakCountAdd >= 3 || streakCountSub >= 3 || streakCountMul >= 3 || streakCountDiv >= 3) {
    showHighestStreak = true;
  }
}

function getCurrentStreak() {
  if (isAdditionGame) return streakCountAdd;
  if (isSubtractionGame) return streakCountSub;
  if (isMultiplicationGame) return streakCountMul;
  if (isDivisionGame) return streakCountDiv;
  return 0;
}

function getHighestStreak() {
  if (isAdditionGame) return highestStreakAdd;
  if (isSubtractionGame) return highestStreakSub;
  if (isMultiplicationGame) return highestStreakMul;
  if (isDivisionGame) return highestStreakDiv;
  return 0;
}

function showHint() {
  let radius = 30;
  const s = L ? L.s : 1;
  radius *= s;

  // base positions for hint visuals (layout only)
  let baseX = width * 0.25;
  let baseY = (L && L.portrait) ? (sketchArea.y - 90 * s) : (220 * s);

  if (isMultiplicationGame && hintVisible) {
    for (let i = 0; i < firstNumber; i++) {
      let x = baseX + (i % 4) * (radius * 2 + 10 * s);
      let y = baseY + Math.floor(i / 4) * (radius * 2 + 10 * s);
      fill(0, 0, 255);
      ellipse(x, y, radius * 2, radius * 2);
      noStroke();
      fill(0);
      textAlign(CENTER, CENTER);
      text(secondNumber, x, y);
    }
  }

  if (isDivisionGame && hintVisible) {
    for (let i = 0; i < firstNumber / secondNumber; i++) {
      let x = baseX + (i % 4) * (radius * 2 + 10 * s);
      let y = baseY + Math.floor(i / 4) * (radius * 2 + 10 * s);
      fill(0, 0, 255);
      ellipse(x, y, radius * 2, radius * 2);
      noStroke();
      fill(0);
      textAlign(CENTER, CENTER);
      text(secondNumber, x, y);
    }
  }

  let rectWidth = 240 * s;
  let rectHeight = 40 * s;

  if (isAdditionGame && hintVisible2) {
    let commonY = (L && L.portrait) ? (sketchArea.y - 70 * s) : (280 * s);

    push();
    stroke(0);
    strokeWeight(2);

    fill(144, 238, 144);
    rect(width / 2 - rectWidth / 2, commonY, rectWidth / 2, rectHeight);
    rect(width / 2, commonY, rectWidth / 2, rectHeight);

    fill(255, 255, 0);
    rect(width / 2 - rectWidth / 2, commonY - rectHeight, rectWidth, rectHeight);

    noStroke();
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(24 * s);
    text(firstNumber, width / 2 - rectWidth / 4, commonY + rectHeight / 2);
    text(secondNumber, width / 2 + rectWidth / 4, commonY + rectHeight / 2);

    textSize(32 * s);
    text("?", width / 2, commonY - rectHeight / 2);

    pop();
  }

  if (isSubtractionGame && hintVisible2) {
    let commonY = (L && L.portrait) ? (sketchArea.y - 70 * s) : (280 * s);

    push();
    stroke(0);
    strokeWeight(2);

    fill(144, 238, 144);
    rect(width / 2 - rectWidth / 2, commonY, rectWidth / 2, rectHeight);
    rect(width / 2, commonY, rectWidth / 2, rectHeight);

    fill(255, 255, 0);
    rect(width / 2 - rectWidth / 2, commonY - rectHeight, rectWidth, rectHeight);

    noStroke();
    fill(0);
    textAlign(CENTER, CENTER);

    textSize(24 * s);
    text(firstNumber, width / 2, commonY - rectHeight / 2);

    textSize(24 * s);
    text(secondNumber, width / 2 - rectWidth / 4, commonY + rectHeight / 2);

    textSize(32 * s);
    text("?", width / 2 + rectWidth / 4, commonY + rectHeight / 2);

    pop();
  }
}

// ✅ FIXED: add overlay + still same popup layout
function showConfirmationDialog() {
  // ✅ overlay so it behaves like a real modal and stays visually on top
  noStroke();
  fill(0, 0, 0, 150);
  rect(0, 0, width, height);

  fill(245);
  stroke(0);
  strokeWeight(1.5);
  rect(width / 2 - 150, 120, 300, 150, 18);

  noStroke();
  fill(0);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Are you sure you want to\nbuy the hint?", width / 2, 165);

  yesButton.x = width / 2 - 110;
  yesButton.y = 215;

  noButton.x = width / 2 + 30;
  noButton.y = 215;

  yesButton.display();
  noButton.display();
}

function drawExitConfirmationDialog() {
  fill(0, 0, 0, 150);
  rect(0, 0, width, height);

  fill(245);
  stroke(0);
  strokeWeight(1.5);
  rect(width / 2 - 200, 120, 400, 170, 18);

  noStroke();
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(18);

  let s = getCurrentStreak();
  text("Are you sure you want to exit to the menu\nand lose the Streak of " + s + "?", width / 2, 175);

  exitYesButton.x = width / 2 - 120;
  exitYesButton.y = 245;

  exitNoButton.x = width / 2 + 20;
  exitNoButton.y = 245;

  exitYesButton.display();
  exitNoButton.display();
}

function loseCurrentStreak() {
  if (isAdditionGame) streakCountAdd = 0;
  if (isSubtractionGame) streakCountSub = 0;
  if (isMultiplicationGame) streakCountMul = 0;
  if (isDivisionGame) streakCountDiv = 0;
}

// =======================================================
// ✅ SKETCH PAD DRAWING
// =======================================================
function drawSketchPad() {
  if (!showSketchPad) return;

  push();
  fill(255, 255, 255, 235);
  noStroke();
  rect(sketchArea.x, sketchArea.y, sketchArea.w, sketchArea.h, 12);
  pop();

  sketchMinimizeButton.display();

  drawingContext.save();
  drawingContext.beginPath();
  drawingContext.rect(sketchArea.x, sketchArea.y, sketchArea.w, sketchArea.h);
  drawingContext.clip();

  let strokes = getStrokes();
  for (let s of strokes) drawStroke(s);
  if (currentStroke) drawStroke(currentStroke);

  drawingContext.restore();

  push();
  stroke(0, 0, 0, 60);
  strokeWeight(2);
  noFill();
  rect(sketchArea.x, sketchArea.y, sketchArea.w, sketchArea.h, 12);
  pop();
}

function drawStroke(s) {
  if (!s || !s.pts || s.pts.length < 2) return;

  drawingContext.save();
  drawingContext.globalCompositeOperation = "source-over";

  push();
  strokeCap(ROUND);
  strokeJoin(ROUND);
  noFill();

  if (s.tool === "eraser") {
    stroke(255, 255, 255);
    strokeWeight(eraserWeight);
  } else {
    stroke(s.col || color(0));
    strokeWeight(penWeight);
  }

  beginShape();
  curveVertex(s.pts[0].x, s.pts[0].y);
  for (let p of s.pts) curveVertex(p.x, p.y);
  let last = s.pts[s.pts.length - 1];
  curveVertex(last.x, last.y);
  endShape();
  pop();

  drawingContext.restore();
}

function pointInSketchArea(x, y) {
  return (
    x >= sketchArea.x &&
    x <= sketchArea.x + sketchArea.w &&
    y >= sketchArea.y &&
    y <= sketchArea.y + sketchArea.h
  );
}

function undoSketch() {
  let strokes = getStrokes();
  let redoStrokes = getRedoStrokes();
  if (strokes.length === 0) return;
  redoStrokes.push(strokes.pop());
  setStrokes(strokes);
  setRedoStrokes(redoStrokes);
}

function redoSketch() {
  let strokes = getStrokes();
  let redoStrokes = getRedoStrokes();
  if (redoStrokes.length === 0) return;
  strokes.push(redoStrokes.pop());
  setStrokes(strokes);
  setRedoStrokes(redoStrokes);
}

function clearSketch() {
  setStrokes([]);
  setRedoStrokes([]);
  currentStroke = null;
}

function isOverUIButton(x, y, b) {
  return x > b.x && x < b.x + b.w && y > b.y && y < b.y + b.h;
}

function isOverKeypadPanel(x, y) {
  return (
    x >= keypadPanelX && x <= keypadPanelX + keypadPanelW &&
    y >= keypadPanelY && y <= keypadPanelY + keypadPanelH
  );
}

function isOverKeypadHandle(x, y) {
  return (
    isOverKeypadPanel(x, y) &&
    y >= keypadPanelY &&
    y <= keypadPanelY + KEYPAD_HANDLE_H
  );
}

function isOverAnyUI(x, y) {
  const uiButtons = [backButton];

  if (isMathGame()) {
    uiButtons.push(hintButton, hintButton2, sketchPadButton, keypadToggleButton, keypadMinimizeButton);
  }

  if (showSketchPad) {
    uiButtons.push(
      undoButton, redoButton, eraserButton, clearSketchButton,
      sketchMinimizeButton,
      ...penButtons
    );
  }

  if (showConfirmation) uiButtons.push(yesButton, noButton);
  if (showExitConfirmation) uiButtons.push(exitYesButton, exitNoButton);

  // ✅ IMPORTANT: include save popup buttons so sketch doesn't steal clicks
  if (showSavePopup) uiButtons.push(saveYesButton, saveNoButton);

  for (let b of uiButtons) {
    if (!b) continue;
    if (isOverUIButton(x, y, b)) return true;
  }

  if (showKeypad) {
    if (isOverKeypadPanel(x, y)) return true;
  }

  return false;
}

// Button class
class Button {
  constructor(x, y, w, h, label) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.label = label;
    this.bgColor = color(100, 200, 255);

    // optional relative coords (used for keypad dragging)
    this.rx = undefined;
    this.ry = undefined;
  }

  display() {
    push();
    stroke(0);
    strokeWeight(1.5);
    fill(this.bgColor);
    rect(this.x, this.y, this.w, this.h, 10);

    noStroke();
    fill(0);
    textAlign(CENTER, CENTER);

    if (this.label === "ENTER") textSize(14 * (L ? L.s : 1));
    else textSize(18 * (L ? L.s : 1));

    text(this.label, this.x + this.w / 2, this.y + this.h / 2);
    pop();
  }

  isClicked(px, py) {
    let x = (px !== undefined) ? px : (touches && touches.length ? touches[0].x : mouseX);
    let y = (py !== undefined) ? py : (touches && touches.length ? touches[0].y : mouseY);
    return x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.h;
  }
}

function mousePressed() {
  const px = (touches && touches.length) ? touches[0].x : mouseX;
  const py = (touches && touches.length) ? touches[0].y : mouseY;

  if (pickingColor) return;

  // ✅ If hint confirmation is open, ONLY allow clicking Yes/No
  if (showConfirmation) {
    if (yesButton.isClicked(px, py)) {
      if (score >= 5) {
        score -= 5;
        hasBoughtHint = true;

        if (isAdditionGame || isSubtractionGame) {
          hintVisible2 = true;
          hintButton2.label = "Hide Hint";
        } else if (isMultiplicationGame || isDivisionGame) {
          hintVisible = true;
          hintButton.label = "Hide Hint";
        }
        showConfirmation = false;
      } else {
        showConfirmation = false;
      }
      return;
    }

    if (noButton.isClicked(px, py)) {
      showConfirmation = false;
      return;
    }

    return; // ignore clicks outside popup
  }

  // ✅ SAVE STREAK POPUP CLICK HANDLING (EXTRACTED WORKING VERSION)
  if (showSavePopup) {
    if (saveYesButton.isClicked(px, py)) {
      if (score >= 200) {
        score -= 200;          // pay $2.00
        streakSaved = true;    // keep streak
        showSavePopup = false;
        pendingStreakMode = "";
      } else {
        // not enough money -> toast + close + lose streak
        showNotEnoughMoney = true;
        notEnoughMoneyStart = millis();
        showSavePopup = false;
        losePendingStreak();
      }
      return;
    }

    if (saveNoButton.isClicked(px, py)) {
      showSavePopup = false;
      losePendingStreak();
      return;
    }

    return; // ignore clicks outside popup
  }

  if (showExitConfirmation) {
    if (exitYesButton.isClicked(px, py)) {
      loseCurrentStreak();
      inMenu = true;
      showKeypad = false;
      showExitConfirmation = false;
      return;
    }
    if (exitNoButton.isClicked(px, py)) {
      showExitConfirmation = false;
      return;
    }
    return;
  }

  // keypad drag (handle area only)
  if (showKeypad) {
    if (keypadMinimizeButton.isClicked(px, py)) {
      showKeypad = false;
      keypadDragging = false;
      return;
    }

    if (isOverKeypadHandle(px, py)) {
      keypadDragging = true;
      keypadEverMoved = true;
      keypadDragOffX = px - keypadPanelX;
      keypadDragOffY = py - keypadPanelY;
      return;
    }

    for (let b of keypadButtons) {
      if (b.isClicked(px, py)) {
        handleKeypadPress(b.label);
        return;
      }
    }
  }

  // sketch minimize
  if (!inMenu && showSketchPad) {
    if (sketchMinimizeButton.isClicked(px, py)) {
      showSketchPad = false;
      currentStroke = null;
      closeColorPicker();
      return;
    }
  }

  // sketch toolbar
  if (!inMenu && showSketchPad) {
    if (undoButton.isClicked(px, py)) { undoSketch(); return; }
    if (redoButton.isClicked(px, py)) { redoSketch(); return; }

    if (eraserButton.isClicked(px, py)) {
      sketchTool = (sketchTool === "pen") ? "eraser" : "pen";
      return;
    }

    if (clearSketchButton.isClicked(px, py)) { clearSketch(); return; }

    for (let i = 0; i < penButtons.length; i++) {
      if (isOverUIButton(px, py, penButtons[i])) {
        penPressActive = true;
        penPressIndex = i;
        penPressStart = millis();
        return;
      }
    }
  }

  if (!inMenu && !showKeypad && isMathGame() && keypadToggleButton.isClicked(px, py)) {
    showKeypad = true;
    keypadDragging = false;
    keypadEverMoved = false;
    setDefaultKeypadPosition();
    buildKeypad();
    return;
  }

  if (!inMenu && !showSketchPad && isMathGame() && sketchPadButton.isClicked(px, py)) {
    showSketchPad = true;
    sketchTool = "pen";
    currentStroke = null;
    closeColorPicker();
    return;
  }

  // menu buttons
  if (inMenu && additionButton.isClicked(px, py)) {
    inMenu = false;
    isAdditionGame = true;
    isSubtractionGame = false;
    isMultiplicationGame = false;
    isDivisionGame = false;
    isShopGame = false;
    isInventoryGame = false;

    if (activeMode !== "add" || !hasActiveProblem) generateNewProblem();
    activeMode = "add";
    return;
  }

  if (inMenu && subtractionButton.isClicked(px, py)) {
    inMenu = false;
    isAdditionGame = false;
    isSubtractionGame = true;
    isMultiplicationGame = false;
    isDivisionGame = false;
    isShopGame = false;
    isInventoryGame = false;

    if (activeMode !== "sub" || !hasActiveProblem) generateNewProblem();
    activeMode = "sub";
    return;
  }

  if (inMenu && multiplicationButton.isClicked(px, py)) {
    inMenu = false;
    isAdditionGame = false;
    isSubtractionGame = false;
    isMultiplicationGame = true;
    isDivisionGame = false;
    isShopGame = false;
    isInventoryGame = false;

    if (activeMode !== "mul" || !hasActiveProblem) generateNewProblem();
    activeMode = "mul";
    return;
  }

  if (inMenu && divisionButton.isClicked(px, py)) {
    inMenu = false;
    isAdditionGame = false;
    isSubtractionGame = false;
    isMultiplicationGame = false;
    isDivisionGame = true;
    isShopGame = false;
    isInventoryGame = false;

    if (activeMode !== "div" || !hasActiveProblem) generateNewProblem();
    activeMode = "div";
    return;
  }

  if (inMenu && shopButton.isClicked(px, py)) {
    inMenu = false;
    isAdditionGame = false;
    isSubtractionGame = false;
    isMultiplicationGame = false;
    isDivisionGame = false;
    isShopGame = true;
    isInventoryGame = false;
    activeMode = "shop";
    return;
  }

  if (inMenu && inventoryButton.isClicked(px, py)) {
    inMenu = false;
    isAdditionGame = false;
    isSubtractionGame = false;
    isMultiplicationGame = false;
    isDivisionGame = false;
    isShopGame = false;
    isInventoryGame = true;
    activeMode = "inv";
    return;
  }

  // back to menu
  if (!inMenu && backButton.isClicked(px, py)) {
    let s = getCurrentStreak();
    if (s > 0) showExitConfirmation = true;
    else {
      inMenu = true;
      showKeypad = false;
    }
    return;
  }

  // hint buttons
  if (isMathGame() && (isAdditionGame || isSubtractionGame) && hintButton2.isClicked(px, py)) {
    if (hintVisible2) {
      hintVisible2 = false;
      hintButton2.label = "Show Hint";
    } else {
      if (!hasBoughtHint) showConfirmation = true;
      else {
        hintVisible2 = true;
        hintButton2.label = "Hide Hint";
      }
    }
  }

  if (isMathGame() && (isMultiplicationGame || isDivisionGame) && hintButton.isClicked(px, py)) {
    if (hintVisible) {
      hintVisible = false;
      hintButton.label = "Show Hint";
    } else {
      if (!hasBoughtHint) showConfirmation = true;
      else {
        hintVisible = true;
        hintButton.label = "Hide Hint";
      }
    }
  }

  // start drawing
  if (!inMenu && showSketchPad) {
    if (isOverAnyUI(px, py)) return;
    if (!pointInSketchArea(px, py)) return;

    if (isOverUIButton(px, py, sketchMinimizeButton)) return;

    let strokeColor = penSlotColors[activePenSlot];
    currentStroke = { tool: sketchTool, col: strokeColor, pts: [{ x: px, y: py }] };

    setRedoStrokes([]);
    return;
  }
}

function mouseDragged() {
  const px = (touches && touches.length) ? touches[0].x : mouseX;
  const py = (touches && touches.length) ? touches[0].y : mouseY;

  if (showKeypad && keypadDragging) {
    keypadPanelX = px - keypadDragOffX;
    keypadPanelY = py - keypadDragOffY;
    constrainKeypadToScreen();
    return;
  }

  if (inMenu) return;
  if (!showSketchPad) return;
  if (!currentStroke) return;

  if (!pointInSketchArea(px, py)) return;
  if (isOverUIButton(px, py, sketchMinimizeButton)) return;

  const pts = currentStroke.pts;
  const last = pts[pts.length - 1];
  const dx = px - last.x;
  const dy = py - last.y;
  if (dx * dx + dy * dy < 4) return;

  pts.push({ x: px, y: py });
}

function mouseReleased() {
  if (keypadDragging) {
    keypadDragging = false;
    return;
  }

  if (penPressActive && penPressIndex >= 0) {
    let held = millis() - penPressStart;

    if (held >= LONG_PRESS_MS) {
      openColorPickerForSlot(penPressIndex);
    } else {
      activePenSlot = penPressIndex;
      sketchTool = "pen";
    }

    penPressActive = false;
    penPressIndex = -1;
    return;
  }

  if (!showSketchPad) { currentStroke = null; return; }

  if (currentStroke && currentStroke.pts.length >= 2) {
    let strokes = getStrokes();
    strokes.push(currentStroke);
    setStrokes(strokes);
  }
  currentStroke = null;
}

function displayMessage(message, x, y) {
  noStroke();
  textSize(30);
  fill(255, 0, 0);
  textAlign(CENTER, CENTER);
  text(message, x, y);
}

function keyPressed() {
  if (showSavePopup) return;
  if (showExitConfirmation) return;
  if (pickingColor) return;
  if (showConfirmation) return;

  if (keyCode === BACKSPACE) {
    userInput = Math.floor(userInput / 10);
  } else if (key >= '0' && key <= '9') {
    userInput = userInput * 10 + (key - '0');
  } else if (keyCode === ENTER) {
    checkAnswer();
  }
}

function showAnswers(answerList, title, scrollOffset, isScrolling) {
  fill(255);
  rect(50, 80, 500, 250);

  noStroke();
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(20);
  text(title, width / 2, 100);

  for (let i = 0; i < answerList.length; i++) {
    let yPos = 130 + i * 30 - scrollOffset;
    text(answerList[i], width / 2, yPos);
  }
}

function displayCorrectAnswers(answerList, title) {
  fill(255);
  rect(50, 80, 500, 250);

  noStroke();
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(20);
  text(title, width / 2, 100);

  for (let i = 0; i < answerList.length; i++) {
    let yPos = 130 + i * 30;
    text(answerList[i], width / 2, yPos);
  }
}

function displayIncorrectAnswers(answerList, title) {
  fill(255);
  rect(50, 80, 500, 250);

  noStroke();
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(20);
  text(title, width / 2, 100);

  for (let i = 0; i < answerList.length; i++) {
    let yPos = 130 + i * 30;
    text(answerList[i], width / 2, yPos);
  }
}

// ✅ MOBILE TOUCH SUPPORT
function touchStarted() { mousePressed(); return false; }
function touchMoved() { mouseDragged(); return false; }
function touchEnded() { mouseReleased(); return false; }
