import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


class BadgeDataDisplay extends Component {
  render() {
    let uniqueKey = 0;
    const hofBadges = this.props.badgeData.hof.map(badge => (
      <li key={uniqueKey++}>
        {badge}
      </li>
    ));
    uniqueKey = 0;
    const goldBadges = this.props.badgeData.gold.map(badge => (
      <li key={uniqueKey++}>
        {badge}
      </li>
    ));
    uniqueKey = 0;
    const silverBadges = this.props.badgeData.silver.map(badge => (
      <li key={uniqueKey++}>
        {badge}
      </li>
    ));
    uniqueKey = 0;
    const bronzeBadges = this.props.badgeData.bronze.map(badge => (
      <li key={uniqueKey++}>
        {badge}
      </li>
    ));
    return (
      <div>
       
          <h1 style={{ margin: '0' }}>{this.props.buildName}</h1>
          <Grid container>
            <Grid item xs={3}>
              <p>HOF</p>
              <Paper style={{ padding: '10px', backgroundColor: '#873ac7' }}>
                <ul style={{ padding: '0' }}>
                  {hofBadges}
                </ul>
              </Paper>
            </Grid>
            <Grid item xs={3}>	
              <p>Gold</p>
              <Paper style={{ padding: '10px', backgroundColor: '#FFD700' }}>
                <ul style={{ padding: '0' }}>
                  {goldBadges}
                </ul>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <p>Silver</p>
              <Paper style={{ padding: '10px', backgroundColor: '#C0C0C0' }}>
                <ul style={{ padding: '0' }}>
                  {silverBadges}
                </ul>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <p>Bronze</p>
              <Paper style={{ padding: '10px', backgroundColor: '#cd7f32' }}>
                <ul style={{ padding: '0' }}>
                  {bronzeBadges}
                </ul>
              </Paper>
            </Grid>
          </Grid>
        
      </div>
    )
  }
}

BadgeDataDisplay.propTypes = {
  buildName: PropTypes.string.isRequired,
  badgeData: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  buildName: state.skill.buildName,
  badgeData: state.skill.badgeData,
})

export default connect(mapStateToProps, {})(BadgeDataDisplay);
