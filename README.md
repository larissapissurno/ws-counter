# WebSocket Counter App

A real-time counter application built with React Router v7, Socket.IO, and TypeScript. The app demonstrates real-time communication between a React frontend and a Node.js server using WebSockets.

## 🚀 Features

- Real-time counter synchronization via WebSockets
- Modern React Router v7 with TypeScript
- Tailwind CSS for styling
- Socket.IO for WebSocket communication
- Hot reload development environment

## 📹 Resolution recording:
https://drive.google.com/file/d/1xLbuw-uBxLJMav7dUJkthaPQXsA_CtSp/view?usp=drive_link

## If I had more time I would:

• **Fix Memory Leaks**: Implement proper cleanup for `setInterval` in the server to prevent memory leaks when clients disconnect, and add connection/disconnection event handlers.

• **Add Comprehensive Error Handling**: Implement WebSocket error boundaries, automatic reconnection logic, and proper error handling for connection failures and network issues.

• **Optimize WebSocket Connections**: The current implementation creates a new socket connection every time the counter changes. I'd like more time to explore how to improve this, maybe using a single socket connection for the entire app.

• **Implement Environment Configuration**: Add environment variable support for WebSocket URLs, server ports, and other configuration options to enable proper deployment across different environments.

• **Enhance User Experience**: Add loading states, connection status indicators, offline support, and better visual feedback for WebSocket connection states.

• **Improve Code Organization**: Refactor the server code to use proper class-based architecture, add middleware for CORS and authentication, and implement proper TypeScript interfaces for WebSocket events.
