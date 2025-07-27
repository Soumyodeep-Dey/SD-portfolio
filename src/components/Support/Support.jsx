// Support.jsx - Final Ultra-Modern Version with Advanced UI/UX
// Features: Framer Motion animations, micro-interactions, toast notifications, 
// skeleton loading, enhanced glassmorphism, accessibility, modern payment UX

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHeart, FaGithub, FaLinkedin, FaTwitter, FaCopy, FaCheck, FaShieldAlt
} from 'react-icons/fa';
import { SiBuymeacoffee, SiGooglepay } from 'react-icons/si';
import { MdSecurity, MdVerified, MdClose, MdInfo } from 'react-icons/md';
import { HiSparkles, HiLightningBolt } from 'react-icons/hi';

// Toast Notification Component
const Toast = ({ message, type, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 50, scale: 0.9 }}
    className={`fixed bottom-6 right-6 z-50 p-4 rounded-xl shadow-2xl border backdrop-blur-md
                ${type === 'success'
        ? 'bg-green-50/90 dark:bg-green-900/90 border-green-200 dark:border-green-700 text-green-800 dark:text-green-200'
        : 'bg-blue-50/90 dark:bg-blue-900/90 border-blue-200 dark:border-blue-700 text-blue-800 dark:text-blue-200'}`}
  >
    <div className="flex items-center space-x-3">
      {type === 'success' ? <FaCheck /> : <MdInfo />}
      <span className="font-medium">{message}</span>
      <button onClick={onClose} className="ml-2 hover:opacity-70">
        <MdClose />
      </button>
    </div>
  </motion.div>
);

// Enhanced QR Modal Component
const QRModal = ({ isOpen, onClose, title, qrImage, description, altText }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={onClose}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-3xl shadow-2xl 
                         border border-gray-200 dark:border-gray-700 p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{title}</h3>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <MdClose className="text-xl" />
              </button>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 mb-4 rounded-2xl border-2 border-gray-200 dark:border-gray-600 
                             bg-white dark:bg-gray-700 p-4 shadow-inner">
                <img
                  src={qrImage}
                  alt={altText}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <p className="text-center text-gray-600 dark:text-gray-400 text-sm mb-4">
                {description}
              </p>
              <div className="flex items-center space-x-2 text-green-600 dark:text-green-400 text-sm">
                <MdVerified />
                <span>Verified and secure</span>
              </div>
            </div>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

// Enhanced Payment Card Component
const PaymentCard = ({
  icon,
  title,
  description,
  buttonText,
  buttonAction,
  hasQR = false,
  qrImage,
  qrDescription,
  color = "blue",
  delay = 0
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);

  const colorClasses = {
    yellow: "from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600",
    blue: "from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700",
    green: "from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
  };

  const handleAction = async () => {
    if (hasQR) {
      setShowQRModal(true);
    } else {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 800)); // Simulate loading
      buttonAction();
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.6, ease: "easeOut" }}
        whileHover={{ y: -8, scale: 1.02 }}
        className="group relative rounded-3xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl 
                   shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-8 
                   hover:shadow-2xl hover:border-indigo-300 dark:hover:border-indigo-600 
                   transition-all duration-500"
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Sparkle effect on hover */}
        <motion.div
          className="absolute top-4 right-4 text-yellow-400 opacity-0 group-hover:opacity-100"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <HiSparkles className="text-xl" />
        </motion.div>

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Icon with pulse animation */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mb-4"
          >
            <div className="text-5xl">{icon}</div>
          </motion.div>

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
            {description}
          </p>

          {/* Enhanced button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAction}
            disabled={isLoading}
            className={`w-full py-4 px-6 rounded-2xl text-white font-semibold text-lg shadow-lg 
                       bg-gradient-to-r ${colorClasses[color]} 
                       disabled:opacity-70 disabled:cursor-not-allowed 
                       hover:shadow-xl transition-all duration-300 
                       flex items-center justify-center space-x-2`}
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Loading...</span>
              </>
            ) : (
              <>
                <span>{buttonText}</span>
                {hasQR && <HiLightningBolt className="text-xl" />}
              </>
            )}
          </motion.button>

          {/* Trust indicators */}
          <div className="flex items-center justify-center space-x-4 mt-4 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <FaShieldAlt className="text-green-500" />
              <span>Secure</span>
            </div>
            <div className="flex items-center space-x-1">
              <MdVerified className="text-blue-500" />
              <span>Verified</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* QR Modal */}
      <QRModal
        isOpen={showQRModal}
        onClose={() => setShowQRModal(false)}
        title={title}
        qrImage={qrImage}
        description={qrDescription}
        altText={`${title} QR Code`}
      />
    </>
  );
};

