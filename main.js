const user = {
	name: '최',
	age: 21,
}

function getTel({tel = "010-"}){
	return tel
}

console.log(getTel(user));
