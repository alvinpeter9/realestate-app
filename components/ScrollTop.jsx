import React, {useState, useEffect} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import { Button, Box } from '@chakra-ui/react';



const ScrollButton = () =>{
    const [visible, setVisible] = useState(false);

    const scrollToTop = () =>{
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    };

    useEffect(function mount() {

    const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	    setVisible(true)
	}
	else if (scrolled <= 300){
	    setVisible(false)
	}};

    window.addEventListener('scroll', toggleVisible);

    return function unMount() {
      window.removeEventListener('scroll', toggleVisible);
    };
  });


return (
    <Box pos='fixed' right='1.5' bottom='5rem'
        style={{display: visible ? 'inline' : 'none'}}>
        <Button padding='0.5'>
            <FaArrowCircleUp onClick={scrollToTop} />
        </Button>
    </Box>
);
}

export default ScrollButton;
