import React from 'react'
import Gifts from './Gifts.js'
import Birthday from './Birthday.js'
class Main extends React.Component{
  state = {
    birthdays: [],

  }

  toggleShowGifts = () => {
    this.setState({
      showGifts: !this.state.showGifts
    })
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
  handleCreateGift = async(createData,id) => {
    let response = await fetch(`http://localhost:3000/birthdays/${id}/gifts`,{
    body: JSON.stringify(createData),
    method: 'POST',
    headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
    }
  })
    let data = await response.json()
    console.log(data);
    this.fetchBirthdays()

}
  render(){
    return(
      <div>
        <h1>{this.props.view.pageTitle}</h1>
    {
      this.state.birthdays.map((birthday) => {
        return(
          <>
          <Birthday
          handleCreateGift={this.handleCreateGift}
          birthday={birthday}
          id={birthday.id}
          view={this.props.view}
          handleView={this.props.handleView}/>
          </>
        )
      })

    }

      </div>
    )
  }
}

export default Main
