"use client";

import { useEffect, useState } from "react";
import Pagination from "../_components/blog/Pagination";
import { api } from "@/trpc/react";
import BlogItem from "../_components/blog/BlogItem";
import { Skeleton } from "@/components/ui/skeleton";

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);

  const blogs = api.blog.getLatestPosts.useMutation();

  const isNoPostFinded = !blogs.isPending && blogs.data?.posts.length === 0;

  const pagesLimit = 5;

  useEffect(() => {
    blogs.mutate({ limit: pagesLimit, cursor: currentPage });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <div className="w-full py-6">
      <div className="mb-5">
        <h1 className="font-comfortaa text-2xl font-medium">Наш Блог</h1>
      </div>

      {isNoPostFinded && <p className="text-center">Постов не найдено</p>}
      <div className="grid grid-cols-2 justify-end gap-8 border-black max-md:grid-cols-1">
        {!blogs.isPending ? (
          <>
            {blogs.data?.posts.map((page) => (
              <BlogItem item={page} key={page.id} />
            ))}
          </>
        ) : (
          <>
            {/* Skeleton */}
            {Array.from({ length: pagesLimit }).map((_, index) => (
              <div
                className="mx-auto flex max-h-[320px] max-w-[500px] flex-col items-center pb-7"
                key={index}
              >
                <Skeleton className="mb-4 h-4 w-full" />
                <Skeleton className="h-[300px] w-full max-md:h-[150px]" />
                <div className="w-full space-y-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Skeleton key={index} className="mb-4 h-4 w-full" />
                  ))}
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      <Pagination
        pagesLimit={pagesLimit}
        currentPage={currentPage}
        isFetching={blogs.isIdle || isNoPostFinded}
        onClick={(page: number) => setCurrentPage(page)}
        onNextPageClick={() => setCurrentPage(currentPage + 1)}
        onPrevPageClick={() => setCurrentPage(currentPage - 1)}
      />
    </div>
  );
}
