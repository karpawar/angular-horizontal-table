import { Injectable } from '@angular/core';

@Injectable()
export class AssetAllocationService {
  constructor() {}

  /**
   * Write a ge api call here to pass the params & add http get call
   */
  getFundsList() {
    return [
      {
        morningStarId: 'MM3qqw1',
        ticker: '2343wterg',
        equityAmount: 39,
        fixedIncome: 50,
        cash: 20,
        nonUsEquity: 20,
        nonUsFixedIncome: 30,
        Other: 0,
      },
      {
        morningStarId: 'MM3qqw2',
        ticker: '2343wterg',
        equityAmount: 40,
        fixedIncome: 50,
        cash: 20,
        nonUsEquity: 20,
        nonUsFixedIncome: 30,
        Other: 0,
      },
      {
        morningStarId: 'MM3qqw3',
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
