import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Spring } from 'react-spring/renderprops';
import {
  fetchPrimarySkills, 
  fetchSecondarySkills,
  fetchArchetypeData,
  fetchBuildData,
} from '../actions/skillActions';

import BadgeDataDisplay from './BadgeDataDisplay2';


class BuildSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPosition: null,
      selectedHeight: null,
      selectedPrimarySkill: null,
      selectedSecondarySkill: null,
      showSelectPrimarySkills: false,
      showSelectSecondarySkills: false,
      showSelectHeights: false,
    }

    this.onChangeHeight = this.onChangeHeight.bind(this);
    this.onChangePosition = this.onChangePosition.bind(this);
    this.onChangePrimarySkill = this.onChangePrimarySkill.bind(this);
    this.onChangeSecondarySkill = this.onChangeSecondarySkill.bind(this);
  }

  /*componentDidUpdate(prevProps) {
    console.log(this.props.primarySkills,  prevProps.primarySkills);
    if (this.props.primarySkills !== prevProps.primarySkills) {
      this.setState({
        showSelectPrimarySkills: true,
      })
    }
  }*/

  onChangePosition(selectedPosition) {
    console.log('changed');
    this.setState({
      selectedPosition,
      selectedHeight: null,
      selectedPrimarySkill: null,
      selectedSecondarySkill: null,
      showSelectPrimarySkills: true,
    }, () => {
      this.props.fetchPrimarySkills(this.state.selectedPosition);
    });
  }

  onChangePrimarySkill(selectedPrimarySkill) {
    this.setState({
      selectedPrimarySkill,
      selectedSecondarySkill: null,
      showSelectSecondarySkills: true,
    }, () => {
      this.props.fetchSecondarySkills(this.state.selectedPosition, this.state.selectedPrimarySkill);
    });
  }

  onChangeSecondarySkill(selectedSecondarySkill) {
    this.setState({
      selectedSecondarySkill,
      showSelectHeights: true,
    });
  }

  onChangeHeight(selectedHeight) {
    this.setState({
      selectedHeight,
    }, () => {
      this.props.fetchArchetypeData(this.state.selectedPosition, this.state.selectedPrimarySkill, this.state.selectedSecondarySkill, this.state.selectedHeight);
      this.props.fetchBuildData(this.state.selectedPosition, this.state.selectedPrimarySkill, this.state.selectedSecondarySkill);
      document.getElementById('thing').classList.remove('hidden');
    });
  }

  render() {
    const positionOptions = [
      { value: 'PG', label: 'Point Guard' },
      { value: 'SG', label: 'Shooting Guard' },
      { value: 'SF', label: 'Small Forward' },
      { value: 'PF', label: 'Power Forward' },
      { value: 'C', label: 'Center' },
    ]
    const heightOptions = this.props.heights.map(height => (
      { value: height, label: height }
    ));
    const primarySkillOptions = this.props.primarySkills.map(skill => (
      { value: skill, label: skill }
    ));
    const secondarySkillOptions = this.props.secondarySkills.map(skill => (
      { value: skill, label: skill }
    ));
    const { selectedPosition } = this.state;
    const { selectedHeight } = this.state;
    const { selectedPrimarySkill } = this.state;
    const { selectedSecondarySkill } = this.state;
    let uniqueKey = 0;
    const archetypeData = this.props.archetypeData.map(data => (  
      <TableRow key={uniqueKey++}>    
        <TableCell>{data.attribute}</TableCell>
        <TableCell align="center">{data.ratingCap}</TableCell>
      </TableRow>  
    ));
    return (
      <div style={{ margin: '2%' }}>
        <Grid container spacing={3}>
          <Grid item xs={9} container>
            <Grid item xs={12}>
              <Paper style={{ minHeight: '242px', padding: '10px', marginBottom: '10px' }}>
                  
                    <BadgeDataDisplay />
                  
                    <Paper className="selectPaper hidden" style={{ backgroundColor: '#F1F5FD' }} id="thing">
                      <Grid container spacing={3}>
                        <Grid item xs={6}>
                          <Table>
                            <TableBody>
                              { archetypeData.slice(0, archetypeData.length / 2 + 1) }                   
                            </TableBody>
                          </Table>
                        </Grid>
                        <Grid item xs={6}>
                          <Table>
                            <TableBody>
                              { archetypeData.slice(archetypeData.length / 2 + 1) }                   
                            </TableBody>
                          </Table>
                        </Grid>
                      </Grid>
                    </Paper>

              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              config={{ duration: 500, delay: 1000 }}
            >
              {props => (
                <Paper className="selectPaper" style={props}>
                  <Select
                    value={selectedPosition}
                    options={positionOptions}
                    onChange={this.onChangePosition}
                    placeholder='Select a Position...'
                  />
                </Paper>
              )}
            </Spring>
            {
              !this.state.showSelectPrimarySkills ? 
              (
                <div className="hidden"></div>
              )
              :
              (
                <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ duration: 500 }}
                >
                  {props => (
                    <Paper className="selectPaper" style={props}>
                      <Select
                        value={selectedPrimarySkill}
                        options={primarySkillOptions}
                        onChange={this.onChangePrimarySkill}
                        placeholder='Select a Primary Skill...'
                      />
                    </Paper>
                  )}
                </Spring>
              )
            }
            
              
            
            {
              !this.state.showSelectSecondarySkills ?
              (
                <div className="hidden"></div>
              )
              :
              (
                <Spring
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}
                  config={{ duration: 500 }}
                >
                  {props => (
                    <Paper className="selectPaper" style={props}>
                      <Select
                        value={selectedSecondarySkill}
                        options={secondarySkillOptions}
                        onChange={this.onChangeSecondarySkill}
                        placeholder='Select a Secondary Skill...'
                      />
                    </Paper>
                  )}
                </Spring>
              )
            }
            {
              !this.state.showSelectHeights ?
              (
                <div className="hidden"></div>
              )
              :
              (
                <Spring
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}
                  config={{ duration: 500 }}
                >
                  {props => (
                    <Paper className="selectPaper" style={props}>
                      <Select
                        value={selectedHeight}
                        options={heightOptions}
                        onChange={this.onChangeHeight}
                        placeholder='Select a Height...'
                      />
                    </Paper>
                  )}
                </Spring>
              )
            }
          </Grid>
        </Grid>
        
      </div>
    )
  }
}

BuildSelector.propTypes = {
  fetchPrimarySkills: PropTypes.func.isRequired,
  fetchSecondarySkills: PropTypes.func.isRequired,
  primarySkills: PropTypes.array.isRequired,
  heights: PropTypes.array.isRequired,
  archetypeData: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  heights: state.skill.heights,
  primarySkills: state.skill.primarySkills,
  secondarySkills: state.skill.secondarySkills,
  archetypeData: state.skill.archetypeData,
})

export default connect(mapStateToProps, { fetchPrimarySkills, fetchSecondarySkills, fetchArchetypeData, fetchBuildData })(BuildSelector);
