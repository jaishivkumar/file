import BreadcrumbOne from "@/components/BreadcrumbOne";
import CreatorOne from "@/components/CreatorOne";
import FooterOne from "@/components/FooterOne";
import HeaderTwo from "@/components/HeaderTwo";
import PlatformOne from "@/components/PlatformOne";
import TestimonialAreaOne from "@/components/TestimonialAreaOne";
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

      {/* HeaderTwo */}
      <HeaderTwo />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='Our' theme='Service' inner='Service' />

      {/* PlatformOne */}
      <PlatformOne />

      {/* VideoOne */}
      <VideoOne />

      {/* CreatorOne */}
      <CreatorOne />

      {/* TestimonialAreaOne */}
      <TestimonialAreaOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
