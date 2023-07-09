export default interface TypographyProps {
    children: React.ReactNode
    variant:
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "body1"
        | "button"
        | "label"
    fontWeight: "light" | "bold"
    color: "neutral-1-color" | "neutral-2-color" | "primary-color"
    className?: string
}
