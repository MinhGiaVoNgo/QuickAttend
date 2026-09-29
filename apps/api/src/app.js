import cors from 'cors';
import express from 'express';
import { errorHandler, notFoundHandler } from './middleware/error.middleware.js';

export function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get('/health', (_request, response) => {
    response.json({ status: 'ok', service: 'quickattend-api' });
  });

  // Register feature routers here as each module is implemented.
  app.use('/api/auth', (_request, response) => response.status(501).json({ message: 'Auth module not implemented.' }));
  app.use('/api/courses', (_request, response) => response.status(501).json({ message: 'Courses module not implemented.' }));
  app.use('/api/attendance-sessions', (_request, response) => response.status(501).json({ message: 'Attendance module not implemented.' }));
  app.use('/api/handovers', (_request, response) => response.status(501).json({ message: 'Handover module not implemented.' }));

  app.use(notFoundHandler);
  app.use(errorHandler);
  return app;
}
