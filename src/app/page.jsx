import AboutAreaOne from "@/components/AboutAreaOne";
import BannerOne from "@/components/BannerOne";
import BlockChainGalleryAreaOne from "@/components/BlockChainGalleryAreaOne";
import CreatorAreaOne from "@/components/CreatorAreaOne";
import FeatureAreaOne from "@/components/FeatureAreaOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import PartnerAreaOne from "@/components/PartnerAreaOne";
import TestimonialAreaOne from "@/components/TestimonialAreaOne";
import TopAuctionAreaOne from "@/components/TopAuctionAreaOne";
import TopSellerAreaOne from "@/components/TopSellerAreaOne";
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

      {/* HeaderOne */}
      <HeaderOne />

      {/* BannerOne */}
      <BannerOne />

      {/* FeatureAreaOne */}
      <FeatureAreaOne />

      {/* TopSellerAreaOne */}
      <TopSellerAreaOne />

      {/* AboutAreaOne */}
      <AboutAreaOne />

      {/* TopAuctionAreaOne */}
      <TopAuctionAreaOne />

      {/* BlockChainGalleryAreaOne */}
      <BlockChainGalleryAreaOne />

      {/* CreatorAreaOne */}
      <CreatorAreaOne />

      {/* TestimonialAreaOne */}
      <TestimonialAreaOne />

      {/* PartnerAreaOne */}
      <PartnerAreaOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
