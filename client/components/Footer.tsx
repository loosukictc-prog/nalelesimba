import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { useEffect, useState } from "react";

interface FooterSettings {
  contactEmail: string;
  contactPhone: string;
  location: string;
  facebookUrl: string;
  tiktokUrl: string;
  youtubeUrl: string;
  instagramUrl: string;
}

export default function Footer() {
  const [settings, setSettings] = useState<FooterSettings>({
    contactEmail: "info@nalelesimacamp.com",
    contactPhone: "+254 XXX XXX XXX",
    location: "Samburu, Kenya",
    facebookUrl: "",
    tiktokUrl: "",
    youtubeUrl: "",
    instagramUrl: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("adminSettings");
    if (saved) {
      const adminSettings = JSON.parse(saved);
      setSettings({
        contactEmail: adminSettings.contactEmail || settings.contactEmail,
        contactPhone: adminSettings.contactPhone || settings.contactPhone,
        location: adminSettings.location || settings.location,
        facebookUrl: adminSettings.facebookUrl || "",
        tiktokUrl: adminSettings.tiktokUrl || "",
        youtubeUrl: adminSettings.youtubeUrl || "",
        instagramUrl: adminSettings.instagramUrl || "",
      });
    }
  }, []);

  return (
    <footer className="bg-foreground text-background mt-24">
      <div className="container-safari py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Nalele Simba</h3>
            <p className="text-sm opacity-80">
              Luxury safari experiences in the heart of Africa's wilderness.
              Immerse yourself in nature's grandeur.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#accommodations"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Accommodations
                </a>
              </li>
              <li>
                <a
                  href="#experiences"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Experiences
                </a>
              </li>
              <li>
                <a
                  href="/admin/settings"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Admin Panel
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Home
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>{settings.contactPhone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>{settings.contactEmail}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5" />
                <span>{settings.location}</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {settings.facebookUrl && (
                <a
                  href={settings.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              )}
              {settings.instagramUrl && (
                <a
                  href={settings.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              )}
              {settings.youtubeUrl && (
                <a
                  href={settings.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              )}
              {settings.tiktokUrl && (
                <a
                  href={settings.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                  aria-label="TikTok"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v16.66a2.4 2.4 0 0 1-2.4 2.4 2.4 2.4 0 0 1-2.4-2.4 2.4 2.4 0 0 1 2.4-2.4c.34 0 .67.05.98.14V9.58a5.8 5.8 0 0 0-.98-.08C7.45 9.5 4 13 4 17.3s3.45 7.8 7.74 7.8 7.73-3.5 7.73-7.8c0-.22 0-.44-.02-.67a4.81 4.81 0 0 0 3.12 1.15c1.38 0 2.59-.46 3.59-1.22v-3.2a7.04 7.04 0 0 1-.59.05c-1.38 0-2.6-.46-3.6-1.22z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-60">
          <p>&copy; 2025 Nalele Simba Camp. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:opacity-100 transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
