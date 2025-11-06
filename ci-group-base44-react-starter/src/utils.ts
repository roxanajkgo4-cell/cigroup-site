export function createPageUrl(name: string) {
  if (name === 'Accueil') return '/'
  return '/' + name
}
