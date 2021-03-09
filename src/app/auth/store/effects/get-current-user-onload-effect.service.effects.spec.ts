import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GetCurrentUserOnloadEffect.ServiceEffects } from './get-current-user-onload-effect.service.effects';

describe('GetCurrentUserOnloadEffect.ServiceEffects', () => {
  let actions$: Observable<any>;
  let effects: GetCurrentUserOnloadEffect.ServiceEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GetCurrentUserOnloadEffect.ServiceEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(GetCurrentUserOnloadEffect.ServiceEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
