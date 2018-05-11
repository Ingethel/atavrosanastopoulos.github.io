import React, {Component} from 'react';
import Image from '../Atoms/CardImage';
import Title from '../Atoms/CardTitle';
import Text from '../Atoms/CardText';
import Tags from '../Atoms/CardTags';

class Card extends Component {

	constructor(props){
		super(props);
		this.state = {
			extended: this.props.flag,
			indexClass: this.props.indexClass,
			indexProject: this.props.indexProject,
			project: this.props.project
		}
	}

	getCardStyle = () => {
		return {
			width: this.state.extended ? "100%" : "18rem", 
			display: "flex",
			flexFlow: "row wrap"		
		};
	}

	getCardTextStyle = () =>{
		return {
			margin: "10px",
			minWidth: "55%",
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-between",
			wordWrap: "break-word"
		};
	}
	

	onClick = (event) => {
		this.setState({extended: !this.state.extended});
	}

	render(){
		return (
			<div
				id = {`${this.state.indexClass}_${this.state.indexProject}`}
				className = "box-shadow anim-button"
				style = {this.getCardStyle()}
				onClick = {this.onClick}
			>
				<Image 
					imgURL = {process.env.PUBLIC_URL + (this.state.extended ? this.state.project.image2 : this.state.project.image)}
					imgWidth = {this.state.extended ? "400px" : "100%"}
					imgHeight = {this.state.extended ? "" : "200px"}
				/>
				<div 
				style={this.getCardTextStyle()}
				>
					<Title title = {this.state.project.title} />
					<Text text = {this.state.extended ? this.state.project.overview : this.state.project.summary} />
					<Tags tags = {this.state.project.tags} />
				</div>
			</div>
		);
	}
}

export default Card;