import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as AuthActions from '../../auth/store/auth.actions';
import * as fromAuth from '../../auth/store/auth.reducers';
import { DataStorageService } from '../../shared/data-storage.service';
import { AppState } from '../../store/app-reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor(
    private dataStorageService: DataStorageService,
    public store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(event => {
      console.log(event);
    });
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }
}
