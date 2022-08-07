function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-400 bg--600 text-gray-500 font-OpenSans">
      <small className="justify-start flex p-2" >*Note : Maksimal 100 pencarian /hari</small>
        <div className="flex link justify-center items-center md:col-span-2 p-1 lg:col-span-1 lg:col font-Ubuntu">
          <img src="" className="h-5  px-1 "></img>{" "}
          <a target="_blank" href="https://github.com/fajaragngn/wayangSearch.git">
            {" "}
            Built with React ❤️{" "}
          </a>
        </div>
    </footer>
  );
}

export default Footer;
