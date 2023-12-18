import React from 'react';
import { useParams } from 'react-router-dom';
import MartHeader from '../Mart/MartHeader';
import Footer from '../../Components/Footer';

function RestrauntPage() {
    const { restraunt } = useParams()
    return (
        <div>
            <MartHeader/>
<div>
    
</div>

            <Footer/>
        </div>
    );
}

export default RestrauntPage;