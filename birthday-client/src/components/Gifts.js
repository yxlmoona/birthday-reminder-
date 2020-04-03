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

          <h2 className="info">gift's name: {gift.name}</h2>
          <h2 className="info">gift's price: {gift.price}</h2>
          {
          //   this.props.view.showGiftForm
          // ? <Form
          // giftId={gift.id}
          // view={this.props.view}
          // handleView={this.props.handleView}
          // handleUpdateGift={this.props.handleUpdateGift}/>
          // :''
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
