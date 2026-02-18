import { z } from 'zod';

export const contactSchema = z.object({
	name: z.string().trim().min(2).max(80),
	lastName: z.string().trim().max(80).optional(),
	email: z.string().trim().email().max(120),
	phone: z.string().trim().max(40).optional(),
	message: z.string().trim().min(10).max(3000),
	sourcePath: z.string().trim().min(1).max(200),
	honeypot: z.string().optional(),
	formStartedAt: z.number().int().positive(),
});

export type ContactSchema = z.infer<typeof contactSchema>;
