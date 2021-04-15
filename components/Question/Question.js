import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Question = ({ data }) => {
  data = JSON.parse(data);

  const imageLink = "/assets/profilePic.jpeg";

  return (
    <>
      <div className="px-6 py-6 bg-gray-50 shadow-md">
        {/* user details */}
        <div className="mb-4">
          <Link href={"/u/" + data.username}>
            <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
              {imageLink ? (
                <Image
                  src="/assets/profilePic.jpeg"
                  alt="Picture of the author"
                  className="rounded-full overflow-hidden"
                  width={50}
                  height={50}
                  objectFit="cover"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faUserCircle}
                  size="4x"
                  className="leading-lg opacity-75"
                />
              )}

              <div className="mx-4 my-auto">
                <p className="text-lg text-gray-900">
                  John Doe
                </p>
                <p className="text-xs text-gray-600">
                  Computer Science & Engineering
                </p>
              </div>
            </a>
          </Link>
        </div>

        {/* Question title */}
        <h1 className="text-2xl font-bold text-black  mb-2 mx-2 text-justify">
          {data.title}
        </h1>

        {/* Question body */}
        <h1 className="text-xl font-normal text-black mt-2 mb-2 mx-2 text-justify">
          {data.content}
        </h1>

        {/* line above user details */}
        {/* <hr className="mt-8 mb-1 border " /> */}

        {/* line below user details */}
        {/* <hr className="mb-8 mt-1 border " /> */}
      </div>
    </>
  );
};

export default Question;