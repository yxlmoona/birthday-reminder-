import React from 'react'

class Form extends React.Component{
  state = {
    name: '',
    price: 0,
    id: null
  }

  // componentDidMount(){
  //   this.setState({
  //     name: this.props.formInputs.name,
  //     image: this.props.formInputs.image,
  //     body: this.props.formInputs.body,
  //     id: this.props.formInputs.id,
  //   })
  // }
  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if(this.props.view.page === 'addGifts'){
      this.props.handleCreateGift(this.state, this.props.id)
    }else if(this.props.view.page === 'editGifts'){
      this.props.handleUpdateGift(this.state, this.props.giftId)
    }


    this.setState({
      name: '',
      price: 0
    })
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
        <input type="submit" value="submit"/>
      </form>
    )
  }
}
export default Form
