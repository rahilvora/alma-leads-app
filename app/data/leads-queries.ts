import { Lead } from './data-defination';
import { mockLeads } from './leads-mock-data';

/**
 * Fetch leads from the mock data
 * Given Leads Page is a server side component, we can directly talk to DB/downstream API without creating a new API endpoint for NextJS/Leads Page. 
 * @param query - The search query
 * @returns The list of leads
 */
export async function fetchLatestLeads(): Promise<Lead[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockLeads.slice(0, 8) as Lead[];
}

const LEADS_PER_PAGE = 8;
export async function fetchLeadsPages(query: string): Promise<number> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return Math.ceil(mockLeads.length / LEADS_PER_PAGE);
}

export async function fetchFilteredLeads(query: string, currentPage: number): Promise<Lead[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockLeads.slice((currentPage - 1) * LEADS_PER_PAGE, currentPage * LEADS_PER_PAGE);
}
