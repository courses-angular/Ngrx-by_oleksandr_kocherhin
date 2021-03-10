import { Component, Input, OnInit } from '@angular/core';
import { PopularTagType } from '../../../types/popular-tag.type';

@Component({
  selector: 'yl-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss'],
})
export class TagListComponent implements OnInit {
  @Input('tags') tagsProps: PopularTagType[];
  constructor() {}

  ngOnInit(): void {}
}
