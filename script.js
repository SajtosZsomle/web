const detailCopy = {
  build: "Clean systems, minimal noise, and an emphasis on reliability over flash.",
  stack: "Embedded C/C++, PCB design, RF work, web tooling, and practical infra.",
  workflow: "Prototype, measure, debug, simplify, then ship with a clear structure."
};

const projectCopy = {
  p1: "Arduino Nano firmware with ISR-driven state control, CRC8 EEPROM persistence, layered hardware safety, and a custom DRV8825 PCB.",
  p2: "Handheld RF/WiFi analysis device with dual nRF24L01 modules, OLED UI, and iterative firmware work to solve flash and SPI issues.",
  p3: "MPU-6500 and SH1106-based firmware with memory optimization, stroke counting, a cube visualizer, and a digital spirit level mode.",
  p4: "ESP32 wireless update stack using ElegantOTA and ESPAsyncWebServer with HTTP auth and reconnect/watchdog handling.",
  p5: "High-performance Minecraft plugin work focused on anti-dupe mechanics and live event logging.",
  p6: "This portfolio infrastructure: nginx-served SPA behind a Cloudflare tunnel inside a Proxmox LXC container."
};

const logs = [
  { type: "ok", msg: "PCB review complete // trace widths validated" },
  { type: "ok", msg: "ESP32 toolchain ready // PlatformIO profile loaded" },
  { type: "warn", msg: "RF scan detected congestion // 2.4GHz busy" },
  { type: "ok", msg: "EEPROM state restored // CRC check passed" },
  { type: "ok", msg: "OTA endpoint healthy // auth confirmed" },
  { type: "ok", msg: "Cloudflare tunnel stable // latency within target" },
  { type: "warn", msg: "ATmega328 memory tight // PROGMEM active" },
  { type: "ok", msg: "nginx upstream serving // 200 OK" }
];

const pad = n => String(n).padStart(2, "0");
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
  panelButtons.forEach(btn => {
    const active = btn.dataset.panel === name;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-selected", active ? "true" : "false");
  });

  panelContent.forEach(panel => {
    panel.classList.toggle("hidden", panel.dataset.panelContent !== name);
  });
}

function setDetail(key) {
  detailChips.forEach(chip => chip.classList.toggle("active", chip.dataset.detail === key));
  detailBox.textContent = detailCopy[key];
}

function setProject(key) {
  projectButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.project === key));
  projectDetail.textContent = projectCopy[key];
}

async function handleSubmit(e) {
  e.preventDefault();
  submitBtn.disabled = true;
  const steps = ["Preparing request...", "Validating payload...", "Opening uplink...", "Sending message..."];
  for (const step of steps) {
    statusBox.textContent = step;
    await new Promise(r => setTimeout(r, 300));
  }

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
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

panelButtons.forEach(btn => btn.addEventListener("click", () => setPanel(btn.dataset.panel)));
detailChips.forEach(chip => chip.addEventListener("click", () => setDetail(chip.dataset.detail)));
projectButtons.forEach(btn => btn.addEventListener("click", () => setProject(btn.dataset.project)));
form.addEventListener("submit", handleSubmit);

updateClock();
setInterval(updateClock, 1000);
for (let i = 0; i < 5; i++) addLog();
setInterval(addLog, 2200);
setDetail("build");
setProject("p1");
setPanel("overview");