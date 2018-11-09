import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'network-error-repro';

  constructor(
    private httpClient: HttpClient
  ) {}

  doRequest() {
    this.httpClient.get('/foo').subscribe(() => {}, error => console.error(error.message));
  }
}
