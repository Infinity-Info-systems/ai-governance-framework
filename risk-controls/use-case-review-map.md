# AI Use Case Review Map

This map gives teams a practical way to review AI use cases before they move into production.

## Purpose

Use this map to connect the use case, the model risk, the data risk, and the approval path.

## Review Areas

### 1. Use Case Definition

- business problem
- intended outcome
- user impact
- decision scope

### 2. Data Risk

- source quality
- privacy exposure
- sensitive data handling
- retention and access rules

### 3. Model Risk

- model type
- training source
- explainability need
- failure mode assessment

### 4. Responsible AI Controls

- fairness review
- human oversight
- transparency requirements
- escalation path

### 5. Governance Approval

- review owner
- approval authority
- exception handling
- re-review cadence

## Example Review Table

| Use Case | Data Risk | Model Risk | Responsible AI Check | Status |
| --- | --- | --- | --- | --- |
| Customer Support Assistant | Medium | Medium | Human review required | Conditional |
| Fraud Triage Model | High | High | Bias and escalation review | Needs Approval |
| Internal Knowledge Search | Low | Low | Transparency notice | Approved |

## Operating Rhythm

Recommended cadence:

1. Pre-launch use case review
2. Monthly governance review for active AI use cases
3. Quarterly model and data risk review
4. Event-driven review after model or data changes

## Recommended Actions

- require a named owner for every AI use case
- classify data and model risk before approval
- define fallback behavior when AI output is uncertain
- re-review each use case when scope changes

## Related Artifacts

- [AI Review Workflow](../governance-models/ai-review-workflow.md)
- [AI Governance Board](../governance-models/ai-governance-board.md)
- [AI Risk Assessment Template](../templates/ai-risk-assessment-template.md)
- [AI Use Case Review Template](../templates/ai-use-case-review-template.md)
- [Responsible AI Checklist](../templates/responsible-ai-checklist.md)
