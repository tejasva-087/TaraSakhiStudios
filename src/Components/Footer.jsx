import {
  EnvelopeIcon,
  InstagramLogoIcon,
  MailboxIcon,
} from "@phosphor-icons/react";

function Footer() {
  return (
    <footer className="md:pt-24 pt-12">
      <h3 className="w-full text-center text-[clamp(0.8rem,8vw,8rem)] font-normal uppercase text-zinc-400 border-t pt-6">
        Tara Sakhi studios
      </h3>
      <div className="flex items-center justify-between mt-6 gap-6 lg:px-28 md:px-20 sm:px-16 px-4">
        <p className="text-zinc-400 text-sm">
          © 2025 Tara Sakhi studios | All Rights Reserved
        </p>

        <nav className="">
          <ul className="text-3xl text-zinc-400 flex items-center gap-2">
            <li className="">
              <a href="https://www.instagram.com/tsakhistudio/" target="_blank">
                <InstagramLogoIcon />
              </a>
            </li>

            <li className="">
              <a href="mailto:info@tsakhi.com">
                <EnvelopeIcon />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
