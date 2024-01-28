import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsComponent } from './goods.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { NbButtonModule, NbCardModule, NbInputModule } from "@nebular/theme";
import { AddCompanyModalComponent } from './add-company-modal/add-company-modal.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    GoodsComponent,
    AddCompanyComponent,
    AddCompanyModalComponent,
  ],
  imports: [
    NbButtonModule,
    CommonModule,
    NbCardModule,
    NbInputModule,
    FormsModule
  ],
})
export class GoodsModule {
}
