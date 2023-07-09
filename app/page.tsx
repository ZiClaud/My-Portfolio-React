import Typography from "@atoms/Typography";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black-background">
            <Typography variant="h1" fontWeight="light" color="primary-color">h1: Hello World</Typography>
            <Typography variant="h2" fontWeight="light" color="neutral-1-color">h2: Hello World</Typography>
            <Typography variant="h3" fontWeight="light" color="neutral-2-color">h3: Hello World</Typography>
            <Typography variant="h4" fontWeight="light" color="neutral-1-color">h4: Hello World</Typography>
            <Typography variant="h5" fontWeight="light" color="neutral-1-color">h5: Hello World</Typography>
            <Typography variant="body1" fontWeight="light" color="primary-color">body1: Hello World</Typography>
            <Typography variant="button" fontWeight="light" color="neutral-1-color">button: Hello World</Typography>
            <Typography variant="label" fontWeight="light" color="neutral-1-color">label: Hello World</Typography>
        </main>
    )
}
