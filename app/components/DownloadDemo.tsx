'use client';

import { useEffect, useState } from 'react';
import { FileText, Download, Pause, Play, RotateCcw, Check, Clock } from 'lucide-react';

import { sampleFiles } from '../config/demo';

export default function DownloadDemo() {
  const [completed, setCompleted] = useState(0);
  const [running, setRunning] = useState(false);
  const [started, setStarted] = useState(false);
  const done = completed === sampleFiles.length;

  useEffect(() => {
    if (!running || done) return;
    const timer = window.setInterval(
      () => setCompleted((value) => Math.min(value + 1, sampleFiles.length)),
      1300,
    );
    return () => window.clearInterval(timer);
  }, [running, done]);

  const status = done ? 'Complete' : running ? 'Downloading' : started ? 'Paused' : 'Ready';
  return (
    <div className="demo-window">
      <div className="demo-topbar">
        <span className="window-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        Document downloader<span className="sample-badge">Interactive sample</span>
      </div>
      <div className="demo-body">
        <div className="demo-job">
          <strong>Client archive / batch 01</strong>
          <span className="demo-state">{status}</span>
        </div>
        <div
          className="demo-progress"
          role="progressbar"
          aria-label="Sample files downloaded"
          aria-valuenow={completed}
          aria-valuemin={0}
          aria-valuemax={sampleFiles.length}
        >
          <span style={{ transform: `scaleX(${completed / sampleFiles.length})` }} />
        </div>
        <div className="demo-count">
          <span>
            {completed} of {sampleFiles.length} files organized
          </span>
          <span>Saved progress enabled</span>
        </div>
        {sampleFiles.map((file, i) => (
          <div className="demo-file" key={file.name}>
            <FileText size={15} />
            <span className="demo-file-name">{file.name}</span>
            <span className={`demo-file-state ${i < completed ? 'done' : ''}`}>
              {i < completed ? 'Saved' : i === completed && running ? 'Retrieving…' : 'Queued'}
            </span>
            {i < completed ? <Check size={13} /> : <Clock size={13} />}
          </div>
        ))}
        <div className="demo-controls">
          {!done && (
            <button
              className="button button-small"
              type="button"
              onClick={() => {
                setStarted(true);
                setRunning(!running);
              }}
            >
              {running ? <Pause size={14} /> : <Play size={14} />}
              {running ? 'Pause batch' : started ? 'Resume batch' : 'Run sample batch'}
            </button>
          )}
          {(started || done) && (
            <button
              className="button button-small button-secondary"
              type="button"
              onClick={() => {
                setCompleted(0);
                setStarted(false);
                setRunning(false);
              }}
            >
              <RotateCcw size={14} />
              Reset
            </button>
          )}
          {done && (
            <a
              className="button button-small"
              href="/api/demo-report"
              download="sample-completion-report.csv"
            >
              <Download size={14} />
              Download sample report
            </a>
          )}
        </div>
        <p className="demo-message" role="status">
          {done
            ? 'All 6 sample files accounted for. The completion report lists each file and its destination.'
            : running
              ? 'Try pausing the batch. Resuming continues from the saved position.'
              : started
                ? `Progress saved at ${completed} files. Resume to continue from here.`
                : 'A browser simulation with fictional records. No portal is contacted and no client documents are downloaded.'}
        </p>
      </div>
    </div>
  );
}
