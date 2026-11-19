import Image from "next/image";

export default async function Footer() {
  "use cache";
  return (
    <footer className="mt-auto bg-zinc-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Image
              src="/petone_logo.svg"
              alt="Pet One"
              width={200}
              height={77}
              className="h-16 w-auto"
            />
            <p className="mt-4 text-white/70">
              Crafted with care. Made from High-quality, natural ingredients.
            </p>
          </div>

          <div className="md:max-w-xs md:text-right">
            <h2 className="text-xl font-bold text-pink-500">Contact Us</h2>
            <address className="mt-4 space-y-1 not-italic text-white/70">
              <p>Unit 701-B, 7th Floor Richwell Center Bldg</p>
              <p>102 Timog Ave, Diliman</p>
              <p>Quezon City, Metro Manila</p>
              <p></p>
              <p>
                <a
                  href="mailto:petoneinc@mypetone.com"
                  className="hover:text-white"
                >
                  petoneinc@mypetone.com
                </a>
              </p>
            </address>

            <ul className="mt-4 flex gap-4 md:justify-end">
              <li>
                <a
                  href="https://www.facebook.com/petonepetfood"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/petonecare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="https://www.tiktok.com/@petonecare?_r=1&_t=ZS-9BWlaXYjapI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white"
                >
                  Tiktok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-sm text-white/50">
          © {new Date().getFullYear()} Pet One. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
