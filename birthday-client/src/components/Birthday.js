import React from 'react'
import Gifts from './Gifts.js'
class Birthday extends React.Component{

  render(){
    return(
      <div>
        <h1>name: {this.props.birthday.name}</h1>
        <h1>DOB: {this.props.birthday.dob}</h1>
        <h1>relationship: {this.props.birthday.relationship}</h1>
        <h1>suggested gift: {this.props.birthday.gift}</h1>
        <button onClick={() => {
            this.props.handleView('gifts')
        }}>see gifts</button>
        {
          this.props.view.show
          ?<Gifts
          gifts={this.props.birthday.gifts}
          view={this.props.view} />
          :''

        }

      </div>
    )
  }
}
export default Birthday
