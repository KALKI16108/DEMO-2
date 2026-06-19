import { motion } from "motion/react";
import { Phone, MapPin, Clock, Star, Calendar } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Teeth whitening",
    date: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", phone: "", service: "Teeth whitening", date: "" });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto bg-zinc-900 text-white rounded-[2rem] -mt-8 relative z-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: Direct Clinic Coordinates */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase opacity-50 flex items-center gap-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-white block" />
              Location & Details
            </span>

            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8">
              Visit the <span className="font-serif italic text-zinc-300">Dental Clinic</span>
            </h2>

            <div className="space-y-8 mt-12">
              {/* Google Rating Details */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <div className="font-semibold text-lg flex items-center gap-2">
                    5.0 <span className="text-yellow-400">★★★★★</span>
                  </div>
                  <p className="text-sm opacity-60">Dr. Nidhi's Dental Clinic carries a perfect 5.0 Google Rating from 99 Verified Patient Reviews.</p>
                </div>
              </div>

              {/* Consultation Hours */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-zinc-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wider opacity-90 mb-1">Clinic Consultation Hours</h4>
                  <p className="text-sm opacity-70">
                    Open Daily: <span className="text-emerald-400 font-semibold">10:00 AM - 2:00 PM</span> &amp; <span className="text-emerald-400 font-semibold">5:00 PM - 9:00 PM</span>
                  </p>
                  <p className="text-xs opacity-50 mt-1">Closed Sunday Afternoon</p>
                </div>
              </div>

              {/* Exact Goregaon West Address */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-zinc-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wider opacity-90 mb-1">Our Location</h4>
                  <p className="text-sm leading-relaxed opacity-70">
                    Ashoka Super Market, B-20, Aarey Rd, near Bata Showroom, off Swami Vivekanand Road, Piramal Nagar, Goregaon West, Mumbai, Maharashtra 400104
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Dr.+Nidhi's+Dental+Clinic+Ashoka+Super+Market+Goregaon+West+Mumbai"
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white border-b border-white/20 pb-0.5 mt-3 duration-200"
                  >
                    View on Google Maps &rarr;
                  </a>
                </div>
              </div>

              {/* Phone Actions */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-zinc-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wider opacity-90 mb-1">Direct Helpline</h4>
                  <a 
                    href="tel:08238211414" 
                    className="text-lg font-bold text-white hover:text-zinc-300 transition-colors"
                  >
                    082382 11414
                  </a>
                  <p className="text-xs opacity-50">Click to call Dr. Nidhi's desk immediately</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interaction Appointment Form */}
        <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 sm:p-12 rounded-2xl flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-medium tracking-tight mb-2">Book Your Appointment</h3>
            <p className="text-sm opacity-60 mb-8">Simply leave your contact details below, and Dr. Nidhi's office will call instantly to finalize your slot.</p>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-500/10 border border-emerald-500/30 p-8 rounded-xl text-center space-y-3"
              >
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                  ✓
                </div>
                <h4 className="font-bold text-emerald-400">Appointment Request Sent!</h4>
                <p className="text-sm opacity-80 max-w-sm mx-auto">Thank you, {formData.name || "Patient"}. Dr. Nidhi's assistant will contact you within the next hour at {formData.phone || "your number"}.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider opacity-60 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 placeholder:opacity-30 text-sm focus:outline-none focus:border-white focus:bg-white/10 duration-200"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider opacity-60 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 placeholder:opacity-30 text-sm focus:outline-none focus:border-white focus:bg-white/10 duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider opacity-60 mb-2">Desired Session Date</label>
                    <input 
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white focus:bg-white/10 duration-200 text-zinc-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider opacity-60 mb-2">Treatments Required</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white focus:bg-white/10 duration-200 text-zinc-300"
                  >
                    <option value="Teeth whitening" className="bg-zinc-900">Teeth whitening</option>
                    <option value="Dental implants" className="bg-zinc-900">Dental implants</option>
                    <option value="Veneers & crowns" className="bg-zinc-900">Veneers &amp; crowns</option>
                    <option value="Root canals" className="bg-zinc-900">Root canals</option>
                    <option value="Braces & Aligners" className="bg-zinc-900">Braces &amp; Aligners</option>
                    <option value="Laser dentistry" className="bg-zinc-900">Laser dentistry</option>
                    <option value="Cosmetic procedures" className="bg-zinc-900">Cosmetic procedures</option>
                    <option value="Emergency care" className="bg-zinc-900">Emergency care</option>
                    <option value="Check-ups" className="bg-zinc-900">General Check-up</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-white hover:bg-zinc-200 text-zinc-900 font-bold py-4 rounded-xl text-sm transition-all shadow-md duration-300 active:scale-[0.98] mt-4 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  Request Booking Slot
                </button>
              </form>
            )}
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
            <span>Powered by Dr. Nidhi's Patient Desk</span>
            <span>Goregaon West, Mumbai</span>
          </div>
        </div>
      </div>
    </section>
  );
}
