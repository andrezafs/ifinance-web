export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
  }).format(new Date(new Date(date).toISOString()?.replace('.000Z', '')));
}
