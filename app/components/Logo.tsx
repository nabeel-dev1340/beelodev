export default function Logo({ size = 32, className = '' }: { size?: number; className?: string }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <linearGradient id="logoGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
            </defs>

            {/* Rounded square background */}
            <rect x="0" y="0" width="64" height="64" rx="16" fill="url(#logoGradient)" />

            {/* Left bracket < */}
            <path
                d="M26 18L14 32L26 46"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                opacity="0.95"
            />

            {/* Right bracket > */}
            <path
                d="M38 18L50 32L38 46"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                opacity="0.95"
            />

            {/* Center slash / */}
            <path
                d="M36 16L28 48"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.6"
            />
        </svg>
    );
}
