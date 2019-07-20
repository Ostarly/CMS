import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatButtonModule
} from '@angular/material';

const Materials = [
  MatToolbarModule,
  MatButtonModule
]

@NgModule({
  imports: [Materials],
  exports: [Materials]
})
export class MaterialModule { }
