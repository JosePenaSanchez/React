import React, {Component} from 'react';
import About from './About.js'
import './Body.css';



class Body extends Component{

	render(){
		return(
			<div>
				<div className='body-container'>
					<p>Book Me!</p>
				</div>
				<About/>
			</div>
		);
	}
}

export default Body;