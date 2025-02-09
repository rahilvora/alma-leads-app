export function generatePagination(currentPage: number, totalPages: number) {
  return Array.from({ length: totalPages }, (_, i) => i + 1);
}