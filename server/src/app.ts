
import * as _express from 'express';
import { AppRoutes } from './app.route';
export class App {
  public app: _express.Application;
  public routes: AppRoutes = new AppRoutes();
  constructor() {
    this.app = _express();
    this.routes.Routes(this.app);
  }

}

export   default new App().app;