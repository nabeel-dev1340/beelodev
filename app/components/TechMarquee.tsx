export default function TechMarquee() {
    const technologies = [
        'React.js', 'Next.js', 'Node.js', 'Python', 'AI Automation',
        'WordPress', 'React Native', 'OpenAI API', 'Make.com', 'PostgreSQL',
        'MongoDB', 'TypeScript', 'Tailwind CSS', 'GraphQL'
    ];

    return (
        <div className="relative py-16 overflow-hidden border-y border-white/5">
            {/* Gradient overlay edges */}
            <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />

            <div className="flex gap-16 animate-[marquee_40s_linear_infinite] w-max">
                {/* First set */}
                {technologies.map((tech, index) => (
                    <div
                        key={`first-${index}`}
                        className="flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl whitespace-nowrap group hover:scale-110 hover:bg-white/10 transition-all duration-300"
                    >
                        <div
                            className="w-2.5 h-2.5 rounded-full"
                            style={{
                                backgroundImage: 'linear-gradient(90deg, #0ea5e9, #06b6d4)',
                            }}
                        />
                        <span className="font-mono text-base text-neutral-300 group-hover:text-white transition-colors">
                            {tech}
                        </span>
                    </div>
                ))}
                {/* Duplicate for seamless loop */}
                {technologies.map((tech, index) => (
                    <div
                        key={`second-${index}`}
                        className="flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl whitespace-nowrap group hover:scale-110 hover:bg-white/10 transition-all duration-300"
                    >
                        <div
                            className="w-2.5 h-2.5 rounded-full"
                            style={{
                                backgroundImage: 'linear-gradient(90deg, #00d4ff, #8b5cf6)',
                            }}
                        />
                        <span className="font-mono text-base text-neutral-300 group-hover:text-white transition-colors">
                            {tech}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
