import { Mail, Phone, Code, Globe, Smartphone } from "lucide-react";
import MainLayout from "../layouts/MainLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Welcome to Sarju Infotech LLP</h2>
        <p className="text-lg mb-6">
          We build scalable, modern software solutions for your business.
        </p>

        <div className="space-y-3 text-center">
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-5 h-5 text-blue-600" />
            <a
              href="mailto:contact@sarjuinfotech.com"
              className="text-blue-600 hover:underline"
            >
              contact@sarjuinfotech.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-5 h-5 text-green-600" />
            <a
              href="tel:+919876543210"
              className="text-green-600 hover:underline"
            >
              +91 98765 43210
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="my-12">
        <h3 className="text-2xl font-bold text-center mb-8">Our Services</h3>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <Code className="w-8 h-8 text-blue-600 mb-2" />
              <CardTitle>Custom Software Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We design and build tailor-made software solutions to match your
                unique business needs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Globe className="w-8 h-8 text-green-600 mb-2" />
              <CardTitle>Web Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                From simple websites to complex platforms, we deliver fast,
                scalable, and secure web apps.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Smartphone className="w-8 h-8 text-purple-600 mb-2" />
              <CardTitle>Mobile App Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Cross-platform mobile apps that provide seamless experiences for
                your customers.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </MainLayout>
  );
}
