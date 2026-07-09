import { aiGovernanceRegistry } from './aiGovernanceRegistry';

export interface AiGovernanceReportRow {
  useCase: string;
  sponsor: string;
  riskLevel: string;
  owner: string;
  status: string;
}

export function buildAiGovernanceReport() {
  const rows: AiGovernanceReportRow[] = aiGovernanceRegistry.useCases.map((useCase) => ({
    useCase: useCase.name,
    sponsor: useCase.sponsor,
    riskLevel: useCase.riskLevel,
    owner: useCase.owner,
    status: useCase.status,
  }));

  return {
    title: aiGovernanceRegistry.repository,
    purpose: aiGovernanceRegistry.purpose,
    layers: aiGovernanceRegistry.layers,
    keyControls: aiGovernanceRegistry.keyControls,
    reviewQuestions: aiGovernanceRegistry.reviewQuestions,
    decisionRule: aiGovernanceRegistry.decisionRule,
    reportRows: rows,
  };
}

export function buildAiGovernanceSummary() {
  return {
    totalUseCases: aiGovernanceRegistry.useCases.length,
    approvedUseCases: aiGovernanceRegistry.useCases.filter((useCase) => useCase.status === 'Approved').length,
    reviewRequired: aiGovernanceRegistry.useCases.filter((useCase) => useCase.status === 'Under Review').length,
    activeMonitoring: aiGovernanceRegistry.useCases.filter((useCase) => useCase.status === 'Monitoring').length,
  };
}
