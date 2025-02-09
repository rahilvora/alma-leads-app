import { fetchFilteredLeads } from "@/app/data/leads-queries"
import { Lead } from "@/app/data/data-defination";
import { epochToDateTime } from "@/app/utils/date-time-util";
import Button from "@/app/components/shared/button";
export default async function LeadsTable({
  query, currentPage,
}: {
  query: string,
  currentPage: number
}) {
  const leads = await fetchFilteredLeads(query, currentPage);
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg border border-gray-200 md:pt-0">
          <div className="md:hidden">
            {leads?.map((lead: Lead) => (
              <div
                key={lead.id}
                className="mb-2 w-full rounded-md bg-white border-b border-gray-200 p-4"
              >
                <div className="flex items-center justify-between pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{lead.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{epochToDateTime(lead.submitted_at)}</p>
                  </div>
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{lead.status}</p>
                    </div>
                    <p className="text-sm text-gray-500">{lead.country_of_citizenship}</p>
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  {lead.status === "pending" ? (
                    <Button variant="primary" size="sm">
                      Reach Out
                    </Button>
                  ) : (
                    <span className="rounded-md bg-gray-100 px-4 py-2 text-gray-500">
                      No Action
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg border-b border-gray-200 text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Submitted
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Country
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {leads?.map((lead) => (
                <tr
                  key={lead.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3 h-16">
                    <p>{lead.name}</p>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {epochToDateTime(lead.submitted_at)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {lead.status}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {lead.country_of_citizenship}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {lead.status === "pending" ? (
                      <Button variant="primary" size="sm">
                        Reach Out
                      </Button>
                    ) : (
                      <span className="rounded-md bg-gray-100 px-4 py-2 text-gray-500">
                        No Action
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}