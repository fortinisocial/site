export default function Vagas() {
  return null;
}

export async function getStaticProps() {
  return {
    redirect: {
      destination:
        'https://forms.monday.com/forms/f3dd69e6eff50a180905fb8bac5a1b51?r=use1',
    },
  };
}
