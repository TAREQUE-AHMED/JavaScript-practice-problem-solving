function woodCalculation(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 60;
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;
    const total = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return total;
}
const result = woodCalculation(7, 10, 5);
console.log(result);