import React from 'react';
import Main from './components/Main.js'
class App extends React.Component {
  state = {
    view:{
      page: 'home',
      pageTitle: 'Birthdays',
      show: true
    }

  }
  handleView = (view) => {
    let pageTitle = ''
    let showGiftForm = this.state.view.showGiftForm
    let showGifts = this.state.view.showGifts
    let showFriendForm = this.state.view.showFriendForm
    switch (view) {
      case 'home':
        pageTitle = 'i heard that...'
        break;
      case 'gifts':
        pageTitle = 'gifts from that person...'
        showGifts = !this.state.view.showGifts
        break;
      case 'addGifts':
        pageTitle = 'add gift...'
        showGiftForm = !this.state.view.showGiftForm
        break;
      case 'editGifts':
        pageTitle = 'edit gift...'
        showGiftForm = !this.state.view.showGiftForm
        break;
      case 'addFriends':
        pageTitle = 'add friends...'
        showFriendForm = !this.state.view.showFriendForm
      default:
        break;
    }
    this.setState({
      view:{
        page: view,
        pageTitle: pageTitle,
        showGifts:showGifts,
        showGiftForm:showGiftForm,
        showFriendForm:showFriendForm,
      }
    })
  }
  render(){
    return(
      <div className="container">
       <Main
       view={this.state.view}
       handleView={this.handleView}/>
      </div>
    )
  }
}
export default App;
