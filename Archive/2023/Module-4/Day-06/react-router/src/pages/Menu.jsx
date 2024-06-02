import { Box, Typography } from '@mui/material';
import Nav from '../components/Nav';
import { pokemonData } from '../pokemonData';

const Menu = () => {
	return (
		<div>
			{pokemonData.map(pokemon => (
				<>
					<div>{pokemon.name}</div>
					<img src={pokemon.image} />
				</>
			))}
		</div>
	);
};

export default Menu;
