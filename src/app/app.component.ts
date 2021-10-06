import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customerFirstName: any= '';
  customerLastName: any = '';
  customerEmailAddress: any= '';
  customerSalary: any='';

  AddCustomerDetails: any=[];



  onAddCustomerData() {
    // @ts-ignore
    this.AddCustomerDetails.push({
      type: 'server',
      customerFirstName: new this.customerFirstName,
      customerLastName: new this.customerLastName,
      customerSalary: new this.customerSalary,
      customerEmailAddress:new this.customerEmailAddress
    });
  }
  //
  // onAddCustomerFirstName() {
  //   // @ts-ignore
  //   this.onAddCustomerFirstName.name({
  //   type: 'server',
  //   name: this.customerFirstName,
  //   content: this.customerFirstName
  // });
  //
  // }
  //
  // onAddCustomerLastName() {
  //   // @ts-ignore
  //   this.onAddCustomerLastName.name({
  //     type: 'server',
  //     name: this.customerLastName,
  //     content: this.customerLastName
  //   });
  // }
  //
  // onAddCustomerEmailAddress() {
  //   // @ts-ignore
  //   this.onAddCustomerEmailAddress.name({
  //     type: 'server',
  //     name: this.customerEmailAddress,
  //     content: this.customerEmailAddress
  //   });
  // }
  // onAddCustomerSalary() {
  //   // @ts-ignore
  //   this.onAddCustomerSalary.length({
  //     type: 'server',
  //     name: this.customerSalary,
  //     content: this.customerSalary
  //   });
  // }




  onAddServer() {

  }
}
