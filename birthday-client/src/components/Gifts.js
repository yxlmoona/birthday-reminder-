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
          <h2 className="info">gift's name: {gift.name}</h2>
          <h2 className="info">gift's price: {gift.price}</h2>
        </>
        )
        })
      }
      </div>
    )
  }
}
export default Gifts
