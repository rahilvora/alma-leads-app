export default function HeroSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-20 shrink-0 items-center justify-center bg-green-500 sm:h-32 md:h-52 lg:h-64">
      {children}
    </div>
  );
}