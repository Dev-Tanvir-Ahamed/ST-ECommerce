import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-[#1F2937] text-white">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Elevate Your Workflow with Our Digital Solution
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300">
              Boost productivity, streamline processes, and achieve more with
              our innovative digital product.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-[#1F2937] hover:bg-gray-100"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[#1F2937]"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-green-400 h-5 w-5" />
                <span>No credit card and debit required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-green-400 h-5 w-5" />
                <span>24/7 customer support</span>
              </div>
            </div>
          </div>
          <div className="relative h-64 sm:h-80 lg:h-96">
            <img
              src="/placeholder.svg?height=600&width=800&text=Your+Product+Demo"
              alt="Featured Image"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
