const scripts = require('./scripts');

describe('#render', () => {
  it('renders no episodes', () => {
    const data = { _embedded: { 'prx:items': [] } };
    expect(scripts.render(data)).toEqual('');
  });

  it('renders episodes', () => {
    const data = { _embedded: { 'prx:items': [{ title: 'Title 1' }, { title: 'Title 2' }] } };
    expect(scripts.render(data)).toContain('Title 1');
    expect(scripts.render(data)).toContain('Title 2');
  });
});

describe('#renderItem', () => {
  it('renders titles', () => {
    expect(scripts.renderItem({ title: 'Title 1' })).toContain('Title 1');
  });

  it('handles undefined titles', () => {
    expect(scripts.renderItem({})).toContain('(Untitled)');
  });
});
