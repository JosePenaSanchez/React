import React, {Component} from 'react';
import './Header.css';
import SteamerBanner from '../images/SteamersBanner.png';
import image0 from '../images/steamer-cafe-0.jpg';
import image1 from '../images/steamer-cafe-1.jpg';
import image2 from '../images/steamer-cafe-2.jpg';
import image3 from '../images/steamer-cafe-3.jpg';

/*use carosoul bootstrap*/


class Header extends Component{
	
	constructor(){
		super();
		this.state = {active: [true,false,false,false]};
		this.changeImage = this.changeImage.bind(this);
		
	}


	componentDidMount(){
		this.timer = setInterval(this.changeImage(), 1000);
	}

	componentWillUnmount(){
		clearInterval(this.timer);
	}
	
	changeImage(){
		
		//getting initial 'true' index. must be changed to false
		var i = this.state.active.indexOf(true);
		
		//setting j to index that should turn from false to true.
		var j =  (i + 1) % 4;
		
		
		//creating clone of states
		var cloneArray = this.state.active;
		
		//updating cloneArray states
		cloneArray[i] = !cloneArray[i];
		cloneArray[j] = !cloneArray[j];
		
		//updating states
		this.setState({active: cloneArray});
		//console.log("called");
	}


	render(){	
		return(
			<div className="banner-container">
				<img className='banner-image' src={SteamerBanner} alt='Steamer Banner'/>
				<p>Quality Coffee, Memorable Events</p>
				<button>Hello</button>
				
				<div className='stage'>
					<img src={image0} alt='image1' className={this.state.active[0].toString()}/>
					<img src={image1} alt='image2' className={this.state.active[1].toString()}/>
					<img src={image2} alt='image3' className={this.state.active[2].toString()}/>
					<img src={image3} alt='image4' className={this.state.active[3].toString()}/>									
				</div>
			</div>
		);
	}
}

export default Header;