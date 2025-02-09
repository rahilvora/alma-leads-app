import Link from "next/link";
import Button from "@/app/components/shared/button";
import HeroSection from "@/app/components/shared/HeroSection";
export default function Page() {
  return (
    <main>
      <HeroSection>
        <h1 className="text-white">Welcome to Alma</h1>
      </HeroSection>
      <div className="mt-8 flex items-center justify-center">
        <Link className="mx-auto" href="/dashboard/leads">
          <Button>
            <h1>Lead Dashboard</h1>
          </Button>
        </Link>
        <Link className="mx-auto" href="/form">
          <Button>
            <h1>Get an Assessment</h1>
          </Button>
        </Link>
      </div>
    </main>
  );
}