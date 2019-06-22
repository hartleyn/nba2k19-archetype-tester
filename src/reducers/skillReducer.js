import { 
  FETCH_PRIMARY_SKILLS, 
  FETCH_SECONDARY_SKILLS,
  FETCH_ARCHETYPE_DATA,
} from '../actions/types';


const initialState = {
  selectedPrimarySkill: '',
  primarySkills: [],
  primarySkillsUpdated: false,
  primarySkillSelected: false,
  selectedSecondarySkill: '',
	secondarySkills: [],
  secondarySkillsUpdated: false,
  secondarySkillSelected: false,
  archetypeData: [],
}

export default function(state=initialState, action) {
	switch(action.type) {
		case FETCH_PRIMARY_SKILLS:
			return {
        ...state,
        primarySkills: action.payload,
        primarySkillsUpdated: true,
			}
		case FETCH_SECONDARY_SKILLS:
			return {
        ...state,
				secondarySkills: action.payload,
        secondarySkillsUpdated: true,
        primarySkillSelected: true,
        selectedPrimarySkill: action.skill,
      }
    case FETCH_ARCHETYPE_DATA:
      return {
        ...state,
        archetypeData: action.payload,
        secondarySkillSelected: true,
      }
		default:
			return state;
	}
}
