import { CreateArticleStateInterface } from '../../../../create-article/store/types/create-article-state.interface';
import { ArticleInterface } from '../../../../shared/types/article-interface';

export interface EditArticleStateInterface extends CreateArticleStateInterface {
  isLoading: boolean;
  article: ArticleInterface | null;
}
