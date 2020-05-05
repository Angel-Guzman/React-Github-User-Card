import React from 'react';
// import axios
import axios from 'axios';
import './App.css';
import CardList from './components/CardList';

class App extends React.Component {

  constructor() {
    // console.log('constructor running')
    super();
    this.state = {
      me: [],
      followers: []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/Angel-Guzman')
    .then(res => {
      // console.log(res.data)
      this.setState({ me: res.data })
    })
    .catch(err => console.log(err))

    axios.get('https://api.github.com/users/Angel-Guzman/followers')
    .then(res => {
      // console.log(res.data)
      this.setState({ followers: res.data })
    })
    .catch(err => console.log(err))
  }

  render(){  
    // console.log('rendering component')
    return (
      <div className="App">
        <h1>Github User Cards!</h1>
        <CardList me={this.state.me} followers={this.state.followers} />
      </div>
    );
  }
}
export default App;
