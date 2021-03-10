import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
  constructor() {}

  range(start: number, end: number): number[] {
    [...Array(50).keys()].map((el) => el + 1);
    return [...Array(end).keys()].map((el) => el + start);
  }
}
