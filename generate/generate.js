const colors = [
  '#F4DCD2',
  '#EDC8C6',
  '#D9E3DA',
  '#D1CFBF',
  '#5ACEF1',
  '#BC95E1',
  '#FBABDD',
  '#FBF6A2',
  '#EBD79F',
  '#67E4D2',
  '#FEF0EB',
]

const randomColor = () =>
  chroma(colors[Math.floor(Math.random() * colors.length)])
    .darken(0.2)
    .saturate(0.7)
    .hex()

const flags = {
  ad: {
    name: 'Andorra',
    image: 'https://flagcdn.com/w320/ad.jpg',
  },
  ae: {
    name: 'United Arab Emirates',
    image: 'https://flagcdn.com/w320/ae.jpg',
  },
  af: {
    name: 'Afghanistan',
    image: 'https://flagcdn.com/w320/af.jpg',
  },
  ag: {
    name: 'Antigua and Barbuda',
    image: 'https://flagcdn.com/w320/ag.jpg',
  },
  ai: {
    name: 'Anguilla',
    image: 'https://flagcdn.com/w320/ai.jpg',
  },
  al: {
    name: 'Albania',
    image: 'https://flagcdn.com/w320/al.jpg',
  },
  am: {
    name: 'Armenia',
    image: 'https://flagcdn.com/w320/am.jpg',
  },
  ao: {
    name: 'Angola',
    image: 'https://flagcdn.com/w320/ao.jpg',
  },
  aq: {
    name: 'Antarctica',
    image: 'https://flagcdn.com/w320/aq.jpg',
  },
  ar: {
    name: 'Argentina',
    image: 'https://flagcdn.com/w320/ar.jpg',
  },
  as: {
    name: 'American Samoa',
    image: 'https://flagcdn.com/w320/as.jpg',
  },
  at: {
    name: 'Austria',
    image: 'https://flagcdn.com/w320/at.jpg',
  },
  au: {
    name: 'Australia',
    image: 'https://flagcdn.com/w320/au.jpg',
  },
  aw: {
    name: 'Aruba',
    image: 'https://flagcdn.com/w320/aw.jpg',
  },
  ax: {
    name: 'Åland Islands',
    image: 'https://flagcdn.com/w320/ax.jpg',
  },
  az: {
    name: 'Azerbaijan',
    image: 'https://flagcdn.com/w320/az.jpg',
  },
  ba: {
    name: 'Bosnia and Herzegovina',
    image: 'https://flagcdn.com/w320/ba.jpg',
  },
  bb: {
    name: 'Barbados',
    image: 'https://flagcdn.com/w320/bb.jpg',
  },
  bd: {
    name: 'Bangladesh',
    image: 'https://flagcdn.com/w320/bd.jpg',
  },
  be: {
    name: 'Belgium',
    image: 'https://flagcdn.com/w320/be.jpg',
  },
  bf: {
    name: 'Burkina Faso',
    image: 'https://flagcdn.com/w320/bf.jpg',
  },
  bg: {
    name: 'Bulgaria',
    image: 'https://flagcdn.com/w320/bg.jpg',
  },
  bh: {
    name: 'Bahrain',
    image: 'https://flagcdn.com/w320/bh.jpg',
  },
  bi: {
    name: 'Burundi',
    image: 'https://flagcdn.com/w320/bi.jpg',
  },
  bj: {
    name: 'Benin',
    image: 'https://flagcdn.com/w320/bj.jpg',
  },
  bl: {
    name: 'Saint Barthélemy',
    image: 'https://flagcdn.com/w320/bl.jpg',
  },
  bm: {
    name: 'Bermuda',
    image: 'https://flagcdn.com/w320/bm.jpg',
  },
  bn: {
    name: 'Brunei',
    image: 'https://flagcdn.com/w320/bn.jpg',
  },
  bo: {
    name: 'Bolivia',
    image: 'https://flagcdn.com/w320/bo.jpg',
  },
  bq: {
    name: 'Caribbean Netherlands',
    image: 'https://flagcdn.com/w320/bq.jpg',
  },
  br: {
    name: 'Brazil',
    image: 'https://flagcdn.com/w320/br.jpg',
  },
  bs: {
    name: 'Bahamas',
    image: 'https://flagcdn.com/w320/bs.jpg',
  },
  bt: {
    name: 'Bhutan',
    image: 'https://flagcdn.com/w320/bt.jpg',
  },
  bv: {
    name: 'Bouvet Island',
    image: 'https://flagcdn.com/w320/bv.jpg',
  },
  bw: {
    name: 'Botswana',
    image: 'https://flagcdn.com/w320/bw.jpg',
  },
  by: {
    name: 'Belarus',
    image: 'https://flagcdn.com/w320/by.jpg',
  },
  bz: {
    name: 'Belize',
    image: 'https://flagcdn.com/w320/bz.jpg',
  },
  ca: {
    name: 'Canada',
    image: 'https://flagcdn.com/w320/ca.jpg',
  },
  cc: {
    name: 'Cocos (Keeling) Islands',
    image: 'https://flagcdn.com/w320/cc.jpg',
  },
  cd: {
    name: 'DR Congo',
    image: 'https://flagcdn.com/w320/cd.jpg',
  },
  cf: {
    name: 'Central African Republic',
    image: 'https://flagcdn.com/w320/cf.jpg',
  },
  cg: {
    name: 'Republic of the Congo',
    image: 'https://flagcdn.com/w320/cg.jpg',
  },
  ch: {
    name: 'Switzerland',
    image: 'https://flagcdn.com/w320/ch.jpg',
  },
  ci: {
    name: "Côte d'Ivoire (Ivory Coast)",
    image: 'https://flagcdn.com/w320/ci.jpg',
  },
  ck: {
    name: 'Cook Islands',
    image: 'https://flagcdn.com/w320/ck.jpg',
  },
  cl: {
    name: 'Chile',
    image: 'https://flagcdn.com/w320/cl.jpg',
  },
  cm: {
    name: 'Cameroon',
    image: 'https://flagcdn.com/w320/cm.jpg',
  },
  cn: {
    name: 'China',
    image: 'https://flagcdn.com/w320/cn.jpg',
  },
  co: {
    name: 'Colombia',
    image: 'https://flagcdn.com/w320/co.jpg',
  },
  cr: {
    name: 'Costa Rica',
    image: 'https://flagcdn.com/w320/cr.jpg',
  },
  cu: {
    name: 'Cuba',
    image: 'https://flagcdn.com/w320/cu.jpg',
  },
  cv: {
    name: 'Cape Verde',
    image: 'https://flagcdn.com/w320/cv.jpg',
  },
  cw: {
    name: 'Curaçao',
    image: 'https://flagcdn.com/w320/cw.jpg',
  },
  cx: {
    name: 'Christmas Island',
    image: 'https://flagcdn.com/w320/cx.jpg',
  },
  cy: {
    name: 'Cyprus',
    image: 'https://flagcdn.com/w320/cy.jpg',
  },
  cz: {
    name: 'Czechia',
    image: 'https://flagcdn.com/w320/cz.jpg',
  },
  de: {
    name: 'Germany',
    image: 'https://flagcdn.com/w320/de.jpg',
  },
  dj: {
    name: 'Djibouti',
    image: 'https://flagcdn.com/w320/dj.jpg',
  },
  dk: {
    name: 'Denmark',
    image: 'https://flagcdn.com/w320/dk.jpg',
  },
  dm: {
    name: 'Dominica',
    image: 'https://flagcdn.com/w320/dm.jpg',
  },
  do: {
    name: 'Dominican Republic',
    image: 'https://flagcdn.com/w320/do.jpg',
  },
  dz: {
    name: 'Algeria',
    image: 'https://flagcdn.com/w320/dz.jpg',
  },
  ec: {
    name: 'Ecuador',
    image: 'https://flagcdn.com/w320/ec.jpg',
  },
  ee: {
    name: 'Estonia',
    image: 'https://flagcdn.com/w320/ee.jpg',
  },
  eg: {
    name: 'Egypt',
    image: 'https://flagcdn.com/w320/eg.jpg',
  },
  eh: {
    name: 'Western Sahara',
    image: 'https://flagcdn.com/w320/eh.jpg',
  },
  er: {
    name: 'Eritrea',
    image: 'https://flagcdn.com/w320/er.jpg',
  },
  es: {
    name: 'Spain',
    image: 'https://flagcdn.com/w320/es.jpg',
  },
  et: {
    name: 'Ethiopia',
    image: 'https://flagcdn.com/w320/et.jpg',
  },
  eu: {
    name: 'European Union',
    image: 'https://flagcdn.com/w320/eu.jpg',
  },
  fi: {
    name: 'Finland',
    image: 'https://flagcdn.com/w320/fi.jpg',
  },
  fj: {
    name: 'Fiji',
    image: 'https://flagcdn.com/w320/fj.jpg',
  },
  fk: {
    name: 'Falkland Islands',
    image: 'https://flagcdn.com/w320/fk.jpg',
  },
  fm: {
    name: 'Micronesia',
    image: 'https://flagcdn.com/w320/fm.jpg',
  },
  fo: {
    name: 'Faroe Islands',
    image: 'https://flagcdn.com/w320/fo.jpg',
  },
  fr: {
    name: 'France',
    image: 'https://flagcdn.com/w320/fr.jpg',
  },
  ga: {
    name: 'Gabon',
    image: 'https://flagcdn.com/w320/ga.jpg',
  },
  gb: {
    name: 'United Kingdom',
    image: 'https://flagcdn.com/w320/gb.jpg',
  },
  'gb-eng': {
    name: 'England',
    image: 'https://flagcdn.com/w320/gb-eng.jpg',
  },
  'gb-nir': {
    name: 'Northern Ireland',
    image: 'https://flagcdn.com/w320/gb-nir.jpg',
  },
  'gb-sct': {
    name: 'Scotland',
    image: 'https://flagcdn.com/w320/gb-sct.jpg',
  },
  'gb-wls': {
    name: 'Wales',
    image: 'https://flagcdn.com/w320/gb-wls.jpg',
  },
  gd: {
    name: 'Grenada',
    image: 'https://flagcdn.com/w320/gd.jpg',
  },
  ge: {
    name: 'Georgia',
    image: 'https://flagcdn.com/w320/ge.jpg',
  },
  gf: {
    name: 'French Guiana',
    image: 'https://flagcdn.com/w320/gf.jpg',
  },
  gg: {
    name: 'Guernsey',
    image: 'https://flagcdn.com/w320/gg.jpg',
  },
  gh: {
    name: 'Ghana',
    image: 'https://flagcdn.com/w320/gh.jpg',
  },
  gi: {
    name: 'Gibraltar',
    image: 'https://flagcdn.com/w320/gi.jpg',
  },
  gl: {
    name: 'Greenland',
    image: 'https://flagcdn.com/w320/gl.jpg',
  },
  gm: {
    name: 'Gambia',
    image: 'https://flagcdn.com/w320/gm.jpg',
  },
  gn: {
    name: 'Guinea',
    image: 'https://flagcdn.com/w320/gn.jpg',
  },
  gp: {
    name: 'Guadeloupe',
    image: 'https://flagcdn.com/w320/gp.jpg',
  },
  gq: {
    name: 'Equatorial Guinea',
    image: 'https://flagcdn.com/w320/gq.jpg',
  },
  gr: {
    name: 'Greece',
    image: 'https://flagcdn.com/w320/gr.jpg',
  },
  gs: {
    name: 'South Georgia',
    image: 'https://flagcdn.com/w320/gs.jpg',
  },
  gt: {
    name: 'Guatemala',
    image: 'https://flagcdn.com/w320/gt.jpg',
  },
  gu: {
    name: 'Guam',
    image: 'https://flagcdn.com/w320/gu.jpg',
  },
  gw: {
    name: 'Guinea-Bissau',
    image: 'https://flagcdn.com/w320/gw.jpg',
  },
  gy: {
    name: 'Guyana',
    image: 'https://flagcdn.com/w320/gy.jpg',
  },
  hk: {
    name: 'Hong Kong',
    image: 'https://flagcdn.com/w320/hk.jpg',
  },
  hm: {
    name: 'Heard Island and McDonald Islands',
    image: 'https://flagcdn.com/w320/hm.jpg',
  },
  hn: {
    name: 'Honduras',
    image: 'https://flagcdn.com/w320/hn.jpg',
  },
  hr: {
    name: 'Croatia',
    image: 'https://flagcdn.com/w320/hr.jpg',
  },
  ht: {
    name: 'Haiti',
    image: 'https://flagcdn.com/w320/ht.jpg',
  },
  hu: {
    name: 'Hungary',
    image: 'https://flagcdn.com/w320/hu.jpg',
  },
  id: {
    name: 'Indonesia',
    image: 'https://flagcdn.com/w320/id.jpg',
  },
  ie: {
    name: 'Ireland',
    image: 'https://flagcdn.com/w320/ie.jpg',
  },
  il: {
    name: 'Israel',
    image: 'https://flagcdn.com/w320/il.jpg',
  },
  im: {
    name: 'Isle of Man',
    image: 'https://flagcdn.com/w320/im.jpg',
  },
  in: {
    name: 'India',
    image: 'https://flagcdn.com/w320/in.jpg',
  },
  io: {
    name: 'British Indian Ocean Territory',
    image: 'https://flagcdn.com/w320/io.jpg',
  },
  iq: {
    name: 'Iraq',
    image: 'https://flagcdn.com/w320/iq.jpg',
  },
  ir: {
    name: 'Iran',
    image: 'https://flagcdn.com/w320/ir.jpg',
  },
  is: {
    name: 'Iceland',
    image: 'https://flagcdn.com/w320/is.jpg',
  },
  it: {
    name: 'Italy',
    image: 'https://flagcdn.com/w320/it.jpg',
  },
  je: {
    name: 'Jersey',
    image: 'https://flagcdn.com/w320/je.jpg',
  },
  jm: {
    name: 'Jamaica',
    image: 'https://flagcdn.com/w320/jm.jpg',
  },
  jo: {
    name: 'Jordan',
    image: 'https://flagcdn.com/w320/jo.jpg',
  },
  jp: {
    name: 'Japan',
    image: 'https://flagcdn.com/w320/jp.jpg',
  },
  ke: {
    name: 'Kenya',
    image: 'https://flagcdn.com/w320/ke.jpg',
  },
  kg: {
    name: 'Kyrgyzstan',
    image: 'https://flagcdn.com/w320/kg.jpg',
  },
  kh: {
    name: 'Cambodia',
    image: 'https://flagcdn.com/w320/kh.jpg',
  },
  ki: {
    name: 'Kiribati',
    image: 'https://flagcdn.com/w320/ki.jpg',
  },
  km: {
    name: 'Comoros',
    image: 'https://flagcdn.com/w320/km.jpg',
  },
  kn: {
    name: 'Saint Kitts and Nevis',
    image: 'https://flagcdn.com/w320/kn.jpg',
  },
  kp: {
    name: 'North Korea',
    image: 'https://flagcdn.com/w320/kp.jpg',
  },
  kr: {
    name: 'South Korea',
    image: 'https://flagcdn.com/w320/kr.jpg',
  },
  kw: {
    name: 'Kuwait',
    image: 'https://flagcdn.com/w320/kw.jpg',
  },
  ky: {
    name: 'Cayman Islands',
    image: 'https://flagcdn.com/w320/ky.jpg',
  },
  kz: {
    name: 'Kazakhstan',
    image: 'https://flagcdn.com/w320/kz.jpg',
  },
  la: {
    name: 'Laos',
    image: 'https://flagcdn.com/w320/la.jpg',
  },
  lb: {
    name: 'Lebanon',
    image: 'https://flagcdn.com/w320/lb.jpg',
  },
  lc: {
    name: 'Saint Lucia',
    image: 'https://flagcdn.com/w320/lc.jpg',
  },
  li: {
    name: 'Liechtenstein',
    image: 'https://flagcdn.com/w320/li.jpg',
  },
  lk: {
    name: 'Sri Lanka',
    image: 'https://flagcdn.com/w320/lk.jpg',
  },
  lr: {
    name: 'Liberia',
    image: 'https://flagcdn.com/w320/lr.jpg',
  },
  ls: {
    name: 'Lesotho',
    image: 'https://flagcdn.com/w320/ls.jpg',
  },
  lt: {
    name: 'Lithuania',
    image: 'https://flagcdn.com/w320/lt.jpg',
  },
  lu: {
    name: 'Luxembourg',
    image: 'https://flagcdn.com/w320/lu.jpg',
  },
  lv: {
    name: 'Latvia',
    image: 'https://flagcdn.com/w320/lv.jpg',
  },
  ly: {
    name: 'Libya',
    image: 'https://flagcdn.com/w320/ly.jpg',
  },
  ma: {
    name: 'Morocco',
    image: 'https://flagcdn.com/w320/ma.jpg',
  },
  mc: {
    name: 'Monaco',
    image: 'https://flagcdn.com/w320/mc.jpg',
  },
  md: {
    name: 'Moldova',
    image: 'https://flagcdn.com/w320/md.jpg',
  },
  me: {
    name: 'Montenegro',
    image: 'https://flagcdn.com/w320/me.jpg',
  },
  mf: {
    name: 'Saint Martin',
    image: 'https://flagcdn.com/w320/mf.jpg',
  },
  mg: {
    name: 'Madagascar',
    image: 'https://flagcdn.com/w320/mg.jpg',
  },
  mh: {
    name: 'Marshall Islands',
    image: 'https://flagcdn.com/w320/mh.jpg',
  },
  mk: {
    name: 'North Macedonia',
    image: 'https://flagcdn.com/w320/mk.jpg',
  },
  ml: {
    name: 'Mali',
    image: 'https://flagcdn.com/w320/ml.jpg',
  },
  mm: {
    name: 'Myanmar',
    image: 'https://flagcdn.com/w320/mm.jpg',
  },
  mn: {
    name: 'Mongolia',
    image: 'https://flagcdn.com/w320/mn.jpg',
  },
  mo: {
    name: 'Macau',
    image: 'https://flagcdn.com/w320/mo.jpg',
  },
  mp: {
    name: 'Northern Mariana Islands',
    image: 'https://flagcdn.com/w320/mp.jpg',
  },
  mq: {
    name: 'Martinique',
    image: 'https://flagcdn.com/w320/mq.jpg',
  },
  mr: {
    name: 'Mauritania',
    image: 'https://flagcdn.com/w320/mr.jpg',
  },
  ms: {
    name: 'Montserrat',
    image: 'https://flagcdn.com/w320/ms.jpg',
  },
  mt: {
    name: 'Malta',
    image: 'https://flagcdn.com/w320/mt.jpg',
  },
  mu: {
    name: 'Mauritius',
    image: 'https://flagcdn.com/w320/mu.jpg',
  },
  mv: {
    name: 'Maldives',
    image: 'https://flagcdn.com/w320/mv.jpg',
  },
  mw: {
    name: 'Malawi',
    image: 'https://flagcdn.com/w320/mw.jpg',
  },
  mx: {
    name: 'Mexico',
    image: 'https://flagcdn.com/w320/mx.jpg',
  },
  my: {
    name: 'Malaysia',
    image: 'https://flagcdn.com/w320/my.jpg',
  },
  mz: {
    name: 'Mozambique',
    image: 'https://flagcdn.com/w320/mz.jpg',
  },
  na: {
    name: 'Namibia',
    image: 'https://flagcdn.com/w320/na.jpg',
  },
  nc: {
    name: 'New Caledonia',
    image: 'https://flagcdn.com/w320/nc.jpg',
  },
  ne: {
    name: 'Niger',
    image: 'https://flagcdn.com/w320/ne.jpg',
  },
  nf: {
    name: 'Norfolk Island',
    image: 'https://flagcdn.com/w320/nf.jpg',
  },
  ng: {
    name: 'Nigeria',
    image: 'https://flagcdn.com/w320/ng.jpg',
  },
  ni: {
    name: 'Nicaragua',
    image: 'https://flagcdn.com/w320/ni.jpg',
  },
  nl: {
    name: 'Netherlands',
    image: 'https://flagcdn.com/w320/nl.jpg',
  },
  no: {
    name: 'Norway',
    image: 'https://flagcdn.com/w320/no.jpg',
  },
  np: {
    name: 'Nepal',
    image: 'https://flagcdn.com/w320/np.jpg',
  },
  nr: {
    name: 'Nauru',
    image: 'https://flagcdn.com/w320/nr.jpg',
  },
  nu: {
    name: 'Niue',
    image: 'https://flagcdn.com/w320/nu.jpg',
  },
  nz: {
    name: 'New Zealand',
    image: 'https://flagcdn.com/w320/nz.jpg',
  },
  om: {
    name: 'Oman',
    image: 'https://flagcdn.com/w320/om.jpg',
  },
  pa: {
    name: 'Panama',
    image: 'https://flagcdn.com/w320/pa.jpg',
  },
  pe: {
    name: 'Peru',
    image: 'https://flagcdn.com/w320/pe.jpg',
  },
  pf: {
    name: 'French Polynesia',
    image: 'https://flagcdn.com/w320/pf.jpg',
  },
  pg: {
    name: 'Papua New Guinea',
    image: 'https://flagcdn.com/w320/pg.jpg',
  },
  ph: {
    name: 'Philippines',
    image: 'https://flagcdn.com/w320/ph.jpg',
  },
  pk: {
    name: 'Pakistan',
    image: 'https://flagcdn.com/w320/pk.jpg',
  },
  pl: {
    name: 'Poland',
    image: 'https://flagcdn.com/w320/pl.jpg',
  },
  pm: {
    name: 'Saint Pierre and Miquelon',
    image: 'https://flagcdn.com/w320/pm.jpg',
  },
  pn: {
    name: 'Pitcairn Islands',
    image: 'https://flagcdn.com/w320/pn.jpg',
  },
  pr: {
    name: 'Puerto Rico',
    image: 'https://flagcdn.com/w320/pr.jpg',
  },
  ps: {
    name: 'Palestine',
    image: 'https://flagcdn.com/w320/ps.jpg',
  },
  pt: {
    name: 'Portugal',
    image: 'https://flagcdn.com/w320/pt.jpg',
  },
  pw: {
    name: 'Palau',
    image: 'https://flagcdn.com/w320/pw.jpg',
  },
  py: {
    name: 'Paraguay',
    image: 'https://flagcdn.com/w320/py.jpg',
  },
  qa: {
    name: 'Qatar',
    image: 'https://flagcdn.com/w320/qa.jpg',
  },
  re: {
    name: 'Réunion',
    image: 'https://flagcdn.com/w320/re.jpg',
  },
  ro: {
    name: 'Romania',
    image: 'https://flagcdn.com/w320/ro.jpg',
  },
  rs: {
    name: 'Serbia',
    image: 'https://flagcdn.com/w320/rs.jpg',
  },
  ru: {
    name: 'Russia',
    image: 'https://flagcdn.com/w320/ru.jpg',
  },
  rw: {
    name: 'Rwanda',
    image: 'https://flagcdn.com/w320/rw.jpg',
  },
  sa: {
    name: 'Saudi Arabia',
    image: 'https://flagcdn.com/w320/sa.jpg',
  },
  sb: {
    name: 'Solomon Islands',
    image: 'https://flagcdn.com/w320/sb.jpg',
  },
  sc: {
    name: 'Seychelles',
    image: 'https://flagcdn.com/w320/sc.jpg',
  },
  sd: {
    name: 'Sudan',
    image: 'https://flagcdn.com/w320/sd.jpg',
  },
  se: {
    name: 'Sweden',
    image: 'https://flagcdn.com/w320/se.jpg',
  },
  sg: {
    name: 'Singapore',
    image: 'https://flagcdn.com/w320/sg.jpg',
  },
  sh: {
    name: 'Saint Helena, Ascension and Tristan da Cunha',
    image: 'https://flagcdn.com/w320/sh.jpg',
  },
  si: {
    name: 'Slovenia',
    image: 'https://flagcdn.com/w320/si.jpg',
  },
  sj: {
    name: 'Svalbard and Jan Mayen',
    image: 'https://flagcdn.com/w320/sj.jpg',
  },
  sk: {
    name: 'Slovakia',
    image: 'https://flagcdn.com/w320/sk.jpg',
  },
  sl: {
    name: 'Sierra Leone',
    image: 'https://flagcdn.com/w320/sl.jpg',
  },
  sm: {
    name: 'San Marino',
    image: 'https://flagcdn.com/w320/sm.jpg',
  },
  sn: {
    name: 'Senegal',
    image: 'https://flagcdn.com/w320/sn.jpg',
  },
  so: {
    name: 'Somalia',
    image: 'https://flagcdn.com/w320/so.jpg',
  },
  sr: {
    name: 'Suriname',
    image: 'https://flagcdn.com/w320/sr.jpg',
  },
  ss: {
    name: 'South Sudan',
    image: 'https://flagcdn.com/w320/ss.jpg',
  },
  st: {
    name: 'São Tomé and Príncipe',
    image: 'https://flagcdn.com/w320/st.jpg',
  },
  sv: {
    name: 'El Salvador',
    image: 'https://flagcdn.com/w320/sv.jpg',
  },
  sx: {
    name: 'Sint Maarten',
    image: 'https://flagcdn.com/w320/sx.jpg',
  },
  sy: {
    name: 'Syria',
    image: 'https://flagcdn.com/w320/sy.jpg',
  },
  sz: {
    name: 'Eswatini (Swaziland)',
    image: 'https://flagcdn.com/w320/sz.jpg',
  },
  tc: {
    name: 'Turks and Caicos Islands',
    image: 'https://flagcdn.com/w320/tc.jpg',
  },
  td: {
    name: 'Chad',
    image: 'https://flagcdn.com/w320/td.jpg',
  },
  tf: {
    name: 'French Southern and Antarctic Lands',
    image: 'https://flagcdn.com/w320/tf.jpg',
  },
  tg: {
    name: 'Togo',
    image: 'https://flagcdn.com/w320/tg.jpg',
  },
  th: {
    name: 'Thailand',
    image: 'https://flagcdn.com/w320/th.jpg',
  },
  tj: {
    name: 'Tajikistan',
    image: 'https://flagcdn.com/w320/tj.jpg',
  },
  tk: {
    name: 'Tokelau',
    image: 'https://flagcdn.com/w320/tk.jpg',
  },
  tl: {
    name: 'Timor-Leste',
    image: 'https://flagcdn.com/w320/tl.jpg',
  },
  tm: {
    name: 'Turkmenistan',
    image: 'https://flagcdn.com/w320/tm.jpg',
  },
  tn: {
    name: 'Tunisia',
    image: 'https://flagcdn.com/w320/tn.jpg',
  },
  to: {
    name: 'Tonga',
    image: 'https://flagcdn.com/w320/to.jpg',
  },
  tr: {
    name: 'Turkey',
    image: 'https://flagcdn.com/w320/tr.jpg',
  },
  tt: {
    name: 'Trinidad and Tobago',
    image: 'https://flagcdn.com/w320/tt.jpg',
  },
  tv: {
    name: 'Tuvalu',
    image: 'https://flagcdn.com/w320/tv.jpg',
  },
  tw: {
    name: 'Taiwan',
    image: 'https://flagcdn.com/w320/tw.jpg',
  },
  tz: {
    name: 'Tanzania',
    image: 'https://flagcdn.com/w320/tz.jpg',
  },
  ua: {
    name: 'Ukraine',
    image: 'https://flagcdn.com/w320/ua.jpg',
  },
  ug: {
    name: 'Uganda',
    image: 'https://flagcdn.com/w320/ug.jpg',
  },
  um: {
    name: 'United States Minor Outlying Islands',
    image: 'https://flagcdn.com/w320/um.jpg',
  },
  un: {
    name: 'United Nations',
    image: 'https://flagcdn.com/w320/un.jpg',
  },
  us: {
    name: 'United States',
    image: 'https://flagcdn.com/w320/us.jpg',
  },
  'us-ak': {
    name: 'Alaska',
    image: 'https://flagcdn.com/w320/us-ak.jpg',
  },
  'us-al': {
    name: 'Alabama',
    image: 'https://flagcdn.com/w320/us-al.jpg',
  },
  'us-ar': {
    name: 'Arkansas',
    image: 'https://flagcdn.com/w320/us-ar.jpg',
  },
  'us-az': {
    name: 'Arizona',
    image: 'https://flagcdn.com/w320/us-az.jpg',
  },
  'us-ca': {
    name: 'California',
    image: 'https://flagcdn.com/w320/us-ca.jpg',
  },
  'us-co': {
    name: 'Colorado',
    image: 'https://flagcdn.com/w320/us-co.jpg',
  },
  'us-ct': {
    name: 'Connecticut',
    image: 'https://flagcdn.com/w320/us-ct.jpg',
  },
  'us-de': {
    name: 'Delaware',
    image: 'https://flagcdn.com/w320/us-de.jpg',
  },
  'us-fl': {
    name: 'Florida',
    image: 'https://flagcdn.com/w320/us-fl.jpg',
  },
  'us-ga': {
    name: 'Georgia',
    image: 'https://flagcdn.com/w320/us-ga.jpg',
  },
  'us-hi': {
    name: 'Hawaii',
    image: 'https://flagcdn.com/w320/us-hi.jpg',
  },
  'us-ia': {
    name: 'Iowa',
    image: 'https://flagcdn.com/w320/us-ia.jpg',
  },
  'us-id': {
    name: 'Idaho',
    image: 'https://flagcdn.com/w320/us-id.jpg',
  },
  'us-il': {
    name: 'Illinois',
    image: 'https://flagcdn.com/w320/us-il.jpg',
  },
  'us-in': {
    name: 'Indiana',
    image: 'https://flagcdn.com/w320/us-in.jpg',
  },
  'us-ks': {
    name: 'Kansas',
    image: 'https://flagcdn.com/w320/us-ks.jpg',
  },
  'us-ky': {
    name: 'Kentucky',
    image: 'https://flagcdn.com/w320/us-ky.jpg',
  },
  'us-la': {
    name: 'Louisiana',
    image: 'https://flagcdn.com/w320/us-la.jpg',
  },
  'us-ma': {
    name: 'Massachusetts',
    image: 'https://flagcdn.com/w320/us-ma.jpg',
  },
  'us-md': {
    name: 'Maryland',
    image: 'https://flagcdn.com/w320/us-md.jpg',
  },
  'us-me': {
    name: 'Maine',
    image: 'https://flagcdn.com/w320/us-me.jpg',
  },
  'us-mi': {
    name: 'Michigan',
    image: 'https://flagcdn.com/w320/us-mi.jpg',
  },
  'us-mn': {
    name: 'Minnesota',
    image: 'https://flagcdn.com/w320/us-mn.jpg',
  },
  'us-mo': {
    name: 'Missouri',
    image: 'https://flagcdn.com/w320/us-mo.jpg',
  },
  'us-ms': {
    name: 'Mississippi',
    image: 'https://flagcdn.com/w320/us-ms.jpg',
  },
  'us-mt': {
    name: 'Montana',
    image: 'https://flagcdn.com/w320/us-mt.jpg',
  },
  'us-nc': {
    name: 'North Carolina',
    image: 'https://flagcdn.com/w320/us-nc.jpg',
  },
  'us-nd': {
    name: 'North Dakota',
    image: 'https://flagcdn.com/w320/us-nd.jpg',
  },
  'us-ne': {
    name: 'Nebraska',
    image: 'https://flagcdn.com/w320/us-ne.jpg',
  },
  'us-nh': {
    name: 'New Hampshire',
    image: 'https://flagcdn.com/w320/us-nh.jpg',
  },
  'us-nj': {
    name: 'New Jersey',
    image: 'https://flagcdn.com/w320/us-nj.jpg',
  },
  'us-nm': {
    name: 'New Mexico',
    image: 'https://flagcdn.com/w320/us-nm.jpg',
  },
  'us-nv': {
    name: 'Nevada',
    image: 'https://flagcdn.com/w320/us-nv.jpg',
  },
  'us-ny': {
    name: 'New York',
    image: 'https://flagcdn.com/w320/us-ny.jpg',
  },
  'us-oh': {
    name: 'Ohio',
    image: 'https://flagcdn.com/w320/us-oh.jpg',
  },
  'us-ok': {
    name: 'Oklahoma',
    image: 'https://flagcdn.com/w320/us-ok.jpg',
  },
  'us-or': {
    name: 'Oregon',
    image: 'https://flagcdn.com/w320/us-or.jpg',
  },
  'us-pa': {
    name: 'Pennsylvania',
    image: 'https://flagcdn.com/w320/us-pa.jpg',
  },
  'us-ri': {
    name: 'Rhode Island',
    image: 'https://flagcdn.com/w320/us-ri.jpg',
  },
  'us-sc': {
    name: 'South Carolina',
    image: 'https://flagcdn.com/w320/us-sc.jpg',
  },
  'us-sd': {
    name: 'South Dakota',
    image: 'https://flagcdn.com/w320/us-sd.jpg',
  },
  'us-tn': {
    name: 'Tennessee',
    image: 'https://flagcdn.com/w320/us-tn.jpg',
  },
  'us-tx': {
    name: 'Texas',
    image: 'https://flagcdn.com/w320/us-tx.jpg',
  },
  'us-ut': {
    name: 'Utah',
    image: 'https://flagcdn.com/w320/us-ut.jpg',
  },
  'us-va': {
    name: 'Virginia',
    image: 'https://flagcdn.com/w320/us-va.jpg',
  },
  'us-vt': {
    name: 'Vermont',
    image: 'https://flagcdn.com/w320/us-vt.jpg',
  },
  'us-wa': {
    name: 'Washington',
    image: 'https://flagcdn.com/w320/us-wa.jpg',
  },
  'us-wi': {
    name: 'Wisconsin',
    image: 'https://flagcdn.com/w320/us-wi.jpg',
  },
  'us-wv': {
    name: 'West Virginia',
    image: 'https://flagcdn.com/w320/us-wv.jpg',
  },
  'us-wy': {
    name: 'Wyoming',
    image: 'https://flagcdn.com/w320/us-wy.jpg',
  },
  uy: {
    name: 'Uruguay',
    image: 'https://flagcdn.com/w320/uy.jpg',
  },
  uz: {
    name: 'Uzbekistan',
    image: 'https://flagcdn.com/w320/uz.jpg',
  },
  va: {
    name: 'Vatican City (Holy See)',
    image: 'https://flagcdn.com/w320/va.jpg',
  },
  vc: {
    name: 'Saint Vincent and the Grenadines',
    image: 'https://flagcdn.com/w320/vc.jpg',
  },
  ve: {
    name: 'Venezuela',
    image: 'https://flagcdn.com/w320/ve.jpg',
  },
  vg: {
    name: 'British Virgin Islands',
    image: 'https://flagcdn.com/w320/vg.jpg',
  },
  vi: {
    name: 'United States Virgin Islands',
    image: 'https://flagcdn.com/w320/vi.jpg',
  },
  vn: {
    name: 'Vietnam',
    image: 'https://flagcdn.com/w320/vn.jpg',
  },
  vu: {
    name: 'Vanuatu',
    image: 'https://flagcdn.com/w320/vu.jpg',
  },
  wf: {
    name: 'Wallis and Futuna',
    image: 'https://flagcdn.com/w320/wf.jpg',
  },
  ws: {
    name: 'Samoa',
    image: 'https://flagcdn.com/w320/ws.jpg',
  },
  xk: {
    name: 'Kosovo',
    image: 'https://flagcdn.com/w320/xk.jpg',
  },
  ye: {
    name: 'Yemen',
    image: 'https://flagcdn.com/w320/ye.jpg',
  },
  yt: {
    name: 'Mayotte',
    image: 'https://flagcdn.com/w320/yt.jpg',
  },
  za: {
    name: 'South Africa',
    image: 'https://flagcdn.com/w320/za.jpg',
  },
  zm: {
    name: 'Zambia',
    image: 'https://flagcdn.com/w320/zm.jpg',
  },
  zw: {
    name: 'Zimbabwe',
    image: 'https://flagcdn.com/w320/zw.jpg',
  },
}

