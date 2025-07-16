import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // ✅ Initialize EmailJS once on mount
  useEffect(() => {
    emailjs.init('qc3wmhUiuPzmTCS0L'); // Replace with your actual public key
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        name: formData.name,
        phone: formData.phone,
        message: formData.message || 'No specific message provided',
        time: new Date().toLocaleString()
      };

      await emailjs.send(
        'service_3jfxmcr',   // ✅ Your EmailJS Service ID
        'template_ymo1sym',  // ✅ Your EmailJS Template ID
        templateParams
      );

      setSubmitStatus('success');
      setFormData({ name: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-amber-50 to-stone-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4 font-serif">
            Get Your Custom Quote
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Ready to transform your space with handcrafted wooden furniture? 
            Share your requirements and we'll get back to you with a personalized quote.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-stone-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-stone-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-stone-700 mb-2">
                Your Requirements (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors resize-none"
                placeholder="Tell us about your furniture requirements, preferred wood type, dimensions, etc."
              />
            </div>

            {submitStatus === 'success' && (
              <div className="flex items-center gap-2 text-green-700 bg-green-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5" />
                <span>Thank you! Your enquiry has been sent successfully. We'll contact you soon.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="flex items-center gap-2 text-red-700 bg-red-50 p-4 rounded-lg">
                <AlertCircle className="w-5 h-5" />
                <span>Sorry, there was an error sending your enquiry. Please try calling us directly.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-amber-700 hover:bg-amber-800 disabled:bg-amber-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Enquiry
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-stone-200">
            <div className="text-center">
              <p className="text-stone-600 mb-4">Prefer to call directly?</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="tel:+918086581611"
                  className="inline-flex items-center justify-center bg-stone-700 hover:bg-stone-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Call +91 8086581611
                </a>
                <a 
                  href="tel:+919744271611"
                  className="inline-flex items-center justify-center bg-stone-700 hover:bg-stone-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Call +91 9744271611
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
