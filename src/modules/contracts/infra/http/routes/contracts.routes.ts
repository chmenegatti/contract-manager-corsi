import { Router } from 'express';

const contractsRouter = Router();

contractsRouter.get('/', (request, response) => {
  return response.json({ message: 'Hello Contracts' });
});

export default contractsRouter;
