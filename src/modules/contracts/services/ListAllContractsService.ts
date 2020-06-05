import { inject, injectable } from 'tsyringe';
import IContractsRepository from '../repositories/IContractsRepository';
import Contracts from '../infra/typeorm/entities/Contracts';

@injectable()
class ListAllContractsService {
  constructor(
    @inject('ContractsRepository')
    private contractsRepository: IContractsRepository,
  ) {}

  public async execute(): Promise<Contracts[]> {
    const contracts = await this.contractsRepository.listAllContracts();

    return contracts;
  }
}

export default ListAllContractsService;
