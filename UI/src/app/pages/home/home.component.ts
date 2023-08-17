import {Component, inject, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private readonly _translate: TranslateService = inject(TranslateService);
  ngOnInit(): void {
  }

  onBook() {
    Swal.fire({
      icon: 'info',
      html: this._translate.instant('StartPage.Book.SweetAlertText'),
    })
  }
}
