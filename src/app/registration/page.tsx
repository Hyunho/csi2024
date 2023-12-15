import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Registration"
      // intro="Korean Lindy Hop Championships (KLHC) is Korea’s largest international competition where the best lindyhoppers for each division are selected. We sincerely hope that KLHC does not stop at just being a place to win simple results; we want it to be a stage of challenge and opportunity. Be there, compete, test your limits."
      intro=''
    >
      <div className="space-y-20">
        <ToolsSection title="Full Package">
          <Tool title="Full Workshop Package">
            description
          </Tool>
          <Tool title="Full Party Package">
            description
           </Tool>
          <Tool title="Kids Package">
            description
          </Tool>
        </ToolsSection>
        <ToolsSection title="Workshops">
          <Tool title="Saturday workshop">
          </Tool>
          <Tool title="Sunday workshop">
          </Tool>
        </ToolsSection>
        <ToolsSection title="Parties">
          <Tool title="Party pass">
          </Tool>
          <Tool title="Friday pass">
           </Tool>
          <Tool title="Saturday pass">
           </Tool>
          <Tool title="Sunday pass">
           </Tool>
        </ToolsSection>
        <ToolsSection title="Competitions">
          <Tool title="Mix & Match Divisions">
          </Tool>
          <Tool title="Strictly Lindy">
          </Tool>
          <Tool title="Solo Jazz">
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
