import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Search, Download, FileText, Building2, User } from "lucide-react";

import UdhyaNokia from "@/assets/InterviewExperiences/UdhyaKumarKNokia.pdf";
import TasneemAppian from "@/assets/InterviewExperiences/TasneemAppian.pdf";
import SushmithaAmex from "@/assets/InterviewExperiences/Sushmitha_2026_American Express.pdf";
import SAPLabsSanjeev from "@/assets/InterviewExperiences/SAP LABS INTERVIEW EXPERIENCE_SanjeevA.pdf";
import LokeshAppian from "@/assets/InterviewExperiences/Lokesh_2026_Appian.pdf";
import DivyaWellsFargo from "@/assets/InterviewExperiences/DivyaKannathaal_2026_Wells Fargo.pdf";
import AjayTekion from "@/assets/InterviewExperiences/AjayMalarTekion.pdf";
import AppianQE from "@/assets/InterviewExperiences/APPIAN_QE_interviewexp.pdf";
import BaranidharanIDFC from "@/assets/InterviewExperiences/Baranidharan_2026_IDFC_First_Bank.pdf";


interface Experience {
  name: string;
  company: string;
  role: string;
  dept: string;
  pdf: string;
}

const Experience = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  interface Experience {
    name: string;
    company: string;
    role: string;
    year: number;
    dept: string;
    pdf: string;
  }
  
  const experiences: Experience[] = [
    { name: "Udhya Kumar", company: "Nokia", role: "Software Developer", year: 2025 ,dept: "Department of Computer Technology", pdf: UdhyaNokia },
    { name: "Tasneem A", company: "Appian", role: "Software Developer",year: 2025 , dept: "Department of Computer Technology", pdf: TasneemAppian },
    { name: "Sushmitha", company: "American Express", role: "Software Developer",year: 2025 , dept: "Department of Computer Technology", pdf: SushmithaAmex },
    { name: "Sanjeev A", company: "SAP Labs", role: "Software Developer",year: 2025 , dept: "Department of Computer Technology", pdf: SAPLabsSanjeev },
    { name: "Lokesh", company: "Appian", role: "Software Developer", year: 2025 ,dept: "Department of Computer Technology", pdf: LokeshAppian },
    { name: "Divya Kannathaal", company: "Wells Fargo", role: "Software Developer",year: 2025 , dept: "Department of Computer Technology", pdf: DivyaWellsFargo },
    { name: "Ajay Malar M", company: "Tekion", role: "Software Developer",year: 2025 , dept: "Department of Computer Technology", pdf: AjayTekion },
    { name: "Appian QE", company: "Appian", role: "Software Developer",year: 2025 , dept: "Department of Computer Technology", pdf: AppianQE },
    { name: "Baranidharan", company: "IDFC First Bank", role: "Software Developer",year: 2025 , dept: "Department of Computer Technology", pdf: BaranidharanIDFC },
  ];
  
  const filteredExperiences = experiences.filter(
    (exp) =>
      exp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewExperience = (experience: Experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const handleDownload = (pdfPath: string, fileName: string) => {
    // In a real application, this would trigger a download
    window.open(pdfPath, "_blank");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-15">
        {/* Header */}
        <section className="gradient-hero py-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-primary mb-3 mt-9 pt-10">Interview Experiences</h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto pb-7">
              Real journeys shared by our students — learn, prepare, and succeed.
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 bg-background border-b sticky top-16 z-40">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Search by student name or company name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 shadow-card"
              />
            </div>
          </div>
        </section>

        {/* Experience Cards */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            {filteredExperiences.length === 0 ? (
              <div className="text-center py-20">
                <FileText className="mx-auto text-muted-foreground mb-4" size={48} />
                <p className="text-xl text-muted-foreground">
                  No experiences found matching your search.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {filteredExperiences.map((experience, index) => (
                  <Card
                    key={index}
                    className="shadow-card hover:shadow-hover transition-smooth cursor-pointer border-l-4 border-l-accent"
                    onClick={() => handleViewExperience(experience)}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <User className="text-primary" size={16} />
                        </div>
                        <CardTitle className="text-xl">{experience.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-foreground/80">
                          <Building2 className="text-secondary" size={16} />
                          <span className="font-semibold">{experience.company}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{experience.role}</p>
                        <p className="text-sm text-muted-foreground">{experience.year}</p>
                        <p className="text-sm text-accent font-medium">Dept: {experience.dept}</p>
                      </div>
                      <Button
                        variant="secondary"
                        className="w-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownload(experience.pdf, `${experience.name}_${experience.company}.pdf`);
                        }}
                      >
                        <Download size={16} className="mr-2" />
                        Download PDF
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* PDF Viewer Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
            <DialogHeader>
              <DialogTitle className="text-2xl text-primary">
                Interview Experience - {selectedExperience?.name}
              </DialogTitle>
              <div className="text-sm text-muted-foreground">
                {selectedExperience?.company} • {selectedExperience?.role}
              </div>
            </DialogHeader>
            <div className="mt-4">
              <div className="flex gap-2 mb-4">
                <Button
                  variant="outline"
                  onClick={() => window.open(selectedExperience?.pdf, "_blank")}
                  className="flex-1"
                >
                  <FileText size={16} className="mr-2" />
                  View Full PDF
                </Button>
                <Button
                  variant="cta"
                  onClick={() => handleDownload(selectedExperience?.pdf || "", `${selectedExperience?.name}.pdf`)}
                  className="flex-1"
                >
                  <Download size={16} className="mr-2" />
                  Download PDF
                </Button>
              </div>
              <div className="bg-muted/30 rounded-lg p-8 text-center h-96 flex items-center justify-center">
                <div>
                  <FileText className="mx-auto text-muted-foreground mb-4" size={64} />
                  <p className="text-muted-foreground mb-4">
                    PDF viewer would display here in production
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Click "View Full PDF" or "Download PDF" to access the document
                  </p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  );
};

export default Experience;
