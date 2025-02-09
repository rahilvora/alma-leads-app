// Dashboard User mock data 
export type User = {
  id: string;
  username: string;
  password: string;
  name: string;
  email: string;
};

// Leads mock data
export type Lead = {
  id: string;
  name: string;
  email: string;
  country_of_citizenship: string;
  visa_type: VisaType;
  request: string;
  status: LeadStatus;
  submitted_at: number;
  updated_at: number;
};

export type LeadStatus = 'pending' | 'reach_out';

export type VisaType =
  | 'O1'
  | 'H1B'
  | 'EB1A'
  | 'EB1B'
  | 'EB2'
  | 'EB3'
  | 'EB4'
  | 'EB5'
  | 'unknown';
