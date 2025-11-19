import { useState, useEffect } from "react";
import {
  Tent,
  Utensils,
  Flame,
  Compass,
  Users,
  Mountain,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Carousel from "../components/Carousel";
import Gallery from "../components/Gallery";
import ContactForm from "../components/ContactForm";

interface AdminSettings {
  carouselImage1: string;
  carouselImage2: string;
  carouselImage3: string;
  luxurySuitesImage: string;
  tentedCampsImage: string;
  presidentialVillaImage: string;
  contactEmail: string;
  contactPhone: string;
}

export default function Index() {
  const [adminSettings, setAdminSettings] = useState<AdminSettings>({
    carouselImage1:
      "https://images.pexels.com/photos/5280678/pexels-photo-5280678.jpeg",
    carouselImage2:
      "https://cdn.builder.io/api/v1/image/assets%2Fcbd2ded8a45543319791d6c94d7ed871%2F95cb79d9dab048f78a971d0177df2a37?format=webp&width=800",
    carouselImage3:
      "https://cdn.builder.io/api/v1/image/assets%2Fcbd2ded8a45543319791d6c94d7ed871%2F3347971c81b0444fb387b80243661bcd?format=webp&width=800",
    luxurySuitesImage:
      "https://images.pexels.com/photos/9491326/pexels-photo-9491326.jpeg",
    tentedCampsImage:
      "https://images.pexels.com/photos/18611231/pexels-photo-18611231.jpeg",
    presidentialVillaImage:
      "https://images.pexels.com/photos/18671249/pexels-photo-18671249.jpeg",
    contactEmail: "info@nalelesimacamp.com",
    contactPhone: "+254 722 131151",
  });

  useEffect(() => {
    const saved = localStorage.getItem("adminSettings");
    if (saved) {
      const settings = JSON.parse(saved);
      setAdminSettings((prev) => ({ ...prev, ...settings }));
    }
  }, []);

  const carouselSlides = [
    {
      image: adminSettings.carouselImage1,
      title: "Escape",
      description: "Into the heart of Africa's wilderness",
    },
    {
      image: adminSettings.carouselImage2,
      title: "Explore",
      description: "Pristine landscapes and wildlife wonders",
    },
    {
      image: adminSettings.carouselImage3,
      title: "Experience",
      description: "Luxury comfort in untamed nature",
    },
  ];

  const activities = [
    { icon: Tent, label: "Camping", color: "from-amber-400 to-orange-500" },
    {
      icon: Users,
      label: "Team Building",
      color: "from-green-400 to-teal-500",
    },
    { icon: Flame, label: "Bonfire", color: "from-orange-400 to-red-500" },
    {
      icon: Utensils,
      label: "Bush Dinner",
      color: "from-yellow-400 to-amber-500",
    },
    { icon: Mountain, label: "Hikes", color: "from-blue-400 to-cyan-500" },
    {
      icon: Compass,
      label: "Adventure",
      color: "from-purple-400 to-pink-500",
    },
  ];

  const accommodations = [
    {
      emoji: "🏠",
      name: "Standard Cottage",
      tagline: "Your Cozy Escape in the Wild",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fcbd2ded8a45543319791d6c94d7ed871%2F3347971c81b0444fb387b80243661bcd?format=webp&width=800",
      description:
        "Discover comfort and charm in our Standard Cottages, designed for couples, solo travelers, or anyone seeking peace and privacy. Each cottage blends rustic elegance with modern essentials — comfortable bedding, warm lighting, and views of Samburu's rugged beauty. Step outside to the gentle breeze, hear the calls of birds and monkeys, and watch the sun set behind the Mathews Range. Experience serenity, comfort, and nature — all in one place.",
      bestFor: ["Couples", "Solo travelers", "Short stays"],
      features: [
        "Private ensuite",
        "Double/Queen bed",
        "Veranda with nature view",
        "Solar lighting",
      ],
    },
    {
      emoji: "⛺",
      name: "Camping Grounds",
      tagline: "Sleep Under the Stars",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fcbd2ded8a45543319791d6c94d7ed871%2F95cb79d9dab048f78a971d0177df2a37?format=webp&width=800",
      description:
        "For true adventurers, our Camping Grounds offer an authentic experience of the wild. Set up your tent beneath acacia trees, surrounded by open skies and the distant sounds of nature. Enjoy a crackling bonfire, storytelling, and stargazing in one of Kenya's most peaceful landscapes. Whether you bring your own gear or use ours, this is camping at its purest — raw, quiet, and unforgettable.",
      bestFor: ["Backpackers", "Nature lovers", "Team-building groups"],
      features: [
        "Secure camp area",
        "Fire pit",
        "Shared restrooms",
        "Access to dining area",
      ],
    },
    {
      emoji: "🌄",
      name: "Mountain View Rooms",
      tagline: "Wake Up to the Horizon",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fcbd2ded8a45543319791d6c94d7ed871%2F72410ae7034440639fc46634f7032a0f?format=webp&width=800",
      description:
        "Wake up to breathtaking views of the Mathews Mountain Range from our Mountain View Rooms. Each room offers a spacious, tranquil setting that combines local design with panoramic beauty. From your window or private balcony, watch the landscape come alive — birds gliding, light shifting across the hills, and the timeless stillness of Samburu. This is where luxury meets wilderness.",
      bestFor: ["Couples", "Photographers", "Guests seeking a peaceful escape"],
      features: [
        "King/Queen bed",
        "Private balcony",
        "Panoramic views",
        "Ensuite bathroom",
      ],
    },
  ];

  const galleryImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fcbd2ded8a45543319791d6c94d7ed871%2Ff18d2ad6e1a840c784c23baea2d54c94?format=webp&width=800",
      alt: "Bush Breakfast",
      category: "Dining",
    },
    {
      src: "https://images.pexels.com/photos/18000404/pexels-photo-18000404.jpeg",
      alt: "Wildlife",
      category: "Wildlife",
    },
    {
      src: "https://images.pexels.com/photos/5280678/pexels-photo-5280678.jpeg",
      alt: "Sunset View",
      category: "Landscape",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fcbd2ded8a45543319791d6c94d7ed871%2F95cb79d9dab048f78a971d0177df2a37?format=webp&width=800",
      alt: "Team Building",
      category: "Activities",
    },
    {
      src: "https://images.pexels.com/photos/5521696/pexels-photo-5521696.jpeg",
      alt: "Game Drive",
      category: "Activities",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fcbd2ded8a45543319791d6c94d7ed871%2F3347971c81b0444fb387b80243661bcd?format=webp&width=800",
      alt: "Suite Exterior",
      category: "Accommodation",
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Carousel slides={carouselSlides} autoPlay={true} interval={5000} />

        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="text-center max-w-3xl px-4 pointer-events-auto animate-fade-in">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-background mb-6 leading-tight">
              Escape. Explore. Experience
              <br />
              <span className="text-primary">Nalele Simba Camp</span>
            </h1>
            <p className="text-lg sm:text-xl text-background/90 mb-10">
              Luxury safari adventures in the heart of Samburu
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/booking"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold hover:shadow-lg transition-all transform hover:scale-105"
              >
                🌄 Book Your Stay
              </a>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-background text-background rounded-lg font-bold hover:bg-white/10 transition-all">
                🌿 Explore Activities
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card">
        <div className="container-safari">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo Collage */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in">
              <img
                src="https://images.pexels.com/photos/18671249/pexels-photo-18671249.jpeg"
                alt="Bush Dinner"
                className="rounded-lg h-56 object-cover col-span-1 hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://images.pexels.com/photos/18000404/pexels-photo-18000404.jpeg"
                alt="Nature"
                className="rounded-lg h-56 object-cover col-span-1 hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://images.pexels.com/photos/9491326/pexels-photo-9491326.jpeg"
                alt="Accommodation"
                className="rounded-lg h-56 object-cover col-span-2 hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text Block */}
            <div className="animate-fade-in">
              <div className="mb-4 inline-block px-4 py-2 bg-primary/20 rounded-full border border-primary/40">
                <span className="text-primary text-sm font-semibold">
                  OUR STORY
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Where Africa Meets Comfort
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Nalele Simba Camp, we bring you closer to nature in the heart
                of Samburu. Our carefully curated luxury safari experiences
                blend world-class comfort with authentic African adventures.
              </p>
              <p className="text-base text-muted-foreground mb-8">
                From intimate bush dinners under the stars to thrilling wildlife
                encounters, every moment is designed to create unforgettable
                memories. Our passionate guides and dedicated team ensure that
                your safari experience is nothing short of extraordinary.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    20+
                  </div>
                  <p className="text-muted-foreground">Years of Excellence</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    5,000+
                  </div>
                  <p className="text-muted-foreground">Guests Hosted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-20 bg-background">
        <div className="container-safari">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Activities & Experiences
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Curated adventures designed to connect you with nature and create
              lasting memories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 animate-fade-in">
            {activities.map((activity, idx) => {
              const Icon = activity.icon;
              return (
                <div
                  key={idx}
                  className={`group relative overflow-hidden rounded-lg p-8 text-white cursor-pointer bg-gradient-to-br ${activity.color} hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
                >
                  <div className="relative z-10">
                    <Icon size={40} className="mb-4" />
                    <h3 className="text-xl font-bold">{activity.label}</h3>
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accommodations Section */}
      <section id="accommodations" className="py-20 bg-card">
        <div className="container-safari">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your Sanctuary
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each accommodation offers a unique perspective on luxury safari
              living
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
            {accommodations.map((room, idx) => (
              <div
                key={idx}
                className="rounded-lg overflow-hidden border border-border hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <div className="text-3xl mb-2">{room.emoji}</div>
                    <h3 className="text-2xl font-bold mb-1">{room.name}</h3>
                    <p className="text-primary font-semibold text-sm">
                      "{room.tagline}"
                    </p>
                  </div>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {room.description}
                  </p>
                  <div className="space-y-4 mb-6 flex-1">
                    <div>
                      <p className="font-semibold text-sm mb-2">✅ Best For:</p>
                      <div className="flex flex-wrap gap-2">
                        {room.bestFor.map((item, i) => (
                          <span
                            key={i}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-2">Features:</p>
                      <div className="space-y-1">
                        {room.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <span className="text-primary">✓</span>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <a
                    href="/booking"
                    className="block w-full text-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-background">
        <div className="container-safari">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Visual Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Glimpses of life at Nalele Simba Camp — through the lens of our
              beautiful property
            </p>
          </div>

          <div className="animate-fade-in">
            <Gallery images={galleryImages} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card">
        <div className="container-safari">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Reach out and let's
              plan your perfect safari escape.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in">
            {/* Contact Info & Map */}
            <div>
              <div className="space-y-8 mb-8">
                <div className="flex gap-4">
                  <Phone className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-muted-foreground">
                      {adminSettings.contactPhone}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-muted-foreground">
                      {adminSettings.contactEmail}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      Samburu National Reserve, Kenya
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="rounded-lg overflow-hidden h-80 border border-border">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.897232625862!2d37.52450842346927!3d2.7088349999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1899b8b4b4b4b4b5%3A0xa3e6f9ccd48d035!2sSamburu%20National%20Reserve!5e0!3m2!1sen!2ske!4v1234567890123"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Samburu Location"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-background rounded-lg p-8 border border-border animate-fade-in">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Book Now Button */}
      <a
        href="/booking"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-110"
      >
        🌄 Book Now
      </a>
    </div>
  );
}
