const obj = {
	a: 1,
	b: 2,
	c: 3,
}

const {a, b} = obj;
console.log(a,b) // 1 2

const {x = 4} =obj;
console.log(x) // 4

const {c: test} = obj;
console.log(test) // 3

const {c, ...rest} = obj;
console.log(c, rest)