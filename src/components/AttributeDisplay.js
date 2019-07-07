import React, { Component } from 'react'
import { Spring } from './react-spring';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'



class AttributeDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Spring
          from={{ number: 100 }}
          to={{ number: 0 }}
        >
          {props => (
            <tr>
              <td>Attribute</td>
              <td>{props.number.toFixed()}</td>
            </tr>
          )}
        </Spring>
      </div>
    )
  }
}

AttributeDisplay.propTypes = {

}

const mapStateToProps = {

}

export default connect()(AttributeDisplay);
