import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { getInvestorDetail } from '../../services/api';
import { InvestorDetail as InvestorDetailType, Commitment, CommitmentSummary } from '../../types';
import Table from '../Table/Table';
import styles from './InvestorDetail.module.css';

const InvestorDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [investorDetail, setInvestorDetail] = useState<InvestorDetailType | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchInvestorDetail = async () => {
      if (id) {
        try {
          const data = await getInvestorDetail(parseInt(id, 10));
          setInvestorDetail(data);
        } catch (error) {
          console.error('Error fetching investor detail:', error);
        }
      }
    };

    fetchInvestorDetail();
  }, [id]);

  const columns = useMemo(() => [
    { header: 'Id', accessor: 'id' as keyof Commitment },
    { header: 'Asset Class', accessor: 'asset_class' as keyof Commitment },
    { 
      header: 'Currency', 
      accessor: (commitment: Commitment) => commitment.total.currency
    },
    { 
      header: 'Amount', 
      accessor: 'total' as keyof Commitment,
      render: (commitment: Commitment) => 
        `${(commitment.total.amount / 1e6).toFixed(1)}M`
    },
  ], []);

  if (!investorDetail) {
    return <div>Loading...</div>;
  }

  const allCategorySummary: CommitmentSummary = {
    category: 'All',
    total: investorDetail.commitments_total
  };

  const summaries = [allCategorySummary, ...investorDetail.commitments_summary];

  const filteredCommitments = selectedCategory && selectedCategory !== 'All'
    ? investorDetail.commitments.filter(c => c.asset_class === selectedCategory)
    : investorDetail.commitments;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Commitments for {investorDetail.name}</h1>
      
      <div className={styles.summaryGrid}>
        {summaries.map((summary) => (
          <button
            key={summary.category}
            className={`${styles.summaryCard} ${selectedCategory === summary.category ? styles.selected : ''}`}
            onClick={() => setSelectedCategory(selectedCategory === summary.category ? null : summary.category)}
          >
            <h2>{summary.category}</h2>
            <p>{summary.total && `${(summary.total.amount / 1e9).toFixed(1)}B ${summary.total.currency}`}</p>
          </button>
        ))}
      </div>

      <Table data={filteredCommitments} columns={columns} />
    </div>
  );
};

export default InvestorDetail;