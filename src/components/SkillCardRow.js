import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import SkillCard from './SkillCard';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

export default function SkillCardRow(props) {
  const classes = useStyles();

  let uniqueKey = 0;
  const skillCards = props.skills.map(skill => (
    <Grid item xs key={uniqueKey++}>
      <SkillCard
        playerPosition={props.playerPosition}
        skillType={props.skillType}
        skill={skill}
      />
    </Grid>
  ))

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        { skillCards }
      </Grid>
    </div>
  );
}
