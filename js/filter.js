const refs = {
  list: document.querySelector('.js-list'),
  input: document.querySelector('#filter'),
};

const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'Next.js' },
  { label: 'Mobx' },
  { label: 'Redux' },
  { label: 'React Router' },
  { label: 'GraphQl' },
  { label: 'PostgreSQL' },
  { label: 'MongoDB' },
];

const listItemsMarkup = creatListItemsMarkup(tech);
setTimeout(() => {
  refs.list.innerHTML = listItemsMarkup;
}, 500);

function creatListItemsMarkup(items) {
  return items.map(item => `<li>${item.label}</li>`).join('');
}

refs.input.addEventListener('input', _.debounce(onInputChange, 500));

function onInputChange(evt) {
  const filter = evt.target.value.toLowerCase();
  const filteredItems = tech.filter(item =>
    item.label.toLowerCase().includes(filter),
  );
  console.log(filteredItems);
  refs.list.innerHTML = creatListItemsMarkup(filteredItems);
}
