var filter = function(arr, fn) {
    const newarr = []; 
    for(let i = 0; i < arr.length; i++){
        fn(arr[i], i) && newarr.push(arr[i]);
    }
    return newarr;
};