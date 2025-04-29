import {
    Facebook,
    Github,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Twitter,
    ZapIcon,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background border-t text-white ">
      <div className="container mx-auto px-4 py-12 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-8 w-8 bg-purple-600 hover:bg-purple-700 rounded-md flex items-center justify-center">
            <ZapIcon className="h-5 w-5 text-white" />
            <div className="absolute inset-0 rounded-md bg-purple-600 hover:bg-purple-700blur-sm -z-10"></div>
          </div>
          <span className="font-heading font-bold text-2xl">Codizio</span>
        </Link>
            <p className="text-muted-foreground">
              Pioneering digital transformation with innovative IT solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">Github</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                {/* <Link
                  href="/services/web-development"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Web Development
                </Link> */}
                <NavLink href=""> Web Development</NavLink>
              </li>
              <li>
                <NavLink
                  href="/services/mobile-apps"
                  // className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Mobile Apps
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/services/blockchain"
                  // className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blockchain
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/services/ai-ml"
                  // className="text-muted-foreground hover:text-primary transition-colors"
                >
                  AI & Machine Learning
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/services/ui-ux-design"
                  // className="text-muted-foreground hover:text-primary transition-colors"
                >
                  UI/UX Design
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Industries We Operate In{" "}
            </h3>
            <ul className="space-y-3">
              <li>
                <NavLink
                  href="/services/web-development"
                  // className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Healthcare
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/services/mobile-apps"
                  // className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Fintech
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/services/blockchain"
                  // className="text-muted-foreground hover:text-primary transition-colors"
                >
                  E-commerce
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/services/ai-ml"
                  // className="text-muted-foreground hover:text-primary transition-colors"
                >
                  SaaS
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/services/ui-ux-design"
                  // className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Logistics
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/services/ui-ux-design"
                  // className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Real-Estate
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/services/ui-ux-design"
                  // className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Telecom
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <NavLink
                  href="/about"
                  // className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/projects"
                  // className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/contact"
                  // className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="#"
                  // className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="#"
                  // className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 ">
          <div className="border-t mt-12">
            <h3 className="font-heading font-semibold text-5xl mb-4  mt-12 text-center">
              Contact Us
            </h3>
            {/* <address className="not-italic text-muted-foreground space-y-3"> */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                {" "}
                <h3 className="text-3xl font-bold my-5">USA</h3>
                <address className="not-italic text-white space-y-3">
                  <p className="flex gap-2 items-center">
                    {" "}
                    <MapPin className="h-5 w-5" />
                    {/* 111 Town Square Place, Suite 1203, Jersey City, NJ 07310 */}
                    Market Square, 1355 Market St suite 900, San Francisco, CA 94103
                  </p>
                  <p className="pt-2">
                    <a
                      href="mailto:info@Codizio.com"
                      className=" transition-colors flex gap-2 items-center"
                    >
                      <Mail className="h-5 w-5" />
                      info@Codizio.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:+14155551234"
                      className=" transition-colors flex gap-2 items-center"
                    >
                      <Phone className="h-5 w-5" />
                      +1 (415) 555-1234
                    </a>
                  </p>
                </address>
              </div>
              <div>
              <h3 className="text-3xl font-bold my-5">India</h3>
              <address className="not-italic text-white space-y-3">
                  <p className="flex gap-2 items-center">
                    {" "}
                    <MapPin className="h-5 w-5" />
                    42, D Block, Pocket A, Sector 02, Noida, Uttar Pradesh, 201301, Delhi NCR, India
                  </p>
                  <p className="pt-2">
                    <a
                      href="mailto:info@Codizio.com"
                      className=" transition-colors flex gap-2 items-center"
                    >
                      <Mail className="h-5 w-5" />
                      info@Codizio.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:+14155551234"
                      className=" transition-colors flex gap-2 items-center"
                    >
                      <Phone className="h-5 w-5" />
                      022-6964-5920
                    </a>
                  </p>
                </address>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Codizio Technologies. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link
              href="#"
              className="text-sm text-muted-foreground  transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground  transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground  transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-gray-300 hover:text-white transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
    </Link>
  );
}
