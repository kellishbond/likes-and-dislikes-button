import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
      handleLike:() => {
        this.setState((prevState) => ({
            likes: prevState.likes + 1
          }));
      },
      handleDislike:() => {
        this.setState((prevState) => ({
            dislikes: prevState.dislikes + 1
          }));
      }
      };
  }
  render() {
    return (
     <>
     
     <div className='content-rating'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit beatae quod mollitia! Rerum, ab reprehenderit? Facilis, fugiat? Inventore neque magni eaque consequatur id quis excepturi, voluptate ipsum rerum harum aperiam.</p>
        <div className='rating-buttons'>
        <button className="like-button" onClick={this.state.handleLike}>
            Like <br /> ({this.state.likes})
          </button>
          <button className="dislike-button" onClick={this.state.handleDislike}>
            Dislike <br /> ({this.state.dislikes})
          </button>
        </div>

     </div>
     </>
    );
  }
}

export default ContentRating;