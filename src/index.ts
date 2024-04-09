import { ScheduledEvent, Handler, APIGatewayProxyResult } from 'aws-lambda';
import { sendSqsMessage } from './utils/sendSqsMessage';

export const handler: Handler = async (event: ScheduledEvent): Promise<APIGatewayProxyResult> => {
  try {
    console.log('event', event);
    await sendSqsMessage({ content: 'Next due date:', to: 'aduran.yoel+to@gmail.com' });
    return {
      body: JSON.stringify({ success: true }),
      headers: {
        'content-type': 'application/json',
      },
      statusCode: 200,
    };
  } catch (error) {
    console.error('ERROR:', error);
    return {
      body: JSON.stringify({ error }),
      headers: {
        'content-type': 'application/json',
      },
      statusCode: 500,
    };
  }
};
