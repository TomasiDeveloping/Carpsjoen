import {Component, inject} from '@angular/core';
import {ThemeService} from "./services/theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Carpsjön';

  private readonly theme: ThemeService = inject(ThemeService);

  public currentTheme(): string {
    return this.theme.current;
  }

  selectTheme(value: string) {
    this.theme.current = value;
  }
}
