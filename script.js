// Live updating telemetry clock
function updateClock() {
    const now = new Date();
    const timeString = now.toTimeString().split(' ')[0];
    const clockElement = document.getElementById('live-clock');
    if(clockElement) clockElement.textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

// Simulated Hardware Telemetry Logger Feed
const logContainer = document.getElementById('log-stream');
const logMessages = [
    "DRV8825 // microstepping sequence initialized.",
    "ESP32_CORE // checking sensor bus I2C status... OK",
    "SYS_MONITOR // telemetry pipeline sync established.",
    "FIRMWARE // flash memory verify: 100% integrity",
    "ADC_CHANNEL // ambient read complete // LDR=412v",
    "ANTI_DUPE // tracking system integrity structural match.",
    "ASYNC_LOOP // execution delay 0ms",
    "easyeda_export // verified gerber array layer structures."
];

function generateLog() {
    if (!logContainer) return;
    
    const timestamp = new Date().toISOString().slice(11, 19);
    const randomMsg = logMessages[Math.floor(Math.random() * logMessages.length)];
    
    const logLine = document.createElement('div');
    logLine.style.marginBottom = "4px";
    logLine.innerHTML = `<span style="color: #6272a4;">[${timestamp}]</span> ${randomMsg}`;
    
    logContainer.appendChild(logLine);
    
    // Maintain maximum window length for rows
    while (logContainer.childNodes.length > 7) {
        logContainer.removeChild(logContainer.firstChild);
    }
}

if(logContainer) {
    setInterval(generateLog, 2400);
    // Initial instantiation loop
    for(let i=0; i<5; i++) { generateLog(); }
}

// Micro-scrolling handling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});
