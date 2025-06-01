import type { AstroGlobal } from 'astro';

type ApiErrorCode = 'NO_TOKEN' | 'UNAUTHORIZED' | 'API_ERROR';

export async function authFetch<T>(
  Astro: AstroGlobal,
  url: string,
  init: RequestInit = {}
): Promise<T | null> {
  // --- 1) Token presente ------------------------------------ //
  const token = Astro.cookies.get('jwt_token')?.value;
  if (!token) throw new Error('NO_TOKEN');

  // --- 2) Llamada ------------------------------------------- //
  const res = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(init.headers || {}),
    },
  });

  // --- 3) Éxito rápido -------------------------------------- //
  if (res.ok) {
    return res.status === 204 ? null : await res.json();
  }

  // --- 4) Error: lee cuerpo una sola vez -------------------- //
  const body = await res.json().catch(() => ({}));
  console.error(`API ${res.status} →`, body);

  // --- 5) Casos de 401 -------------------------------------- //
  if (res.status === 401) {
    throw new Error('UNAUTHORIZED');
  }

  // --- 6) Otros errores ------------------------------------- //
  throw new Error('API_ERROR');
}