const keys = Object.keys(flags)

console.log(JSON.stringify(keys, null, 2))

const createFlagCard = (code, options) => ({
  content: "A quel pays de l'union européenne appartient ce drapeau ?",
  annotation: 'Sélectionnez le pays correspondant',
  test: options,
  foregroundColor: '#2c2836',
  backgroundColor: randomColor(),
})

const deck = {
  name: "Drapeaux de l'Union Européenne",
  themeColor: '#3f51b5',
  description:
    "Testez vos connaissances sur les drapeaux de l'Union Européenne",
  cards: [
    // for each key code in the flags object, add a list entry : createFlagCard(code, options),
    // options being a list of countries with almost similar flags, up to 6 countries, not necessarily starting with
    // the same letter. The fisrst option is always the right answer
    createFlagCard('ad', [
      'Andorre',
      'Espagne',
      'Italie',
      'Portugal',
      'Malte',
      'Autriche',
    ]),
    createFlagCard('ae', [
      'Émirats Arabes Unis',
      'Afghanistan',
      'Arabie Saoudite',
      'Azerbaïdjan',
      'Arménie',
      'Albanie',
    ]),
    createFlagCard('al', [
      'Albanie',
      'Suisse',
      'Autriche',
      'Pologne',
      'Estonie',
      'Andorre',
    ]),
    createFlagCard('at', [
      'Autriche',
      'Albanie',
      'Andorre',
      'Suisse',
      'Pologne',
      'Espagne',
    ]),
    createFlagCard('ax', [
      'Åland',
      'Finlande',
      'Danemark',
      'Norvège',
      'Suède',
      'Islande',
    ]),
    createFlagCard('az', [
      'Azerbaïdjan',
      'Arménie',
      'Albanie',
      'Autriche',
      'Suisse',
      'Andorre',
    ]),
    createFlagCard('ba', [
      'Bosnie-Herzégovine',
      'Monténégro',
      'Macédoine',
      'Croatie',
      'Serbie',
      'Slovénie',
    ]),
    createFlagCard('be', [
      'Belgique',
      'Bulgarie',
      'Biélorussie',
      'Bosnie-Herzégovine',
      'Monténégro',
      'Macédoine',
    ]),
    createFlagCard('bg', [
      'Bulgarie',
      'Belgique',
      'Biélorussie',
      'Bosnie-Herzégovine',
      'Monténégro',
      'Macédoine',
    ]),
    createFlagCard('bh', [
      'Bahreïn',
      'Qatar',
      'Oman',
      'Koweït',
      'Émirats Arabes Unis',
      'Arabie Saoudite',
    ]),
    createFlagCard('by', [
      'Biélorussie',
      'Belgique',
      'Bulgarie',
      'Bosnie-Herzégovine',
      'Monténégro',
      'Macédoine',
    ]),
    createFlagCard('ch', [
      'Suisse',
      'Albanie',
      'Autriche',
      'Pologne',
      'Estonie',
      'Andorre',
    ]),
    createFlagCard('cy', [
      'Chypre',
      'Grèce',
      'Malte',
      'Italie',
      'Espagne',
      'Portugal',
    ]),
    createFlagCard('cz', [
      'République Tchèque',
      'Slovaquie',
      'Slovénie',
      'Croatie',
      'Serbie',
      'Monténégro',
    ]),
    createFlagCard('de', [
      'Allemagne',
      'Autriche',
      'Suisse',
      'Pologne',
      'Estonie',
      'Andorre',
    ]),
    createFlagCard('dk', [
      'Danemark',
      'Norvège',
      'Suède',
      'Finlande',
      'Islande',
      'Åland',
    ]),
    createFlagCard('dm', [
      'Dominique',
      'Sainte-Lucie',
      'Saint-Vincent-et-les-Grenadines',
      'Saint-Christophe-et-Niévès',
      'Antigua-et-Barbuda',
      'Grenade',
    ]),
  ],
}
