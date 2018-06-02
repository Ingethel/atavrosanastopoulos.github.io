import React, {Component} from 'react';

export default class RectDivision extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			points: this.props.points,
			maxX: this.props.width,
			maxY: this.props.height,
			update: () => this.updateDims()
		}
	}
	
	updateDims(){
		console.log("received")
		this.setState({
			maxX: this.props.width,
			maxY: this.props.height
		})
	}

	componentWillReceiveProps(nextProps) {
	    if(this.props.width !== nextProps.width)
	    {
	        this.state.update();
	    }
	} 

	componentDidMount(){
		this.draw(this.state.points);
	}

	componentDidUpdate(){
		this.draw(this.state.points);
	}

	createRects = (point0, point1, point2) => {
		let array = [ 
				[point0, point1], 
				[[point1[0], point0[1]], [point2[0], point1[1]]], 
				[point1, point2],
				[[point0[0], point1[1]],	[point1[0], point2[1]]]
				];
		return array;
	}

	drawNewRect = (drawHandler, point0, point1, point2) => {
		drawHandler.moveTo(point1[0], point0[1]);
		drawHandler.lineTo(point1[0], point2[1]);
		drawHandler.moveTo(point0[0], point1[1]);
		drawHandler.lineTo(point2[0], point1[1]);
	}

	draw = (points) => {
		let rects = [];
		const bck = this.refs.canvas.getContext('2d');
		bck.clearRect(0,0, this.state.maxX, this.state.maxY);
        bck.beginPath();
		for(let i = 0; i < points.length; i++){
			if(rects.length === 0){
				this.drawNewRect(bck, [0,0], points[i], [this.state.maxX, this.state.maxY])
				rects.push(...this.createRects([0,0], points[i], [this.state.maxX, this.state.maxY]));
			} else {
				for(let k = 0; k < rects.length; k++){
					if(points[i][0] >= rects[k][0][0] && points[i][0] <= rects[k][1][0]){
						if(points[i][1] >= rects[k][0][1] && points[i][1] <= rects[k][1][1]){
							this.drawNewRect(bck, rects[k][0], points[i], rects[k][1])
							rects.push(...this.createRects(rects[k][0], points[i], rects[k][1]));
							rects.splice(k,1);
							break;
						}		
					}
				}
			}
		}
		bck.strokeStyle = "#007bff";
		bck.stroke();		
	}

	render(){
		return(
			<canvas
				ref="canvas" 
				width = {this.state.maxX} 
				height = {this.state.maxY}
			/>
		);
	}
}