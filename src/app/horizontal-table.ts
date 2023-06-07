import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-table',
  template: `
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th *ngFor="let column of columns">
          {{ column.name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of rows">
          <td>{{ row.heading }}</td>
          <td *ngFor="let value of row.values">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  `,
})
export class HorizontalTableComponent {
  @Input() columns: string[] = [];
  @Input() rows: { heading: string; values: string[] }[] = [];
}
