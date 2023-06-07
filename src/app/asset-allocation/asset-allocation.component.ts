import { Component } from '@angular/core';

@Component({
  selector: 'app-asset-allocation',
  templateUrl: './asset-allocation.component.html',
  styleUrls: ['./asset-allocation.component.css'],
})
export class AssetAllocationComponent {
  // dynamic params passed on the basis of selected list
  cols = [
    { name: 'Fund 1', morningStarId: '1er2' },
    { name: 'Fund 2', morningStarId: '1er3' },
    { name: 'Fund 3', morningStarId: '1er4' },
  ];

  rowHeads = [
    'Ticker',
    'equityAmount',
    'fixedIncome',
    'cash',
    'nonUsEquity',
    'nonUsFixedIncome',
    'Other',
  ];

  rows = [
    { heading: 'Ticker', values: [] },
    { heading: 'Equity Amount', values: ['Data 4', 'Data 5', 'Data 6'] },
    { heading: 'Fixed Income', values: ['Data 7', 'Data 8', 'Data 9'] },
    { heading: 'Cash', values: ['Data 7', 'Data 8', 'Data 9'] },
    { heading: 'NonUS Equity', values: ['Data 7', 'Data 8', 'Data 9'] },
    { heading: 'NonUS Fixed Income', values: ['Data 7', 'Data 8', 'Data 9'] },
    { heading: 'Other', values: ['Data 7', 'Data 8', 'Data 9'] },
  ];

  share() {
    window.alert('The product has been shared!');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
