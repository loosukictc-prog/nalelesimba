import { MapPin, Leaf, Camera, Users, Heart, Mountain } from "lucide-react";

export default function About() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/20 to-transparent">
        <div className="container-safari">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to Nalele Simba Camp
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Escape, Explore, Experience — that's our promise at Nalele Simba
              Camp, a tranquil retreat nestled in Wamba Town, Samburu County,
              Kenya.
            </p>
            <a
              href="https://www.google.com/maps/search/Wamba+Samburu+Kenya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              <MapPin size={20} />
              📍 View on Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-card">
        <div className="container-safari">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/20 rounded-full border border-primary/40 mb-6">
                <span className="text-primary text-sm font-semibold">
                  OUR LOCATION
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Gateway to Northern Kenya's Wild Beauty
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We're set against the scenic backdrop of the Mathews Range, a
                land of stunning hills, open plains, and riverine valleys. The
                camp's position on the edge of Wamba places guests right at the
                gateway to Northern Kenya's wild beauty, while still close to
                the warm hospitality of the local community.
              </p>
              <div className="bg-accent/10 border border-accent rounded-lg p-6">
                <h4 className="font-bold mb-3">Location Details</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    <span>Wamba Town, Samburu County, Kenya</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mountain size={16} className="text-primary" />
                    <span>Near Mathews Range Mountains</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Leaf size={16} className="text-primary" />
                    <span>Gateway to Samburu National Reserve</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden h-96 animate-fade-in">
              <img
                src="https://images.pexels.com/photos/5280678/pexels-photo-5280678.jpeg"
                alt="Samburu Landscape"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container-safari">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full border border-primary/40 mb-6">
              <span className="text-primary text-sm font-semibold">
                OUR STORY
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Every Journey Has a Beginning
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Every journey has a beginning — ours started right here in
                Wamba, Samburu County, where the rhythm of life moves with the
                wind, the wildlife, and the warmth of the local community.
              </p>

              <p>
                Nalele Simba Camp was founded with a vision: to build a
                sanctuary that brings people closer to nature while celebrating
                the breathtaking landscapes and heritage of northern Kenya.
              </p>

              <p>
                Set against the Mathews Range, the camp began as a modest idea —
                a few tents under the acacia trees, welcoming travelers who
                wanted to experience Samburu's untouched beauty. Over time, it
                grew into a peaceful hideaway offering comfortable
                accommodation, authentic local cuisine, and guided outdoor
                adventures.
              </p>

              <div className="bg-card border border-border rounded-lg p-8 mt-8">
                <p className="text-lg font-semibold text-foreground mb-4">
                  From Vision to Reality
                </p>
                <p>
                  What started as a dream has become a beloved destination where
                  thousands of guests have discovered the magic of Samburu. Our
                  journey continues to evolve, always centered on our core
                  values: sustainability, authenticity, and connection to
                  nature.
                </p>
              </div>
            </div>

            {/* Story Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="rounded-lg overflow-hidden h-64 animate-fade-in">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fcbd2ded8a45543319791d6c94d7ed871%2F7d6e6a5190ad4af9a9858e83eb4e5b55?format=webp&width=800"
                  alt="Nalele Simba Camp scenery"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64 animate-fade-in">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fcbd2ded8a45543319791d6c94d7ed871%2Fcec4fb3f6d41465ca50495f5efeba248?format=webp&width=800"
                  alt="Nalele Simba Camp experience"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64 animate-fade-in">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fcbd2ded8a45543319791d6c94d7ed871%2F622d2449bca64216a1e788b6a67c125e?format=webp&width=800"
                  alt="Nalele Simba Camp landscape"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nature & Wildlife Section */}
      <section className="py-20 bg-background">
        <div className="container-safari">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden h-96 animate-fade-in order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/18000404/pexels-photo-18000404.jpeg"
                alt="Wildlife"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="animate-fade-in order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-primary/20 rounded-full border border-primary/40 mb-6">
                <span className="text-primary text-sm font-semibold">
                  NATURE & WILDLIFE
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Experience Samburu's Diverse Ecosystem
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Nalele Simba Camp is surrounded by the sights and sounds of
                Samburu's diverse wildlife. You'll often spot vervet monkeys
                leaping among acacia branches, or hear the calls of hornbills
                and weaver birds in the early morning.
              </p>

              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="font-bold mb-3 text-lg">
                    The Samburu Special Five
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Nearby reserves are home to Africa's most iconic species:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>Reticulated Giraffe</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>Beisa Oryx</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>Grevy's Zebra</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>Somali Ostrich</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>Gerenuk</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="font-bold mb-3">Birdwatcher's Paradise</h4>
                  <p className="text-sm text-muted-foreground">
                    Over 400 bird species have been recorded in the region, from
                    colourful sunbirds to powerful eagles soaring above the
                    mountains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences & Activities Section */}
      <section className="py-20 bg-card">
        <div className="container-safari">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full border border-primary/40 mb-6">
              <span className="text-primary text-sm font-semibold">
                EXPERIENCES & ACTIVITIES
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Adventure and Relaxation in Harmony
            </h2>
            <p className="text-lg text-muted-foreground">
              At Nalele Simba Camp, adventure and relaxation come together in
              perfect harmony. Guests can enjoy a variety of carefully curated
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {[
              {
                icon: Users,
                title: "Camping & Team Building",
                description:
                  "Sessions in the open bush with friends, family, or corporate groups",
              },
              {
                icon: Leaf,
                title: "Bush Breakfasts & Bonfires",
                description:
                  "Enjoy meals and stories under the stars in nature's amphitheater",
              },
              {
                icon: Mountain,
                title: "Guided Hikes",
                description:
                  "Panoramic views of the Mathews Range and surrounding landscapes",
              },
              {
                icon: Camera,
                title: "Bird-watching",
                description:
                  "Spot over 400 bird species in their natural habitat",
              },
              {
                icon: Camera,
                title: "Wildlife Photography",
                description:
                  "Capture the beauty of Samburu's iconic wildlife moments",
              },
              {
                icon: Heart,
                title: "Nature Connection",
                description:
                  "Reconnect with nature and experience Kenya's wilderness at its purest",
              },
            ].map((activity, idx) => {
              const Icon = activity.icon;
              return (
                <div
                  key={idx}
                  className="bg-background border border-border rounded-lg p-8 hover:shadow-lg transition-all hover:-translate-y-2"
                >
                  <Icon className="text-primary mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-3">{activity.title}</h3>
                  <p className="text-muted-foreground">
                    {activity.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-background">
        <div className="container-safari">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-primary/20 rounded-full border border-primary/40 mb-6">
                <span className="text-primary text-sm font-semibold">
                  OUR PHILOSOPHY
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Sustainable Tourism at Its Heart
              </h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                We're passionate about sustainable tourism — protecting
                wildlife, supporting the Wamba community, and preserving the
                pristine environment that makes Samburu unique.
              </p>
              <p>
                Our camp blends rustic comfort with natural surroundings,
                ensuring you feel at home while staying close to nature. Every
                decision we make is guided by our commitment to:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <Leaf className="text-primary mb-3" size={28} />
                  <h4 className="font-bold mb-2">Environmental Protection</h4>
                  <p className="text-sm">
                    Preserving Samburu's pristine landscapes for future
                    generations
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <Users className="text-primary mb-3" size={28} />
                  <h4 className="font-bold mb-2">Community Support</h4>
                  <p className="text-sm">
                    Empowering local communities and sharing tourism benefits
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <Heart className="text-primary mb-3" size={28} />
                  <h4 className="font-bold mb-2">Authentic Experiences</h4>
                  <p className="text-sm">
                    Genuine connections with nature and local culture
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container-safari">
          <div className="text-center max-w-2xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Samburu Escape Awaits
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Whether you're seeking peace, adventure, or inspiration, Nalele
              Simba Camp is your gateway to an unforgettable experience.
            </p>
            <p className="text-2xl font-bold text-primary mb-10">
              Come — Escape. Explore. Experience. Nalele Simba Camp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/booking"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold hover:shadow-lg transition-all transform hover:scale-105"
              >
                🌄 Plan Your Visit
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary/10 transition-all"
              >
                📧 Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
