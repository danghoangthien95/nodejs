var Note = React.createClass(
  {
    render: function(){
      return (
        <div>
          <p>Hello {this.props.children}</p>
          <Control/>
        </div>
      )
    }
  }
);


/*
  Viet component Khoa Hoc
  props:
    - tenKhoaHoc
    - gia
*/

var Control = React.createClass(
  {
    render: function(){
      return (
        <div>
          <button>Xoa</button>
          <button>Sua</button>
        </div>
      )
    }
  }
)

ReactDOM.render(
  <div>
    <Note txt="Khoa">ABCD</Note>
    <Note txt="Khoa">EFGH</Note>
    <Note txt="Khoa">IKLM</Note>
  </div>,
  document.getElementById('root')
);
