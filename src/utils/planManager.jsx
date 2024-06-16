export const planManager = (plan, type) => {
    const result = {
        plan,
        price: 0,
        type: type ? "Monthly" : "Yearly"
    };
   
    if (plan === "Arcade") {
        result.plan = "Arcade";
        type ? result.price = 9 : result.price = 90; 
    } else if (plan === "Advanced") {
        result.plan = "Advanced";
        type ? result.price = 12 : result.price = 120;
    } else {
        result.plan = "Pro";
        type ? result.price = 15 : result.price = 150;
    }
    
    sessionStorage.setItem("userPlan", JSON.stringify(result));
};