import AraCulturaSection from '@/components/aracCulturaSection';

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <AraCulturaSection />
        </>
    );
}
