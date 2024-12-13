import React, { useEffect, useState } from 'react';
import styles from './DataTable.module.scss';
import AuditLogsIcon from '../../assets/icons/filter-results-button.svg';

interface User {
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
}

interface DataTableProps {
  headers: string[];
  data: User[] | string; // Accept data as an array or raw JSON string
}

const DataTable: React.FC<DataTableProps> = ({ headers, data }) => {
  const [sanitizedData, setSanitizedData] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Adjust this as needed

  // Compute the total pages
  const totalPages = Math.ceil(sanitizedData.length / itemsPerPage);

  useEffect(() => {
    const preprocessData = () => {
      try {
        let parsedData: User[] = Array.isArray(data)
          ? data
          : JSON.parse(
              (data as string).replace(/,(\s*[\]}])/g, '$1').trim() // Remove trailing commas
            );

        // Validate and sanitize each user object
        parsedData = parsedData.filter(
          (user) =>
            user.organization &&
            user.username &&
            user.email &&
            user.phoneNumber &&
            user.dateJoined &&
            user.status
        );

        setSanitizedData(parsedData);
      } catch (err) {
        console.error('Error sanitizing data:', err);
        setSanitizedData([]);
      }
    };

    preprocessData();
  }, [data]);

  // Get the data to display for the current page
  const currentData = sanitizedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>
                <div className={styles.headerContent}>
                  <span>{header}</span>
                  <img src={AuditLogsIcon} alt="" />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {currentData.map((user, index) => (
            <tr key={index}>
              <td>{user.organization}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.dateJoined}</td>
              <td>
                <span className={`${styles.status} ${styles[user.status.toLowerCase()]}`}>
                  {user.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className={styles.pagination}>
        <span>Showing {currentData.length} out of {sanitizedData.length}</span>
        <div className={styles.pageNumbers}>
          {[...Array(totalPages)].map((_, pageIndex) => (
            <button
              key={pageIndex}
              className={`${styles.pageButton} ${
                currentPage === pageIndex + 1 ? styles.activePage : ''
              }`}
              onClick={() => handlePageChange(pageIndex + 1)}
            >
              {pageIndex + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataTable;
