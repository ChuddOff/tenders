import {
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
  Pagination,
} from "@/components/ui/pagination";
import { api } from "@/trpc/react";

interface Props {
  pagesLimit: number;
  currentPage: number;
  onClick: (page: number) => void;
  onNextPageClick?: () => void;
  onPrevPageClick?: () => void;
  isFetching?: boolean;
}

export default function BlogPagination({
  pagesLimit,
  currentPage,
  isFetching,
  onClick,
  onNextPageClick,
  onPrevPageClick,
}: Props) {
  const postsCount = api.blog.getTotalPostsNum.useQuery(
    { pagesLimit },
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  );

  const totalPages = postsCount.data ?? 0;
  const buttonsInLeft = 2;
  const buttonsInRight = 2;
  const startPage = Math.max(1, currentPage - buttonsInLeft);
  const endPage = Math.min(totalPages, currentPage + buttonsInRight);

  return (
    <>
      {postsCount.isFetching || isFetching ? null : (
        <Pagination className="mt-6">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => startPage !== currentPage && onPrevPageClick?.()}
                className={`${startPage === currentPage ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
              />
            </PaginationItem>
            {Array.from(
              { length: endPage - startPage + 1 },
              (_, i) => startPage + i,
            ).map((pageNumber) => (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  onClick={() => onClick(+pageNumber)}
                  isActive={pageNumber === currentPage}
                  className="cursor-pointer"
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            ))}

            {currentPage < totalPages - buttonsInRight && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationNext
                onClick={() => endPage !== currentPage && onNextPageClick?.()}
                className={`${endPage === currentPage ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
}
