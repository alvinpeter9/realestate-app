import { Box, Text } from '@chakra-ui/react';
import ScrollButton from './ScrollTop';

function Footer() {
    return (
        <Box textAlign="center" mt='10' p="10" color="gray.600" borderTop="1px" borderColor="gray.100">
             2021 HomeNg, Inc
             <Text display='block'>With &#10084; from Alvin</Text>
             <ScrollButton />
        </Box>
    )
}

export default Footer;
