import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import Offer from './Offer'
import Card from './Card'

class App extends Component {

    offers = [
      {
        id: 1,
        merchantId: 1,
        cards: [1,2,3],
        details: "Get a complimentary 3 months of DashPass, DoorDash's subscription service that provides unlimited deliveries for a $0 delivery fee on eligible orders over $12 on DoorDash and Caviar (other fees may apply). After that, you are automatically enrolled in DashPass at 50% off for the next 9 months. Activate by December 31, 2021."
      },
      {
        id: 2,
        merchantId: 2,
        cards: [1,2,3],
        details: "Earn 5% cash back on Lyft rides through March 2022. That's 3.5% cash back in addition to the 1.5% cash back you already earn."
      }
    ]

    merchants = [
      {
        id: 1,
        name: 'DoorDash',
        url: 'www.doordash.com'
      },
      {
        id: 2,
        name: 'Lyft',
        url: 'www.lyft.com'
      }
    ]

    cards = [
      {
        id: 1,
        name: 'Chase Freedom Unlimited',
        issuer: 'Chase',
        img: 'chase_freedom_unlimited_card.png'
      },
      {
        id: 2,
        name: 'Chase Freedom Flex',
        issuer: 'Chase',
        img: 'chase_freedom_flex_card.png'
      },
      {
        id: 3,
        name: 'Chase Sapphire Preferred',
        issuer: 'Chase',
        img: 'chase_sapphire_preferred_card.png'
      },
      {
        id: 4,
        name: 'Triangle Mastercard',
        issuer: 'Triangle',
        img: 'triangle_mastercard.png'
      }
    ]

    // Store application state
    state = {

      // List of cards the user has
      usercards: [
        this.cards[0]
      ],

      cards: this.cards
    }


    // Add new card to user's list of cards
    // @param usercard card to add to list
    addCard(usercard) {
      this.setState({
        usercards: [...this.state.usercards, usercard]
      })
    }

    // Remove card from user's list of cards
    // @param index index of card to remove
    removeCard(index) {
      const {usercards} = this.state

      this.setState({
        usercards: usercards.filter((usercard, i) => {
          return i !== index
        }),
      })
    }

    render() {

      const { usercards, cards } = this.state;

      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-name">RewardsHub</h1>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Card usercardsData={usercards} cardsData={cards} />
          <Offer />
        </div>
      )
    }
}

export default App
