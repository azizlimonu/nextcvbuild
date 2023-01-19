import { v4 as uuidv4 } from 'uuid';

const CVExample = {
  generalInfo: {
    firstName: 'John',
    lastName: 'Doe',
    title: 'Software Engineer',
    address: 'United States, New York',
    phoneNumber: '+000 123456789',
    email: 'johndoe@gmail.com',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.',
    linkedIn: 'LinkedIn.com/JohnDoe',
    facebook: 'Facebook.com/JohnDoe',
  },
  skills: [
    {
      id: uuidv4(),
      title: 'TypeScript',
      level: 'Master',
    },
    {
      id: uuidv4(),
      title: 'JavaScript',
      level: 'Advance',
    },
    {
      id: uuidv4(),
      title: 'React',
      level: 'Advance',
    },
    {
      id: uuidv4(),
      title: 'MongoDB',
      level: 'Advance',
    },
    {
      id: uuidv4(),
      title: 'Express Js',
      level: 'Intermediate',
    },
  ],
  education: [
    {
      id: uuidv4(),
      universityName: 'University of Harvard',
      city: 'New York',
      degree: 'Master',
      major: 'Software Engineer',
      from: '2018',
      to: '2022',
    },
    {
      id: uuidv4(),
      universityName: 'University of Cambridge',
      city: 'New York',
      degree: 'Master',
      major: 'Artificial Intelegence',
      from: '2022',
      to: '2026',
    },
  ],
  experience: [
    {
      id: uuidv4(),
      position: 'Software Engineer',
      company: 'Tesla Corp',
      city: 'California',
      from: '2022',
      to: '2026',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolores debitis, doloribus porro delectus velit.',
    },
    {
      id: uuidv4(),
      position: 'Software Engineer',
      company: 'Shopie Corp',
      city: 'California',
      from: '2016',
      to: '2022',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolores debitis, doloribus porro delectus velit.',
    },
    {
      id: uuidv4(),
      position: 'CTO',
      company: 'Next Corp',
      city: 'California',
      from: '2002',
      to: '2016',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolores debitis, doloribus porro delectus velit.',
    },

  ],
  awards: [
    {
      id: uuidv4(),
      title: 'The Most Valuable Content',
      organization: 'CodeAcademy',
      year: '2022',
    },
    {
      id: uuidv4(),
      title: 'The Most Solved Problem',
      organization: 'FreeCodeCamp',
      year: '2021',
    },
  ],
  sertification: [
    {
      id: uuidv4(),
      name: 'ISO-1234',
      source: 'Udemy Course',
      from: '1974',
      to: '2022',
    },

  ],
};

export default CVExample;
