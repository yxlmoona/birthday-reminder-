import React from 'react';
import Main from './components/Main.js'
class App extends React.Component {
  state = {
    view:{
      page: 'home',
      pageTitle: 'I heard that...',
      show: false
    }
  }
  handleView = (view) => {
    let pageTitle = ''
    let show = this.state.view.show
    switch (view) {
      case 'home':
        pageTitle = 'i heard that...'
        break;
      case 'gifts':
        pageTitle = 'gifts from that person...'
        show = !this.state.view.show
        break;

      default:
        break;
    }
    this.setState({
      view:{
        page: view,
        pageTitle: pageTitle,
        show: show
      }
    })
  }
  render(){
    return(
      <div>
       <Main
       view={this.state.view}
       handleView={this.handleView}/>
      </div>
    )
  }
}
export default App;
