import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Videos from './Videos';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      link: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&regionCode=IN&type=video&key=AIzaSyChy2ZetpHiu-QBq-nqIy9rteAhyiOgWzw",
      pol: []
    }
  }

  componentDidMount = () => {
    console.log("[Component Did Mount]");
    axios.get(this.state.link)
      .then(response => {
        this.setState({pol: response.data.items});
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  componentDidUpdate = (prevProps, prevState) => {
    console.log("[Component Did Update]");
    if(this.state.link !== prevState.link){
      axios.get(this.state.link)
      .then(response => {
        this.setState({pol: response.data.items});
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
  
  onSubmitHandler = ( event ) => {
    event.preventDefault();
    const value = document.getElementById("search").value;
    const newLink = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&regionCode=IN&type=video&key=AIzaSyChy2ZetpHiu-QBq-nqIy9rteAhyiOgWzw`;
    this.setState({link: newLink});
  }

  render() {
    let videos = null;
    if(this.state.pol.length !== 0){
        videos = this.state.pol.map( (link,i) => {
          return <Videos key={i} videoId={link.id.videoId} />
        });

      }

    return (
      <div className="App">
        <div className="Text">
          <h1>Youtube Search</h1> 
        </div>
        <div className="Form">
          <form onSubmit={this.onSubmitHandler}>
            <input type="text" id="search" placeholder="Search here..." />
            <input type="submit" />
          </form> 
        </div>
        <div className="Videos">
          {videos}
        </div>  
      </div>
    );
  }
}

export default App;