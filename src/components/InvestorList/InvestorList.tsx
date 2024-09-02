import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getInvestors } from '../../services/api';
import { Investor } from '../../types';
import Table from '../Table/Table';
import styles from './InvestorList.module.css';

const InvestorList: React.FC = () => {
  const [investors, setInvestors] = useState<Investor[]>([]);

  useEffect(() => {
    const fetchInvestors = async () => {
      try {
        const data = await getInvestors();
        setInvestors(data);
      } catch (error) {
        console.error('Error fetching investors:', error);
      }
    };

    fetchInvestors();
  }, []);

  const columns = [
    { header: 'Id', accessor: 'id' as const },
    { 
      header: 'Name', 
      accessor: 'name' as const, 
      render: (investor: Investor) => (
        <Link to={`/investors/${investor.id}`} className={styles.link}>
          {investor.name}
        </Link>
      )
    },
    { header: 'Type', accessor: 'investor_type' as const },
    { header: 'Date Added', accessor: 'date_added' as const },
    { header: 'Country', accessor: 'country' as const },
    { 
      header: 'Total Commitment', 
      accessor: 'commitments_total' as const,
      render: (investor: Investor) => 
        `${(investor.commitments_total.amount / 1e9).toFixed(1)}B ${investor.commitments_total.currency}`
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Investors</h1>
      <Table data={investors} columns={columns} />
    </div>
  );
};

export default InvestorList;