import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule
} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule, MatCheckboxModule],
  exports: [MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule, MatCheckboxModule]
})

export class MaterialModule {}
