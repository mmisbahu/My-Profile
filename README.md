# Welcome to Canada — Newcomer Companion App

A full-scale, professional mobile application built with Expo and React Native for newcomers to Canada. This comprehensive app includes user authentication, state management, offline capabilities, and a polished user experience.

## What’s Included

- **User Authentication** with Firebase for secure login and signup
- **Onboarding** with province/territory selection and language preference
- **Airport Arrival Guide** with CBSA expectations and official links
- **First 30 Days Checklist** with interactive completion tracking and persistence
- **Government Documents & ID** information for SIN, health cards, PR cards, driver’s licenses, and CRA
- **Housing & Settlement** guidance for temporary housing, renting, and tenant rights
- **Healthcare** overview with family doctor options and emergency info
- **Employment** support with resume tips, job search, and pay stub basics
- **Education & Language** resources for LINC and credential recognition
- **Community & Services** section for local support and newcomer resources
- **Consult & Help** directory for legal aid, helplines, and FAQs
- **Push Notifications** for reminders and updates
- **Dark Mode** theme toggle for modern usability
- **Offline-First** design with local data storage
- **Multi-language** support (English and French)

## Technical Highlights

- **Framework:** React Native with Expo
- **State Management:** Redux Toolkit with Redux Persist
- **Authentication:** Firebase Auth
- **Database:** Firebase Firestore (for future dynamic content)
- **Storage:** AsyncStorage for local persistence
- **UI Library:** React Native Paper for consistent design
- **Cross-platform:** iOS, Android, and web-ready
- **Testing:** Jest with React Native Testing Library
- **Linting:** ESLint for code quality
- **Offline-ready:** Core content stored locally in JSON
- **Localization:** English and French support with expandable text resources
- **Accessibility:** Simple, clean UI with readable layout and large tap targets

## Project Structure

```
├── App.js
├── app.json
├── babel.config.js
├── package.json
├── README.md
├── __tests__/
│   └── userSlice.test.js
└── src
    ├── components
    │   └── SectionCard.js
    ├── data
    │   └── content.js
    ├── firebase.js
    ├── locales
    │   └── translations.js
    ├── screens
    │   ├── ChecklistScreen.js
    │   ├── DirectoryScreen.js
    │   ├── FAQScreen.js
    │   ├── HomeScreen.js
    │   ├── LoginScreen.js
    │   ├── OnboardingScreen.js
    │   ├── SectionScreen.js
    │   └── SignupScreen.js
    └── store
        ├── index.js
        ├── rootReducer.js
        └── slices
            ├── appSlice.js
            ├── checklistSlice.js
            └── userSlice.js
```

## Setup Instructions

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Configure Firebase:**
   - Create a Firebase project at https://console.firebase.google.com/
   - Enable Authentication and Firestore
   - Update `src/firebase.js` with your Firebase config

3. **Run the App:**
   ```bash
   npm start
   ```

4. **Run Tests:**
   ```bash
   npm test
   ```

5. **Lint Code:**
   ```bash
   npm run lint
   ```

## Deployment

- **Expo Build:** Use `expo build:android` or `expo build:ios` for production builds
- **CI/CD:** Configure with GitHub Actions or similar for automated testing and deployment

## Contributing

1. Fork the repository
2. Create a feature branch
3. Write tests for new features
4. Ensure all tests pass and code is linted
5. Submit a pull request

## License

This project is licensed under the MIT License.

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
