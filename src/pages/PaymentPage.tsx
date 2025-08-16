import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import logo from "@/assets/logo.jpeg"; // Your brand logo
import axios from "axios";
import { BASE_URL } from "@/utils/config";

const STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Delhi"
];

const PaymentPage = () => {
  const [billing, setBilling] = useState({
    country: "India",
    state: "",
    city: "",
  });
  const [details, setDetails] = useState({
    name: "",
    email: "",
    whatsapp: "",
    gstin: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle form submission and API call
  const handlePay = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!details.name || !details.email || !details.whatsapp || !billing.state || !billing.city) {
      setError("Please fill in all required fields");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Prepare payload for the API
      const payload = {
        name: details.name,
        email: details.email,
        phone: details.whatsapp, // Using whatsapp field as phone
        //profession: "Customer", // Default profession for payment page
        // problem: "Payment", // Default problem type for payment page
        billingAddress: {
          country: billing.country,
          state: billing.state,
          city: billing.city
        },
        gstin: details.gstin || ""
      };

      // Send data to the leads API
      const response = await axios.post(`${BASE_URL}/api/v1/leads/add-and-send-otp`, payload);
      
      if (response.data.success) {
        // If API call is successful, proceed with Razorpay payment
        console.log("Lead data sent successfully:", response.data);
        
        // Here you can integrate Razorpay payment
        // For now, we'll just show a success message
        alert("Data submitted successfully! Proceeding to payment...");
        
        // TODO: Integrate Razorpay payment gateway here
        // You can add Razorpay integration code here
        
      } else {
        setError(response.data.message || "Failed to submit lead data");
      }
    } catch (err) {
      console.error("Error submitting lead data:", err);
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f6ff] to-[#ffeefa] flex flex-col items-center py-12">
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-20 mb-6 rounded-xl shadow-lg border-4 border-[#CBB26A]" />

      {/* Card */}
      <div className="w-full max-w-lg rounded-2xl bg-white/95 border border-cosmic-gold/40 shadow-2xl">
        {/* Title Bar */}
        <div className="bg-[#5E3A9D] rounded-t-2xl text-white text-lg font-bold px-6 py-4 text-center tracking-wide">
          Brahmavastu.g1
        </div>
        {/* Main Content */}
        <form onSubmit={handlePay} className="px-8 py-8 space-y-7">
          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Amount */}
          <div>
            <div className="font-semibold text-lg text-[#5E3A9D] mb-1">Amount</div>
            <div className="text-gray-500 text-sm mb-3">
              Please note that this payment is <span className="font-semibold text-red-600">non-refundable</span>.
            </div>
            <div className="flex justify-between text-base font-medium">
              <span>Base Price</span>
              <span>Rs. 1</span>
            </div>
            <div className="flex justify-between text-base mt-2">
              <span>GST Identification Number <span className="text-gray-400">(Optional)</span></span>
              <Input
                className="max-w-[180px] ml-2"
                value={details.gstin}
                onChange={e => setDetails(d => ({ ...d, gstin: e.target.value }))}
                placeholder="Enter GSTIN"
              />
            </div>
            <div className="flex justify-between text-base">
              <span>IGST (18%)</span>
              <span>Rs.0.18</span>
            </div>
            {/* <div className="flex justify-between text-base">
              <span>SGST9 (9%)</span>
              <span>Rs.7.55</span>
            </div> */}
            <div className="flex justify-between text-lg font-bold border-t mt-4 pt-3">
              <span>Total</span>
              <span className="text-[#F6C945]">Rs.1.18</span>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <div className="font-semibold text-[#5E3A9D] mb-2">Contact Details</div>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <Input
                placeholder="Full Name*"
                required
                value={details.name}
                onChange={e => setDetails(d => ({ ...d, name: e.target.value }))}
              />
              <Input
                placeholder="Email*"
                type="email"
                required
                value={details.email}
                onChange={e => setDetails(d => ({ ...d, email: e.target.value }))}
              />
            </div>
            <Input
              className="mb-2"
              placeholder="WhatsApp Number*"
              required
              value={details.whatsapp}
              onChange={e => setDetails(d => ({ ...d, whatsapp: e.target.value }))}
            />
          </div>

          {/* Billing Address */}
          <div>
            <div className="font-semibold text-[#5E3A9D] mb-2">Billing Address</div>
            <div className="grid grid-cols-3 gap-3">
              <Input
                value={billing.country}
                disabled
                className="bg-gray-100"
              />
              <Select value={billing.state} onValueChange={state => setBilling(b => ({ ...b, state }))}>
                <SelectTrigger className="bg-background border border-input rounded">
                  <SelectValue placeholder="Select State*" />
                </SelectTrigger>
                <SelectContent>
                  {STATES.map((state) => (
                    <SelectItem key={state} value={state}>{state}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                placeholder="City*"
                value={billing.city}
                onChange={e => setBilling(b => ({ ...b, city: e.target.value }))}
              />
            </div>
          </div>

          {/* Checkout Button */}
          <Button
            type="submit"
            className="w-full text-lg font-semibold bg-[#F6C945] text-black mt-3 hover:bg-[#e2b83b] disabled:opacity-50"
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Checkout with Razorpay"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
