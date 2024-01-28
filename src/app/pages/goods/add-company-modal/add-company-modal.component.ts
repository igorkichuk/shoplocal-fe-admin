import { Component } from '@angular/core';
import { NbDialogRef, NbToastrConfig, NbToastrService } from "@nebular/theme";
import { CompaniesService } from "../companies.service";
import { Company } from "../company";

@Component({
  selector: 'ngx-add-company-modal',
  templateUrl: './add-company-modal.component.html',
  styleUrls: ['./add-company-modal.component.scss']
})
export class AddCompanyModalComponent {

  successConfig  = <NbToastrConfig>{
    status:"success",
    position:"top-right",
    preventDuplicates: true,
  }

  constructor(
    protected ref: NbDialogRef<AddCompanyModalComponent>,
    private companiesService: CompaniesService,
    private toastService: NbToastrService
    ) {
  }

  dismiss() {
    this.ref.close()
  }

  companyForm = <Company> {
    name: ""
  }

  send() {
    this.companiesService.addCompany(this.companyForm).subscribe()
    this.companyForm = <Company>{}
    this.ref.close()
    this.toastService.show("The company was added.","Success!", this.successConfig)
  }
}
