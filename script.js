// ---------- Weekly data: animal-size comparisons + tips ----------
const WEEK_DATA = {
  1: { emoji: "🌱", animal: "A tiny seed", size: "Not visible yet — pregnancy is dated from the first day of your last period.",
    tips: ["Start (or continue) a prenatal vitamin with folic acid.", "No need to change much yet — just start paying attention to healthy habits.", "Book a first appointment with a midwife or doctor once you get a positive test."] },
  2: { emoji: "🥚", animal: "An egg cell", size: "Microscopic — ovulation and fertilization happen around now.",
    tips: ["Track ovulation if you're trying to pin down dates.", "Cut back on alcohol and smoking if you haven't already.", "Keep taking folic acid daily."] },
  3: { emoji: "🐜", animal: "Smaller than an ant", size: "A cluster of rapidly dividing cells, about 0.1mm.",
    tips: ["A fertilized egg is implanting in the uterus around now.", "Some people notice light spotting — this can be totally normal implantation bleeding.", "Stay hydrated and rest when tired."] },
  4: { emoji: "🐜", animal: "Ant", size: "~2mm — about poppy-seed sized.",
    tips: ["This is often when a home pregnancy test first turns positive.", "The neural tube (future brain and spine) is starting to form.", "Cut back on caffeine to under 200mg a day."] },
  5: { emoji: "🦟", animal: "Gnat", size: "~3mm long.",
    tips: ["A tiny heart is starting to beat.", "Nausea and fatigue may start showing up — go easy on yourself.", "Avoid raw/undercooked meat, unpasteurized cheese, and high-mercury fish."] },
  6: { emoji: "🐞", animal: "Ladybug", size: "~6mm, with a flickering heartbeat visible on ultrasound.",
    tips: ["Morning sickness often peaks around weeks 6–9 — small, frequent meals can help.", "Consider booking your first prenatal ultrasound.", "Ginger tea or candies can help settle queasiness."] },
  7: { emoji: "🐝", animal: "Honeybee", size: "~1.3cm long.",
    tips: ["Baby's arm and leg buds are forming.", "Smell sensitivity often spikes — it's normal, not just in your head.", "Keep prenatal appointments on the calendar."] },
  8: { emoji: "🦗", animal: "Cricket", size: "~1.6cm long.",
    tips: ["Tiny fingers and toes are starting to form.", "Fatigue can be intense in the first trimester — naps are productive too.", "Wear a seatbelt low across your hips, always."] },
  9: { emoji: "🐌", animal: "Garden snail", size: "~2.3cm long.",
    tips: ["Baby is now officially called a fetus rather than an embryo.", "Breast tenderness and bloating are common — comfy clothes help.", "Ask your provider about safe exercise for this trimester."] },
  10: { emoji: "🐸", animal: "Poison dart frog", size: "~3.1cm long.",
    tips: ["Vital organs are largely formed and will now mature.", "If nausea is severe and you can't keep fluids down, call your provider.", "Start thinking about which prenatal classes might interest you."] },
  11: { emoji: "🐭", animal: "Newborn mouse", size: "~4.1cm long.",
    tips: ["Baby's ears and facial features are becoming more defined.", "Energy may slowly start returning for some people.", "This is a common window for first-trimester screening tests."] },
  12: { emoji: "🐁", animal: "Field mouse", size: "~5.4cm long.",
    tips: ["The end of the first trimester — miscarriage risk drops significantly from here.", "Reflexes are developing; baby may start making tiny movements you can't feel yet.", "A good time to share the news, if you'd like to."] },
  13: { emoji: "🦎", animal: "Small gecko", size: "~7.4cm long.",
    tips: ["Welcome to the second trimester!", "Vocal cords and fingerprints are forming.", "Energy and appetite often improve from here."] },
  14: { emoji: "🐹", animal: "Hamster", size: "~8.7cm long.",
    tips: ["Baby may start making facial expressions.", "The 'glow' is real for some — increased blood flow can brighten skin.", "Keep up gentle movement like walking or prenatal yoga."] },
  15: { emoji: "🐹", animal: "Gerbil", size: "~10.1cm long.",
    tips: ["Baby can sense light through closed eyelids.", "Round ligament pain (quick stretchy twinges) can start now.", "Consider genetic screening or anatomy scan scheduling."] },
  16: { emoji: "🐿️", animal: "Chipmunk", size: "~11.6cm long.",
    tips: ["Some people feel the first faint flutters ('quickening') around now.", "Your bump may be starting to show.", "Good time to look into maternity clothes basics."] },
  17: { emoji: "🐹", animal: "Baby guinea pig", size: "~13cm long.",
    tips: ["Baby's skeleton is hardening from cartilage into bone.", "Practice sleeping on your side — it gets more comfortable with pillows.", "Stay on top of iron-rich foods to prevent anemia."] },
  18: { emoji: "🐰", animal: "Baby rabbit (kit)", size: "~14.2cm long.",
    tips: ["The anatomy scan often happens around 18–22 weeks.", "You might start feeling more noticeable kicks.", "Ask about your hospital's or birth center's tour options."] },
  19: { emoji: "🐿️", animal: "Red squirrel", size: "~15.3cm long.",
    tips: ["A protective waxy coating (vernix) is forming on baby's skin.", "Leg cramps at night are common — stretch calves before bed.", "Keep prenatal appointments; this is a growth-checkpoint stretch."] },
  20: { emoji: "🦔", animal: "Hedgehog", size: "~16.4cm long — the halfway point!",
    tips: ["You're halfway there — take a moment to celebrate.", "This is a common time for a detailed anatomy ultrasound.", "Start thinking about a birth plan, even a loose one."] },
  21: { emoji: "🦫", animal: "Baby chinchilla", size: "~26.7cm, about 360g.",
    tips: ["Baby's movements should feel stronger and more regular now.", "Stretch marks may appear — moisturizer helps comfort, not prevention, and that's okay.", "Keep snacking smart: protein + fiber combos curb energy dips."] },
  22: { emoji: "🐇", animal: "Small rabbit", size: "~27.8cm, about 430g.",
    tips: ["Baby's senses of touch and hearing are sharpening.", "Braxton Hicks (practice) contractions can start — usually painless tightening.", "Talking or playing music to baby is a fun way to bond now."] },
  23: { emoji: "🐇", animal: "Rabbit", size: "~28.9cm, about 500g.",
    tips: ["Baby may react to loud noises with a startle or kick.", "Swelling in feet/ankles can begin — put your feet up when you can.", "Consider a glucose screening appointment soon."] },
  24: { emoji: "🐈", animal: "Newborn kitten", size: "~30cm, about 600g.",
    tips: ["This is often called the viability milestone in medical terms.", "Glucose screening for gestational diabetes is common around 24–28 weeks.", "Lung development is progressing steadily."] },
  25: { emoji: "🐈", animal: "Kitten", size: "~34.6cm, about 660g.",
    tips: ["Baby is starting to build fat stores, filling out a bit.", "Backaches are common — supportive shoes and good posture help.", "Keep an eye on swelling; report sudden or severe swelling to your provider."] },
  26: { emoji: "🐈", animal: "Growing kitten", size: "~35.6cm, about 760g.",
    tips: ["Baby's eyes are starting to open.", "Sleep can get trickier — a pregnancy pillow may help.", "Start researching childbirth classes if you haven't yet."] },
  27: { emoji: "🐈", animal: "Playful kitten", size: "~36.6cm, about 875g.",
    tips: ["Welcome to the edge of the third trimester!", "Hiccups you feel are baby practicing breathing movements.", "Rest when you can — energy demands are rising."] },
  28: { emoji: "🐕", animal: "Small puppy", size: "~37.6cm, about 1kg.",
    tips: ["Third trimester begins — appointments often become more frequent.", "Start doing daily kick counts if your provider recommends it.", "Baby can now blink and has eyelashes."] },
  29: { emoji: "🐕", animal: "Chihuahua puppy", size: "~38.6cm, about 1.15kg.",
    tips: ["Muscles and lungs continue maturing quickly now.", "Shortness of breath can increase as baby takes up more room.", "Pack a small hospital bag list to add to over time."] },
  30: { emoji: "🐕", animal: "Chihuahua", size: "~39.9cm, about 1.3kg.",
    tips: ["Baby's brain is developing rapidly, with visible grooves forming.", "Heartburn may increase — smaller meals and staying upright after eating can help.", "Discuss birth preferences with your provider."] },
  31: { emoji: "🐈", animal: "Small house cat", size: "~41.1cm, about 1.5kg.",
    tips: ["Baby is likely settling into a head-down position, though there's time yet.", "Frequent bathroom trips are normal as baby presses on your bladder.", "Keep hydrating even though it means more bathroom trips."] },
  32: { emoji: "🐈", animal: "House cat", size: "~42.4cm, about 1.7kg.",
    tips: ["Baby's bones are hardening, except the skull, which stays soft for delivery.", "Consider finishing up the nursery or essentials shopping.", "Rest in short bursts throughout the day if fatigue returns."] },
  33: { emoji: "🐈", animal: "Large house cat", size: "~43.7cm, about 1.9kg.",
    tips: ["Baby's immune system is getting a boost from you via the placenta.", "Sleep on your side, ideally the left, for optimal blood flow.", "Pre-register at your hospital or birth center if possible."] },
  34: { emoji: "🐕", animal: "Beagle puppy", size: "~45cm, about 2.1kg.",
    tips: ["Lungs are nearly mature at this stage.", "Practice relaxation or breathing techniques for labor.", "Finalize your hospital bag essentials."] },
  35: { emoji: "🐈", animal: "Maine Coon kitten", size: "~46.2cm, about 2.4kg.",
    tips: ["Baby has little room left to move — you may feel more rolls than kicks.", "Group B strep testing often happens around 36–37 weeks.", "Review the signs of labor with your provider."] },
  36: { emoji: "🐕", animal: "Corgi puppy", size: "~47.4cm, about 2.6kg.",
    tips: ["Baby may be 'dropping' lower into the pelvis (lightening).", "Weekly appointments often start around now.", "Consider installing the car seat and having it checked."] },
  37: { emoji: "🐕", animal: "Cocker spaniel", size: "~48.6cm, about 2.9kg.",
    tips: ["Baby is considered early term as of this week.", "Keep tracking kicks daily and note any change in pattern.", "Rest up — early labor can start any time from here."] },
  38: { emoji: "🦦", animal: "Baby otter", size: "~49.8cm, about 3.1kg.",
    tips: ["Baby continues to gain weight and fine-tune reflexes.", "Know the signs of labor: regular contractions, water breaking, bloody show.", "Keep your phone charged and hospital bag by the door."] },
  39: { emoji: "🐕", animal: "Full-grown beagle", size: "~50.7cm, about 3.3kg.",
    tips: ["Baby is considered full term as of this week.", "Try to rest as much as possible — labor can be tiring whenever it starts.", "Trust your body and your care team; you're almost there."] },
  40: { emoji: "🐈‍⬛", animal: "A full-grown house cat", size: "~51.2cm, about 3.4kg — ready to meet the world!",
    tips: ["Your due date has arrived — but only about 1 in 20 babies actually arrive on their exact due date.", "Stay in close touch with your provider about next steps if labor hasn't started.", "Take a deep breath — you've grown an entire person."] },
};

