// types/schemas.ts
import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  passwordHash: z.string(),
  name: z.string().optional(),
  profilePictureUrl: z.string().url()
    .optional(),
  createdAt: z.date()
});
type UserType = z.infer<typeof userSchema>;

const programmingLanguageSchema = z.object({
  id: z.number(),
  name: z.string()
});
type ProgrammingLanguageType = z.infer<typeof programmingLanguageSchema>;

const challengeSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  difficulty: z.enum([ "easy", "medium", "hard" ]),
  type: z.enum([ "data_structures", "algorithms", "system_design", "custom" ]),
  inputFormat: z.string(),
  outputFormat: z.string(),
  constraints: z.string(),
  exampleCases: z.string(),
  createdAt: z.date()
});
type ChallengeType = z.infer<typeof challengeSchema>;

const testCaseSchema = z.object({
  id: z.number(),
  challengeId: z.number(),
  input: z.string(),
  expectedOutput: z.string()
});
type TestCaseType = z.infer<typeof testCaseSchema>;

const submissionSchema = z.object({
  id: z.number(),
  userId: z.number(),
  challengeId: z.number(),
  code: z.string(),
  status: z.enum([ "pending", "completed", "failed" ]),
  feedback: z.string().optional(),
  createdAt: z.date()
});
type SubmissionType = z.infer<typeof submissionSchema>;

const hintSchema = z.object({
  id: z.number(),
  submissionId: z.number(),
  hintText: z.string(),
  createdAt: z.date()
});
type HintType = z.infer<typeof hintSchema>;

export {
  userSchema,
  programmingLanguageSchema,
  challengeSchema,
  testCaseSchema,
  submissionSchema,
  hintSchema
};

export type {
  UserType,
  ProgrammingLanguageType,
  ChallengeType,
  TestCaseType,
  SubmissionType,
  HintType
};