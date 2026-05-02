// =============================================================
// Vercel Edge Middleware — Fascia oraria portale
// Apertura: Lun–Ven 8:00–16:00, fuso Europe/Rome (gestisce DST)
// =============================================================

export const config = {
  // Intercetta tutte le richieste TRANNE: la cartolina, le risorse statiche
  // del browser e i file di sistema Vercel
  matcher: '/((?!chiuso\\.html|favicon\\.ico|robots\\.txt|_vercel|api).*)',
};

export default function middleware(request) {
  // Estrazione giorno e ora nel fuso Europe/Rome
  // Intl.DateTimeFormat gestisce automaticamente CET/CEST (ora legale)
  const now = new Date();
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Rome',
    weekday: 'short',
    hour: '2-digit',
    hour12: false,
  }).formatToParts(now);

  const weekday = parts.find(p => p.type === 'weekday').value; // 'Mon'..'Sun'
  const hour = parseInt(parts.find(p => p.type === 'hour').value, 10);

  // Regole apertura
  const giorniScuola = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const isGiornoScuola = giorniScuola.includes(weekday);
  const isOraScuola = hour >= 8 && hour < 16;
  const aperto = isGiornoScuola && isOraScuola;

  // Se il portale è aperto, lascia passare la richiesta normalmente
  if (aperto) return;

  // Altrimenti: redirect 307 alla cartolina con cache disabilitata
  // (no-store impedisce al browser di restare bloccato sulla cartolina
  // dopo le 8:00 del mattino successivo)
  const url = new URL('/chiuso.html', request.url);
  return new Response(null, {
    status: 307,
    headers: {
      Location: url.toString(),
      'Cache-Control': 'no-store, no-cache, must-revalidate',
    },
  });
}
