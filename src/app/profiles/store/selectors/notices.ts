import { ProfilesState } from 'app/profiles/store/reducers';
import { createSelector } from 'reselect';
import {
  getIndexedOffset,
  isCollectionLoading
} from 'app/store/collection/selectors';
import { ContributorId } from 'app/lmem/contributor';

export const getNoticesCollection = (state: ProfilesState) => state.notices;

export const areNoticesLoading = createSelector(
  [getNoticesCollection],
  noticesCollection => isCollectionLoading(noticesCollection)
);
export const getNotices = createSelector(
  [getNoticesCollection],
  noticesCollection => noticesCollection.items
);

export const getNoticesOffset = createSelector(
  [
    getNoticesCollection,
    (state: ProfilesState, contributorId: ContributorId) => contributorId
  ],
  getIndexedOffset
);
