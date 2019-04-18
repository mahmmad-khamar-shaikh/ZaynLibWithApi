import { Injectable, OnInit } from '@angular/core';
import { IBook } from '../types';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { fromEventPattern } from 'rxjs';

@Injectable()
export class BookBoardService implements OnInit {

    ngOnInit(): void {
    }

}
