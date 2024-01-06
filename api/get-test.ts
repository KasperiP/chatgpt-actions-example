import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * This is an example get endpoint that could be utilized in chatgpt actions.
 * Keep in mind you can have params / query parameters in the url that can be populated
 * from the chatgpt prompt.
 * @param req VercelRequest
 * @param res VercelResponse
 * @returns Example of a GET request
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
	if (req.method !== 'GET') {
		res.status(405).json({ message: 'Method not allowed' });
		return;
	}

	res.status(200).json({ message: 'Hello from GET' });
}
