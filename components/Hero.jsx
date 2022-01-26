import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { BsChevronDoubleDown } from 'react-icons/bs';
import BannerImage from '../assets/img/banner.jpg';


function Hero() {
    return (
        <section className="hero__section">
        <Box m='auto' mt={['8rem','5rem']} ml={['1.5rem','3rem']} textTransform='uppercase' 
            color='white' textAlign='justify' letterSpacing={['0','2']}>

            <Text fontSize={['medium',"lg",'larger']}
                fontWeight="medium">whether you&apos;re
            </Text>

            <Text fontSize={["3xl",'5xl']} fontWeight={['bold',"extrabold"]} letterSpacing={['3','5']}>
                <span className='text_shadow'>
                    buying, selling or <br />
                    renting a house
                </span>
            </Text>

            <Text fontSize={['lg',"larger",'xl']} paddingTop="3" paddingBottom="3" 
                fontWeight="medium" letterSpacing={['0','2']}>
                    we can help you move forward. 
            </Text>

            <Button fontSize="xl" bgColor='blue.400' p='1.6rem'>
                Explore  <BsChevronDoubleDown className='home__icon' />
            </Button>
        </Box>
        <Box display='flex' borderRadius='lg' bgColor='#1a202c' columnGap='.5rem' pos='absolute' 
            right='1.5rem' color='white' bottom='2rem' padding='1rem' w='228px'>
            <Text display='block' margin='1.5' fontSize='sm'>Your comfort is our priority.</Text> 
            <Box className='home__info-overlay'>
            <Image src={BannerImage} alt='banner' className='home__info-img' />
            </Box>
            
        </Box>
        
        </section>
    )
}

export default Hero;
