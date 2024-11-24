import Grid from "@/components/Grid/Grid";
import Navbar from "../../components/Navbar/Navbar";
import "./styles.css";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <Grid />
      <Navbar />
      {children}
    </main>
  );
}
