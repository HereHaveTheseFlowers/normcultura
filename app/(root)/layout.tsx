import Grid from "@/components/Grid/Grid";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <Grid />
      {children}
    </main>
  );
}
