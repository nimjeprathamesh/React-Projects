import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTheme from '../../../hooks/useTheme.jsx';
import { usePackageContext } from '../../../store/PackagesContext.jsx';
import InquiryForm from '../Inquiry_Form/InquiryForm';
import '../Inquiry_Form/PackageInquiryForm.css';
import PackageDescription from './InnerArea/PackageDescription';
import PackageList from './InnerArea/PackageList';
import './PackageDetails.css';
import PackageDetailsHeader from './PackageDetailsHeader/PackageDetailsHeader';

export default function PackageDetails() {
    const {packagesData} = useLoaderData();
    const {initialLoad, excludeName} = usePackageContext();
    const {themeCss} = useTheme();

    return (
        <Box>
            <PackageDetailsHeader packages={packagesData} />
            <Box id="packageDetailsPage">
                <Flex className="inner-area" style={themeCss} justifyContent='space-between'>
                    <PackageDescription packages={packagesData} />
                    <Box className='inner-box-1'>
                        <InquiryForm />
                        {!initialLoad && <PackageList excludeName={excludeName} packages={packagesData} />}
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}