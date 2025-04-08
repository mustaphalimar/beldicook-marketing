import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PageWrapper from "@/components/layout/PageWrapper";
import Menu from "@/components/layout/menu/Menu";
import Products from "@/components/layout/menu/Products";

export default function MenuPage() {
  return (
    <PageWrapper className="bg-neutral-900">
      <Products pb="xl" />
      <Menu pt="xl" pb="xl" />
      <Footer />
    </PageWrapper>
  );
}
