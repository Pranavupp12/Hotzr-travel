import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Wifi, Coffee, Car, Shield, Users, ChevronRight, ChevronLeft } from "lucide-react"
import { useState, useEffect } from "react";

const images = [
  "/img/hotel3.png",
  "/img/view.jpg",
  "/img/hotel_room.jpeg"
];

const Index = () => {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Booking Card */}
      <section
        className="relative flex flex-col items-center justify-end min-h-[200px] sm:min-h-[290px] md:min-h-[390px] lg:min-h-[430px]
             bg-none sm:bg-cover sm:bg-center sm:bg-no-repeat
             mt-8 sm:mt-16 mx-2 sm:mx-8 lg:mx-20 rounded-xl overflow-visible transition-all duration-1000"
        style={window.innerWidth >= 750 ? { backgroundImage: `url(${images[currentImage]})` } : {}}
      >
        {/* Optional overlay for readability */}
        <div className="absolute inset-0 bg-transparent rounded-xl z-0" />
        <div className="flex flex-1 w-full max-w-6xl mx-auto px-2 sm:px-4 items-center justify-center text-center mb-6 sm:mb-8 relative z-10" style={{ minHeight: '70px' }}>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 w-full text-white">
            Live Your <span className="text-white">Passion</span>
          </h1>
        </div>
        {/* Overlapping Card */}
        <div className="flex justify-center absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-full pointer-events-none z-10">
          <div className="w-full max-w-sm sm:max-w-2xl md:max-w-4xl px-1 sm:px-2 pointer-events-auto transition-all duration-500">
            <Card className="p-4 sm:p-6 md:p-10 shadow-lg rounded-xl transition-all duration-500">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-2 sm:gap-4 items-end">
                {/* ...same as before... */}
                <div>
                  <label className="block text-sm font-medium mb-2">Number of People</label>
                  <select className="w-full p-3 border rounded-md">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Check In</label>
                  <input type="date" className="w-full p-3 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Check Out</label>
                  <input type="date" className="w-full p-3 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Room Type</label>
                  <select className="w-full p-3 border rounded-md">
                    <option>Dorm Room</option>
                    <option>Private Room</option>
                    <option>Private Ensuite</option>
                  </select>
                </div>
                <Button size="lg" className="w-full py-3">
                  Check Availability
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="py-16 bg-background mt-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle>Safe & Secure</CardTitle>
                <CardDescription>24/7 security and lockers for your belongings</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle>Travel Community</CardTitle>
                <CardDescription>Meet fellow travelers from around the world</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardHeader>
                <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle>Prime Location</CardTitle>
                <CardDescription>Walking distance to major attractions and transport</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Shared Experiences */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shared Experiences</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from fellow travelers who made unforgettable memories at Hotzr
            </p>
          </div>

          <div className="relative">

            {/* Left Arrow Button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background rounded-full shadow-lg hover:bg-primary/10"
              onClick={() => {
                const container = document.getElementById('testimonials-scroll');
                if (container) {
                  container.scrollBy({ left: -340, behavior: 'smooth' });
                }
              }}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Scrollable Card Container */}
            <div
              id="testimonials-scroll"
              className="flex gap-5 px-3 overflow-x-auto pb-4 hide-scrollbar scroll-smooth"
            >
              {/* Card 1 */}
              <Card className="w-80 min-w-[320px] min-h-[260px] p-6 flex-shrink-0 flex flex-col justify-between items-center bg-white rounded-xl shadow-lg transition-transform duration-200 hover:-translate-y-2">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center ring-1 ring-primary/20">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-semibold text-base leading-tight text-gray-900">Sarah M.</h4>
                      <p className="text-xs text-muted-foreground">Backpacker</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 italic mb-2 line-clamp-4">
                    "Met so many incredible people. Clean dorm, perfect for socializing!"
                  </p>
                </div>
                <div className="flex text-yellow-400 text-base">★★★★★</div>
              </Card>

              {/* Card 2 */}
              <Card className="w-80 min-w-[320px] min-h-[260px] p-6 flex-shrink-0 flex flex-col justify-between items-center bg-white rounded-xl shadow-lg transition-transform duration-200 hover:-translate-y-2">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center ring-1 ring-primary/20">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-semibold text-base leading-tight text-gray-900">Marco T.</h4>
                      <p className="text-xs text-muted-foreground">Solo Traveler</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 italic mb-2 line-clamp-4">
                    "Perfect location — staff gave great tips for exploring the city."
                  </p>
                </div>
                <div className="flex text-yellow-400 text-base">★★★★★</div>
              </Card>

              {/* Card 3 */}
              <Card className="w-80 min-w-[320px] min-h-[260px] p-6 flex-shrink-0 flex flex-col justify-between items-center bg-white rounded-xl shadow-lg transition-transform duration-200 hover:-translate-y-2">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center ring-1 ring-primary/20">
                      <Coffee className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-semibold text-base leading-tight text-gray-900">Emma & Jake</h4>
                      <p className="text-xs text-muted-foreground">Couple</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 italic mb-2 line-clamp-4">
                    "Comfortable private room, great value, and welcoming atmosphere."
                  </p>
                </div>
                <div className="flex text-yellow-400 text-base">★★★★★</div>
              </Card>

              {/* Card 4 */}
              <Card className="w-80 min-w-[320px] min-h-[260px] p-6 flex-shrink-0 flex flex-col justify-between items-center bg-white rounded-xl shadow-lg transition-transform duration-200 hover:-translate-y-2">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center ring-1 ring-primary/20">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-semibold text-base leading-tight text-gray-900">Lisa K.</h4>
                      <p className="text-xs text-muted-foreground">Digital Nomad</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 italic mb-2 line-clamp-4">
                    "Felt very safe. Clean, secure, and excellent WiFi!"
                  </p>
                </div>
                <div className="flex text-yellow-400 text-base">★★★★★</div>
              </Card>
            </div>

            {/* Right Arrow Button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background rounded-full shadow-lg hover:bg-primary/10"
              onClick={() => {
                const container = document.getElementById('testimonials-scroll');
                if (container) {
                  container.scrollBy({ left: 340, behavior: 'smooth' });
                }
              }}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>




      {/* CTA Banner */}
      <section className="py-16 bg-primary text-primary-foreground mb-16 mx-4 sm:mx-8 lg:mx-20 rounded-xl">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Your Adventure?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of travelers who have made Hotzr their home away from home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Check Availability
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Hotzr</h3>
          <p className="text-muted-foreground mb-4">Premium accommodation for backpackers and travelers</p>
          <p className="text-sm text-muted-foreground">© 2024 Hotzr. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Index