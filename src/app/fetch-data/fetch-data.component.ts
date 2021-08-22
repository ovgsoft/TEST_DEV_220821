import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];
  public data: any[];
  public filterQuery = '';
  public rowsOnPage = 5;
  public sortBy = 'email';
  public sortOrder = 'asc';
  constructor(http: HttpClient, @Inject('https://api.toka.com.mx/candidato/api') baseUrl: string) {
    http.get('https://api.toka.com.mx/candidato/api/customers').subscribe(result => {
      this.forecasts = result["Data"];
    }, error => console.error(error));
  }

public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }
}

interface WeatherForecast {
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
