import { FaCogs } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';
import { FaCloud } from 'react-icons/fa';
import { FaClipboardList } from 'react-icons/fa';

export const SERVICES_LIST = [
  {
    name: 'Backend development',
    Icon: FaDatabase,
    description:
      'Developing RESTful APIs, including database design & system architecture utilizing proper design patterns.',
  },
  {
    name: 'Web Development',
    Icon: FaGlobe,
    description: 'Building web applications using modern technologies such as React, Next.js, and Tailwind CSS.',
  },
  {
    name: 'Mobile Development',
    Icon: FaMobileAlt,
    description: 'Building mobile applications using React Native and Expo & releasing to play/app store.',
  },
  {
    name: 'DevOps',
    Icon: FaCogs,
    description: 'Shipping services to production using Docker, Kubernetes & Helm.',
  },
  {
    name: 'Cloud Services',
    Icon: FaCloud,
    description: 'Deploying services on cloud providers like AWS, GCP & DigitalOcean.',
  },
  {
    name: 'Product & Planning',
    Icon: FaClipboardList,
    description:
      'Contribution to product development and planning, including user research, user testing, and product design.',
  },
];
