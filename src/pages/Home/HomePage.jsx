import useHandleConnection from '@services/hooks/useHandleConnection';
import './home-page.scss';
import { WorldImage } from '@global';
import { LoaderSection } from '@sections';

function HomePage() {
    const { handleConnection, loading } = useHandleConnection();

    return (
        <div className="home-page">
            <div className="home-description">
                <h1>Get your track</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Perspiciatis tempora aut dolores. Enim vitae aliquam fuga
                    iusto ex sapiente ad dolorem rem ipsam explicabo
                    consequuntur nostrum harum, saepe quo accusantium?
                </p>
                <button onClick={handleConnection}> Connect </button>
            </div>
            <div className="home-image">
                <WorldImage />
            </div>
            {loading && <LoaderSection />}
        </div>
    );
}

export default HomePage;
