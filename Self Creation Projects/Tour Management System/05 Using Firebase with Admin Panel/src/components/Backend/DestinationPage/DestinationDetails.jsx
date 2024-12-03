import { Box, CardBody, Heading, Img, Stack, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import Modal from '../../UI/Modal.jsx';
import DestinationAction from './DestinationAction.jsx';
import './DestinationPage.css';

export default function DestinationDescription({ destination, onDelete, onUpdate }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    function handleConfirmDelete() {
        onDelete(destination.key);
        onClose();
    }

    const deleteDialogBox = (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            children='destination'
            onConfirm={handleConfirmDelete}
        />
    );

    return (
        <Box>
            {deleteDialogBox}
            <CardBody p={0}>
                <Box className="desti-img-overlay">
                    <Img
                        src={destination.image}
                        borderTopRadius='6px'
                        height='20rem'
                        width='100%'
                        transition= 'all 0.5s linear' />
                    <Box className="desti-overlay"></Box>
                </Box>
                <Stack spacing='3' p={4}>
                    <Heading size='md'>{destination.name}</Heading>
                    <Text className="destination_details">{destination.details}</Text>
                </Stack>
            </CardBody>
            <DestinationAction destination={destination} onOpen={onOpen} onUpdate={onUpdate} />
        </Box>
    );
}
