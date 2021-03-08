import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RegisterEffect } from './register-effect.service';

describe('RegisterEffects', () => {
  let actions$: Observable<any>;
  let effects: RegisterEffect;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterEffect, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(RegisterEffect);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
