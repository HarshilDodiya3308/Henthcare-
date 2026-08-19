import { loadDatabase, saveDatabase, resetDatabase } from './core/localDatabase.js';
import { markQueueSynced, pendingCount } from './core/syncEngine.js';
import { buildAssistantReply } from './features/aiAssistant.js';
import { createOfflineAppointment } from './features/appointments.js';

const state = { online: false, database: loadDatabase() };
const $ = (selector) => document.querySelector(selector);

function renderTimeline() {
  $('#timeline').innerHTML = state.database.timeline.map((event) => `
    <li>
      <strong>${event.date}</strong>
      <span>${event.label}</span>
      <em>${event.syncStatus}</em>
    </li>
  `).join('');
}

function renderAppointments() {
  $('#appointmentList').innerHTML = state.database.appointments.length
    ? state.database.appointments.map((appointment) => `<li>${appointment.doctorName} · ${appointment.date} · ${appointment.status}</li>`).join('')
    : '<li>No appointment requests yet.</li>';
}

function renderSyncCenter() {
  const count = pendingCount(state.database);
  $('#connectionToggle').textContent = state.online ? '● Online' : '● Offline';
  $('#connectionToggle').className = `status ${state.online ? 'online' : 'offline'}`;
  $('#internetState').textContent = state.online ? 'ONLINE' : 'OFFLINE';
  $('#pendingCount').textContent = String(count);
  $('#syncState').textContent = state.online ? (count ? 'Ready to sync' : 'All records synchronized') : 'Waiting for connection';
}

function render() {
  renderTimeline();
  renderAppointments();
  renderSyncCenter();
  saveDatabase(state.database);
}

$('#connectionToggle').addEventListener('click', () => {
  state.online = !state.online;
  render();
});

$('#languageGrid').addEventListener('click', (event) => {
  if (!event.target.matches('button')) return;
  state.database.user.language = event.target.dataset.lang;
  document.querySelectorAll('#languageGrid button').forEach((button) => button.classList.toggle('selected', button === event.target));
  $('#activeLanguage').textContent = state.database.user.language;
  render();
});

$('#askAi').addEventListener('click', () => {
  const reply = buildAssistantReply($('#healthConcern').value);
  $('#aiReply').textContent = reply.text;
  $('#triageLevel').textContent = reply.level;
  $('#triageLevel').className = `triage ${reply.level.toLowerCase().replace(' ', '-')}`;
});

$('#saveAppointment').addEventListener('click', () => {
  const appointment = createOfflineAppointment(state.database, state.database.doctors[0]);
  $('#appointmentState').textContent = `✓ Saved on this device. ${appointment.doctorName} has not confirmed yet; this request is pending sync.`;
  render();
});

$('#syncNow').addEventListener('click', () => {
  if (!state.online) {
    $('#syncState').textContent = "Your local information is safe. We'll try again when internet returns.";
    return;
  }

  $('#syncState').textContent = `Syncing ${pendingCount(state.database)} pending records...`;
  setTimeout(() => {
    state.database = markQueueSynced(state.database);
    render();
  }, 500);
});

$('#resetDemo').addEventListener('click', () => {
  state.database = resetDatabase();
  $('#appointmentState').textContent = 'Only server-confirmed appointments will show as confirmed.';
  render();
});

render();
