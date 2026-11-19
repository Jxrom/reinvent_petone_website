import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-10 w-full ">
      <div className="mx-auto flex h-32 items-center px-6">
        <Link
          href="/"
          aria-label="Home"
          className="text-xl font-semibold tracking-tight"
        >
          <Image
            src="/petone_logo.svg"
            alt="Company name"
            width={200}
            height={77}
            className="h-24 w-auto"
            priority
          />
        </Link>
      </div>
    </header>
  );
}
