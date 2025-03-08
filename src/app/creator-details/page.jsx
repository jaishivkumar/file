import BreadcrumbOne from "@/components/BreadcrumbOne";
import CreatorDetailsArea from "@/components/CreatorDetailsArea";
import CreatorDetailsInner from "@/components/CreatorDetailsInner";
import FooterOne from "@/components/FooterOne";
import HeaderTwo from "@/components/HeaderTwo";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "DYAT - eSports and Gaming NFT NEXT JS Template",
  description:
    "DYAT is a modern, dynamic Next JS template designed specifically for eSports teams, gaming communities, and NFT marketplaces. With its sleek design and powerful features, DYAT provides the perfect platform for showcasing gaming events, team profiles, NFT collections, and digital assets in the fast-growing world of gaming and blockchain.",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderTwo />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='Creator' theme='Details' inner='Creator Details' />

      {/* CreatorDetailsInner */}
      <CreatorDetailsInner />

      {/* CreatorDetailsArea */}
      <CreatorDetailsArea />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
