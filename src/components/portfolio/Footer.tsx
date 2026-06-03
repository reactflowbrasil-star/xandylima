export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-max px-6 md:px-10 lg:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow font-display font-bold text-primary-foreground">
            A
          </span>
          <div>
            <div className="font-display font-bold text-sm">Alexandre de Lima Cardoso</div>
            <div className="text-xs text-muted-foreground">UX/UI Designer & Full-Stack Sênior · Goiânia, GO</div>
          </div>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Alexandre Lima. Feito com café e código.
        </div>
      </div>
    </footer>
  );
}
