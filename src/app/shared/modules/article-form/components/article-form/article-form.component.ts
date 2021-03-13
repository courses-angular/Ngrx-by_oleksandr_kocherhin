import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticleInputInterface } from '../../../../types/article-input.interface';
import { BackendErrorsInterface } from '../../../../types/backend-errors.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'yl-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  @Input('initialValues') initialValuesProps: ArticleInputInterface;
  @Input('isSubmitting') isSubmittingProps: boolean;
  @Input('errors') errorsProps: BackendErrorsInterface | null;
  @Output('articleSubmit')
  articleSubmitEvent: EventEmitter<ArticleInputInterface> = new EventEmitter<ArticleInputInterface>();

  articleForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.articleForm = this.fb.group({
      title: [this.initialValuesProps.title],
      description: [this.initialValuesProps.description],
      body: [this.initialValuesProps.body],
      tagList: [this.initialValuesProps.tagList.join(' ')],
    });
  }
  onSubmit(): void {
    this.articleSubmitEvent.emit(this.articleForm.value);
  }
}
