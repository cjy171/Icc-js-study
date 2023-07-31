# JS 5주차 과제
### 숙제 1

```
const numbers = [4,102,2,30,13,20]

numbers.push(32);
console.log(numbers)

const sum = numbers.reduce((acc, cur) => {
	return acc + cur
},0)
console.log(sum)
```

### 숙제 2
```
const numbers = [4,102,2,30,13,20]

numbers.push(32);
console.log(numbers)

numbers.sort((a,b) => {
	return a-b;
})
console.log(numbers)

numbers.forEach(numbers => console.log(numbers));
```

### 숙제 3
```
const users = [
	{name: '윤병현', age: 24, class: '1반'},
	{name: '문채현',  age: 22, class: '1반'},
	{name: '최진영',  age: 21, class: '2반'},
  {name: '이윤수', age: 20, class: '2반'}
]

const userData = users.filter(users => {
	return users.age > 21 && users.class === '1반'
})
console.log(userData)

const userData1 = users.map(user => {
	if(user.name === '윤병현'){
		return{
			...user,
			email: "ywy040150@gmail.com",
			tel: '010-1234-5678'
		}
	} else if(user.name === '문채현'){
		return{
			...user,
			email: "moon1111@gmail.com",
			tel: '010-1111-1111'
		}
	} else if(user.name === '최진영'){
		return{
			...user,
			email: "choi2222@gmail.com",
			tel: '010-2222-2222'
		}
	} else if(user.name === '이윤수'){
		return{
			...user,
			email: "yoon3333@gmail.com",
			tel: '010-3333-3333'
		}
	}
	
})

console.log(userData1)
```
