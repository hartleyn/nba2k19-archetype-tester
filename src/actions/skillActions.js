import { 
  FETCH_PRIMARY_SKILLS, 
  FETCH_SECONDARY_SKILLS,
  FETCH_ARCHETYPE_DATA, 
} from './types';
import axios from 'axios';


export const fetchPrimarySkills = (playerPosition) => dispatch => {
  axios.get('archetypeStats.json')
    .then(res => {
      dispatch({
        type: FETCH_PRIMARY_SKILLS,
        payload: Object.keys(res.data.playerPositions[playerPosition].primarySkills),
      })
    })
    .catch(error => console.error(error));
}

export const fetchSecondarySkills = (playerPosition, primarySkill) => dispatch => {
  axios.get('archetypeStats.json')
    .then(res => {
      const secondarySkills = Object.keys(res.data.playerPositions[playerPosition].primarySkills[primarySkill].secondarySkills);
      dispatch({
        type: FETCH_SECONDARY_SKILLS,
        skill: primarySkill,
        payload: secondarySkills,
      })
    })
    .catch(error => console.error(error));
}

export const fetchArchetypeData = (playerPosition, primarySkill, secondarySkill) => dispatch => {
  axios.get('archetypeStats.json')
    .then(res => {
      console.log(primarySkill);
      console.log(res.data.playerPositions[playerPosition].primarySkills);
      const archetypeData = res.data.playerPositions[playerPosition].primarySkills[primarySkill].secondarySkills[secondarySkill].attributeCaps;
      dispatch({
        type: FETCH_ARCHETYPE_DATA,
        payload: archetypeData,
      })
    })  
    .catch(error => console.error(error));
}
