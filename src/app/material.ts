import { NgModule } from '@angular/core';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  imports: [
    MatButtonModule,
     MatCheckboxModule,
     MatToolbarModule,
     MatIconModule,
     MatCardModule,
     MatGridListModule,
     MatFormFieldModule,
     MatSidenavModule
  ],
  exports: [
    MatButtonModule,
     MatCheckboxModule,
     MatToolbarModule,
     MatIconModule,
     MatCardModule,
     MatGridListModule,
     MatFormFieldModule,
     MatSidenavModule
  ],
})
export class MaterialModule { }
