import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <div
      style={{
        position: 'fixed', inset: 0, background: 'var(--bg-primary)',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', zIndex: 9999, gap: '1.5rem',
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        style={{
          width: 48, height: 48, border: '4px solid #FFD93D',
          borderTopColor: '#000', borderRadius: '50%',
        }}
      />
      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.125rem', color: 'var(--text-primary)' }}
      >
        CardBuilderStudio
      </motion.p>
    </div>
  );
}
