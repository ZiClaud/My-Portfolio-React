import Typography from "@atoms/Typography";
import Header from "@organisms/Header";
import Hero from "@organisms/Hero";

export default function Home() {
    return (
        <main className="flex flex-col bg-black-background px-28">
            <Hero />
            <Typography variant="h1" color="primary-color" bold={false}>h1: Hello World</Typography>
            <Typography variant="h2" color="neutral-1-color" bold={false}>h2: Hello World</Typography>
            <Typography variant="h3" color="neutral-2-color" bold={false}>h3: Hello World</Typography>
            <Typography variant="h4" color="neutral-1-color" bold={false}>h4: Hello World</Typography>
            <Typography variant="h5" color="neutral-1-color" bold={false}>h5: Hello World</Typography>
            <Typography variant="body1" color="primary-color" bold={false}>body1: Hello World</Typography>
            <Typography variant="button" color="neutral-1-color" bold={false}>button: Hello World</Typography>
            <Typography variant="label" color="neutral-1-color" bold={false}>label: Hello World</Typography>
        </main>
    )
}
