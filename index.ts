import {APIGatewayProxyEvent, APIGatewayProxyResultV2, Handler} from 'aws-lambda';

export const handler: Handler = async (event: APIGatewayProxyEvent, context): Promise<APIGatewayProxyResultV2> => {

    return {
        body: JSON.stringify({ success: true }),
        headers: {
            'Content-Type' :'Application/json'
        },
        statusCode: 200,
    }
};
