import Contracts from '../infra/typeorm/entities/Contracts';
import ICreateContractDTO from '../dtos/ICreateContractDTO';

export default interface IContractsRepository {
  create(data: ICreateContractDTO): Promise<Contracts>;

  listAllContracts(): Promise<Contracts[]>;

  listShortInfoContracts(): Promise<Contracts[]>;

  findById(id: string): Promise<Contracts | undefined>;
}
