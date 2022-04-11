const calc = () => {
    return 4*3;
}

const printCalc = (callback) => {
    console.log(callback());
}

printCalc(calc);