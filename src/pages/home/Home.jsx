import './Home.css'
import Stories from '../../components/stories/stories';
import Posts from '../../components/posts/posts';
import CreatePost from '../../components/createPost/CreatePost';
function Home() {
    return (
        <div className='home'>
            <Stories/>
            <CreatePost/>
            <Posts/>
        </div>
    );
}

export default Home;
