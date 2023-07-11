import Typography from "@atoms/Typography";
import Hero from "@organisms/Hero";
import Skills from "@organisms/Skills";

export default function Home() {
    return (
        <main className="flex flex-col bg-black-background px-28">
            <Hero />
            <Skills />
            <Typography variant="h1" color="primary" bold={false}>h1: Hello World</Typography>
            <Typography variant="h2" color="neutral-1" bold={false}>h2: Hello World</Typography>
            <Typography variant="h3" color="neutral-2" bold={false}>h3: Hello World</Typography>
            <Typography variant="h4" color="neutral-1" bold={false}>h4: Hello World</Typography>
            <Typography variant="h5" color="neutral-1" bold={false}>h5: Hello World</Typography>
            <Typography variant="body1" color="primary" bold={false}>body1: Hello World</Typography>
            <Typography variant="button" color="neutral-1" bold={false}>button: Hello World</Typography>
            <Typography variant="label" color="neutral-1" bold={false}>label: Hello World</Typography>
        </main>
    )
}
