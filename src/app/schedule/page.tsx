import { Container } from '@/components/Container'

export default function Schedule() {
    return (
        <Container>
            <h1>Schedule</h1>
            <div className="fixed top-16 left-0 right-0 bottom-0 w-screen h-[calc(100vh-64px)] overflow-hidden">
                <iframe
                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSHnsk8Et01HHrkvQ7hvEFvnlYLQZyiRjp6sYLKs2t9pw5lLoQTlwkidC-cdaDR_4GYoK76AIONq_7l/pubhtml?gid=720224361&amp;single=true&amp;widget=true&amp;headers=false"
                    className="w-full h-full border-none absolute inset-0"
                />
            </div>
            <div>
            </div>
        </Container>
    )
}
