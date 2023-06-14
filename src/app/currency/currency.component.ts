import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent  {

  baseCurrency: string = '';
  targetCurrency: string = '';
  amount: number = 0;
  convertedAmount: number = 0;

  currencies = ['USD', 'EUR', 'GBP', 'JPY' , 'INR']; // Add more currencies as needed

  constructor(private http: HttpClient) {}

  convertCurrency() {
    if (!this.baseCurrency || !this.targetCurrency || !this.amount) {
      return; // Exit if any field is empty
    }

    const url = `https://api.exchangerate-api.com/v4/latest/${this.baseCurrency}`;

    this.http.get(url).subscribe((data: any) => {
      const rates = data.rates;
      const conversionRate = rates[this.targetCurrency];

      if (conversionRate) {
        this.convertedAmount = this.amount * conversionRate;
      } else {
        console.error('Invalid target currency');
      }
    }, (error) => {
      console.error('Failed to fetch exchange rates', error);
    });
  }

}
