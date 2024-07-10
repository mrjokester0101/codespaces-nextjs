import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CopyTextButton from "../components/CopyTextButton";

const Home = () => {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <Head>
          <title>MrJokester</title>
          <meta name="description" content="My Website" />
          <link rel="icon" href="/profile.png" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            <Image src="/title.png" alt="Profile Icon" width={40} height={40} /> Bomb Game
          </h1>

          <div className={styles.snippet}>
            <p className={styles.snippet}>Vars</p>
            <code className={styles.code}>1. Name: bsc Value: 0</code>
          </div>
          
          <div className={stylesstyles.sni
            <p className={styles.snippet}>Main Code</p>
            <code className={styles.code}>$nomention
$onlyIf[$guildID!=;❌️ Can't use the command in dm!]
$setUserVar[bsc;0;$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]
$addButton[yes;Indicator-1;⬛️;secondary;yes]
$addButton[no;Indicator-2;⬛️;secondary;yes]
$addButton[no;Indicator-3;1️⃣;secondary;yes]
$addButton[no;1️⃣-2-$authorID;⬛️;secondary]
$addButton[no;1️⃣-3-$authorID;⬛️;secondary]

$addButton[yes;Indicator-4;1️⃣;secondary;yes]
$addButton[no;Indicator-5;2️⃣;secondary;yes]
$addButton[no;Indicator-6;2️⃣;secondary;yes]
$addButton[no;💥-1-$authorID;⬛️;secondary]
$addButton[no;1️⃣-5-$authorID;⬛️;secondary]

$addButton[yes;💥-2-$authorID;⬛️;secondary]
$addButton[no;2️⃣-3-$authorID;⬛️;secondary]
$addButton[no;💥-3-$authorID;⬛️;secondary]
$addButton[no;3️⃣-1-$authorID;⬛️;secondary]
$addButton[no;2️⃣-4-$authorID;⬛️;secondary]

$addButton[yes;2️⃣-6-$authorID;⬛️;secondary]
$addButton[no;3️⃣-2-$authorID;⬛️;secondary]
$addButton[no;3️⃣-3-$authorID;⬛️;secondary]
$addButton[no;3️⃣-4-$authorID;⬛️;secondary]
$addButton[no;💥-4-$authorID;⬛️;secondary]

$addButton[yes;1️⃣-7-$authorID;⬛️;secondary]
$addButton[no;💥-5-$authorID;⬛️;secondary]
$addButton[no;💥-6-$authorID;⬛️;secondary]
$addButton[no;2️⃣-5-$authorID;⬛️;secondary]
$addButton[no;1️⃣-8-$authorID;⬛️;secondary]</code>
            <CopyTextButton text={`$nomention
$onlyIf[$guildID!=;❌️ Can't use the command in dm!]
$setUserVar[bsc;0;$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]
$addButton[yes;Indicator-1;⬛️;secondary;yes]
$addButton[no;Indicator-2;⬛️;secondary;yes]
$addButton[no;Indicator-3;1️⃣;secondary;yes]
$addButton[no;1️⃣-2-$authorID;⬛️;secondary]
$addButton[no;1️⃣-3-$authorID;⬛️;secondary]

$addButton[yes;Indicator-4;1️⃣;secondary;yes]
$addButton[no;Indicator-5;2️⃣;secondary;yes]
$addButton[no;Indicator-6;2️⃣;secondary;yes]
$addButton[no;💥-1-$authorID;⬛️;secondary]
$addButton[no;1️⃣-5-$authorID;⬛️;secondary]

$addButton[yes;💥-2-$authorID;⬛️;secondary]
$addButton[no;2️⃣-3-$authorID;⬛️;secondary]
$addButton[no;💥-3-$authorID;⬛️;secondary]
$addButton[no;3️⃣-1-$authorID;⬛️;secondary]
$addButton[no;2️⃣-4-$authorID;⬛️;secondary]

$addButton[yes;2️⃣-6-$authorID;⬛️;secondary]
$addButton[no;3️⃣-2-$authorID;⬛️;secondary]
$addButton[no;3️⃣-3-$authorID;⬛️;secondary]
$addButton[no;3️⃣-4-$authorID;⬛️;secondary]
$addButton[no;💥-4-$authorID;⬛️;secondary]

$addButton[yes;1️⃣-7-$authorID;⬛️;secondary]
$addButton[no;💥-5-$authorID;⬛️;secondary]
$addButton[no;💥-6-$authorID;⬛️;secondary]
$addButton[no;2️⃣-5-$authorID;⬛️;secondary]
$addButton[no;1️⃣-8-$authorID;⬛️;secondary]`} />
          </div>

          <div className={styles.snippet}>
            <p className={styles.snippet}>Name</p>
            <code className={styles.code}>Code here</code>
            <CopyTextButton text={`Code here`} />
          </div>

          <div className={styles.grid}>
            <a href="https://mrjokester.netlify.app/bdfd" className={styles.card}>
              <h2>BDFD Snippets</h2>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
