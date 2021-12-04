import { useParams } from "react-router-dom";
import GreekRhoPost from "./posts/Greekrho";
import ReactAppS3Post from "./posts/ReactAppS3";
import ReactRouterPost from "./posts/ReactRouter";
import CryptoMiningPost from "./posts/CryptoMining";
import ChaosGamePost from './posts/ChaosGame';
import SurvivorMontyHall from './posts/SurvivorMontyHall';

var components = {
    'greekrho': GreekRhoPost,
    'reactapps3': ReactAppS3Post,
    'reactrouter': ReactRouterPost,
    'cryptomining': CryptoMiningPost,
    'chaosgame': ChaosGamePost,
    'survivormontyhall': SurvivorMontyHall
}

function Post() {
    let { filename } = useParams();
    var MyComponent = components[filename];
    return (
        <MyComponent />
    );
}

export default Post;