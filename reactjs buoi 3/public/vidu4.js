var that = this;
var Note = React.createClass({
	update(newText){
		this.props.change(this.props.index, newText)
		this.setState({isChange: false});
	},
	stopChange(){
		this.setState({isChange: false})
	},
	getInitialState(){
		return {
			isChange: false
		}
	},
	change(){
		this.setState({isChange: true});
	},
	remove(){
		that.state.mang.splice(this.props.index, 1)
		// 1 that.setState({mang: that.state.mang});	
		that.setState(that.state);	
	},
	render(){
		var xhtml = this.state.isChange ? <FormChange parent={this} content={this.props.content} handle={this.Update}/> :
		<div className="div-note">
			<p>{this.props.content}</p>
			<button onClick={this.remove}>Xoa</button>
			<button onClick={this.change}>Sua</button>
		</div>
		return xhtml;
	}
})
var FormAdd = React.createClass({
	add(){
		that.state.isShow = false;
		that.state.mang.unshift(this.refs.txt.value);
		that.setState(that.state);	
	},
	render() {
		return (
			<div><br/><br/>
				<input ref="txt" type="text"/><br/><br/>
				<button onClick={this.add}>Them</button><br/><br/>
			</div>
		)
	}
})
var FormChange = React.createClass({
	save(){
		this.props.handle(this.refs.txtchange.value);
	},
	cancel(){
		// this.props.parent.setState({isChange: false});
		this.props.stop();
	},
	render(){
		return(
			<div className="div-note">
				<input type="text" placeholder="Enter your note...." ref="txtchange" defaultValue={this.props.content}/>
				<br/><br/>
				<button onClick={this.save}>Luu</button>
				<button stop={this.stopChange}>Huy</button>
			</div>
		);
	}
})
var arr = [<p>abcd</p>, <p>efgh</p>, <p>iklm</p>];
var List = React.createClass({
	updateList(index, newText){
		this.state.mang[index] = newText;
		this.setState(this.state);
	},
	getInitialState(){
		that = this;
		return {mang: ['Android', 'Nodejs', 'Reactjs'], isShow: false}
	},
	show(){
		this.state.isShow = true;
		this.setState(this.state);
	},
	render: function() {
		var xhtml = this.state.isShow ? <FormAdd/> : <button onClick={this.show}>Them moi</button>;
		return (
			<div>
				{xhtml}
				{
					this.state.mang.map(function (e, i) {
						// body... ham map tra ra mang
						// return <p key={i}>{e}</p>, dau ngan cach gia tri nen ko co dau ; o phia cuoi
						return <Note key={i} update={this.updateList} index={i} content={e}/>
					})
				}
			</div>
		);
	}
})

ReactDOM.render(
	<List/>,
	document.getElementById('root')
)

// <button onClick={this.cancel}>Huy</button>
// <button onClick={this.save}>Luu</button>
// khoaphamtraining@gmail.com