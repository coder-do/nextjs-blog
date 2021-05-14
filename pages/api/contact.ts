import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { Message } from 'types/Message';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;

        if (
            !email ||
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !message ||
            message.trim() === ''
        ) {
            res.status(422).json({ message: 'Invalid input.' });
            return;
        }

        const newMessage: Message = {
            email,
            name,
            message
        };

        let client;

        try {
            client = await MongoClient.connect('mongodb+srv://coder-do:coder-do@next-api-routes.el3kz.mongodb.net/feedback-data?retryWrites=true&w=majority');

        } catch (err) {
            res.status(500).json({ message: 'Failed to connect Mongodb' })
            return;
        }

        const db = client.db();

        try {
            await db.collection('feedback').insertOne(newMessage);
        } catch (error) {
            client.close();
            res.status(500).json({ message: 'Storing message failed!' });
            return;
        }

        client.close();

        res
            .status(201)
            .json({ message: 'Successfully stored message!', msg: newMessage });
    }
}

export default handler;