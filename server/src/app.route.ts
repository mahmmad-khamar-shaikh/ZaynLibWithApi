import { Request, Response } from 'express';


export class AppRoutes {
  public Routes(app: any): void {
    app.route('/')
      .get((req: Request, res: Response) => {
        res.status(200).send({ 'message': "default message" });
      })
  }
}