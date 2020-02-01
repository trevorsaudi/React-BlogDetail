const initState={
	posts :[
		{
	id: '1',
	title: 'delectus aut autem',
	body: 'Excepteur proident tempor est in fugiat non ut elit.'
	},
	{
	id: 2,
	title: "quis ut nam facilis et officia qui",
	body: 'Excepteur proident tempor est in fugiat non ut elit.'
	},
	{
	id: 3,
	title: "quis ut nam facilis et officia qui",
	body: 'Excepteur proident tempor est in fugiat non ut elit.'
	},
	{
	id: 3,
	title: "quis ut nam facilis et officia qui",
	body: 'Excepteur proident tempor est in fugiat non ut elit.'
	}
	]


}

const rootReducer = (state=initState, action) =>{
	return state;

}

export default rootReducer