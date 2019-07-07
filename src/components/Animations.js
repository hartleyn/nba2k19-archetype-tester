import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Spring } from 'react-spring/renderprops';


class Animations extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <Spring
              from={{ number: 100 }}
              to={{ number: 0 }}
            >
              {props => (
                <tr style={props}>
                  <td>Attribute</td>
                  <td>{props.number.toFixed()}</td>
                </tr>
              )}
            </Spring>
          </tbody>
        </table>
        <Spring
          from={{ marginTop: -1000 }}
          to={{ marginTop: 10 }}
        >
          {props => <h1 style={props}>Yo!</h1>}
        </Spring>
      </div>
    )
  }
}

Animations.propTypes = {
  
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(Animations);
