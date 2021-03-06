import React from 'react'
import Form from './Form.js'

class Gifts extends React.Component{
  state = {
    name:'',
    price:'',
    id:null
  }
  render(){
    return(
      <div>
      {

        this.props.gifts.map((gift) => {
        return(
        <>
          <button onClick={() => {
            this.props.handleView('editGifts')
          }}>edit gifts</button>
          <button onClick={() => {
            this.props.handleDeleteGift(gift.id)
          }}>delete gifts</button>

          <h1>gift's name: {gift.name}</h1>
          <h1>gift's price: {gift.price}</h1>
          {
            this.props.view.showGiftForm
          ? <Form
          giftId={gift.id}
          view={this.props.view}
          handleView={this.props.handleView}
          handleUpdateGift={this.props.handleUpdateGift}/>
          :''
        }
        </>
        )
        })
      }
      </div>
    )
  }
}
export default Gifts
