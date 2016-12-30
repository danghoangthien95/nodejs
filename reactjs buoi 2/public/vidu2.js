var KhoaHoc = React.createClass({
  show: function(){
    //alert(this.refs.txt.value);
    alert(this.refs.sl.value);
    console.log(this.refs.sl);
  },
  render: function(){
    return (
    <div>
      <h1 className="title">Ten: {this.props.tenKH}</h1>
      <Gia>{this.props.giaKH}</Gia>
      <button onClick={this.show}>ABCD</button>
      <input placeholder="Enter your name" defaultValue="abcd" ref="txt"/>
      <select ref="sl">
        <option value="Cocacola">Coca</option>
        <option value="Pepsico">Pepsi</option>
        <option value="RedBullco">RedBull</option>
      </select>
    </div>
  )}
});

var Gia = React.createClass({
  render: function(){
    return(
      <p>{this.props.children}</p>
    )
  }
})

ReactDOM.render(
  <div>
    <KhoaHoc tenKH="Node" giaKH="600"/>
    <KhoaHoc tenKH="React" giaKH="700"/>
    <KhoaHoc tenKH="Android" giaKH="800"/>
  </div>,
  document.getElementById('root')
)
