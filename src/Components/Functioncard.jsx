import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import bubble from '../assets/bubble.png'
import linear from '../assets/linear_search.jpg'
import { Box } from "@mui/system";
function Functioncard() {
    return (
        <>
            <Card style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'fitContent', marginTop: '10px' }}>
                <Card.Img variant="top" src={bubble} style={{ width: '60%', paddingTop: '10px' }} />
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>BUBBLE SORT</Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
                        Try this amazing visuallization for bubble sort.
                    </Card.Text>
                    <Box textAlign='center' style={{ width: 'fitContent' }}>
                        <Button variant="primary" >
                            TRY
                        </Button>
                    </Box>
                </Card.Body>
            </Card>
            <Card style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'fitContent', marginTop: '10px' }}>
                <Card.Img variant="top" src={linear} style={{ width: '60%', paddingTop: '10px' }} />
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }} >Linear Search</Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
                        Try this amazing visuallization for linear search.
                    </Card.Text>
                    <Box textAlign='center' style={{ width: 'fitContent' }}>
                        <Button variant="primary" >
                            TRY
                        </Button>
                    </Box>
                </Card.Body>
            </Card>
        </>
    )
}

export default Functioncard;