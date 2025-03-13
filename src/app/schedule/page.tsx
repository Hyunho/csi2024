import { Container } from '@/components/Container'

export default function Schedule() {
    return (
        <Container>
            <h1>Schedule</h1>
            <div className="w-full h-screen md:fixed md:left-0 md:right-0 md:bottom-0 md:w-screen overflow-hidden">
                <iframe 
                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTR96ZN_1oXH8XNX05Z_TkUKawTjkKl5KMtN9Wwf0khXIqwa65K9Nk3UhK-dE_XA9SpyEJwyoPJN6Iy/pubhtml?gid=720224361&amp;single=true&amp;widget=true&amp;headers=false"
                    className="w-full h-full border-none"
                />
            </div>
            <div>
            </div>
        </Container>
    )
}
