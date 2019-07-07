import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPrimarySkills } from '../actions/skillActions';

import SkillCardRow from './SkillCardRow';


class PositionPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      primarySkills: [],
      secondarySkills: [],
    }
  }

  componentDidMount() {
    this.props.fetchPrimarySkills(this.props.playerPosition);
    console.log(this.props.playerPosition);
    
  }

  componentDidUpdate(prevProps) {
    if (this.state.primarySkills !== this.props.primarySkills && this.props.playerPosition === this.props.activePosition/* && !this.props.primarySkillSelected*/) {
      this.setState({
        primarySkills: this.props.primarySkills,
      })
    }
    else if (this.state.secondarySkills !== this.props.secondarySkills && this.props.playerPosition === this.props.activePosition) {
      this.setState({
        secondarySkills: this.props.secondarySkills,
      })
    }
  }

  render() {
    return (
      <div>
        <SkillCardRow 
          playerPosition={this.props.playerPosition} 
          skillType="primary"
          skills={this.state.primarySkills} 
        />
        <SkillCardRow 
          playerPosition={this.props.playerPosition} 
          skillType="secondary"
          skills={this.state.secondarySkills} 
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
  primarySkillSelected: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  activePosition: state.skill.activePosition,
  primarySkills: state.skill.primarySkills,
  secondarySkills: state.skill.secondarySkills,
  secondarySkillsUpdated: state.skill.secondarySkillsUpdated,
  primarySkillSelected: state.skill.primarySkillSelected,
})

export default connect(mapStateToProps, { fetchPrimarySkills })(PositionPanel);
