import rulesJSON from '$lib/assets/rules.json';

let rules: Rule[] | null = null;

export function getRules(): Rule[] {
	if (rules === null) {
		console.log('Loaded rules from JSON file');
		let nextKey = 1;
		rules = rulesJSON.map((r) => ({ key: nextKey++, shortName: r.shortName, rule: r.rule }));
	}

	return rules;
}

export function removeRule(key: number) {
	rules = getRules().filter((r) => r.key !== key);
}
