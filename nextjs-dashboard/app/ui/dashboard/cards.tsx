import { fetchCardData } from '@/app/lib/data';
import CardClient from './cards-client';

export default async function CardWrapper() {
  const cardData = await fetchCardData();
  return <CardClient initialData={cardData} />;
}
