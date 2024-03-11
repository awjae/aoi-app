interface ICategoryColor {
  100: string;
  200: string;
  400: string;
  500: string;
  600: string;
}

const brand = {
  lightBlue: '#00bef2',
  blue: '#00a0d2',
};

const primary = {
  50: '#e7f6fb',
  100: '#daf1f8',
  200: '#85d1e9',
  300: '#33b3db',
  400: '#1aaad7',
  500: '#00a0d2',
  700: '#047fb4',
  o10: '#85d1e933',
  o20: '#00bef233',
  o30: '#85d1e94d',
  o80: '#00a0d2cc',
  o90: '#00a0d2e5',
};

const secondary = {
  200: '#195580',
  500: '#0f3f61',
  700: '#022137',
};

const warning = {
  200: '#FFD599',
  400: '#FF9C3F',
  500: '#FF6D00',
  700: '#B73900',
};

const error = {
  200: '#ffe8e3',
  400: '#f8a796',
  500: '#f7876e',
  700: '#f46647',
};

const success = {
  200: '#e2ffea',
  400: '#33d763',
  500: '#00cd3c',
  700: '#009348',
};

const gray = {
  50: '#fbfcfd',
  100: '#f5f7fa',
  200: '#e4e7eb',
  300: '#cbd2d9',
  400: '#9aa5b1',
  500: '#7b8794',
  600: '#616e7c',
  700: '#52606d',
  800: '#323f4b',
  900: '#1f2933',
  o5: '#323f4b0d',
  o10: '#323f4b1a',
  o30: '#323f4b4d',
  o50: '#323f4b80',
  o80: '#323f4bcc',
  o90: '#323f4be5',
};

const common = {
  black: '#000000',
  white: '#ffffff',
};

const dimmed = {
  50: '#00000080',
  80: '#000000cc',
};

const background = {
  default: gray[100],
  paper: common.white,
};

const disabled = {
  background: gray[200],
  text: gray[400],
};

const divider = {
  100: gray[100],
  200: gray[200],
  300: gray[300],
};

const y: ICategoryColor = {
  100: '#FEF6D8',
  200: '#FDECB1',
  400: '#F7CD6B',
  500: '#F2B63C',
  600: '#D0942B',
};

const o: ICategoryColor = {
  100: '#FBFBDA',
  200: '#F7F8B7',
  400: '#D6D86E',
  500: '#BCBF42',
  600: '#A1A430',
};

const g: ICategoryColor = {
  100: '#DDFADE',
  200: '#BCF6C5',
  400: '#71CA90',
  500: '#45A872',
  600: '#329066',
};

const t: ICategoryColor = {
  100: '#D9F7D7',
  200: '#B1F0B3',
  400: '#56A969',
  500: '#27713F',
  600: '#1C6139',
};

const m: ICategoryColor = {
  100: '#D5F9E8',
  200: '#AEF3D8',
  400: '#56B7A3',
  500: '#28887D',
  600: '#1D7472',
};

const s: ICategoryColor = {
  100: '#D1F6FD',
  200: '#A4E9FB',
  400: '#52B8EA',
  500: '#1E92DC',
  600: '#1572BD',
};

const b: ICategoryColor = {
  100: '#D7ECFE',
  200: '#AFD7FD',
  400: '#68A4F3',
  500: '#387FEC',
  600: '#2862CA',
};

const n: ICategoryColor = {
  100: '#D7E2FA',
  200: '#B1C6F6',
  400: '#5F7BCA',
  500: '#324DA7',
  600: '#243A8F',
};

const c: ICategoryColor = {
  100: '#E5ECFB',
  200: '#CDD9F8',
  400: '#91A2D9',
  500: '#6C7EC0',
  600: '#4E5FA5',
};

const v: ICategoryColor = {
  100: '#F3EEFC',
  200: '#E7DDFA',
  400: '#C1B3E3',
  500: '#A696D2',
  600: '#7E6DB4',
};

const l: ICategoryColor = {
  100: '#F9E7FA',
  200: '#F0D0F5',
  400: '#B88EC7',
  500: '#8E64A2',
  600: '#71498B',
};

const p: ICategoryColor = {
  100: '#F8D8FA',
  200: '#EEB2F5',
  400: '#AB5FC3',
  500: '#7B329B',
  600: '#612485',
};

const w: ICategoryColor = {
  100: '#F7EEE4',
  200: '#F0DCCA',
  400: '#A68575',
  500: '#6B4C41',
  600: '#5C382F',
};

const i: ICategoryColor = {
  100: '#FAF7F2',
  200: '#F5EFE6',
  400: '#C3B9AD',
  500: '#9C9084',
  600: '#867160',
};

export const palette = { b, c, g, i, l, m, n, o, p, s, t, v, w, y };

export const theme = {
  ...palette,
  background,
  brand,
  common,
  dimmed,
  disabled,
  divider,
  error,
  gray,
  primary,
  secondary,
  success,
  warning,
};
