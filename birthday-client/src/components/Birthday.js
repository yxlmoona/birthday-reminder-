import React from 'react'
import Gifts from './Gifts.js'
import Form from './Form.js'
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
              this.props.handleDeleteBirthday(this.props.id)
          }}>Delete Contact</button>
          <button onClick={() => {
              this.props.handleView('gifts')
          }}>see gifts</button>
          <button onClick={() => {
              this.props.handleView('addGifts')
          }}>add gifts</button>

          {
            this.props.view.showGiftForm
            ?  <Form
              id={this.props.id}
              handleCreateGift={this.props.handleCreateGift}
              handleUpdateGift={this.props.handleUpdateGift}
              view={this.props.view}

              />
            : ''
          }
          {
            this.props.view.showGifts
            ?<Gifts
            gifts={this.props.birthday.gifts}
            view={this.props.view}
            handleView={this.props.handleView}
            handleDeleteGift={this.props.handleDeleteGift}
            handleUpdateGift={this.props.handleUpdateGift} />
            :''


          }
          </div>
        </div>
    )
  }
}
export default Birthday
