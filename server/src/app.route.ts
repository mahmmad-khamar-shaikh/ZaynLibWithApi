import { Request, Response } from 'express';
import * as _express from 'express';
import * as _data from '../mock-data/book-data'
import * as _sql from 'mssql'
import { config } from './config/sql.config';

export class AppRoutes {
  public Routes(app: _express.Application): void {
    app.route('/')
      .get(async (req: Request, res: Response) => {

        const _connectionPool = await new _sql.ConnectionPool(config);
        _connectionPool.connect();
        _connectionPool.request().query("select * from books").then((books) => {
          console.log('books arrived');
        },
          (rej) => {
            console.log('rejected', rej);
          }
        ).catch(err => {
          console.log('érror0 ', err);
        });

        res.status(200).send({ 'message': "default message" });
      });
    app.route('/books')
      .get((req: Request, res: Response) => {
        res.status(200).send(
          _data.books
        );
      });
  }

}