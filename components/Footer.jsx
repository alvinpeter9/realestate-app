import { Box, Text } from '@chakra-ui/react';
import ScrollButton from './ScrollTop';

function Footer() {
    return (
        <Box textAlign="center" mt='10' p="10" color="gray.600" borderTop="1px" borderColor="gray.100">
             {new Date().getFullYear()} HomeNg, Inc
             <Text mt='1' display='block'>Made With &#10084; By Alvin</Text>
             <ScrollButton />
        </Box>
    )
}

export default Footer;
