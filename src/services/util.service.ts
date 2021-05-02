export type QuantityParams = {
    quantityInput: string;
    quantity: number,
    quantityUnit: string;
}
export function quantityInputConversion(quantityInput: string): QuantityParams{
    let quantity, unit;
    const quantityMatch = quantityInput.match(new RegExp(/\d+/g));
    const unitMatch = quantityInput.match(new RegExp(/[a-zA-Z]+/g));
    if (quantityMatch) {
        quantity = Number(quantityMatch[0]);
    }
    if (unitMatch) {
        unit = unitMatch[0];
    }
    return {
        quantityInput,
        quantity: quantity ? quantity : 0,
        quantityUnit: unit ? unit : ""
    }
}
