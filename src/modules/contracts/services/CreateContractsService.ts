import { injectable, inject } from 'tsyringe';
import IContractsRepository from '../repositories/IContractsRepository';
import Contracts from '../infra/typeorm/entities/Contracts';

interface IRequest {
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

@injectable()
class CreateContractService {
  constructor(
    @inject('ContractsRepository')
    private contractsRepository: IContractsRepository,
  ) {}

  public async execute({
    company,
    address,
    city,
    state,
    cnpj,
    ie,
    object,
    value,
    signature_date,
    order_date,
    duration_days,
    status,
  }: IRequest): Promise<Contracts> {
    const newContract = await this.contractsRepository.create({
      company,
      address,
      city,
      state,
      cnpj,
      ie,
      object,
      value,
      signature_date,
      order_date,
      duration_days,
      status,
    });

    return newContract;
  }
}

export default CreateContractService;
