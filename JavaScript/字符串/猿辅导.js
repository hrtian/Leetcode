// str = "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33"

function formate(str) {
    let arr = str.split(" ");
    let count = 0, level = 1;
    res = [[str[0]]];
    arr.shift();
    while (arr.length) {
        level = count = level << 1;
        res.push([]);
        while (count-- && arr.length) {
            res[res.length - 1].push(arr.shift());
        }
    }
    return res;
}

function treeBoard(tree) {
    if(tree.length <2) {
        console.log(...tree);
        return;
    } else if(tree.length <= 2){
        console.log([...tree[0], ...tree[1]]);
        return;
    }
	let left = [], right = [];
    let bottom = res[res.length -1];
    let mid = res[res.length -2].slice(res[res.length-1].length >> 1, res[res.length -2].length - 1);
	for (let i = 0; i < res.length - 1; i++) {
		left.push(res[i][0]);
	}
    for(let i = 1; i < res.length -1; i++) {
        right.unshift(res[i][res[i].length -1])
    }
    console.log([...left, ...bottom, ...mid, ...right]);
}