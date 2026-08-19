import { createSyncRecord } from '../core/syncEngine.js';

export function createOfflineAppointment(database, doctor) {
  const appointment = {
    id: `appointment-${Date.now()}`,
    doctorId: doctor.id,
    doctorName: doctor.name,
    date: '19 Aug 2026',
    time: '10:30 AM',
    type: 'Online',
    status: 'Pending Sync',
    syncStatus: 'PENDING',
    createdAt: new Date().toISOString()
  };

  database.appointments.push(appointment);
  database.syncQueue.push(createSyncRecord('appointments', appointment.id, 'CREATE', appointment));
  database.timeline.unshift({
    id: `event-${appointment.id}`,
    date: '19 Aug',
    label: 'Appointment request saved offline',
    syncStatus: 'PENDING'
  });

  return appointment;
}
