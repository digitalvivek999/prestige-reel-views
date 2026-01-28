import { useState } from "react";
import VideoHero from "@/components/VideoHero";
import PropertyStatusTracker from "@/components/PropertyStatusTracker";
import GalleryGrid from "@/components/GalleryGrid";
import ScheduleTourForm from "@/components/ScheduleTourForm";
import DocumentsSection from "@/components/DocumentsSection";
import Footer from "@/components/Footer";

// Gallery images
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryImages = [
  { id: 1, src: gallery1, alt: "Villa Exterior Night View", category: "exterior" },
  { id: 2, src: gallery2, alt: "Grand Living Room", category: "interior" },
  { id: 3, src: gallery3, alt: "Master Suite", category: "bedrooms" },
  { id: 4, src: gallery4, alt: "Gourmet Kitchen", category: "interior" },
  { id: 5, src: gallery5, alt: "Spa Bathroom", category: "bathrooms" },
  { id: 6, src: gallery6, alt: "Infinity Pool Terrace", category: "exterior" },
];

// Sample video URL - Replace with your actual property video
const HERO_VIDEO_URL = "https://videos.pexels.com/video-files/4067948/4067948-uhd_2560_1440_30fps.mp4";

const Index = () => {
  const [isTourFormOpen, setIsTourFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Video Hero Section */}
      <VideoHero
        videoUrl={HERO_VIDEO_URL}
        propertyName="Villa Serenità"
        propertyAddress="1200 Ocean Drive, Malibu, California"
        price="$47,500,000"
        onScheduleTour={() => setIsTourFormOpen(true)}
      />

      {/* Gallery Grid */}
      <GalleryGrid images={galleryImages} />

      {/* Property Status Tracker */}
      <PropertyStatusTracker />

      {/* Documents Section */}
      <DocumentsSection />

      {/* Footer */}
      <Footer />

      {/* Schedule Tour Modal */}
      <ScheduleTourForm
        isOpen={isTourFormOpen}
        onClose={() => setIsTourFormOpen(false)}
        propertyName="Villa Serenità"
      />
    </div>
  );
};

export default Index;
