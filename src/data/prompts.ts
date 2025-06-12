export interface Prompt {
  id: string;
  category: 'Create' | 'Debug' | 'Audit';
  title: string;
  rawUrl: string;
  description: string;
}

export const GITHUB_RAW_BASE_URL = 'https://raw.githubusercontent.com/scragz/kornelius/main/prompts';

export const prompts: Prompt[] = [
  { id: 'create-request', category: 'Create', title: 'Request', rawUrl: `${GITHUB_RAW_BASE_URL}/create/request.prompt`, description: 'Define the initial request for code generation.' },
  { id: 'create-spec', category: 'Create', title: 'Spec', rawUrl: `${GITHUB_RAW_BASE_URL}/create/spec.prompt`, description: 'Generate a technical specification from a request.' },
  { id: 'create-planner', category: 'Create', title: 'Planner', rawUrl: `${GITHUB_RAW_BASE_URL}/create/planner.prompt`, description: 'Create an implementation plan based on a spec.' },
  { id: 'create-codegen', category: 'Create', title: 'Codegen', rawUrl: `${GITHUB_RAW_BASE_URL}/create/codegen.prompt`, description: 'Generate code based on a plan and spec.' },
  { id: 'create-review', category: 'Create', title: 'Review', rawUrl: `${GITHUB_RAW_BASE_URL}/create/review.prompt`, description: 'Review generated code for improvements.' },

  { id: 'debug-observe', category: 'Debug', title: 'Observe', rawUrl: `${GITHUB_RAW_BASE_URL}/debug/observe.prompt`, description: 'Analyze code and identify potential issues.' },
  { id: 'debug-orient', category: 'Debug', title: 'Orient', rawUrl: `${GITHUB_RAW_BASE_URL}/debug/orient.prompt`, description: 'Formulate hypotheses about the root cause.' },
  { id: 'debug-decide', category: 'Debug', title: 'Decide', rawUrl: `${GITHUB_RAW_BASE_URL}/debug/decide.prompt`, description: 'Propose specific debugging actions or fixes.' },
  { id: 'debug-act', category: 'Debug', title: 'Act', rawUrl: `${GITHUB_RAW_BASE_URL}/debug/act.prompt`, description: 'Generate code patches or refactoring suggestions.' },

  { id: 'audit-security', category: 'Audit', title: 'Security', rawUrl: `${GITHUB_RAW_BASE_URL}/audit/security.prompt`, description: 'Perform a security audit on the provided code.' },
  { id: 'audit-a11y', category: 'Audit', title: 'Accessibility', rawUrl: `${GITHUB_RAW_BASE_URL}/audit/a11y.prompt`, description: 'Perform an accessibility audit.' }
]
  ;
