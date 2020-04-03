import React from 'react'

class Form extends React.Component{
  state = {
    name: '',
    price: 0
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleCreateGift(this.state, this.props.id)
  }
  render(){
    return(
      <form onSubmit={
        this.handleSubmit
      }>
        <label>
          name
          <input type="text" placeholder="gift name" id="name" value={this.state.name} onChange={this.handleChange}/>
        </label>

        <label >
          price
          <input placeholder="gift price" id="price" value={this.state.price} onChange={this.handleChange}></input>
        </label>
        <input type="submit" value="add gift"/>
      </form>
    )
  }
}
export default Form
