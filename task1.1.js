function getAllArrayNumbers(){
let arr = [5,9,852,8526,3962,9596,95995,996,8,959,0,94,NaN,'rrr',9,9,984174,548,8,84];
let even = 0;
let odd = 0;
let zeros = 0;
for(let i = 0; i<arr.length; i++){
    if(typeof(arr[i]) !== 'number'){
        continue
    }
    else{
        if(isNaN(arr[i])){
            continue
        }
        else{
            if(arr[i]==0){
                zeros += 1;
            }
            else{
                if(arr[i]%2==0){
                    even += 1;
                }
                else{
                    odd += 1;
                };
            };
        };
    };
};
console.log(`количество четных чисел в массиве arr ${even}`);
console.log(`количество не четных чисел в массиве arr ${odd}`);
console.log(`количество нулей в массиве arr ${zeros}`);
}

getAllArrayNumbers();
