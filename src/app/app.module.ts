import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AssetAllocationComponent } from './asset-allocation/asset-allocation.component';
import { HorizontalTableComponent } from './horizontal-table';
import { AssetAllocationService } from './asset-allocation/asset-allocation.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', component: AssetAllocationComponent }]),
  ],
  declarations: [
    AppComponent,
    AssetAllocationComponent,
    HorizontalTableComponent,
  ],
  bootstrap: [AppComponent],
  providers: [AssetAllocationService],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
