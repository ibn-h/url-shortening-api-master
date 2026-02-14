import Logo from "../assets/logo.svg?react";
import FacebookLogo from "../assets/icon-facebook.svg?react";
import TwitterLogo from "../assets/icon-twitter.svg?react";
import PinterestLogo from "../assets/icon-pinterest.svg?react";
import InstagramLogo from "../assets/icon-instagram.svg?react";

const footerSections = [
  {
    title: "Features",
    items: ["Link Shortening", "Branded Links", "Analytics"],
  },
  {
    title: "Resources",
    items: ["Blog", "Developers", "Support"],
  },
  {
    title: "Company",
    items: ["About", "Our Team", "Careers", "Contact"],
  },
];

const icons = [
  {
    name: "Facebook",
    logo: FacebookLogo,
  },
  {
    name: "Twitter",
    logo: TwitterLogo,
  },
  {
    name: "Pinterest",
    logo: PinterestLogo,
  },

  {
    name: "Instagram",
    logo: InstagramLogo,
  },
];

export default function Footer() {
  return (
    <footer className="px-(--padding-x-mobile) py-(--padding-y-mobile) bg-gray-950 text-white desktop:px-(--padding-x-desktop) desktop:py-(--padding-y-desktop)">
      <div className="flex items-center justify-center flex-col text-center gap-12 desktop:flex-row w-full desktop:justify-between desktop:items-start">
        <Logo className="footer-logo w-35 h-auto text-white fill-current flex items-center justify-center" />

        <div className="flex items-center justify-center flex-col gap-12 desktop:flex-row desktop:items-start desktop:gap-20">
          {footerSections.map((section, index) => (
            <div
              key={index}
              className="flex items-center justify-center text-center flex-col gap-6 desktop:text-left desktop:items-start desktop:justify-start"
            >
              <h4 className="font-bold">{section.title}</h4>
              <ul className="flex flex-col items-center justify-center gap-1 desktop:items-start desktop:justify-start">
                {section.items.map((item, index) => (
                  <a href="" key={index}>
                    <li className="text-gray-400 transition-colors hover:text-primary-blue duration-300 cursor-pointer">
                      {item}
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex items-center justify-center gap-3">
            {icons.map((icon, index) => (
              <a href="" key={index}>
                {
                  <icon.logo className="hover:text-primary-blue footer-icon transition-colors duration-300" />
                }
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
