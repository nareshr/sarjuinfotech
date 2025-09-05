import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Sarju Infotech LLP</h1>
        <nav className="space-x-4">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Services</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </nav>
        <Button>Get Quote</Button>
      </div>
    </header>
  );
}
