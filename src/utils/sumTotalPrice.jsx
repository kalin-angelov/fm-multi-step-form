export const sumTotalPrice = (planPrice, addOns) => {
    let totalPrice = 0 + planPrice;

    addOns !== undefined ? addOns.map(addOn => totalPrice += addOn.price) : null;

    return Number(totalPrice);
};