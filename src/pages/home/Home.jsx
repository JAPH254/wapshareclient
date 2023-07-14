import './home.css'
import Stories from '../../components/stories/stories';
import Posts from '../../components/posts/posts';
function Home() {
    return (
        <div className='home'>
            <Stories/>
            <Posts/>
        </div>
    );
}

export default Home;