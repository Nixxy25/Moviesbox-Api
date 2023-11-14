const Footer = () => {
  return (
    <div className="font-bold py-8 flex flex-col justify-center">
      <div className="flex justify-center">
        <img src="../../../Images/fa-brands_facebook-square.png" alt="Facebook" className="pr-10" />
        <img src="../../../Images/fa-brands_instagram.png" alt="Instagram" className="pr-10" />
        <img src="../../../Images/fa-brands_twitter.png" alt="Twitter" className="pr-10" />
        <img src="../../../Images/fa-brands_youtube.png" alt="YouTube" className="pr-10" />
      </div>

      <div className="flex justify-center mt-4">
        <p className="cursor-pointer hover:underline pr-10">Conditions of Use</p>
        <p className="cursor-pointer hover:underline pr-10">Privacy & Policy</p>
        <p className="cursor-pointer hover:underline pr-10">Press Room</p>
      </div>

      <p className="text-center mt-6">© 2023 MovieBox by Tella Oyinkansola</p>
    </div>
  );
};

export default Footer;





