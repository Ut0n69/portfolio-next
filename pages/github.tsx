import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { pageTitle } from 'modules/utils/constValues';
import { GET_REPOSITORY } from 'modules/graphql/fields';
import { client } from 'modules/graphql/client';
import Tilt from 'react-tilt';

type Repository = {
  name: string;
  url: string;
  description?: string;
  primaryLanguage: {
    name: string;
    color: string;
  } | null;
};

export const GitHub = (): JSX.Element => {
  const router = useRouter();
  const [repositories, setRepositories] = useState([]);

  const fetch = async () => {
    const { data } = await client.query({
      query: GET_REPOSITORY
    });
    setRepositories(data.viewer.repositories.nodes);
  };

  useEffect(() => {
    fetch();
  }, []);

  const handleClickClose = () => {
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>GitHub | {pageTitle}</title>
      </Head>

      <main onClick={handleClickClose}>
        <h1 className="title">Repositories</h1>
        <div className="container">
          {repositories.length ? (
            repositories.map((repository: Repository, i: number) => (
              <a key={i} rel="noreferrer" target="_blank" href={repository.url}>
                <Tilt options={{ max: 30, reverse: true }}>
                  <div className="card">
                    <h2
                      style={{
                        marginBottom: '8px'
                      }}
                    >
                      {repository.name}
                    </h2>
                    <p>{repository.description || '-'}</p>
                    {repository.primaryLanguage && (
                      <div>
                        <span
                          style={{
                            verticalAlign: 'text-bottom',
                            marginRight: '4px',
                            fontSize: '8px',
                            color: repository.primaryLanguage.color
                          }}
                        >
                          ●
                        </span>
                        <span style={{ fontSize: '14px' }}>
                          {repository.primaryLanguage.name}
                        </span>
                      </div>
                    )}
                  </div>
                </Tilt>
              </a>
            ))
          ) : (
            <p style={{ textAlign: 'center' }}>Loading...</p>
          )}
        </div>
        <div className="footer">
          <a rel="noreferrer" target="_blank" href="https://github.com/Ut0n69">
            GitHub
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

        .container {
          max-width: 500px;
          margin: 0 auto;
        }

        .title {
          text-align: center;
          margin: 32px;
        }

        .card {
          max-width: 500px;
          width: 80%;
          padding: 16px;
          margin: 16px auto;
          border: 1px solid #fff;
        }

        .footer {
          text-align: center;
          margin-top: 16px;
        }
      `}</style>
    </>
  );
};

export default GitHub;
