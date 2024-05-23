function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.random() * (max - min) + min;
}

function aumenta(n){
    n *= 10;
    // console.log(n)
    return n;
}

function quadruplica(n){
    n *= 4;
    // console.log(n)
    return n;
}

function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

function sequencia(func){
    return new Promise((resolve, reject) => {
        if(typeof(func) !== 'function') {
            reject (new Error('Apenas funções devem ser passadas como parâmetro'))
            return
        }
        resolve(func())
    })
}
