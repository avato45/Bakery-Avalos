export const SELECTED_PRODUCT = "SELECTED_PRODUCT"
export const FILTERED_PRODUCT = "FILTERED_PRODUCT"

export const selectedProduct = id => ({
    type: SELECTED_PRODUCT,
    categoryId: id,
})

export const filteredProduct = id => ({
    type: FILTERED_PRODUCT,
    categoryId: id,
})