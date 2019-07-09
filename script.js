
var arr = ['Beknazar', 'sdjcns','qwdsvr', 'skjdcbk', 'hjkgfd', 'skjdcbk','xcbxfth', 'sdjcns','dfgbdg', 'skjdcbk'];

function squash(arr){
    var tmp = [];
    for(var i=0; i < arr.length; i++){
        if (tmp.indexOf(arr[i]) == -1){
             tmp.push(arr[i]);
        }
    }
    return tmp;
}
console.log(squash(arr));


var arr = [1,2,2,3,5,4,4,4,6,6,8,8,7,7,9,10];

function squash(arr){
    var tmp = [];
    for(var i = 0; i < arr.length; i++){
        if(tmp.indexOf(arr[i]) == -1){
            tmp.push(arr[i]);
        }
    }
    return tmp;
}

console.log(squash(arr));
