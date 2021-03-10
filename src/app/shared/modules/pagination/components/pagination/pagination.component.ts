import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from '../../../../services/utils.service';

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
  pagesCount: number = null;
  pages: number[] = [];
  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.articlesCountProps / this.limitProps);
    this.pages = this.utilsService.range(1, this.pagesCount);
    console.log('Pages', this.pages);
  }
}
