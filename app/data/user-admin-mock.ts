import { User } from "./data-defination";

export const users: User[] = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    username: 'admin',
    password: 'admin123', // In a real app, this would be hashed
    name: 'Admin User',
    email: 'admin@alma.com'
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    username: 'sarah',
    password: 'sarah123',
    name: 'Sarah Wilson',
    email: 'sarah.wilson@alma.com'
  },
  {
    id: '76d65c26-f784-44a2-ac19-fec4b6a6442a',
    username: 'john',
    password: 'john123',
    name: 'John Davis',
    email: 'john.davis@alma.com'
  },
  {
    id: '57d65c26-f784-44a2-ac19-fec4b6a6442a',
    username: 'emma',
    password: 'emma123',
    name: 'Emma Thompson',
    email: 'emma.thompson@alma.com'
  }
];
