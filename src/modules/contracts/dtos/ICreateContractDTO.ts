export default interface ICreateContractDTO {
  company: string;
  address: string;
  city: string;
  state: string;
  cnpj: string;
  ie: string;
  object: string;
  value: number;
  signature_date: Date;
  order_date: Date;
  duration_days: number;
  status: string;
}
