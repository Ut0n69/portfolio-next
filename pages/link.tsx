import Head from 'next/head';
import { pageTitle } from 'modules/utils/constValues';
import Tilt from 'react-tilt';

const tiltStyle = {
  height: 120,
  width: 250,
  border: '1px solid #000',
  lineHeight: '120px',
  textAlign: 'center',
  fontSize: '48px',
  margin: '30px',
  cursor: 'pointer'
};

export const Link = (): JSX.Element => (
  <>
    <Head>
      <title>Link | {pageTitle}</title>
    </Head>

    <main>
      <h1 className="title">👽 Link 👽</h1>
      <div className="container">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/Ut0n69"
          style={{ cursor: 'pointer' }}
        >
          <Tilt options={{ max: 45, reverse: true }} style={tiltStyle}>
            GitHub
          </Tilt>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://qiita.com/ut0n"
          style={{ cursor: 'pointer' }}
        >
          <Tilt options={{ max: 45, reverse: true }} style={tiltStyle}>
            Qiita
          </Tilt>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://zenn.dev/ut0n"
          style={{ cursor: 'pointer' }}
        >
          <Tilt options={{ max: 45, reverse: true }} style={tiltStyle}>
            Zenn
          </Tilt>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://codepen.io/Ut0n69"
          style={{ cursor: 'pointer' }}
        >
          <Tilt options={{ max: 45, reverse: true }} style={tiltStyle}>
            CodePen
          </Tilt>
        </a>
      </div>
    </main>

    <style jsx>{`
      .title {
        text-align: center;
        margin: 16px;
      }

      .container {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
      }

      .tilt {
        height: 150;
        width: 250;
        border: 1px solid #000;
        line-height: 150px;
        text-align: center;
        font-size: 60px;
        margin: 30px;
        cursor: pointer;
      }
    `}</style>
  </>
);

export default Link;
