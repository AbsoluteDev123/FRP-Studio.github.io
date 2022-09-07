const links: Array<{
  text: string,
  link: string,
}> = [
  { text: '艾利浩斯学院 图书馆', link: 'http://alhs.live' },
  { text: 'acted 咕咕喵的小说和小游戏', link: 'https://acted.gitlab.io/h3/' },
  { text: '琥珀的可穿戴科技番外', link: 'https://www.pixiv.net/novel/show.php?id=14995202' },
  { text: '千早快传', link: 'https://chihaya.cloud' },
  { text: 'ASMR Online', link: 'https://www.asmr.one' },
];

import { ItemDecoration, Menu } from '../Menu';
export class LinkExchangeMenu extends Menu {
  public constructor(urlBase: string) {
    super(urlBase);
    links.sort(() => Math.random() - 0.5);
    links.forEach(({ text, link }) => this.addItem(text, {
      button: true,
      link,
      decoration: ItemDecoration.ICON_LINK,
    }));
  }
}
