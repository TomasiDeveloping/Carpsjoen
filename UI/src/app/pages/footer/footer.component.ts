import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public currentYear: number = new Date().getFullYear();

  onInstagram() {
    window.open('https://www.instagram.com/_freilauf/', '_blank');
  }

  onYoutube() {
    window.open('https://youtu.be/rtg1ZuijzXM', '_blank');
  }
}