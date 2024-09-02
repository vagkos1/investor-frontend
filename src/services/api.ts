import axios from 'axios';
import { Investor, InvestorDetail } from '../types';

const API_BASE_URL = 'http://localhost:8000';

export const getInvestors = async (): Promise<Investor[]> => {
  const response = await axios.get(`${API_BASE_URL}/investors`);
  return response.data;
};

export const getInvestorDetail = async (id: number): Promise<InvestorDetail> => {
  const response = await axios.get(`${API_BASE_URL}/investors/${id}`);
  return response.data;
};