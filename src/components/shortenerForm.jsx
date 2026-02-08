import { useState, useRef } from "react";

const APU_URL = "https://ulvis.net/api.php?url=";

const MAX_LINKS = 3;
const COPY_TIMEOUT = 2000;

export default function ShortenerForm() {
  const [copied, setCopied] = useState(null);
  const [isError, setIsError] = useState(false);
  const [links, setLinks] = useState([]);

  const inputRef = useRef(null);

  const normalizeUrl = (url) => {
    const trimmed = url.trim();

    return trimmed.startsWith("http://") || trimmed.startsWith("https://")
      ? url
      : "https://" + url;
  };

  const shortenLink = async (event) => {
    event.preventDefault();
    const input = inputRef.current;
    const link = input.value;

    if (!link) {
      setIsError(true);
    } else {
      const data = await fetchUrl(normalizeUrl(link));
      const newUrl = data[0].url;

      if (links.length === MAX_LINKS) {
        setLinks((prev) => prev.slice(1));
      }

      setLinks((prev) => [
        ...prev,
        {
          originalUrl: link,
          shortUrl: newUrl,
        },
      ]);
    }
  };

  const copyToClipboard = async (text, id) => {
    if (copied == id) return;

    await navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), COPY_TIMEOUT);
  };

  const updateErrorState = () => {
    const input = inputRef.current;

    if (input.value.trim().length > 0) {
      setIsError(false);
    }
  };

  const fetchUrl = async (Url) => {
    try {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://clc.is/api/links",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ domain: "clc.is", target_url: Url }),
        },
      );

      if (!response.ok) {
        throw new Error("Error: ", response.status);
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.error("Failed to fetch shortened URL: ", error);
    }
  };

  return (
    <section className="px-(--padding-x-mobile) relative z-10 bg-gray-100">
      <div className="relative bottom-15 mt-15 flex items-center justify-center flex-col gap-6">
        <div className="w-full p-6 desktop:p-10 desktop:px-12 bg-primary-purple text-white rounded-lg gap-5 flex items-center justify-center flex-col bg-[url('src/assets/bg-shorten-mobile.svg')] bg-no-repeat bg-top-right desktop:flex-row desktop:bg-[url('src/assets/bg-shorten-desktop.svg')] desktop:bg-cover">
          <input
            required
            type="text"
            ref={inputRef}
            placeholder="Shorten a link here..."
            onChange={updateErrorState}
            className={
              "focus:ring-primary-blue focus:outline-none focus:ring-2 w-full bg-white text-gray-600 p-3 rounded-lg text-left desktop:w-auto desktop:flex-1 desktop:px-5 desktop:py-3" +
              (isError ? " ring-3 ring-secondary-red" : "")
            }
          />

          {isError && (
            <p className="text-secondary-red self-start text-sm italic relative -top-1">
              Please add a link here
            </p>
          )}

          <button
            className="buttonHover bg-primary-blue text-white p-3 rounded-lg w-full font-semibold desktop:w-fit desktop:px-7 desktop:py-3 cursor-pointer"
            onClick={shortenLink}
          >
            Shorten It!
          </button>
        </div>

        <div className="w-full flex items-center justify-center flex-col gap-4">
          {links.map((link, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg w-full flex items-start justify-center flex-col gap-4"
            >
              <p className="text-black">{link.originalUrl}</p>
              <div className="bg-gray-100 w-screen h-0.5 relative right-10"></div>
              <a
                href={link.shortUrl}
                target="_blank"
                className="text-primary-blue"
              >
                {link.shortUrl}
              </a>
              <button
                onClick={(e) => {
                  copyToClipboard(
                    e.target.parentElement.querySelector("a").textContent,
                    index,
                  );
                }}
                className={
                  "w-full cursor-pointer bg-primary-blue text-center text-white p-2.5 rounded-lg font-semibold" +
                  (copied === index ? " bg-primary-purple" : "buttonHover")
                }
              >
                {copied === index ? "Copied!" : "Copy"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
