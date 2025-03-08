import "./font.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "aos/dist/aos.css";
import "./globals.scss";
import BootstrapInit from "@/helper/BootstrapInit";
import RouteScrollToTop from "@/helper/RouteScrollToTop";
import LoadPhosphorIcons from "@/helper/LoadPhosphorIcons";

import CustomCursor from "@/helper/CustomCursor";
import BackToTop from "@/helper/BackToTop";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        <BootstrapInit />
        <CustomCursor />
        <BackToTop />
        <LoadPhosphorIcons />

        <RouteScrollToTop />
        {children}
      </body>
    </html>
  );
}
