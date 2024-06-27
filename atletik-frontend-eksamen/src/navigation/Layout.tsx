import NavBar from "./NavBar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div style={{ paddingTop: "60px", padding: "20px" }}></div>
      <main>{children}</main>
    </div>
  );
}
