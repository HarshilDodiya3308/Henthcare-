const { readFileSync } = require('node:fs');

const html = readFileSync('index.html', 'utf8');
const app = readFileSync('src/app.js', 'utf8');
const requiredHtml = ['RuralCare AI', 'DEMO DATA — FICTIONAL', 'Sync Center', 'type="module"'];
const requiredApp = ['createOfflineAppointment', 'markQueueSynced', 'buildAssistantReply'];

for (const token of requiredHtml) {
  if (!html.includes(token)) throw new Error(`index.html missing ${token}`);
}

for (const token of requiredApp) {
  if (!app.includes(token)) throw new Error(`src/app.js missing ${token}`);
}

console.log('Smoke tests passed');
