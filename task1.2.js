function checkingForAPrimeNumber(a){
    let typeNum = `простое`;
    if (a<2 || a>1000){
        typeNum = `не подходит`;
    }
    else{
        for(let i=2; i<a; i++){
            if(a%i!=0){
                continue
            }
            else{
                typeNum = `составное`;
                break
            }
        }
    }
    return typeNum;
}

console.log(`введенное число ${checkingForAPrimeNumber(666)}`);