import Typography from "@atoms/Typography";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black-background">
            <Typography variant="h1" fontWeight="light">h1: Hello World</Typography>
            <Typography variant="h2" fontWeight="light">h2: Hello World</Typography>
            <Typography variant="h3" fontWeight="light">h3: Hello World</Typography>
            <Typography variant="h4" fontWeight="light">h4: Hello World</Typography>
            <Typography variant="h5" fontWeight="light">h5: Hello World</Typography>
            <Typography variant="body1" fontWeight="light">body1: Hello World</Typography>
            <Typography variant="button" fontWeight="light">button: Hello World</Typography>
            <Typography variant="label" fontWeight="light">label: Hello World</Typography>
        </main>
    )
}
