"use client";
import { useCallback, useState } from "react";

export const usePagination = (totalPages: number) => {
  const [pagination, setPagination] = useState({
    currentPage: 0,
    totalPages: totalPages || 0,
    limit: 10,
  });
  return {
    pagination,
    setPagination,
  };
};

export const PaginationComponent: React.FC<{
  totalPages?: number;
  onPageChange: any;
}> = ({ totalPages = 0, onPageChange }) => {
  const { pagination, setPagination } = usePagination(totalPages);

  const updatePageNumber = useCallback((evnt: any) => {
    onPageChange(evnt.target.value);
    setPagination((data) => ({ ...data, currentPage: evnt.target.value }));
  }, []);
  const pages = new Array(pagination.totalPages);

  return (
    <div>
      {[...pages].map((i, indx) => {
        return (
          <button
            style={{
              width: "fit-content",
              minWidth: "48px",
              minHeight: "12px",
            }}
            key={indx + 1}
            id={String(indx + 1)}
            value={indx}
            onClick={updatePageNumber}
          >
            {indx + 1}
          </button>
        );
      })}
    </div>
  );
};
