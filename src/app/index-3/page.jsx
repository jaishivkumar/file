import AboutAreaThree from "@/components/AboutAreaThree";
import BannerThree from "@/components/BannerThree";
import BlogAreaOne from "@/components/BlogAreaOne";
import FooterThree from "@/components/FooterThree";
import GalleryTwo from "@/components/GalleryTwo";
import HeaderThree from "@/components/HeaderThree";
import ProductAreaOne from "@/components/ProductAreaOne";
import RoadmapOne from "@/components/RoadmapOne";
import TopAdvisorsTwo from "@/components/TopAdvisorsTwo";
import TournamentOne from "@/components/TournamentOne";
import VideoOne from "@/components/VideoOne";
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

      {/* HeaderThree */}
      <HeaderThree />

      {/* BannerThree */}
      <BannerThree />

      {/* AboutAreaThree */}
      <AboutAreaThree />

      {/* GalleryTwo */}
      <GalleryTwo />

      {/* TournamentOne */}
      <TournamentOne />

      {/* RoadmapOne */}
      <RoadmapOne />

      {/* TopAdvisorsTwo */}
      <TopAdvisorsTwo />

      {/* VideoOne */}
      <VideoOne />

      {/* ProductAreaOne */}
      <ProductAreaOne />

      {/* BlogAreaOne */}
      <BlogAreaOne />

      {/* FooterThree */}
      <FooterThree />
    </>
  );
};

export default page;
