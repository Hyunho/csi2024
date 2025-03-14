import { Container } from "@/components/Container"
import { Prose } from '@/components/Prose'

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (

        <Container className="mt-16 lg:mt-32">
            {/* <section data-mdx-content>{children}</section> */}
            <Prose className="mt-8" data-mdx-content>
              {children}
            </Prose>
        </Container>
    )
}