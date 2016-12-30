var that = this;
var Note = React.createClass({
	remove(){
		that.state.mang.splice(this.props.index, 1)
		// 1 that.setState({mang: that.state.mang});	
		that.setState(that.state);	
	},
	render(){
		return(
			<div className="div-note">
				<p>{this.props.content}</p>
				<button onClick={this.remove}>Xoa</button>
			</div>
		)
	}
});
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
var arr = [<p>abcd</p>, <p>efgh</p>, <p>iklm</p>]
var List = React.createClass({
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
						return <Note key={i} index={i} content={e}/>
					})
				}
			</div>
		);
	}
});

// render cai gi va render vao dau
ReactDOM.render(
	<List/>,
	document.getElementById('root')
)

// 1 note
// 2 List
// 3 FormAdd
// 4 an dau cong thi hien ra 
// cho state la thuoc tinh isshow, tao bien xhtml, kiem tra isshow, gan vao button
