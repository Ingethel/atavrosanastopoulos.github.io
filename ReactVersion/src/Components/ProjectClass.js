import React, {Component} from 'react';
import Header from '../Atoms/ProjectsClassHeader';
import Container from './ProjectsClassContainer'

class ProjectsClass extends Component {

	constructor(props){
		super(props);
		this.state = {
			projectClass: this.props.projectClass,
			index: this.props.index,
			show: this.props.flag			
		}
	}

	onClick = (event) => {
		this.setState({show: !this.state.show});
	}

	render(){
		return (
		<div>
			<div onClick={this.onClick}>
				<Header 
					header={this.state.projectClass.header} 
					index={this.state.index} 
					onClick={this.onClick}
				/>
			</div>
			<Container 
				projectList = {this.state.projectClass.projects} 
				index={this.state.index} 
				flag={this.state.show}
			/>
		</div>
		);
	}
}

export default ProjectsClass;