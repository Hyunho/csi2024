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
      title="Korean Lindy Hop Championships"
      intro="Korean Lindy Hop Championships (KLHC) is Korea’s largest international competition where the best lindyhoppers for each division are selected. We sincerely hope that KLHC does not stop at just being a place to win simple results; we want it to be a stage of challenge and opportunity. Be there, compete, test your limits."
    >
      <div className="space-y-20">
        <h1>Divisions</h1>
        <ToolsSection title="Routine Divisions">
          <Tool title="The Lindy Hop World Cup Showcase (couples division)">
            <p>
              A two-to-four minute long routine, self-selected music. No particular restrictions as long as it is lindy hop. Lifts, drops, aerials, air steps, acrobatics all allowed.
            </p>
            <p>
              자체 선곡한 2-4분 길이의 루틴으로, 린디합이라면 어떠한 제약도 없음. 리프트, 드롭, 에어리얼, 에어스텝, 아크로바틱 등이 허용됨.
            </p>
          </Tool>
          <Tool title="Lindy Hop Classic (non-showcase: couples division)">
            <p>
              A two-to-four minute long routine, self-selected music. No lifts, aerials or air steps
            </p>
            <p>
              자체 선곡한 2-4분 길이의 루틴으로, 리프트, 에어리얼, 에어스텝은 허용되지 않음.
            </p>
          </Tool>
          <Tool title="Team Division">
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
            <ul>
              <li>Rookie (Under 2 years experience)</li>
              <li>Open</li>
              <li>Advanced</li>
              <li>All Star
                  * Qualifications (winner refers to 1st, 2nd and/or 3rd places)
                <ol>
                  <li>
                  1) Winners at KLHC Advanced M&M
                  </li>
                  <li>
2) Winners at Summer Swing Dance Championships @ Busan Swing Festival Advanced M&M
                  </li>
                  <li>
3) Finalists at The Battle Korea Advanced M&M (1st or 2nd), winners at All-star M&M (quarter finalists)
                  </li>
                  <li>
4) Otherwise deemed qualified by KLHC organizers 
                  </li>

                </ol>

              </li>
            </ul>
          </Tool>
          <Tool title="Strictly Lindy">
            <ul>
              <li>Open</li>
              <li>Advanced</li>
              <li>
                All Star
                * Qualifications
                <ol>
                  <li>
                    1) Winners at KLHC Showcase, Classic and Advanced Strictly divisions
                  </li>
                  <li>
                    2) Winners at Korea Open Swing Championships hosted by Kukmin University – Showcase
                  </li>
                  <li>
                    3) Finalists at The Battle Korea Advanced Strictly (1st or 2nd), winners at All-star Strictly (quarter finalists)
                  </li>
                  <li>
                    4) Otherwise deemed qualified by KLHC organizers
                  </li>
                </ol>
              </li>
            </ul>
          </Tool>
          <Tool title="Solo Jazz">
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
