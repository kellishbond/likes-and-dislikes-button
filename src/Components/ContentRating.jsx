import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,  // Corrected to match the render method
    };
  }

  // Defined handleLike as an arrow function
  handleLike = () => {
    this.setState((prevState) => ({
      likes: prevState.likes + 1,
      totalRatings: prevState.totalRatings + 1,
    }));
  }

  // Defined handleDislike as an arrow function
  handleDislike = () => {
    this.setState((prevState) => ({
      dislikes: prevState.dislikes + 1,
      totalRatings: prevState.totalRatings + 1,
    }));
  }

  render() {
    return (
      <>
        <div className='content-rating'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit beatae quod mollitia! Rerum, ab reprehenderit? Facilis, fugiat? Inventore neque magni eaque consequatur id quis excepturi, voluptate ipsum rerum harum aperiam.</p>
          <div className='rating-buttons'>
            <button className="like-button" onClick={this.handleLike}>
              Like <br /> ({this.state.likes})
            </button>
            <button className="dislike-button" onClick={this.handleDislike}>
              Dislike <br /> ({this.state.dislikes})
            </button>
            
            <p>Total ratings: {this.state.totalRatings}</p>
          </div>
        </div>
      </>
    );
  }
}

export default ContentRating;
