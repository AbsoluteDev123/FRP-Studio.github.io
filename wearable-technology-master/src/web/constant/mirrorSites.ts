export interface MirrorSite {
  name: string;
  origin: string;
  provider: string;
  technology: string;
}

export const mirrorSites: Array<MirrorSite> = [
  {
    name: 'wt.bgme.bid',
    origin: 'https://wt.bgme.bid',
    provider: 'Shrink',
    technology: '自行构建',
  },
  {
    name: 'wt.bgme.me（可能已被墙）',
    origin: 'https://wt.bgme.me',
    provider: 'Shrink',
    technology: '自行构建',
  },
  {
    name: 'rbq.desi',
    origin: 'https://rbq.desi',
    provider: 'kookxiang',
    technology: '自行构建',
  },
  {
    name: 'wt.0w0.bid',
    origin: 'https://wt.0w0.bid',
    provider: '立音喵',
    technology: 'Cloudflare Workers',
  },
  {
    name: 'wt.innocent.love',
    origin: 'https://wt.innocent.love',
    provider: '砂糖梨子',
    technology: '自行构建',
  },
  {
    name: 'wt.mirror.0w0.bid',
    origin: 'https://wt.mirror.0w0.bid',
    provider: '立音喵',
    technology: '自行构建',
  },
];

export const mainSite: MirrorSite = {
  name: 'wt.tepis.me（主站）',
  origin: 'https://wt.tepis.me',
  provider: '琳 缇佩斯',
  technology: 'Netlify',
};

export const mirrorSitesPlusMainSite: Array<MirrorSite> = [mainSite, ...mirrorSites];
