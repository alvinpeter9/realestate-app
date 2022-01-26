import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill, BsThreeDotsVertical } from 'react-icons/bs';
import { GoVerified} from 'react-icons/go';
import millify from 'millify';
import DefaultImage from '../assets/img/house.jpg'


const Property = ({ property: { coverPhoto, price, rentFrequency, 
                    rooms, title, baths, area, isVerified, externalID} }) => (

    <Link href={`/property/${externalID}`} passHref>
    
    <Flex flexWrap="wrap" w='420' margin='auto' p="5" paddingTop="0px" justifyContent="flex-start" alignItems='center' cursor="pointer">
    <Box borderWidth='1px' 
        borderRadius='lg' 
        overflow='hidden'
        shadow='base'>
        <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width={350} height={200} alt='house' />
        <Box p='3'>
            <Box display='flex' alignItems='center'>
                {isVerified && <GoVerified color='green' />}
            <Flex alignItems="center" ml='2' p="1" justifyContent="space-between" w="250px" color="blue.400">
            {rooms}<FaBed/> <BsThreeDotsVertical color='green' /> {baths}<FaBath /> 
            <BsThreeDotsVertical color='green' /> {millify(area)} sqft <BsGridFill />
            </Flex>
            </Box>
            <Box mt='1' fontWeight='normal'  as='h4' lineHeight='tight'>
            {title.length > 30 ? title.substring(0, 30) + '...' : title}
            </Box>
            <Box fontWeight='semibold' fontSize='lg'>
                &#36;{millify(price*0.27)}
            <Box as='span' color='gray.600' fontSize='sm'>
            {rentFrequency && `/${rentFrequency}`}
            </Box>

            </Box>
        </Box>
    
    </Box>
    </Flex>
    </Link>
)

export default Property;