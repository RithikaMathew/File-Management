import Image from "next/image";
import React, { useState } from "react";
import menu from "../data/menu";
import CreateFolderModal from "./Folder/CreateFolderModal";
import UploadFileModal from "./File/UploadFileModal";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

function SideNavBar() {
  const [activeIndex, setActiveIndex] = useState(0);//initially the active index is 0 which is the home
  const router = useRouter();
  const { data: session } = useSession();
  const onMenuClick = (item, index) => {
    setActiveIndex(index);
    router.push('/')
  }
  return session && (
    <div
      className="w-[200px]
    bg-black h-screen sticky top-0
    z-10 p-5"
    >
      <div className="flex justify-center">

      </div>
      <button
        onClick={() => window.upload_file.showModal()}
        className="flex gap-2 items-center text-[13px]
        bg-purple-500 p-2 text-white rounded-md px-3
        hover:scale-105 transition-all mt-5 w-full justify-center"
      >
        Add New File
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <button
        className="flex gap-2 items-center text-[13px]
        bg-purple-600 w-full p-2 justify-center text-white rounded-md px-3
        hover:scale-105 transition-all mt-1"
        onClick={() => window.my_modal_3.showModal()}
      >
        Create New Folder
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >   {/* svg is for the plus sign */}

          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>

      <div className="mt-7">
        {menu.list.map((item, index) => (

          <h2
            key={index}
            onClick={() => onMenuClick(item, index)}
            className={`flex gap-2 items-center
            p-2 mt-3 text-white rounded-md cursor-pointer
            hover:bg-purple-700 hover:text-white
            ${activeIndex == index ? 'bg-purple-700 text-white'
                : null}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={item.logo}
              />
            </svg>
            {item.name}</h2>

        ))}
      </div>

      <dialog id="my_modal_3" className="modal">
        <CreateFolderModal />
      </dialog>
      <dialog id="upload_file" className="modal">
        <UploadFileModal
          closeModal={() => window.upload_file.close()} />
      </dialog>

    </div>
  );
}

export default SideNavBar;
