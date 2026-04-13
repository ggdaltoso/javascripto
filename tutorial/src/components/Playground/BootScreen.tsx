type WcStatus = 'booting' | 'installing' | 'ready' | 'error';
type StepStatus = 'idle' | 'running' | 'completed' | 'failed';

interface Step {
  title: string;
  status: StepStatus;
}

interface BootScreenProps {
  wcStatus: WcStatus;
}

function StepIcon({ status }: { status: StepStatus }) {
  if (status === 'idle') {
    return <div className="inline-block mr-2 i-ph-circle-duotone scale-120 text-tk-elements-status-disabled-iconColor" />;
  }
  if (status === 'running') {
    return <div className="inline-block mr-2 i-svg-spinners-90-ring-with-bg scale-105 text-tk-elements-status-active-iconColor" />;
  }
  if (status === 'completed') {
    return <div className="inline-block mr-2 i-ph-check-circle-duotone scale-120 text-tk-elements-status-positive-iconColor" />;
  }
  return <div className="inline-block mr-2 i-ph-x-circle-duotone scale-120 text-tk-elements-status-negative-iconColor" />;
}

function textClass(status: StepStatus) {
  switch (status) {
    case 'completed': return 'text-tk-elements-status-positive-textColor';
    case 'failed':    return 'text-tk-elements-status-negative-textColor';
    case 'idle':      return 'text-tk-elements-status-disabled-textColor';
    case 'running':   return 'text-tk-elements-status-active-textColor';
  }
}

export function BootScreen({ wcStatus }: BootScreenProps) {
  const steps: Step[] = [
    {
      title: 'Iniciando WebContainer',
      status: wcStatus === 'booting' ? 'running' : 'completed',
    },
    {
      title: 'Instalando dependências',
      status:
        wcStatus === 'booting'    ? 'idle' :
        wcStatus === 'installing' ? 'running' :
        wcStatus === 'ready'      ? 'completed' :
                                    'failed',
    },
  ];

  return (
    <div className="pg-boot-screen">
      <ul className="pg-boot-steps">
        {steps.map((step, i) => (
          <li key={i} className="pg-boot-step">
            <StepIcon status={step.status} />
            <span className={textClass(step.status)}>{step.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
