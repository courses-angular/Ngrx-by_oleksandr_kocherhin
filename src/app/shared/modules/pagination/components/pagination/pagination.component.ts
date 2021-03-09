import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'yl-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input('articlesCount') articlesCountProps: number;
  @Input('limit') limitProps: number;
  @Input('url') urlProps: string;
  @Input('currentPage') currentPageProps: number;
  constructor() {}

  ngOnInit(): void {}
}
