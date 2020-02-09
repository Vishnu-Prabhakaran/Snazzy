import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam =>
  createSelector([selectCollections], collections =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

// !! - shot cut to get the boolean value (double bang)
// Example: !!0 = false, !!'' = false, !!null = false, !!{} true (empty object)
export const selectorIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
)