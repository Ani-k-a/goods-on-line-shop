export const selectProducts = state => state.products.items;
export const selectCategories = state => state.products.categories;


export const selectIsLoading = state => state.products.isLoading;
export const selectError = state => state.products.error;

export const selectFilteredProducts = state => state.products.items; // дописать