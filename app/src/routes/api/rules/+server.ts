import { error, json } from '@sveltejs/kit';
import { getRules, removeRule } from './load';

export async function GET() {
	let rules: Rule[] = getRules();
	return json(rules);
}

export async function DELETE({ request }: { request: Request }) {
	let data: unknown;
	try {
		data = await request.json();
	} catch {
		throw error(400, 'Invalid JSON body');
	}

	const keyRaw = (data as Record<string, unknown>)?.key;
	const key = typeof keyRaw === 'number' ? keyRaw : Number(keyRaw);

	if (!Number.isFinite(key)) {
		throw error(400, 'Field "key" must be a number');
	}

	removeRule(key);

	return json({ deleted: key });
}
