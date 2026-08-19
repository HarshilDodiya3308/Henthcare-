# Database Documentation

Every important local record includes a local ID, optional server ID, created timestamp, updated timestamp, version, sync status, and deleted flag where required.

## Core Entities

- `users`: id, role, name, phone, email, language, createdAt, updatedAt
- `patient_profiles`: id, userId, dateOfBirth, emergencyContact, allergies, medicalHistory, createdAt, updatedAt
- `doctors`: id, userId, specialization, qualifications, languages, experience, clinic, location, availability, verificationStatus
- `health_records`: id, patientId, recordType, data, createdBy, createdAt, updatedAt
- `vitals`: id, patientId, temperature, heartRate, bloodPressure, oxygenSaturation, weight, recordedBy, recordedAt
- `appointments`: id, patientId, doctorId, date, time, type, status, createdAt, updatedAt
- `prescriptions`: id, patientId, doctorId, appointmentId, medicines, instructions, createdAt
- `consultations`: id, appointmentId, patientId, doctorId, notes, createdAt
- `ai_sessions`: id, patientId, language, messages, summary, createdAt
- `health_worker_visits`: id, patientId, healthWorkerId, symptoms, vitals, notes, followUpRequired, recordedAt
- `sync_queue`: id, entityType, entityId, operation, payload, status, retryCount, createdAt
- `audit_logs`: id, userId, action, entity, entityId, timestamp
