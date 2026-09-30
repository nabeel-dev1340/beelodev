'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, LoaderCircle, Mail } from 'lucide-react';
import { siteConfig, revampContent } from '../config/site';
import { automationServices } from '../config/services';

type ContactProps = { initialService?: string; standalone?: boolean };

export default function Contact({
  initialService = '',
  standalone = false,
}: ContactProps) {
  const [state, setState] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [error, setError] = useState('');
  const messageRef = useRef<HTMLDivElement>(null);
  const inFlight = useRef(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    inFlight.current = true;
    const form = event.currentTarget;
    const data = new FormData(form);
    setState('submitting');
    setError('');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      const result = await response.json();
      if (!response.ok)
        throw new Error(
          typeof result.error === 'string'
            ? result.error
            : 'Your inquiry could not be sent. Please try again.',
        );
      setState('success');
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Your inquiry could not be sent. Please try again.',
      );
      setState('error');
    } finally {
      inFlight.current = false;
      window.setTimeout(() => messageRef.current?.focus(), 0);
    }
  }

  const Heading = standalone ? 'h1' : 'h2';
  return (
    <section
      id="contact"
      className={`section ${standalone ? '' : 'section-tinted section-line'}`}
    >
      <div className="container contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">Let’s make it simpler</p>
          <Heading>{revampContent.contact.title}</Heading>
          <p className="lead">{revampContent.contact.description}</p>
          <p className="contact-next-step">{revampContent.contact.nextStep}</p>
          <div className="contact-direct">
            <a
              href={`mailto:${siteConfig.personal.email}`}
              className="text-link"
            >
              <Mail size={16} />
              {siteConfig.personal.email}
            </a>
            <a
              href={siteConfig.personal.booking.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Prefer a call? Book 30 minutes <ArrowUpRight size={16} />
            </a>
            <p className="small muted">
              You’ll work directly with Nabeel.
              <br />
              Remote worldwide · NDA available
            </p>
          </div>
        </div>
        <form
          className="contact-form data-ph-no-capture"
          onSubmit={submit}
          aria-label="Workflow inquiry"
        >
          <div className="form-row">
            <label className="field">
              Your name
              <input
                name="name"
                autoComplete="name"
                required
                maxLength={100}
                placeholder="Alex Morgan"
              />
            </label>
            <label className="field">
              Email address
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                placeholder="alex@company.com"
              />
            </label>
          </div>
          <label className="field">
            What do you want to make easier?
            <textarea
              name="projectDetails"
              required
              minLength={20}
              maxLength={5000}
              rows={4}
              placeholder="e.g. We copy every new inquiry from Gmail into Sheets. We want each request logged and ready for the right person to review."
            />
            <span className="field-note">
              Tell me the task and the result you need. At least 20 characters;
              leave out passwords and confidential records.
            </span>
          </label>
          <details className="inquiry-details" open={Boolean(initialService)}>
            <summary>
              Add tools, volume, or timing{' '}
              <span className="muted">(optional)</span>
            </summary>
            <div className="inquiry-detail-fields">
              <label className="field">
                Which service sounds closest?
                <select
                  name="service"
                  defaultValue={initialService || 'not-sure'}
                >
                  {automationServices.map((service) => (
                    <option key={service.slug} value={service.slug}>
                      {service.title}
                    </option>
                  ))}
                  <option value="not-sure">I’m not sure yet</option>
                  <option value="other">Another automation</option>
                </select>
              </label>
              <label className="field">
                Which tools or systems are involved?
                <input
                  name="system"
                  maxLength={300}
                  placeholder="e.g. Gmail + Sheets, Notion, or a business portal"
                />
              </label>
              <div className="form-row">
                <label className="field">
                  Approximate volume
                  <select name="volume" defaultValue="Not sure yet">
                    {revampContent.contact.volumes.map((volume) => (
                      <option key={volume}>{volume}</option>
                    ))}
                  </select>
                </label>
                <label className="field">
                  Ideal deadline
                  <select name="deadline" defaultValue="No fixed deadline">
                    {revampContent.contact.deadlines.map((deadline) => (
                      <option key={deadline}>{deadline}</option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
          </details>
          <label className="honeypot" aria-hidden="true">
            Company website
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
          <p className="form-note">
            By sending this form, you agree to be contacted about your inquiry.{' '}
            <Link href="/privacy">Privacy details</Link>.
          </p>
          <div>
            <button
              className="button"
              type="submit"
              disabled={state === 'submitting'}
            >
              {state === 'submitting' ? (
                <>
                  <LoaderCircle size={17} className="animate-spin" />
                  Sending inquiry…
                </>
              ) : (
                <>
                  {revampContent.contact.submitLabel} <ArrowUpRight size={17} />
                </>
              )}
            </button>
          </div>
          {(state === 'success' || state === 'error') && (
            <div
              ref={messageRef}
              tabIndex={-1}
              className={`form-message ${state === 'error' ? 'error' : ''}`}
              role={state === 'error' ? 'alert' : 'status'}
            >
              {state === 'success' ? (
                'Your inquiry is on its way. Nabeel will reply to the email address you provided.'
              ) : (
                <>
                  {error} You can also email{' '}
                  <a
                    className="text-link"
                    href={`mailto:${siteConfig.personal.email}`}
                  >
                    {siteConfig.personal.email}
                  </a>
                  .
                </>
              )}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
