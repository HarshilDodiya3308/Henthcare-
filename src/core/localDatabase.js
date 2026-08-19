export const STORAGE_KEY = 'ruralcare_ai_local_db_v1';

export const initialDatabase = {
  user: {
    id: 'demo-patient-001',
    role: 'PATIENT',
    name: 'Demo Patient',
    language: 'English',
    emergencyContact: '+91 00000 00000'
  },
  doctors: [
    {
      id: 'demo-doctor-001',
      name: 'Dr. Demo Doctor',
      specialization: 'General Medicine',
      languages: ['Hindi', 'Gujarati'],
      verificationStatus: 'DEMO VERIFIED',
      availability: 'Today'
    }
  ],
  vitals: [
    { id: 'vital-001', date: '16 Aug', label: 'Vital recorded', syncStatus: 'PENDING' }
  ],
  timeline: [
    { id: 'event-001', date: '16 Aug', label: 'Vital recorded', syncStatus: 'PENDING' },
    { id: 'event-002', date: '15 Aug', label: 'Health-worker visit', syncStatus: 'SYNCED' },
    { id: 'event-003', date: '11 Aug', label: 'Prescription added by doctor', syncStatus: 'SYNCED' }
  ],
  appointments: [],
  syncQueue: [
    { id: 'sync-001', entityType: 'vitals', entityId: 'vital-001', operation: 'UPSERT', status: 'PENDING' },
    { id: 'sync-002', entityType: 'health_worker_visits', entityId: 'visit-001', operation: 'UPSERT', status: 'PENDING' },
    { id: 'sync-003', entityType: 'ai_sessions', entityId: 'ai-001', operation: 'UPSERT', status: 'PENDING' }
  ]
};

export function loadDatabase() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : structuredClone(initialDatabase);
}

export function saveDatabase(database) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(database));
}

export function resetDatabase() {
  const database = structuredClone(initialDatabase);
  saveDatabase(database);
  return database;
}
