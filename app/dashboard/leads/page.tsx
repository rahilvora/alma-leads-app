import Search from '@/app/components/dashboard/leads/search';
import LeadsTable from '@/app/components/dashboard/leads/leads-table';
import StatusFilterButton from '@/app/components/dashboard/leads/status-filter-button';
import { Suspense } from 'react';
import { fetchLeadsPages } from '@/app/data/leads-queries';
export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query ?? '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchLeadsPages(query);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Leads</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search leads..." />
        <StatusFilterButton />
      </div>
      <Suspense key={query + currentPage}>
        <LeadsTable query={query} currentPage={currentPage} />
      </Suspense>
    </div >
  );
}