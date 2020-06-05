import { container } from 'tsyringe';
import IContractsRepository from '@modules/contracts/repositories/IContractsRepository';
import ContractsRepository from '@modules/contracts/infra/typeorm/repositories/ContractsRepository';

container.registerSingleton<IContractsRepository>(
  'ContractsRepository',
  ContractsRepository,
);
