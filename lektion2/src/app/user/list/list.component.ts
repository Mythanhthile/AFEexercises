// src/app/user/list/list.component.ts
import { Component, OnInit } from '@angular/core';
import { Billionaire, BillionaireService } from 'src/app/billionaire.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  billionaires: Billionaire[] = [];

  constructor(private billionaireService: BillionaireService) {}

  ngOnInit(): void {
    this.getBillionaires();
  }

  getBillionaires(): void {
    this.billionaireService.getBillionaires().subscribe((billionaires) => {
      this.billionaires = billionaires;
    });
  }
}
