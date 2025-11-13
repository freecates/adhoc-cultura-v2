'use client';

import { motion } from 'framer-motion';
import { Suspense } from 'react';

export default function Animate({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
        >
            <Suspense fallback={<div style={{ width: '100vw', height: '100vh' }} />}>
                {children}
            </Suspense>
        </motion.div>
    );
}
