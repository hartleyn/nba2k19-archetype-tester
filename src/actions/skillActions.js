import {
  FETCH_PRIMARY_SKILLS, 
  FETCH_SECONDARY_SKILLS,
  FETCH_ARCHETYPE_DATA, 
  FETCH_BUILD_DATA,
} from './types';
import axios from 'axios';


/*
export const fetchAttributeNames = () => dispatch => {
  axios.get('data/2KDATA_PG_complete.json')
  .then(res => {
    const attributeNames = 
    dispatch({
      type: ,
      payload: ,
    })
  })
  .catch(error => console.error(error));
}
*/

export const fetchPrimarySkills = (playerPosition) => dispatch => {
  console.log(playerPosition);
  axios.get('data/nba2k_info.json')
    .then(res => {
      dispatch({
        type: FETCH_PRIMARY_SKILLS,
        position: playerPosition.label,
        payload: res.data[playerPosition.label],
      })
    })
    .catch(error => console.error(error));
}

export const fetchSecondarySkills = (playerPosition, primarySkill) => dispatch => {
  axios.get('data/nba2k_info.json')
    .then(res => {
      const secondarySkills = res.data[playerPosition.label]['secondarySkills'];
      dispatch({
        type: FETCH_SECONDARY_SKILLS,
        skill: primarySkill,
        position: playerPosition,
        payload: secondarySkills,
      })
    })
    .catch(error => console.error(error));
}

export const fetchArchetypeData = (playerPosition, primarySkill, secondarySkill, playerHeight) => dispatch => { 
  axios.get(`data/2kdata_${playerPosition.value}_complete.json`)
    .then(res => {
      //console.log(primarySkill);
      //console.log(res.data[playerPosition.value].primarySkills[primarySkill]);
      const archetypeData = res.data[playerPosition.value].primarySkills[primarySkill.value].secondarySkills[secondarySkill.value].heights[playerHeight.value];
      dispatch({
        type: FETCH_ARCHETYPE_DATA,
        payload: archetypeData,
      })
    })  
    .catch(error => console.error(error));
}

export const fetchBuildData = (playerPosition, primarySkill, secondarySkill) => dispatch => {
  axios.get(`data/2kdata_${playerPosition.value}_complete.json`)
    .then(res => {
      const buildName = res.data[playerPosition.value].primarySkills[primarySkill.value].secondarySkills[secondarySkill.value].buildName;
      const badgeData = res.data[playerPosition.value].primarySkills[primarySkill.value].secondarySkills[secondarySkill.value].badges;
      dispatch({
        type: FETCH_BUILD_DATA,
        name: buildName, 
        badges: badgeData,
      })
    })
    .catch(error => console.error(error));
}
