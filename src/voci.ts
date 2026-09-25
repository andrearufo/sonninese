import { getCollection } from 'astro:content';

// Ordine alfabetico ignorando accenti: "Ì" sta con la I, "Vàglio" con "Vaglio"
export const chiave = (s: string) => s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();

export async function voci() {
  return (await getCollection('voci')).sort((a, b) => chiave(a.data.lemma).localeCompare(chiave(b.data.lemma), 'it'));
}
