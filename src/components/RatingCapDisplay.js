import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';


class RatingCapDisplay extends Component {
  render() {
    return (
      <div>
        <p>yo</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(RatingCapDisplay);
