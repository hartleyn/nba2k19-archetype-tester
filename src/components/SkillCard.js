import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { fetchSecondarySkills, fetchArchetypeData } from '../actions/skillActions';


class SkillCard extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (this.props.skillType === 'primary' && !this.props.secondarySkillsUpdated) {
      this.props.fetchSecondarySkills(this.props.playerPosition, this.props.skill);
    }
    else if (this.props.skillType === 'secondary' && this.props.primarySkillSelected) {
      console.log(this.props.skill);
      this.props.fetchArchetypeData(this.props.playerPosition, this.props.selectedPrimarySkill, this.props.skill);
    }
  }

  render() {
    return (
      <Paper 
        onClick={this.onClick}
        className="skillCards clickable"
      >
        { this.props.skill }
      </Paper>
    )
  }
}

SkillCard.propTypes = {
  selectedPrimarySkill: PropTypes.string.isRequired,
  primarySkillSelected: PropTypes.bool.isRequired,
  secondarySkillsUpdated: PropTypes.bool.isRequired,
  fetchSecondarySkills: PropTypes.func.isRequired,
  fetchArchetypeData: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  selectedPrimarySkill: state.skill.selectedPrimarySkill,
  primarySkillSelected: state.skill.primarySkillSelected,
  secondarySkillsUpdated: state.skill.secondarySkillsUpdated,
})

export default connect(mapStateToProps, { fetchSecondarySkills, fetchArchetypeData })(SkillCard);
