import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="bg-[#1F2937] py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl mb-8">
            Start your free 30-day trial today. No credit card required.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="relative flex-grow max-w-md">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 bg-white text-gray-900"
              />
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
          <p className="mt-4 text-sm text-gray-300">
            By signing up, you agree to our{" "}
            <a href="#" className="underline hover:text-blue-300">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-blue-300">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
