import {NotFound as PageNotFound} from "@/components/NotFound";

export const metadata = {
  title: "Page not found – Priyanshu Chaudhary",
}

export default function NotFound() {
  return (
    <main className="h-dvh py-18 2xl:py-24">
      <PageNotFound />
    </main>
  );
}