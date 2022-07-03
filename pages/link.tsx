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
        <h1 className="title">Link</h1>
        <div className="container">
          <a rel="noreferrer" target="_blank" href="https://github.com/Ut0n69">
            <Tilt options={{ max: 45, reverse: true }} style={tiltStyle}>
              <div style={{ border: '1px solid' }}>GitHub</div>
            </Tilt>
          </a>
          <a rel="noreferrer" target="_blank" href="https://qiita.com/ut0n">
            <Tilt options={{ max: 45, reverse: true }} style={tiltStyle}>
              <div style={{ border: '1px solid' }}>Qiita</div>
            </Tilt>
          </a>
          <a rel="noreferrer" target="_blank" href="https://zenn.dev/ut0n">
            <Tilt options={{ max: 45, reverse: true }} style={tiltStyle}>
              <div style={{ border: '1px solid' }}>Zenn</div>
            </Tilt>
          </a>
          <a rel="noreferrer" target="_blank" href="https://codepen.io/Ut0n69">
            <Tilt options={{ max: 45, reverse: true }} style={tiltStyle}>
              <div style={{ border: '1px solid' }}>CodePen</div>
            </Tilt>
          </a>
        </div>
      </main>

      <style jsx>{`
        main {
          width: 100vw;
          height: 100vh;
          cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='41' height='42' viewport='0 0 41 42' fill='none'><line x1='0.353553' y1='0.646447' x2='39.9515' y2='40.2444' stroke='silver'/><line x1='39.9515' y1='1.35355' x2='0.353536' y2='40.9515' stroke='silver'/></svg>")
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
          border: 1px solid #fff;
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
