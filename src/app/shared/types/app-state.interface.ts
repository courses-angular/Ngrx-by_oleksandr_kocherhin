import { AuthStateInterface } from '../../auth/types/auth-state.interface';
import { FeedStateInterface } from '../modules/feed/store/types/feed-state.interface';
import { PopularTagsStateInterface } from '../modules/popular-tags/types/popular-tags-state.interface';
import { ArticleInterface } from './article-interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  popularTags: PopularTagsStateInterface;
  article: ArticleInterface;
}
