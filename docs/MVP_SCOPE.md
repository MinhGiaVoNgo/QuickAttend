# QuickAttend semester MVP

## Primary users

- Lecturer: creates, monitors, ends, and temporarily hands over a session.
- Student: scans a current QR code and submits location verification.
- Substitute lecturer: receives limited, time-bound session access.

## Core flow

1. Sign in.
2. Lecturer selects an attendance template.
3. Lecturer starts an attendance session; the server issues a dynamic QR token.
4. Student scans the QR and submits GPS data.
5. Lecturer watches submissions and ends the session, or hands it over.

## Out of scope

BLE beacons, focus monitoring, AI fraud detection, facial recognition, long-term battery tracking, and behavioural analytics.

## Validation targets

- Setup: approximately 30 seconds or less.
- Handover: less than one minute.
- Test with 5–10 lecturers/TAs and record task time, taps, and satisfaction.
