import shared from '@republicservicesrepository/dops-shared';
const { logger, wrapper } = shared;
const { Service } = wrapper

import { ${{values.service_name}}Request } from './model';
import ${{values.service_name}}Schema from './schema';
import { handlerFunction } from './${{values.service_id}}.function';

async function handlerWrapper(request: ${{values.service_name}}Request ): Promise< ${{values.service_name}}Response > {

  const transactionId = request.headers.TransactionID;
  logger.info(`begin transactionId ${transactionId}`);
  logger.debug('inbound request:', request);

  return handlerFunction(request);
}

export const { handler } = new Service(handlerWrapper, ${{values.service_name}}Schema);