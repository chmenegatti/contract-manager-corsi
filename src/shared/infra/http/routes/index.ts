import { Router } from 'express';
import contractsRouter from '@modules/contracts/infra/http/routes/contracts.routes';

const routes = Router();

routes.use('/contracts', contractsRouter);

export default routes;
