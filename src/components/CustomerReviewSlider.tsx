import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

// Sample review data
const reviews = [
  {
    id: 1,
    name: "Alex Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    review:
      "Exceptional service! The product exceeded my expectations in every way.",
  },
  {
    id: 2,
    name: "Sam Lee",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    review:
      "Great experience overall. There's room for minor improvements, but I'm very satisfied.",
  },
  {
    id: 3,
    name: "Taylor Swift",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    review: "Absolutely love it! The attention to detail is remarkable.",
  },
  {
    id: 4,
    name: "Jordan Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 3,
    review:
      "The product is good, but delivery was delayed, which was disappointing.",
  },
  {
    id: 5,
    name: "Chris Evans",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    review:
      "Solid product. It’s functional and reliable, but there's room for some design tweaks.",
  },
  {
    id: 6,
    name: "Morgan Lee",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    review:
      "Phenomenal experience! The customer support team was extremely helpful and professional.",
  },
];

const CustomerReviewSlider = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Customer Reviews
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center p-6">
                    <Avatar className="w-16 h-16 mb-4">
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-lg mb-2">
                      {review.name}
                    </h3>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < review.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-center text-gray-600">{review.review}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CustomerReviewSlider;
