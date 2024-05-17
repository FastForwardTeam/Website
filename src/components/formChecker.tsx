import { useEffect, useState } from "react";

interface TableRow {
  url: string;
  status: string;
}

export const FormChecker = () => {
  const [list, setList] = useState<TableRow[]>();

  function cleanUrl(url: string): string {
    const urlMatch = url.match(/https?:\/\/[^\s]+/);
    return urlMatch ? urlMatch[0] : url;
  }

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/FastForwardTeam/FastForward/main/docs/Bypassed.md"
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


  return (
    <>
      <form className="w-full max-w-2xl flex flex-col gap-2">
        <h1 className="text-2xl text-center">Bypass Checker</h1>
        <input
          className="w-full h-10 rounded-lg bg-neutral-900 px-3 outline-none"
          type="url"
          placeholder="https://linkversite.com"
        />
        Website
      </form>
    </>
  );
};
