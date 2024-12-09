import React from 'react';
import styles from './DataTable.module.scss';

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
  data: User[];
}

const DataTable: React.FC<DataTableProps> = ({ headers, data }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) => (
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
  );
};

export default DataTable;
