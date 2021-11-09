import React from 'react';
import { Box, Image, AspectRatio, Text, Button } from '@chakra-ui/react';

// flex grow worked in this box: style={{flexGrow: 1, backgroundColor: 'red'}}

export default function Home() {
	return (
		<Box>
			<Box>
				<AspectRatio maxW="400px" ratio={4 / 6}>
					<Image src="/img/landing-page-girl.png" alt="girl enjoying music" objectFit="cover" />
				</AspectRatio>
			</Box>
			<Box>
				<Text fontSize="4xl">Be Inspired</Text>
				<Text fontSize="md">Dedicated to people who left their mark</Text>
				<Button size="md" bg="#1762A7" variant="solid">
					Enter
				</Button>
			</Box>
		</Box>
	);
}
