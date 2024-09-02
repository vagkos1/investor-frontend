export interface Investor {
    id: number;
    name: string;
    investor_type: string;
    country: string;
    date_added: string;
    commitments_total: {
      amount: number;
      currency: string;
    };
  }
  
  export interface Commitment {
    id: number;
    asset_class: string;
    total: {
      amount: number;
      currency: string;
    };
  }
  
  export interface CommitmentSummary {
    category: string;
    total: {
      amount: number;
      currency: string;
    };
  }
  
  export interface InvestorDetail extends Investor {
    commitments: Commitment[];
    commitments_summary: CommitmentSummary[];
  }