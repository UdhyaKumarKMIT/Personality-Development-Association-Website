import { useState } from "react";
import { send } from "@emailjs/browser"; // EmailJS
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    send(
      "service_2k17xom",       // replace with your EmailJS service ID
      "template_3llmnly",      // replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "pda@mitindia.edu",
      },
      "7SZh47fUDxq69DUaL"        // replace with your EmailJS public key
    )
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
        console.error(err);
      })
      .finally(() => setLoading(false));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-primary mb-4">Get in Touch</h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Have questions? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Your message..."
                        rows={6}
                      />
                    </div>
                    <Button type="submit" variant="cta" size="lg" className="w-full" disabled={loading}>
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>

                  {/* Contact Icons */}
                  <div className="flex justify-center gap-4 mt-8 pt-8 border-t">
                    <a
                      href="https://www.linkedin.com/company/personality-development-association-mit/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-smooth"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} className="text-primary" />
                    </a>
                    <a
                      href="https://instagram.com/pda_mit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-accent/10 p-3 rounded-full hover:bg-accent/20 transition-smooth"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} className="text-accent" />
                    </a>
                    <a
                      href="mailto:pda@mitindia.edu"
                      className="bg-secondary/10 p-3 rounded-full hover:bg-secondary/20 transition-smooth"
                      aria-label="Email"
                    >
                      <Mail size={20} className="text-secondary" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Map & Contact Info */}
              <div className="space-y-6">
                <Card className="shadow-card">
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold text-primary mb-6">Visit Us</h2>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="text-accent mt-1" size={20} />
                        <div>
                          <p className="font-semibold">Address</p>
                          <p className="text-foreground/70">
                            MIT Campus, Anna University
                            <br />
                            Chennai, Tamil Nadu
                            <br />
                            India
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="text-secondary mt-1" size={20} />
                        <div>
                          <p className="font-semibold">Email</p>
                          <p className="text-foreground/70">pda@mitindia.edu</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-semibold">Phone</p>
                          <p className="text-foreground/70">+91 XXX XXX XXXX</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Embedded Map */}
                <div className="rounded-lg overflow-hidden shadow-card h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.4085689273056!2d80.13709327373529!3d12.94837538736484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fac595c29ff%3A0xb76082ae18b51418!2sMadras%20Institute%20of%20Technology%2C%20Anna%20University!5e1!3m2!1sen!2sin!4v1758911526299!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MIT Campus Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
