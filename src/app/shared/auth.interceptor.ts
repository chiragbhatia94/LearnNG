import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

import * as fromAuth from '../auth/store/auth.reducers';
import { AppState } from '../store/app-reducers';

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store
      .select('auth')
      .pipe(take(1))
      .pipe(
        switchMap((authState: fromAuth.State) => {
          const newReq = req.clone({
            params: req.params.append('auth', authState.token)
          });
          return next.handle(newReq);
        })
      );
  }
}
