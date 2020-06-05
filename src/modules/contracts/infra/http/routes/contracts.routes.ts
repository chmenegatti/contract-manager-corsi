import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ContractsController from '../controllers/ContractsController';
import ShortInfoContractsController from '../controllers/ShortInfoContractsController';

const contractsRouter = Router();
const contractsController = new ContractsController();
const shortInfoContractsController = new ShortInfoContractsController();

contractsRouter.get('/short', shortInfoContractsController.index);
contractsRouter.get('/:id/info', contractsController.show);
contractsRouter.get('/', contractsController.index);
contractsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      company: Joi.string().required(),
      address: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      cnpj: Joi.string().required(),
      ie: Joi.string(),
      object: Joi.string().required(),
      value: Joi.number().required(),
      signature_date: Joi.date().required(),
      order_date: Joi.date().required(),
      duration_days: Joi.number(),
      status: Joi.string().required(),
    },
  }),
  contractsController.create,
);

export default contractsRouter;
