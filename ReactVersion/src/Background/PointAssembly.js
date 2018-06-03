import React, {Component} from 'react';

class CanvasPoint {
	constructor(X = 0, Y = 0, rad = 1, focused = false){
		this.X = X;
		this.Y = Y;
		this.radius = rad;
		this.focused = focused;
	}
}

export default class PointAssembly extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			points: [],
			edges: [],
			maxEdge: 0,
			minEdge: 1000,
			maxX: this.props.width,
			maxY: this.props.height,
			recording: this.props.cursorState,
			movingAnchor: false,
			movingArea: false,
			selectDist: this.props.selectDist > 0 ? this.props.selectDist : 10,
			update: () => this.updateDims()
		}
	}
	
	componentWillReceiveProps = (nextProps) => {
	    if((this.props.width !== nextProps.width) || (this.props.height !== nextProps.height))
	    {
	        this.state.update();
	        return;
	    }
		if((this.props.cursorState !== nextProps.cursorState)){
			this.setState({recording: nextProps.cursorState});
			if(!this.state.recording){
				this.setState({
					movingAnchor: false,
					movingArea: false
				})
			}
			return;
		}
		if((this.props.clickPoint !== nextProps.clickPoint)){
			this.onClick(nextProps.clickPoint);
		}
	} 

	componentDidMount = () => {
		this.draw(this.state.points);
	}

	componentDidUpdate = () => {
		this.draw(this.state.points);
	}

	updateDims = () => {
		this.setState({
			maxX: this.props.width,
			maxY: this.props.height
		})
	}

	onClick = (point) => {
		let [success, focused] = this.getFocusedTarget();
		if(success){
			this.onFocusedTarget(focused, point);
		} else {
			let [found, focused] = this.tryFocusTarget(point);
			if(found){
				focused.focused = true;
			} else {
				if(!this.state.recording)
					this.newEntry(point);	
			}
		}
		this.revalidateEdges();
		
	}

	newEntry = (point) => {
		let points = this.state.points;
		points.push(new CanvasPoint(point[0], point[1], 100, true));
		this.setState(points);
	}

	revalidateEdges = () => {
		let edges = [];
		let maxEdge = 0, minEdge = 1000;
		for(let i = 0; i < this.state.points.length; i++){
			for(let j = 0; j < this.state.points.length; j++){
				if(i !== j){
					let pA = [this.state.points[i].X, this.state.points[i].Y];
					let pB = [this.state.points[j].X, this.state.points[j].Y]; 
					let dist = this.getDist(pA, pB);
					if(dist <= this.state.points[i].radius){
						let newEdge = [pA, pB];
						if(!this.findEdge(edges, newEdge)){
							edges.push(newEdge);
							if(maxEdge < dist) maxEdge = dist;
							if(minEdge > dist) minEdge = dist;
						}
					}
				}
			}
		}
		this.setState({
			edges: edges,
			maxEdge: maxEdge,
			minEdge: minEdge
		});
	}

	getFocusedTarget = () => {
		let focusedTarget = this.state.points.filter(x => x.focused === true);
		if(focusedTarget.length === 0){
			return [false, null]
		} else {
			return [true, focusedTarget[0]];
		}
	}

	tryFocusTarget = (click) => {
		let focusedTarget = this.state.points.filter(t => this.getDist([t.X, t.Y], click) <= this.state.selectDist);
		if(focusedTarget.length === 0){
			return [false, null]
		} else {
			return [true, focusedTarget[0]];
		}
	}

	onFocusedTarget = (target, click) => {
		var setAnchorStates = () => {
			if (dist <= this.state.selectDist){
				this.setState({
					movingAnchor: true,
					movingArea: false
				});
				return true;
			} else if (Math.abs(dist - target.radius) <= this.state.selectDist){
				this.setState({
					movingAnchor: false,
					movingArea: true
				});
				return true;
			}
			return false;
		}
		let dist = this.getDist([target.X, target.Y], click);
		if(this.state.recording){
			if(this.state.movingAnchor){
				target.X = click[0];
				target.Y = click[1];
			} else if(this.state.movingArea){
				target.radius = dist;
			} else setAnchorStates();
		} else {
			if (setAnchorStates()){}
			else target.focused = false;
		}
	}

	getDist = (pointA, pointB) => {
		return Math.sqrt(Math.pow((pointA[0] - pointB[0]), 2) + Math.pow((pointA[1] - pointB[1]), 2));
	}

	comparePoints = (pointA, pointB) => {
		return (pointA[0] === pointB[0] && pointA[1] === pointB[1]);
	}

	compareEdge = (edgeA, edgeB) => {
		return (this.comparePoints(edgeA[0], edgeB[0]) && this.comparePoints(edgeA[1], edgeB[1])) || 
		(this.comparePoints(edgeA[0], edgeB[1]) && this.comparePoints(edgeA[1], edgeB[0]));
	}

	findEdge = (list, edge) => {
		let foundItems = list.filter(x => this.compareEdge(x, edge));
		return foundItems.length > 0;
	}

	draw = (points) => {
		const bck = this.refs.canvas.getContext('2d');
		bck.clearRect(0,0, this.state.maxX, this.state.maxY);
		// draw edges
		for(let i = 0; i < this.state.edges.length; i++){
			let pA = this.state.edges[i][0];
			let pB = this.state.edges[i][1];
			bck.beginPath();
			bck.moveTo(pA[0], pA[1]);
			bck.lineTo(pB[0], pB[1]);
			let norm = 1;
			if(this.state.edges.length > 1) 
				norm = (this.state.maxEdge-this.getDist(pA, pB))/(this.state.maxEdge-this.state.minEdge)/2+0.5;
			bck.strokeStyle = 'rgba(0,123,255,' + norm + ')';
			bck.stroke();
		}
		bck.strokeStyle = "#007bff";
		// draw points
		for(let i = 0; i < this.state.points.length; i++){
	        bck.beginPath();
			bck.arc(this.state.points[i].X, this.state.points[i].Y, 3, 0, 2*Math.PI);
			bck.fill();
			bck.stroke();
		}
		// draw focused point
		let [success, focused] = this.getFocusedTarget();
		if(success){
	        bck.beginPath();
			bck.arc(focused.X, focused.Y, 5, 0, 2*Math.PI);
			bck.stroke();
    	    bck.beginPath();
			bck.arc(focused.X, focused.Y, focused.radius, 0, 2*Math.PI);
			bck.stroke();
		}
	}

	render = () => {
		return(
			<canvas
				ref="canvas" 
				width = {this.state.maxX} 
				height = {this.state.maxY}
			/>
		);
	}
}