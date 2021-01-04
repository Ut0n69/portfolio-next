import Head from 'next/head';
import { useState, useEffect } from 'react';
import { pageTitle } from 'modules/utils/constValues';
import { GET_REPOSITORY } from 'modules/graphql/fields';
import { client } from 'modules/graphql/client';

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

  return (
    <>
      <Head>
        <title>GitHub | {pageTitle}</title>
      </Head>

      <main>
        <h1 className="title">👽 Repositories 👽</h1>
        {repositories.length ? (
          repositories.map((repository: Repository, i: number) => (
            <a
              key={i}
              rel="noreferrer"
              target="_blank"
              href={repository.url}
              style={{ cursor: 'pointer' }}
            >
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
            </a>
          ))
        ) : (
          <p style={{ textAlign: 'center' }}>Loading...</p>
        )}
        <div className="footer">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/Ut0n69"
            style={{ cursor: 'pointer' }}
          >
            GitHub
          </a>
        </div>
      </main>

      <style jsx>{`
        main {
          max-width: 500px;
          margin: 0 auto;
        }

        .title {
          text-align: center;
          margin: 16px;
        }

        .card {
          padding: 16px;
          margin: 8px auto;
          border: 1px solid #000;
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
