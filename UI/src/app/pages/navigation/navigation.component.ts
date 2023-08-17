import {Component, inject, OnInit} from '@angular/core';
import {ThemeService} from "../../services/theme.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isShown: boolean = false;
  userTheme = '';
  languageList = [
    {code: 'de', label: 'Deutsch'},
    {code: 'en', label: 'English'},
    {code: 'fr', label: 'Français'},
    {code: 'it', label: 'Italiano'}
  ];
  siteLanguage = 'Deutsch';
  private readonly theme: ThemeService = inject(ThemeService);
  private readonly translate = inject(TranslateService);

  public currentTheme(): string {
    return this.theme.current;
  }

  toggleTheme() {
    this.isShown = false;
    this.userTheme = this.userTheme !== 'light' ? 'light' : 'dark';
    this.theme.current = this.userTheme;
  }

  ngOnInit(): void {
    this.userTheme = this.currentTheme();
    this.translate.addLangs(['en', 'de', 'fr', 'it']);
    this.translate.setDefaultLang('de');
  }

  changeSiteLanguage(code: string) {
    this.isShown = false;
    this.translate.use(code);
    this.siteLanguage = this.languageList.find((x) => x.code === code)?.label!;
  }
}
