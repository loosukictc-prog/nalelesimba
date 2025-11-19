import { useState } from "react";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";
import { toast } from "sonner";

interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  numberOfGuests: string;
  roomType: string;
  specialRequests: string;
  paymentMethod: string;
  transferReference: string;
}

const ACCOMMODATION_PRICES: Record<string, number> = {
  "Luxury Safari Suites": 500,
  "Premium Tented Camps": 350,
  "Presidential Villa": 1200,
};

export default function Booking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    numberOfGuests: "",
    roomType: "",
    specialRequests: "",
    paymentMethod: "",
    transferReference: "",
  });

  const accommodations = [
    "Luxury Safari Suites",
    "Premium Tented Camps",
    "Presidential Villa",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateStep = (): boolean => {
    if (step === 1) {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.phone
      ) {
        toast.error("Please fill in all guest details");
        return false;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        toast.error("Please enter a valid email");
        return false;
      }
    }

    if (step === 2) {
      if (
        !formData.checkIn ||
        !formData.checkOut ||
        !formData.numberOfGuests ||
        !formData.roomType
      ) {
        toast.error("Please fill in all booking details");
        return false;
      }
      if (new Date(formData.checkIn) >= new Date(formData.checkOut)) {
        toast.error("Check-out date must be after check-in date");
        return false;
      }
    }

    if (step === 3) {
      if (!formData.paymentMethod) {
        toast.error("Please select a payment method");
        return false;
      }
    }

    if (step === 4) {
      if (!formData.transferReference) {
        toast.error("Please provide a payment/transfer reference number");
        return false;
      }
    }

    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const calculateNights = (): number => {
    if (formData.checkIn && formData.checkOut) {
      const start = new Date(formData.checkIn);
      const end = new Date(formData.checkOut);
      return Math.ceil(
        (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
      );
    }
    return 0;
  };

  const calculateTotal = (): number => {
    const price = ACCOMMODATION_PRICES[formData.roomType] || 0;
    const nights = calculateNights();
    return price * nights * parseInt(formData.numberOfGuests || "1");
  };

  const handleSubmit = async () => {
    if (!formData.transferReference) {
      toast.error("Please provide a payment reference number");
      return;
    }

    try {
      const bookingDetails = {
        guestName: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
        numberOfGuests: formData.numberOfGuests,
        roomType: formData.roomType,
        specialRequests: formData.specialRequests,
        paymentMethod: formData.paymentMethod,
        transferReference: formData.transferReference,
        totalAmount: calculateTotal(),
        nights: calculateNights(),
      };

      const message = `New Booking from Nalele Simba Camp:\n\nGuest: ${bookingDetails.guestName}\nEmail: ${bookingDetails.email}\nPhone: ${bookingDetails.phone}\n\nCheck-in: ${bookingDetails.checkIn}\nCheck-out: ${bookingDetails.checkOut}\nNights: ${bookingDetails.nights}\nGuests: ${bookingDetails.numberOfGuests}\nRoom: ${bookingDetails.roomType}\n\nPayment Method: ${bookingDetails.paymentMethod}\nReference: ${bookingDetails.transferReference}\nAmount: KES ${bookingDetails.totalAmount}\n\nSpecial Requests: ${bookingDetails.specialRequests || "None"}\n\nPlease confirm receipt.`;

      const whatsappUrl = `https://wa.me/254722131151?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, "_blank");
      toast.success("Booking submitted! WhatsApp message opened for admin.");

      setTimeout(() => {
        setStep(5);
      }, 1000);
    } catch (error) {
      toast.error("Error submitting booking. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container-safari max-w-2xl">
        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                    s < step
                      ? "bg-primary text-primary-foreground"
                      : s === step
                        ? "bg-primary text-primary-foreground ring-4 ring-primary/30"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {s < step ? <Check size={20} /> : s}
                </div>
                {s < 5 && (
                  <div
                    className={`h-1 w-20 mx-2 transition-all ${
                      s < step ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Guest</span>
            <span>Details</span>
            <span>Payment</span>
            <span>Review</span>
            <span>Confirm</span>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-card rounded-lg border border-border p-8 mb-8">
          {/* Step 1: Guest Details */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Guest Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+254 XXX XXX XXX"
                />
              </div>
            </div>
          )}

          {/* Step 2: Booking Details */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Booking Details</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Check-in Date *
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Check-out Date *
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Number of Guests *
                  </label>
                  <select
                    name="numberOfGuests"
                    value={formData.numberOfGuests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select...</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Room Type *
                  </label>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select...</option>
                    {accommodations.map((acc) => (
                      <option key={acc} value={acc}>
                        {acc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Special Requests
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Any special needs or requests?"
                  rows={4}
                />
              </div>
            </div>
          )}

          {/* Step 3: Payment Method */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
              </div>
              <div className="space-y-4">
                <label className="flex items-center p-4 border-2 border-border rounded-lg cursor-pointer hover:border-primary transition-colors"
                  style={{
                    borderColor:
                      formData.paymentMethod === "equity"
                        ? "var(--primary)"
                        : undefined,
                  }}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="equity"
                    checked={formData.paymentMethod === "equity"}
                    onChange={handleInputChange}
                    className="w-4 h-4"
                  />
                  <div className="ml-4 flex-1">
                    <div className="font-semibold">Equity Bank Transfer</div>
                    <div className="text-sm text-muted-foreground">
                      Transfer to bank account details shown in next step
                    </div>
                  </div>
                </label>

                <label className="flex items-center p-4 border-2 border-border rounded-lg cursor-pointer hover:border-primary transition-colors"
                  style={{
                    borderColor:
                      formData.paymentMethod === "paypal"
                        ? "var(--primary)"
                        : undefined,
                  }}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={formData.paymentMethod === "paypal"}
                    onChange={handleInputChange}
                    className="w-4 h-4"
                  />
                  <div className="ml-4 flex-1">
                    <div className="font-semibold">PayPal</div>
                    <div className="text-sm text-muted-foreground">
                      Secure payment via PayPal
                    </div>
                  </div>
                </label>
              </div>
            </div>
          )}

          {/* Step 4: Payment Details & Reference */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
              </div>

              {formData.paymentMethod === "equity" && (
                <div className="bg-primary/10 border border-primary rounded-lg p-6 mb-6">
                  <div className="text-sm font-semibold mb-2 text-primary">
                    Bank Transfer Details
                  </div>
                  <div className="space-y-1 text-sm">
                    <p>
                      <span className="font-medium">Bank:</span> Equity Bank
                    </p>
                    <p>
                      <span className="font-medium">Account Number:</span>{" "}
                      <span className="font-mono text-lg">
                        Admin Bank Account (to be configured)
                      </span>
                    </p>
                    <p>
                      <span className="font-medium">Amount:</span> KES{" "}
                      {calculateTotal()}
                    </p>
                  </div>
                </div>
              )}

              {formData.paymentMethod === "paypal" && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <div className="text-sm font-semibold mb-2 text-blue-900">
                    PayPal Payment
                  </div>
                  <p className="text-sm text-blue-800">
                    You will be redirected to PayPal to complete the payment of
                    KES {calculateTotal()}
                  </p>
                </div>
              )}

              <div className="bg-accent/10 border border-accent rounded-lg p-6 mb-6">
                <div className="font-semibold mb-4">Booking Summary</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Room Type:</span>
                    <span className="font-medium">{formData.roomType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Nights:</span>
                    <span className="font-medium">{calculateNights()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Guests:</span>
                    <span className="font-medium">
                      {formData.numberOfGuests}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-accent">
                    <span className="font-semibold">Total Amount:</span>
                    <span className="font-bold text-lg">
                      KES {calculateTotal()}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Payment/Transfer Reference Number *
                </label>
                <input
                  type="text"
                  name="transferReference"
                  value={formData.transferReference}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="e.g., TXN123456 or Confirmation Code"
                />
              </div>
            </div>
          )}

          {/* Step 5: Confirmation */}
          {step === 5 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={32} className="text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Booking Submitted!</h2>
              <p className="text-muted-foreground mb-8">
                Thank you for your booking! Our team will contact you shortly to
                confirm your reservation. A WhatsApp message with your booking
                details has been sent to our admin team.
              </p>
              <div className="bg-accent/10 border border-accent rounded-lg p-6 mb-8">
                <p className="text-sm mb-4">
                  <span className="font-semibold">Booking Reference:</span>
                </p>
                <p className="text-lg font-bold text-primary">
                  NSC-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>
              </div>
              <a
                href="/"
                className="btn-primary inline-block"
              >
                Back to Home
              </a>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        {step < 5 && (
          <div className="flex justify-between gap-4">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className="flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
              Back
            </button>
            <button
              onClick={step === 4 ? handleSubmit : handleNext}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all"
            >
              {step === 4 ? "Submit Booking" : "Next"}
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
