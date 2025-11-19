import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Save, ChevronDown, ChevronUp } from "lucide-react";

interface AdminSettings {
  // Payment
  equityBankAccount: string;
  adminWhatsApp: string;
  paypalEmail: string;

  // Footer Contact
  contactEmail: string;
  contactPhone: string;
  location: string;

  // Location Details
  locationAddress: string;
  locationCity: string;
  locationCountry: string;
  nearestAirport: string;

  // Social Media
  facebookUrl: string;
  tiktokUrl: string;
  youtubeUrl: string;
  instagramUrl: string;

  // Images - Carousel
  carouselImage1: string;
  carouselImage2: string;
  carouselImage3: string;

  // Images - Accommodations
  luxurySuitesImage: string;
  tentedCampsImage: string;
  presidentialVillaImage: string;
}

export default function AdminSettings() {
  const [settings, setSettings] = useState<AdminSettings>({
    equityBankAccount: "",
    adminWhatsApp: "+254722131151",
    paypalEmail: "",
    contactEmail: "info@nalelesimacamp.com",
    contactPhone: "+254 XXX XXX XXX",
    location: "Samburu, Kenya",
    locationAddress: "Samburu National Reserve",
    locationCity: "Samburu",
    locationCountry: "Kenya",
    nearestAirport: "Nairobi International Airport",
    facebookUrl: "",
    tiktokUrl: "",
    youtubeUrl: "",
    instagramUrl: "",
    carouselImage1:
      "https://images.pexels.com/photos/5280678/pexels-photo-5280678.jpeg",
    carouselImage2:
      "https://images.pexels.com/photos/18611231/pexels-photo-18611231.jpeg",
    carouselImage3:
      "https://images.pexels.com/photos/18671249/pexels-photo-18671249.jpeg",
    luxurySuitesImage:
      "https://images.pexels.com/photos/9491326/pexels-photo-9491326.jpeg",
    tentedCampsImage:
      "https://images.pexels.com/photos/18611231/pexels-photo-18611231.jpeg",
    presidentialVillaImage:
      "https://images.pexels.com/photos/18671249/pexels-photo-18671249.jpeg",
  });

  const [loading, setLoading] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    payment: true,
    contact: true,
    location: false,
    social: false,
    images: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem("adminSettings");
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleSave = () => {
    if (!settings.equityBankAccount) {
      toast.error("Equity Bank account number is required");
      return;
    }

    setLoading(true);
    localStorage.setItem("adminSettings", JSON.stringify(settings));
    setTimeout(() => {
      setLoading(false);
      toast.success("Settings saved successfully!");
    }, 500);
  };

  const Section = ({
    title,
    section,
    children,
  }: {
    title: string;
    section: keyof typeof expandedSections;
    children: React.ReactNode;
  }) => (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => toggleSection(section)}
        className="w-full flex items-center justify-between p-4 bg-muted hover:bg-muted/80 transition-colors"
      >
        <h3 className="font-semibold text-lg">{title}</h3>
        {expandedSections[section] ? (
          <ChevronUp size={20} />
        ) : (
          <ChevronDown size={20} />
        )}
      </button>
      {expandedSections[section] && (
        <div className="p-6 space-y-4 bg-card">{children}</div>
      )}
    </div>
  );

  const InputField = ({
    label,
    name,
    placeholder,
    type = "text",
    helpText,
  }: {
    label: string;
    name: keyof AdminSettings;
    placeholder: string;
    type?: string;
    helpText?: string;
  }) => (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={settings[name]}
        onChange={handleInputChange}
        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder={placeholder}
      />
      {helpText && (
        <p className="text-xs text-muted-foreground mt-1">{helpText}</p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container-safari max-w-4xl">
        <div className="bg-card rounded-lg border border-border p-8">
          <h1 className="text-3xl font-bold mb-2">Admin Settings</h1>
          <p className="text-muted-foreground mb-8">
            Manage all website settings including payments, contact info,
            location, social media, and images.
          </p>

          <div className="space-y-4">
            {/* Payment Section */}
            <Section title="💳 Payment Settings" section="payment">
              <InputField
                label="Equity Bank Account Number *"
                name="equityBankAccount"
                placeholder="e.g., 1000123456"
                helpText="This account number will be displayed to customers during payment"
              />
              <InputField
                label="Admin WhatsApp Number"
                name="adminWhatsApp"
                type="tel"
                placeholder="+254 XXX XXX XXX"
                helpText="Booking notifications will be sent to this number"
              />
              <InputField
                label="PayPal Business Email"
                name="paypalEmail"
                type="email"
                placeholder="business@paypal.com"
                helpText="Used for PayPal payment integration"
              />
            </Section>

            {/* Contact Section */}
            <Section title="📞 Contact Information" section="contact">
              <InputField
                label="Contact Email"
                name="contactEmail"
                type="email"
                placeholder="info@nalelesimacamp.com"
              />
              <InputField
                label="Contact Phone"
                name="contactPhone"
                type="tel"
                placeholder="+254 XXX XXX XXX"
              />
              <InputField
                label="Location Display Name"
                name="location"
                placeholder="e.g., Samburu, Kenya"
              />
            </Section>

            {/* Location Section */}
            <Section title="📍 Location Details" section="location">
              <InputField
                label="Address"
                name="locationAddress"
                placeholder="e.g., Samburu National Reserve"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="City"
                  name="locationCity"
                  placeholder="e.g., Samburu"
                />
                <InputField
                  label="Country"
                  name="locationCountry"
                  placeholder="e.g., Kenya"
                />
              </div>
              <InputField
                label="Nearest Airport"
                name="nearestAirport"
                placeholder="e.g., Nairobi International Airport"
              />
            </Section>

            {/* Social Media Section */}
            <Section title="📱 Social Media Links" section="social">
              <InputField
                label="Facebook URL"
                name="facebookUrl"
                type="url"
                placeholder="https://facebook.com/nalelesimacamp"
              />
              <InputField
                label="TikTok URL"
                name="tiktokUrl"
                type="url"
                placeholder="https://tiktok.com/@nalelesimacamp"
              />
              <InputField
                label="YouTube URL"
                name="youtubeUrl"
                type="url"
                placeholder="https://youtube.com/@nalelesimacamp"
              />
              <InputField
                label="Instagram URL"
                name="instagramUrl"
                type="url"
                placeholder="https://instagram.com/nalelesimacamp"
              />
            </Section>

            {/* Images Section */}
            <Section title="🖼️ Image Management" section="images">
              <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-6">
                <p className="text-sm text-blue-900">
                  <strong>Tip:</strong> Paste image URLs (e.g., from Google
                  Images, Pexels, Unsplash). Images will update immediately.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-4">Carousel Images</h4>
                  <div className="space-y-4">
                    <InputField
                      label="Carousel Image 1"
                      name="carouselImage1"
                      type="url"
                      placeholder="https://..."
                    />
                    <InputField
                      label="Carousel Image 2"
                      name="carouselImage2"
                      type="url"
                      placeholder="https://..."
                    />
                    <InputField
                      label="Carousel Image 3"
                      name="carouselImage3"
                      type="url"
                      placeholder="https://..."
                    />
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold mb-4">Accommodation Images</h4>
                  <div className="space-y-4">
                    <InputField
                      label="Luxury Safari Suites Image"
                      name="luxurySuitesImage"
                      type="url"
                      placeholder="https://..."
                    />
                    <InputField
                      label="Premium Tented Camps Image"
                      name="tentedCampsImage"
                      type="url"
                      placeholder="https://..."
                    />
                    <InputField
                      label="Presidential Villa Image"
                      name="presidentialVillaImage"
                      type="url"
                      placeholder="https://..."
                    />
                  </div>
                </div>
              </div>
            </Section>
          </div>

          <button
            onClick={handleSave}
            disabled={loading}
            className="mt-8 flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all disabled:opacity-50"
          >
            <Save size={20} />
            {loading ? "Saving..." : "Save All Settings"}
          </button>
        </div>
      </div>
    </div>
  );
}
