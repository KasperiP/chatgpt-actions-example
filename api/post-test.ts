import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * This is an example post endpoint that takes user chatgpt prompt input and returns it
 * back to the user.
 * @param req VercelRequest
 * @param res VercelResponse
 * @returns Example of a POST request
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
	if (req.method !== 'POST') {
		res.status(405).json({ message: 'Method not allowed' });
		return;
	}

	const { prompt } = req.body;

	if (!prompt) {
		res.status(400).json({ message: 'Prompt is required' });
		return;
	}

	res.status(200).json({ message: prompt });
}
