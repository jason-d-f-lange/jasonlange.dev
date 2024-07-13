interface Props {
  children: React.ReactNode;
  title?: string;
  style?: React.CSSProperties;
}

export default function RésuméLink({ children, title, style }: Props) {
  return (
    <a
      href="/Jason Lange - résumé.pdf"
      target="_blank"
      aria-label="résumé"
      title={title}
      style={style}
    >
      {children}
    </a>
  );
}
