import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ArchetypePicker from './ArchetypePicker';


class Home extends Component {
  render() {
    let uniqueKey = 0;
    const archetypeData = this.props.archetypeData.map(data => (
      <tr key={uniqueKey++}>
        <td>{data.attribute}</td>
        <td>{data.ratingCap}</td>
      </tr>
    ));
    return (
      <div>
        <ArchetypePicker />
        <table>
          <tbody>
            { archetypeData }
          </tbody>
        </table>
      </div>
    )
  }
}

Home.propTypes = {
  archetypeData: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  archetypeData: state.skill.archetypeData,
})

export default connect(mapStateToProps)(Home);
