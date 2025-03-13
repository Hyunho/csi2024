import { Container } from '@/components/Container'

export default function Schedule() {
    return (
        <Container>
            <h1>Schedule</h1>
            <div style={{
                position: 'fixed',
                top: '50px',
                left: 0,
                right: 0,
                bottom: 0,
                width: '100vw',
                height: '100vh',
                overflow: 'hidden'
            }}>
                <iframe 
                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTR96ZN_1oXH8XNX05Z_TkUKawTjkKl5KMtN9Wwf0khXIqwa65K9Nk3UhK-dE_XA9SpyEJwyoPJN6Iy/pubhtml?gid=720224361&amp;single=true&amp;widget=true&amp;headers=false"
                    style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        position: 'absolute',
                        top: 0,
                        left: 0
                    }}
                />
            </div>
            <div>
            </div>
        </Container>
    )
}
