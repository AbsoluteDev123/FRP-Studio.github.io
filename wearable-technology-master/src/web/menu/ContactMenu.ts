import { ItemDecoration, Menu } from '../Menu';

export class ContactMenu extends Menu {
  public constructor(urlBase: string) {
    super(urlBase);
    this.addItem('源代码', {
      button: true,
      link: 'https://gitgud.io/RinTepis/wearable-technology',
      decoration: ItemDecoration.ICON_LINK,
    });
    this.addItem('Telegram 更新推送频道', {
      button: true,
      link: 'https://t.me/joinchat/AAAAAEpkRVwZ-3s5V3YHjA',
      decoration: ItemDecoration.ICON_LINK,
    });
    this.addItem('Telegram 讨论组', {
      button: true,
      link: 'https://t.me/joinchat/Dt8_WlJnmEwYNbjzlnLyNA',
      decoration: ItemDecoration.ICON_LINK,
    });
    // this.addItem('GitLab Repo', {
    //   button: true,
    //   link: 'https://gitgud.io/RinTepis/wearable-technology',
    //   decoration: ItemDecoration.ICON_LINK,
    // });
    this.addItem('GitHub Repository 遗址（被封了）', {
      button: true,
      link: 'https://github.com/SCLeoX/Wearable-Technology',
      decoration: ItemDecoration.ICON_LINK,
    });
    this.addItem('GitLab.com Repository 遗址（也被封了）', {
      button: true,
      link: 'https://gitlab.com/SCLeo/wearable-technology',
      decoration: ItemDecoration.ICON_LINK,
    });
    this.addItem('原始 Google Docs', {
      button: true,
      link: 'https://docs.google.com/document/d/1Pp5CtO8c77DnWGqbXg-3e7w9Q3t88P35FOl6iIJvMfo/edit?usp=sharing',
      decoration: ItemDecoration.ICON_LINK,
    });
  }
}
