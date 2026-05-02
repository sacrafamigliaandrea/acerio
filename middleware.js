// =============================================================
// Vercel Edge Middleware — Calendario portale Andrea Cerioli
// Apertura: Lun–Ven 8:00–16:00, fuso Europe/Rome (gestisce DST)
// Chiusura estiva: dal 5 giugno (incluso) al 13 settembre (incluso)
// Riapertura: 14 settembre
// =============================================================

export const config = {
  matcher: '/((?!chiuso\\.html|favicon\\.ico|robots\\.txt|_vercel|api).*)',
};

export default function middleware(request) {
  const now = new Date();
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Rome',
    weekday: 'short',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    hour12: false,
  }).formatToParts(now);

  const weekday = parts.find(p => p.type === 'weekday').value; // 'Mon'..'Sun'
  const month = parseInt(parts.find(p => p.type === 'month').value, 10);
  const day = parseInt(parts.find(p => p.type === 'day').value, 10);
  const hour = parseInt(parts.find(p => p.type === 'hour').value, 10);

  // Chiusura estiva: 5 giugno → 13 settembre (incluso)
  const isEstate =
    (month === 6 && day >= 5) ||
    month === 7 ||
    month === 8 ||
    (month === 9 && day <= 13);

  // Apertura giornaliera: Lun–Ven 8:00–16:00
  const giorniScuola = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const isGiornoScuola = giorniScuola.includes(weekday);
  const isOraScuola = hour >= 8 && hour < 16;

  const aperto = !isEstate && isGiornoScuola && isOraScuola;
  if (aperto) return;

  // Redirect 307 alla cartolina con cache disabilitata
  const url = new URL('/chiuso.html', request.url);
  return new Response(null, {
    status: 307,
    headers: {
      Location: url.toString(),
      'Cache-Control': 'no-store, no-cache, must-revalidate',
    },
  });
}
