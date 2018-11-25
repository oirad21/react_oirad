// with async
export function addNumber(number){
    return {
        type: "MATH_ADD",
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(number);
            }, Math.round(Math.random() * 1000));
        })
    };
}

// without async
export function subtractNumber(number){
    return {
        type: "MATH_SUB",
        payload: number
    };
}
