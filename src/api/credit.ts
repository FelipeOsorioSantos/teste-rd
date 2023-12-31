import { axiosConnection } from './axios-instance';

export interface ICreditResponse {
  name?: string;
  document?: string;
  id?: number;
  date_create?: string;
  date_update?: string;
  merchant_id?: number;
  value?: number;
  loan_id?: string;
  status?: string;
  borrower_id?: string;
}

export interface ICreatePJ {
  foundation_year: string;
  fantasy_name: string;
  company_name: string;
  cnpj: string;
  facebook?: string;
  instagram?: string;
  commercial_phone: string;
  monthly_revenue: number;
  accept_terms_sign_up: boolean;
  responsible_name: string;
  responsible_cpf: string;
  email: string;
  executive_name?: string;
}

export interface ICreateLoan {
  create_pj_data: ICreatePJ;
  // borrower_id: number;
  loan_value: number;
  loan_term: number;
  loan_reason: string;
  applicant_vinculo: string;
  // origin: string;
}

export const postCreateLoan = async (params: ICreateLoan) => {
  try {
    const data = await axiosConnection.post('/credit/create-loan', params);
    const response = { data: data.data, status: data.status, message: '' };
    return response;
  } catch (error: any) {
    const cause = error?.response?.data?.message?.response?.cause || '';
    const errorMessage = `${error?.response?.data?.message?.response?.error} ${cause}`;
    const response = {
      error: !!error,
      message: errorMessage != 'undefined ' ? errorMessage : 'Ocorreu um problema, tente novamente mais tarde!',
      status: error?.response.status || 500,
    };

    return response;
  }
};
