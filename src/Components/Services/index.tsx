import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import theme from "../../theme";
import Denting from '../../Assets/Images/Services/denting.jpg'
import AirConditioning from '../../Assets/Images/Services/AirConditioning.jpg'
import Battery from '../../Assets/Images/Services/battery.jpg'
import Brakes from '../../Assets/Images/Services/brakes.jpg'
import EngineCheckUp from '../../Assets/Images/Services/engineCheckUp.jpg'
import Exhaust from '../../Assets/Images/Services/exhaust.jpg'
import OilAndFilter from '../../Assets/Images/Services/oilAndFilter.jpg'
import Painting from '../../Assets/Images/Services/painting.jpg'
import SteeringAndSuspension from '../../Assets/Images/Services/steeringAndSuspension.jpg'


const Services = () => {
    const servicesList: any = {
        "Oil and Filter Change": {
            "description": "Essential for lubricating the engine’s moving parts, reducing friction, and preventing damage. Regular oil changes keep the engine running smoothly and efficiently.",
            "image": OilAndFilter
        },
        "Air Conditioning Services": {
            "description": "Involves checking and refilling refrigerant levels, inspecting the AC compressor, and ensuring the system cools effectively, providing comfort during hot weather.",
            "image": AirConditioning
        },
        "Engine Check-up and Tune-up": {
            "description": "A comprehensive check of the engine’s components to ensure optimal performance and fuel efficiency. It may include replacing spark plugs, air filters, and other parts as needed.",
            "image": EngineCheckUp
        },
        "Brake Services": {
            "description": " Includes checking brake pads, discs, and fluid levels. It’s crucial for safety to ensure that brakes are responsive and in good condition.",
            "image": Brakes
        },
        "Battery Service & Replacement": {
            "description": "Testing the battery’s charge and health, ensuring reliable starts, and replacing it if necessary to avoid breakdowns.",
            "image": Battery
        },
        "Mufflers and Exhaust": {
            "description": "Inspecting the exhaust system for leaks, damage, and efficiency, which affects the vehicle’s performance and environmental emissions.",
            "image": Exhaust
        },
        "Steering and Suspension": {
            "description": "Ensuring the steering system is responsive and the suspension provides a smooth ride by checking components like shock absorbers and struts.",
            "image": SteeringAndSuspension
        },
        "Car Painting Services": {
            "description": "This involves repainting or touch-up work to restore a car’s paint job to its original condition. It can range from spot painting, where only small areas are painted, to a full repaint if the car has extensive damage or fading. The process usually includes surface preparation, color matching, painting, and finishing for a seamless look.",
            "image": Painting
        },
        "Car Denting Services": {
            "description": "Denting services address various body damages such as dents, dings, and creases. Techniques like Paintless Dent Removal (PDR) can fix minor dents without needing to repaint the affected area. For larger dents, the process may involve filling, sanding, and repainting to restore the vehicle’s smooth surface.",
            "image": Denting
        }
    }

    const cardStyle = {
        background: theme.palette.primary.main,
        display: 'flex',
        marginTop: 4,
        borderRadius: 0,
        opacity: "85%"
    }

    const mobileCardStyle = {
        background: theme.palette.primary.main,
        marginTop: 4,
        borderRadius: 0,
        opacity: "95%"
    }

    const serviceTitle = {
        color: theme.palette.secondary.main,
        fontWeight: 700,
        fontSize: 25
    }

    const serviceDescription = {
        color: theme.palette.primary.contrastText,
        fontWeight: 500,
        marginTop: 3,
        fontSize: 20,
        marginBottom: 1
    }

    const desktopView = {
        display: { xs: 'none', md: 'block' }
    }

    const mobileView = {
        display: { xs: 'block', md: 'none' }
    }

    const serviceImageStyle = {
        width: "38%",
        textShadow: "3px 3px 0 black",
    }

    return <>


        {/* Window View */}
        <Box sx={desktopView}>
            {
                Object.keys(servicesList).map((service, key) => (
                    <Card
                        raised
                        sx={cardStyle}
                        key={"Services" + key.toString()}
                    >
                        <CardMedia
                            component="img"
                            sx={serviceImageStyle}
                            image={servicesList[service]['image']}
                            alt={service}
                        />
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <CardContent sx={{
                                padding: 3,
                            }}>
                                <Typography sx={serviceTitle}>
                                    {service}
                                </Typography>
                                <Typography sx={serviceDescription}>
                                    {servicesList[service]['description']}
                                </Typography>
                            </CardContent>
                            {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            </Box> */}
                        </Box>
                    </Card>
                ))
            }
        </Box>

        {/* Mobile View */}
        <Box sx={mobileView}>
            {
                Object.keys(servicesList).map((service, key) => (
                    <Card
                        raised
                        sx={mobileCardStyle}
                    >
                        <CardMedia
                            component="img"
                            image={servicesList[service]['image']}
                            alt={service}
                        />
                        <Box>
                            <CardContent sx={{
                                padding: 5,
                            }}>
                                <Typography variant="h4" sx={serviceTitle}>
                                    {service}
                                </Typography>
                                <Typography variant="h5" color="text.secondary" sx={serviceDescription}>
                                    {servicesList[service]['description']}
                                </Typography>
                            </CardContent>
                            {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            </Box> */}
                        </Box>
                    </Card>
                ))
            }
        </Box>
    </>
}

export default Services;