import { FormLabel, Box, Flex, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input, Textarea, Avatar } from "@chakra-ui/react";
import React, { useState } from "react";

export function PostModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inputValue, setInputValue] = useState(""); 
  const [initialInputValue, setInitialInputValue] = useState(""); 

  const finalRef = React.useRef(null);

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleInputClick = () => {
    setInitialInputValue(inputValue); 
    onOpen(); 
  };

  const handleCancel = () => {
    setInputValue(initialInputValue); 
    onClose(); 
  };

  return (
    <>
      <Flex px={5} alignItems={"center"} my={5}>
        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
        <Box width={400} mx={5}>
          <Input
            placeholder="What is happening ?!"
            value={inputValue}
            onChange={handleInputChange}
            borderColor={'whiteAlpha.500'}
            onClick={handleInputClick} 
          />
        </Box>

        <Box me={3}>
          <FormLabel htmlFor="input-image-home">
            <i className="fa-regular fa-image"></i>
          </FormLabel>
          <input type="file" id="input-image-home" hidden />
        </Box>

        <Box>
          <Button colorScheme='whatsapp' borderRadius="full" size='sm' px={5}>Post</Button>
        </Box>
        
      </Flex>

      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg='gray.800' textColor={'white'}>
          <ModalHeader>Create Post</ModalHeader>
          
          <ModalBody>
            <Textarea
              placeholder="What is happening ?!"
              resize={"none"}
              height={"200px"}
              value={inputValue}
              onChange={handleInputChange}
              ref={finalRef} 
            ></Textarea>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onClose}>
              Save
            </Button>
            <Button variant="outline" colorScheme="green" onClick={handleCancel}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}