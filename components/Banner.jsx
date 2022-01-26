import { Flex, Box, Text, Button } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';



function Banner({ imageUrl, purpose, title1, title2, desc1, desc2, linkName, buttonText }) {
    return (
        <Flex flexWrap='wrap' justifyContent='center' 
            alignItems='center' m={['10','14','20']}>
                <Image src={imageUrl} 
                    width={300} height={250} alt='banner' />
            <Box p="5">
                <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
                <Text fontSize="3xl" fontWeight="bold"> {title1} <br /> {title2} </Text>
                <Text fontSize="lg" paddingTop="3" paddingBottom="3" fontWeight="medium" color="gray.700">{desc1} <br /> {desc2} </Text>
                <Button fontSize="xl">
                    <Link href={linkName}>{buttonText}</Link>
               </Button>
            </Box>
        </Flex>
    )
}

export default Banner;
