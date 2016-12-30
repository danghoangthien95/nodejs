var Box = React.createClass ({
	// khoi tao
	getInitialState(){
		return{
			num: 0
		}
	},
	inc(){
		// this.state.num ++;
		this.setState({num: this.state.num + 1});
	},
	dec(){
		this.setState({num: this.state.num - 1});
	},
	render(){
		return (
			<div>
				<button onClick={this.inc} style={{display: "inline"}}>+</button>&nbsp;&nbsp;&nbsp;
				<img style={{display: "inline"}} src={'img/' + this.state.num + '.jpg'}/>&nbsp;&nbsp;&nbsp;
				<button onClick={this.dec} style={{display: "inline"}}>-</button>&nbsp;&nbsp;&nbsp;
			</div>
		);
	}
})

ReactDOM.render(
	<Box/>,
	document.getElementById('root')
)