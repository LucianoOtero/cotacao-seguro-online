// Placeholder endpoint to later import CSV/JSON and generate static pages
export async function GET() {
  return new Response(
    JSON.stringify({ ok: true, hint: "Import CSVs into local JSON and generate static routes using file-based routing." }),
    { headers: { "Content-Type": "application/json" } }
  );
}


