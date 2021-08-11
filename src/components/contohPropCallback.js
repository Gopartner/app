export default class Parent extends Component {
  state={
    status:true
  }
  _changeStatus=(status)=>{
    this.setState({status:status})
  }
  render() {
    return (
      <Child 
        status={this.state.status} 
        changeStatus={()=>this.changeStatus}/> 
    )
  }
}
 
export default class Child extends Component {
  state = {  }
  render() {
    console.log(this.props.status) //=> true
    this.props._changeStatus(false) 
    console.log(this.props.status) //=> false    
  }
}










