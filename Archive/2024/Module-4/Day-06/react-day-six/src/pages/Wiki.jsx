import React, {useEffect} from 'react'
import './Wiki.css';

export default function Wiki() {

  return (
    <div className="container">
        <h1>Pokémon Overview</h1>
        <div className="section">
            <h2>Introduction</h2>
            <p>Pokémon, short for "Pocket Monsters," is a globally popular media franchise created by Satoshi Tajiri and Ken Sugimori, and is managed by The Pokémon Company, which is a consortium of three companies: Nintendo, Game Freak, and Creatures. The franchise was first introduced in 1996 with the release of Pokémon Red and Green (Blue in international releases) for the Game Boy. It has since expanded into a multi-billion dollar enterprise encompassing video games, trading card games, animated TV series, movies, merchandise, and more.</p>
        </div>
        <div className="section">
            <h2>The Pokémon World</h2>
            <p>The Pokémon world is inhabited by a diverse array of creatures known as Pokémon. These creatures can be captured and trained by humans known as Pokémon Trainers. Each Pokémon has its own unique characteristics, including different types (such as Fire, Water, Grass, Electric, etc.), abilities, and stats. Trainers catch Pokémon using devices called Poké Balls and train them to battle other Pokémon.</p>
        </div>
        <div className="section">
            <h2>Main Series Video Games</h2>
            <p>The core of the Pokémon franchise is its series of role-playing video games (RPGs). These games typically follow a young Trainer's journey to become a Pokémon Master by capturing and training Pokémon, defeating Gym Leaders, thwarting the schemes of villainous teams, and ultimately challenging the Elite Four and the Champion. The main series games are released in paired versions, with slight differences between the two, encouraging trading between players.</p>
            <ul>
                <li>Pokémon Red and Blue (1996)</li>
                <li>Pokémon Gold and Silver (1999)</li>
                <li>Pokémon Ruby and Sapphire (2002)</li>
                <li>Pokémon Diamond and Pearl (2006)</li>
                <li>Pokémon Black and White (2010)</li>
                <li>Pokémon X and Y (2013)</li>
                <li>Pokémon Sun and Moon (2016)</li>
                <li>Pokémon Sword and Shield (2019)</li>
                <li>Pokémon Scarlet and Violet (2022)</li>
            </ul>
        </div>
        <div className="section">
            <h2>Spin-Off Games</h2>
            <p>Beyond the main series, Pokémon has spawned numerous spin-off games across various genres. These include puzzle games like Pokémon Puzzle League, dungeon crawlers like Pokémon Mystery Dungeon, augmented reality games like Pokémon GO, and many more.</p>
        </div>
        <div className="section">
            <h2>Trading Card Game</h2>
            <p>The Pokémon Trading Card Game (TCG) is a collectible card game that allows players to build decks and compete against each other using Pokémon cards. Each card represents a Pokémon, Trainer, or energy, and players use these cards to battle and try to defeat their opponent's Pokémon.</p>
        </div>
        <div className="section">
            <h2>Animated Series and Movies</h2>
            <p>The Pokémon animated series debuted in 1997 and follows the adventures of Ash Ketchum, a Pokémon Trainer from Pallet Town, and his Pikachu. The show has become a cultural phenomenon, airing over 1,000 episodes across multiple series. Additionally, there have been over 20 animated movies released, each expanding on the world of Pokémon and often introducing new characters and legendary Pokémon.</p>
        </div>
        <div className="section">
            <h2>Merchandise and Cultural Impact</h2>
            <p>The Pokémon brand extends far beyond games and TV shows. It includes an extensive range of merchandise, from toys and clothing to home decor and food products. The franchise has also made a significant impact on popular culture, inspiring everything from art and music to academic studies and public events.</p>
        </div>
        <div className="section">
            <h2>Competitive Play</h2>
            <p>Pokémon has a vibrant competitive scene, including the official Pokémon Championship Series, which features tournaments for both the video games and the trading card game. These competitions draw players from around the world, culminating in the annual Pokémon World Championships.</p>
        </div>
        <div className="section">
            <h2>Conclusion</h2>
            <p>Pokémon has grown from a simple idea into a worldwide cultural icon, beloved by millions of fans of all ages. Its enduring popularity is a testament to the creativity and dedication of its creators and the loyalty of its fanbase. Whether through games, cards, shows, or merchandise, Pokémon continues to capture the imaginations of people around the globe.</p>
        </div>
    </div>
  )
}
