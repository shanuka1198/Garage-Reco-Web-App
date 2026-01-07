import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Facebook,
  Twitter,
  Instagram,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

/**
 * Contact Page Component
 * Contact form, map, and business information
 */
export function Contact() {
  const [activeTab, setActiveTab] = useState<"message" | "appointment">(
    "message"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [appointmentData, setAppointmentData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [appointmentErrors, setAppointmentErrors] = useState<
    Record<string, string>
  >({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sendError, setSendError] = useState("");

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("37glKUSrBc4hJRqkQ");
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleAppointmentChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setAppointmentData((prev) => ({ ...prev, [name]: value }));
    if (appointmentErrors[name]) {
      setAppointmentErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateAppointment = () => {
    const newErrors: Record<string, string> = {};

    if (!appointmentData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!appointmentData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(appointmentData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!appointmentData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!appointmentData.service.trim()) {
      newErrors.service = "Service selection is required";
    }

    if (!appointmentData.date.trim()) {
      newErrors.date = "Date is required";
    }

    if (!appointmentData.time.trim()) {
      newErrors.time = "Time is required";
    }

    setAppointmentErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSendError("");

    if (validateForm()) {
      setIsLoading(true);
      try {
        await emailjs.send("service_66b9bjf", "template_64xkfs8", {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: "shanukaimantha98@gmail.com",
        });

        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } catch (error) {
        setSendError(
          "Failed to send message. Please try again or contact us directly."
        );
        console.error("Email send error:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleAppointmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSendError("");

    if (validateAppointment()) {
      setIsLoading(true);
      try {
        await emailjs.send("service_66b9bjf", "template_64xkfs8", {
          from_name: appointmentData.name,
          from_email: appointmentData.email,
          phone: appointmentData.phone,
          message: `Appointment Request\n\nService: ${appointmentData.service}\nDate: ${appointmentData.date}\nTime: ${appointmentData.time}`,
          to_email: "shanukaimantha98@gmail.com",
        });

        setIsSubmitted(true);
        setAppointmentData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          time: "",
        });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } catch (error) {
        setSendError(
          "Failed to book appointment. Please try again or contact us directly."
        );
        console.error("Email send error:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl text-white mb-4">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out to us and we'll
            respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 md:p-8 rounded-2xl"
          >
            {/* Tabs */}
            <div className="flex gap-4 mb-6 border-b border-white/10">
              <button
                onClick={() => setActiveTab("message")}
                className={`pb-3 px-2 text-sm font-medium transition-colors ${
                  activeTab === "message"
                    ? "text-primary border-b-2 border-primary -mb-[14px]"
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                Contact Us
              </button>
              <button
                onClick={() => setActiveTab("appointment")}
                className={`pb-3 px-2 text-sm font-medium transition-colors ${
                  activeTab === "appointment"
                    ? "text-primary border-b-2 border-primary -mb-[14px]"
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                Book Appointment
              </button>
            </div>

            <AnimatePresence mode="wait">
              {sendError && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-4 p-4 bg-destructive/10 border border-destructive rounded-lg flex gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-destructive text-sm">{sendError}</p>
                </motion.div>
              )}
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </motion.div>
                  <h3 className="text-xl text-white mb-2">
                    {activeTab === "message"
                      ? "Message Sent!"
                      : "Appointment Booked!"}
                  </h3>
                  <p className="text-muted-foreground">
                    {activeTab === "message"
                      ? "We'll get back to you as soon as possible."
                      : "We'll confirm your appointment shortly."}
                  </p>
                </motion.div>
              ) : activeTab === "message" ? (
                <motion.form
                  key="message-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="name" className="text-white mb-2 block">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-input-background px-4 py-3 rounded-lg border ${
                        errors.name ? "border-destructive" : "border-white/10"
                      } focus:border-primary focus:outline-none transition-colors text-white`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="text-white mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-input-background px-4 py-3 rounded-lg border ${
                        errors.email ? "border-destructive" : "border-white/10"
                      } focus:border-primary focus:outline-none transition-colors text-white`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="text-white mb-2 block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full bg-input-background px-4 py-3 rounded-lg border ${
                        errors.phone ? "border-destructive" : "border-white/10"
                      } focus:border-primary focus:outline-none transition-colors text-white`}
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="text-white mb-2 block">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full bg-input-background px-4 py-3 rounded-lg border ${
                        errors.message
                          ? "border-destructive"
                          : "border-white/10"
                      } focus:border-primary focus:outline-none transition-colors text-white resize-none`}
                      placeholder="How can we help you?"
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.form
                  key="appointment-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleAppointmentSubmit}
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="apt-name" className="text-white mb-2 block">
                      Name
                    </label>
                    <input
                      type="text"
                      id="apt-name"
                      name="name"
                      value={appointmentData.name}
                      onChange={handleAppointmentChange}
                      className={`w-full bg-input-background px-4 py-3 rounded-lg border ${
                        appointmentErrors.name
                          ? "border-destructive"
                          : "border-white/10"
                      } focus:border-primary focus:outline-none transition-colors text-white`}
                      placeholder="Your name"
                    />
                    {appointmentErrors.name && (
                      <p className="text-destructive text-sm mt-1">
                        {appointmentErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="apt-email"
                      className="text-white mb-2 block"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="apt-email"
                      name="email"
                      value={appointmentData.email}
                      onChange={handleAppointmentChange}
                      className={`w-full bg-input-background px-4 py-3 rounded-lg border ${
                        appointmentErrors.email
                          ? "border-destructive"
                          : "border-white/10"
                      } focus:border-primary focus:outline-none transition-colors text-white`}
                      placeholder="your.email@example.com"
                    />
                    {appointmentErrors.email && (
                      <p className="text-destructive text-sm mt-1">
                        {appointmentErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="apt-phone"
                      className="text-white mb-2 block"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="apt-phone"
                      name="phone"
                      value={appointmentData.phone}
                      onChange={handleAppointmentChange}
                      className={`w-full bg-input-background px-4 py-3 rounded-lg border ${
                        appointmentErrors.phone
                          ? "border-destructive"
                          : "border-white/10"
                      } focus:border-primary focus:outline-none transition-colors text-white`}
                      placeholder="(555) 123-4567"
                    />
                    {appointmentErrors.phone && (
                      <p className="text-destructive text-sm mt-1">
                        {appointmentErrors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="service" className="text-white mb-2 block">
                      Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={appointmentData.service}
                      onChange={handleAppointmentChange}
                      className={`w-full bg-input-background px-4 py-3 rounded-lg border ${
                        appointmentErrors.service
                          ? "border-destructive"
                          : "border-white/10"
                      } focus:border-primary focus:outline-none transition-colors text-white`}
                    >
                      <option value="">Select a service</option>
                      <option value="Engine Repair">Engine Repair</option>
                      <option value="Brake Service">Brake Service</option>
                      <option value="Oil Change">Oil Change</option>
                      <option value="Tire Service">Tire Service</option>
                      <option value="Transmission Service">
                        Transmission Service
                      </option>
                      <option value="General Maintenance">
                        General Maintenance
                      </option>
                    </select>
                    {appointmentErrors.service && (
                      <p className="text-destructive text-sm mt-1">
                        {appointmentErrors.service}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="date" className="text-white mb-2 block">
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={appointmentData.date}
                      onChange={handleAppointmentChange}
                      className={`w-full bg-input-background px-4 py-3 rounded-lg border ${
                        appointmentErrors.date
                          ? "border-destructive"
                          : "border-white/10"
                      } focus:border-primary focus:outline-none transition-colors text-white`}
                    />
                    {appointmentErrors.date && (
                      <p className="text-destructive text-sm mt-1">
                        {appointmentErrors.date}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="time" className="text-white mb-2 block">
                      Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={appointmentData.time}
                      onChange={handleAppointmentChange}
                      className={`w-full bg-input-background px-4 py-3 rounded-lg border ${
                        appointmentErrors.time
                          ? "border-destructive"
                          : "border-white/10"
                      } focus:border-primary focus:outline-none transition-colors text-white`}
                    />
                    {appointmentErrors.time && (
                      <p className="text-destructive text-sm mt-1">
                        {appointmentErrors.time}
                      </p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        />
                        Booking...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Book Appointment
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-white mb-2">Phone</h3>
                  <a
                    href="tel:+15551234567"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (555) 123-4567
                  </a>
                  <p className="text-muted-foreground text-sm mt-1">
                    Mon-Fri: 8AM - 6PM
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-white mb-2">Email</h3>
                  <a
                    href="mailto:info@garagereco.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@garagereco.com
                  </a>
                  <p className="text-muted-foreground text-sm mt-1">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-white mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    123 Main Street
                    <br />
                    City, State 12345
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm mt-2 inline-block"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-white mb-2">Business Hours</h3>
                  <div className="space-y-1 text-muted-foreground text-sm">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-white mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-2 rounded-2xl overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s123%20Main%20St%2C%20New%20York%2C%20NY%2010002!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl"
          />
        </motion.div>
      </div>
    </div>
  );
}
