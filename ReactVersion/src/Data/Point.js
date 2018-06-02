export default class CanvasPoint {
	constructor(X = 0, Y = 0, rad = 1, focused = false){
		this.X = X;
		this.Y = Y;
		this.radius = rad;
		this.focused = focused;
	}
}