# Welcome to Canada — Newcomer Companion App

A cross-platform mobile prototype built with Expo and React Native for newcomers to Canada. This MVP contains onboarding, localized guides, offline-friendly checklists, and a polished welcome experience.

## What’s Included

- **Onboarding** with province/territory selection and language preference
- **Airport Arrival Guide** with CBSA expectations and official links
- **First 30 Days Checklist** with interactive completion tracking
- **Government Documents & ID** information for SIN, health cards, PR cards, driver’s licenses, and CRA
- **Housing & Settlement** guidance for temporary housing, renting, and tenant rights
- **Healthcare** overview with family doctor options and emergency info
- **Employment** support with resume tips, job search, and pay stub basics
- **Education & Language** resources for LINC and credential recognition
- **Community & Services** section for local support and newcomer resources
- **Consult & Help** directory for legal aid, helplines, and FAQs

## Technical Highlights

- **Framework:** React Native with Expo
- **Cross-platform:** iOS, Android, and web-ready
- **Offline-ready:** Core content is stored locally in JSON
- **Localization:** English and French support with expandable text resources
- **Dark Mode:** Theme toggle included for modern usability
- **Accessibility:** Simple, clean UI with readable layout and large tap targets

## Project Structure

```
├── App.js
├── app.json
├── babel.config.js
├── package.json
├── README.md
└── src
    ├── components
    │   └── SectionCard.js
    ├── data
    │   └── content.js
    ├── locales
    │   └── translations.js
    └── screens
        ├── ChecklistScreen.js
        ├── HomeScreen.js
        ├── OnboardingScreen.js
        └── SectionScreen.js
```

## Run the App

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start Expo:
   ```bash
   npm start
   ```
3. Open the app in a simulator or on a physical device using the Expo Go app.

## Next Steps

This prototype can be extended into a full production app by adding:

- push notification reminders
- offline storage persistence for checklist progress
- a searchable settlement agency directory
- admin content management dashboard
- additional languages beyond English and French
- in-app FAQ chatbot integration

## Notes

All guide links in this prototype use official Canada and provincial government sources where available. The content is designed to feel like a trusted newcomer companion with a calm, friendly onboarding experience.
