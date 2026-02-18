import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, 'src');
const BARREL_INDEX_REGEX = /^index\.(ts|tsx|js|jsx)$/;
const BARREL_EXPORT_REGEX = /\bexport\s+\*\s+from\b/;

const files = [];

function walk(dir) {
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			walk(fullPath);
			continue;
		}

		if (/\.(ts|tsx|js|jsx)$/.test(entry.name)) {
			files.push(fullPath);
		}
	}
}

if (!fs.existsSync(SRC_DIR)) {
	process.exit(0);
}

walk(SRC_DIR);

const violations = [];

for (const filePath of files) {
	const fileName = path.basename(filePath);
	const relativePath = path.relative(ROOT, filePath);
	const content = fs.readFileSync(filePath, 'utf8');

	if (BARREL_INDEX_REGEX.test(fileName)) {
		violations.push(`Index barrel file detected: ${relativePath}`);
	}

	if (BARREL_EXPORT_REGEX.test(content)) {
		violations.push(`Wildcard re-export detected: ${relativePath}`);
	}
}

if (violations.length > 0) {
	console.error('Barrel file policy violations found:\n');
	for (const violation of violations) {
		console.error(`- ${violation}`);
	}
	process.exit(1);
}

console.log('No barrel files detected.');
