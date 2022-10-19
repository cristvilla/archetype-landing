import Head from 'next/head'
import BlockWithImage from '../components/block-with-image'
import Investors from '../components/sections/investors'
import Hero from '../components/sections/landing-hero'
import Layout from '../components/layout/layout'
import Guide from "../components/sections/guide"
import Testimonials from "../components/sections/testimonials"
import Faq from "../components/sections/faq"
import CallToAction from "../components/sections/cta"

const contents1 = [
  'Create and issue plans in seconds through custom branded invoices or payment links.',
  'Bill on any metric, whether it’s seat-based, storage-based, API calls, and more.',
  'Archetype supports one-time, fixed, and usage-based recurring billing for standard flat rates, tiered pricing, and overages. ',

  'Issue volume-based discounts, credits, and coupons instantly, creating custom proration rules for adjustments.',
  'Branded customer Portal, Pricing Portal, and checkout sessions functionality so customers take their subscription management into their own hands.',
  'Contractual basis plans for your B2B sales team. '
]
const contents2 = [
  'Spreadsheets are dead.Enable your Finance and Operations teams to streamline their revenue recognition and invoicing process with our automated usage tracking and billing tools.',
  'Coupons, discounts, plan upgrades and downgrades are updated on our append - only ledger visible in our dashboard.Save your finance teams more than 20 hours per month.'
]
const contents3 = [
  'Thinking smarter about your pricing is always confusing.',
  'The Archetype analytics dashboard helps you run real - time pricing experiments to drive revenues for your organization.Granular analytics into churn, endpoint permissioning, entilements, usage, and more.'
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Archetype Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <Investors />
        <BlockWithImage heading='Flexible Usage Based Pricing to Empower both Self-Serve PLG and Sales-Led Motions'
          contents={contents1}
          image={'/images/motion1.png'}
          background={true}
        />
        <BlockWithImage heading={`Revenue Recognition and
        Automated Billing`}
          contents={contents2}
          image={'/images/motion2.png'}
          background={false}
        />
        <BlockWithImage heading={`Real-time Price
        Experimentation`}
          contents={contents3}
          image={'/images/motion3.png'}
          background={true}
        />
        <Guide />
        {/* <Testimonials /> */}
        <Faq />
        <CallToAction />
      </Layout>
    </>
  )
}
