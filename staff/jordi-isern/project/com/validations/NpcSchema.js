import { z } from 'zod';

const NpcSchema = z.object({
  actionDescription1: z.string(),
  actionDescription2: z.string(),
  actionDescription3: z.string(),
  actionName1: z.string(),
  actionName2: z.string(),
  actionName3: z.string(),
  alignment: z.string(),
  armorClass: z.number(),
  challengeRating: z.number(),
  charismaModifier: z.number(),
  charismaScore: z.number(),
  constitutionModifier: z.number(),
  constitutionScore: z.number(),
  currentHitPoints: z.number(),
  description: z.string(),
  dexterityModifier: z.number(),
  dexterityScore: z.number(),
  image: z.string().url(),
  initiativeModifier: z.number(),
  initiativeScore: z.number(),
  lenguages: z.string(),
  maxHitPoints: z.number(),
  name: z.string(),
  race: z.string(),
  senses: z.string(),
  skillModifier: z.number(),
  skillName: z.string(),
  speed: z.number(),
  strengthModifier: z.number(),
  strengthScore: z.number(),
  temporalHitPoints: z.number(),
  wisdomModifier: z.number(),
  wisdomScore: z.number(),
});

export default NpcSchema;
