import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/shared/button";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="flex h-20 shrink-0 items-center justify-center rounded-lg bg-green-500 sm:h-32 md:h-52 lg:h-64">
        <h1 className="text-white">Welcome to Alma</h1>
      </div>
      <Link href="/dashboard">
        <Button>
          <h1>Lead Dashboard</h1>
        </Button>
      </Link>
    </main>
  );
}