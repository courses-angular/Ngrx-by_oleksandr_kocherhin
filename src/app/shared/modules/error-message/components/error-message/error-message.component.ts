import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'yl-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {
  @Input('errorMessage') errorMessageProps: string = 'Something went wrong';
  constructor() {}

  ngOnInit(): void {}
}
