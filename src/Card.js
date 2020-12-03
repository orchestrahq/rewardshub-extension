import React, {Component} from 'react'
import logo from './logo.svg';

class Card extends Component {
  render() {

    // Selected credit cards by user
    const {usercardsData, cardsData} = this.props
    console.log(usercardsData[0].img)
    console.log(cardsData)
    //const {cardName} = card.name

    return (
      <div className="Selected-card">
        <img src={`../cards/${usercardsData[0].img}`} className="Card-image" alt="card-image" />
        <h2>{usercardsData[0].name}</h2>
      </div>
    )
  } 
}

export default Card