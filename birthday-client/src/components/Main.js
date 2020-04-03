import React from 'react'
import Gifts from './Gifts.js'
import Birthday from './Birthday.js'
class Main extends React.Component{
  state = {
    birthdays: [],
    showGifts: false
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
  render(){
    return(
      <div>
        <h1>{this.props.view.pageTitle}</h1>
    {
      this.state.birthdays.map((birthday) => {
        return(
          <>
          <Birthday
          birthday={birthday}
          view={this.props.view}
          handleView={this.props.handleView}/>
          {
            // this.state.showGifts
            // ?<Gifts gifts={birthday.gifts}/>
            // :<h1>birthdays</h1>
          }

          </>
        )
      })

    }

      </div>
    )
  }
}

export default Main
