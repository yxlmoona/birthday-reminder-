import React from 'react'
class Gifts extends React.Component{
  state = {
    gift:{}
  }
  render(){
    return(
      <div>
      {
        this.props.gifts.map((gift) => {
        return(
        <>
          <h1>gift's name: {gift.name}</h1>
          <h1>gift's price: {gift.price}</h1>
        </>
        )
        })
      }
      </div>
    )
  }
}
export default Gifts
