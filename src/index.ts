import {APIGatewayProxyEvent, APIGatewayProxyResultV2, Handler} from 'aws-lambda';
import {sendSqsMessage} from "./utils/sendSqsMessage";

export const handler: Handler = async (event: APIGatewayProxyEvent, context): Promise<APIGatewayProxyResultV2> => {
    console.log('event', event);
    console.log('context', context);
    await sendSqsMessage({ content: 'it works!', to: 'ee@ss.com' })
    return {
        body: JSON.stringify({ success: true }),
        headers: {
            'content-type': 'application/json'
        },
        statusCode: 200,
    }
};
