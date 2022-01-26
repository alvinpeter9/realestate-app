import { useState } from 'react';
import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, useColorModeValue, useColorMode, Switch, Flex, Box, Button, Spacer, IconButton } from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';



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
                       onClick={()=> setMenu(!menu)} variant='outline' color='green' />
                    <MenuList>
                    <Link href='/' passHref>
                        <MenuItem icon={<FcHome />}>Home</MenuItem>
                    </Link>
                    <Link href='/search' passHref>
                        <MenuItem icon={<BsSearch />}>Search</MenuItem>
                    </Link>
                    <Link href='/search?purpose=for-sale' passHref>
                        <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                    </Link>
                    <Link href='/search?purpose=for-rent' passHref>
                        <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
                    </Link>
                    </MenuList>
                </Menu>
            </Box>

        
         {/* [ Desktop ] */}
            <Box fontSize={["2xl", "3xl"]}color="blue.400" fontWeight="bold">
                <Link href="/">
                    HomeNg
                </Link>
            </Box>

        <Box display='flex' justifyContent='space-between' 
            alignItems='center'>
        
            <Flex
                display={['none', 'none', 'flex','flex']}
                justifyContent='space-evenly'>

                <Link href="/" passHref>
                    <Button
                        as="a"
                        mr='2rem'
                        variant="ghost"
                        aria-label="Home">
                        Home
                    </Button>
                </Link>

                <Link href="/search?purpose=for-sale" passHref>
                    <Button
                        as="a"
                        mr='2rem'
                        variant="ghost"
                        aria-label="for-sale">
                        Buy
                    </Button>
                </Link>

                <Link href="/search?purpose=for-rent" passHref>
                    <Button
                        as="a"
                        mr='2rem'
                        variant="ghost"
                        aria-label="for-rent">
                        Rent
                    </Button>
                </Link>

                <Link href='/search' passHref>
                    <Button
                        as="a"
                        mr='2rem'
                        variant="ghost"
                        aria-label="search">
                        Search
                    </Button>
                </Link>
                
            </Flex>
          {/* [ DarkMode Switch ] */}
          <Box>
            <Switch
                color="green"
                isChecked={isDark}
                onChange={toggleColorMode} />
        </Box>
        </Box>

    </Flex>
    )
}


export default Navbar;