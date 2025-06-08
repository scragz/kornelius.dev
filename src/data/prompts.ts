export interface Prompt {
  id: string;
  title: string;
  viewUrl: string;
  rawUrl: string;
  description: string;
}

export const GITHUB_VIEW_BASE_URL = 'https://github.com/scragz/kornelius/blob/main/prompts';
export const GITHUB_RAW_BASE_URL = 'https://raw.githubusercontent.com/scragz/kornelius/main/prompts';

export const prompts: Prompt[] = [
  { id: 'create-req', title: 'Create: Request', viewUrl: `${GITHUB_VIEW_BASE_URL}/create/request.prompt`, rawUrl: `${GITHUB_RAW_BASE_URL}/create/request.prompt`, description: 'Define the initial request for code generation.' },
  { id: 'create-spec', title: 'Create: Spec', viewUrl: `${GITHUB_VIEW_BASE_URL}/create/spec.prompt`, rawUrl: `${GITHUB_RAW_BASE_URL}/create/spec.prompt`, description: 'Generate a technical specification from a request.' },
  { id: 'create-plan', title: 'Create: Planner', viewUrl: `${GITHUB_VIEW_BASE_URL}/create/planner.prompt`, rawUrl: `${GITHUB_RAW_BASE_URL}/create/planner.prompt`, description: 'Create an implementation plan based on a spec.' },
  { id: 'create-code', title: 'Create: Codegen', viewUrl: `${GITHUB_VIEW_BASE_URL}/create/codegen.prompt`, rawUrl: `${GITHUB_RAW_BASE_URL}/create/codegen.prompt`, description: 'Generate code based on a plan and spec.' },
  { id: 'create-rev', title: 'Create: Review', viewUrl: `${GITHUB_VIEW_BASE_URL}/create/review.prompt`, rawUrl: `${GITHUB_RAW_BASE_URL}/create/review.prompt`, description: 'Review generated code for improvements.' },
  { id: 'debug-obs', title: 'Debug: Observe', viewUrl: `${GITHUB_VIEW_BASE_URL}/debug/observe.prompt`, rawUrl: `${GITHUB_RAW_BASE_URL}/debug/observe.prompt`, description: 'Analyze code and identify potential issues.' },
  { id: 'debug-ori', title: 'Debug: Orient', viewUrl: `${GITHUB_VIEW_BASE_URL}/debug/orient.prompt`, rawUrl: `${GITHUB_RAW_BASE_URL}/debug/orient.prompt`, description: 'Formulate hypotheses about the root cause.' },
  { id: 'debug-dec', title: 'Debug: Decide', viewUrl: `${GITHUB_VIEW_BASE_URL}/debug/decide.prompt`, rawUrl: `${GITHUB_RAW_BASE_URL}/debug/decide.prompt`, description: 'Propose specific debugging actions or fixes.' },
  { id: 'debug-act', title: 'Debug: Act', viewUrl: `${GITHUB_VIEW_BASE_URL}/debug/act.prompt`, rawUrl: `${GITHUB_RAW_BASE_URL}/debug/act.prompt`, description: 'Generate code patches or refactoring suggestions.' },
  { id: 'audit-sec', title: 'Audit: Security', viewUrl: `${GITHUB_VIEW_BASE_URL}/audit/security.prompt`, rawUrl: `${GITHUB_RAW_BASE_URL}/audit/security.prompt`, description: 'Perform a security audit on the provided code.' },
  { id: 'audit-acc', title: 'Audit: Accessibility', viewUrl: `${GITHUB_VIEW_BASE_URL}/audit/a11y.prompt`, rawUrl: `${GITHUB_RAW_BASE_URL}/audit/a11y.prompt`, description: 'Perform an accessibility audit.' },
];
