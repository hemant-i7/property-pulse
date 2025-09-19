/**
 * Agent data fetcher functions
 * Fetches agent data from Contentstack
 */

import { AgentService } from '@/lib/contentstack';

export interface Agent {
  uid: string;
  title: string;
  email: string;
  phone: string;
  profile_image: string;
  experience_years: string;
  specialization: string;
  created_at: string;
  updated_at: string;
}

/**
 * Get all agents from Contentstack
 */
export async function getAllAgents(): Promise<Agent[]> {
  try {
    const agents = await AgentService.getAllAgents();
    return agents.map((agent: any) => ({
      uid: agent.uid,
      title: agent.title,
      email: agent.email,
      phone: agent.phone,
      profile_image: agent.profile_image,
      experience_years: agent.experience_years,
      specialization: agent.specialization,
      created_at: agent.created_at,
      updated_at: agent.updated_at,
    }));
  } catch (error) {
    console.error('Error fetching agents:', error);
    return [];
  }
}

/**
 * Get a single agent by UID
 */
export async function getAgentById(uid: string): Promise<Agent | null> {
  try {
    const agent = await AgentService.getAgentByUid(uid);
    if (!agent) return null;
    
    return {
      uid: agent.uid,
      title: agent.title,
      email: agent.email,
      phone: agent.phone,
      profile_image: agent.profile_image,
      experience_years: agent.experience_years,
      specialization: agent.specialization,
      created_at: agent.created_at,
      updated_at: agent.updated_at,
    };
  } catch (error) {
    console.error('Error fetching agent:', error);
    return null;
  }
}
