import Header from "../components/Header";
import Footer from "../components/Footer";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-6">{children}</main>
      <Footer />
    </div>
  );
}
