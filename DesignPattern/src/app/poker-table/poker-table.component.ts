import { Component } from '@angular/core';
import { TableService } from '../Services/table.service';

@Component({
  selector: 'app-poker-table',
  templateUrl: './poker-table.component.html',
  styleUrls: ['./poker-table.component.scss']
})
export class PokerTableComponent {
  tables:any = [];
  constructor(private tableService:TableService){

  }
  ngOnInit() {
    this.tables = this.tableService.getTables();
  }
  snippet1:string = `export class GlobleConstants {
    public POKER_TABLES=[
    {name:"2 # Player",numSeats:2,bet:5,rake:3},
    {name:"3 # Player",numSeats:3,bet:5,rake:3},
    {name:"4 # Player",numSeats:4,bet:5,rake:3},
    {name:"5 # Player",numSeats:5,bet:5,rake:3},
    {name:"6 # Player",numSeats:6,bet:5,rake:3},]
}`
snippest2:string = `export class TableService {

  constructor(private constants: GlobleConstants) { 

  }
  getTables(): any {   
    return this.constants.POKER_TABLES;
  }
}
`
snippest3:string =`export class PokerTableComponent {
  tables:any = [];
  constructor(private tableService:TableService){
    ...
    ...
    ...
  }
  }`
}
