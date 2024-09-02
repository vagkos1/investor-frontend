import React from 'react';
import styles from './Table.module.css';

type AccessorFunction<T> = (item: T) => any;

interface Column<T> {
  header: string;
  accessor: keyof T | AccessorFunction<T>;
  render?: (item: T) => React.ReactNode;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
}

function Table<T>({ data, columns }: TableProps<T>) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.header} className={styles.th}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={column.header} className={styles.td}>
                {column.render 
                  ? column.render(item)
                  : typeof column.accessor === 'function'
                    ? column.accessor(item)
                    : item[column.accessor] as React.ReactNode}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;