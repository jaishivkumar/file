import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderTwo from "@/components/HeaderTwo";
import TournamentDetailsInner from "@/components/TournamentDetailsInner";
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
      <BreadcrumbOne
        title='Tournament'
        theme='Details'
        inner='Tournament Details'
      />

      {/* TournamentDetailsInner */}
      <TournamentDetailsInner />

      {/* FooterOne */}
      <div className='tournament__footer mt--35'>
        <FooterOne />
      </div>
    </>
  );
};

export default page;
