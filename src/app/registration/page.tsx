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
      <div>
      * 티켓 신청


CSI 2024 신청은 그동안 패키지로 묶어왔던 티켓 판매 방식을 벗어나, 다양한 선택지를 제공하고자 합니다. 물가인상 요인을 최대한 줄이고 참가자 분들의 취향과 상황에 맞춰 드리고자, 이번에는 파티, 숙소, 식사, 워크샵 등을 개별적으로 선택하실 수 있도록 분리하였습니다.

청심 수련원 부지에서 캠핑 이나 차박이 가능하거나 파티 후 근처 숙소나 귀가를 원하시는 분들, 또는 단체급식이 입에 안맞거나 다른 선택이 필요하신 분들에게는 이번 분리된 판매 방식이 더욱 합리적인 선택이 될 것입니다.
      </div>
      {/* <div className="space-y-20">
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
      </div> */}
    </SimpleLayout>
  )
}
