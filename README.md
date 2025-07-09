# Abra Support Customer Client App

[![Ionic](https://img.shields.io/badge/Ionic-3880FF?style=for-the-badge&logo=ionic&logoColor=white)](https://ionicframework.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Capacitor](https://img.shields.io/badge/Capacitor-119EFF?style=for-the-badge&logo=capacitor&logoColor=white)](https://capacitorjs.com/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)

## 📱 Description

Abra Support Customer Client App is a hybrid mobile application developed with Ionic, React, and TypeScript that provides a complete customer support platform **24/7 in real-time without bots**. The application allows users to create support tickets, communicate directly with human customer service agents, manage cases, and access personalized settings.


## 📸 Screenshots

<p align="center">
  <img src="public/screenshots/abra/Simulator%20Screenshot%20-%20iPhone%2016e%20-%202025-07-08%20at%2018.31.09.png" alt="Login Screen" width="200"/>
  <img src="public/screenshots/abra/Simulator%20Screenshot%20-%20iPhone%2016e%20-%202025-07-08%20at%2018.31.15.png" alt="Main Dashboard" width="200"/>
  <img src="public/screenshots/abra/Simulator%20Screenshot%20-%20iPhone%2016e%20-%202025-07-08%20at%2018.31.29.png" alt="Chat Interface" width="200"/>
  <img src="public/screenshots/abra/Simulator%20Screenshot%20-%20iPhone%2016e%20-%202025-07-08%20at%2018.31.41.png" alt="Ticket Management" width="200"/>
  <img src="public/screenshots/abra/Simulator%20Screenshot%20-%20iPhone%2016e%20-%202025-07-08%20at%2018.31.44.png" alt="Settings Page" width="200"/>
  <img src="public/screenshots/abra/Simulator%20Screenshot%20-%20iPhone%2016e%20-%202025-07-08%20at%2018.31.47.png" alt="Support Chat" width="200"/>
  <img src="public/screenshots/abra/Simulator%20Screenshot%20-%20iPhone%2016e%20-%202025-07-08%20at%2018.31.50.png" alt="File Upload" width="200"/>
  <img src="public/screenshots/abra/Simulator%20Screenshot%20-%20iPhone%2016e%20-%202025-07-08%20at%2018.32.31.png" alt="Agent Selection" width="200"/>
</p>


## ✨ Key Features


### 🎯 Core Functionalities
- **Ticket System**: Creation and management of support cases
- **Real-Time Chat**: Direct communication with human support agents
- **24/7 Service**: Customer service available 24 hours a day, 7 days a week
- **Human Agents**: Exclusive interaction with real personnel, no automated bots
- **Authentication**: User login and registration system
- **Multilingual**: Support for multiple languages (Spanish, English, Portuguese)
- **File Management**: Upload and download of attached files
- **Notifications**: Real-time alerts and updates system

### 📱 User Interface
- **Responsive Design**: Optimized for mobile devices and tablets
- **Tab Navigation**: Intuitive interface with smooth navigation
- **Customizable Themes**: Support for light and dark themes
- **Smooth Animations**: Fluid transitions with Framer Motion

### 🔧 Advanced Technologies
- **Global State**: State management with Zustand
- **Virtualization**: Performance optimized with React Virtuoso
- **Testing**: Unit and E2E tests with Vitest and Cypress
- **PWA Ready**: Progressive Web App capabilities

## 🛠️ Technology Stack

### Frontend
- **Ionic 8**: UI framework for hybrid applications
- **React 18**: User interface library
- **TypeScript**: Static typing for greater robustness
- **React Router**: Application routing
- **Styled Components**: CSS-in-JS styling

### Backend & Services
- **Firebase**: Authentication, database and storage
- **i18next**: Internationalization and localization
- **Zustand**: Global state management
- **Framer Motion**: Animations and transitions

### Development & Testing
- **Vite**: Bundler and development server
- **Capacitor**: Native for iOS and Android
- **Cypress**: End-to-end testing
- **Vitest**: Unit testing
- **ESLint**: Code linting

## 🚀 Installation and Setup

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn
- Ionic CLI
- Capacitor CLI

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/vittoriocostantini/Abra-support-costumer-Client---APP.git
cd Abra-support-costumer-Client---APP
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure Firebase**
```bash
# Create Firebase configuration file
cp src/firebase/config/firebase-config.example.ts src/firebase/config/firebase-config.ts
# Edit with your Firebase credentials
```

4. **Run in development mode**
```bash
npm run dev
```

### Available Scripts

```bash
# Development
npm run dev          # Development server
npm run start        # Ionic server

# Build
npm run build        # Production build
npm run preview      # Build preview

# Testing
npm run test.unit    # Unit tests
npm run test.e2e     # End-to-end tests

# Linting
npm run lint         # Code verification
```

## 📱 Supported Platforms

### Web
- Modern browsers (Chrome, Firefox, Safari, Edge)
- PWA with offline capabilities

### Mobile
- **iOS**: iOS 13+ (iPhone, iPad)
- **Android**: Android 8+ (API level 26+)

## 🏗️ Project Architecture

```
src/
├── components/          # Reusable components
│   ├── footer-tab/     # Navigation bar
│   ├── pages/          # Page components
│   └── tickets/        # Ticket components
├── firebase/           # Firebase configuration and services
├── hooks/              # React custom hooks
├── i18n/               # Internationalization
├── models/             # TypeScript data models
├── pages/              # Main pages
├── services/           # Business logic services
├── stores/             # Global state (Zustand)
├── theme/              # Themes and styles
└── types/              # TypeScript type definitions
```

## 🌐 Internationalization

The application supports multiple languages:
- **Spanish** (es)
- **English** (en)
- **Portuguese** (pt)

Translation files are located in `src/i18n/locales/`.

## 🔐 Authentication

Firebase Auth-based authentication system with:
- User registration
- Login
- Password recovery
- Session persistence

## 📊 State Management

Uses Zustand for global state management:
- **Message Store**: Message and chat management
- **Tickets Store**: Ticket and case state

## 🧪 Testing

### Unit Tests
```bash
npm run test.unit
```

### E2E Tests
```bash
npm run test.e2e
```

## 📦 Build and Deployment

### Web Build
```bash
npm run build
```

### Mobile Build
```bash
# iOS
npm run build
npx cap sync ios
npx cap open ios

# Android
npm run build
npx cap sync android
npx cap open android
```

## 🔧 Capacitor Configuration

The project is configured for:
- **iOS**: Complete native support
- **Android**: Google services integration
- **Web**: PWA with offline capabilities

## 📞 Support

For technical support or questions about the project:
- Create an issue on GitHub
- Contact the development team

## 🔄 Roadmap

- [ ] Integration with more payment platforms
- [ ] Push notification system
- [ ] Advanced analytics
- [ ] Improved offline mode
- [ ] Real-time chat experience improvements

---

**Developed with ❤️ by the Abra Support team**

---

**Desarrollado con ❤️ por el equipo de Abra Support**
