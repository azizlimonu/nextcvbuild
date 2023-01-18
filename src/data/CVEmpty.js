import { v4 as uuidv4 } from 'uuid';

const CVEmpty = {
  generalInfo: {
    firstName: '',
    lastName: '',
    title: '',
    address: '',
    phoneNumber: '',
    email: '',
    description: '',
    linkedIn: '',
    facebook: '',
  },
  skills: [
    {
      id: uuidv4(),
      title: '',
      level: 'Beginner',
    },
  ],
  education: [
    {
      id: uuidv4(),
      universityName: '',
      city: '',
      degree: '',
      subject: '',
      from: '',
      to: '',
    },
  ],
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
  ],
  awards: [
    {
      id: uuidv4(),
      title: '',
      organization: '',
      year: '',
    },
  ],
  sertification: [
    {
      id: uuidv4(),
      name: '',
      source: '',
      from: '',
      to: '',
    },
  ]
};

export default CVEmpty;