// Main Support Component
export default function Support() {
  const [toast, setToast] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Configuration - Replace with your actual URLs and images
  const config = {
    buyMeCoffeeUrl: "https://buymeacoffee.com/yourusername",
    buyMeCoffeeQrImg: "/path/to/your/bmac-qr.png",
    gpayQrImg: "/path/to/your/gpay-qr.png"
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleBuyMeCoffeeClick = () => {
    window.open(config.buyMeCoffeeUrl, '_blank');
    showToast('Opening Buy Me a Coffee...', 'success');
  };

  // Enhanced blob animations
  const blobVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100
                    dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 min-h-screen">

      {/* Enhanced animated background blobs */}
      <motion.div
        variants={blobVariants}
        animate="animate"
        className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-400 to-purple-600 
                   rounded-full filter blur-3xl opacity-20"
      />
      <motion.div
        variants={blobVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
        className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-600 
                   rounded-full filter blur-3xl opacity-20"
      />
      <motion.div
        variants={blobVariants}
        animate="animate"
        style={{ animationDelay: '4s' }}
        className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-600 
                   rounded-full filter blur-3xl opacity-20 -translate-x-1/2"
      />

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full 
                       bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                       text-white shadow-2xl mb-6 relative"
          >
            <FaHeart className="text-3xl" />
            {/* Pulsing ring effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                           animate-ping opacity-20" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
                       bg-clip-text text-transparent mb-6 leading-tight"
          >
            Support My Work
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Your contribution helps me build open-source projects, write in-depth tech articles,
            and share knowledge with the developer community. Every support counts! 🚀
          </motion.p>
        </motion.div>

        {/* Enhanced Payment Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <PaymentCard
            icon={<SiBuymeacoffee className="text-yellow-500" />}
            title="Buy Me a Coffee"
            description="Support through the official Buy Me a Coffee platform with secure payments and instant confirmation."
            buttonText="Visit Website"
            buttonAction={handleBuyMeCoffeeClick}
            color="yellow"
            delay={0.2}
          />

          <PaymentCard
            icon={<SiBuymeacoffee className="text-yellow-600" />}
            title="Coffee QR Code"
            description="Quick payment via Buy Me a Coffee QR code. Scan with any UPI app or BMC mobile app."
            buttonText="Show QR Code"
            hasQR={true}
            qrImage={config.buyMeCoffeeQrImg}
            qrDescription="Scan this QR code with Buy Me a Coffee app or any UPI payment app"
            color="yellow"
            delay={0.4}
          />

          <PaymentCard
            icon={<SiGooglepay className="text-blue-600" />}
            title="UPI / Google Pay"
            description="Direct UPI payment through Google Pay, PhonePe, Paytm, BHIM, or any UPI-enabled app."
            buttonText="Show UPI QR"
            hasQR={true}
            qrImage={config.gpayQrImg}
            qrDescription="Scan with Google Pay, PhonePe, Paytm, BHIM, or any UPI app for instant payment"
            color="blue"
            delay={0.6}
          />
        </div>

        {/* Enhanced appreciation message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full 
                         bg-gradient-to-r from-green-400/20 to-blue-400/20 backdrop-blur-sm
                         border border-green-200/50 dark:border-green-600/50">
            <HiSparkles className="text-green-600 dark:text-green-400" />
            <span className="text-green-800 dark:text-green-200 font-medium">
              Every contribution keeps the creativity flowing!
            </span>
            <HiSparkles className="text-green-600 dark:text-green-400" />
          </div>
        </motion.div>

        {/* Enhanced Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            Connect with me
          </h3>
          <div className="flex justify-center space-x-6">
            {[
              { icon: FaGithub, url: "https://github.com/Soumyodeep-Dey", color: "hover:text-gray-800 dark:hover:text-gray-300" },
              { icon: FaLinkedin, url: "https://www.linkedin.com/in/soumyodeep-dey-s-d-2a125b1a7/", color: "hover:text-blue-600" },
              { icon: FaTwitter, url: "https://twitter.com/Soumyodeep2003", color: "hover:text-sky-500" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm
                           shadow-lg border border-gray-200 dark:border-gray-700
                           text-2xl text-gray-600 dark:text-gray-400 ${social.color} 
                           transition-all duration-300 hover:shadow-xl`}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Toast Notifications */}
      <AnimatePresence>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}