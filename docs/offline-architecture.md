# Offline Architecture

## Principle

The local database is the primary working data source. Network services enhance and synchronize data but are never required for supported essential workflows.

## Data Flow

```text
User → UI → Repository → Local Database → Sync Queue
```

When online:

```text
User → UI → Repository → Local Database → Sync Queue → Sync Engine → Backend → Local Database
```

## Sync States

- `PENDING`
- `SYNCING`
- `SYNCED`
- `SYNC_FAILED`
- `CONFLICT`

## Sync Engine Requirements

The sync engine supports automatic sync, manual sync, retry with backoff, duplicate prevention, conflict detection, partial synchronization, and sync history.

## Offline Appointment Rule

Offline appointment requests are saved locally and queued. The UI must display: “Saved offline. This request will be submitted when internet connectivity returns.” A request is never shown as confirmed until the server confirms it.
