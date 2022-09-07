import { $e } from '../$e';
import { contactInfo } from '../data/settings';
import { h } from '../hs';
import { Content } from './contentControl';

export function contactInfoElement(){
  return (
    <ul>
      <li>
        Telegram 讨论组：
        <a
          style={{
            wordBreak: 'break-all'
          }}
          href='https://t.me/joinchat/Dt8_WlJnmEwYNbjzlnLyNA'
          className='regular'
          target='_blank'
        >
          https://t.me/joinchat/Dt8_WlJnmEwYNbjzlnLyNA
        </a>
        <ul>
          <li>非常欢迎色情，但是若要讨论血腥内容，请用群描述内的 R18G 群组。</li>
        </ul>
      </li>
      <li>
        Telegram 更新推送频道：
        <a
          style={{
            wordBreak: 'break-all'
          }}
          href='https://t.me/joinchat/AAAAAEpkRVwZ-3s5V3YHjA'
          className='regular'
          target='_blank'
        >
          https://t.me/joinchat/AAAAAEpkRVwZ-3s5V3YHjA
        </a>
      </li>
      <li>
        Twitter：
        <a href='https://twitter.com/NovelWTech' className='regular' target='_blank'>@NovelWTech</a>
      </li>
      <li>
        Discord：
        <a
          style={{
            wordBreak: 'break-all'
          }}
          href='https://discord.gg/HyKA6XCp6E'
          className='regular'
          target='_blank'>
            https://discord.gg/HyKA6XCp6E
        </a>
        <ul>
          <li>非常欢迎色情，但是若要讨论血腥内容，请用“#血腥猎奇”频道。</li>
        </ul>
      </li>
      {/* <li>
        QQ 群
        <ul>
          <li style={{
            fontWeight: 'bold',
          }}>不到万不得已请不要使用 QQ 群！请考虑使用上述明确允许色情内容的联系方式！QQ 群非常容易被封！我们的五百人 ① 群已经被封了！</li>
          <li style={{
            fontWeight: 'bold',
            textDecoration: 'underline',
          }}>严格禁止政治/色情媒体，发现一次就踢了！</li>
          <li>
            只收大号，小号勿扰！
            <ul>
              <li>如果申请被拒绝，说明等级不够高，请使用大号。如果大号也被拒绝，请使用别的联系方式（推荐 Telegram 讨论组）。</li>
            </ul>
          </li>
          <li>因人数限制，满人时会踢出不活跃用户。若要潜水，请使用别的联系方式（推荐 Telegram 讨论组）。</li>
          <li>再重复一遍：不到万不得已，不要用 QQ 群！大多数人都在 Telegram 讨论组。</li>
          <li>二群：1154421904</li>
        </ul>
      </li> */}
    </ul>
  );
}

export function loadContactInfo(content: Content) {
  if (!contactInfo.getValue()) {
    return;
  }
  const block = content.addBlock({
    initElement: h('div',
      h('h3', '欢迎加入《可穿戴科技》相关讨论组'),
      contactInfoElement(),
      h('a.regular', {
        href: '#',
        onclick: ((event: any) => {
          event.preventDefault();
          block.directRemove();
          contactInfo.setValue(false);
        }),
      }, '点此永久关闭本提示'),
    ),
  });
}
