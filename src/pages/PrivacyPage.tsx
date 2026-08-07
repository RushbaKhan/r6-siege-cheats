import { Link } from 'react-router-dom';
import {
  FeaturePageLayout,
  proseHeading,
  proseParagraph,
} from './FeaturePageLayout';
import { PAGE_DESCRIPTIONS, PAGE_TITLES } from '../seo/constants';
import { SITE_NAME, SITE_URL } from '../seo/site';

export function PrivacyPage() {
  return (
    <FeaturePageLayout
      seoTitle={PAGE_TITLES.privacy}
      seoDescription={PAGE_DESCRIPTIONS.privacy}
      path="/privacy"
      sectionLabel="Legal"
      title="Privacy Policy"
      subtitle={`How ${SITE_NAME} (${SITE_URL.replace('https://', '')}) collects, uses, and protects visitor information.`}
      internalLinks={[
        { label: 'FAQ', to: '/faq' },
        { label: 'All Features', to: '/features' },
        { label: 'Blog', to: '/blog' },
      ]}
    >
      <p style={proseParagraph}>
        <strong style={{ color: 'var(--text-primary)' }}>Effective date:</strong> August 7, 2026
      </p>
      <p style={proseParagraph}>
        This Privacy Policy describes how {SITE_NAME} ("we," "us," or "our") handles information when you visit
        r6siegecheats.com (the "Site"). We are committed to transparency about what data we collect, why we
        collect it, and the choices available to you. By using the Site, you agree to the practices described in
        this policy.
      </p>

      <h2 style={proseHeading}>Information We Collect</h2>
      <p style={proseParagraph}>
        <strong style={{ color: 'var(--text-primary)' }}>Information you provide.</strong> When you contact us
        through support channels, subscribe to updates, or complete a purchase through our third-party checkout
        provider, you may provide your email address, payment details, and any message content you choose to send.
        Payment processing is handled entirely by our checkout partner — we do not store full credit card numbers
        on our servers.
      </p>
      <p style={proseParagraph}>
        <strong style={{ color: 'var(--text-primary)' }}>Automatically collected information.</strong> Like most
        websites, the Site may automatically collect certain technical data when you visit, including your IP
        address, browser type and version, operating system, referring URL, pages viewed, time spent on pages,
        and general device information. This data is collected through standard server logs and analytics tools.
      </p>
      <p style={proseParagraph}>
        <strong style={{ color: 'var(--text-primary)' }}>Cookies and similar technologies.</strong> We use cookies
        and local storage to maintain basic site functionality, remember preferences, and understand how visitors
        interact with our content. Analytics cookies help us measure traffic patterns and improve page performance.
        You can control cookie behavior through your browser settings, though disabling cookies may affect certain
        site features.
      </p>

      <h2 style={proseHeading}>How We Use Your Information</h2>
      <p style={proseParagraph}>
        We use collected information to operate and improve the Site, respond to support inquiries, process and
        fulfill orders through our payment provider, analyze usage trends to improve content and navigation, detect
        and prevent fraud or abuse, and comply with applicable legal obligations. We do not sell your personal
        information to third parties for their marketing purposes.
      </p>

      <h2 style={proseHeading}>Third-Party Services</h2>
      <p style={proseParagraph}>
        The Site integrates with third-party services that operate under their own privacy policies. These may
        include payment processors for checkout and order fulfillment, analytics providers for traffic measurement,
        content delivery networks for asset hosting, and search engine indexing services. When you click an external
        link — including purchase links — you leave our Site and become subject to the destination site's policies.
        We encourage you to review the privacy policies of any third-party service before providing personal
        information.
      </p>

      <h2 style={proseHeading}>Data Retention</h2>
      <p style={proseParagraph}>
        We retain personal information only as long as necessary to fulfill the purposes described in this policy,
        unless a longer retention period is required by law. Server logs and analytics data are typically retained
        for a limited period before being aggregated or deleted. Support correspondence is retained to provide
        ongoing assistance and resolve disputes. Order records maintained by our payment provider are subject to
        their retention schedules.
      </p>

      <h2 style={proseHeading}>Data Security</h2>
      <p style={proseParagraph}>
        We implement reasonable technical and organizational measures to protect information against unauthorized
        access, alteration, disclosure, or destruction. The Site is served over HTTPS to encrypt data in transit.
        However, no method of transmission over the Internet or electronic storage is completely secure, and we
        cannot guarantee absolute security of your data.
      </p>

      <h2 style={proseHeading}>Your Rights and Choices</h2>
      <p style={proseParagraph}>
        Depending on your jurisdiction, you may have the right to access, correct, or delete personal information
        we hold about you, object to or restrict certain processing activities, and withdraw consent where processing
        is based on consent. To exercise these rights, contact us through the support channels listed on the Site.
        We will respond to verified requests within a reasonable timeframe as required by applicable law.
      </p>
      <p style={proseParagraph}>
        You can opt out of non-essential analytics cookies through your browser settings. Most browsers allow you
        to refuse cookies or alert you when a cookie is being sent. Because cookie management varies by browser,
        consult your browser's help documentation for specific instructions.
      </p>

      <h2 style={proseHeading}>Children's Privacy</h2>
      <p style={proseParagraph}>
        The Site is not directed at individuals under the age of 18. We do not knowingly collect personal
        information from children. If you believe we have inadvertently collected information from a minor, please
        contact us and we will take steps to delete it promptly.
      </p>

      <h2 style={proseHeading}>International Visitors</h2>
      <p style={proseParagraph}>
        The Site is operated from servers that may be located in different jurisdictions. If you access the Site
        from outside the country where our servers are hosted, your information may be transferred to, stored, and
        processed in that jurisdiction. By using the Site, you consent to the transfer of your information to
        countries that may have different data protection laws than your country of residence.
      </p>

      <h2 style={proseHeading}>Changes to This Policy</h2>
      <p style={proseParagraph}>
        We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or
        legal requirements. When we make material changes, we will update the effective date at the top of this
        page. We encourage you to review this policy periodically. Continued use of the Site after changes are
        posted constitutes acceptance of the updated policy.
      </p>

      <h2 style={proseHeading}>Contact Us</h2>
      <p style={{ ...proseParagraph, marginBottom: 0 }}>
        If you have questions about this Privacy Policy or how we handle your data, contact us through the support
        channels available on {SITE_URL.replace('https://', '')}. For product-related inquiries, visit our{' '}
        <Link to="/faq" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>
          FAQ page
        </Link>
        .
      </p>
    </FeaturePageLayout>
  );
}
