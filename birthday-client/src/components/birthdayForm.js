import React from 'react'
class BirthdayForm extends React.Component{
  state = {
    name:'',
    dob:'',
    relationship:'',
    gift:''
  }
  handleChange = (e) => {
  this.setState({[e.target.id] : e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleCreateBirthday(this.state)
    this.setState({
      name:'',
      dob:'',
      relationship:'',
      gift:''
    })
  }
  render(){
    return(
      <>
      <form onSubmit={
        this.handleSubmit
      }>
        <label>
          name
          <input type="text" placeholder="name" id="name" value={this.state.name} onChange={this.handleChange}/>
        </label>

        <label >
          DOB
          <input placeholder="gift price" id="dob" value={this.state.dob} onChange={this.handleChange}></input>
        </label>

        <label >
          relationship
          <input placeholder="relationship" id="relationship" value={this.state.relationship} onChange={this.handleChange}></input>
        </label>

        <label >
          suggested gift
          <input placeholder="suggested gift" id="gift" value={this.state.gift} onChange={this.handleChange}></input>
        </label>

        <input type="submit" value="add birthday"/>
      </form>
      </>
    )
  }
}

export default BirthdayForm
