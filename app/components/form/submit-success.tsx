import { DocumentTextIcon } from "@heroicons/react/24/outline";
import Button from "@/app/components/shared/button";
import { useRouter } from "next/navigation";

export default function SubmitSuccess() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <DocumentTextIcon className="size-24 mx-auto" />
        <h2 className="text-3xl font-bold tracking-tight mt-4">Thank you</h2>
        <p className="mt-4 text-lg font-bold">
          Your information was submitted to our team of immigration attorneys.
          Expect an email from hello@tryalma.ai.
        </p>
        <Button
          variant="primary"
          size="lg"
          className="mt-8"
          onClick={() => {
            router.push("/");
          }}
        >
          Go Back to Homepage
        </Button>
      </div>
    </div>
  );
}