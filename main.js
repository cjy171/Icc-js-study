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