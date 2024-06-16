export const addOnManager = (body, type) => {
    const result = {
        service: {addOn: "Online service", price: 0, checked: true, type: type ? "mo" : "yr"},
        storage: {addOn: "Larger storage", price: 0, checked: true, type: type ? "mo" : "yr"},
        customize: {addOn: "Customizable profile", price: 0, checked: true, type: type ? "mo" : "yr"}
    };
   
    body.service === true ? result.service.price = type ? 1 : 10 : result.service.checked = false;
    body.storage === true ? result.storage.price = type ? 2 : 20 : result.storage.checked = false;
    body.customize === true ? result.customize.price = type ? 2 : 20 : result.customize.checked = false;
    
    sessionStorage.setItem("userAddOns", JSON.stringify(result));
}