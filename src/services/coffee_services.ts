export const getCoffee = (name = 'Latte') => {
    return {
        drinkType: 'Coffee',
        name,
    };
}

export const getCoffeeLover = () => {
    return 'I like coffee!';
}