// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeIndex: 0}

  reviewDetails = reviewPage => {
    const {imgUrl, username, companyName, description} = reviewPage
    return (
      <div className="Carouse-container">
        <img src={imgUrl} alt={username} />
        <p>{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }

  onRightArrow = () => {
    const {activeIndex} = this.state
    const {reviewsList} = this.props

    if (activeIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeIndex: prevState.activeIndex + 1,
      }))
    }
  }

  onLeftArrow = () => {
    const {activeIndex} = this.state
    if (activeIndex > 0) {
      this.setState(prevState => ({
        activeIndex: prevState.activeIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeIndex} = this.state
    const latestReview = reviewsList[activeIndex]
    return (
      <div className="review-bg-container">
        <h1>Reviews</h1>
        <div className="reviews-card-container">
          <button
            type="button"
            className="arrow-left"
            onClick={this.onLeftArrow}
            testId="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.reviewDetails(latestReview)}
          <button
            type="button"
            className="arrow-left"
            onClick={this.onRightArrow}
            testId="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
