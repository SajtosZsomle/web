const detailCopy = {
  build:
    "Fast prototypes, lots of mistakes, and actual fixes. Hardware and software, no real preference.",
  stack:
    "C/C++ for firmware, Java for plugins, Python and JS for tooling. EasyEDA, PlatformIO, Proxmox, nginx.",
  workflow:
    "Schematic, PCB, firmware, test, repeat. Code: write it, run it, fix what broke, maybe document it.",
};

const projectCopy = {
  p1: "Hot wire foam cutter with Arduino motion control, custom gcode-style commands, and a basic PC interface for running cuts.",
  p2: "Linear rail with a lead screw, DRV8825 driver, and Arduino. Built to move things precisely and repeatably.",
  p3: "Shop-built fume extractor with activated carbon filter, 12V fan, and a strip of LEDs above the work area.",
  p4: "ESP32 reading temp/humidity/pressure sensors, serving a small web dashboard, and logging to a local API.",
  p5: "ElegantOTA + ESPAsyncWebServer stack for pushing firmware to ESP32s over WiFi. HTTP auth, auto-reconnect, watchdog.",
  p6: "Java Paper plugin for a Minecraft server. Anti-dupe logic, Discord webhook alerts, and exploit event logging.",
  p7: "Proxmox with a few LXC containers: nginx reverse proxy, OMV for NAS, Cloudflare tunnel for external access.",
  p8: "Various Arduino and ESP32 experiments: sensors, displays, motor drivers. More of a sandbox than a project.",
  p9: "Custom PCB for the DRV8825 stepper driver. Designed in EasyEDA, manufactured, and soldered by hand.",
  p10: "This site. Github pages, cloudflare and Formspree for contact. Terminal-style dark UI.",
};

const logs = [
  { type: "ok", msg: "PCB review complete // trace widths validated" },
  { type: "ok", msg: "ESP32 toolchain ready // PlatformIO profile loaded" },
  { type: "warn", msg: "RF scan detected congestion // 2.4GHz busy" },
  { type: "ok", msg: "EEPROM state restored // CRC check passed" },
  { type: "ok", msg: "Java plugin compiled // anti-dupe event hooks active" },
  { type: "ok", msg: "OTA endpoint healthy // auth confirmed" },
  { type: "ok", msg: "Cloudflare tunnel stable // latency within target" },
  { type: "warn", msg: "ATmega328 memory tight // PROGMEM active" },
  { type: "ok", msg: "nginx upstream serving // 200 OK" },
  { type: "ok", msg: "Python script done // barcode scan OK" },
  { type: "warn", msg: "stepper missed step // ISR timing under review" },
  { type: "ok", msg: "Started printing model..." },
  { type: "ok", msg: "Extracting fumes, turning on light" },
];

const pad = (n) => String(n).padStart(2, "0");
const clock = document.getElementById("live-clock");
const stream = document.getElementById("log-stream");
const form = document.getElementById("contact-form");
const submitBtn = document.getElementById("cf-submit");
const statusBox = document.getElementById("cf-status");
const themeToggle = document.getElementById("theme-toggle");
const panelButtons = document.querySelectorAll("[data-panel]");
const panelContent = document.querySelectorAll("[data-panel-content]");
const detailBox = document.getElementById("detail-box");
const detailChips = document.querySelectorAll(".detail-chip");
const projectButtons = document.querySelectorAll("[data-project]");
const projectDetail = document.getElementById("project-detail");

let logIdx = 0;

function updateClock() {
  const now = new Date();
  clock.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
}

function addLog() {
  const entry = logs[logIdx % logs.length];
  logIdx += 1;
  const now = new Date();
  const line = document.createElement("div");
  line.className = "log-line";
  line.innerHTML = `<span>[${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}]</span> <span class="${entry.type}">${entry.type.toUpperCase()}</span> ${entry.msg}`;
  stream.prepend(line);
  while (stream.children.length > 7) stream.removeChild(stream.lastChild);
}

function setPanel(name) {
  panelButtons.forEach((btn) => {
    const active = btn.dataset.panel === name;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-selected", active ? "true" : "false");
  });

  panelContent.forEach((panel) => {
    panel.classList.toggle("hidden", panel.dataset.panelContent !== name);
  });
}

function setDetail(key) {
  detailChips.forEach((chip) =>
    chip.classList.toggle("active", chip.dataset.detail === key),
  );
  detailBox.textContent = detailCopy[key];
}

function setProject(key) {
  projectButtons.forEach((btn) =>
    btn.classList.toggle("active", btn.dataset.project === key),
  );
  projectDetail.textContent = projectCopy[key];
}

async function handleSubmit(e) {
  e.preventDefault();
  submitBtn.disabled = true;
  const steps = [
    "Preparing request...",
    "Validating payload...",
    "Opening uplink...",
    "Sending message...",
  ];
  for (const step of steps) {
    statusBox.textContent = step;
    await new Promise((r) => setTimeout(r, 300));
  }

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (!response.ok) throw new Error("Formspree error");
    statusBox.textContent = "Message sent successfully.";
    form.reset();
  } catch {
    statusBox.textContent = "Transmission failed.";
  }

  submitBtn.disabled = false;
}

themeToggle.addEventListener("click", () => {
  const root = document.documentElement;
  const current = getComputedStyle(root).getPropertyValue("--accent").trim();
  const orange = "#ff8a3d";
  const warm = "#ff9b4a";
  const active = current === orange;
  root.style.setProperty("--accent", active ? warm : orange);
  root.style.setProperty("--accent-2", active ? "#ffd09a" : "#ffb166");
  themeToggle.textContent = active ? "🎛️ WARM THEME" : "🎛️ ORANGE THEME";
  themeToggle.setAttribute("aria-pressed", active ? "true" : "false");
});

panelButtons.forEach((btn) =>
  btn.addEventListener("click", () => setPanel(btn.dataset.panel)),
);
detailChips.forEach((chip) =>
  chip.addEventListener("click", () => setDetail(chip.dataset.detail)),
);
projectButtons.forEach((btn) =>
  btn.addEventListener("click", () => setProject(btn.dataset.project)),
);
form.addEventListener("submit", handleSubmit);

updateClock();
setInterval(updateClock, 1000);
for (let i = 0; i < 5; i++) addLog();
setInterval(addLog, 2200);
setDetail("build");
setProject("p1");
setPanel("overview");