export const filterAddOns = (addOns) => {
    let result = [];

    addOns.service.checked ? result.push(addOns.service) : null;
    addOns.storage.checked ? result.push(addOns.storage) : null;
    addOns.customize.checked ? result.push(addOns.customize) : null;
    
    return result;
};