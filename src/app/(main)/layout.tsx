import { Navbar } from "@/Components/Navber";
import Footer from "@/Components/Footer";
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="my-bg-div">
        {children}
        <Footer />
      </div>
      
    </>
  );
}
