import { AuthStateInterface } from '../../auth/types/auth-state.interface';
import { FeedStateInterface } from '../modules/feed/store/types/feed-state.interface';
import { PopularTagsStateInterface } from '../modules/popular-tags/types/popular-tags-state.interface';
import { ArticleInterface } from './article-interface';
import { CreateArticleStateInterface } from '../../create-article/store/types/create-article-state.interface';
import { EditArticleStateInterface } from '../../edit-article/components/store/types/edit-article-state.interface';
import { SettingsStateInterface } from '../../settings/store/types/settings-state.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  popularTags: PopularTagsStateInterface;
  article: ArticleInterface;
  createArticle: CreateArticleStateInterface;
  editArticle: EditArticleStateInterface;
  settings: SettingsStateInterface;
}
