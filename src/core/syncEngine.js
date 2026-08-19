export const SyncStatus = Object.freeze({
  PENDING: 'PENDING',
  SYNCING: 'SYNCING',
  SYNCED: 'SYNCED',
  SYNC_FAILED: 'SYNC_FAILED',
  CONFLICT: 'CONFLICT'
});

export function createSyncRecord(entityType, entityId, operation, payload = {}) {
  return {
    id: `sync-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    entityType,
    entityId,
    operation,
    payload,
    status: SyncStatus.PENDING,
    retryCount: 0,
    createdAt: new Date().toISOString()
  };
}

export function markQueueSynced(database) {
  database.syncQueue = database.syncQueue.map((record) => ({ ...record, status: SyncStatus.SYNCED }));
  database.timeline = database.timeline.map((event) => ({ ...event, syncStatus: SyncStatus.SYNCED }));
  database.vitals = database.vitals.map((vital) => ({ ...vital, syncStatus: SyncStatus.SYNCED }));
  database.appointments = database.appointments.map((appointment) => ({ ...appointment, syncStatus: SyncStatus.SYNCED, status: 'Requested' }));
  return database;
}

export function pendingCount(database) {
  return database.syncQueue.filter((record) => record.status !== SyncStatus.SYNCED).length;
}
