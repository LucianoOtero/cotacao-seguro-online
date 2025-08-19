import fs from "node:fs/promises";

export type CsvParseOptions = {
  separator?: "," | ";" | "\t";
  hasHeader?: boolean;
  trimFields?: boolean;
};

/**
 * Heuristically detect CSV separator from first non-empty line.
 */
function detectSeparator(sample: string): "," | ";" | "\t" {
  const firstLine = sample.split(/\r?\n/).find((l) => l.trim().length > 0) || "";
  const counts = {
    ",": (firstLine.match(/,/g) || []).length,
    ";": (firstLine.match(/;/g) || []).length,
    "\t": (firstLine.match(/\t/g) || []).length,
  } as const;
  const best = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
  return (best?.[0] as "," | ";" | "\t") || ",";
}

/**
 * Parse CSV text into array of rows. Supports quoted fields with separators and newlines.
 * If hasHeader=true, returns array of objects keyed by header values; otherwise arrays of strings.
 */
export function parseCsv(
  text: string,
  options: CsvParseOptions = {}
): Array<Record<string, string>> | Array<string[]> {
  const separator = options.separator || detectSeparator(text);
  const hasHeader = options.hasHeader !== false;
  const rows: string[][] = [];

  let i = 0;
  const len = text.length;
  let field = "";
  let row: string[] = [];
  let inQuotes = false;

  function pushField() {
    row.push(options.trimFields !== false ? field.trim() : field);
    field = "";
  }

  function pushRow() {
    rows.push(row);
    row = [];
  }

  while (i < len) {
    const char = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (char === '"') {
        if (next === '"') {
          field += '"';
          i += 2;
          continue;
        } else {
          inQuotes = false;
          i += 1;
          continue;
        }
      }
      field += char;
      i += 1;
      continue;
    }

    if (char === '"') {
      inQuotes = true;
      i += 1;
      continue;
    }

    // newline
    if (char === '\n') {
      pushField();
      pushRow();
      i += 1;
      continue;
    }
    if (char === '\r' && next === '\n') {
      pushField();
      pushRow();
      i += 2;
      continue;
    }

    // separator
    if (
      (separator === "," && char === ",") ||
      (separator === ";" && char === ";") ||
      (separator === "\t" && char === "\t")
    ) {
      pushField();
      i += 1;
      continue;
    }

    field += char;
    i += 1;
  }
  // last field/row
  pushField();
  if (row.length > 0) pushRow();

  if (!hasHeader) return rows;
  const [header, ...data] = rows;
  const keys = (header || []).map((h) => h.trim());
  return data
    .filter((r) => r.some((v) => v && v.trim().length > 0))
    .map((r) => {
      const obj: Record<string, string> = {};
      for (let k = 0; k < keys.length; k += 1) {
        obj[keys[k] || `col_${k}`] = r[k] ?? "";
      }
      return obj;
    });
}

export async function readCsv(
  filePath: string,
  options: CsvParseOptions = {}
): Promise<Array<Record<string, string>>> {
  const content = await fs.readFile(filePath, "utf8").catch(() => "");
  if (!content) return [];
  const parsed = parseCsv(content, { ...options, hasHeader: true });
  return parsed as Array<Record<string, string>>;
}


