import { Component, Input } from '@angular/core';

/**
 * This is the common table component
 * Here you only pass the data and get it iterated
 * You can also add css/scss styles from here in the styles or move it to a styles files as well
 */

@Component({
  selector: 'app-table',
  template: `
    <table >
      <thead>
        <tr>
          <th>#</th>
          <th *ngFor="let item of list">{{ item.name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let rowHead of rowHeads">
          <th>{{ rowHead.name }}</th>
          <td *ngFor="let item of list">{{ item[rowHead.key] }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styleUrls: ['./horizontal-table.component.css'],
})
export class HorizontalTableComponent {
  // all list fetched from api to match the ID and show data
  @Input() list: any[];

  // row headers
  @Input() rowHeads: { key: string; name: string }[];
}
