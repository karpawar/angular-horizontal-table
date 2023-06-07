import { Injectable } from '@angular/core';

@Injectable()
export class AssetAllocationService {
  constructor() {}

  getFundsList() {
    return [
      {
        morningStartId: '2433',
        ticker: '2343wterg',
        equityAmount: 39,
        fixedIncome: 50,
        cash: 20,
        nonUsEquity: 20,
        nonUsFixedIncome: 30,
        Other: 0,
      },
      {
        morningStartId: '2431',
        ticker: '2343wterg',
        equityAmount: 40,
        fixedIncome: 50,
        cash: 20,
        nonUsEquity: 20,
        nonUsFixedIncome: 30,
        Other: 0,
      },
      {
        morningStartId: '2432',
        ticker: '2343wterg',
        equityAmount: 50,
        fixedIncome: 50,
        cash: 20,
        nonUsEquity: 20,
        nonUsFixedIncome: 30,
        Other: 0,
      },
    ];
  }
}
