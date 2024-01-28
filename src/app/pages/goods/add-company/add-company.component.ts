import { Component } from '@angular/core';
import { NbDialogService } from "@nebular/theme";
import { AddCompanyModalComponent } from "../add-company-modal/add-company-modal.component";

@Component({
  selector: 'ngx-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent {

  constructor(private dialogService: NbDialogService) {
  }

  openAddCompany() {
    this.dialogService.open(AddCompanyModalComponent)
  }
}
