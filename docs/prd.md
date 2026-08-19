# RuralCare AI PRD — MVP 1.0

## Product Overview

RuralCare AI is an offline-first rural healthcare platform for patients, doctors, ASHA/community health workers, and administrators. Its central principle is **LOCAL-FIRST → SYNC-LATER**: essential healthcare workflows continue on-device when internet access is weak, intermittent, expensive, or unavailable.

## Goals

1. Enable offline healthcare access for locally stored records, vitals, health-worker visits, AI guidance, and appointment requests.
2. Support English, Hindi, Gujarati, and Punjabi with future language expansion.
3. Provide AI-assisted general health guidance with safety triage and escalation.
4. Connect patients to real doctors through discovery and appointment workflows.
5. Maintain structured digital health records and chronological health timelines.
6. Support health-worker field workflows offline.
7. Synchronize automatically and manually when connectivity returns.
8. Protect sensitive health information with authentication, authorization, secure storage, audit logs, and no hardcoded secrets.

## Non-goals

The MVP must not replace doctors, provide definitive diagnoses, independently prescribe prescription medicines, replace emergency services, fabricate doctor availability, expose private health records publicly, or claim partnerships that do not exist.

## Roles

- **Patient:** health guidance, records, appointments, emergency help, sync status.
- **Doctor:** appointment management, authorized patient information, consultation notes, prescriptions, availability.
- **Health worker / ASHA:** offline patient registration, search, visit capture, vitals, notes, follow-up, appointment requests, sync.
- **Admin:** user, doctor, health-worker, configuration, audit, and sync monitoring.

## Priority 1 MVP

- Authentication and roles
- Local database
- Offline patient profile and records
- Offline AI safety layer
- Multilingual text
- Basic voice affordances
- Sync engine

## Acceptance Criteria

- App launches without internet.
- Permitted local health records are accessible offline.
- Patients and health workers can create supported records offline.
- Appointment requests can be saved offline and appear as pending sync, not confirmed.
- Sync Center displays pending changes and sync results.
- Repeated sync does not duplicate records.
- English, Hindi, Gujarati, and Punjabi are supported.
- AI does not diagnose, prescribe independently, or hide urgent escalation.
- Unauthorized users cannot access protected health information.
- Demo mode uses fictional data only.
