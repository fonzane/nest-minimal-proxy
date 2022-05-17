import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@nest-minimal-proxy/api-interfaces';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'nest-minimal-proxy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  hello$ = this.http.get<Message>('http://localhost:3333/hello');
  constructor(private http: HttpClient) {}

  async ngOnInit(): Promise<void> {
    
  }
}
