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

export function Ksection() {
  return (
      <div className="space-y-20">
        <ToolsSection title="Routine Divisions">
          <Tool title="Lindy Hop Couple">
            <p>
              A two-to-four minute long routine, self-selected music. No particular restrictions as long as it is lindy hop.
            </p>
            <p>
              자체 선곡한 2-4분 길이의 루틴으로, 린디합이라면 어떠한 제약도 없음.
            </p>
          </Tool>
          <Tool title="Team">
            <p>
              A three-to-four minute long routine, self-selected music. In teams of more than 3 couples.
            </p>
            <p>
              자체 선곡한 3-4분 길이의 루틴으로, 3쌍 이상의 커플로 이루어진 팀.
            </p>
          </Tool>
        </ToolsSection>
        <ToolsSection title="Improvisation Divisions">
          <Tool title="Mix & Match">
            <ul className='list-disc ml-5'>
              <li> Rookie (Under 2 years experience)</li>
              <li> Open</li>
              <li> Advanced</li>
              <li> All Star</li>
            </ul>
          </Tool>
          <Tool title="Strictly Lindy">
            <ul className='list-disc ml-5'>
              <li> Open</li>
              <li> Advanced</li>
              <li> All Star</li>
            </ul>
          </Tool>
          <Tool title="Solo Jazz">
          </Tool>
        </ToolsSection>
      </div>
  )
}