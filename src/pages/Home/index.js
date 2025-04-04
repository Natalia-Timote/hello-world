import Banner from "components/Banner";
import styles from "./Home.module.css";
import posts from "json/posts.json";
import Post from "components/Post";

function Home() {
    return (
        <main>
            <Banner />
            
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Post post={post} /> 
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Home;
