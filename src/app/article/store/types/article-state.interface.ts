import { ArticleInterface } from '../../../shared/types/article-interface';

export interface ArticleStateInterface {
  isLoading: boolean;
  data: ArticleInterface | null;
  errors: string | null;
}
