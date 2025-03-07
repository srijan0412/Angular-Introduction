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
  userName = "";
  nameError = "";

  onInput() {
    const nameRegix = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if (nameRegix.test(this.userName)) {
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Incorrect!"
  }

  onClick() {
    window.open(this.url);
  }
}
