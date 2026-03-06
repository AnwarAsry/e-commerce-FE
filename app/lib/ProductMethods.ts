export const calcDiscount = (compareAtPrice: number, price: number): number => {
    return Math.round(((compareAtPrice - price) / compareAtPrice) * 100);
}