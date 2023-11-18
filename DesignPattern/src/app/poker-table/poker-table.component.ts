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
}
