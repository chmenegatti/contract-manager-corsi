import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IContractsRepository from '../repositories/IContractsRepository';
import Contracts from '../infra/typeorm/entities/Contracts';

interface IRequest {
  contract_id: string;
}

@injectable()
class ShowContractService {
  constructor(
    @inject('ContractsRepository')
    private contractsRepository: IContractsRepository,
  ) {}

  public async execute({
    contract_id,
  }: IRequest): Promise<Contracts | undefined> {
    const contract = await this.contractsRepository.findById(contract_id);

    if (!contract) {
      throw new AppError('Contract not found');
    }

    return contract;
  }
}

export default ShowContractService;
