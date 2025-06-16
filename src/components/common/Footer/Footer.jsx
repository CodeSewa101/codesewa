import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="md:bg-shark-blue text-black py-6 px-3  shadow-custom">
        <center className="flex justify-center items-center gap-4 mb-1">
          <Link
            to="https://www.facebook.com/share/16Seyx2twP/"
            className=" text-2xl hover:text-blue-500 transition ease-in duration-200 "
            target="_blank"
            aria-label="facebook"
          >
            <FaFacebookF />
          </Link>
          <Link
            to="https://www.instagram.com/codesewa?igsh=bGc4aHN6YnI2a2Nj"
            className=" text-2xl hover:text-blue-500 transition ease-in duration-200 "
            target="_blank"
            aria-label="facebook"
          >
            <FaInstagram />
          </Link>
          <Link
            to="https://www.linkedin.com/in/code-sewa-9a572536b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className=" text-2xl hover:text-blue-500 transition ease-in duration-200 "
            target="_blank"
            aria-label="facebook"
          >
            <FaLinkedin />
          </Link>
          <Link
            to="mailto:codesewa.in@gmail.com"
            className=" text-2xl hover:text-blue-500 transition ease-in duration-200 "
            target="_blank"
            aria-label="facebook"
          >
            <SiGmail />
          </Link>
        </center>
        <center className="mt-3">
          <p className="md:text-sm text-[11px] text-regular-black font-poppins text-center text-2xl">
            © Copyright{" "}
            <span className=" text-blue-500 font-medium">CodeSewa</span>. All
            rights reserved
          </p>
        </center>
      </footer>
    </div>
  );
}

export default Footer;
