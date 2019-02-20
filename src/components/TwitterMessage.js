import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: ''
    };
  }

  handleInputChange = (event) => {
<<<<<<< HEAD
    console.log(event.target)
=======
    console.log(event.target.name)
>>>>>>> b50cc1e491c3715adef9fa550623ae767568e514
    this.setState({
      tweet: event.target.value,
    }, () => console.log(this.state.tweet))
  }

  render() {
    const{maxChars}=this.props;
    const{tweet}=this.state;

    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="tweet"
          onChange={this.handleInputChange}
          value={this.state.tweet}
          />
        <h3>{maxChars - tweet.length}</h3>
      </div>
    );
  }
}


export default TwitterMessage;
