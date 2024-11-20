export const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 0, // No decimal points
    }).format(price);
};
