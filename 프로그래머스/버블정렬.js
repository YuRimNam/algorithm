function sort(arr) {
    let result = arr;
    let temp = 0;

    for (let i=0; i<result.length - 1; i++) {
        for (let j=0; j<result.length - i; j++) {
            if (result[j] > result[j+1]) {
                temp = result[j];
                result[j] = result[j+1];
                result[j+1] = temp;
            }
        }
    }

    return result;
}