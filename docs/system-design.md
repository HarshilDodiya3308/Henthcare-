# RuralCare AI Product & System Design

## Design Vision

RuralCare AI should feel simple, trustworthy, modern, friendly, accessible, fast, lightweight, and healthcare-focused. The experience should be understandable for rural users with limited digital literacy.

## Navigation

Patient bottom navigation uses four primary destinations: Home, Health, Doctors, and Profile. The AI assistant remains prominent on the Home screen.

## Key Screens

- Onboarding and language selection
- Login and role selection
- Patient dashboard
- AI Health Assistant and voice interaction
- Health profile, records, timeline, vitals, and prescriptions
- Doctor search, profile, appointment booking, appointment detail/history
- Sync Center
- Health-worker dashboard, registration, patient search, visit form, offline records
- Doctor dashboard, appointment management, consultation, prescription entry, availability
- Admin dashboard, user management, doctor management, health-worker management, system configuration, audit logs

## Component Library

Reusable UI components include PrimaryButton, SecondaryButton, StatusBadge, OfflineBanner, SyncIndicator, HealthCard, DoctorCard, AppointmentCard, RecordCard, VitalCard, ChatBubble, VoiceButton, LoadingState, EmptyState, ErrorState, ConfirmationDialog, and LanguageSelector.

## Trust States

The UI must clearly distinguish saved locally, waiting for internet, appointment submitted, appointment confirmed, doctor has not responded, sync failed, and conflict states.
