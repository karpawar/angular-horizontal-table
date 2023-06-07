import { Component, OnInit } from '@angular/core';
import { AssetAllocationService } from './asset-allocation.service';

@Component({
  selector: 'app-asset-allocation',
  templateUrl: './asset-allocation.component.html',
  styleUrls: ['./asset-allocation.component.css'],
})
export class AssetAllocationComponent implements OnInit {
  // dynamic params passed on the basis of selected list
  // get this data from service files or
  // pass as input from selected funds component
  selectedCols = [
    { name: 'Fund ASP', morningStarId: 'MM3qqw1' },
    { name: 'Fund SSL', morningStarId: 'MM3qqw2' },
    { name: 'Fund TRS', morningStarId: 'MM3qqw3' },
  ];

  // this can be moved to constants and use for row headers
  rowHeads = [
    { key: 'Ticker', name: 'Ticker' },
    { key: 'equityAmount', name: 'Equity Amount' },
    { key: 'fixedIncome', name: 'Fixed Income' },
    { key: 'cash', name: 'Cash' },
    { key: 'nonUsEquity', name: 'Non US Equity' },
    { key: 'nonUsFixedIncome', name: 'Non US Fixed Income' },
    { key: 'other', name: 'Other' },
  ];

  // this is the main array which holds the list and shows in table
  displayList = [];

  constructor(private assetAllocationService: AssetAllocationService) {}

  ngOnInit(): void {
    let listFromAPI = this.assetAllocationService.getFundsList();
    this.displayList = this.mergeArrays(this.selectedCols, listFromAPI);

    console.log(this.selectedCols);
    console.log(listFromAPI);
    console.log(JSON.stringify(this.displayList));
  }

  // Function to Build list as per the data required to show horizontal table
  mergeArrays(selectedCols: any[], data: any[]): any[] {
    return selectedCols.map((selectedObj) => {
      const matchingData = data.find(
        (dataObj) => dataObj.morningStarId === selectedObj.morningStarId
      );
      return { ...selectedObj, ...matchingData };
    });
  }
}
