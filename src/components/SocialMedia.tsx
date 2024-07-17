import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoSpotify,
  BiLogoYoutube,
} from "react-icons/bi";

export default function SocialMedia() {
  return (
    <div className="flex flex-wrap items-center m-5 gap-2 text-2xl">
      <a
        className="p-1 bg-white rounded-full text-primary"
        href="https://www.facebook.com/mramosdecristo"
        target="_blank"
      >
        <BiLogoFacebook />
      </a>
      <a
        className="p-1 bg-white rounded-full text-primary"
        href="https://www.instagram.com/mramosdecristo/"
        target="_blank"
      >
        <BiLogoInstagram />
      </a>
      <a className="p-1 bg-white rounded-full text-primary" href="#">
        <BiLogoYoutube />
      </a>
      <a className="p-1 bg-white rounded-full text-primary" href="#">
        <BiLogoSpotify />
      </a>
    </div>
  );
}
