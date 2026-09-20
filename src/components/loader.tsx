import * as React from 'react';

export type LoaderProps = {
  /** Path or imported URL for the Pacific Steel icon mark. */
  markSrc: string;
  label?: string;
  /** Pass a value to control visibility. Omit for the wiki's initial-load behavior. */
  open?: boolean;
  /** Fixed visible phase. Omit to use the wiki's 1750–2580ms timing. */
  duration?: number;
  onComplete?: () => void;
};

/** The Pacific Steel Wiki's initial loading treatment, ported for React. */
export function Loader({ markSrc, label = 'Loading the Pacific Steel 5025 Wiki', open, duration, onComplete }: LoaderProps) {
  const controlled = open !== undefined;
  const [phase, setPhase] = React.useState<'visible' | 'leaving' | 'hidden'>(open === false ? 'hidden' : 'visible');

  React.useEffect(() => {
    const root = document.documentElement;
    let timer: number | undefined;
    let revealTimer: number | undefined;
    let removeTimer: number | undefined;
    let revealCleanupTimer: number | undefined;
    let loadHandler: (() => void) | undefined;

    const reveal = () => {
      setPhase('leaving');
      revealTimer = window.setTimeout(() => {
        root.classList.remove('ps-initial-loading');
        root.classList.add('ps-initial-reveal');
        window.dispatchEvent(new CustomEvent('ps-loader-complete'));
        window.dispatchEvent(new CustomEvent('wiki-loader-complete'));
        onComplete?.();
        revealCleanupTimer = window.setTimeout(() => root.classList.remove('ps-initial-reveal'), 1200);
      }, 260);
      removeTimer = window.setTimeout(() => setPhase('hidden'), 420);
    };

    if (controlled) {
      if (open) {
        root.classList.add('ps-initial-loading');
        setPhase('visible');
      } else if (phase !== 'hidden') {
        reveal();
      }
    } else {
      root.classList.add('ps-initial-loading');
      const finish = () => {
        const delay = duration ?? 1750 + Math.random() * 830;
        timer = window.setTimeout(reveal, delay);
      };
      loadHandler = finish;
      if (document.readyState === 'complete') finish();
      else window.addEventListener('load', finish, { once: true });
    }

    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(revealTimer);
      window.clearTimeout(removeTimer);
      window.clearTimeout(revealCleanupTimer);
      if (loadHandler) window.removeEventListener('load', loadHandler);
      root.classList.remove('ps-initial-loading', 'ps-initial-reveal');
    };
  }, [controlled, duration, onComplete, open]);

  if (phase === 'hidden') return null;
  const leaving = phase === 'leaving';
  return <div className={`ps-loader${leaving ? ' is-leaving' : ''}`} role="status" aria-live="polite">
    <span className="ps-loader__mark-shell" aria-hidden="true">
      <img className="ps-loader__mark" src={markSrc} alt="" />
      <span className="ps-loader__shine" style={{ '--ps-loader-mark': `url("${markSrc}")` } as React.CSSProperties} />
    </span>
    <span className="ps-sr-only">{label}</span>
  </div>;
}
