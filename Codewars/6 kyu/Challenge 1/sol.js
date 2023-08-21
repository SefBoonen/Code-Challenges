// Link https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

function deleteNth(arr, n) {
    console.log(arr)
    const set = new Set(arr);
    let count = [];
    const iterator = set.values();

    for (let i = 0; i < set.size; i++) {
        let cur = iterator.next().value;
        count[i] = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] == cur) {
                count[i]++;
            }
            console.log(`count = ${count[i]} n = ${n} curr = ${cur}`);
            if (count[i] > n) {
                console.log("splice")
            }
        }
    }
    console.log(count)
    console.log(arr)
    return arr
}