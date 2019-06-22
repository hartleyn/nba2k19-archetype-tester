import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPrimarySkills } from '../actions/skillActions';

import SkillCardRow from './SkillCardRow';

class PositionPanel extends Component {

  componentDidMount() {
    this.props.fetchPrimarySkills(this.props.playerPosition);
  }

  render() {
    return (
      <div>
        <SkillCardRow 
          playerPosition={this.props.playerPosition} 
          skillType="primary"
          skills={this.props.primarySkills} 
        />
        <SkillCardRow 
          playerPosition={this.props.playerPosition} 
          skillType="secondary"
          skills={this.props.secondarySkills} 
        />
      </div>
    )
  }
}

PositionPanel.propTypes = {
  primarySkills: PropTypes.array.isRequired,
  secondarySkills: PropTypes.array.isRequired,
  secondarySkillsUpdated: PropTypes.bool.isRequired,
  fetchPrimarySkills: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  primarySkills: state.skill.primarySkills,
  secondarySkills: state.skill.secondarySkills,
  secondarySkillsUpdated: state.skill.secondarySkillsUpdated,
})

export default connect(mapStateToProps, { fetchPrimarySkills })(PositionPanel);
