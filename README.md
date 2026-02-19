# Abra Support Customer Client App

[![Ionic](https://img.shields.io/badge/Ionic-3880FF?style=for-the-badge&logo=ionic&logoColor=white)](https://ionicframework.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Capacitor](https://img.shields.io/badge/Capacitor-119EFF?style=for-the-badge&logo=capacitor&logoColor=white)](https://capacitorjs.com/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)

## The Problem: The Gap in Digital Customer Support
In today's digital ecosystem, excessive automation has created a significant barrier between companies and their users. The reliance on inefficient bots and long wait times leads to a loss of trust and difficulties in resolving complex issues that require immediate human judgment.

## The Solution: Abra Support
Abra Support is a hybrid mobile application developed to restore direct human communication. It provides a comprehensive 24/7 support platform where users interact exclusively with real agents in real-time, ensuring personalized and efficient case management.

---

## Screenshots

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

---

## Architecture and Engineering Decisions

The project is built on an architecture focused on performance and scalability, utilizing a modern technology stack to ensure a fluid user experience.

### Core Technologies
* **Ionic 8 & React 18**: Used to build a highly reactive interface with a single codebase for multiple platforms.
* **TypeScript**: Ensures code robustness through rigorous static typing.
* **Zustand**: Selected for global state management due to its low overhead and simplicity in synchronizing chat and ticket data.
* **Firebase**: Provides the backend infrastructure, including authentication, real-time NoSQL database, and file storage.
* **React Virtuoso**: Implemented to optimize chat performance through list virtualization, allowing the management of high message volumes without compromising device memory.

### Quality and Testing
* **Unit Testing**: Component and business logic testing via Vitest.
* **E2E Testing**: Validation of critical user flows with Cypress.
* **Internationalization**: Native support for Spanish, English, and Portuguese via i18next.

---

