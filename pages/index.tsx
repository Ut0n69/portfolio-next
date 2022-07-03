import Head from 'next/head';
import Link from 'next/link';
import { pageTitle } from 'modules/utils/constValues';
import Ztext from 'react-ztext';

export const Top = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>{pageTitle}</title>
    </Head>
    <main>
      <div className="alien">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/Ut0n69/portfolio-next"
        >
          <Ztext
            depth="1rem"
            direction="both"
            event="pointer"
            eventRotation="45deg"
            eventDirection="default"
            fade={false}
            layers={3}
            perspective="500px"
          >
            <span role="img" aria-label="emoji" style={{ fontSize: '128px' }}>
              👽
            </span>
          </Ztext>
        </a>
      </div>
      <div className="github">
        <Link href="/github">GitHub</Link>
      </div>
      <div className="link">
        <Link href="/link">Link</Link>
      </div>
    </main>
    <style jsx>{`
      main {
        width: 100vw;
        height: 100vh;
      }

      .alien {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .github {
        font-size: 24px;
        position: fixed;
        bottom: 30%;
        left: 30%;
      }

      .link {
        font-size: 24px;
        position: fixed;
        bottom: 30%;
        right: 30%;
      }
    `}</style>
  </div>
);

export default Top;
