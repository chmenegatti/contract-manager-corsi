import { injectable, inject } from 'tsyringe';
import IContractsRepository from '../repositories/IContractsRepository';
import Contracts from '../infra/typeorm/entities/Contracts';

@injectable()
class ListShorInfoContractsService {
  constructor(
    @inject('ContractsRepository')
    private contractsRepository: IContractsRepository,
  ) {}

  public async execute(): Promise<Contracts[]> {
    const contracts = await this.contractsRepository.listShortInfoContracts();

    return contracts;
  }
}

export default ListShorInfoContractsService;
