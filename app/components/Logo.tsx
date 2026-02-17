import Image from 'next/image';

export default function Logo({ size = 32, className = '' }: { size?: number; className?: string }) {
    return (
        <Image
            src="/logo.svg"
            alt="Beelodev Logo"
            width={size}
            height={size}
            className={className}
            priority
        />
    );
}
