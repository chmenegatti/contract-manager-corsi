import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListShorInfoContractsService from '@modules/contracts/services/ListShorInfoContractsService';

export default class ShortInfoContractsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const getContracts = container.resolve(ListShorInfoContractsService);

    const listContracts = await getContracts.execute();

    return response.json(listContracts);
  }
}
