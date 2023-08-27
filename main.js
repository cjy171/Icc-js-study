const getMovies = movieName =>{
	return new Promise((resolve, reject) => {
		fetch(`http://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
			.then(res => res.json())
			.then(res => {
				console.log(res)
				if(res.Response === 'False'){
					reject(res.Error)
				}
				resolve(res)
	})
	})
}


const wrap = async () => {
	try{
		const movies = await getMovies(avengers)
		console.log('영화 목록:' , movies)
	}catch(error){
		console.error('에러 발생:' , error)
	}finally{
		console.log('END')
	}
}

wrap()