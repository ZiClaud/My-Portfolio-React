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
    className?: string
}
