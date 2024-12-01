import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#F3F4F6] text-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">ST ECommerce</h2>
            <p className="mb-4">
              Transforming workflows and boosting productivity with innovative
              digital solutions.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-blue-500">
                <Facebook />
              </Link>
              <Link to="#" className="hover:text-blue-500">
                <Twitter />
              </Link>
              <Link to="#" className="hover:text-blue-500">
                <Instagram />
              </Link>
              <Link to="#" className="hover:text-blue-500">
                <Linkedin />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#features" className="hover:text-blue-500">
                  Features
                </Link>
              </li>
              <li>
                <Link to="#pricing" className="hover:text-blue-500">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="#faq" className="hover:text-blue-500">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="mr-2" size={18} />
                <Link
                  to="mailto:info@yourdigitalproduct.com"
                  className="hover:text-blue-500"
                >
                  info@yourdigitalproduct.com
                </Link>
              </li>
              <li>123 Digital Avenue</li>
              <li>Tech City, TC 12345</li>
              <li>Phone: (555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">
              Stay updated with our latest features and releases.
            </p>
            <form className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-gray-900"
              />
              <Button>Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} ST ECommerce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
