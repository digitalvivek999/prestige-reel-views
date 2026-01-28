import { motion } from "framer-motion";
import { FileText, Download, Eye, MapPin, Ruler, Building } from "lucide-react";

interface Document {
  id: number;
  title: string;
  type: string;
  size: string;
  icon: React.ElementType;
  downloadUrl: string;
}

const documents: Document[] = [
  {
    id: 1,
    title: "Master Floor Plan",
    type: "PDF",
    size: "4.2 MB",
    icon: MapPin,
    downloadUrl: "#",
  },
  {
    id: 2,
    title: "Property Specifications",
    type: "PDF",
    size: "2.1 MB",
    icon: Ruler,
    downloadUrl: "#",
  },
  {
    id: 3,
    title: "Architectural Drawings",
    type: "PDF",
    size: "8.7 MB",
    icon: Building,
    downloadUrl: "#",
  },
  {
    id: 4,
    title: "Legal Documentation",
    type: "PDF",
    size: "1.5 MB",
    icon: FileText,
    downloadUrl: "#",
  },
];

const DocumentsSection = () => {
  return (
    <section id="documents" className="py-24 px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
            Property Details
          </span>
          <h2 className="text-4xl md:text-5xl font-display mt-4 mb-6">
            Documents & Floor Plans
          </h2>
          <div className="section-divider" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Access comprehensive documentation including architectural drawings, floor plans, and legal paperwork for your due diligence.
          </p>
        </motion.div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documents.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 group hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <doc.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-display mb-1 group-hover:text-primary transition-colors duration-300">
                    {doc.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="px-2 py-0.5 bg-white/5 rounded text-xs">{doc.type}</span>
                    <span>{doc.size}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-300 text-muted-foreground hover:text-foreground">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors duration-300 text-muted-foreground hover:text-primary">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* NDA Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 glass-card px-6 py-4">
            <FileText className="w-5 h-5 text-primary" />
            <p className="text-sm text-muted-foreground">
              Access to detailed documentation requires signing an NDA. 
              <a href="#" className="text-primary hover:underline ml-1">Contact us</a> for more information.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DocumentsSection;
