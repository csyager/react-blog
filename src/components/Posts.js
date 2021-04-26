import Card from './Card';
import greekrhoImage from '../images/posts/greekrho.png';
import reactImage from '../images/posts/react.png';
import reactrouterlogoImage from '../images/posts/reactrouterlogo.png';

function Posts() {
    return (
        <div className="container">
            <h1>Posts</h1>
            <div className="card-columns">
                <Card image="" title="How to Mine Ethereum Using Phoenix Miner and Ethermine" filename='posts/cryptomining' date="Apr 26, 2021"
                    text='A guide for configuring and running PhoenixMiner to easily mine cryptocurrencies' />
                <Card image={greekrhoImage} title="GreekRho Beta Launch" filename='posts/greekrho' date="Sep 19, 2020"
                    text='Announcing the beta launch of our Greek organization management tool, GreekRho' />
                <Card image={reactImage} title="Hosting a React App on S3" filename='posts/reactapps3' date="Apr 25, 2021"
                    text='A short tutorial on how to host a React App on AWS S3' />
                <Card image={reactrouterlogoImage} title="Configuring Routing in a React App with react-router" filename='posts/reactrouter' date="Apr 25, 2021"
                    text='A short tutorial on how to configure routing for a React app using react-router' />
                
            </div>
        </div>
    )
}

export default Posts;