import { pgTable, text, serial, varchar, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Profile Information
export const profile = pgTable("profile", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  headline: text("headline").notNull(),
  about: text("about").notNull(),
  location: text("location").notNull(),
  socialLinks: jsonb("social_links").$type<{ linkedin?: string; github?: string; email?: string; twitter?: string; buyMeACoffee?: string }>().notNull(),
});

export const insertProfileSchema = createInsertSchema(profile).omit({ id: true });
export type Profile = typeof profile.$inferSelect;
export type InsertProfile = z.infer<typeof insertProfileSchema>;

// Experience
export const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  company: text("company").notNull(),
  duration: text("duration").notNull(),
  location: text("location"),
  description: text("description"),
  skills: text("skills").array(),
});

export const insertExperienceSchema = createInsertSchema(experiences).omit({ id: true });
export type Experience = typeof experiences.$inferSelect;
export type InsertExperience = z.infer<typeof insertExperienceSchema>;

// Education
export const education = pgTable("education", {
  id: serial("id").primaryKey(),
  degree: text("degree").notNull(),
  school: text("school").notNull(),
  duration: text("duration").notNull(),
  description: text("description"),
});

export const insertEducationSchema = createInsertSchema(education).omit({ id: true });
export type Education = typeof education.$inferSelect;
export type InsertEducation = z.infer<typeof insertEducationSchema>;

// Projects
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  techStack: text("tech_stack").array(),
  link: text("link"),
  githubLink: text("github_link"),
});

export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });
export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;

// Skills
export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  category: text("category").notNull(),
  items: text("items").array().notNull(),
});

export const insertSkillSchema = createInsertSchema(skills).omit({ id: true });
export type Skill = typeof skills.$inferSelect;
export type InsertSkill = z.infer<typeof insertSkillSchema>;
