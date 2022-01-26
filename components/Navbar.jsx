import { useState } from 'react';
import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, useColorMode, Switch, Flex, Box, Button, Spacer, IconButton } from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';



export const Btn = ({link, linkName}) => (
    <Link href={link} passHref>
        <Button
            as="a"
            mr='2rem'
            variant="ghost"
            aria-label="Home">
            {linkName}
        </Button>
    </Link>
);



const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'
    const [display, changeDisplay] = useState('none');
    const [menu, setMenu ] = useState(true)


    return (
    <Flex padding='3' marginTop='0'
        alignItems='center' zIndex={5}
        justifyContent='space-between'
        w='full'>

        {/* [ Mobile Menu ] */}
            <Box aria-label="Open Menu"
                size="lg"
                onClick={() => changeDisplay('flex')}
                display={['flex', 'flex', 'none', 'none']}>
                <Menu>
                    <MenuButton as={IconButton} icon={menu? <GiHamburgerMenu /> : <AiOutlineClose />} 
                       onClick={()=> setMenu(!menu)} variant='outline' color='blue.400' />
                    <MenuList>
                    <Link href='/' passHref>
                        <MenuItem onClick={()=> setMenu(!menu)} icon={<FcHome />}>Home</MenuItem>
                    </Link>
                    <Link href='/search' passHref>
                        <MenuItem onClick={()=> setMenu(!menu)} icon={<BsSearch />}>Search</MenuItem>
                    </Link>
                    <Link href='/search?purpose=for-sale' passHref>
                        <MenuItem onClick={()=> setMenu(!menu)} icon={<FcAbout />}>Buy Property</MenuItem>
                    </Link>
                    <Link href='/search?purpose=for-rent' passHref>
                        <MenuItem onClick={()=> setMenu(!menu)} icon={<FiKey />}>Rent Property</MenuItem>
                    </Link>
                    </MenuList>
                </Menu>
            </Box>

        
         {/* [ Desktop ] */}
            <Box fontSize={["2xl", "3xl"]} color="blue.400" fontWeight="bold">
                <Link href="/">
                    HomeNg
                </Link>
            </Box>

        <Box display='flex' justifyContent='space-between' 
            alignItems='center'>
        
            <Flex
                display={['none', 'none', 'flex','flex']}
                justifyContent='space-evenly'>

                <Btn link="/" linkName="Home" />

                <Btn link="/search?purpose=for-sale" linkName="Buy" />

                <Btn link="/search?purpose=for-rent" linkName="Rent" />

                <Btn link="/search" linkName="Search" />
                
            </Flex>
          {/* [ DarkMode Switch ] */}
          <Box>
            <Switch
                color="yellow"
                isChecked={isDark}
                onChange={toggleColorMode} />
        </Box>
        </Box>

    </Flex>
    )
}


export default Navbar;