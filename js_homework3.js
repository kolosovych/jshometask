function pow(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result = result * x;
    }
    return result;
}

const t = pow(7, 3);
console.log(t); 



