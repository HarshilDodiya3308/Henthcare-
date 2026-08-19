const state = { online: false, pending: 3, language: 'English' };
const $ = (id) => document.getElementById(id);

function render() {
  $('connectionToggle').textContent = state.online ? '● Online' : '● Offline';
  $('connectionToggle').className = `status ${state.online ? 'online' : 'offline'}`;
  $('internetState').textContent = state.online ? 'ONLINE' : 'OFFLINE';
  $('pendingCount').textContent = String(state.pending);
  $('syncState').textContent = state.online ? (state.pending ? 'Ready to sync' : 'All records synchronized') : 'Waiting for connection';
}

$('connectionToggle').addEventListener('click', () => {
  state.online = !state.online;
  render();
});

$('languageGrid').addEventListener('click', (event) => {
  if (!event.target.matches('button')) return;
  state.language = event.target.dataset.lang;
  document.querySelectorAll('#languageGrid button').forEach((button) => button.classList.toggle('selected', button === event.target));
});

$('askAi').addEventListener('click', () => {
  $('aiReply').textContent = 'I can share general information, not a diagnosis. How high is the fever, and are there warning signs such as breathing difficulty, confusion, chest pain, or severe weakness? Seek urgent care for serious symptoms.';
});

$('saveAppointment').addEventListener('click', () => {
  state.pending += 1;
  $('appointmentState').textContent = '✓ Saved on this device. This request is pending sync and is not confirmed yet.';
  render();
});

$('syncNow').addEventListener('click', () => {
  if (!state.online) {
    $('syncState').textContent = "Your local information is safe. We'll try again when internet returns.";
    return;
  }
  $('syncState').textContent = `Syncing ${state.pending} pending records...`;
  setTimeout(() => {
    state.pending = 0;
    render();
  }, 500);
});

render();
