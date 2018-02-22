import React, { Component } from 'react';
import { connect } from 'react-redux';
import './createReview.css';
import { Link } from 'react-router-dom';
import { postReview } from '../../ducks/events/reducer';
import { getDetails } from '../../ducks/events/reducer';

class CreateReview extends Component {
  state = {
    userId: '123',
    restaurantId: this.props.match.params.restaurantId,
    reviewBody: '',
    rating: '',
    time: '21234'
  };

  componentWillMount() {
    const restaurantId = this.props.match.params.restaurantId;
    this.props.getDetails(restaurantId);
  }

  render() {
    console.log('PROPS:', this.props);
    return (
      <div>
        <div className="header">
          <div className="tag container__13FCe transparent">
            <div className="tag content">
              <div className="header-arrange arrange gutter vertical-align-middle">
                <div className="tag arrange-unit-logo">
                  <div className="tag logo">
                    <a className="linkhome" href="/">
                      Yelp
                    </a>
                  </div>
                </div>
                <div className="tag arrange-unit-title no-wrap">
                  <span className="subtitle">Write a Review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="y-container container">
          <div className="y-container_content content_container">
            <div className="content-inner">
              <div className="header1">
                <h2 className="heading">
                  <Link
                    id="blue"
                    to={
                      '/businessdetails/' + this.props.match.params.restaurantId
                    }
                  >
                    {this.props.details.details &&
                      this.props.details.details.name}
                  </Link>
                </h2>
              </div>
              <div>
                <form id="rev">
                  <div>
                    <div className="review-border">
                      <div className="arrange u-space">
                        <div className="arrange_unit au-fill">
                          <fieldset className="tag-fieldset rating-selector">
                            <legend className="legendtag offscreen">
                              Rating
                            </legend>
                            <ul className="listtag tagul i-selector-stars i-selector-stars-xl starsul">
                              <li className="star">
                                <input
                                  onClick={() => this.setState({ rating: '1' })}
                                  type="radio"
                                  name="rating"
                                  id="rating-1"
                                  value="1"
                                  className="input1"
                                />
                                <label className="labell">No thanks</label>
                              </li>
                              <li className="star">
                                <input
                                  onClick={() => this.setState({ rating: '2' })}
                                  type="radio"
                                  name="rating"
                                  id="rating-2"
                                  value="2"
                                  className="input1"
                                />
                                <label className="labell">No thanks</label>
                              </li>
                              <li className="star">
                                <input
                                  onClick={() => this.setState({ rating: '3' })}
                                  type="radio"
                                  name="rating"
                                  id="rating-3"
                                  value="3"
                                  className="input1"
                                />
                                <label className="labell">No thanks</label>
                              </li>
                              <li className="star">
                                <input
                                  onClick={() => this.setState({ rating: '4' })}
                                  type="radio"
                                  name="rating"
                                  id="rating-4"
                                  value="4"
                                  className="input1"
                                />
                                <label className="labell">No thanks</label>
                              </li>
                              <li className="star" id="rating-1">
                                <input
                                  onClick={() => this.setState({ rating: '5' })}
                                  type="radio"
                                  name="rating"
                                  id="rating-5"
                                  value="5"
                                  className="input1"
                                />
                                <label className="labell">No thanks</label>
                              </li>
                            </ul>
                            <span className="tagspan desc">
                              <p className="text">Select your rating</p>
                            </span>
                          </fieldset>
                        </div>
                      </div>
                      <textarea
                        className="review-input whitespace"
                        onChange={e =>
                          this.setState({ reviewBody: e.target.value })
                        }
                        placeholder="Your review helps others learn about great local businesses.                                                                                         Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees."
                        maxlength="5000"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="review-footer">
                <div className="u-space1">
                  <button
                    onClick={() => {
                      if (this.state.reviewBody.length <= 9) {
                        alert(
                          'Your review must be at least 10 characters long!'
                        );
                      } else if (
                        this.state.userId.length &&
                        this.state.restaurantId.length &&
                        this.state.rating.length &&
                        this.state.reviewBody.length
                      ) {
                        this.props.postReview(this.state);
                        window.location.assign(
                          '/businessDetails/' +
                            this.props.match.params.restaurantId
                        );
                      } else {
                        alert(
                          'You must be logged in, select a rating, and type a review!'
                        );
                      }
                    }}
                    type="submit"
                    className="button1 primary post-button"
                  >
                    Post Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ eventReducer }) => ({
  details: eventReducer.details
});

export default connect(mapStateToProps, { postReview, getDetails })(
  CreateReview
);
