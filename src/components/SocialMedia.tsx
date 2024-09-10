import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";

export default function SocialMedia() {
  return (
    <div className="flex flex-wrap items-center m-5 gap-2 text-2xl">
      <a
        className="p-1 bg-white rounded-full text-primary"
        href="https://pt-br.facebook.com/engajamedesign"
        target="_blank"
      >
        <BiLogoFacebook className="text-3xl" />
      </a>
      <a
        className="p-1 bg-white rounded-full text-primary"
        href="https://www.instagram.com/engajamedesign/"
        target="_blank"
      >
        <BiLogoInstagram className="text-3xl" />
      </a>

      <a
        className="p-1 bg-white rounded-full text-primary"
        href="#"
        target="_blank"
      >
        <BiLogoLinkedin />
      </a>
    </div>
  );
}
