import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todoリスト';
  messages: any[] = [];
  id: number[] = [];


  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.LoadMessage();
  }

  LoadMessage() {
    const url = 'https://dev-sugaapp-be.sakuramobile.jp/api/v1/messages';
    this.httpClient.get(url).subscribe({
      next: (response: any) => {
        this.messages= response;
        console.log(response);
      }
  })
  }

    public postMessageContent(message: string): void {
    const url = 'https://dev-sugaapp-be.sakuramobile.jp/api/v1/messages';
    this.httpClient.post(url, {message}).subscribe({
      next: (response: any) => {
        this.LoadMessage();
        this.clearInput();
      }
    })
  }

  private clearInput(): void {
    const found =
  <HTMLInputElement>document.getElementById('message');
    if(found) {
      found.value='';
    }
  }

}
