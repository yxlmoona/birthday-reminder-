import React from 'react'
import Gifts from './Gifts.js'
import Birthday from './Birthday.js'
import BirthdayForm from './birthdayForm.js'

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
handleCreateBirthday = async(createData) => {
  let response = await fetch(`http://localhost:3000/birthdays`,{
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
handleDeleteGift = async(id) => {
    let response = await fetch(`http://localhost:3000/gifts/${id}`,{
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    this.fetchBirthdays()
  }
handleUpdateGift = async(updateData, giftId) => {
  let response = await fetch(`http://localhost:3000/gifts/${giftId}`,{
    body: JSON.stringify(updateData),
    method: 'PUT',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    }
  })
  let data = await response.json()
  console.log(data);
  this.props.handleView('home')
  this.fetchBirthdays()
}
  render(){
    return(
      <div>
        <h1>{this.props.view.pageTitle}</h1>
        <button onClick={() => {
          this.props.handleView('addFriends')
        }}>Add a Friend</button>
        {
          this.props.view.showFriendForm
          ?
          <BirthdayForm handleCreateBirthday={this.handleCreateBirthday}/>
          :''
        }


    {
      this.state.birthdays.map((birthday) => {
        return(
          <>
          <Birthday
          handleCreateGift={this.handleCreateGift}
          handleUpdateGift={this.handleUpdateGift}
          handleDeleteGift={this.handleDeleteGift}
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
