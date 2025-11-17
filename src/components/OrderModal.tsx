import React, { useState } from 'react';
import { X, Mail, Music } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: {
    name: string;
    price: string;
    videos: string;
    paymentLink: string;
  };
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, plan }) => {
  const [email, setEmail] = useState('');
  const [spotifyLink, setSpotifyLink] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const validateSpotifyLink = (link: string) => {
    return link.includes('spotify.com/track/') || link.includes('open.spotify.com/');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!email || !spotifyLink) {
      setError('Please fill in all fields');
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }

    if (!validateSpotifyLink(spotifyLink)) {
      setError('Please enter a valid Spotify track link');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send to Google Sheets
      const response = await fetch('https://script.google.com/macros/s/AKfycbzl7VKr9IvDCQQUDjvoAisk_TXiH3mcpJ20QhNX9YQ/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          spotifyLink,
          plan: plan.name,
          price: plan.price,
          videos: plan.videos,
          timestamp: new Date().toISOString(),
        }),
      });

      // Redirect to Stripe payment
      window.open(plan.paymentLink, '_blank');

      // Close modal and reset form
      setEmail('');
      setSpotifyLink('');
      onClose();
    } catch (err) {
      setError('Error submitting form. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-in fade-in zoom-in duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 font-manrope mb-2">
            {plan.name} Package
          </h3>
          <p className="text-gray-600 font-manrope">
            {plan.price} • {plan.videos}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-manrope">
              Your Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-manrope"
                required
              />
            </div>
          </div>

          {/* Spotify Link field */}
          <div>
            <label htmlFor="spotify" className="block text-sm font-medium text-gray-700 mb-2 font-manrope">
              Spotify Track Link
            </label>
            <div className="relative">
              <Music className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="url"
                id="spotify"
                value={spotifyLink}
                onChange={(e) => setSpotifyLink(e.target.value)}
                placeholder="https://open.spotify.com/track/..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-manrope"
                required
              />
            </div>
            <p className="mt-2 text-xs text-gray-500 font-manrope">
              Paste your Spotify track URL
            </p>
          </div>

          {/* Error message */}
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-sm text-red-600 font-manrope">{error}</p>
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white py-3 rounded-xl font-medium hover:shadow-lg hover:scale-[1.02] transition-all duration-300 font-manrope disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Processing...' : 'Continue to Payment'}
          </button>
        </form>

        <p className="mt-4 text-xs text-gray-500 text-center font-manrope">
          Your info will be saved before redirecting to Stripe
        </p>
      </div>
    </div>
  );
};

export default OrderModal;
