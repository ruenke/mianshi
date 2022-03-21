var twoNumSum = function(a, b) {
    var a = a + ""
    var b = b + ""
    var arr1 = a.split("")
    var arr2 = b.split("")
    var sums = []
    var stack = []
    var len = Math.max(arr1.length, arr2.length)
    console.log(arr1, arr2)
    for (var i = 0; i < len; i++) {
        if (!arr1.length || !arr2.length) {
            break;
        } else {
            var p1 = parseInt(arr1.pop())
            var p2 = parseInt(arr2.pop())
            var ps = p1 + p2 + (stack.pop() || 0);
            let j;
            console.log(ps)
            if (ps > 9) {
                stack.push(1)
                j = ps - 10
            }
            console.log(j)
            sums.unshift(j !== undefined ? j : ps)
        }

    }
    console.log(arr1, arr2, sums)
    return arr1.join("") + arr2.join("") + sums.join("")
}

twoNumSum("123","458")

// 输出结果:
// ['1', '2', '3'] (3) ['4', '5', '8']
// 11
// 1
// 8
// undefined
// 5
// undefined
// [] [] (3) [5, 8, 1]
// '581'