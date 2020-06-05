import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateContractsService from '@modules/contracts/services/CreateContractsService';
import ListAllContracsService from '@modules/contracts/services/ListAllContractsService';
import ShowContractService from '@modules/contracts/services/ShowContractService';

export default class ContractsController {
  public async show(request: Request, response: Response): Promise<Response> {
    const contract_id = request.params.id;

    const getContract = container.resolve(ShowContractService);

    const showContract = await getContract.execute({ contract_id });

    return response.json(showContract);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listContracts = container.resolve(ListAllContracsService);

    const listAllContracts = await listContracts.execute();

    return response.json(listAllContracts);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
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
    } = request.body;

    const createContract = container.resolve(CreateContractsService);

    const newContract = await createContract.execute({
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

    return response.json(newContract);
  }
}
