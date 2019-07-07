import { 
  FETCH_PRIMARY_SKILLS, 
  FETCH_SECONDARY_SKILLS,
  FETCH_ARCHETYPE_DATA,
  FETCH_BUILD_DATA,
} from '../actions/types';


const initialState = {
  heights: [],
  activePosition: '',
  selectedPrimarySkill: '',
  primarySkills: [],
  primarySkillsUpdated: false,
  primarySkillSelected: false,
  selectedSecondarySkill: '',
	secondarySkills: [],
  secondarySkillsUpdated: false,
  secondarySkillSelected: false,
  archetypeData: [],
  buildName: '',
  badgeData: {
    hof: [],
    gold: [],
    silver: [],
    bronze: [],
  },
}

export default function(state=initialState, action) {
	switch(action.type) {
		case FETCH_PRIMARY_SKILLS:
			return {
        ...state,
        heights: action.payload['heights'],
        primarySkills: action.payload['primarySkills'],
        primarySkillsUpdated: true,
        activePosition: action.position,
			}
		case FETCH_SECONDARY_SKILLS:
			return {
        ...state,
				secondarySkills: action.payload,
        secondarySkillsUpdated: true,
        primarySkillSelected: true,
        selectedPrimarySkill: action.skill,
        activePosition: action.position,
      }
    case FETCH_ARCHETYPE_DATA:
      return {
        ...state,
        archetypeData: action.payload,
        secondarySkillSelected: true,
      }
    case FETCH_BUILD_DATA:
      return {
        ...state,
        buildName: action.name,
        badgeData: action.badges,
      }
		default:
			return state;
	}
}
