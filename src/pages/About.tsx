import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Award, Globe, Heart } from "lucide-react"

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Hotzr, we believe that travel is about more than just visiting new places—it's about connecting with people, 
            cultures, and experiences that transform us. We've created a network of premium hostels that combine the 
            affordability backpackers need with the comfort and safety they deserve.
          </p>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <Card className="border-2 border-2 hover:border-primary transition-colors ">
              <CardHeader>
                <div className="text-3xl font-bold text-primary">50k+</div>
                <CardTitle className="text-lg">Happy Travelers</CardTitle>
              </CardHeader>
            </Card>
            <Card className="border-2 border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="text-3xl font-bold text-primary">25</div>
                <CardTitle className="text-lg">Locations</CardTitle>
              </CardHeader>
            </Card>
            <Card className="border-2 border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="text-3xl font-bold text-primary">4.8</div>
                <CardTitle className="text-lg">Average Rating</CardTitle>
              </CardHeader>
            </Card>
            <Card className="border-2 border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <CardTitle className="text-lg">Support</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section - Horizontal Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Drives Us</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our core values shape every aspect of the Hotzr experience
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Community Value */}
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 bg-gradient-to-br from-primary/10 to-secondary/10 p-8 flex items-center justify-center min-h-[250px]">
                  <div className="text-center">
                    <Users className="h-16 w-16 mx-auto mb-4 text-primary" />
                    <h3 className="text-2xl font-bold">Community</h3>
                  </div>
                </div>
                <div className="md:w-1/2 p-8 flex items-center">
                  <div>
                    <Badge variant="secondary" className="mb-4">Core Value</Badge>
                    <h3 className="text-2xl font-bold mb-4">Building Connections</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      We foster a welcoming environment where travelers from all backgrounds can connect, 
                      share stories, and create lasting friendships. Our common areas are designed to bring people together.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Safety Value */}
            <Card className="overflow-hidden">
              <div className="md:flex md:flex-row-reverse">
                <div className="md:w-1/2 bg-gradient-to-br from-secondary/10 to-primary/10 p-8 flex items-center justify-center min-h-[250px]">
                  <div className="text-center">
                    <Award className="h-16 w-16 mx-auto mb-4 text-primary" />
                    <h3 className="text-2xl font-bold">Safety First</h3>
                  </div>
                </div>
                <div className="md:w-1/2 p-8 flex items-center">
                  <div>
                    <Badge variant="secondary" className="mb-4">Priority</Badge>
                    <h3 className="text-2xl font-bold mb-4">Your Security Matters</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Every Hotzr location features 24/7 security, secure lockers, keycard access, and well-lit areas. 
                      We maintain the highest safety standards so you can explore with peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Sustainability Value */}
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 bg-gradient-to-br from-primary/10 to-secondary/10 p-8 flex items-center justify-center min-h-[250px]">
                  <div className="text-center">
                    <Globe className="h-16 w-16 mx-auto mb-4 text-primary" />
                    <h3 className="text-2xl font-bold">Sustainability</h3>
                  </div>
                </div>
                <div className="md:w-1/2 p-8 flex items-center">
                  <div>
                    <Badge variant="secondary" className="mb-4">Commitment</Badge>
                    <h3 className="text-2xl font-bold mb-4">Responsible Travel</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      We're committed to sustainable tourism practices, supporting local communities, 
                      and minimizing our environmental impact through eco-friendly initiatives and partnerships.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>


      {/* CTA Banner */}
      <section className="py-16 bg-primary text-primary-foreground mb-16 mx-4 sm:mx-8 lg:mx-20 rounded-xl">
        <div className="max-w-4xl mx-auto text-center px-4">
          <Heart className="h-12 w-12 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Hotzr Family</h2>
          <p className="text-lg mb-8 opacity-90">
            Become part of our global community of travelers and create memories that last a lifetime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Book Your Stay
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted border-t py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Hotzr</h3>
          <p className="text-muted-foreground mb-4">Premium accommodation for backpackers and travelers</p>
          <p className="text-sm text-muted-foreground">© 2024 Hotzr. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default About