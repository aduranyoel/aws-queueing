import AWS from 'aws-sdk';

const SQS = new AWS.SQS();
const QUEUE_NAME = process.env.QUEUE_NAME ?? '';

interface MessageBody {
    to: string;
    content: string;
}

export const sendSqsMessage = async (body: MessageBody) => {
    console.log('Sending SQS Message');

    await SQS.sendMessage({
        MessageAttributes: {
            contentType: {
                DataType: 'String',
                StringValue: 'application/json',
            }
        },
        MessageBody: JSON.stringify(body),
        QueueUrl: QUEUE_NAME,
    }).promise();
};
