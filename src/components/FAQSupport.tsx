import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HelpCircle, MessageCircle, Search } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is YourDigitalProduct?",
    answer:
      "YourDigitalProduct is an innovative solution designed to streamline your workflow, boost productivity, and help you achieve more in less time.",
  },
  {
    question: "How do I get started with YourDigitalProduct?",
    answer:
      "Getting started is easy! Simply sign up for an account, complete the onboarding process, and you'll be ready to use YourDigitalProduct in minutes.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 30-day free trial so you can experience the full benefits of YourDigitalProduct before committing to a subscription.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We provide 24/7 customer support via email and live chat. Our dedicated support team is always ready to assist you with any questions or issues you may have.",
  },
];

export default function FAQSupportTeaser() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#1F2937] mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          {filteredFAQs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left">
                <span className="flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2 text-[#1F2937]" />
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        {filteredFAQs.length === 0 && (
          <p className="text-center text-gray-600 mt-4">
            No matching FAQs found. Please try a different search term.
          </p>
        )}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-[#1F2937] mb-4">
            Need More Help?
          </h3>
          <p className="text-gray-600 mb-6">
            Our support team is always here to assist you.
          </p>
          <Button className="bg-[#1F2937] hover:bg-[#374151]">
            <MessageCircle className="w-5 h-5 mr-2" />
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
}
