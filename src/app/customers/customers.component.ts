import { Component, ElementRef, Inject, Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';
@Injectable()
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
   @ViewChild('table') table: ElementRef;
  public customers: CustomersInterface[];
  public page: Number;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('https://ovgsoft.com/data.json').subscribe(result => {
      this.customers = result["Data"];
    }, error => console.error(error));

  }
exportTableToExcel() {
   const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

      /* save to file */
      XLSX.writeFile(wb, 'SheetJS.xlsx');
}
}
interface CustomersInterface {
  IdCliente: number;
  FechaRegistroEmpresa: string;
  RazonSocial: string;
  RFC: string;
  Sucursal: string;
  IdEmpleado: number;
  Nombre: string;
  Paterno: string;
  Materno: string;
  IdViaje: number;
}
