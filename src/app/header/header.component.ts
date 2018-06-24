import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // tslint:disable-next-line:no-output-rename
  @Output('navigateApp')
  navigate = new EventEmitter<{ recipesSelected: boolean }>();

  constructor() {}

  ngOnInit() {}

  onNavigation(selectRecipes: boolean) {
    this.navigate.emit({ recipesSelected: selectRecipes });
  }
}
