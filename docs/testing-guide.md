# Testing Guide

## Offline Testing

- App launches offline.
- Patient profile and local records remain available offline.
- Vitals, health-worker visits, and appointment requests save offline.
- Offline AI provides safe guidance and escalation.

## Sync Testing

- Offline changes appear in Sync Center.
- Offline-to-online transition uploads pending records.
- Retry handles failed synchronization.
- Repeated synchronization does not duplicate records.
- Conflicts are detected and marked for authorized resolution.

## Security Testing

- Patients access only permitted data.
- Doctors access only authorized patient information.
- Health workers access only assigned/permitted patients.
- Admin access is limited to required administrative information.
- No hardcoded secrets are committed.

## AI Testing

- Language detection works for supported languages.
- Follow-up questions are relevant and minimal.
- Urgent symptoms trigger prominent escalation.
- Medication requests do not produce independent prescriptions.
