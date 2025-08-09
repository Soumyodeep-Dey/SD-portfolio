// Support.jsx – Upgraded to match Blogs theme & palette
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHeart, FaGithub, FaLinkedin, FaTwitter, FaCheck, FaShieldAlt
} from 'react-icons/fa';
import { SiBuymeacoffee, SiGooglepay } from 'react-icons/si';
import { MdVerified, MdClose, MdInfo } from 'react-icons/md';
import { HiSparkles, HiLightningBolt } from 'react-icons/hi';

// Toast Component
const Toast = ({ message, type, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 50, scale: 0.9 }}
    className={`fixed bottom-6 right-6 z-50 p-4 rounded-xl shadow-lg border backdrop-blur-md
      ${type === 'success'
        ? 'bg-light-100/90 dark:bg-dark-100/90 border-light-300 dark:border-dark-300 text-dark-900 dark:text-light-50'
        : 'bg-light-200/90 dark:bg-dark-200/90 border-light-300 dark:border-dark-300 text-dark-800 dark:text-light-300'}`}
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

// QR Modal
const QRModal = ({ isOpen, onClose, title, qrImage, description }) => (
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
          <div className="bg-light-50 dark:bg-dark-100 backdrop-blur-md rounded-2xl shadow-lg 
                         border border-light-300 dark:border-dark-300 p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-dark-900 dark:text-light-50">{title}</h3>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-light-200 dark:hover:bg-dark-200 transition-colors"
              >
                <MdClose className="text-xl" />
              </button>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 mb-4 rounded-2xl border-2 border-light-300 dark:border-dark-300 
                             bg-light-50 dark:bg-dark-200 p-4 shadow-inner">
                <img
                  src={qrImage}
                  alt={`${title} QR Code`}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <p className="text-center text-dark-700 dark:text-light-300 text-sm mb-4">
                {description}
              </p>
              <div className="flex items-center space-x-2 text-dark-600 dark:text-light-400 text-sm">
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

// Payment Card
const PaymentCard = ({
  icon,
  title,
  description,
  buttonText,
  buttonAction,
  hasQR = false,
  qrImage,
  qrDescription,
  delay = 0
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);

  const handleAction = async () => {
    if (hasQR) {
      setShowQRModal(true);
    } else {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 800));
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
        className="group relative rounded-2xl bg-light-100 dark:bg-dark-100 backdrop-blur-md 
                   shadow-sm border border-light-300 dark:border-dark-300 p-8 
                   hover:shadow-lg hover:border-dark-400 dark:hover:border-light-400 transition-all duration-500"
      >
        {/* Hover overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-light-200/10 to-light-300/10 dark:from-dark-200/10 dark:to-dark-300/10 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="mb-4 text-5xl">{icon}</div>

          <h3 className="text-xl font-bold text-dark-900 dark:text-light-50 mb-2">
            {title}
          </h3>
          <p className="text-dark-700 dark:text-light-300 text-sm mb-6 leading-relaxed">
            {description}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAction}
            disabled={isLoading}
            className="w-full py-3 px-6 rounded-lg bg-dark-900 dark:bg-light-50 text-light-50 dark:text-dark-900 font-semibold text-lg shadow-md 
                       hover:bg-dark-700 dark:hover:bg-light-200 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-light-300 border-t-light-50 dark:border-dark-300 dark:border-t-dark-50 rounded-full animate-spin" />
                <span>Loading...</span>
              </>
            ) : (
              <>
                <span>{buttonText}</span>
                {hasQR && <HiLightningBolt className="text-xl" />}
              </>
            )}
          </motion.button>

          <div className="flex items-center justify-center space-x-4 mt-4 text-xs text-dark-500 dark:text-light-400">
            <div className="flex items-center space-x-1">
              <FaShieldAlt className="text-dark-600 dark:text-light-400" />
              <span>Secure</span>
            </div>
            <div className="flex items-center space-x-1">
              <MdVerified className="text-dark-600 dark:text-light-400" />
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
      />
    </>
  );
};

export default function Support() {
  const [toast, setToast] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const config = {
    buyMeCoffeeUrl: "https://coff.ee/soumyodeepdey",
    buyMeCoffeeQrImg: "/QR/bmc_qr.png",
    gpayQrImg: "/QR/Gpay_QR.jpg"
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
    <div className="relative overflow-hidden bg-light-50 dark:bg-dark-50 min-h-screen">
      {/* Blobs */}
      <motion.div
        variants={blobVariants}
        animate="animate"
        className="absolute -top-40 -left-40 w-96 h-96 bg-light-300 dark:bg-dark-300 rounded-full filter blur-3xl opacity-20"
      />
      <motion.div
        variants={blobVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
        className="absolute -top-32 -right-32 w-80 h-80 bg-light-300 dark:bg-dark-300 rounded-full filter blur-3xl opacity-20"
      />
      <motion.div
        variants={blobVariants}
        animate="animate"
        style={{ animationDelay: '4s' }}
        className="absolute bottom-0 left-1/2 w-96 h-96 bg-light-300 dark:bg-dark-300 rounded-full filter blur-3xl opacity-20 -translate-x-1/2"
      />

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header */}
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
                       bg-gradient-to-r from-dark-900 via-dark-700 to-dark-500 dark:from-light-50 dark:via-light-300 dark:to-light-400 
                       text-light-50 dark:text-dark-900 shadow-lg mb-6 relative"
          >
            <FaHeart className="text-3xl" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-dark-900 via-dark-700 to-dark-500 dark:from-light-50 dark:via-light-300 dark:to-light-400 animate-ping opacity-20" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-dark-900 via-dark-700 to-dark-500 dark:from-light-50 dark:via-light-300 dark:to-light-400 bg-clip-text text-transparent mb-6">
            Support My Work
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-dark-900 via-dark-700 to-dark-500 dark:from-light-50 dark:via-light-300 dark:to-light-400 mx-auto mt-4 rounded-full" />

          <p className="text-xl text-dark-700 dark:text-light-300 max-w-3xl mx-auto leading-relaxed pt-4">
            Your contribution helps me build open-source projects, write in-depth tech articles,
            and share knowledge with the developer community. Every support counts!
          </p>
        </motion.div>

        {/* Payment options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <PaymentCard
            icon={<SiBuymeacoffee className="text-yellow-500" />}
            title="Buy Me a Coffee"
            description="Support through the official Buy Me a Coffee platform with secure payments and instant confirmation."
            buttonText="Visit Website"
            buttonAction={handleBuyMeCoffeeClick}
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
            delay={0.6}
          />
        </div>

        {/* Appreciation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full 
                         bg-gradient-to-r from-light-200/40 to-light-300/40 dark:from-dark-200/40 dark:to-dark-300/40
                         border border-light-300 dark:border-dark-300">
            <HiSparkles className="text-dark-900 dark:text-light-50" />
            <span className="text-dark-900 dark:text-light-50 font-medium">
              Every contribution keeps the creativity flowing!
            </span>
            <HiSparkles className="text-dark-900 dark:text-light-50" />
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-dark-900 dark:text-light-50">
            Connect with me
          </h3>
          <div className="flex justify-center space-x-6">
            {[
              { icon: FaGithub, url: "https://github.com/Soumyodeep-Dey" },
              { icon: FaLinkedin, url: "https://www.linkedin.com/in/soumyodeep-dey-s-d-2a125b1a7/" },
              { icon: FaTwitter, url: "https://twitter.com/Soumyodeep2003" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 rounded-full bg-light-100 dark:bg-dark-100 backdrop-blur-md
                           shadow-sm border border-light-300 dark:border-dark-300
                           text-2xl text-dark-900 dark:text-light-50 hover:shadow-lg hover:border-dark-400 dark:hover:border-light-400 transition-all duration-300"
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Toast */}
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
