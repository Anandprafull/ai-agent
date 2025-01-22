interface MemoryI {
	name: string;
	description: string;
	provider: string;
	model: string;
	git: {
	  enabled: boolean;
	  include: string[];
	  gitignore: boolean;
	  deployedAt: string;
	  embeddedAt: string;
	};
}

const memoryKnowledgeBase = (): MemoryI => ({
	name: 'knowledge-base',
	description: "My list of docs as memory for an AI agent pipe",
	provider: 'groq', // Explicitly set provider
	model: 'groq:llama-3.3-70b-versatile', // Groq model name
	git: {
	  enabled: false,
	  include: ['documents/**/*'],
	  gitignore: false,
	  deployedAt: '',
	  embeddedAt: ''
	}
  });