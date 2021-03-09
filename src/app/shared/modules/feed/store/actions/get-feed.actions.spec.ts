import * as fromGetFeed from './get-feed.actions';

describe('loadGetFeeds', () => {
  it('should return an action', () => {
    expect(fromGetFeed.loadGetFeeds().type).toBe('[GetFeed] Load GetFeeds');
  });
});
