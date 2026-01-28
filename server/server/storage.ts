import { db } from "./db";
import {
  profile, experiences, education, projects, skills,
  type Profile, type Experience, type Education, type Project, type Skill,
  type InsertProfile, type InsertExperience, type InsertEducation, type InsertProject, type InsertSkill
} from "@shared/schema";

export interface IStorage {
  getProfile(): Promise<Profile | undefined>;
  createProfile(profile: InsertProfile): Promise<Profile>;
  
  getExperiences(): Promise<Experience[]>;
  createExperience(experience: InsertExperience): Promise<Experience>;
  
  getEducation(): Promise<Education[]>;
  createEducation(education: InsertEducation): Promise<Education>;
  
  getProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  
  getSkills(): Promise<Skill[]>;
  createSkill(skill: InsertSkill): Promise<Skill>;
}

export class DatabaseStorage implements IStorage {
  async getProfile(): Promise<Profile | undefined> {
    const [result] = await db.select().from(profile).limit(1);
    return result;
  }

  async createProfile(data: InsertProfile): Promise<Profile> {
    const [result] = await db.insert(profile).values(data).returning();
    return result;
  }

  async getExperiences(): Promise<Experience[]> {
    return await db.select().from(experiences).orderBy(experiences.id);
  }

  async createExperience(data: InsertExperience): Promise<Experience> {
    const [result] = await db.insert(experiences).values(data).returning();
    return result;
  }

  async getEducation(): Promise<Education[]> {
    return await db.select().from(education).orderBy(education.id);
  }

  async createEducation(data: InsertEducation): Promise<Education> {
    const [result] = await db.insert(education).values(data).returning();
    return result;
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects).orderBy(projects.id);
  }

  async createProject(data: InsertProject): Promise<Project> {
    const [result] = await db.insert(projects).values(data).returning();
    return result;
  }

  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills).orderBy(skills.id);
  }

  async createSkill(data: InsertSkill): Promise<Skill> {
    const [result] = await db.insert(skills).values(data).returning();
    return result;
  }
}

export const storage = new DatabaseStorage();
