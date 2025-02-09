import { Lead, LeadStatus, VisaType } from './data-defination';

export const mockLeads: Lead[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    country_of_citizenship: 'United Kingdom',
    visa_type: 'O1',
    request: 'Looking to apply for O1 visa as a software engineer with 10 years of experience',
    status: 'pending',
    submitted_at: 1709251200000, // March 1, 2024
    updated_at: 1709251200000,
  },
  {
    id: '2',
    name: 'Maria Garcia',
    email: 'maria.garcia@example.com',
    country_of_citizenship: 'Spain',
    visa_type: 'H1B',
    request: 'Seeking H1B sponsorship for data scientist position',
    status: 'reach_out',
    submitted_at: 1709164800000, // February 29, 2024
    updated_at: 1709337600000, // March 2, 2024
  },
  {
    id: '3',
    name: 'Wei Chen',
    email: 'wei.chen@example.com',
    country_of_citizenship: 'China',
    visa_type: 'EB1A',
    request: 'Interested in EB1A application based on research achievements in AI',
    status: 'pending',
    submitted_at: 1709078400000, // February 28, 2024
    updated_at: 1709078400000,
  },
  {
    id: '4',
    name: 'Juan Rodriguez',
    email: 'juan.rodriguez@example.com',
    country_of_citizenship: 'Mexico',
    visa_type: 'EB2',
    request: 'Looking for EB2 visa assistance for a software engineer position',
    status: 'pending',
    submitted_at: 1709078400000, // February 28, 2024
    updated_at: 1709078400000,
  }
  ,
  {
    id: '5',
    name: 'Priya Patel',
    email: 'priya.patel@example.com',
    country_of_citizenship: 'India',
    visa_type: 'H1B',
    request: 'H1B transfer for senior software developer role',
    status: 'pending',
    submitted_at: 1708992000000, // February 27, 2024
    updated_at: 1708992000000
  },
  {
    id: '6',
    name: 'Ahmed Hassan',
    email: 'ahmed.hassan@example.com',
    country_of_citizenship: 'Egypt',
    visa_type: 'O1',
    request: 'O1 visa application for AI research scientist position',
    status: 'reach_out',
    submitted_at: 1708905600000, // February 26, 2024
    updated_at: 1709337600000
  },
  {
    id: '7',
    name: 'Sofia Kowalski',
    email: 'sofia.k@example.com',
    country_of_citizenship: 'Poland',
    visa_type: 'EB1A',
    request: 'EB1A application for distinguished researcher in biotechnology',
    status: 'pending',
    submitted_at: 1708819200000, // February 25, 2024
    updated_at: 1708819200000
  },
  {
    id: '8',
    name: 'Yuki Tanaka',
    email: 'yuki.tanaka@example.com',
    country_of_citizenship: 'Japan',
    visa_type: 'EB2',
    request: 'EB2 application for technical architect position',
    status: 'reach_out',
    submitted_at: 1708732800000, // February 24, 2024
    updated_at: 1709251200000
  },
  {
    id: '9',
    name: 'Lucas Silva',
    email: 'lucas.silva@example.com',
    country_of_citizenship: 'Brazil',
    visa_type: 'H1B',
    request: 'H1B visa for full-stack developer position',
    status: 'pending',
    submitted_at: 1708646400000, // February 23, 2024
    updated_at: 1708646400000
  },
  {
    id: '10',
    name: 'Anna Ivanova',
    email: 'anna.iv@example.com',
    country_of_citizenship: 'Russia',
    visa_type: 'O1',
    request: 'O1 visa for quantum computing researcher',
    status: 'pending',
    submitted_at: 1708560000000, // February 22, 2024
    updated_at: 1708560000000
  },
  {
    id: '11',
    name: 'Mohammed Al-Sayed',
    email: 'mohammed.as@example.com',
    country_of_citizenship: 'Saudi Arabia',
    visa_type: 'EB1A',
    request: 'EB1A application for distinguished achievements in robotics',
    status: 'reach_out',
    submitted_at: 1708473600000, // February 21, 2024
    updated_at: 1709337600000
  },
  {
    id: '12',
    name: 'Emma Anderson',
    email: 'emma.and@example.com',
    country_of_citizenship: 'Australia',
    visa_type: 'E3',
    request: 'E3 visa for software engineering position',
    status: 'pending',
    submitted_at: 1708387200000, // February 20, 2024
    updated_at: 1708387200000
  },
  {
    id: '13',
    name: 'Lars Nielsen',
    email: 'lars.nielsen@example.com',
    country_of_citizenship: 'Denmark',
    visa_type: 'O1',
    request: 'O1 visa for exceptional UX/UI designer',
    status: 'pending',
    submitted_at: 1708300800000, // February 19, 2024
    updated_at: 1708300800000
  },
  {
    id: '14',
    name: 'Nina Petrova',
    email: 'nina.p@example.com',
    country_of_citizenship: 'Ukraine',
    visa_type: 'EB2',
    request: 'EB2 visa for cybersecurity expert position',
    status: 'reach_out',
    submitted_at: 1708214400000, // February 18, 2024
    updated_at: 1709251200000
  },
  {
    id: '15',
    name: 'Carlos Mendoza',
    email: 'carlos.m@example.com',
    country_of_citizenship: 'Argentina',
    visa_type: 'H1B',
    request: 'H1B visa for machine learning engineer role',
    status: 'pending',
    submitted_at: 1708128000000, // February 17, 2024
    updated_at: 1708128000000
  },
  {
    id: '16',
    name: 'Sarah Kim',
    email: 'sarah.kim@example.com',
    country_of_citizenship: 'South Korea',
    visa_type: 'EB1A',
    request: 'EB1A application for blockchain technology expert',
    status: 'pending',
    submitted_at: 1708041600000, // February 16, 2024
    updated_at: 1708041600000
  },
  {
    id: '17',
    name: 'Thomas Mueller',
    email: 'thomas.m@example.com',
    country_of_citizenship: 'Germany',
    visa_type: 'O1',
    request: 'O1 visa for distinguished software architect',
    status: 'reach_out',
    submitted_at: 1707955200000, // February 15, 2024
    updated_at: 1709337600000
  },
  {
    id: '18',
    name: 'Aisha Rahman',
    email: 'aisha.r@example.com',
    country_of_citizenship: 'Bangladesh',
    visa_type: 'H1B',
    request: 'H1B visa for data engineering position',
    status: 'pending',
    submitted_at: 1707868800000, // February 14, 2024
    updated_at: 1707868800000
  },
  {
    id: '19',
    name: 'Marco Rossi',
    email: 'marco.r@example.com',
    country_of_citizenship: 'Italy',
    visa_type: 'EB2',
    request: 'EB2 visa for senior DevOps engineer role',
    status: 'pending',
    submitted_at: 1707782400000, // February 13, 2024
    updated_at: 1707782400000
  },
  {
    id: '20',
    name: 'Lily Wong',
    email: 'lily.w@example.com',
    country_of_citizenship: 'Singapore',
    visa_type: 'O1',
    request: 'O1 visa for exceptional product manager',
    status: 'reach_out',
    submitted_at: 1707696000000, // February 12, 2024
    updated_at: 1709251200000
  },
  {
    id: '21',
    name: 'Viktor Kovac',
    email: 'viktor.k@example.com',
    country_of_citizenship: 'Croatia',
    visa_type: 'EB1A',
    request: 'EB1A application for distinguished cloud architect',
    status: 'pending',
    submitted_at: 1707609600000, // February 11, 2024
    updated_at: 1707609600000
  },
  {
    id: '22',
    name: 'Isabella Santos',
    email: 'isabella.s@example.com',
    country_of_citizenship: 'Portugal',
    visa_type: 'H1B',
    request: 'H1B visa for mobile app developer position',
    status: 'pending',
    submitted_at: 1707523200000, // February 10, 2024
    updated_at: 1707523200000
  },
  {
    id: '23',
    name: 'Raj Malhotra',
    email: 'raj.m@example.com',
    country_of_citizenship: 'India',
    visa_type: 'EB2',
    request: 'EB2 visa for technical lead position',
    status: 'reach_out',
    submitted_at: 1707436800000, // February 9, 2024
    updated_at: 1709337600000
  },
  {
    id: '24',
    name: 'Elena Popov',
    email: 'elena.p@example.com',
    country_of_citizenship: 'Bulgaria',
    visa_type: 'O1',
    request: 'O1 visa for distinguished data scientist',
    status: 'pending',
    submitted_at: 1707350400000, // February 8, 2024
    updated_at: 1707350400000
  }
];
