import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import BuildSelector from './BuildSelector';


class Playground extends Component {

  render() {
    return (
      <div style={{ margin: '2%' }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className="skillCards">xs=12</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className="skillCards">xs=6</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className="skillCards">xs=6</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className="skillCards">xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className="skillCards">xs=3</Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper className="skillCards">xs=3</Paper>
          </Grid>
          <Grid item xs={4}>
            <BuildSelector />
            {/*<Paper className="skillCards">xs=3</Paper>*/}
          </Grid>
        </Grid>
      </div>
    )
  } 
}

export default Playground;
