const Footer = () => {
  return (
    <div>
      <footer className="p-4 rounded-t-lg shadow md:flex md:items-center md:justify-between md:p-6 bg-gray-800">
        <span className="text-sm  sm:text-center text-gray-400">
          © 2022{" "}
          <a href="https://t.me/MEV_manki" className="hover:underline">
            Pugamuga
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-400 sm:mt-0">
          <li>
            <a href="https://t.me/MEV_manki" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
