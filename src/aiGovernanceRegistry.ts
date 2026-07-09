export type GovernanceLayer = 'Intake' | 'Risk' | 'Control' | 'Decision' | 'Monitoring';

export type UseCaseStatus = 'Draft' | 'Under Review' | 'Approved' | 'Rejected' | 'Monitoring';

export interface AiUseCase {
  name: string;
  sponsor: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  owner: string;
  requiredControls: string[];
  status: UseCaseStatus;
}

export interface GovernanceStep {
  layer: GovernanceLayer;
  question: string;
  artifact: string;
}

export interface AiGovernanceRegistry {
  repository: string;
  purpose: string;
  layers: GovernanceStep[];
  useCases: AiUseCase[];
  keyControls: string[];
  decisionRule: string;
  reviewQuestions: string[];
}

export const aiGovernanceRegistry: AiGovernanceRegistry = {
  repository: 'AI Governance Framework',
  purpose:
    'Provide a repeatable decision path for AI intake, risk review, control definition, approval, and monitoring.',
  layers: [
    {
      layer: 'Intake',
      question: 'What is being proposed?',
      artifact: 'Review intake form',
    },
    {
      layer: 'Risk',
      question: 'What could go wrong?',
      artifact: 'Risk assessment',
    },
    {
      layer: 'Control',
      question: 'What must be in place?',
      artifact: 'Control matrix',
    },
    {
      layer: 'Decision',
      question: 'Who approves it?',
      artifact: 'Approval record',
    },
    {
      layer: 'Monitoring',
      question: 'How do we know it stayed safe?',
      artifact: 'Monitoring notes',
    },
  ],
  useCases: [
    {
      name: 'Customer support assistant',
      sponsor: 'CX operations',
      riskLevel: 'Medium',
      owner: 'Product operations',
      requiredControls: ['human review', 'prompt logging', 'output monitoring'],
      status: 'Under Review',
    },
    {
      name: 'Document summarization workflow',
      sponsor: 'Knowledge services',
      riskLevel: 'Low',
      owner: 'Knowledge platform',
      requiredControls: ['data classification', 'access control', 'usage logging'],
      status: 'Approved',
    },
    {
      name: 'Decision recommendation engine',
      sponsor: 'Operations leadership',
      riskLevel: 'High',
      owner: 'Risk and architecture review',
      requiredControls: ['bias review', 'approval record', 'monitoring report'],
      status: 'Monitoring',
    },
  ],
  keyControls: [
    'Responsible AI checklist',
    'Model validation review',
    'Data privacy review',
    'Approval traceability',
    'Ongoing monitoring',
  ],
  reviewQuestions: [
    'Is the use case acceptable?',
    'What controls and approvals are required?',
    'How will we evidence the decision later?',
    'Who owns the follow-up after approval?',
  ],
  decisionRule:
    'If the use case cannot be explained in terms of risk, control, and ownership, it is not ready for approval.',
};

export function getAiGovernanceOverview() {
  return {
    repository: aiGovernanceRegistry.repository,
    purpose: aiGovernanceRegistry.purpose,
    layerCount: aiGovernanceRegistry.layers.length,
    useCaseCount: aiGovernanceRegistry.useCases.length,
    approvedUseCases: aiGovernanceRegistry.useCases.filter((useCase) => useCase.status === 'Approved').length,
  };
}
