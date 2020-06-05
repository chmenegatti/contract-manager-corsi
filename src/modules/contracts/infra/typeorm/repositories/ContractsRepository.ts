import { getRepository, Repository } from 'typeorm';
import IContractsRepository from '@modules/contracts/repositories/IContractsRepository';
import ICreateContractDTO from '@modules/contracts/dtos/ICreateContractDTO';
import Contracts from '../entities/Contracts';

class ContractsRepository implements IContractsRepository {
  private ormRepository: Repository<Contracts>;

  constructor() {
    this.ormRepository = getRepository(Contracts);
  }

  public async listAllContracts(): Promise<Contracts[]> {
    const listAll = await this.ormRepository.find({
      order: { order_date: 'ASC' },
    });

    return listAll;
  }

  public async listShortInfoContracts(): Promise<Contracts[]> {
    const listShorInfo = await this.ormRepository.find({
      select: [
        'id',
        'company',
        'city',
        'state',
        'value',
        'signature_date',
        'status',
      ],
      order: {
        signature_date: 'ASC',
      },
    });

    return listShorInfo;
  }

  public async findById(id: string): Promise<Contracts | undefined> {
    const contract = await this.ormRepository.findOne(id);

    return contract;
  }

  public async create({
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
  }: ICreateContractDTO): Promise<Contracts> {
    const newContract = this.ormRepository.create({
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

    await this.ormRepository.save(newContract);

    return newContract;
  }
}

export default ContractsRepository;
