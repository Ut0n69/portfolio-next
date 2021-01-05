import Head from 'next/head';
import { useRouter } from 'next/router';
import { pageTitle } from 'modules/utils/constValues';
import Tilt from 'react-tilt';

const tiltStyle = {
  height: 120,
  width: 250,
  border: '1px solid #000',
  lineHeight: '120px',
  textAlign: 'center',
  fontSize: '48px',
  margin: '30px'
};

export const Link = (): JSX.Element => {
  const router = useRouter();

  const handleClickClose = () => {
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>Link | {pageTitle}</title>
      </Head>

      <main onClick={handleClickClose}>
        <h1 className="title">👽 Link 👽</h1>
        <div className="container">
          <a rel="noreferrer" target="_blank" href="https://github.com/Ut0n69">
            <Tilt options={{ max: 45, reverse: true }} style={tiltStyle}>
              GitHub
            </Tilt>
          </a>
          <a rel="noreferrer" target="_blank" href="https://qiita.com/ut0n">
            <Tilt options={{ max: 45, reverse: true }} style={tiltStyle}>
              Qiita
            </Tilt>
          </a>
          <a rel="noreferrer" target="_blank" href="https://zenn.dev/ut0n">
            <Tilt options={{ max: 45, reverse: true }} style={tiltStyle}>
              Zenn
            </Tilt>
          </a>
          <a rel="noreferrer" target="_blank" href="https://codepen.io/Ut0n69">
            <Tilt options={{ max: 45, reverse: true }} style={tiltStyle}>
              CodePen
            </Tilt>
          </a>
        </div>
      </main>

      <style jsx>{`
        main {
          width: 100vw;
          height: 100vh;
          cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='48' height='48' viewport='0 0 120 120' style='font-size:48px;'><text y='85%'>✕</text></svg>")
              24 24,
            auto;
        }

        .title {
          text-align: center;
          margin: 32px;
        }

        .container {
          width: 300px;
          margin: 0 auto;
        }

        .tilt {
          height: 150;
          width: 250;
          border: 1px solid #000;
          line-height: 150px;
          text-align: center;
          font-size: 60px;
          margin: 30px;
        }
      `}</style>
    </>
  );
};

export default Link;
