import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Hello from BridgeLabz';
  imgUrl = "../assets/BL_logo.jpg";
  url = "https://bridgelabz.com";
  userName: string = "";


  onClick() {
    window.open(this.url);
  }
}
