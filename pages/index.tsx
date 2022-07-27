/* eslint-disable react/jsx-no-undef */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { posts } from '../lib/notion'
import Text from '../components/Text';

export async function getServerSideProps() {
    // Get the posts
    let { results } = await posts();
    // Return the result
    return {
        props: {
            posts: results,

        }
    }
}

interface Props {
    posts: [any]
}

const Home: NextPage<Props> = (props) => {
    console.log(props.posts)
    return (
        <div className={styles.container}>
            <Head>
                <title>Latest posts</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Latest posts
                </h1>
                {
                    props.posts.map((result, index) => {
                        const date = new Date(result.properties.PublishedAt.date.start).toLocaleString(
                            "en-US",
                            {
                                month: "short",
                                day: "2-digit",
                                year: "numeric",
                            }
                        );
                        return (
                            <div className={styles.cardHolder} key={index}>
                                <h3 className={styles.postTitle}>
                                    <Link href={`/posts/${result.properties.Slug.rich_text[0].plain_text}`}>
                                        <a>
                                            <Text text={result.properties.Title.title} />
                                        </a>
                                    </Link>
                                </h3>

                                <p className={styles.postDescription}>{date}</p>
                                <Link href={`/posts/${result.properties.Slug.rich_text[0].plain_text}`}>
                                    <a >Read post →</a>
                                </Link>
                            </div>
                        )
                    })
                }
            </main>

            <footer className={styles.footer}>
                <p>From toannt with love</p>
            </footer>
        </div>
    )
}

export default Home
