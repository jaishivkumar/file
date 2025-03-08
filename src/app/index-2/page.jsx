import AboutAreaTwo from "@/components/AboutAreaTwo";
import BannerTwo from "@/components/BannerTwo";
import CreatorOne from "@/components/CreatorOne";
import FeatureAreaTwo from "@/components/FeatureAreaTwo";
import FooterTwo from "@/components/FooterTwo";
import GalleryOne from "@/components/GalleryOne";
import HeaderTwo from "@/components/HeaderTwo";
import InstagramAreaOne from "@/components/InstagramAreaOne";
import PlatformOne from "@/components/PlatformOne";
import TopAdvisorsOne from "@/components/TopAdvisorsOne";
import TopAuctionOne from "@/components/TopAuctionOne";
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

      {/* BannerTwo */}
      <BannerTwo />

      {/* AboutAreaTwo */}
      <AboutAreaTwo />

      {/* GalleryOne */}
      <GalleryOne />

      {/* FeatureAreaTwo */}
      <FeatureAreaTwo />

      {/* CreatorOne */}
      <CreatorOne />

      {/* TopAuctionOne */}
      <TopAuctionOne />

      {/* TopAdvisorsOne */}
      <TopAdvisorsOne />

      {/* PlatformOne */}
      <PlatformOne />

      {/* InstagramAreaOne */}
      <InstagramAreaOne />

      {/* FooterTwo */}
      <FooterTwo />
    </>
  );
};

export default page;
