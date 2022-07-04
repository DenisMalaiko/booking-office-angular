import {Component, OnInit} from '@angular/core';

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private readonly translateService: TranslateService,
  ) {
  }

  public ngOnInit(): void {
    this.translateService.use('uk');
  }
}
