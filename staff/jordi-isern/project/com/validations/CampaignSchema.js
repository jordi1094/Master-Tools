import { z } from 'zod';

const CampaignSchema = z.object({
    title: z.string().optional(),
    background: z.string().optional(),
    objective: z.string().optional(),
    startLocation: z.string().optional(),
    image: z.string().url().optional(),
});

export default CampaignSchema;
