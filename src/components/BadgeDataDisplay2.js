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
        <h4 style={{ color: '#873ac7' }}>{badge}</h4>
      </li>
    ));
    uniqueKey = 0;
    const goldBadges = this.props.badgeData.gold.map(badge => (
      <li key={uniqueKey++}>
        <h4 style={{ color: '#FFD700' }}>{badge}</h4>
      </li>
    ));
    uniqueKey = 0;
    const silverBadges = this.props.badgeData.silver.map(badge => (
      <li key={uniqueKey++}>
        <h4 style={{ color: '#C0C0C0' }}>{badge}</h4>
      </li>
    ));
    uniqueKey = 0;
    const bronzeBadges = this.props.badgeData.bronze.map(badge => (
      <li key={uniqueKey++}>
        <h4 style={{ color: '#cd7f32' }}>{badge}</h4>
      </li>
    ));
    return (
      <div>
        <Paper style={{ minHeight: '242px', padding: '10px', marginBottom: '10px' }}>
          <h1 style={{ margin: '15px 0 20px 0', fontSize: '3em' }}>{this.props.buildName}</h1>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Paper className="badgeCountPaper" style={{ backgroundColor: '#873ac7' }}>
                <h2 className="badgeCount">{hofBadges.length}</h2>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className="badgeCountPaper" style={{ backgroundColor: '#FFD700' }}>
                <h2 className="badgeCount">{goldBadges.length}</h2>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className="badgeCountPaper" style={{ backgroundColor: '#C0C0C0' }}>
                <h2 className="badgeCount">{silverBadges.length}</h2>
              </Paper>
            </Grid>
            <Grid item xs={3}>
            <Paper className="badgeCountPaper" style={{ backgroundColor: '#cd7f32' }}>
                <h2 className="badgeCount">{bronzeBadges.length}</h2>
              </Paper>
            </Grid>
          </Grid>
          <hr style={{ marginTop: '20px' }} />
          <ul style={{ padding: '0' }}>
            {hofBadges}
            {goldBadges}
            {silverBadges}
            {bronzeBadges}
          </ul>
        </Paper>  
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
