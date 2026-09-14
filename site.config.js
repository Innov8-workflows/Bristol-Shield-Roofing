// copy library: C:\Users\Jay\.claude\site-kit\copy\roofing.js
module.exports = {
  name: 'Bristol Shield Roofing',
  trade: 'roofing',

  /* 'demo' allows placeholders and a 4 MB payload.
     'client' forbids placeholders, forbids base64 video, and drops the budget to 2 MB. */
  mode: 'demo',

  /* Contractor Bold: the roofing direction. Near-black ground, hard-edged cards,
     dense rhythm. The client's own logo is a red shield with white type, which
     is exactly the register this direction was built for. */
  direction: 'contractor-bold',

  title: 'Bristol Shield Roofing | Roofers in Bristol',
  description: 'Roof repairs, re-roofing, flat roofs, chimneys and guttering across Bristol and the surrounding areas. Free quotes and tidy work from a local team.',

  /* Brand red sampled from the shield outline in logo.png: the dominant opaque
     red is rgb(192,24,32). The second colour is a slate blue-grey pulled from
     the new tiles that fill every photograph, so the accents match the work
     rather than fighting it. Neutrals stay with the direction. */
  palette: {
    brand: '#C01820', 'brand-rgb': '192,24,32',
    'brand-lt': '#E8343C',
    'brand-dp': '#96121A',
    brand2: '#3A4B60', 'brand2-rgb': '58,75,96',
    'brand2-lt': '#7A91AC',
    'brand2-dk': '#26323F',
    'on-brand2': '#EEF2F8',
  },

  /* A claim here is a statement that the client supplied evidence.
     NOTHING is declared. No insurance certificate, accreditation, guarantee or
     years-trading figure has been seen. Nothing on the site says any of them. */
  claims: {},

  /* No Facebook page URL was supplied with the folder. A web search for the
     exact name found only "Roof Shield SW Ltd", Brislington, which is a
     DIFFERENT business and is not used anywhere. */
  facebook: null,

  /* Where each fact came from, so the next session does not have to re-derive it. */
  facts: {
    TOWN:   { value: 'Bristol', source: 'the business name only. No address, page or listing seen. CONFIRM - the brick semis and the country house in the photographs could be anywhere', seen: '2026-09-14' },
    PHONE:  { value: null, source: 'not supplied', seen: '2026-09-14' },
    EMAIL:  { value: null, source: 'not supplied', seen: '2026-09-14' },
    OWNER:  { value: null, source: 'not supplied', seen: '2026-09-14' },
    AREAS:  { value: null, source: 'not supplied', seen: '2026-09-14' },
    REVIEWS:{ value: null, source: 'no Google, Facebook or Checkatrade URL supplied; carousel and score block stay placeholder', seen: '2026-09-14' },
    PHOTOS: { value: '10 job photographs and a logo. a/b pairs are after/before of the same job: a2/b2 rear extension re-tiled, a3/b3 chimney rebuilt, a4/b4 full re-roof of a detached house (2.jpeg is the same house from a second drone angle). a1 and scaffolding-1 are the same terraced job, finished and in progress.', source: 'folder batch 1', seen: '2026-09-14' },
  },

  tokens: {
    BUSINESS: 'Bristol Shield Roofing',
    BUSINESS_SHORT: 'Bristol Shield',
    TOWN: 'Bristol',
    PHONE: '[PLACEHOLDER]',
    PHONE_TEL: '[PLACEHOLDER]',
    PHONE_WA: '[PLACEHOLDER]',
  },
};
