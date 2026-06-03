import { Button } from '@immomatch/ui';
import type { Property } from '@immomatch/shared';

export default function HomePage(): JSX.Element {
  const exampleProperty: Pick<Property, 'title' | 'type' | 'price'> = {
    title: 'Appartement Paris 11e',
    type: 'apartment',
    price: 450000,
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Bienvenue sur ImmoMatch</h1>
      <p>
        {exampleProperty.title} — {exampleProperty.price.toLocaleString('fr-FR')} €
      </p>
      <Button variant="primary">Rechercher un bien</Button>
    </main>
  );
}
