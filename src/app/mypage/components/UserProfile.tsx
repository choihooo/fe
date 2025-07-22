import Image from "next/image";
import DarkIconChevronRight from "../../../../public/icons/DarkIconChevronRight";

function UserProfile() {
  return (
    <button className="mx-2 flex justify-between w-[471px] cursor-pointer ">
      <div className="flex">
        <div>
          <Image src={"/next.svg"} width={58} height={58} alt="프로필 사진" />
        </div>
        <div className="my-[3px] ml-[18px] text-start">
          <div className="font-T04-SB text-gray-900">김수연</div>
          <div className="font-B02-R text-gray-300">suyene827@gmail.com</div>
        </div>
      </div>
      <div className="my-[14px]">
        <DarkIconChevronRight />
      </div>
    </button>
  );
}

export default UserProfile;
