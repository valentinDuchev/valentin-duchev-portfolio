import { ArrowDown, ArrowRight } from "lucide-react";

interface WorkflowStep {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  type: "action" | "system" | "database" | "process";
  connections?: string[];
}

interface WorkflowDiagramProps {
  steps: WorkflowStep[];
  title?: string;
}

const WorkflowDiagram = ({ steps, title }: WorkflowDiagramProps) => {
  const getStepColors = (type: string) => {
    switch (type) {
      case "action":
        return "bg-blue-500/10 border-blue-500/30 text-blue-400";
      case "system":
        return "bg-green-500/10 border-green-500/30 text-green-400";
      case "database":
        return "bg-purple-500/10 border-purple-500/30 text-purple-400";
      case "process":
        return "bg-orange-500/10 border-orange-500/30 text-orange-400";
      default:
        return "bg-accent border-border text-foreground";
    }
  };

  return (
    <div className="space-y-6">
      {title && (
        <h3 className="text-lg font-semibold text-primary text-center">{title}</h3>
      )}
      
      <div className="relative">
        {/* Workflow Steps */}
        <div className="grid gap-6">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Step Card */}
              <div 
                className={`
                  p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-lg
                  ${getStepColors(step.type)}
                `}
              >
                <div className="text-center">
                  <h4 className="font-semibold text-sm mb-1">{step.title}</h4>
                  {step.subtitle && (
                    <p className="text-xs opacity-80 italic mb-2">{step.subtitle}</p>
                  )}
                  {step.description && (
                    <p className="text-xs opacity-70 leading-relaxed">{step.description}</p>
                  )}
                </div>
              </div>

              {/* Arrow to Next Step */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-4">
                  <ArrowDown className="w-5 h-5 text-muted-foreground animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkflowDiagram;