export async function authFetch(Astro: any, url: string) {
  // Leer token de cookie
  const TOKEN = Astro.cookies.get('jwt_token')?.value || '';
  console.log(`Token: ${TOKEN}`);
  

  if (!TOKEN) {
    // Si no hay token, redirige al login (puedes lanzar un error, según el uso)
    throw new Error('NO_TOKEN');
  }

  const res = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${TOKEN}`
    }
  });

  if (!res.ok) {
    if (res.status === 401) {
      // Token expirado o inválido, redirigir o manejar según el caso
      throw new Error('UNAUTHORIZED');
    }
    throw new Error('API_ERROR');
  }

  return res.json();
}
