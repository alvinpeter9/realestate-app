import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill, BsThreeDotsVertical } from 'react-icons/bs';
import { GoVerified} from 'react-icons/go';
import millify from 'millify';
import { baseUrl, fetchApi } from '../../utils/fetchApi';
import ImageScrollbar from '../../components/ImageScrollbar';


const PropertyDetails = ({ propertyDetails: { photos, price, rentFrequency, agency, description, 
    rooms, title, baths, area, isVerified, type, purpose, furnishingStatus, amenities }}) => (
    <Box maxW='1000px' margin='auto' p='4'>
        {photos && <ImageScrollbar data={photos} />}
        <Box w='full' p='6'>
            <Flex pt='2' alignItems='center' flexDirection='column'>
                <Box bgColor='gray.50' w='full' textAlign='center' p={2}>
                    <Text fontSize='lg' mb='2' fontWeight='bold'> 
                        { title }
                    </Text>
                </Box>

                <Box display='flex' m='auto' color='green.400' w='full' p={2} alignItems='center' justifyContent='space-evenly'>
                    {isVerified && <GoVerified />}
                
                    <Flex p={2} alignItems="center" justifyContent="space-evenly" w={['200px', '400px'] }color="blue.400" fontWeight='normal' fontSize={['md','lg']}>
                        {rooms}<FaBed/> <BsThreeDotsVertical color='green' /> {baths}<FaBath /> 
                        <BsThreeDotsVertical color='green' /> {millify(area)} sqft <BsGridFill />
                    </Flex>
                </Box>
                <Box bgColor='gray.50' fontWeight={['semibold', 'bold', 'extrabold']} fontSize='lg' w='full' p={2} textAlign='center'>
                        &#36;{millify(price*0.27)}
                    <Box as='span' color='gray.600' fontSize='sm'>
                        {rentFrequency && `/${rentFrequency}`}
                    </Box>
                </Box>
                <Box mt='2' mb='2'>
                    <Text lineHeight='2' color='gray.600'>
                        { description }
                    </Text>
                </Box>
                <Flex bgColor='gray.50' flexWrap='wrap' textTransform='uppercase' justifyContent='space-between'>
                    <Flex justifyContent='space-between' w={['280px','400px', '600px']} borderBottom='1px' borderColor='gray.100' p='3'>
                        <Text>Type</Text>
                        <Text fontWeight='bold'>{ type }</Text>
                    </Flex>
                </Flex>
                <Flex flexWrap='wrap' textTransform='uppercase' justifyContent='space-between'>
                    <Flex justifyContent='space-between' w={['280px','400px', '600px']} borderBottom='1px' borderColor='gray.100' p='3'>
                        <Text>Purpose</Text>
                        <Text fontWeight='bold'>{ purpose }</Text>
                    </Flex>
                </Flex>
                     { furnishingStatus && (
                    <Flex bgColor='gray.50' flexWrap='wrap' textTransform='uppercase' justifyContent='space-between'>
                    <Flex justifyContent='space-between' w={['280px','400px', '600px']} borderBottom='1px' borderColor='gray.100' p='3'>
                        <Text>Furnishing Status</Text>
                        <Text fontWeight='bold'>{ furnishingStatus }</Text>
                    </Flex>
                </Flex>
                ) }
            </Flex>
            <Box>
                {amenities.length && <Text fontSize='2xl' fontWeight='black' marginTop='5'>Facilites:</Text>}
                <Flex flexWrap='wrap'>
                     {amenities?.map((item) => (
                        item?.amenities?.map((amenity) => (
                            <Text key={amenity.text} fontWeight='bold' color='blue.400' fontSize='l' p='2' bg='gray.200' m='1' borderRadius='5'>
                              {amenity.text}
                            </Text>
              ))
          ))}
        </Flex>
    </Box>
        </Box>
    </Box>
);

export default PropertyDetails;


export async function getServerSideProps({ params: { id } }) {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
    
    return {
      props: {
        propertyDetails: data,
      },
    };
  }