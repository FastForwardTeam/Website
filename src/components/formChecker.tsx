import { useEffect, useState, type FormEventHandler } from "react";

interface TableRow {
  url: string;
  status: string;
}

function getDomain(url: string): string {
  try {
      return new URL(url).hostname;
  } catch (e) {
      console.error(`Invalid URL: ${url}`);
      return '';
  }
}

export const FormChecker = () => {
  const [list, setList] = useState<TableRow[]>();
  const [url, setURL] = useState<string>("");
  const [isMV2Active, setIsMV2Active] = useState<boolean>(false);
  const [isMV3Active, setIsMV3Active] = useState<boolean>(false);

  function cleanUrl(url: string): string {
    const urlMatch = url.match(/https?:\/\/[^\s]+/);
    return urlMatch ? urlMatch[0] : url;
  }

  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/gh/FastForwardTeam/FastForward@main/docs/Bypassed.md"
    ).then((response) => {
      response.text().then((data) => {
        let rows = data.split("\n");
        rows.splice(0, 15);
        rows.pop();

        const parsedRows: TableRow[] = rows
          .map((row) => {
            const cells = row.split("|").map((cell) => cell.trim());
            return {
              url: cleanUrl(cells[1]),
              status: cells[2],
            };
          })
          .filter((row) => row.url && row.status);

        setList(parsedRows);
      });
    });


  }, []);

  useEffect(() => {

    setIsMV2Active(() => false)
    setIsMV3Active(() => false)
    
    let listFilterWithURL = list?.filter((d) => getDomain(d.url) === getDomain(url))

    if(listFilterWithURL !== undefined && listFilterWithURL?.length >= 1) {
      setIsMV2Active(true)
    } else {
      return
    }

    let listFilterWithStatus = listFilterWithURL?.filter((d) => d.status == "✅" || d.status == "✅*")

    if(listFilterWithStatus !== undefined && listFilterWithStatus?.length >= 1) {
      setIsMV3Active(true)
    }

  }, [url])

  const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    let value = e.currentTarget.url.value;
    setURL(value);
  };

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="w-full max-w-2xl flex flex-col gap-10"
      >
        <h1 className="text-2xl text-center">Bypass Checker</h1>
        <div className="flex gap-1 max-sm:flex-col max-sm:items-center max-sm:gap-4">
          <input
            className="w-full h-10 rounded-lg bg-neutral-900 px-3 outline-none"
            type="url"
            name="url"
            required
            placeholder="https://linkversite.com"
          />
          <button className="flex gap-2 items-center border px-4 py-2 rounded-lg text-nowrap hover:bg-neutral-900 transition-colors">
            Check URL
          </button>
        </div>
      </form>
      <div className="flex items-center gap-4">
        {isMV2Active && (<p><span className="text-blue-500">MV2</span> Active</p>)}
        {isMV3Active && (<p><span className="text-purple-500">MV3</span> Active</p>)}
      </div>

      <p className="text-sm text-neutral-400">
        Bypass checker not working properly? A full list of bypasses can be
        viewed{" "}
        <a
          className="text-blue-500 hover:text-blue-600"
          href="https://github.com/FastForwardTeam/FastForward/blob/manifest-v3/docs/Bypassed.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          on our Github.
        </a>
      </p>
    </>
  );
};
