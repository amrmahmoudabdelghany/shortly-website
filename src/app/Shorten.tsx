"use client";
import { SHORTEN_PREFIX } from "@/lib/constants";
import { sampleData } from "@/lib/SampleData";
import { ShortenLink } from "@/lib/typs";
import { generateRandomKey, isValidUrl } from "@/lib/utils";

import { useEffect, useState } from "react";

const Shorten = () => {
  const [links, setLinks] = useState<ShortenLink[]>([]);
  const [link, setLink] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const storedArr = localStorage.getItem("links");

    const linkArr = storedArr ? JSON.parse(storedArr) : [];
    if (linkArr.length === 0) {
      localStorage.setItem("links", JSON.stringify(sampleData));

      setLinks(sampleData);
    } else {
      setLinks(linkArr);
    }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    // check if the link already exists

    if (!link || link === "" || !isValidUrl(link)) {
      setError("Please enter a valid link");
      return;
    }

    const existsLink = links.find((l) => l.url === link);

    if (!existsLink) {
      const newShorten: ShortenLink = {
        url: link,
        shorten: `${SHORTEN_PREFIX}${generateRandomKey()}`,
      };

      const newArr = [newShorten, ...links];

      setLinks(newArr);

      localStorage.setItem("links", JSON.stringify(newArr));
      setLink("");
    }
  };

  return (
    <section className="relative bg-gray-100">
      <div className=" max-w-4xl mx-auto p-6 space-y-6">
        <form
          onSubmit={handleSubmit}
          className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-dark-violet 
        rounded-lg md:flex-row md:space-y-0 md:space-x-3 "
        >
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            onFocus={(e) => setError("")}
            placeholder="Shorten a link here"
            className={` ${
              error !== "" ? "border-red" : ""
            } flex-1 p-3 border-2 rounded-lg text-white placeholder:text-amber-400 focus:outline-none`}
          />
          <button
            className="px-10 py-3 text-white bg-cyan rounded-lg
           hover:bg-cyan-light focus:outline-none md:py-2 text-xl"
          >
            Shorten it
          </button>
          <div className="h-2 md:h-5">
            {error !== "" && (
              <div className="absolute left-10 bottom-3 text-red text-sm italic ">
                {error}
              </div>
            )}
          </div>
        </form>

        {links.map((link, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between w-full p-6 bg-white
           rounded-lg   md:flex-row "
          >
            <p className="font-bold bg-white text-center text-very-dark-violet md:text-left">
              {link.url}
            </p>

            <div className=" flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-cyan">{link.shorten}</div>
              <button className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
                Copy
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shorten;
