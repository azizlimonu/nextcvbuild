import { createContext, useContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import CVEmpty from '@/data/CVEmpty';
import CVExample from '@/data/CVExample';

const CVContext = createContext(null);
const CVDispatchContext = createContext(null);

function cvReducer(cv, action) {
  switch (action.type) {
    case 'CHANGE_GENERAL_INFO': {
      return {
        ...cv,
        generalInfo: {
          ...cv.generalInfo,
          [action.name]: action.value,
        },
      };
    }
    case 'ADD_EDUCATION': {
      return {
        ...cv,
        education: [
          {
            id: uuidv4(),
            universityName: '',
            city: '',
            degree: '',
            major: '',
            from: '',
            to: '',
          },
          ...cv.education,
        ],
      };
    }
    case 'DELETE_EDUCATION': {
      const updatedEducation = cv.education.filter((e) => e.id !== action.id);

      return {
        ...cv,
        education: updatedEducation,
      };
    }
    case 'CHANGE_EDUCATION': {
      const index = cv.education.findIndex((e) => e.id === action.education.id);
      const newEducations = [...cv.education];
      newEducations[index] = { ...cv.education[index], ...action.education };

      const newCV = {
        ...cv,
        education: newEducations,
      };

      return { ...newCV };
    }
    case 'ADD_EXPERIENCE': {
      return {
        ...cv,
        experience: [
          {
            id: uuidv4(),
            position: '',
            company: '',
            city: '',
            from: '',
            to: '',
            description: '',
          },
          ...cv.experience,
        ],
      };
    }
    case 'DELETE_EXPERIENCE': {
      const updatedExperience = cv.experience.filter((e) => e.id !== action.id);

      return {
        ...cv,
        experience: updatedExperience,
      };
    }
    case 'CHANGE_EXPERIENCE': {
      const index = cv.experience.findIndex(
        (e) => e.id === action.experience.id
      );

      const newExperience = [...cv.experience];
      newExperience[index] = { ...cv.experience[index], ...action.experience };

      const newCV = {
        ...cv,
        experience: newExperience,
      };

      return { ...newCV };
    }
    case 'ADD_SKILL': {
      return {
        ...cv,
        skills: [
          {
            id: uuidv4(),
            title: 'Skill',
            level: 'Beginner',
          },
          ...cv.skills,
        ],
      };
    }
    case 'DELETE_SKILL': {
      const updatedSkills = cv.skills.filter((s) => s.id !== action.id);

      return {
        ...cv,
        skills: updatedSkills,
      };
    }
    case 'CHANGE_SKILL_TITLE': {
      const updatedSkills = cv.skills.map((skill) => {
        if (skill.id === action.id) {
          return { ...skill, title: action.title };
        }
        return skill;
      });

      return { ...cv, skills: updatedSkills };
    }

    case 'CHANGE_SKILL_LEVEL': {
      const updatedSkills = cv.skills.map((skill) => {
        if (skill.id === action.id) {
          console.log("action id", action.id);
          console.log("skill id", skill.id);
          console.log("action rating", action.rating);
          console.log("CV SKILLS", skill);
          return { ...skill, level: action.level };
        }
        return skill;
      });

      return { ...cv, skills: updatedSkills };
    }
    case 'ADD_AWARD': {
      return {
        ...cv,
        awards: [
          {
            id: uuidv4(),
            title: '',
            organization: '',
            year: '',
          },
          ...cv.awards,
        ],
      };
    }
    case 'DELETE_AWARD': {
      const updatedAwards = cv.awards.filter((a) => a.id !== action.id);

      return {
        ...cv,
        awards: updatedAwards,
      };
    }
    case 'CHANGE_AWARD': {
      const index = cv.awards.findIndex((a) => a.id === action.award.id);
      const newAwards = [...cv.awards];
      newAwards[index] = { ...cv.awards[index], ...action.award };

      const newCV = {
        ...cv,
        awards: newAwards,
      };

      return { ...newCV };
    }
    case 'LOAD_EXAMPLE_CV': {
      return { ...CVExample };
    }
    case 'LOAD_EMPTY_CV': {
      return { ...CVEmpty };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export function CVProvider({ children }) {
  const [cv, dispatch] = useReducer(cvReducer, CVExample);

  return (
    <CVContext.Provider value={cv}>
      <CVDispatchContext.Provider value={dispatch}>
        {children}
      </CVDispatchContext.Provider>
    </CVContext.Provider>
  );
}

export function useCV() {
  return useContext(CVContext);
}

export function useCVDispatch() {
  return useContext(CVDispatchContext);
}


