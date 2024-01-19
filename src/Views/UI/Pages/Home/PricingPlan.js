import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useStyles } from './Style';
import DoneIcon from '@mui/icons-material/Done';
import { Link } from 'react-router-dom';
const PricingPlan = () => {
    return <div>
        <Container maxWidth="xl" sx={{ margin: { md: '100px auto', xs: '50px auto' } }}>
            <Typography textAlign="center" sx={{ fontWeight: "bold", fontSize: "48px", lineHeight: "70px", color: "#1b1b1b" }}>
                GRADES
            </Typography>
            <br /> <br />
            <PlanCard />
        </Container>
    </div>;
};

export default PricingPlan;
const ExplorerList = [
    { title: 'COMMUNICATION', },
    { title: 'COLLABORATION', },
    { title: 'CREATIVE THINKING', },
    { title: 'PROBLEM-SOLVING', },
    { title: 'FINANCIAL LITERACY', },
    { title: 'ENTREPRENEURSHIP', },
    { title: 'EMOTIONAL INTELLIGENCE', },
]
const Initiator = [
    { title: 'COMMUNICATION', },
    { title: 'COLLABORATION', },
    { title: 'CREATIVE THINKING', },
    { title: 'PROBLEM-SOLVING', },
    { title: 'FINANCIAL LITERACY', },
    { title: 'ENTREPRENEURSHIP', },
    { title: 'EMOTIONAL INTELLIGENCE', },
]
const Leader = [
    { title: 'COMMUNICATION', },
    { title: 'COLLABORATION', },
    { title: 'CREATIVE THINKING', },
    { title: 'PROBLEM-SOLVING', },
    { title: 'FINANCIAL LITERACY', },
    { title: 'ENTREPRENEURSHIP', },
    { title: 'EMOTIONAL INTELLIGENCE', },
]
const PlanCard = (props) => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.pricing_wrapper} >

                <Box className={classes.PlanCard}>
                    <Typography textAlign="center" sx={{ fontWeight: "600", fontSize: "39px", lineHeight: "59px", color: "#1b1b1b" }}>
                        Grade 4
                    </Typography>
                    <Typography gutterBottom textAlign="center" sx={{ fontWeight: "500", fontSize: "20px", lineHeight: "28px", color: "#1b1b1b" }}>
                        Foundation of 21st Century Skills
                    </Typography>
                    <br />
                    {ExplorerList.map((item, i) => (
                        <Box color="#37B57E" display="flex" alignItems="center" gap="20px" my="10px" >
                            <DoneIcon />
                            <Typography sx={{ fontWeight: "normal", fontSize: "16px", lineHeight: "28px", color: "#1b1b1b" }}>
                                {item.title}
                            </Typography>
                        </Box>
                    ))}
                    <br /><br />
                    <Box sx={{ marginTop: { md: '150px', xs: '0' } }} />
                </Box>
                {/* second card */}
                <Box className={classes.PlanCard}>
                    <Typography textAlign="center" sx={{ fontWeight: "600", fontSize: "39px", lineHeight: "59px", color: "#1b1b1b" }}>
                        Grade 5
                    </Typography>
                    <Typography gutterBottom textAlign="center" sx={{ fontWeight: "500", fontSize: "20px", lineHeight: "28px", color: "#1b1b1b" }}>
                        Application of 21st Century Skills
                    </Typography>
                   
                    <br />
                    {Initiator.map((item, i) => (
                        <Box color="#37B57E" display="flex" alignItems="center" gap="20px" my="10px" >
                            <DoneIcon />
                            <Typography sx={{ fontWeight: "normal", fontSize: "16px", lineHeight: "28px", color: "#1b1b1b" }}>
                                {item.title}
                            </Typography>
                        </Box>
                    ))}
                    <br /><br />
                    <Box sx={{ marginTop: { md: '35px', xs: '0' } }} />
                    
                </Box>
                {/* third card */}
                <Box className={classes.PlanCard}>
                    <Typography textAlign="center" sx={{ fontWeight: "600", fontSize: "39px", lineHeight: "59px", color: "#1b1b1b" }}>
                        Grade 6
                    </Typography>
                    <Typography gutterBottom textAlign="center" sx={{ fontWeight: "500", fontSize: "20px", lineHeight: "28px", color: "#1b1b1b" }}>
                        Mastery of 21st Century Skills
                    </Typography>
                    
                    <br />
                    {Leader.map((item, i) => (
                        <Box color="#37B57E" display="flex" alignItems="center" gap="20px" my="10px" >
                            <DoneIcon />
                            <Typography sx={{ fontWeight: "normal", fontSize: "16px", lineHeight: "28px", color: "#1b1b1b" }}>
                                {item.title}
                            </Typography>
                        </Box>
                    ))}
                    <br /><br />
                
                </Box>
            </Box>
        </>

    )
}