import React, { useMemo } from "react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

function TablePagination() {
  const data = useMemo(
    () => [
      { id: 160124737777, name: "Niju", age: 25 },
      { id: 160124737150, name: "Jane", age: 30 },
      { id: 160124737157, name: "Srinija", age: 22 },
      { id: 160124737154, name: "Nitish", age: 28 },
      { id: 160124737155, name: "Aksah", age: 35 },
      { id: 160124737156, name: "Siri", age: 27 },
      { id: 160124737089, name: "Samhitha", age: 24 },
      { id: 160124737143, name: "Harish", age: 29 },
    ],
    []
  );

  const columns = useMemo(
    () => [
      { header: "ID", accessorKey: "id" },
      { header: "Name", accessorKey: "name" },
      { header: "Age", accessorKey: "age" },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 3,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Table Pagination</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "12px",
        }}
      >
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  style={{ border: "1px solid #ccc", padding: "8px" }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  style={{ border: "1px solid #ccc", padding: "8px" }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </button>

        <span>
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </span>

        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>

        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => table.setPageSize(Number(e.target.value))}
        >
          {[3, 5, 10].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default TablePagination;


