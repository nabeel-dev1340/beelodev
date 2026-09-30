import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/site';
import { automationServices } from '../config/services';

export default function Footer() {
  const footerServices = siteConfig.footer.serviceSlugs.flatMap((slug) => {
    const service = automationServices.find((item) => item.slug === slug);
    return service ? [service] : [];
  });
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="wordmark">
            beelodev<span className="wordmark-dot">.</span>
          </Link>
          <p>
            Less manual work.
            <br />
            More room for the work that matters.
          </p>
          <span className="small muted">
            Nabeel Sharafat · Pakistan · Working worldwide
          </span>
        </div>
        <div>
          <h2 className="footer-heading">Automation services</h2>
          {footerServices.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              {service.title}
            </Link>
          ))}
          <Link href="/services">All automation services</Link>
        </div>
        <div>
          <h2 className="footer-heading">Explore</h2>
          {siteConfig.navLinks
            .filter((link) => link.name !== 'Services')
            .map((link) => (
              <Link key={link.href} href={link.href}>
                {link.name}
              </Link>
            ))}
          <Link href="/systems">Other automations</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h2 className="footer-heading">Connect directly</h2>
          <a href={`mailto:${siteConfig.personal.email}`}>
            {siteConfig.personal.email} <ArrowUpRight size={13} />
          </a>
          {siteConfig.footer.socials
            .filter((social) =>
              ['Upwork', 'Fiverr', 'GitHub'].includes(social.label),
            )
            .map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.label}
                <ArrowUpRight size={13} />
              </a>
            ))}
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Beelodev</span>
        <span>Built to make work simpler.</span>
        <Link href="/sitemap-page">Sitemap</Link>
      </div>
    </footer>
  );
}
