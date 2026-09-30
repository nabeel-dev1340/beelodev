import {
  ArrowDown,
  Check,
  ShieldCheck,
  PanelsTopLeft,
  CheckCheck,
} from 'lucide-react';
import { revampContent } from '../config/site';

export default function WorkflowVisual() {
  const content = revampContent.workflowVisual;
  return (
    <div
      className="workflow-visual"
      aria-label="Illustrative custom automation: emails, forms, spreadsheets, and portals become routed requests, prepared reports, and current records"
    >
      <div className="visual-label">
        <span>{content.label}</span>
        <span>01 → 02</span>
      </div>
      <div className="workflow-source">
        <PanelsTopLeft size={26} />
        <div>
          <strong>{content.source}</strong>
          <span>{content.inputs}</span>
        </div>
      </div>
      <div className="workflow-connector">
        <ArrowDown size={18} />
        <span>{content.steps}</span>
      </div>
      <div className="output-files">
        <div className="output-header">
          <CheckCheck size={18} />
          {content.destination}
        </div>
        {content.outputs.map((output) => (
          <div className="output-file" key={output}>
            <span>{output}</span>
            <Check className="file-check" size={14} />
          </div>
        ))}
      </div>
      <div className="visual-note">
        <ShieldCheck size={17} />
        <span>{content.note}</span>
      </div>
    </div>
  );
}