const TRIMESTER_LABELS = { 1: "1st trimester", 2: "2nd trimester", 3: "3rd trimester" };
function trimesterFor(week) {
  if (week <= 13) return 1;
  if (week <= 27) return 2;
  return 3;
}

// ---------- State helpers ----------
const todayKey = () => new Date().toISOString().slice(0, 10);
const store = {
  get(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

let currentWeek = clampWeek(store.get("ptrack_currentWeek", 1));

function clampWeek(w) {
  w = Number(w) || 1;
  return Math.min(40, Math.max(1, w));
}

// ---------- DOM refs ----------
const dueDateInput = document.getElementById("due-date");
const saveDueDateBtn = document.getElementById("save-due-date");
const weekSlider = document.getElementById("week-slider");
const weekNumberEl = document.getElementById("week-number");
const trimesterBadge = document.getElementById("trimester-badge");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");
const prevBtn = document.getElementById("prev-week");
const nextBtn = document.getElementById("next-week");
const todayBtn = document.getElementById("today-btn");
const surpriseBtn = document.getElementById("surprise-btn");
const animalEmoji = document.getElementById("animal-emoji");
const animalName = document.getElementById("animal-name");
const animalSize = document.getElementById("animal-size");
const tipsList = document.getElementById("tips-list");
const notesWeekNumber = document.getElementById("notes-week-number");
const weekNotes = document.getElementById("week-notes");

const kickCountEl = document.getElementById("kick-count");
const kickLastEl = document.getElementById("kick-last");
const kickIncrement = document.getElementById("kick-increment");
const kickDecrement = document.getElementById("kick-decrement");
const kickReset = document.getElementById("kick-reset");

const waterCountEl = document.getElementById("water-count");
const waterFill = document.getElementById("water-fill");
const waterIncrement = document.getElementById("water-increment");
const waterDecrement = document.getElementById("water-decrement");

const moodPicker = document.getElementById("mood-picker");
const moodNote = document.getElementById("mood-note");
const moodAdd = document.getElementById("mood-add");
const moodLog = document.getElementById("mood-log");

// ---------- Week rendering ----------
function renderWeek() {
  const data = WEEK_DATA[currentWeek];
  weekNumberEl.textContent = `Week ${currentWeek}`;
  trimesterBadge.textContent = TRIMESTER_LABELS[trimesterFor(currentWeek)];
  weekSlider.value = currentWeek;

  animalEmoji.textContent = data.emoji;
  animalEmoji.style.animation = "none";
  // restart the pop animation
  void animalEmoji.offsetWidth;
  animalEmoji.style.animation = "";
  animalName.textContent = data.animal;
  animalSize.textContent = data.size;

  tipsList.innerHTML = "";
  data.tips.forEach((tip) => {
    const li = document.createElement("li");
    li.textContent = tip;
    tipsList.appendChild(li);
  });

  const pct = Math.round((currentWeek / 40) * 100);
  progressFill.style.width = `${pct}%`;
  progressText.textContent = `${pct}% there · ${40 - currentWeek} weeks to go`;

  notesWeekNumber.textContent = currentWeek;
  weekNotes.value = store.get(`ptrack_notes_${currentWeek}`, "");

  store.set("ptrack_currentWeek", currentWeek);
}

function setWeek(w) {
  currentWeek = clampWeek(w);
  renderWeek();
}

prevBtn.addEventListener("click", () => setWeek(currentWeek - 1));
nextBtn.addEventListener("click", () => setWeek(currentWeek + 1));
weekSlider.addEventListener("input", (e) => setWeek(e.target.value));
surpriseBtn.addEventListener("click", () => setWeek(1 + Math.floor(Math.random() * 40)));

weekNotes.addEventListener("input", () => {
  store.set(`ptrack_notes_${currentWeek}`, weekNotes.value);
});

// ---------- Due date ----------
function weekFromDueDate(dueDateStr) {
  const due = new Date(dueDateStr);
  const today = new Date();
  const msPerWeek = 7 * 24 * 60 * 60 * 1000;
  // Full-term pregnancy ~ 40 weeks before the due date.
  const conceptionApprox = new Date(due.getTime() - 40 * msPerWeek);
  const weeksElapsed = Math.floor((today.getTime() - conceptionApprox.getTime()) / msPerWeek) + 1;
  return clampWeek(weeksElapsed);
}

const savedDueDate = store.get("ptrack_dueDate", "");
if (savedDueDate) dueDateInput.value = savedDueDate;

saveDueDateBtn.addEventListener("click", () => {
  if (!dueDateInput.value) return;
  store.set("ptrack_dueDate", dueDateInput.value);
  setWeek(weekFromDueDate(dueDateInput.value));
});

todayBtn.addEventListener("click", () => {
  const due = store.get("ptrack_dueDate", "");
  if (due) {
    setWeek(weekFromDueDate(due));
  } else {
    alert("Set a due date above first, then this button will jump you to today's week automatically.");
  }
});

// ---------- Kick counter ----------
function kickKey() {
  return `ptrack_kicks_${todayKey()}`;
}
function renderKicks() {
  const data = store.get(kickKey(), { count: 0, last: null });
  kickCountEl.textContent = data.count;
  kickLastEl.textContent = data.last
    ? `Last kick logged at ${new Date(data.last).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`
    : "No kicks logged yet today.";
}
kickIncrement.addEventListener("click", () => {
  const data = store.get(kickKey(), { count: 0, last: null });
  data.count += 1;
  data.last = Date.now();
  store.set(kickKey(), data);
  renderKicks();
});
kickDecrement.addEventListener("click", () => {
  const data = store.get(kickKey(), { count: 0, last: null });
  data.count = Math.max(0, data.count - 1);
  store.set(kickKey(), data);
  renderKicks();
});
kickReset.addEventListener("click", () => {
  store.set(kickKey(), { count: 0, last: null });
  renderKicks();
});

// ---------- Water tracker ----------
function waterKey() {
  return `ptrack_water_${todayKey()}`;
}
function renderWater() {
  const count = store.get(waterKey(), 0);
  waterCountEl.textContent = count;
  waterFill.style.width = `${Math.min(100, Math.round((count / 8) * 100))}%`;
}
waterIncrement.addEventListener("click", () => {
  const count = store.get(waterKey(), 0);
  store.set(waterKey(), count + 1);
  renderWater();
});
waterDecrement.addEventListener("click", () => {
  const count = Math.max(0, store.get(waterKey(), 0) - 1);
  store.set(waterKey(), count);
  renderWater();
});

// ---------- Mood log ----------
let selectedMood = null;
moodPicker.addEventListener("click", (e) => {
  const btn = e.target.closest(".mood-btn");
  if (!btn) return;
  document.querySelectorAll(".mood-btn").forEach((b) => b.classList.remove("selected"));
  btn.classList.add("selected");
  selectedMood = btn.dataset.mood;
});

function renderMoodLog() {
  const entries = store.get("ptrack_moods", []);
  moodLog.innerHTML = "";
  entries.slice(0, 8).forEach((entry) => {
    const li = document.createElement("li");
    const text = document.createElement("span");
    text.textContent = `${entry.mood} ${entry.note ? "— " + entry.note : ""} (wk ${entry.week})`;
    const time = document.createElement("span");
    time.className = "mood-time";
    time.textContent = new Date(entry.time).toLocaleString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
    li.appendChild(text);
    li.appendChild(time);
    moodLog.appendChild(li);
  });
}

moodAdd.addEventListener("click", () => {
  if (!selectedMood) {
    alert("Pick a mood emoji first!");
    return;
  }
  const entries = store.get("ptrack_moods", []);
  entries.unshift({ mood: selectedMood, note: moodNote.value.trim(), time: Date.now(), week: currentWeek });
  store.set("ptrack_moods", entries.slice(0, 50));
  moodNote.value = "";
  document.querySelectorAll(".mood-btn").forEach((b) => b.classList.remove("selected"));
  selectedMood = null;
  renderMoodLog();
});

// ---------- Init ----------
renderWeek();
renderKicks();
renderWater();
renderMoodLog();
