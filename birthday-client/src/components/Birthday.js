import React from 'react'
import Gifts from './Gifts.js'
class Birthday extends React.Component{

  render(){
    return(
      <div className="card">
        <div className="card-body">
          <h2 className="person">name: {this.props.birthday.name}</h2>
          <h2 className="info">Birtday: {this.props.birthday.dob}</h2>
          <h2 className="info">Relationship: {this.props.birthday.relationship}</h2>
          <h2 className="info">Gift Idea: {this.props.birthday.gift}</h2>
          <button onClick={() => {
              this.props.handleView('gifts')
          }}>see gifts</button>
          <div className="gifts">
            {
              this.props.view.show
              ?<Gifts
              gifts={this.props.birthday.gifts}
              view={this.props.view} />
              :''

            }
          </div>
        </div>
      </div>
    )
  }
}
export default Birthday
