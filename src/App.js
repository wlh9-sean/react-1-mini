import React, {Component} from 'react';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      friends: [],
      picture: '',
      name: ''
    }
  }

  updatePicture = (event) => {
    this.setState({
      picture: event.target.value
    })
  }

  updateName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  addFriend = () => {
    const newFriend = {
      name: this.state.name,
      picture: this.state.picture
    }

    const newFriendsArray = [...this.state.friends, newFriend]

    this.setState({
      friends: newFriendsArray, 
      name: '',
      picture: ''
    })
  }

  render(){
    
    const mappedFriends = this.state.friends.map((friend) => {
      return(
        <div>
          <img src={friend.picture} />
          <div>{friend.name}</div>
        </div>
      )
    }) 

    console.dir(mappedFriends)

    return(
      <div>
        <label>Picture:</label>
        <input type='text' value={this.state.picture} onChange={(event) => this.updatePicture(event)} />

        <label>Name:</label>
        <input type='text' value={this.state.name} onChange={(event) => this.updateName(event)} />

        <button onClick={this.addFriend}>Add Friend</button>

        {mappedFriends}
      </div>
    )
  }
}

