import { Injectable } from '@angular/core';
import { GlobleConstants } from '../constants/globle.constants';
@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private constants: GlobleConstants) { 

  }
  getTables(): any {   
    return this.constants.POKER_TABLES;
  }
}
