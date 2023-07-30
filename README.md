# JS 4주차 과제
#### 1. 정적메서드를 사용 예시 또는 언제 사용하는지
```
class Person{
	static weight = 100;
	static firstName ="choi";
	static school(){
	 console.log("대림대학교");
	} 
	static joke() {
	 console.log('악');
	   }
	static {
	 console.log('choi jin young');
	   }
   }
	
   class Arbeit extends Person{
	 static location ='PC방';
	 static joke(){
	   super.joke();
	   console.log("알바@#$");
	 }
   }
	
   console.log(Person.weight);
   console.log(Person.joke());
   
   console.log(Arbeit.location);
   console.log(Arbeit.joke());
	
   const person = new Person();
   console.log(person.joke()); //Uncaught TypeError
   ```
코드에서 한 번만 사용되는데 인스턴스를 생성하면 추가적인 데이터 공간이 낭비되기도 하고, 코드 길이가 조금 더 길어진다. 여기서 static을 사용하면 따로 인스턴스를 만들지 않고 메서드를 실행할 수 있다는 점에서 좋다.

#### 2. 코드작성
```
class Kpop {
	constructor(){
		this.singerName = '';
		this.releaseDate = '';
		this.members = '';
	} 
	set(value) {
		[this.singerName, this.releaseDate, this.members] = value.split(' ');
	}
	reset(value) {
		this.singerName = '';
		this.releaseDate = '';
		this.members = '';
		return `${this.singerName} ${this.releaseDate} ${this.members}`
	}
}
const k_pop = new Kpop('가수 이름', '발매일', '멤버 수');

class ETA extends Kpop {
	constructor (singerName, releaseDate, members, leaderName){
		super(singerName, releaseDate, members)
		this.singerName = singerName;
		this.releaseDate = releaseDate;
		this.members = members;
		this.leaderName = leaderName;
	}
	sing(){
		console.log('We can go wherever you like')
	}
}
const eta = new ETA('ETA','2023.07.21','5', 'minji');

k_pop.set = 'singerName releaseDate members';
console.log(k_pop);
eta.sing();
console.log(eta);
console.log(eta.reset);
```
