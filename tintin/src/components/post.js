import React, {Component} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
class post extends Component{
	// state = {

	// 	//id:null
	// 	post:null
	// }
	// componentDidMount(){
	// 	console.log(this.props)
	// 	let id = this.props.match.params.post_id; //grabbing the id of the posts
	// 	axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
	// 	.then(res =>{
	// 		this.setState({
	// 			post:res.data
	// 		})
	// 		console.log(res)
	// 	})




	// 	// this.setState({
	// 	// 	id:id
	// 	// })
	// }
	render(){
		//create a jsx for the post
		const post = this.props.post ? (
			<div className="post">
			<h4 className="center">{this.props.post.title}</h4>
			<p>{this.props.post.body}</p>
			</div>


			) :(

				<div className ="center">Loading Post>>></div>


			)



		return(


			<div className="container">
				{post}
			</div>
		)
	}

}

const mapStateToProps = (state, ownProps) =>{
	let id = ownProps.match.params.post_id;
	return {
		post: state.posts.find(post => post.id === id)//the find method is used to find an indvidual post

	}
}

export default connect(mapStateToProps)(post)