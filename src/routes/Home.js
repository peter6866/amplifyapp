import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Home () {
    return (
        <>
            <Navbar />
            <Hero
            cName="hero"
            heroImg="https://pbs.twimg.com/media/Fl6-dbpXoAQYeU4?format=jpg&name=large"
            title="lalala"
            text="baobao"
            url1="https://www.instagram.com/crystal.huang.0611/"
            btnClass="show"
            buttonText="Crystal"
            />
        </>
    )
}

export default Home;