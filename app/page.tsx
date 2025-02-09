import Link from "next/link";
import Button from "@/app/components/shared/button";
import HeroSection from "@/app/components/shared/HeroSection";
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <HeroSection>
        <h1 className="text-white">Welcome to Alma</h1>
      </HeroSection>
      <Link href="/dashboard">
        <Button>
          <h1>Lead Dashboard</h1>
        </Button>
      </Link>
    </main>
  );
}