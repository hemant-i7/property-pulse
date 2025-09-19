'use client';

import { Agent } from '@/types/agent';
import AgentCard from './AgentCard';

interface AgentGridProps {
  agents: Agent[];
}

export default function AgentGrid({ agents }: AgentGridProps) {
  if (agents.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-neutral-400 text-lg mb-4">No agents found</div>
        <p className="text-neutral-500">Please check back later for available agents.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {agents.map((agent) => (
        <AgentCard key={agent.uid} agent={agent} />
      ))}
    </div>
  );
}
