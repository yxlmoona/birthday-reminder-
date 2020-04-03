import React from 'react'

class Main extends React.Component{
  state = {
    birthdays: []
  }
  componentDidMount(){
    this.fetchBirthdays()
  }
  fetchBirthdays = async() => {
    let response = await fetch('http://localhost:3000/birthdays')
    let data = await response.json()
    console.log(data);
    this.setState({
      birthdays: [...data]
    })
  }
  render(){
    return(
      <div>

    {
      this.state.birthdays.map((birthday) => {
        return(
        <h1>{birthday.name}</h1>
      )
      })
    }

      </div>
    )
  }
}

export default Main
