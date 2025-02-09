import { Lead } from './data-defination';
import { mockLeads } from './leads-mock-data';

const LEADS_PER_PAGE = 8;

/**
 * Fetch latest leads from the mock data
 * Given Leads Page is a server side component, we can directly talk to DB/downstream API without creating a new API endpoint for NextJS/Leads Page. 
 * This is a simpler architecture for the give test
 * @returns The list of leads
 */
export async function fetchLatestLeads(): Promise<Lead[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockLeads.slice(0, 8) as Lead[];
}


export async function fetchLeadsPages(query: string): Promise<number> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  const filteredLeads = filterLeadsByQuery(mockLeads, query);
  return Math.ceil(filteredLeads.length / LEADS_PER_PAGE);
}

function filterLeadsByQuery(leads: Lead[], query: string): Lead[] {
  return leads.filter(lead => lead.name.toLowerCase().includes(query.toLowerCase()));
}

export async function fetchFilteredLeads(query: string, currentPage: number): Promise<Lead[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  /**
   * Currently, we only filter by name but we can extend this to filter by other fields
   */
  const filteredLeads = filterLeadsByQuery(mockLeads, query);
  return filteredLeads.slice((currentPage - 1) * LEADS_PER_PAGE, currentPage * LEADS_PER_PAGE);
}
